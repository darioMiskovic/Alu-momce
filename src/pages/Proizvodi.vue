<template>
  <section class="proizvodi" >
      <!--Bar Heading-->
       <div class="bar-heading ">
           <span class="bar-heading__text"><span>Proizvodi</span></span>
       </div>

      <div v-if="getLoader" class="gifBox">
            <img src="@/assets/img/spin.gif" alt="gif" >
      </div>
      <!--Proizvod box-->
       <div v-else class="proizvodi__box" v-for="(pr,index) in getProizvodListImgs" :key="index">
           <div class="heading-primary">{{pr.name | checkDashes}}</div>
           

           <div class="images-layout__box"    >
                 
                  <div class="images-layout__box-img"  v-for="(item,index) in pr.imgArr" :key="index">
                        <img :src="item"   >
                  </div>

           </div>

             <div class="btn-primary naslovna__btn" @click="changePath(pr.name)">pogledaj više</div>
        </div>

      
  </section>
</template>

<script>
export default {

      computed:{
            getProizvodListImgs(){
               return   this.$store.getters.getProizvodListFiles
            },

            getLoader(){
                   return   this.$store.getters.getLoader
            }
      },

      methods:{
            changePath(path){
                 this.$router.push({ name: 'ProizvodInfo', params: { proizvodInfo: path } })
            },

      },
     
}
</script>

<style>

</style>

