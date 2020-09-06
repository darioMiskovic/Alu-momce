<template>
    <section class="kontakt">
        <!--Kontakt Banner-->
        <div class="kontakt__banner">
           <div class="kontakt__banner-heading">email</div>
           <div class="kontakt__banner-bg"></div>
        </div>

        <!--Kontakt Form-->
        <form class="form" @submit.prevent="sendEmail">
            <div class="form__box">
                <label for="ime">Ime</label>
                <input type="text" id="ime" v-model="name">
            </div>

             <div class="form__box">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="user">
            </div>

            <textarea id="txtarea" cols="30" rows="10" 
                placeholder="Unesite vašu poruku ovdje"
                v-model="poruka"
            ></textarea>

            <button class="form__btn">pošalji</button>
        </form>

         <!--Telefon-->
         <div class="kontakt__phone">
             <div class="kontakt__phone-heading">nazovite nas:</div>
             <div class="kontakt__phone-number">


            <!--Phone Box-->
            <div class="kontakt__phone-number--box" v-for="(item,index) in getPhoneNumbers" :key="index">
                <svg class="feature__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-phone"></use>
                </svg>
                 <span>{{item.number}}</span>
            </div>
                 
             </div>
         </div>

        <!--Adresa-->
        <div class="kontakt__banner">
           <div class="kontakt__banner-heading">gdje se nalazimo?</div>
           <div class="kontakt__banner-bg"></div>
        </div>

        <div class="kontakt__adresa">
            <div class="kontakt__adresa-heading">
                Adresa: Vl.Nazora 123
            </div>

            <div class="kontakt__adresa-location">
                <img src="@/assets/img/location.png" alt="">
            </div>
        </div>

    </section>
</template>


<script>

import {mapGetters} from 'vuex';

export default {

    data(){
        return{
            name: '',
            user:'',
            poruka:''
        }
    },
    computed:{

    ...mapGetters([
            'getPhoneNumbers'
        ]),
    },


    methods:{
        sendEmail(){
            const email = {
                name: this.name,
                user: this.user,
                poruka: this.poruka
            }

            this.$store.dispatch('sendEmail', email);

             this.name = '',
             this.user= '',
             this.poruka= ''

            
        }
    }
}
</script>