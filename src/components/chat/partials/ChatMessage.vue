<template>
    <div class="chat-message chat-message__receiver">
        <div class="chat-message__message">
            {{ mesasge.text }}
            <span class="chat-message__time-stamp">
                {{ mesasge.timeStamp }}
            </span>
        </div>    
    </div>
</template>
<script>
export default {
    name: 'ChatMessage',
    props: {
        mesasge: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>