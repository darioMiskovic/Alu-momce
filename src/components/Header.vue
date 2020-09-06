<template>

    <header class="header">

        <div class="header__logo">
            <picture>
                <source media="(max-width:600px )" srcset="../assets/img/logo/logo-w-sm.png">
                <source media="(max-width:900px )" srcset="../assets/img/logo/logo-w-md.png">

                <img src="../assets/img/logo/logo-md.png" alt="header logo">
            </picture>
        </div>

        <div class="header__nav">
            <ul>
                 <router-link :to="{name: 'Naslovna'}" tag="li">NASLOVNA</router-link>
                 <router-link :to="{name: 'Proizvodi'}" tag="li">PROIZVODI</router-link>
                 <router-link :to="{name: 'Kontakt'}" tag="li">KONTAKT</router-link>
            </ul>
        </div>

    </header>
  
</template>




    