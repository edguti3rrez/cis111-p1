/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Using prompts and getting user input to display area and perimeter for given dimensions
*/

// prompts user to input width then height and stores
let dimension1 = prompt("Enter the width", "3"); 

// stores the prompted values from before into variables, and holds numbers now with parsefloat
let dimensionWidth = parseFloat(dimension1);

let dimension2 = prompt("Enter the height", "4");

let dimensionHeight = parseFloat(dimension2);


// calcualates the area
function getArea(width, height) {
    return width * height;
}

// calculates the perimeter
function getPerimeter(width, height) {
    return width * 2 + height * 2;
}

// Displays the perimeter and area in console
function displayOutput(width, height) {
    let output1 = getPerimeter(width, height);
    let output2 = getArea(width, height);
    console.log("width =", width, "\nheight =", height, "\narea =", output2, "\nperimeter =", output1);
}

/* 
    Takes the earlier prompts and calls back the functions above to make the 
    calculations and display in console
*/
displayOutput(dimensionWidth, dimensionHeight); 