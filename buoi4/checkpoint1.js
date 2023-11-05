let myInfo = {
    fullName: "Bùi Thái Thịnh",
    dateOfBirth: "27/3/2007",
    gender: "Male",
    email: "buithaithinh69@gmail.com",
    phone: "0328646121",
    address: "Hàng Bột, Đống Đa, Hà Nội"
}

localStorage.setItem("my-info", JSON.stringify(myInfo));

let myInfoInJS = JSON.parse(localStorage.getItem("my-info"))
console.log(myInfoInJS);

const nameHTML = document.getElementById("name")
nameHTML.innerText = myInfo.fullName
const dateHTML = document.getElementById("date")
dateHTML.innerText = myInfo.dateOfBirth
const genderHTML = document.getElementById("gender")
genderHTML.innerText = myInfo.gender
const emailHTML = document.getElementById("email")
emailHTML.innerText = myInfo.email
const phoneHTML = document.getElementById("phone")
phoneHTML.innerText = myInfo.phone
const addressHTML = document.getElementById("address")
addressHTML.innerText = myInfo.address


nameHTML.style.color = "red";
dateHTML.style.color = "white"
dateHTML.style.backgroundColor = "black"
