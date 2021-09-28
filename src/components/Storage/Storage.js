 const getDb = () => {
     const db = localStorage.getItem('item')
     let container={}; 
     if(db){
container= JSON.parse(db)
     } else{
         container = {};
     } 
     return container;
 } 

 const setDb = (item) => {
let storage = getDb();
if(storage){
    storage[item] = storage[item] + 1;
    }else{
        storage[item] =1;
    }
    localStorage.setItem('item',JSON.stringify(storage));
 }

 const removeDb = () => {
localStorage.removeItem('item')
 }

 export {getDb, setDb, removeDb};