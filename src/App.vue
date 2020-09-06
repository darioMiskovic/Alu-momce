<template>
  <div id="app">

   <app-header/>

   <router-view name="showcase" />

    <router-view  />
    
   <app-footer/>
   <app-overlay/>

  </div>
</template>


<script>

import Header from './components/Header';
import Footer from './components/Footer';
import FooterOverlay from './components/FooterOverlay';


export default {
  components:{
    appHeader: Header,
    appFooter: Footer,
    appOverlay: FooterOverlay,
    
  },
  
  created(){
    this.$store.dispatch('proizvodiDb');
    this.$store.dispatch('phoneNumbersDb');
    this.$store.dispatch('listOfFiles');
     this.$store.dispatch('getProizvodListFiles');
     
   
  }
}
</script>

<style lang="scss">

  @import "./scss/main.scss";

</style>




<!--

*********IMPORT *********

import Showcase from './components/Showcase';
import Naslovna from './pages/Naslovna';

import Proizvodi from './pages/Proizvodi';
import ProizvodInfo from './components/Proizvod-info';

import Kontakt from './pages/Kontakt';
import Admin from './pages/Admin';

import FooterOverlay from './components/FooterOverlay';



*********template **********

 <app-showcase/>
  <app-naslovna/>

  <app-proizvodi/>
  <app-proizvod-info></app-proizvod-info>

  <app-kontakt/>
  <app-admin/>

  <Login/>
 
 *********components **********

 appShowcase: Showcase,
  appNaslovna: Naslovna

  appProizvodi: Proizvodi
  appProizvodInfo: ProizvodInfo

  appKontakt: Kontakt
  appAdmin: Admin
  
  Login

-->