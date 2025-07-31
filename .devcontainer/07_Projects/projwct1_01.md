## project 1
``` javascript

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {

  console.log(button);

  button.addEventListener('click', function (e) {

    console.log(e);

    console.log(e.target);
    
    if (e.target.id === 'grey') {
      body.style.background = e.target.id;
    };

    if (e.target.id === 'white') {
      body.style.background = e.target.id;
    };

    if (e.target.id === 'blue') {
      body.style.background = e.target.id;
    };

    if (e.target.id === 'yellow') {
      body.style.background = e.target.id;
    };

    if (e.target.id === 'Purple') {
      body.style.background = e.target.id;
    };
  });
});

```


## Project 2 solution
``` javascript

const form = document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);

  const weight=parseInt(document.querySelector('#weight').value);

  const results=document.querySelector('#results');


  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === ''|| weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }else{
   const BMI= (weight/((height*height)/10000)).toFixed(2)  //decimal value after . till 2

   // show the result
   results.innerHTML=`<span>${BMI}</span`;
  }

});

```

## project 3 solution
``` javascript

const clock=document.getElementById('clock')
//document.querySelector('#clock')

setInterval(function(){
  let date= new Date()
  clock.innerHTML= date.toLocaleTimeString();
  //console.log(date.toLocaleTimeString());
}, 1000); // setinterval is used for event that occurs continuously , that gives the updated time continuously 1000ms means after 1sec.





```
