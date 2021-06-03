/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Getting perimeter for a sheet of paper
*/

const inchmm_conversion = 25.4;

// converts inches to mm (inches*25.4)
function inchesToMM(inches) {
    return inches * inchmm_conversion;
}

// calculates the perimeter of a given height and width
function getPerimeter(width, height) {
    return width * 2 + height * 2; 
}

/* uses user input and converts inches to mm with the first function, 
calculates perimter with second function, and then displays it all in the console */
function displayOutput(width, height) {
    let output1 = getPerimeter(width, height); 
    let output2 = inchesToMM(output1); 
    console.log("For an", width, " x", height, "inch sheet paper:", "\nPerimeter =", output1, "inches or", output2, "millimeters");
}

// user input:
displayOutput (8.5, 11)