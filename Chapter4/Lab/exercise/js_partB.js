var make;
var model;
var year;
var color;

const car = {
    make: "Mazda",
    model: "Mazda 3",
    year: 2020,
    color: "Grey"
};

// make = "Mazda";
// model = "Mazda 3";
// year = 2020;
// color = "Grey";

function displayInfo() {
    window.alert("Car Information:\n Make: " + car.make + "\nModel: " + car.model + "\nYear: " + car.year + "\nColor: " + car.color);
}

displayInfo();

function calculateAge() {
    var currentYear = new Date().getFullYear();
    var age = currentYear - car.year;
    window.alert("Current Year: " + currentYear + "\nCar Year: " + car.year + "\nThe car is " + age + " years old.");
}

calculateAge();

function changeColor(newColor) {
    car.color = newColor;
    window.alert("The car color has been changed to: " + car.color);
}

changeColor("Blue");

displayInfo();