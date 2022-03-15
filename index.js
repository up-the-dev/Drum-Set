var allElementsWithDrum = document.querySelectorAll(".drum");
for (var i = 0; i < allElementsWithDrum.length; i++) {
   allElementsWithDrum[i].addEventListener("click", function () {
      soundAction(this.innerHTML);
      pressAction(this.innerHTML);
   });
   document.addEventListener("keydown", function (event) {
      soundAction(event.key);
      pressAction(event.key);
   });
}

function soundAction(content) {

   switch (content) {
      case 'w':
         var audio = new Audio("/sounds/tom-1.mp3");
         audio.play();
         break;
      case 'a':
         var audio = new Audio("/sounds/tom-2.mp3");
         audio.play();
         break;
      case 's':
         var audio = new Audio("/sounds/tom-3.mp3");
         audio.play();
         break;
      case 'd':
         var audio = new Audio("/sounds/tom-4.mp3");
         audio.play();
         break;
      case 'j':
         var audio = new Audio("/sounds/crash.mp3");
         audio.play();
         break;
      case 'k':
         var audio = new Audio("/sounds/kick-bass.mp3");
         audio.play();
         break;
      case 'l':
         var audio = new Audio("/sounds/snare.mp3");
         audio.play();
         break;

      default:
         break;
   }
}
   function pressAction(content) {
      var target = document.querySelector("." + content);
      target.classList.add("animate");
      setTimeout(function () {
         target.classList.remove("animate");
      }, 100);


   }

