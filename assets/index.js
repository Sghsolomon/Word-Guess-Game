

var array = ['deluro', 'efriem', 'fihira']
var selectedWord = [];
var wordGuess =  [];
var userclick =  0;   
var win =        0;
var chance = 6;

function eselectedWord(){
   selectedWord.length = 0;
}

function ewordGuess(){
   wordGuess.length = 0;
}

   const video = function(wordGuess){
        if(wordGuess == 'deluro'){
     var x = document.createElement('img')
     x.setAttribute("src", "data:image/jpeg;base64,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")
     document.getElementById('wrapper').appendChild(x);
     x.setAttribute("width", "320");
     x.setAttribute("height", "240");
     x.setAttribute("controls", "controls");
        }
        if(wordGuess == 'efriem'){
         var x = document.createElement('img')
     x.setAttribute("src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMVFRUXFhUVFRgYFRUVFxcXFxUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0rLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0rKzctKy03LS0tNy0rNy0rKystK//AABEIAP8AxgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgUHAgMEAQj/xABBEAABAwIEAwYDBQUFCQAAAAABAAIDBBEFEiExBkFRBxMiYXGBMpGhFEKxwfAkUmJy0SMzNKLxNURTVHOSk7Lh/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAMBAAMAAwAAAAAAAAAAAQIRITEDEkEyUWH/2gAMAwEAAhEDEQA/ALOQhCy5hCEIBCEIBCF45B6hLOPcc0VNdrpcz/3Wa69LjZI2K9rz9RBCAOrzc+VkXS317ZfONbx3iEh1nIB5N0so53ElYf8AeZfZ7v6oafTy9svl4cQVf/Mzf+R/9VJ0XHOIRkETuNuTtfzQ0+jUKmsK7XZhYTxB46t0PunfA+0KiqCG5+7ceTrWv0uho3IXjXAgEbHbz9F6iBCEIBCEIBCEIBCEIBCEIBCEIBCEIMJnhrS5xAaASSTYADc3VMdoHaM6Yup6R2SIaPeDq46izT01+ime2Hi3I37HEbONjIQdQOnuqct+v6q6akZFxO5J9Tc+t14UBZXVaYhBQ5egIPAgoIXiD0L0G2uv4fJYosinXg/tCqKQhj7ywki7XHxNHVp/JXng+KQ1MQmhfmYR1Bsbag22I5hfLQKaeAOKH0VQ3U91Icsjb6Do4KVix9EIWMMge0OabhwBB6g6rJRnQQhCAQhCAQhCAQhCAQhCAUHxjxCyipnSu+I3bGOZfsPYbqcJVH9tWK95VNpwfDCBf+cjX6JCQhV1Y+aR8rzdz3Fxv+tloQgLTo9YL6Lqiw9x8llTQ81JwMJ0RqRhTYSDzupqnwJj7XGy7MJw++6asPw0AbLNqlOo4Xjf8LSCud/CLWi11ZkOH+Vly1OG6qfZFUVfDRb8LlC1dI6M2cPQ6a/JWtiWHHUpUxWk11C1LsJRXt12VdNluVxWVZXX2QcUd5GaSR/jZrGTzZzarJ/0XyxhNc+nlZMw+Jhzb7+S+msGxBtRDHM374v7qVix2oQhRAhCEAhCEAhCEAhCEHj3WBJ2AJPoNSvlvHqwzVM8rjcukd8gbD6L6ZxqbJTzPHKN5/ylfK735iXHmSfnqrGsQsot1it1MzVVuJJtrKUw+Pmo6AXNkxYfG21iQpW0vh+bS2qaKWU2FworCIo7aOCbMOoA7RcsqPI59ESTaLqqMIIGl1xGjftYlZvhpG10rbFKeNxg6pyqsONilTGad1jot4ViwlYlT6FQEgsU41sHh1SziUNiCF1TTjzK6exPFM9PJATcxuBb/KVSuVWR2GyftU45GIfMFSpfF1IQhRgIQhAIQhAIQhAIQhBG8Tf4So/6T/8A1K+XGbfrovqvFYc8ErP3o5B/lK+VpG2cW9HEH20Vix4u6lbouEKYwyK9lXSCnic53QBNWF0LCQHvDQbDUrjZAAwkbqLfRvlFw67uQva3upa2sCLht1rxStJ6XXbh2JTwaSA6Hcpm4b4VpY6OMl9n5QXOzXsSFB4xK1rXNc8Otow73/ouUu+Js38PY4JwQdx/QLoqsUijab2CSeFMQIPK9tVqxat72TKdLlT69XburMfjJdlbcpXr8bucroyL+RUnWYrS0hF4879NLHW6kJMZhlb3hp3NYBZzsugPS1lrxCFUyNc0pSxVt9dU78QQxkl0Z0O1km4jGQNVuIigrH7Dm/tUx6RD6quFbXYbRENqJraGzB5kclaxl4tZCEKMBCEIBCEIBCEIBCEIA/r05hfP3HPDThW1LoW+AOvbpcXX0CUgcTxBk0zf+LlI9dtEjWMUg6AgXNwprBnBM3G+Atip2P8AvaD19UpYSTdXfNt4myjpc+mqncK4eA1tf2XNgT9E10LSdlzyrU6m6ONrIsrrWtskPi2pDn2sGgbW9d0801A4glxvzueQCrjGI3TVDgy5aDYHqmETKO7A5cg0WrEJ/HnG6m8N4alEea1zb6WStiMb2PN7iy1LKt9N8fDpqWROL23BzB1r28ip+tro4IXROiLw4HNa1nHr5KM4Sr+6YA7Vrh+KlcYa1wuNVjfVvim3QkTOa24jJJAPLyURxLBkHun/ABqhA8e1kj8UeOwGpv8AP0XSMzkK46c/1ay+h+zjBvstFGwiz3+Nw80jdnnZ68vZU1TcrBqxh3ceRKuID/55K1zyuwhCFGAhCEUIQhAIQhAIQhAJH7TYi1sU7R8JAd6X0TwoPjejMtFM1ou4DOB5jX8kXG9VnxDiBqaUude7dRYae6TcJB0PVPOHNzUbmDwkNObNp7eqQaSXx2vsbfVJ5p0np8wR99E94ONQPRV9gj7EJ5wWsGYErFjU4msYrQyMsvYuBakCppHZCxr+7ePhPJ2vNbuLscBk01sdPVL81ZPcC1yfhH5qycS9OMPEctPCIpCe8ty+9puP1yS6MUdOH983IOvP6rjqcTf43kB72gNudm9AB7qQZh4fDE13ikkIJ9Eski/pjwXFJHwta2nBaLgOJsTYkXsuk1VQBrFp6qR7plPCCbACw9lJxVccoDYwHbXdyCxV0RcZqy6MjuiEvcKYaJ61jXizWeMh3XkArdqsPZl0bfqUj8QUTWOEjDYtdckaHTqt4XjNmlhW9kLRh8/eRsfe+ZoPvZb1pxCEIQCEIQCEIQCEIQCEIQCChBQV52xQBtDmjAYe8Fy3S+972VLULtlevbBHfDnkcnNP43VCwix90bxPWFVGg6pmo6s7DnskbDX6BN2CEF1+YCV0aq4xxkudq4XJ5rl4JppJC+skHgOfIegG1gtWPTNB8Q0zWPncFZYNxnT09A+nIJlu5sYGwud1cv8AEesivTE7maa1/IEJlwWO9c2M6ZWAN+SXH3FPSg6f2lz72KsDBaNhqBJbxgNsVjKrI48Yhe6V0UhvEAtcOKR0oHdnw8xdRnaHVtbXxsDy3MDmI2Gmlxslmra3upD3hu0HKmuG13YJWCpizN8LeX8SU+JqRwceQN1L9mNRekjH8I/BbeNWBzNBqsYetZOPgapzU5ZzjcR7X0TEq+4FqSypkicfiFx52Vgrq89gQhCIEIQgEIQgEIQgEIQgEIQgT+1f/Zsvq381QDm7H9clfXa1Usbh72udq5zQB81R7oCW++nsjeKQwyewCaMIqbapLozbRTmGT6gXVsbd3GNI50Re3kQUh5tL313VxUeR0ZD9i0gj15qtsW4elY5xa1zo7mxAubJuM/p0wWB9ZSxtAIPeMLXHbkCAfZOnEE76OldMPjjsP5kn9lmOt+yzU0li6NwljDja1g0e3wlSvaRxVTT0YiZIO8eRcAXy23XPXXS3UVjinEE1RKZJMpcTcenIKQnxUSRZTEWu2J5HRaJsMYGsliBc0fET15rc2YO1IC2ziuzs8kApY/No/BTuIwtcw9VXXAXFEbMsUg0GgIB09TyVi1+Ux52OBBHLULjrVdPxXVXD9nrI5h8ObK4+RVjtNxdI+P0/eRm1+vv1TBwniHfU7bk5m+F2v4rpHDJMoQhaYCEIQCEIQCEIQCEIQCiOJa10cYaw2e82HpfX6KWcdCdtDr0HM+26riXiNtZXER6xQ+Bp/eds5ylawnUV2kNP2VgcSSXjfXZJEEV/om7tOqml0cQ3bqlyiYtR0iPqKVzTcIhnsbjcJnjo7hR1Zg+qqt1NirnAAEAjkealKfigwOAmjsDsd269UsvpHt5E+i8fM/LlNyDyKmj1OPw2lllMzSWl3xBrrA/L9aJXxajDZ5DEw5WAab9dVyzZojmY+3kmrggd9HWSyfditf5p4zraI4V4gbE4smF4X6OH7t+nRM+I8IOLO/onCaIgkt+8PRI+E13cuvkbIw3BDunkp/D8ddTHvaGXKDq+B2x9P1zUsWRYNNNTw07KWJuWXKHSvIBc5x3YuvAZJ4Lsk1jedRe5aeVuiiML4/w2qDftUIp5m/fGxPUKefiEfcOEE8Ti74Xk+IA7aLnScSk0GljzULh1UaWp1aTHJoegcu3hXve7y1Dsz+Tjs5vL6KQr8NDwbi4Ul1xrLHbJnEcRqRTDxP55Dmt62U2k/hXh6OmqzML7Wsnmpgv427cx0W5XO4c25EIQtOYQhCAQhcWJ4vBTtLp5WRgfvEAn0BNyg7UBVxiva1Ttu2CJ0pGzj4W/XdJmM9p9dLcMLYm7WaNfmml0fO1riT7PT/Z4zaWXQn91nP5jT3SX2dsytYepIPtzSLWVcsrs0r3Pdfcm+nknbg2Twxt/iP4LOXjeEOXHvD4qIROz+8j382pEw+Hy9VcrHtawB2oI1HUJCxzB+5lLgD3b/ENNAel+u6TLmmtaYUUFx5LdLTi2gWeH39lKOpwUlC8WAbhcVSGkGwTNJQArifh4Wvsqv+IIQI7gW1smHhel7rCqyT94AKM47Aa1jRzKduGMMMuGiK1+8cAR5CyZXWknlUvDIW2WUkoJ0Firs4h7Oqd+UAd3lbYW5lVtx3w4aOSJv77M3y0/JWWWprReYzNoDcqSwzA5HPZYgDMCfK3NQ4JGo0TFgGKagHfqlIufBJ9GgnNYAfIJ4oqPMLnZVrwUXTPDW6gfERrb1PJW9CAGgBcZ26atukTWUAB0CUuLeKp6RgjpmNfI4gFzjo0nQH0Ce8RfYWuq54locxcOo3Vk1kttuKc4aY8U8feSiV5u5zx1duPZSqpCixyeilcGuJaD8JNwQfwKbeF+0bv5hFMwNB0a6/PzW3HLBYSF7p5W5XQm2NKJx/tUrJrthDYGdRrJ/wB2ySaiolkOaR73Hq5xP0WprSTZb5RYLbpqCNq55BquuM6LnnKqsG7iyduCRmlYwbhySYhqPVP/AGaQ5ql/llKxl43gt/usz2ttYDmuHiqjHdW0NiuuerDXWdpfY8loxKPMx46Nv9QuM5VpUp4CCpONmi1U2tlIxR3V2jkkYuCrNh0UvPoFC1ZBO61j6iu+N5M0kY8yro4OibHRU/WxcfoqX4lgMtWyFu+lvUk3/JXrg8TY4I4T8bYm6J8t8jWHjpq5O9J0sAN1TPa/OJKqKMG7o47HyJ1APsQrcxLEW0tO+aS1mt083W0avnw1Tp6iSaQ3c4k+g2A+QCvxT9qX1BywubupPhbDmT1DGPfkbfXWxI6N817iY8OyimOIsQSCNQQulY8r6u4Vw2ngha2AeHqfiJ/iXRX8QtbJ3bCC4b66D1VI4Dx/UNpHsB/tQMrXciOvqtnBmNmQ+NxLt3X3uuP0sdLdrnNXnGu6isThBBedALk+g1K5sOqAeq4uOcVEdOWMcO8k8Po06E/JSb2ZecVLjcgMr3A6FxXHRT93Ix/RzSfnqt1br6jf+q4JCurP519J0VS18bHt8QcARz5boVR8E8ffZWGGUZ47Xj6t8ihGOq+gbzWNUVviGi5qgrStlMsamNu99VlANFpnQYxGxBVg9lGtS/zaPxVeBP8A2UO/aCPILOfjeC5qkMeMj26WtdRGHVvcSimqbZTcRPOzmkg5SdgdOfRTkVunNZVFMyRpZIxrmnqNvQrg3I463AInnNG4NPkQQfQ7KKMEkZs8adf9Ew0uDQN+FpHlmK7nYfG4Wt7boWESskGuqg6iTVN/EOBFgL2AkDfySVVizXHoF0xYqA4XhE+LknUMF/qVdrsMbJZ48LwdD+SqPskpc1ZUSEfD+eyuCvxCOngdLIQA1ptfmbaWHNZy7k3POqb7XOIe9kFKw2jiN3b+KT+g2SHRP1uOe6347UGSWSQ/ecXfNR0ZI1C7ScctpWpZmaoOeHKVK09dycFw4pH4sw2KqXrowmoFsh0P4rvoXOinD2fCfiS402N1P0UgLb/mosOr+M3htoxr1KgKqvfI4veSXHz0Ua3RbmXUkka0yeOa4zQSTSMijAzPNhcgDYnUnTku1a5R5kHkRuPQrRZtD1NEYnuYTZzHZXW1HsdivF5LTvzHn5km580Ij2Oey1vN163RY5gjLcX5QuV7rle3RZABWB2Qi9Uf5CfokBo1T92ROtUu/kK55+N4LtgH5re1oKj43grojfZcbHSO1rrLcyULljlXFj9TLHCXQtDn5mj0B3KaWmBxDgWnYjW/mqnxqiImkZbwtzOPkAL6p1wPEZn5w9pyi2V3U80p8el0bpcvxTtbG3rcnVb+PjnlHN2S01oJZrf3srg30aGi/putXbFK7NA25y6kjknfhnC2wQNiaPDG1rfcgEn5lV52wSftMY6M/G6uHbtrL+Kt6iO5K5TSFdLpdUNqV2c9MIqUblZ1TW5SPksTLdZNbf0Q0g3Nsu/DJtMi6K6nDmki1wolsljcboniezea3QyXOvJcsbgWghZXWWtu/vF4dVzsctmdUYSU5KFmHeqE2ukA5ywWVkKuYRdFkWQegp/7HiPthB1vG780gBPfZK61YP5CPpdZz8bw9XoKUclkIQsoZF0gAjZca66YxUwXUKULTE6y7m7LG0y41CEAWt7DTVVxi9qvFBzZTfIv6J54lxMU1NJKTq0HL/NyCVOCcMdk7x48Uh71x8zsPkuk5HP9NscVmC+51KpftZfesI6Nb+au6QeH9eSo7tVP7c8dGt/NX4281fSHVais5Tqta7ObIFeh61rcxqKGNK5KymI1GykmN0W2OEnQ7KVEPQy2Nr6FSTCoutpzG8jly5LuppswFkqR1XWxoWkFZgqNRsvZCyAXivFQVl5ZZyELBVzCCvF6g9YU6dl0mWuZ53H0Sa0Jq4BNq2HzP5LGfjWHr6Dgcuxi44BouqN3Vcfx6GRC64XXGy0MC4OIMU+zQPkte2g9TspJ1nLwr8X1n2mqbStN44yHy+Z+638U54FS5I7nc/Qch8kj8K4eXOu83c49489b/CPTdWPELAK5X+nOzWLVMLBUL2ou/bpPRqvuUKge07/HTeo/BdPjKQ5hqta2SbrArqyyYxb22XMyRZd6pVd0ZC3xxg/esopkpUjRsa7Uk7XUVqraLO23MbKEgeWPsfdMLWHfkPmozF6O39p81YzY6GnS6zYo/D5/ursJUqx1tQtUUoQiv//Z")
     document.getElementById('wrapper').appendChild(x);
     x.setAttribute("width", "320");
     x.setAttribute("height", "240");
     x.setAttribute("controls", "controls");

        }

        if(wordGuess == 'fihira'){
         var x = document.createElement('img')
         x.setAttribute("src", "data:image/jpeg;base64,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")
         document.getElementById('wrapper').appendChild(x);
         x.setAttribute("width", "320");
         x.setAttribute("height", "240");
         x.setAttribute("controls", "controls");
        }
}

function cGuess(){
 computerGuess = array[Math.floor(Math.random() * array.length)]          
    console.log(computerGuess);
    selectedWord.push(computerGuess);
    console.log(selectedWord)
   
}

 cGuess()

     function main(){
    document.onkeyup = function(){
       var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
       wordGuess.push(userGuess);
       
       //console.log(wordGuess)
   userclick++
   chance--
   if(chance < 7 && chance >= 0){
   document.getElementById('chance').innerHTML = chance;
   }
   if(userclick < 7 && userclick > 0){
   document.getElementById('guess').innerHTML  += userGuess ;
   }
   for(let key of selectedWord.join(' ')){
      console.log(key)
      console.log(userGuess)
      console.log(wordGuess)
       if(key == userGuess && userclick < 7){
      //selectedWord.splice(selectedWord.indexOf(key), 1, userGuess)
      //console.log(selectedWord)
          document.getElementById('cchoice').innerHTML = selectedWord;
          break;
       } 
       
    }
    if(wordGuess.join('') == selectedWord){
       win++;
       chance = 6;
       document.getElementById('win').innerHTML = win;
       document.getElementById('chance').innerHTML = chance;
       document.getElementById('wrapper').innerHTML = '';
       video(wordGuess.join(''))
       eselectedWord()
       ewordGuess()
       userclick = 0;
       document.getElementById('guess').innerHTML  = '';
       cGuess()
       document.getElementById('cchoice').innerHTML = selectedWord;
      } 
      if(userclick > 6 &&  wordGuess.join('') !== selectedWord){
         alert('YOU LOSE, PLEASE TRY AGAIN')
         eselectedWord()
       ewordGuess()
       userclick = 0;
       document.getElementById('guess').innerHTML  = '';
       cGuess()
      }
   }
}
   
main()
// var empty = [];
// var uselect = [];
// var uclick = 0;
// var array = ['solomon', 'simon']
// var win = 0;
// var choice = array[Math.floor(Math.random() * array.length)]
//     for(let key of choice)
//      empty.push(key);
//      console.log(empty)
//      document.getElementById('cchoice').value = empty;
//      // document.getElementById('cchoice').style.visibility = 'hidden'
     
     

//    document.onkeyup = function(){
//       var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//       console.log(userGuess);
//       uclick++
//       console.log('user click '+ uclick)
//       for(let key of empty){
//       if(userGuess == key){
//          uselect.push(userGuess)
//          win++
//          console.log('win ' + win)
//          empty.splice(empty.indexOf(key), 1, userGuess);
//          document.getElementById('cchoice').innerHTML += userGuess;
//         //document.getElementById('cchoice').innerHTML += empty.splice(empty.indexOf(key), 1, userGuess);
        
         
//          break;
//       }
       
      
//    }
//       //empty = document.getElementById('cchoice').innerHTML
      
      
//        console.log(empty)   
         
         
//       }
      
          
      
         

      
   
      
      





   
       
    
   
   


  
   

   

  


 