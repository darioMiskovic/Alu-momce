import {firebaseStorage} from '../../firebase';

const state = {
    activeProizvod: [],
    proizvodList: [],
    proizvodListFiles:[],
    loader: false
}
const getters = {
    getActivePr: state=> state.activeProizvod,
    getProizvodList: state=> state.proizvodList,
    getProizvodListFiles: state=> state.proizvodListFiles,
    getLoader: state=> state.loader

}


const mutations = {

    turnOnLoader:(state)=>{
        state.loader = true;
    },

    turnOffLoader:(state)=>{
        state.loader = false;
    },

    updateActiveProizvod:(state,img)=>{
        state.activeProizvod.push(img);
    },

    resetActiveProizvod:(state)=>{
        state.activeProizvod = [];
    },

    updateProizvodList:(state,item)=>{
        state.proizvodList.push(item.location.path_);
    },

    updatetProizvodListFiles(state,obj){
        
        
       if(state.proizvodListFiles.find(item => item.name === obj.name)){

        let box = state.proizvodListFiles.find(item => item.name === obj.name);

        box.imgArr.push(obj.img);
       
       } 
       else{
            state.proizvodListFiles.push({
                name:obj.name,
                imgArr:[obj.img]
            });
        }
            
    },  

}
const actions = {

   getFiles:({commit},path)=>{

    commit('resetActiveProizvod');
    commit('turnOnLoader');
       
    (/\s/.test(path)) ? path = path.toLowerCase().replace(' ','-') : false; 
    

      firebaseStorage.ref(path).listAll().then(res=>{
           res.items.forEach(img=>{
            firebaseStorage.ref(`${path}/${img.name}`).getDownloadURL().then(res=>{
                
               commit('turnOffLoader');
               commit('updateActiveProizvod',res);
            })
           })
        });

    },

    uploadFiles(context,{path,images}){
        
       images.forEach(item=>{

        (/\s/.test(path)) ? path = path.toLowerCase().replace(' ','-') : false;

        firebaseStorage.ref().child(`${path}/${new Date().getTime()}${item}`).put(item)
        .then(()=>{ console.log('successfully uploaded')})
        .catch(err=> console.log(err.message))

       })

    },




    listOfFiles({commit}){
        firebaseStorage.ref().listAll().then(item=>item.prefixes.forEach(res=>{
            commit('updateProizvodList',res);
        }))
    },

    getProizvodListFiles: async ({commit})=>{

        commit('turnOnLoader');

       const pathList = await firebaseStorage.ref().listAll();

       pathList.prefixes.forEach((path)=>{

            firebaseStorage.ref(path.name).list({maxResults: 4}).then(res=>{

                res.items.forEach(item=>{

                    firebaseStorage.ref(item.location.path_).getDownloadURL().then(res=>{
                        let obj = {};
                        obj.name = path.name;
                        obj.img = res;
                        commit('turnOffLoader');
                        commit('updatetProizvodListFiles',obj);
                     })

                }); 

            });
        })
       
    },  

    deleteImg(context,{img}){
        firebaseStorage.refFromURL(`${img}`).delete()
       
        .then(res=> console.log(res))
        .catch(err=>console.log(err));
    },



    deleteProizvodStrg(context,path){
        firebaseStorage.ref(path).listAll().then(res=>{
            res.items.forEach(img=>img.delete())
         });

        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

