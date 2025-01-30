export function SumUp(stringWithNumbers) {
    // Check if the string is empty
    if (stringWithNumbers === '') {
        return 0;
    }
    const splitVal = stringWithNumbers.split('\\n');
    const delimeter = splitVal[0].replace('//', '');

    // Remove all characters that are not numbers, commas and -
    const cleanString = clearString(stringWithNumbers);

    // Split the string into an array of numbers
    const numArr = cleanString?.split(','); // '2,3' ==> [2,3]

    // Filter out numbers greater than 1000
    const numbersArray = getFilteredNumbersArray(numArr);

    // Check if the array has any negative numbers
    if (doesNumbersArrayHaveNegativeNumber(numbersArray)) {
        return 'negatives not allowed';
    }

    let result;

    if (delimeter === '*') {
        result= numbersArray?.reduce((total, num) => total * num, 1);
    } else {
        result = numbersArray?.reduce((total, num) => total + num, 0);
    }

    return result;
}

// function for removing all characters that are not numbers, commas and -
function clearString(stringWithNumbers) {
    // Match groups of consecutive digits
    // imput as //;\n2;3 
    const numberGroups = stringWithNumbers.match(/-?\d+/g); // '2,3'
    
    // Join the number groups with commas
    return numberGroups?  numberGroups.join(',') : '';
}

// fuction for converting string to array of numbers aqnd filtering out the numbers which are greater than 1000
function getFilteredNumbersArray(numArr) {
    //stringArray.map(Number)
    return  numArr.map(Number)?.filter((num) => num && num < 1000);
  }

// function for checking if the array has any negative numbers
function doesNumbersArrayHaveNegativeNumber(numbersArray) {
    // Check if any number in the array is negative
    return numbersArray.some(num => num < 0);
  }

// function for summing the numbers in the array
function sumNumbers(numArray) {
    return numArray?.reduce((acc, num) => acc + parseInt(num), 0);
  }