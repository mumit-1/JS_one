try{
   if(isNaN(value)){
     throw"vuul information"
   }
   else if(value > 10){
    throw"vuul information abar";
   }
   else{
    
   }
}
catch(error){
 console.log("ERROR",error);
}
finally{
    console.log('it will show even the data is correct or not');
}