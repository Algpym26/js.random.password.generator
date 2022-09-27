// Assignment Code
var choices = ('R', 'P', 'S')
var generateBtn = document.getElementById('generate')
// Write password to the #password input
function generatePassword() {
  var userchoice=[]
  var length = prompt('who long you want your password to be?')
  console.log(length)
  var lowercase = confirm('do you want a lowercase?')
  //console.log(lowercase)
  if (lowercase == true) {
    userchoice= userchoice.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
    console.log(userchoice)
  }
  var uppercase = confirm('do you want Uppercase?')
  if (uppercase == true) {
    userchoice= userchoice.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"])
    console.log(userchoice)
  }

  var numeric = confirm('do you want numeric?')
  if (numeric == true) {
    userchoice= userchoice.concat(["1","2","3","4","5","6","7","8","9","0"])
    console.log(userchoice)

  }

  var specialcharacter = confirm('do you want special character?')
  if (specialcharacter == true) {
    userchoice= userchoice.concat(["+", "-", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","&","/","_","!","<",">","@","#","$","%","`",";",":",])
    console.log(userchoice)

  }
  var password=""
  for (let i=0; i < length; i++){
  password=password+userchoice[Math.floor(Math.random() * userchoice.length)];  


  }
  return(password) 
}
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
