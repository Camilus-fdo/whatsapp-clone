<template>
    <div class="root-contact" :class="{ 'root-contact-active': isActive }" @click="openChat">
        <avatar username="Niroshan Fernando" :size="40"></avatar>
        <div class="root-contact__user-info">
            <div class="root-contact__user-name">
                {{ trimmedUserName }}
            </div>
            <small class="root-contact__last-message">
                {{ trimmedLastMessage }}
            </small>
        </div>
    </div>
</template>
<script>
import Avatar from 'vue-avatar'

export default {
    name: 'RootContact',
    components : {
        Avatar
    },
    props: {
        isActive: Boolean,
        index: {
            required: true
        },
        userId: {
            type: Number,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        lastMessage: {
            type: String,
            default: ''
        }
    },
    computed: {
        trimmedUserName() {
            return this.userName.length > 25 ? `${this.userName.slice(0, 25)}...` : this.userName;
        },
        trimmedLastMessage() {
            return this.lastMessage.length > 25 ? `${this.lastMessage.slice(0, 25)}...` : this.lastMessage;
        }
    },
    methods: {
        openChat() {
            this.$emit('openChat', {user_id:this.userId, name: this.userName, index: this.index})
        }
    }
}
</script>