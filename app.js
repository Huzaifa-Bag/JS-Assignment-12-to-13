//                    <<<<<<<<<<<<<<<<<<<< Assignment 12 to 13>>>>>>>>>>>>>>

  
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

                        //    Answer

var num1 = prompt("enter your number")
var num2 = prompt("enter your number")
var num = parseInt(num1,num2)
if(num1 > num2){
alert(num1 + " is large " + num2)

}else if(num2 > num1){
    alert(num2 + " is large " + num1)
}else(
    alert(num1 + "  are equal number  " + num2)
)


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

                                //    <<<Answer>>>

var input = prompt("enter your number")
var num = parseInt(input)
if(input > 0){
alert("The number is positive ")
}else if(input<0){
alert(" The number is negative")
}else{
    alert(" The number is zero")
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise.

                                 //    <<<Answer>>>                                         
var vowel = ['a','e','i','o','u']
var value = prompt('Enter a character')
flag = false
for (var i=0; i<vowel.length;i++){
    if(value==vowel[i]){
        flag=true
        break
    }else{
        flag=false
    }
}
if (flag){
    alert('character is vowel')
}else{
    alert('character is not vowel')
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

                             //    <<<Answer>>>

var correct_Pass = "mypassword";  
var user_Pass = prompt("Enter your password: ");  
if (user_Pass === "") {  
  alert("Please enter your password");  
} else if (user_Pass === correct_Pass) {  
  alert("Correct  password");  
} else {  
  alert("Incorrect password");  
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

                             //    <<<Answer>>> 
var hour = 13;

 if (hour < 18) {
console.log("Good day");
 }else{
    console.log("Good evening ");
 }



// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements.

                                        //    <<<Answer>>> 

var time = prompt('Enter time')
if (time>=0 & time<1200){
    alert('Good morning')
}else if (time>=1200 & time<1700){
    alert('Good Afternoon')
}else if (time>=1700 & time<2100){
    alert('Good Evening')
}else if (time>=2100 & time<2359){
    alert('Good night')
}






