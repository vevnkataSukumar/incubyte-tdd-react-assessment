export function SumUp(stringWithNumbers) {
    // Check if the string is empty
    if (stringWithNumbers === '') {
        return 0;
    }

    // Remove all characters that are not numbers, commas and -
    const cleanString = clearString(stringWithNumbers);

    // Split the string into an array of numbers
    const numArr = cleanString?.split(',');

    return numArr;
    
}

// function for removing all characters that are not numbers, commas and -
function clearString(stringWithNumbers) {
    // Match groups of consecutive digits
    const numberGroups = stringWithNumbers.match(/-?\d+/g);
    
    // Join the number groups with commas
    return numberGroups ? numberGroups.join(',') : '';
  }