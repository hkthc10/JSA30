/** Localstorage (Local và Global)
 * Là nơi lưu trữ dữ liệu cục bộ (Lưu trên trình duyệt của máy)
 * Lưu lượn: 5MB
 */

// Lưu trữ dữ liệu vào localstorage
// Cú pháp: LocalStorage.setItem("<key>", value)
let name = "BTT";
localStorage.setItem("name", name)

// Lấy dữ liệu trong local storage ra ngoài:
// Cú pháp: LocalStorage.getItem("<key>")
let nameInLS = localStorage.getItem("name")
console.log("Lấy tên từ LS ra: ", nameInLS);
const productList = [
    {
      "id": 1,
      name: 'Nike AF1 07',
      description: 'Bestseller',
      price: 500
    },
    {
      id: 2,
      name: 'Nike Air Jordan 1 Mid',
      description: 'Trending 2023',
      price: 300
    },
    {
      id: 1,
      name: 'Nike Air Max 90 GORE-TEX',
      description: 'Trending 2023',
      price: 350
    },
    {
      id: 1,
      name: 'Nike Zion 3PF',
      description: 'Trending 2023',
      price: 700
    },
    {
      id: 1,
      name: 'Nike Full Force Low',
      description: 'Trending 2023',
      price: 1000
    },
  ]

  localStorage.setItem("product-list", productList)

// Lưu mảng dữ liệu productList vào LS

// Lưu ý: Dữ liệu ở trong LS Lưu ở dạng JSON.
// Do đó trước khi lưu dữ liệu vào localStorage, thì mình chuyển đổi dữ liệu từ Js thành JSON
// Cách chuyển dữ liệu từ JS thành JSON: JSON.stringify(<tên_biến>)
// Cách chuyển dữ liệu từ JSon thành JS: JSON.parse(<tên_biến>)


// Lấy mảng dữ liệu productList ra LS
localStorage.setItem("product-list", JSON.stringify(productList));
// Lấy mảng dữ liệu productList ra JS
let productListInLS = JSON.parse(localStorage.getItem("product-list"))
console.log("DS Sản Phẩm ", productListInLS);
console.log("DS Sản Phẩm ", productList);

// DOM
let myInfo = {
    name: "Phạm Anh Tuấn",
    age: 25,
    email: "tuanpham24.it@gmail.com"
  }
  
  localStorage.setItem("my-info", JSON.stringify(myInfo));
  
  let myInfoSaved = JSON.parse(localStorage.getItem("my-info"));
  
  const nameHTML = document.getElementById("name"); // DOM
  
  nameHTML.innerText = myInfoSaved.name;
