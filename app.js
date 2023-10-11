// var arr = []
// function addTable() {
//   var table = document.getElementById("show")
//   var Id = document.getElementById("Id").value
//   var Title = document.getElementById("Title").value
//   var status = document.getElementById('status')
//   var output1 = status.options[status.selectedIndex].innerText


//   if (!Id || !Title) {
//     alert("Plz fill all information")
//     return
//   }
//   var obj = {
//     id: Id,
//     title: Title,
//     status: output1
//   }
//   arr.push(obj)
//   for (let i = 0; i < arr.length; i++) {
//     let id = arr[i].id;
//     let data = arr[i]
//     let template = `
//       <tr>
//       <td>${arr[i].id}</td>
//       <td>${arr[i].title}</td>
//       <td>${arr[i].status}</td>
//       <td><button class="btn btn-outline-info rounded" onclick = "editItem(${i})"> Edit </button></td>
//       <td><button class="btn btn-outline-danger rounded" onclick = "delItem(${i})"> Delete </button></td>
//       <td><button class="btn btn-outline-success rounded" onclick = "done();"> Done </button></td>
//       </tr>`


//     table.innerHTML += template;

//   }
// }
// function editItem(index) {
//   console.log('data ---> ', index)
//   let item = arr[index];
//   arr = arr.filter(ele => ele.id !== item.id);

// }

// // function delItem(ind) {
// //   arr.splice(ind, 1)
// //   refreshTable();

// // }

// function delItem(id) {
//   console.log('Deleting item with id:', id);
//   // Find the button element that was clicked
//   const button = document.querySelector(`[onclick="delItem('${id}')"]`);
//   if (button) {
//     // Traverse up the DOM to find the <tr> element containing the button and remove it
//     const row = button.closest("tr");
//     if (row) {
//       row.remove();
//     }
//   }

//   // Remove the item from the array
//   arr = arr.filter(item => item.id !== id);
// }

// function done() {

// }

// // function refreshTable() {
// //   var table = document.getElementById("show");
// //   table.innerHTML = ""; // Clear the existing table

// //   for (let i = 0; i < arr.length; i++) {
// //     let id = arr[i].id;
// //     let template = `
// //       <tr>
// //       <td>${arr[i].id}</td>
// //       <td>${arr[i].title}</td>
// //       <td>${arr[i].status}</td>
// //       <td><button class="btn btn-outline-info rounded" onclick="editItem(${i})"> Edit </button></td>
// //       <td><button class="btn btn-outline-danger rounded" onclick="delItem('${id}')"> Delete </button></td>
// //       <td><button class="btn btn-outline-success rounded" onclick="done();"> Done </button></td>
// //       </tr>`;

// //     table.innerHTML += template;
// //   }
// // }



// function clearResult() {
//   var Id = document.getElementById("Id")
//   var Title = document.getElementById("Title")
//   Id.value = " "
//   Title.value = " "
// }



function addTodo() {

  var todo_item = document.getElementById('input1')
  var list = document.getElementById('todo_list')
  var checkbox = document.createElement("input");

  // Set the type of the input element to "checkbox"
  checkbox.type = "checkbox";
  // Set the id and name attributes (optional)
  checkbox.id = "myCheckbox";
  checkbox.setAttribute("class", " ms-5 form-check-input")
  checkbox.setAttribute("onClick", " done(this)")
  checkbox.setAttribute("value", "false")






  if(todo_item.value == ""){
    alert("Plz Write a value")
    return;
  }

  // craete li tag with textNode
  var li = document.createElement('li')
  var liText = document.createTextNode(todo_item.value)
  li.appendChild(liText)

  //Create delete button
  var delBtn = document.createElement('button')
  var delText = document.createTextNode("Delete")
  delBtn.setAttribute("class", "btn btn-danger rounded ")
  delBtn.setAttribute("onClick", "delItem(this)")

  //create edit button
  var editBtn = document.createElement('button')
  var editText = document.createTextNode("Edit")
  editBtn.setAttribute("class", "btn btn-warning rounded ")
  editBtn.setAttribute("onClick", "editItem(this)")

  delBtn.appendChild(delText)
  editBtn.appendChild(editText)

  li.appendChild(checkbox);
  li.appendChild(delBtn)
  li.appendChild(editBtn)



  list.appendChild(li)


  todo_item.value = ""

}

function delItem(d) {
  d.parentNode.remove()
}

function deleteAll() {
  var list = document.getElementById('todo_list')
  list.innerHTML = " "
}

function done(c) {
console.log(c.parentNode.firstChild)
}
function editItem(e) {
  var val = prompt("Enter updated Value",)
  e.parentNode.firstChild.nodeValue = val;
}
