// Chapter # 1

// Task 1:

alert("Hellow World!")

// Task 2:

alert("Error! Please Enter a valid Password.")

// Task 3:

alert("Welcome to Js Land... \n Happy Coding!")

// Task 4:
alert("Welcome to Js Land... ")

// Task 5:

var a = "Hello... I can run Js throug my web browser's console"
console.log(a)

// Task 6:

<script src="app.js"></script>

// Task 7a:

<script src="app.js"></script>
// Task 7b:

<script src="app.js"></script>
// Task 7c:

<script src="app.js"></script>

// Task 7d:

<script src="app.js"></script>




// Chapter # 2

// Task 1:

var username = "";

// Task 2:

var myName = "Khurram Shehzad Ahmed";
alert(myName);

// Task 3:

var message = "Hellow World";
alert(message)

// Task 4:

var studentName = "Jhone Doae";
var age = "15 Year's Old";
var certificate = "Certified Mobile Application Development";

alert(studentName);
alert(age);
alert(certificate);

// Task 5:

var n = "PIZZA";
for(var i = 5; i>=1; i--){
    for(var j=1; j<=i; j++){
        document.write(n);
    }
    document.write('<br>');
}


// Task 6:

var email = "khurram2201022@gmail.com";
alert("My email address is " + email)

// Task 7:

var book = "A Smart Way to Lean Java Script";
alert("I am trying to learn from the Book " + book)

// Task 8:

document.write("Yah! I can write HTML content through Java Script")

// Task 9:



// Chapter # 3

// Task 1:

var age = "15";
alert("I am " + age + " years old");

// Task 2:


// Task 3:

var birthYear = +prompt("Enter Your Aage Year");
document.write(" My birth year is " +  birthYear + "<br>")
document.write("Data type of my decleared variable is number")


// Task 4:

document.write("John Doe ordered 5 T-shirt(s) on XYZ Clothing store")



// Chapter # 4

// Task 1:

var n1,n2,n3;


// Task 2:

<h1>Leagle Variables</h1>
    <p>
        <ol>
            <li>Only Letters</li>
            <li>Numbers</li>
            <li>$</li>
            <li>_</li>
            <li>name1</li>
            
        </ol>
    </p>
    <h1>Illigal Variables</h1>
    <p>
        <ol>
            <li>%</li>
            <li>&</li>
            <li>*</li>
            <li>Starting Numbers</li>
            <li>1name</li>
            
            
        </ol>
    </p>

// Task 3:

<h1>Rules for naming JS variables</h1>
    <p>Variable names can only contain, numbers, $ and _. For example: $my_1st Variable </p>
    <p>Variables must begin with a letter, $ or For example $name, _name or name </p>
    <p>Variable names are case sensitive </p>
    <p>Variable names should not be JS keywords</p>


// Chapter # 5

// Task 1:

var num1 = +prompt("Enter Your First Value");
var num2 = +prompt("Enter Your Second Value");
document.write(" Sum of " + num1 + " and " + num2 + " is " + (num1+num2))

// Task 2:

var num1 = +prompt("Enter Your First Number");
var opp = prompt("Enter the Operator");
var num2 = +prompt("Enter the Second Number");
if(opp == '-'){
    document.write(" Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
}
else if(opp == '*'){
    document.write(" Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
}
else if(opp == '/'){
    document.write(" Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
}
else if(opp == '%'){
    document.write(" Modulus of " + num1 + " and " + num2 + " is " + (num1 / num2))
}


// Task 3:

var a;
document.write("Value after variable declaration is undefined" + "<br>");
var b = 5;
document.write(" Initial value: " + b + "<br>");

b++;
document.write(" Value after increment is: " + b + "<br>");

document.write(" Value after addition is: " + (b+7) + "<br>");

b--;
document.write(" Value after decriment is: " + (b+7) + "<br>");

document.write(" The remainder is : " + (b+7)%3 + "<br>");


// Task 4:

var price = 600;
var ticket = 5;
document.write("Total Cost to buy 5 tickets to a movie is " + (price*ticket) + " PKR ")

// Task 5:

var num = +prompt(" Enter the Table Number ");
document.write("Table of "+ num + "<br>")

for(var i=1; i<=10;  i++){
    
    document.write(num + "x" + i + " = " + (num*i) + "<br>")
}


// Task 6:

var c = +prompt("Enter the Temperature in Degree ");

document.write(c + "<sup>0 </sup>"+ "C" + " is " + ((f = c*9/5)+32) + "<sup>0 </sup>" + "F" + "<br>")



var f = +prompt("Enter the Temperature in Fahrenheit ");

document.write(c + "<sup>0 </sup>"+ "F" + " is " + ((c = f-32)*5/9) + "<sup>0 </sup>" + "C")


// Task 7:

document.write("Shoping Chart")
var itm1 = 650;
var itm2 = 100;
var ship = 100;
document.write("price of item 1 is " + itm1 + "<br>");
document.write("Quantity of item 1 is 3" + "<br>");

document.write("price of item 2 is " + itm2 + "<br>");
document.write("Quantity of item 2 is 7" + "<br>");

document.write("Shiping charges " + ship + "<br>");

document.write("Total Cost of your order is " + ((itm1*3)+(itm2*7)+100) + "<br>");


// Task 8:

document.write("Marks Sheet")
var totalMark = +prompt("Enter the total Marks");
var markObtained = +prompt("Enter the obtained Marks");

document.write("Total Marks: " + totalMark + "<br>");
document.write("Marks Obtained: " + markObtained + "<br>");

document.write("Percentage: " + ((markObtained*100)/totalMark) + " % ");

// Task 9:

document.write("Curency in Rupees")
var us = +prompt("Etner the US Doller");
var sudi = +prompt("Etner the Sudi Real");

var rupee = ((us*104.80)+(sudi*28));

document.write("Total Carency in PKR " + rupee);


// Task 10:

var a = +prompt("Enter Any Number");

document.write("Your Required Result is " + (((a+5)+(a*10))/2))

// Task 11:

document.write("The Age Calculator:")
var currentYear = +prompt("Enter the Current Year");
var birthYear = +prompt("Enter your Birth Year");

document.write("Current Year :" + currentYear + "<br>");
document.write("Birth Year :" + birthYear + "<br>");

document.write("Your Age is :" + (currentYear-birthYear) + "<br>");


// Task 12:

document.write("The Geometrizer:")
var r = +prompt("Enter the Radius of a Circle");

document.write("Radis of Circle : " + r + "<br>");

document.write("The Circumferance is : " + (r*3.142*2) + "<br>");

document.write("The Area is : " + (r*3.142*r) + "<br>");


// Task 13:

document.write("The Lifetime Supply Calculator:")
var fs = prompt("Enter Your Favirit Snake ");
var age = +prompt("Enter Your Age ");
var mage = +prompt("Enter Your Maximum Age ");
var sday = +prompt("Enter Amount of snakes per day ");

document.write("Favorite Snake : " + fs + "<br>");

document.write("Current Age : " + age + "<br>");

document.write("Estimated Maximum Age : " + mage + "<br>");

document.write("Amount of Snake per Day : " + sday + "<br>");

document.write("You will need " + ((mage-age)*3) + " " + fs + " to last you to untill the ripe old age of " + mage + "<br>");



// Chapter # 6-9

// Task 1:

var a = +prompt("Enter a number");

document.write("Result : " + "<br>");

document.write("The Value of a is  : " + a + "<br>");

document.write("------------------------------------------" + "<br>"+ "<br>");

++a;
document.write("The Value of ++a is  : " + a + "<br>");
document.write("Now the Value of a is  : " + a + "<br>"+ "<br>"+ "<br>");


document.write("The Value of a++ is  : " + a + "<br>");
a++;
document.write("Now the Value of a is  : " + a + "<br>"+ "<br>"+ "<br>");

--a;
document.write("The Value of --a is  : " + a + "<br>");
document.write("Now the Value of a is  : " + a + "<br>"+ "<br>"+ "<br>");


document.write("The Value of a-- is  : " + a + "<br>");
a--;
document.write("Now the Value of a is  : " + a + "<br>"+ "<br>"+ "<br>");

// Task 2:

var a = 2;
var b = 1;

document.write("a is  : " + a + "<br>");
document.write("b is  : " + b + "<br>");

var c = --a - --b + ++b + b--;
document.write("Result is  : " + c + "<br>");

c = --a ;
document.write("Result is  : " + c + "<br>");

c = --a - --b;
document.write("Result is  : " + c + "<br>");

c = --a - --b + ++b;
document.write("Result is  : " + c + "<br>");

c = --a - --b + ++b + b--;
document.write("Result is  : " + c + "<br>");

// Task 3:

var a = prompt("Enter your Name");


document.write("Welcome to " + a + "<br>");

// Task 4:

Question is not Given.

// Task 5:

var num = +prompt(" Enter the Table Number ");


for(var i=1; i<=10;  i++){
 
    document.write(num + "x" + i + " = " + (num*i) + "<br>")
}


// Task 6:

document.write("<b>" + " Subject " +  " Total Marks " + " Obtained Marks " + " Percentage " + "</b>" + "<br>")

var a = prompt("Enter the First Subject");
var m1 = +prompt("Enter the Subject Marks");
var b = prompt("Enter the Second Subject");
var m2 = +prompt("Enter the Subject Marks");
var c = prompt("Enter the Third Subject");
var m3 = +prompt("Enter the Subject Marks");
var t = 100;

document.write( "<br>");
document.write(a + "&nbsp;&nbsp");
document.write(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(m1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
var p1 = ((m1*100)/t)
document.write(p1 + "%" + "<br>" + "<br>");

document.write(b + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(m1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
var p2 = ((m2*100)/t)
document.write(p2 + "%" + "<br>" + "<br>");

document.write(c + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(m1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
var p3 = ((m3*100)/t)
document.write(p3 + "%" + "<br>" + "<br>");

document.write("<b>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + (t*3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +  (m1+m2+m3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + ((p1+p2+p3)/3) +"%" + "</b>" + "<br>")




// Chapter # 9-11

// Task 1:

var a = prompt("Enter Your City");
var b = "Karachi"

if(a == b){
    alert("Welcome to city of lights")
}
else {
    alert("Try Another City")
}

// Task 2:

var gender = prompt("Enter Your Gender");
var b = "male";
var c = "female";

if(gender == b){
    alert("Good Morning Sir")
}
else if(gender == c) {
    alert("Good Morning Ma’am")
}
else{
    alert("Please Enter the Correct Gender")
}

// Task 3:

var trafic = prompt("Please Enter the Trafic Color");
var r = "red";
var y = "yellow";
var g = "green";

if(trafic == r){
    alert("Must Stop")
}
else if(trafic == y) {
    alert("Ready to Move")
}
else if(trafic == g){
    alert("Move Now")
}
else{
    alert("Please Enter the Correct Color")
}

// Task 4:

var fuel = +prompt("Please Enter Fuel in letters");
var l = 0.25;

if(fuel <= l){
    alert("Please refill the fuel in your car")
}

else{
    alert("You have a Fuel in the Tank")
}

// Task 5:

document.write("a. " + " given condition for variable a is true" + "<br>"+ "<br>");

document.write("b. " + " given condition for variable b is true" + "<br>"+ "<br>");

document.write("c. " + "condition 2 is true" + "condition 4 is true"  + "<br>" + "<br>");

document.write("d. " + "The cost equals"  + "<br>" + "<br>");

document.write("e. " + "True"  + "<br>" + "<br>");

document.write("f. " + "car is smaller than cat"  + "<br>" + "<br>");


// Task 6:

var mark1 = +prompt("Enter First Subject Marks");
var mark2 = +prompt("Enter Second Subject Marks");
var mark3 = +prompt("Enter Third Subject Marks");

var total = 300;
var c = (mark1+mark2+mark3);
var p = ((c*100)/total);



document.write("<h1><b>Marks Sheet</b></h1>");

document.write("Total Marks : " + "  " + total + "<br>");

document.write("Marks Obtaind : " + "  " + c + "<br>");

document.write("Percentage : " + "  " +  p  + "%" +  "<br>");

if(p >= 80 && p <= 100){
    document.write("Grade : " + " A +" + "<br>");
    document.write("Remarks : " + " Excellet " + "<br>");
}
else if(p >= 70 && p <= 80){
    document.write("Grade : " + " A " + "<br>");
    document.write("Remarks : " + " Very Good " + "<br>");
}
else if(p >= 60 && p <= 70){
    document.write("Grade : " + " B " + "<br>");
    document.write("Remarks : " + " You Need to Improve " + "<br>");
}
else if(p >= 50 && p <= 60){
    document.write("Grade : " + " C " + "<br>");
    document.write("Remarks : " + " You Need to Improve " + "<br>");
}
else if(p >= 40 && p <= 50){
    document.write("Grade : " + " D " + "<br>");
    document.write("Remarks : " + " You Need to Improve" + "<br>");
}
else if(p >= 33 && p <= 40){
    document.write("Grade : " + " E " + "<br>");
    document.write("Remarks : " + " Poor" + "<br>");
}
else{
    document.write("Grade : " + " Fail " + "<br>");
    document.write("Remarks : " + " Try Again +" + "<br>");
}


// Task 7:

var num = +prompt("Enter Number for 1 to 10");
var n = 3;
if(num == n){
    alert("Bingo! Correct answer");
}
else{
    alert("Close enough to the correct answer");
}

// Task 8:

var num = +prompt("Please the Enter Number ");
var n = (num%3);
if(n == 0){
    alert("The number is Divisible by 3");
}
else{
    alert("Try Another One");
}


// Task 9:

var num = +prompt("Please Enter a Number ");
var e = (num%2);
var o = (num%3);
if(e == 0){
    alert("The number is Even");
}
else if(o == 0){
    alert("The number is Odd");
}
else{
    alert("The number is Prime");
}


// Task 10:

var t = +prompt("Please Enter a Number ");

if(t > 40){
    alert("It is too hot outside");
}
else if(t > 30){
    alert("The Weather today is Normal");
}
else if(t > 20){
    alert("Today’s Weather is cool");
}
else{
    alert("OMG! Today’s weather is so Cool");
}


// Task 11:

var n1 = +prompt("Please Enter a Number ");
var o = prompt("Please Enter Operation ");
var n2 = +prompt("Please Enter a Number ");


if(o == "+"){
    alert("Your Result is : " + (n1+n2));
}
else if(o == "-"){
    alert("Your Result is : " + (n1-n2));
}
else if(o == "*"){
    alert("Your Result is : " + (n1*n2));
}
else if(o == "/"){
    alert("Your Result is : " + (n1/n2));
}
else if(o == "%"){
    alert("Your Result is : " + (n1%n2));
}
else{
    alert("Please Enter the Correct Operator");
}


// Chapter # 12-13

// Task 1:

var ch = prompt("Entery Any Value");

if(ch >= 'A'  && ch <='Z'){
    alert("Given input is a Upper Case Letter")
}
else if(ch >= 'a'  && ch <='z'){
    alert("Given input is a Lower Case Letter")
}
else{
    alert("Given input is a Number")
}

// Task 2:

var num1 = +prompt("Entery Any Number");
var num2 = +prompt("Entery Any Number");

if((num1, 10) > (num2, 10)) 
  { 
  alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else if((num2, 10) < (num1, 10)) 
  {
  alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   alert("The values "+ num1+ " and "+num2+ " are equal.");
  }

// Task 3:

var n = +prompt("Entery Any Number");


if (n <= 0.0){
    if(n == 0.0){
      alert("You enter 0" )  
    }
    else{
    alert("You enter a Negative Number" )
    }
    
}else{
    alert("You enter a Positive Number" )
    }


// Task 4:

var ch = prompt("Entery Any Chater");

var vavel = ['a','e','i','o','u']

for(var i=0; i<=vavel.length; i++){
  if (ch == vavel[i]){
    alert("False");
    break
  }
  
  alert("True");
    break
}


// Task 5:



// Task 6:

var hour = 13; 

if (hour < 18) { 
  alert("Good day") ; 
}
  else{
    alert("Good evening"); 
} 


// Task 7:




// Chapter # 14-16

// Task 1:

var student = [];

// Task 2:

var student = [];

// Task 3:

var student = ["Akram", "Ali", "Akhtar"];

// Task 4:

var num = [23,56,87,49];

// Task 5:

var num = ["+","-","*","/"];

// Task 6:

var num = ["+",23,56,"/", "khurram", "Akram"];

// Task 7:

document.write("Qualifications :" + "<br> <br>");

var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
var num =  [1,2,3,4,5,6,7,8,9,10]

for(var i=0; i < qual.length; i++){
    
       document.write(qual[i] + "<br>")
  
}


// Task 8:

var student = ["Micheal", "Jhon", "Tony"];
var scroe = [320, 230, 480];
var total = 500;

var per1 = (scroe[0]*100)/total;
var per2 = (scroe[1]*100)/total;
var per3 = (scroe[2]*100)/total;

for(i=0; i < student.length; i = (student+1)){
       document.write("Score of " + " " + student[0] + " " + " is " + scroe[0] + "." + " " + "Percentage :" + per1 + " % " + "<br>")
       document.write("Score of " + " " + student[1] + " " + " is " + scroe[1] + "." + " " + "Percentage :" + per2 + " % " + "<br>")
       document.write("Score of " + " " + student[2] + " " + " is " + scroe[2] + "." + " " + "Percentage :" + per3 + " % " + "<br>")
}

// Task 9:

// Task 10:

var arr = [320, 230, 480, 120];

document.write("Score of Student :" )
for(var i=0; i< arr.length; i++){
       
       document.write(arr[i] + " , ")
}
var rev = arr.reverse()
document.write("<br />" + "<br />" + "Ordered Score of Student :")
for(var i=0; i< rev.length; i++){
       
       document.write(arr[i] + " , ")
}


// Task 11:

var arr = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];

document.write("City List :" + "<br />")
for(var i=0; i< arr.length; i++){
       
       document.write( arr[i] + " , ")
}

document.write("<br />" + "<br />" + "Selected City List :" + "<br />")
var selectedCitys = arr.splice(2, 2,);

document.write( selectedCitys + " , ")

// Task 12:

var arr = ['This', 'is', 'my', 'Cat'];


for(var i=0; i< arr.length; i++){
       
       document.write(arr[i] + " ")
}


// Task 13:

var arr = ['Keyboard', 'Mouse', 'Printer', 'Moniter'];


for(var i=0; i< arr.length; i++){
       document.write("Out" + "<br/>")
       document.write(arr[i] + "<br/>")
}


// Task 14:

var arr = ['Keyboard', 'Mouse', 'Printer', 'Moniter'];

var spli = arr.reverse()
for(var i=0; i< spli.length; i++){
       document.write("Out" + "<br/>")
       document.write(arr[i] + "<br/>")
}


// Task 15:

var arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony & Haier'];

document.write("<select>")
for(var i=0; i< arr.length; i++){
       document.write("<option>" + arr[i] + "</option>")
}
document.write("</select>")

// Chapter # 17-20

// Task 1:

var arr = [0,1];

for(var i=0; i< arr.length; i++){
    for(var j=0; j< arr.length; j++){
      document.write(arr[j] + " " )
    }
    document.write(arr[i] + " " + "<br />")
  }

// Task 2:

var arr = [0, 1, 2, 3];

for(var i=1; i< arr.length; i++){
  for(var j=1; j< arr.length; j++){
    document.write(arr[j] + " " )
  }
  document.write(arr[i] + " " + "<br />")
}

// Task 3:

for(var i=1; i<= 10; i++){
    document.write(i + " <br /> ")
  }

// Task 4:

var num = +prompt(" Enter the Table Number ");

document.write("Table of "+ num + "<br>")

for(var i=1; i<=10;  i++){
    
    document.write(num + "x" + i + " = " + (num*i) + "<br>")
}

// Task 5:

var item = ["apple", "banana", "mango", "orange", "strawberry"];

for(var i=0; i<item.length; i++){
    document.write(item[i] + "<br />")
    
}
document.write("<br />")

var item2 = item.slice(0,5)

for(var j=0; j<5; j++){
    document.write(" element at index " + j + " is " + item2[j] +"<br />")
    
    
}

// Task 6:

// Task 6 (a)

document.write("Counting: " + "<br />"+ "<br />")

for(var i=1; i<15; i++){
  document.write(i + " , ")
}
document.write( "<br />"+ "<br />")
// Task 6 (b)

document.write("Reversve Counting: " + "<br />"+ "<br />")


for(var i=10; i>0; i--){
  document.write(i + " , ")
}


document.write( "<br />"+ "<br />")
// Task 6 (c)

document.write("Even : " + "<br />"+ "<br />")

var even = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(var i=0; i<even.length; i++){
  if(even[i] % 2 === 0){
    document.write(even[i] + " , ")
  }
}


document.write( "<br />"+ "<br />")
// Task 6 (d)

document.write("Odd : " + "<br />"+ "<br />")

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let odd = arr.filter(n => n%2)

document.write(odd + " , ")



document.write( "<br />"+ "<br />")
// Task 6 (e)

document.write("Series : " + "<br />"+ "<br />")

var even = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(var i=0; i<even.length; i++){
  if(even[i] % 2 === 0){
    document.write(even[i] + "k" + " , ")
  }
}


// Task 7:

var item = ["cake", "apple pie", "cookie", "chips", "patties"];

var search =  prompt("Welcome to ABC Bakari. What do you want to order Sir/Madam? " + " ");

if (item.indexOf(search) !== -1){
    alert(" Yes " + search + " Item is Avalible ")
}
else{
    alert("WE Are Sorry " + search + " Item is Not Avalible ")
}


// Task 8:

var array = [23, 53, 78, 91, 12];
var largest= 0;

document.write("Array Item : " + array + "<br />"+ "<br />")

for (i=0; i<=largest;i++){
    if (array[i]> largest) {
        var largest=array[i];
    }
}

document.write("The Largest Number is :" + " " + largest);

// Task 9:

var array = [23, 53, 78, 91, 12];

document.write("Array Item : " + array + "<br />"+ "<br />")

var min = Math.min.apply(Math, array)
console.log(min)

document.write("The Smallest Number is :" + " " + min);

// Task 10:

for(var i=1; i<= 20; i++){
    document.write(i*5 + " , ")
  }


  // Chapter # 21-25

// Task 1:

var first = prompt("Enter Your First Name");
var second =  prompt("Enter the Last Name");

var fullName = first + second

document.write(fullName)

// Task 2:

var mob = prompt("Entery Mobile Modle");

document.write("My Favrite Phone is : " + mob + " <br /> " + "Length of String is :  "  + mob.length)


// Task 3:

var str = "Pakistan";

n = str.indexOf("n")

document.write("String : "+ str + "<br />" + "Index of 'n' : " + n)

// Task 4:

var str = "Hello World";
// var str1 = "World"
n = str.lastIndexOf("l")

document.write("String : "+ str + "<br />" + "Index of 'l' : " + n)

// Task 5:

var str = "Pakistan";
n = str.charAt(3)

document.write("String : "+ str + "<br />" + "Character at Index '3' : " + n)

// Task 6:

var first = prompt("Enter Your First Name");
var second =  prompt("Enter the Last Name");

var fullName = first + second

document.write(fullName)

// Task 7:

var chr = "Hyderabad";

newText = chr.replace("Hyderabad","Islamabad");

document.write("City : "+ chr + "<br />"+ "After Replacement : " + newText);
// Task 8:

var message = "Ali and Sami are best friends. They play cricket and football together.";

newText = message.replace(/and/g, "&");

document.write("Given Message is : "+ message + "<br />"+ "<br />"+ "After Replacement : " + newText);

// Task 9:

var integerString = "472"
var num = Number(integerString);

document.write("Value: "+ integerString + "<br />")
document.write("Type : "+ "String")


document.write("<br />")


var numberAsNumber = 472;
var numberAsString = numberAsNumber.toString();

document.write("Value: "+ numberAsNumber + "<br />")
document.write("Type : "+ "number")

// Task 10:

var ch = prompt("Enter Any Character ");

var change = ch.toUpperCase();

document.write("User Input : " + ch + " <br /> " + "Upper Case : " + change)

// Task 11:

var ch = prompt("Enter Any Character ");

for(var i = 0; i < ch.length; i++) {
    ch[i] = ch[i].charAt(0).toUpperCase() + ch[i].slice(1); 
  }

document.write("User Input : " + ch + " <br /> " + "Upper Case : " + ch.join)


// Task 12:


// Task 13:

var floatingNumString = 35.36;
var num = floatingNumString.toString();

document.write("Number : " + floatingNumString + " <br /> " + "Result : " + num)

// Task 14:

var item = ["cake", "apple pie", "cookie", "chips", "patties"];

var search =  prompt("Welcome to ABC Bakari. What do you want to order Sir/Madam? " + " ");

if (item.indexOf(search) !== -1){
    alert(" Yes " + search + " Item is Avalible ")
}
else{
    alert("WE Are Sorry " + search + " Item is Not Avalible ")
}

// Task 15:

var university = "University of Karachi";

var ar = university.split('');

document.write(ar)

// Task 16:

var university = "University of Karachi";

var ar = university.split('');

document.write(ar)


// Task 17:

var ch = prompt("Enter Any Character")

var str = ch.charAt(ch.length-1)

document.write("User Input : " + ch + "<br />" + "Last Character of Input : "  + str)

// Task 18:

var floatingNumString = 35.36;
var num = floatingNumString.toString();

document.write("Number : " + floatingNumString + " <br /> " + "Result : " + num)

// Chapter # 26-30

// Task 1:

var num = +prompt("Enter Any Positive Number");

document.write("Number: " + num + "<br />");

var ro= Math.round(num);
document.write("Round Of Value is : " +  ro + "<br />");

var fo= Math.floor(num);
document.write("Floor Value is : " +  fo + "<br />");

var ce= Math.ceil(num);
document.write("Floor Value is : " +  ce + "<br />");


// Task 2:

var num = +prompt("Enter Any Negative Number");

document.write("Number: " + num + "<br />");

var ro= Math.round(num);
document.write("Round Of Value is : " +  ro + "<br />");

var fo= Math.floor(num);
document.write("Floor Value is : " +  fo + "<br />");

var ce= Math.ceil(num);
document.write("Floor Value is : " +  ce + "<br />");

// Task 3:

var num = +prompt("Enter Any Number");

var ab= Math.abs(num);
document.write("The Absolute Value of  : " +  num + " is " + ab);


// Task 4:

var ab= Math.floor(Math.random()*6) +1;
document.write("Randon Dic Value  : " + " is " + ab + "<br />" + "<br />");

var ab= Math.floor(Math.random()*6) +1;
document.write("Randon Dic Value  : " + " is " + ab);

// Task 5:

var num = Math.random()< 0.5;
if (num < 0.5){
    document.write("2" + "<br />");
    document.write("Randon Coin Value is : " + "Heads");
    }else{
        document.write("1" + "<br />");
        document.write("Randon Coin Value is : " + "Tails");
    }


// Task 6:

var n = Math.floor(Math.random() * 100) + 1;

document.write("Randome Number Between 1 and 100 : " + n)


// Task 7:

var weight = prompt("Enter Your Weight");

document.write("The Weight of user is " + weight + " Kilograms ")


// Task 8:

var student = ["Micheal", "Jhon", "Tony"];
var scroe = [320, 230, 480];
var total = 500;

var per1 = (scroe[0]*100)/total;
var per2 = (scroe[1]*100)/total;
var per3 = (scroe[2]*100)/total;

for(i=0; i < student.length; i = (student+1)){
       document.write("Score of " + " " + student[0] + " " + " is " + scroe[0] + "." + " " + "Percentage :" + per1 + " % " + "<br>")
       document.write("Score of " + " " + student[1] + " " + " is " + scroe[1] + "." + " " + "Percentage :" + per2 + " % " + "<br>")
       document.write("Score of " + " " + student[2] + " " + " is " + scroe[2] + "." + " " + "Percentage :" + per3 + " % " + "<br>")
}

// Chapter # 31-34

// Task 1:

var rightNow = new Date();

document.write(rightNow)

// Task 2:

var date = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[date.getMonth()];

document.write("Current Month : " + n)

// Task 3:

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[d.getDay()];

document.write("Today is : " + n)


// Task 4:

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[d.getDay()];

if(n === "Sat" || n === "Sun"){
  document.write("It's Fun Day : ")
}
else{
  document.write("It's Working Day : ")
}

// Task 5:

var d = new Date();
var date = d.getDate();

if(date <15){
    document.write("First fifteen day of the month")
}
else{
    document.write("Last days of the month")
}


// Task 6:

// Task 7:

var item = ["cake", "apple pie", "cookie", "chips", "patties"];

var search =  prompt("Welcome to ABC Bakari. What do you want to order Sir/Madam? " + " ");

if (item.indexOf(search) !== -1){
    alert(" Yes " + search + " Item is Avalible ")
}
else{
    alert("WE Are Sorry " + search + " Item is Not Avalible ")
}


// Task 8:


var array = [23, 53, 78, 91, 12];
var largest= 0;

document.write("Array Item : " + array + "<br />"+ "<br />")

for (i=0; i<=largest;i++){
    if (array[i]> largest) {
        var largest=array[i];
    }
}

document.write("The Largest Number is :" + " " + largest);


// Task 9:


var array = [23, 53, 78, 91, 12];

document.write("Array Item : " + array + "<br />"+ "<br />")

var min = Math.min.apply(Math, array)
console.log(min)

document.write("The Smallest Number is :" + " " + min);

// Task 10:

for(var i=1; i<= 20; i++){
    document.write(i*5 + " , ")
  }


// Task 11:


// Task 12:

// Task 13:

// Task 14:

var name = prompt("Enter the Consumer Name");
var unt = +prompt("Enter the Units");
var charge = 16;
var la = 350;

var date = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[date.getMonth()];

document.write("Consumer Name : " + name + "<br />")
document.write("Current Month : " + n + "<br />")
document.write("Number of Units  : " + unt + "<br />")
document.write("Charge per Units  : " + charge + "<br />"+ "<br />")
var total = unt*charge
document.write("Net Amount Payable (within Due Date : ) " + total + "<br />")
document.write("Late Payment Surcharge  : " + la + "<br />")
document.write("Net Amount Payable (within Due Date : ) " + (total+la) + "<br />")


// Chapter # 35-38

// Task 1:

function time(){

    var rightNow = new Date();
    
    document.write(rightNow)
    
    }
    time();


// Task 2:

function name(){
    var first = prompt("Enter Your First Name");
    var second =  prompt("Enter the Last Name");
    
    var fullName = first + second
    
    document.write(fullName)
      
    }
    
    name()

// Task 3:

function add(){
    var n1 = +prompt("Enter First Number");
    var n2 =  +prompt("Enter Second Number");
    
    var plus = (n1 + n2)
    
    document.write(plus)
      
    }
    
    add()

// Task 4:

function calcu(){
    var n1 = +prompt("Enter First Number");
    var op = prompt("Enter Operator");
    var n2 =  +prompt("Enter Second Number");
    if(op === "+"){
      document.write(n1+n2)
    }
    else if(op === "-"){
      document.write(n1-n2)
    }
    else if(op === "*"){
      document.write(n1*n2)
    }
    else if(op === "/"){
      document.write(n1/n2)
    }
    else{
      document.write("Please Ensurt The Correct Operator")
    }
  
       
    }
    
    calcu()

// Task 5:

function sq(){
    var num = +prompt("Enter anu number");
    var sum = (num * num);
    
    
    document.write(sum);

}
sq();

// Task 6:

var n = +prompt("Enter any Number ");
function factorial(){
  
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}

answer = factorial()
document.write("The factorial of " + n + " is " + answer);


// Task 7:

function count(){
    var str = +prompt("Enter The Starting Number");
    var end = +prompt("Enter the End Number");
    
    for(var i=str; i< (end+1); i++){
        document.write( i + "<br />")
    }

}

count();

// Task 8:

var n1 = +prompt("Enter the Base Value");

var n2 = +prompt("Enterh the Perpandicular value");


function outcalc(){
var base = n1*n1;
var perp = n2*n2;
var hy = (base+perp)
var Hypotinuous =hy*hy;    
var sq = Math.sqrt(Hypotinuous);
document.write("Hypothinous " + " = "   + sq)
}
outcalc();

// Task 9:

var array = [23, 53, 78, 91, 12];

document.write("Array Item : " + array + "<br />"+ "<br />")

var min = Math.min.apply(Math, array)
console.log(min)

document.write("The Smallest Number is :" + " " + min);


// Task 10:


// Task 11:

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));

// Task 12:

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("EXAMPLE STRING : " + 'Web Development Tutorial' + '<br />'+ '<br />');
document.write("EXPECTED OUTPUT : ");
document.write(find_longest_word('Web Development Tutorial'));

// Task 13:

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("Sample arguments " + ' "JSResourceS.com": ')
document.write(char_count('JSResourceS.com', 'o'));

// Task 14:



// Chapter 38-42 //


// Task 1:

var a = prompt("Enter the Number");
var b = prompt("Enter the Power");

function power(){
var c = a**b;
alert(c);

return c;

}
power(a,b);


// Task 2:

var year = prompt("Enter Years");

function leapYear(){

if (((year % 4 == 0)  && (year % 100 !=0)) || (year % 400 == 0)){
    alert("The Enter Year is Leep Year");
}
else{
    alert("The Enter Year is Not a Leep Year");
}

}

leapYear(year);

// Task 3:

var a = +prompt("Enter Value of side a");
var b =  +prompt("Enter Value of side b");
var c =  +prompt("Enter Value of side c");

function length(){

  var s = (a + b + c) / 2;
 return s;

  }

  function area(){
  
    var ar = (s*(s-a)*(s-b)*(s-c));

    document.write("Area of triangle is = " + ar);
  }
var s = length(a,b,c);
area(s);


// Task 4:

var s1 = +prompt("Enter 1st Subject Marks");
  var s2 = +prompt("Enter 2nd Subject Marks");
  var s3 =  +prompt("Enter 3rd Subject Marks");
  
  function sum(){
    var s = (s1 + s2 + s3);
    document.write("Sum of the Marks = " + s + "<br>");
    return s;
  }

  function percentage(){
    var per = (s/300*100);
    var n = per.toPrecision(3);
    document.write("Percentage of the Marks = " + n + "%" + "<br>");
    return per;
  }

  function average(){
    var ave = (s/3);
    var a = ave.toPrecision(3);
    document.write("Average of the Marks = " + a + "<br>");
  }

  var s = sum();

  var per = percentage();

  average();

// Task 5:

var ch = prompt("Enter the Character");

function index(){
    var str = ch;
    var n = str.indexOf("a")
    document.write(n);

}
index();

// Task 6:

var string = prompt("Please Enter a String");
// var v = [a,e,i,o,u];

function hasVowels(string){
  let word = string.toLowerCase()
  if([a,e,i,o,u].test(word)){
       return true
      
    } else {
       return false
    }
  
  }
document.write(string);
hasVowels();



// Task 7:

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = "str";
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());

// Task 8:


var km = +prompt("Please Enter the Distance in KM");


function meeter(){
var m = km*1000;
document.write("Distance in Meters " + " = " + m + " meters " + "<br>")
}

function feet(){
var ft = km*3280.84;
document.write("Distance in Feet " + " = " + ft + " feet " + "<br>")
}

function inches(){
    var inc = km*39370.1;
    document.write("Distance in Inches " + " = " + inc + " inches " + "<br>")
    }

    function centemeter(){
        var cm = km*100000;
        document.write("Distance in Centemeters " + " = " + cm + " inches " + "<br>")
        }
    

document.write("Your Given Distance " + " = "  + km + " KM " + "<br>"+"<br>" );

meeter();
feet();
inches();
centemeter();

// Task 9:

var selery = +prompt("Pleaese Enter Your Selary");
var hr = +prompt("Please Enter the Hours")

function overtime(){
    var ovr = hr*12.00;
document.write("Your over Time is "+ "=" + ovr + "<br>" );

return ovr;

}
function netPay(){
    var pay = ovr+selery;
    document.write("Your Net Pay is "+ "=" + pay + "<br>");
}
document.write("Your Gross Pay "+ "=" + selery + "<br>" + "<br>");

var ovr = overtime();
netPay();


// Task 10:

function currencyDenomination() {
    var cash = +prompt("Enter cash (in hundreds): ");
    var hundred = (cash/100);
    var fifty = ((cash % 100)/50);
    var ten = (((cash % 100) % 50) / 10);

    document.write("you will have " + hundred + " hundrad notes " + fifty + " fifty notes " + ten + " ten notes ")

}

currencyDenomination();

// Chapter 43-48 //


// Task 1:

function link(){
    alert("Press on the Given Link")
    }
    

// Task 2:

function display(){
    
    alert("Thanks For Purchaning a Phone for us!!")
}

// Task 3:

var a = +prompt("Enter Value of side a");
var b =  +prompt("Enter Value of side b");
var c =  +prompt("Enter Value of side c");

function length(){

  var s = (a + b + c) / 2;
 return s;

  }

  function area(){
  
    var ar = (s*(s-a)*(s-b)*(s-c));

    document.write("Area of triangle is = " + ar);
  }
var s = length(a,b,c);
area(s);


// Task 4:

function setNewImg(){

    document.getElementById("img").src = "Images/p2.jpg"
  
  }
  
  function setOldImg(){
  
      document.getElementById("img").src = "Images/p1.jpg"
      
    }

// Task 5:




// Chapter 49-52 //


// Task 1:

function addUser(){
    var val = document.getElementById("user");
    var val1 = document.getElementById("pass");

    var p = document.createElement('p');
    var textNode = document.createTextNode(user.value);

    p.appendChild(textNode);
    var messages = document.getElementById("messages");
    messages.appendChild(p)

   


    var q =document.createElement('q');
    var textNode2 = document.createTextNode(pass.value);

    q.appendChild(textNode2);
    var messages = document.getElementById("messages1");
    messages.appendChild(q)
    
    val.value = ""
    val1.value = ""

}

// Task 2:

function display(){
    
    alert("Thanks For Purchaning a Phone for us!!")
}


// Task 3:

var a = +prompt("Enter Value of side a");
var b =  +prompt("Enter Value of side b");
var c =  +prompt("Enter Value of side c");

function length(){

  var s = (a + b + c) / 2;
 return s;

  }

  function area(){
  
    var ar = (s*(s-a)*(s-b)*(s-c));

    document.write("Area of triangle is = " + ar);
  }
var s = length(a,b,c);
area(s);


// Task 4:

function setNewImg(){

    document.getElementById("img").src = "Images/p2.jpg"
  
  }
  
  function setOldImg(){
  
      document.getElementById("img").src = "Images/p1.jpg"
      
    }

// Task 5:



// Chapter 49-52 //


// Task 1:

// (i) //

var element;

element = document.getElementById("main-content");

console.log(element);


// (ii) //

var element;

element = document.getElementById("main-content");

console.log(element);


// (iii) //

var element;

element = document.getElementById("main-content").innerHTML;

document.write(element);


// (iv) //

var element;

element = document.getElementById("first-name");

console.log(element);


// (v) //

var element;

element = document.getElementById("last-name");

console.log(element);

var element;

element = document.getElementById("email");

console.log(element);

// Task 2:

// (i)  //
var element;

element = document.getElementById("form-content").getAttributeNode("class").value;

console.log(element);


// (ii)  //
var element;

element = document.getElementById("last-name").childNodes;

console.log(element);


// (iii)  //

var element;

document.createElement("p"),

console.log(element);

// (iv)  //

var element;

element = document.getElementById("main-content").firstChild;
element = document.getElementById("main-content").lastChild;
console.log(element);


// (v)  //

var element;

element = document.getElementById("lastName").nextSibling;
element = document.getElementById("lastName").previousSibling;

console.log(element);


// (vi)  //

var element;

element = document.getElementById("email").parentNode;
element = document.getElementById("email").nodeType;

console.log(element);


// Task 3:

var a = +prompt("Enter Value of side a");
var b =  +prompt("Enter Value of side b");
var c =  +prompt("Enter Value of side c");

function length(){

  var s = (a + b + c) / 2;
 return s;

  }

  function area(){
  
    var ar = (s*(s-a)*(s-b)*(s-c));

    document.write("Area of triangle is = " + ar);
  }
var s = length(a,b,c);
area(s);


// Task 4:

function setNewImg(){

    document.getElementById("img").src = "Images/p2.jpg"
  
  }
  
  function setOldImg(){
  
      document.getElementById("img").src = "Images/p1.jpg"
      
    }

// Task 5:


// Chapter 58-67 //


// Task 1:

(i) //

var element;

element = document.getElementById("main-content");

console.log(element);


// (ii) //

var element;

element = document.getElementById("main-content");

console.log(element);


// (iii) //

var element;

element = document.getElementById("main-content").innerHTML;

document.write(element);


// (iv) //

var element;

element = document.getElementById("first-name");

console.log(element);


// (v) //

var element;

element = document.getElementById("last-name");

console.log(element);

var element;

element = document.getElementById("email");

console.log(element);


// Task 2:

(i)  //
var element;

element = document.getElementById("form-content").getAttributeNode("class").value;

console.log(element);


// (ii)  //
var element;

element = document.getElementById("last-name").childNodes;

console.log(element);


(iii)  //

var element;

document.createElement("p"),

console.log(element);

// (iv)  //

var element;

element = document.getElementById("main-content").firstChild;
element = document.getElementById("main-content").lastChild;
console.log(element);


(v)  //

var element;

element = document.getElementById("lastName").nextSibling;
element = document.getElementById("lastName").previousSibling;

console.log(element);


(vi)  //

var element;

element = document.getElementById("email").parentNode;
element = document.getElementById("email").nodeType;

console.log(element);