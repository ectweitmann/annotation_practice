// Declares a fucntion called addNumbers with no parameters
function addNumbers() {
  // Declare two variables firstNum and secondNum, and assign them the values of 9 and 14 respectively
  var firstNum = 9
  var secondNum = 14

  // Re-assign the values of firstNum and secondNum to 3 and 4 respectively
  firstNum = 3
  secondNum = 4

  // Declare the variable nums and assign it the value of an array which contains
  // firstNum and secondNum
  var nums = [firstNum, secondNum]

  // Declare the variable product and assign it the product of firstNum and secondNum
  var product = firstNum * secondNum
  // Declare the variable sum and assign it the sum of firstNum and secondNum
  var sum = firstNum + secondNum
  // Declare the variable average and assign it the quotient of sum and nums.length
  var average = sum / nums.length

  // Log the value of the element in index 0 of the nums array to the console
  console.log(nums[0])
  // Log the value of the element in index 1 of the nums array to the console
  console.log(nums[1])

  // Interpolate the values of firstNum and secondNum into the string
  console.log(`The first number is ${firstNum} and the second number is ${secondNum}!`)

  // Ends the addNumbers function and returns the value of sum 
  return sum
}
