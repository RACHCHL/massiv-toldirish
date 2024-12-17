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

  
  if (num == 'add' ) {
    obj.push(war);
   
    console.log(obj);
  }
  else if (num == `del`){
    obj.splice(0,1);
    console.log(obj);
  }
   else {
    
   alert("Nimadur hato ketdi");
  }
  userEnter();
}

userEnter();
