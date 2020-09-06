<template>

        <section class="admin">
           
            <div class="admin__box" v-if="currentUser !== null">
            <!--Odjava-->
            <div class="bar-heading ">
                <span class="bar-heading__text"><span>admin sekcija</span></span>
            </div>

                <button class="form__btn" @click.prevent="signOut">Odjava</button>

                <!--Osobni podaci-->
            <div class="bar-heading ">
                <span class="bar-heading__text"><span>osobni podaci</span></span>
            </div>

            <form class="form" @submit.prevent="changePwd">

                    <div class="form__box">
                        <input type="password"  placeholder="Nova lozinka" v-model="novaLozinka">
                    </div>

                    <div class="form__box">
                        <input type="password"  placeholder="Ponovi novu lozinka"  v-model="potrvdiLozinku">
                    </div>

                    <button class="form__btn" >Spremi</button>

                </form>



                <!--Broj mobitela-->
            <div class="bar-heading ">
                <span class="bar-heading__text"><span>broj mobitela</span></span>
            </div>

            

            <div class="addPhoneNum">

                <form class="addPhoneNum__form">
                    <input type="text" placeholder="Unesite novi broj" v-model="phone">
                    <button @click.prevent="addPhoneNumber">Dodaj</button>
                </form>

                <div class="addPhoneNum__box" v-for="(item,index) in getPhoneNumbers" :key="index">
                    <div class="addPhoneNum__box-number">{{item.number}}</div>
                    <div class="deleteNum" @click="deletePhoneNumber(item.id)">X</div>
                </div>

            </div>

            <div class="phoneNum">
                <div class="phoneNum__box">
                    
                </div>
            </div>

                <!--proizvodi-->
            <div class="bar-heading ">
                <span class="bar-heading__text"><span>Proizvodi</span></span>
            </div>
    
            
                <!--proizvodi form-->
                <form class="proizvodi__form">
                <input type="text" placeholder="Unesite novi proizvod" v-model="proizvod">
                <button @click.prevent="addProizvod">Dodaj</button>
            </form>



            <div class="proizvodi__list">
                
                <div class="proizvodi__list--item" v-for="(item,index) in getProizvodi" :key="index" 
                @click="updateStateAndImgs(item)"> 
                    {{item.proizvod | checkDashes}}
                </div>

            </div>

            
            <app-pr-info v-if="activeProizvod" :activePr = activeProizvod 
                         v-on:resetActive="updateActivePr($event)"/>

            </div>

             <Login v-if="currentUser === null" />

        </section>

       
    
</template>

<script>

import AdminProizvodInfo from '../components/AdminProizvodInfo';
import Login from '../components/Login';
import {mapGetters} from 'vuex';



export default {

    data(){
        return{
            phone:'',
            proizvod: '',
            activeProizvod: null,
            novaLozinka: '',
            potrvdiLozinku: ''
            
        }
    },

    components:{
        appPrInfo: AdminProizvodInfo,
        Login
    },


    computed:{

    ...mapGetters([
            'getPhoneNumbers',
            'currentUser',
            'getProizvodi'
        ]),
    },

    methods:{
        updateStateAndImgs(obj){
                this.activeProizvod = obj;
                this.$store.dispatch('getFiles',obj.proizvod);
               

        },
        addPhoneNumber(){
            if(this.phone !== ''){
                this.$store.dispatch('addPhoneNumber',this.phone);
                this.phone = '';
            }
        },

        deletePhoneNumber(id){
             this.$store.dispatch('deletePhoneNumber',id);
        },

        signOut(){
               this.$store.dispatch('signOut');
        },

        addProizvod(){
            this.$store.dispatch('addProizvod',this.proizvod);
            this.proizvod = '';
        },

        updateActivePr(val){
            this.activeProizvod = val;
        },

        changePwd(){
        
             this.novaLozinka === this.potrvdiLozinku ?  this.$store.dispatch('changePassword',this.novaLozinka):alert('Lozinke se ne podudaraju');
             this.novaLozinka = '';
             this.potrvdiLozinku = '';
        }
        

    }


}
</script>

<style>

</style>

