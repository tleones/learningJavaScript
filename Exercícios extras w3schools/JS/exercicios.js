// 1. Create a variable called carName, assign the value Volvo to it.
    let carName= "Volvo";

// 2. Create a variable called x, assign the value 50 to it.
    let x = 50;

// 3. Display the sum of 5 + 10, using two variables: x and y.

    let x = 5;
    let y = 10;
    document.getElementById("demo").innerHTML = x + y;

// 4. Create a variable called z, assign x + y to it, and display the result in an alert box.

    let x = 5;
    let y = 10;
    let z = x + y;
    alert(z);

// 5. On one single line, declare three variables with the following names and values:

    firstName = "John"
    lastName = "Doe"
    age = 35

    let firstName = "John", lastName = "Doe", age = 35;

// 6. Multiply 10 with 5, and alert the result:

    alert(10 * 5);

// 7. Divide 10 by 2, and alert the result:

    alert(10 / 2);

// 8. Alert the remainder when 15 is divided by 9.

    alert(15 % 9);

// 9. Use the correct assignment operator that will result in x being 15 (same as x = x + y).

    x = 10;
    y = 5;
    x += y;

// 10. Use the correct assignment operator that will result in x being 50 (same as x = x * y).

    x = 10;
    y = 5;
    x *= y;

// 11. Use comments to describe the correct data type of the following variables:

    let length = 16;          // number
    let lastName = "Johnson"; // string
    const x = {
    firstName: "John",
    lastName: "Doe"
    };                        // object

// 12. Execute the function named myFunction.

    function myFunction() {
      alert("Hello World!");
    }
    myFunction();

// 13. Create a function called "myFunction".

    function myFunction() {
        alert("Hello World!");
    }

// 14. Make the function return "Hello".

    function myFunction() {
        return "Hello";
    }
    document.getElementById("demo").innerHTML = myFunction();

// 15. Make the function display "Hello" in the inner HTML of an element with the ID "demo".

    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello";
    }


// 16. Alert "John" by extracting information from the person object.

    const person = {
    firstName: "John",
    lastName: "Doe"
    };

    alert(person.firstName);

// 17. Add the following property and value to the person object: country: Norway.

    const person = {
    firstName: "John",
    lastName: "Doe",
    country: "Norway"
    };

// 18. Create an object called person with name = John, age = 50.
// Then, access the object to alert("John is 50").

    const person = {
    name: "John", 
    age: 50
    };
    alert(person.name + " is " + person.age);

// 19. The <button> element should do something when someone clicks on it. Try to fix it!

    <button onclick="alert('Hello')">Click me.</button>

// 20. When the button is clicked, the function "myFunction" should be executed.

    <button onclick="myFunction()">Click me.</button>

// 21. The <div> element should turn red when someone moves the mouse over it.

    <div onmouseover="this.style.backgroundColor='red'">myDIV.</div>

// 22. Use the length property to alert the length of txt.

    let txt = "Hello World!";
    let x = txt.length;
    alert(x);

// 23. Use escape characters to alert We are "Vikings".

    let txt = "We are \"Vikings\"";
    alert(txt);

// 24. Concatenate the two strings to alert "Hello World!".

    let str1 = "Hello ";
    let str2 = "World!";
    alert(str1+str2);

// 25. Convert the text into an UPPERCASE text:

    let txt = "Hello World!";
    txt = txt.toUpperCase()


// 26. Crie uma página da web simples com um botão e um texto, e quando o botão for clicado, o texto dentro de um elemento com um ID específico será alterado.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <p id="paragrafo">O botão ainda não foi clicado.</p>

    <button type="button" onclick='document.getElementById("paragrafo").innerHTML = "O botão foi clicado"'>Clique aqui!</button>
    
    <button type="button" onclick='document.getElementById("paragrafo").innerHTML = "O botão ainda não foi clicado"'>Resetar!</button>
</body>
</html>

