
// Khởi tạo DOM - Document Object Model
const mainTitle = document.getElementById("main-title")
const todoInput = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const todocontainer = document.getElementById('todo-container')

console.log(mainTitle);

mainTitle.style.color = "green"

mainTitle.innerText = "JSA 30 - Todo List"

// Hàm trong JS: 
// VD Hàm xin chào
// Cú pháp: 
// function <tên_hàm>(){
//   Khối lệnh
// }

// Lưu ý: Muốn thực thi lệnh trong hàm thì phải gọi hàm
// function sayHello() {
//     alert("Hello")
//   }
  
//   sayHello() // Gọi hàm
// Lấy todoList trong local storage ra và lưu vào biến todolist
let todoList = JSON.parse(localStorage.getItem("todo-list")) || [];
// Khi trong ls chưa có todo list thì gán bằng mảng rỗng
function addTodo(event) {
    // Chặn sk tải lại trang
    event.preventDefault()

    // Lấy dữ liêu của ô input thông qua DOM
    let todoText = todoInput.value;
    console.log(todoText);
    // Thêm phần tử todoText vào cuối mảng
    todoList.push(todoText);
    
    // Lưu
    localStorage.setItem("todo-list", JSON.stringify(todoList));

    todoInput.value = ""
    // khi lưu xong thì render lại bằng cách gọi lại hàm

    renderTodoList()
} 

// Hàm sử lí in ra danh sách todo
function renderTodoList() {
    let htmls = "";
    for (let i = 0; i < todoList.length; i++) {
        htmls += "<li>" + todoList[i] + "</li>";
    }
    todocontainer.innerHTML = htmls
}



addBtn.addEventListener('click', function(event) {
    addTodo(event)
})


























