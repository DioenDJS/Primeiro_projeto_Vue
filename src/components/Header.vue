<template>
    <header >
        <nav class="container">
            <router-link to="/"><img src="../assets/logo-topo.png" id="logo" alt="dioend-logo"></router-link>

            <img v-on:click="opemMenu" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg
" alt="Abrir menu" id="menu-button">

            <div id="menu-overlay" v-on:click="closeMenu" v-if="menuActive"></div>

            <div id="menu-items" :class="{active:menuActive}">
                <img src="../assets/logo-topo.png" id="menu-logo" alt="dioend-logo">
                <ul>
                    <li v-on:click="closeMenu" ><router-link to="/">Home</router-link></li>
                    <li v-on:click="closeMenu" ><router-link to="/videos">Videos</router-link></li>
                    <li v-on:click="closeMenu" ><router-link to="/sobre">Sobre</router-link></li>
                    <li v-on:click="closeMenu" ><router-link to="/contato">Contato</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default{
        name:'Header',
        data(){
            return{
                menuActive: false,
            }
        },
        methods:{
            opemMenu: function(){
                this.menuActive = true;
            },
            closeMenu: function(){
                this.menuActive = false;
            }
        }
    }
</script>

<style scoped>
    header{
        background-color: var(--color-background-nav);
        width:100%;
        height:60px;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    nav{
        display:flex;
        justify-content: space-between;
        height: 60px;
        align-items:center;
    }
    #logo{
        width: 50px;
    }
    #menu-button{
        width:30px;
    }

    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color:#000000;
        opacity: 0.8;
    }
    #menu-logo{
        width: 110px;    
        margin: 30px 0 10px;
    }
    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        width: 60%;
        height: 100vh;
        background-color: var(--color-background-nav);
        display: none; 
        flex-direction: column;
        align-items: center;
    }
    #menu-items.active{
        display: flex;
    }
    ul{
        text-align: center;
    }
    ul li{
        margin:20px 0;
    }

    ul li a{
        color:var(--color-text-light);
    }

    @media(min-width:700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display:none;
        }

        #menu-items{
            display:flex;
            position: static;
            height: 60px;
            width:auto;
        }
        ul{
            display:flex;
            height: 60px;
            align-items:center;
        }
        ul li{
            margin: 0 0 0 10px;
        }
    }
</style>