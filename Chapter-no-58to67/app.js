// ------------------Chapter no 58 to 67----------------

//Q1. Consider you have following code snippet:

// (Copy it in your HTML file)

// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.?


// let mainContent = document.getElementById("main-content")
// console.log(mainContent)

// console.log(mainContent.children);


// let renderElement = document.getElementsByClassName("render")
// for(let i =0 ; i < renderElement.length;i++){
//     document.write(`${renderElement[i].innerHTML} <br/>`)
// }

// document.getElementById("first-name").value = "Alex";
// document.getElementById("last-name").value = "Bank";
// document.getElementById("email").value = "alexbank@example.com ";


// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”




// let formContent = document.getElementById("form-content")
//     document.write(`i. Node type of 'form-content': ${formContent.nodeType} <br><br>`)


//     let lastNameElement = document.getElementById("lastName")
//     document.write(`ii. Node type of 'lastName': ${lastNameElement.nodeType}  <br>`)
//     document.write(`Node type of 'lastName' child:  ${ lastNameElement.firstChild.nodeType }<br><br>`)


//     lastNameElement.firstChild.nodeValue = "Last Name: Updated Bank"
//     document.write(`iii. Updated child node value:${lastNameElement.innerHTML}<br><br>`)


//     let mainContent = document.getElementById("main-content")
//     document.write(`iv. First child of main-content: ${mainContent.firstElementChild.innerHTML}<br>`)
//     document.write(`Last child of main-content: ${mainContent.lastElementChild.innerHTML}<br><br>`)


//     document.write(`v. Next sibling of 'lastName': ${lastNameElement.nextElementSibling.innerHTML} <br>`)
//     document.write(`Previous sibling of 'lastName': ${lastNameElement.previousElementSibling.innerHTML}<br><br>`)


//     let emailElement = document.getElementById("email")
//     document.write(`vi. Parent node of 'email': ${emailElement.parentNode.nodeName}<br>`)
//     document.write(`Node type of 'email': ${emailElement.nodeType }<br>`)


// ======================Chapter no 58 to 67 End ============================