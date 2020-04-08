
var main = {

    //var that are selected by the computer and user
      selectedWord: null,
      matchedLetter: [],
      guessedLetter: null,
      win: 0,
      userguess: 0,


      //list of singers song and image
    wordInPlay: {
            deluro: {
                picture: "deluro.jpg",
                song: "Illegal Alien",
                preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        
            },
            efriem: {
                picture: "efriem.jpg",
              song: "Material Girl",
              preview: "https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c"
            },
        
            
            fihira: {
                picture: "fihira.jpg",
              song: "Rosanna",
              preview: "https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317"
        
            }
        
},

 // function that is executed when the list of singers button triggered
 listOfSingers: function(){
  var  list  = Object.keys(this.wordInPlay).join(' , ')
  document.getElementById('list').innerHTML = list
 },

    // random computer guess
 cGuess: function(){
      var  list  = Object.keys(this.wordInPlay)
      this.selectedWord = list[Math.floor(Math.random() * list.length)]
      // this.selectedWord = computerchoice.split('')
       console.log(this.selectedWord)
       //this.userguess = computerchoice.length + 4;
  },

  //if user guess matched selected word push to mathed letter
     comparison: function(letter){
        //  this.update()
        //  this.updateWin()
         this.userguess++
         document.getElementById('chance').innerHTML = this.userguess;
         console.log(this.selectedWord)
         for(let char of this.selectedWord){
              if((letter === char) && (this.matchedLetter.indexOf(letter) === -1))
              {
                 this.matchedLetter.push(letter)
                 console.log(this.matchedLetter)
              } 
             
            }
        },

        
        

         //updating status
        update: function(){
                this.matchedLetter
            var wordView = '';
            console.log(this.selectedWord)
            console.log(this.matchedLetter)
            for(let  key of this.selectedWord){
                if (this.matchedLetter.indexOf(key) !== -1){
                    wordView += key;
                  }
                 else{
                    wordView += '&nbsp_&nbsp';
                }
            }
            document.getElementById('mguess').innerHTML = wordView;
            
        },

        //if user choice is matched with computer choice

        updateWin: function(){
            var win;
            if(this.matchedLetter.length === 0){
                win = false;
            } else{
                win = true;
            }
            for(let key of this.selectedWord){
                if(this.matchedLetter.indexOf(key) === -1){
                    win = false;
                }
            }
            if(win){
                this.win++

                // Update wins on the page.
                document.getElementById('win').innerHTML = this.win;

                //display artist image
                document.getElementById('wrapper').innerHTML =
               `<img src = "./assets/image/${this.wordInPlay[this.selectedWord].picture}" width = "240" height = "240" >`
      
               
               
      // Play an audio track of the band.
      var audio = new Audio(this.wordInPlay[this.selectedWord].preview);
      document.getElementById('song').append(audio)
      //audio.setAttribute("controls", "controls");
      audio.play();

    //  x =  document.createElement('audio')
     // x.setAttribute('src', "https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317")
      //x.play()
                
            }
        },
  
       
}


main.cGuess()





//user selection
document.onkeyup = function(){
    if((event.keyCode > 64) && (event.keyCode < 90)){
  main.guessedLetter =    event.key.toString().toLowerCase()
      main.comparison(main.guessedLetter)
      main.update()
      main.updateWin()
      console.log(main.guessedLetter)
   }
   
}




// // main function that execute wrapper the whole var and methods
// var main =  {

//     // singers onject
//  wordInPlay: {
//     deluro: {
//         picture: "genesis.jpg",
//         song: "Illegal Alien",
//         preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"

//     },
//     efriem: {
//         picture: "madonna.jpg",
//       song: "Material Girl",
//       preview: "https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c"
//     },

    
//     fihira: {
//         picture: "toto.jpg",
//       song: "Rosanna",
//       preview: "https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317"

//     }


// },

// // var that are selected by the computer and user
//  selectedWord: [],
//  matchedLetter: [],
 
 


 
     
// // function that is executed when the list of singers button triggered
// listOfSingers: function(){
//  var  list  = Object.keys(this.wordInPlay).join(' , ')
//  document.getElementById('list').innerHTML = list
// },

//   // random computer guess
//   cGuess: function(){
//       var  list  = Object.keys(this.wordInPlay)
      
//       var computerchoice = list[Math.floor(Math.random() * list.length)]
          
//           this.selectedWord = computerchoice.split('')
           

    
//   },

//      //if user guess matched selected word push to mathed letter
//      comparison: function(){
//          for(let key of this.selectedWord){
//              if((this.wordGuess === key) && (this.wordGuess.indexOf(key) === -1)){
//                 alert('good') 
//                 //this.matchedLetter.push(this.wordGuess)
//              } else{
//                  alert('no')
//              }
//          }

//      },
     
    
//     // comapring the userguess and computer choice and displaying the result
//      updateWin: function(letter){
          
//          var wordView = '';
//         for(let key of this.selectedWord){
//              console.log(key)
//             if(key === letter){
//                  wordView += key;
                 
//             } else{
//                 wordView += '&nbsp_&nbsp'
//             }
//         }
    
//         document.getElementById('mguess').innerHTML = wordView;
//     }
 

// }

// main.comparison()
// main.cGuess()
// main.updateWin()


//   document.onkeyup = function(){
//       if((event.keyCode > 64) && (event.keyCode < 90)){
//     main.wordGuess =    event.key.toString().toLowerCase()
//          main.updateWin(main.wordGuess)
//       }
      
//   }