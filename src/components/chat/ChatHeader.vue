<template>
    <div class="chat-header">
        <avatar username="Niroshan Fernando" :size="40"></avatar>
        <div class="chat-header__user-info">
            <div class="chat-header__user-name">
                {{ userDetails.name }}
            </div>
            <small v-if="userDetails.name" class="chat-header__last-seen">
                Last Seen ...
            </small>
        </div>
        <div class="chat-header__right">
            <i class="pi pi-ellipsis-v"></i>
        </div>
    </div>
</template>
<script>
import Avatar from 'vue-avatar'
export default {
    name: 'ChatHeader',
    components: {
        Avatar
    },
    props: {
        userDetails: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>