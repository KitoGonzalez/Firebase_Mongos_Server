import admin from 'firebase-admin';
import firebaseConfig from './db-firebase-key.json' assert {type:"json"} ;
import fs from 'fs';
import { error } from 'console';

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL:'https://dbase-firebase.firebaseio.com'
})

const enviroment = async() =>{
    //let firebaseConfig = await fs.promises.readFile('./db-firebase-key.json', 'utf-8')
    //JSON.parse()
    const database = admin.firestore();
    const query = database.collection('usuarios');
    //Comienza el CRUD
    /*
    //Create
    let doc = query.doc();
    await doc.create({nombre:"Manuel",dni:31202464});*/

    //Read
    try{
        const snapShot = await query.get();
    
        let docs = snapShot.docs
        
        const response = docs.map(doc=>({
            id:doc.id,
            name:doc.data().nombre,
            dni:doc.data().dni
        }))
        console.log(response)
    }catch(error){
        console.log('error')
    }

    //GET BY ID
    try{
        let id = '5DksVoQPHb4n7st9qk0d'
        const doc = query.doc(id);
        const item = await doc.get();
        const obj = item.data();
        console.log(obj)
    }catch(error){
        console.log('error');
    }
    //UPDATE
    try{
        let id = '5DksVoQPHb4n7st9qk0d'
        const doc = query.doc(id);
        let item = await doc.update({dni:43404683})
        console.log(item)
    }catch(error){
        console.log('error')
    }
    //DELETE
    try{
        let id = '5DksVoQPHb4n7st9qk0d'
        const doc =  query.doc(id);
        let result = await doc.delete();
    }catch(error){
        console.log(error)
    }
}

enviroment()