<template>

    <section class="naslovna">
        <!--Bar Heading-->
       <div class="bar-heading ">
           <span class="bar-heading__text"><span>Proizvodi</span></span>
       </div>

       <div class="images-layout">

           <!--Ograde-->
           <div class="heading-primary">alu ograde</div>
           <div class="images-layout__box">
             <div class="images-layout__box-img">
                   <img src="@/assets/img/alog1.jpg" alt="ograda1">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/alog2.jpg" alt="ograda1">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/alog3.jpg" alt="ograda1">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/alog4.jpg" alt="ograda1">
             </div>
               
           </div>

           <!--Staklene tus kabine-->
           <div class="heading-primary">Staklene tuš kabine</div>
           <div class="images-layout__box">
             <div class="images-layout__box-img">
                   <img src="@/assets/img/tus-1.jpg" alt="ograda1">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/tus-2.jpg" alt="ograda1">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/tus-3.jpg" alt="ograda1">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/tus-4.jpg" alt="ograda1">
             </div>
               
           </div>

           <!--Uramljivanje slika-->
           <div class="heading-primary">Uramljivanje slika i ogledala</div>
           <div class="images-layout__box">
             <div class="images-layout__box-img">
                   <img src="@/assets/img/urslika-1.jpg" alt="ograda1">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/urslika-2.jpg" alt="ograda1">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/urslika-3.jpg" alt="ograda1">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/urslika-4.jpg" alt="ograda1">
             </div>
               
           </div>
       </div>

      
        <router-link :to="{name: 'Proizvodi'}" tag="div" class="btn-primary naslovna__btn">pogledaj više</router-link>

       <div class="naslovna__content--1">
           <div class="heading-secondary-white">o nama</div>
           <div class="naslovna__content-txt">
               Firma se bavi proizvodnjom proizvoda od aluminijskih profila te 
                ugradnjom istih, prvenstveno aluminijskih izloga, balkonskih , stubišnih i
                dvorišnih ograda, te ostalim proizvodima  od aluminija.<br><br>

                Uz to bavimo se još sa ugradnjom staklenih tuš kabina, komarnika,
                kliznih stijena te uramljivanjem slika i ogledala.
           </div>

             <router-link :to="{name: 'Proizvodi'}" tag="div" class="btn-secondary">Proizvodi &rarr;</router-link>
       </div>

        <div class="naslovna__content--2">
             <div class="heading-secondary">odgovorni i profesionalni</div>
             <div class="naslovna__content-txt">
                 Razumijemo da je ulaganje u ogradu velika odluka koju ne shvaćate lagano.<br><br>

                Nova ograda ne samo da će povećati vašu vrijednost imovine i  uljepšati ambijent, 
                nego će vama  i vašoj obitelji pružiti dodatni osjećaj sigurnosti i privatnosti.<br><br>

                Ponosni smo na to što smo brzi, profesionalni i superiorni u svom zanatu, zbog 
                toga nastojimo postići veliko zadovoljstvo kupaca. <br><br>

                “Posao nije završen sve dok kupac nije zadovoljan.”
             </div>
       </div>


    </section>
  
</template>

