const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight'
    }
    else {
        const bmi = (weight / (height / 100) ** 2).toFixed(2);
        results.innerHTML = `<span>Your BMI is : ${bmi}</span>`;
    }
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    const guide = document.querySelector('.guide')
    if(bmi < 18.6){
        guide.innerHTML = `You are Under Weight!`
        guide.style='color: yellow'
    }
    else if(bmi > 24.9){
        guide.innerHTML = `You are Over Weight!`;
        guide.style='color: red;'
    }
    else{
        guide.innerHTML = `You are in Normal Range!`
        guide.style='color: green;'
    }

})
