import mongoose from "mongoose";

mongoose.connect('mongodb+srv://KitooGonzalez:lange4421@cluster0.ig2hlgz.mongodb.net/dbAtlas?retryWrites=true&w=majority',error =>{
    if(error){
        console.log('Algo salio mal,Averigua vos')
    }else{
        console.log('Conectado a Atlas DB')
    }
})