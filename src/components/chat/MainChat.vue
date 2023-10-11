<template>
    <div class="main-chat">
        <div class="main-chat__header">
            <chat-header :userDetails="selectedUser"/>
        </div>
        <div class="main-chat__body">
            <div v-for="(mesasge, index) in sampleMessages" :key="index">
                <chat-message :mesasge="mesasge"/>
            </div>
        </div>
        <div class="main-chat__footer">
            <input v-model="message" type="text" placeholder="Type a message" @keyup.enter="sendMessage">
        </div>
    </div>
</template>
<script>
import ChatHeader from './ChatHeader.vue'
import ChatMessage from './partials/ChatMessage.vue'
export default {
    name: 'MainChat',
    components: {
        ChatHeader,
        ChatMessage
    },
    props: {
        selectedUser: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return{
            sampleMessages: [
                {
                    user_id: 1,
                    text: 'Test Message',
                    timeStamp: '11:34'
                },
                {
                    user_id: 1,
                    text: 'Test Message',
                    timeStamp: '15:23'
                },
                {
                    user_id: 1,
                    text: 'Test Message',
                    timeStamp: '17:23'
                },
                {
                    user_id: 1,
                    text: 'Test Message',
                    timeStamp: '18:09'
                }
            ],
            message: ''
        }
    },
    methods: {
        sendMessage () {
            const payload = {
                user_id: 1,
                text: this.message,
                timeStamp: this.getCurrentTime()
            }
            this.sampleMessages.push(payload)
            this.message = ''
        },
        getCurrentTime() {
            const now = new Date()
            const hours = now.getHours().toString().padStart(2, '0')
            const minutes = now.getMinutes().toString().padStart(2, '0')

            return `${hours}:${minutes}`;
        }
    }
}
</script>