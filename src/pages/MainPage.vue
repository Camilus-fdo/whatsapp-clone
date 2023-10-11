<template>
    <div class="container">
      <div class="column col-4">
        <main-side-bar :contactList="usersList"  @openChat="openChat"/>
      </div>
      <div class="column col-8">
        <main-chat :selectedUser="selectedUser"/>
      </div>
    </div>
</template>
<script>
import MainSideBar from '../components/sidebar/MainSideBar.vue'
import MainChat from '../components/chat/MainChat.vue'
export default {
    name: 'MainPage',
    components: {
        MainSideBar,
        MainChat
    },
    data() {
      return {
        selectedUser: '',
        usersList: [
          { 
            id: 1,
            name: 'Niroshan Fernando',
            lastMessage: 'This is Last message from Hiruni'
          },
          { 
            id: 2,
            name: 'Sarada',
            lastMessage: 'This is Last message from Hiruni'
          },{ 
            id: 3,
            name: 'Hiruni',
            lastMessage: 'This is Last message from Hiruni'
          },{ 
            id: 4,
            name: 'Athula',
            lastMessage: 'This is Last message from Hiruni'
          }
        ]
      }
    },
    methods:{
      openChat(data) {
        this.selectedUser = data
      }
    }
}
</script>
