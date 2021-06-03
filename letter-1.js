/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Inch to milimeter conversion for a sheet of paper
*/

const inchmm_conversion= 25.4;

// converts inches to mm
function inchesToMM(inches) {
    return inches * inchmm_conversion;
}

// once tiggered by user, will display the conversions of inches to mm
function displayOutput() {
    let output1 = inchesToMM(8.5);
    let output2 = inchesToMM(11);
    console.log("8.5 x 11 inches =", output1, "x", output2, "millimeters");
}

// user input:
displayOutput ()