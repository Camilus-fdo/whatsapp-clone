<template>
    <div class="main-side-bar">
        <side-bar-header />
        <div class="main-side-bar__search">
            <div class="main-side-bar__search-container">
                <i class="pi pi-search main-side-bar__search-icon"></i>
                <input type="text" placeholder="Search or start a new chat">
            </div>
        </div>
        <chat-list :chatList="contactList" @openChat="openChat"/>
    </div>
</template>
<script>
import SideBarHeader from './SideBarHeader.vue';
import ChatList from './ChatList.vue';
export default {
    name: 'MainSideBar',
    props: {
        contactList: {
            type: Array,
            required: true
        }
    },
    components: {
        SideBarHeader,
        ChatList
    },
    methods: {
        openChat (data) {
            this.$emit('openChat', data)
        }
    }
}
</script>