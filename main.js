function generateMatrix(A) {
  const n = A.length; // The size of the input array A
  const M = []; // The 2D matrix M to store results

  // Create a 2D matrix of size n x n
  for (let i = 0; i < n; i++) {
    M[i] = [];
    for (let j = 0; j < n; j++) {
      if (i <= j) {
        let sum = 0;
        for (let k = i; k <= j; k++) {
          sum += A[k]; // Sum the values from index i to j
        }
        M[i][j] = sum / (j - i + 1); // Calculate the average
      } else {
        M[i][j] = 0; // If i > j, set the value to 0
      }
    }
  }

  return M; // Return the resulting matrix
}

// Test the code
const A = [1, 2, 3, 4, 5]; // Example input: an array of real numbers
const M = generateMatrix(A); // Generate the matrix M

// Print the resulting matrix M
console.log("The matrix M:");
M.forEach((row) => console.log(row));

function isPalindrome(sentence) {
  // Remove spaces and convert the sentence to lowercase
  sentence = sentence.replace(/\s+/g, "").toLowerCase();

  // Base case: If the sentence has one or no characters
  if (sentence.length <= 1) {
    return true;
  }

  // If the first character is not equal to the last character, it's not a palindrome
  if (sentence[0] !== sentence[sentence.length - 1]) {
    return false;
  }

  // Recursively call isPalindrome with the substring excluding the first and last characters
  return isPalindrome(sentence.substring(1, sentence.length - 1));
}

// Test the function
console.log(isPalindrome("رادار")); // true
console.log(isPalindrome("سر فلا كبت بك الفرس")); // true
console.log(isPalindrome("بلح تعلق بقلعة حلب")); // true
console.log(isPalindrome("hello")); // false
