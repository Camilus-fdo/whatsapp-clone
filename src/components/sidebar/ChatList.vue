<template>
    <div class="chat-list">
        <div v-for="(chat, index) in chatList" :key="index">
            <root-contact :userId="chat.id" :userName="chat.name" :index="index" :is-active="activeIndex === index" :lastMessage="chat.lastMessage" @openChat="openChat"/>
        </div>
        
    </div>
</template>
<script>
import RootContact from './partials/RootContact.vue'
export default {
    name: 'ChatList',
    components: {
        RootContact
    },
    props: {
        chatList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeIndex: null
        }
    },
    methods: {
        openChat(data) {
            this.activeIndex = this.activeIndex === data.index ? null : data.index;
            this.$emit('openChat', data)
        }
    }
}
</script>