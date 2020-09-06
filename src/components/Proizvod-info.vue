<template>
  <section class="proizvod-info">
     <!--Bar Heading-->
       <div class="bar-heading ">
           <span class="bar-heading__text"><span>{{proizvodInfo | checkDashes}}</span></span>
       </div>
             <!--Spinner gif-->
            <div v-if="getLoader" class="gifBox">
                  <img src="@/assets/img/spin.gif" alt="gif" >
            </div>

           <div 
           v-else
           class="images-layout__box" 
           @click="toggleImg($event)">

             <div class="images-layout__box-img" 
             @click="ShowImg($event)"  
             v-for="(img,index) in getActivePrImgs" 
             :key="index">

                   <img :src="img" >
             </div>
               
           </div>
           
  </section>
</template>

<script>
export default {

      props: ['proizvodInfo'],

      computed:{
            getActivePrImgs(){
                  return this.$store.getters.getActivePr;
            },
             getLoader(){
                   return   this.$store.getters.getLoader
            }
      },

      methods:{
            ShowImg(e){
                  if(e.target.parentElement.classList.contains('images-layout__box-img')){
                        e.target.parentElement.classList.toggle('showImg');
                  }
            },

            toggleImg(e){
                   if(e.target.classList.contains('images-layout__box-img')){
                        e.target.classList.toggle('showImg');
                        
                  }
            }
      },

       created(){
    
            this.$store.dispatch('getFiles',this.proizvodInfo );
      
      }
       

}
</script>

<style>

</style>