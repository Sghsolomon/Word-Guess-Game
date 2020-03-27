
// var array = ['f', 'h', 'r']
//     console.log(array.join(''))

var array = ['deluro', 'efriem', 'fihira']
var wordGuess =  [];
var userclick =  0;   
var win =        0;

var computerGuess = array[Math.floor(Math.random() * array.length)]          
    console.log(computerGuess);
    
    
    

document.onkeyup = function(){
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   userclick++
   wordGuess.push(userGuess);
   if(userclick < 7)
   document.getElementById('guess').innerHTML  += userGuess + ' _';
   
   for(let key of computerGuess){
       if(key == userGuess && userclick < 7){
          document.getElementById('cchoice').innerHTML += userGuess;
          break;
       } 
    }
    if(wordGuess.join('') == computerGuess)
       win++;
       document.getElementById('win').innerHTML = win;
       
    
}

    
     

  





