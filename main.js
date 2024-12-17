let obj = [];


function userEnter(){
  let userInput = prompt("Buyruq kiriting (add massivga qoshish `del` o'chirish `stop` to'htatish)");
  
    
  if (userInput == 'stop') {
    console.log(`yakunlandi`,obj);
    return;
  }

  let parts = userInput.split(", ");
  
  let num = parts[0]; 
  
  let war = parts[1]; 

  if(num=="add" || num=="del"){
  if (num == 'add' ) {
    obj.push(war);
   
    console.log(obj);
  }
  else if (num == `del`){
    job= +prompt("nechanchi elementni o'chirmoqchi siz (Elementlar tartibi 0 dan boshlab)")

    obj.splice(job,job++);
    console.log(obj);
  }
   else {
    
   alert("Nimadur hato ketdi");
  }
  
}
else{
  alert("Iltimos buyruqni to'g'ri kiriting!")
}

  userEnter();
}

userEnter();
