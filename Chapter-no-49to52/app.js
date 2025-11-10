// ======== Chapter 49 to 52 Start==========


// Q1. Create a signup form and display form data in your web
// page on submission.?

// document.getElementById("signupForm").addEventListener("submit", function(e) {
//     e.preventDefault()


//     let name = document.getElementById("name").value
//     let email = document.getElementById("email").value
//     let password = document.getElementById("password").value

//     document.getElementById("result").innerHTML = 
//       `<p><strong>Name:</strong> ${name}</p>
//        <p><strong>Email:</strong> ${email}</p>
//        <p><strong>Password:</strong> ${password}</p>`
    
// });


// Q2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.?


// const readMore = ()=>{
//     let moreText = document.getElementById("more")
//     let btn = document.getElementById("btn")
//     if(moreText.style.display === "none"){
//         moreText.style.display = "inline"
//         btn.innerText= "Read Less"

//     }
//     else{
//         moreText.style.display ==="none"
//         btn.innerText= "Read More"
//     }
// };


// Q3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.?



// document.getElementById("form").onsubmit = function(e){
//   e.preventDefault()
// let name = document.getElementById("name").value;
// let age = document.getElementById("age").value;
// let cls = document.getElementById("cls").value;
// let table = document.getElementById("tableBody");
// let row = table.insertRow();
// row.insertCell(0).innerText = name;
// row.insertCell(1).innerText = age;
// row.insertCell(2).innerText = cls;
// row.insertCell(3).innerHTML = 
//   `<button onclick="editData(this)">Edit</button>
//    <button onclick="deleteRow(this)">Delete</button>`;
// function deleteRow(btn){
//   btn.parentElement.parentElement.remove();
// }
// function editData(btn){
//   editRow = btn.parentElement.parentElement;
//   document.getElementById("editBox").style.display = "block";
// document.getElementById("editName").value = editRow.cells[0].innerText;
// document.getElementById("editAge").value = editRow.cells[1].innerText;
// document.getElementById("editCls").value = editRow.cells[2].innerText;
// function updateData(){
//   editRow.cells[0].innerText = document.getElementById("editName").value;
//   editRow.cells[1].innerText = document.getElementById("editAge").value;
//   editRow.cells[2].innerText = document.getElementById("editCls").value;
//   document.getElementById("editBox").style.display = "none";
// }
// }}


//  let table = document.getElementById('recordTable')

// const addRecord=()=>{
//     let studentName = document.getElementById('stdName')
//     let studentClass = document.getElementById('stdClass')
//     let row = document.createElement('tr')
//     let nametd = document.createElement('td')
//     let classtd = document.createElement('td')
//     let edittd = document.createElement('td')
//     let deletetd = document.createElement('td')
//     let nameText = document.createTextNode(studentName.value)
//     let classText = document.createTextNode(studentClass.value)

   
// let editBtn = document.createElement('button')
//     editBtn.className = "btn btn-info btn-sm me-2"  
//     editBtn.innerText = "Edit"
//     editBtn.setAttribute('onclick','editRecord(this)')

// let delBtn = document.createElement('button')
//     delBtn.className = "btn btn-primary btn-sm"        
//     delBtn.innerText = "Delete"
//     delBtn.setAttribute('onclick','deleteRecord(this)')

//     nametd.appendChild(nameText)
//     classtd.appendChild(classText)
//     edittd.appendChild(editBtn)
//     deletetd.appendChild(delBtn)
//     row.appendChild(nametd)
//     row.appendChild(classtd)
//     row.appendChild(edittd)
//     row.appendChild(deletetd)
//     table.appendChild(row)

//     studentName.value = ""
//     studentClass.value = ""
// }

// const  editRecord=(e)=>{
//     let val = e.parentNode.parentNode.firstChild.innerText
//     let newVal = prompt("Edit your record",val)
//     let classval = e.parentNode.parentNode.firstChild.nextSibling.innerText
//     let newClass = prompt("Edit your Class",classval)
//     e.parentNode.parentNode.firstChild.innerText = newVal
//     e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass
// }

// const deleteRecord=(e)=>{
//     e.parentNode.parentNode.remove()
// }





// ================Chapter no 49 to 52=================