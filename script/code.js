// Here is a BMI guide:

// 18.5 = Underweight
// 18.5 to 24.9 = Healthy
// 25 to 29.9 = Overweight
// 30 or higher = Obese
//  function addition() {
//      let numb1 = document.getElementById('numb1').value
//      let numb2 = document.getElementById('numb2').value
//     let sum = +numb1 + +numb2
// lblOutput.innerHTML = `<strong>${sum}`}

window.onload = () => {
  let button = document.querySelector('#btn');

  
  button.addEventListener('click', calculateBMI);
};

function calculateBMI() {
  
  let height = parseInt(document.querySelector('#height').value);

  
  let weight = parseInt(document.querySelector('#weight').value);

  let result = document.querySelector('#result');


  if (height === '' || isNaN(height))
    result.innerHTML = 'Provide a valid Height!';
  else if (weight === '' || isNaN(weight))
    result.innerHTML = 'Provide a valid Weight!';
  
  else {
    
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) result.innerHTML = `This describe as Under Weight : <span>${bmi}</span>`;
     if (bmi >= 18.6 && bmi < 24.9)
        result.innerHTML = `This describe as Normal : <span>${bmi}</span>`;
        if (bmi >= 25 && bmi < 29.9)
          result.innerHTML = `This describe as Over Weight : <span>${bmi}</span>`;
        else
          result.innerHTML = `This describe as Obesity : <span>${bmi}</span>`;
  }
}
