// Invoked function & arrow function ---------------------------

(function(){
  let counter = 0;
  const decrement = () =>{
    counter--;
    updateCounter();
  };
  const increment = () =>{
    counter++;
    updateCounter();
  }
  const updateCounter = () =>{
    document.getElementById("counter").innerHTML = counter;
  }
  const reset = () => {
    counter = 0;
    updateCounter();
  }
  document.getElementById("increment").addEventListener("click",increment);
document.getElementById("decrement").addEventListener("click",decrement);
document.getElementById('reset').addEventListener("click", reset);
})();


