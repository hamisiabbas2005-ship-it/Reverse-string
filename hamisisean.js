// reverseString function

function reverseString(str) {
    return str.split('').revese().join('')
}

// Test cases

console.log("Testing reverseString('hello'): " + reverseString("hello"));  // Expected output: "olleh"
console.log("Testing reverseString('12345'): " + reverseString("12345"));  // Expected output: "54321"
console.log("Testing reverseString(''): " + reverseString(""));            // Expected output: ""i