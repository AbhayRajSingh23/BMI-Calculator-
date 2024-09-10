# BMI Calculator

This project is a simple BMI (Body Mass Index) calculator that allows users to input their height and weight to calculate their BMI and provides feedback on their weight category (underweight, normal weight, or overweight). The project is implemented using HTML, CSS, and JavaScript.

## Features

- Input fields for height (in centimeters) and weight (in kilograms).
- Calculates BMI based on the user input.
- Provides feedback on the weight category (underweight, normal range, or overweight).
- User-friendly and interactive interface.

## Technologies Used

- **HTML**: For the structure of the form and page layout.
- **CSS**: For styling the page elements and feedback messages.
- **JavaScript**: For handling user input, calculations, and dynamically updating the content on the page.

## How to Use

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in any web browser.
3. Enter your height in centimeters and weight in kilograms in the respective input fields.
4. Click on the "Submit" button to calculate your BMI.
5. Your BMI and corresponding weight category will be displayed on the screen.

## Code Explanation

The JavaScript code listens for the `submit` event on the form and calculates the BMI based on the user's input. It then displays the BMI result and provides feedback based on the BMI range:

```javascript
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
        results.innerHTML = 'Please give a valid weight';
    }
    else {
        const bmi = (weight / (height / 100) ** 2).toFixed(2);
        results.innerHTML = `<span>Your BMI is : ${bmi}</span>`;

        const guide = document.querySelector('.guide');
        if (bmi < 18.6) {
            guide.innerHTML = `You are Under Weight!`;
            guide.style = 'color: yellow';
        }
        else if (bmi > 24.9) {
            guide.innerHTML = `You are Over Weight!`;
            guide.style = 'color: red;';
        }
        else {
            guide.innerHTML = `You are in Normal Range!`;
            guide.style = 'color: green;';
        }
    }
});
```
#[Live Demo]([https://your-live-demo-link.com](https://abhayrajsingh23.github.io/BMI-Calculator-/))
