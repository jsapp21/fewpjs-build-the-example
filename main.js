function main(){
  heartEventListener()
  addIdsToHearts()
}
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'




// add eventlistner on the heart
  // fectch this fuction minicSererCall  
  // .then
  // responed to .then using .catch()
  // display model error remove .hidden class
  // add a setTimeout to remove model after 5 secs

function addIdsToHearts(){
  document.body.querySelectorAll('.like-glyph').forEach(heart => heart.id = "heart")
}


function heartEventListener(){
  document.body.addEventListener('click', function(event){
    mimicServerCall()
    .then(function(response){
      if (event.target.id  === 'heart'){
        if (event.target.innerText === FULL_HEART){
          event.target.innerText = EMPTY_HEART
          event.target.className = ""
        }
        else {
        event.target.innerText = FULL_HEART
        event.target.className = "activated-heart"
        }
      }  
    })
    .catch(error => {
      const div = document.getElementById('modal')
      div.className = ""
      setTimeout(function(){ 
        div.className = "hidden"
        console.log("this works")}, 5000)
    }) // this closes .catch
  }) // this cloes event listner
} // this closes hearEventListener




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

main()