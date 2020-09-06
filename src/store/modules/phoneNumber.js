import {firestoreAction} from 'vuexfire';
import {dbPhoneRef} from '../../firebase';

const state = {

    phoneNumbers:[]
}

const getters = {
    getPhoneNumbers:(state) =>state.phoneNumbers
}


const actions={
    // Phone Numbers
    phoneNumbersDb: firestoreAction(context=> context.bindFirestoreRef('phoneNumbers', dbPhoneRef)),

    //Add phone number
    async addPhoneNumber(context,number){
      try {
        await  dbPhoneRef.add({number})
          
      } catch (error) {
          console.log(error)
      }

      
    },

    //Delete phone number
    async deletePhoneNumber(context,id){
      try {
        const num = await dbPhoneRef.doc(id);
        num.delete();
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