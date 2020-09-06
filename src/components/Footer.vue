<template>
    <footer class="footer">
            <div class="footer__box">

                <!--box 1 *********-->
                <div class="footer__box-1">
                    <h3>Proizvodi</h3>
                    <ul>
                            <router-link 
                             tag="li" 
                             
                             v-for="(item,index) in getProizvodList" :key="index"
                             :to="{ name: 'ProizvodInfo', params: { proizvodInfo: item } }"
                             >{{firstLetterToUpperCase(item) | checkDashes}}</router-link>
                    </ul>
                </div>


                 <!--box 2 ***********-->
                <div class="footer__box-2">

                    <h3>Kontakt</h3>
                    <ul>
                        <li  v-for="(item,index) in getPhoneNumbers" :key="index">
                            Mob: {{item.number}}
                        </li>
                        

                    </ul>

                    <div class="footer__box-2--icon">
                         <!--facebook Icon-->
                          <a href="https://www.facebook.com/Alu-Momce-104002417843424/" target="_blank">

                              <svg class="feature__icon">
                                <use xlink:href="@/assets/sprite.svg#icon-facebook-with-circle"></use>
                                </svg>

                          </a>

                            <!--Mail Icon-->
                            <router-link :to="{name: 'Kontakt'}" tag="svg" class="feature__icon">
                                <use xlink:href="@/assets/sprite.svg#icon-mail"></use>
                            </router-link>

                    </div>
                </div>

                 <!--box 3 **********-->
                <div class="footer__box-3">
                    <h3>Lokacija: </h3>
                    <span>Adresa: Ul. Vladimira Nazora 555</span>
                    <img src="@/assets/img/location.png" alt="google maps">
                </div>

            </div>

             <div class="footer__logo">
                  <picture>
                    <source media="(max-width:600px )" srcset="../assets/img/logo/logo-w-md.png">

                     <img src="@/assets/img/logo/logo-w-bg.png" alt="logo white">
                   
                 </picture>


                 </div>

                <p class="footer__txt">ALU MOMČE &copy; 2020 | Created and designed by <a href="https://dariomiskovic.imfast.io/" target="_blank"><span class="footer__txt-dm">DM</span></a></p>
                

                
    </footer>

   
</template>


<script>
import {mapGetters} from 'vuex';

export default {
      computed:{

    ...mapGetters([
            'getPhoneNumbers',
            'getProizvodList'
        ]),
    },


    methods:{
        firstLetterToUpperCase(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
            },
    }
}
</script>

