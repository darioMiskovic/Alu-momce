import Naslovna from '../pages/Naslovna.vue';

const Kontakt = ()=> import('../pages/Kontakt.vue');

const Proizvodi = ()=> import('../pages/Proizvodi.vue');

import Admin from '../pages/Admin.vue';
import Showcase from '../components/Showcase';

const ProizvodInfo = ()=> import('../components/Proizvod-info.vue');


export const routesData = [

    //Home 
    {
        path: '/',
        components: {
         default: Naslovna,
         'showcase': Showcase
        }, 
        name:'Naslovna'
    },


    //Proizvodi 
    {
        path: '/proizvodi',
        component: Proizvodi,
        name:'Proizvodi'
    },


    //Proizvod info 
    {
        path: '/proizvodi/:proizvodInfo',
        component: ProizvodInfo,
        name:'ProizvodInfo',
        props: true
    },


    //Kontakt 
    {
        path: '/kontakt',
        component: Kontakt,
        name:'Kontakt'
    },

    //Admin 
    {
        path: '/admin',
        component: Admin,
        name:'Admin'
    },

    {path: '*',redirect: '/'},


]