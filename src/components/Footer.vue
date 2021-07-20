<template>
    <footer>
        <a target="_blank" class="socialLink" v-for="(socialLink, index) in socialLinks" :key="index" :href="socialLink.link">
            <img :src="socialLink.icon" :alt="socialLink.label" :title="socialLink.label">
        </a>
    </footer>
</template>
<script>

import api from '@/services/api.js';

export default {
    name: 'Footer',
    data(){
        return {
            socialLinks: []
        }
    },
    mounted(){
        api.get('/social-links.json').then(response => {
            this.socialLinks = response.data;            
        })
    }
}// tempo pausa 1:08 
</script>
<style scoped>
    footer {
        z-index: 9;
        height: 60px;
        widows: 100%;
        background-color: var(--color-background-nav);
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .socialLink{
        border:  2px solid var(--color-text-light);
        border-radius: 50%;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin: 0 10px;
    }
    .socialLink img{
        width: 20px;
    }
</style>