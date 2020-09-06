import {firestoreAction} from 'vuexfire';
import {dbProizvodiRef} from '../../firebase';

const state = {
     proizvodi: []
   
}

const getters = {
   getProizvodi : state=> state.proizvodi
}


const actions={

    // Proizvodi
    proizvodiDb: firestoreAction(context=> context.bindFirestoreRef('proizvodi', dbProizvodiRef)),

    //Add proizvod
    async addProizvod(context,proizvod){
        try {
          (/\s/.test(proizvod)) ? proizvod = proizvod.toLowerCase().replace(' ','-') : false;
          await  dbProizvodiRef.add({proizvod})
            
        } catch (error) {
            console.log(error)
        }
  
        
      },
  
      //Delete proizvod
      async deleteProizvod(context,id){
        try {
          const proizvod = await dbProizvodiRef.doc(id);
          proizvod.delete();
       } catch (error) {
           console.log('Sorry, there was a problem romving the order', error)
       }
  
      
      }
   
}

export default {
    state,
    getters,
    actions
}