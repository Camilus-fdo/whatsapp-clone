<template>
    <div class="side-bar-header">
        <avatar username="Niroshan Fernando" :size="40"></avatar>
        <div class="side-bar-header__right" @click="toggleDropdown">
            <i class="pi pi-ellipsis-v"></i>
            <div class="side-bar-header__dropdown" v-if="isDropdownOpen">
                <div class="side-bar-header__dropdown-button" @click="logout">Logout</div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Avatar from 'vue-avatar'
import utils from '@/utils'

export default {
    name: 'SideBarHeader',
    components: {
        Avatar
    },
    data() {
        return {
            isDropdownOpen: false
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        logout() {
            utils.removeLocalToken()
            this.$router.push({ name: 'login' })
        }
    }
}
</script>