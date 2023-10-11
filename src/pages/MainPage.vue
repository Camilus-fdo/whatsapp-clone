<template>
    <div class="container">
      <button class="toggle-sidebar-btn" @click="toggleSidebar">
        <i class="pi pi-align-justify"></i>
      </button>
      <div class="column col-4" :class="[isSidebarVisible ? 'show-side-bar' : 'show-side-bar-hidden']">
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
        isSidebarVisible: false,
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
      },

      toggleSidebar() {
        this.isSidebarVisible = !this.isSidebarVisible;
      }
    }
}
</script>
