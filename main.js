var one = document.querySelector ('#value-one')
var two = document.querySelector ('#value-two')
var button = document.querySelector ('#calculate-button')
var answer = document.querySelector ('#answer')
//making my id from the html variable//

button.addEventListener('click',function add(event) {
  //button is waiting for something to happen, so i put the eventListener
  //so when the button is pushed it does something//
event.preventDefault();
//this pervents the page to refresh auto//
  var total = parseInt(one.value) + parseInt(two.value)
  console.log('total',total);
  answer.textContent = total
  //had to find the right discription to display the answer whent to the console
  //and typed out var thing = dacument.querySelector ('#answer')//
//had to find what the thing was to understand how to get the answer//

});
