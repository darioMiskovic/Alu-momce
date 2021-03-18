<template>
    <section class="login">

        <div class="login__box">
            <picture>
              
                <source media="(max-width:900px )" srcset="../assets/img/logo/logo-login-md.png">

                <img src="../assets/img/logo/logo-bg.png" alt="header logo">
            </picture>

            <form class="form">

                <div class="form__box"> 
                    <input type="text" id="email" placeholder="Email" v-model="email" >
                </div>

                <div class="form__box">
                    <input type="password" id="password" placeholder="Lozinka" v-model="password" >
                </div>

                <button class="form__btn" @click.prevent="signIn">Prijavi se</button>

            </form>
        </div>

    </section>
</template>
<script>

export default {
    name:'login',
    data(){
        return{
            //promjeniti!!!!!!**************
            email: '*******',
            password: '*******'
        }
    },
    methods:{
        signIn(){
          const user = {
              email: this.email,
              password: this.password
          }

            this.$store.dispatch('signIn',user)
        },
    }
}

</script>
