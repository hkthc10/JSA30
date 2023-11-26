const productContainer = document.querySelector(".product-container");
const searchInput = document.querySelector("#search-input")
// console.log();
// tạo một mảng chứa các đối tượng sản phẩm  
const productList = [
    {
        id: 1,
        name:'LeBron Witness 8 EP',
        price: 500,
        image: './asset/images/1.webp'
      },
      {
        id: 2,
        name: 'Nike Ultrafly',
        price: 700,
        image: './asset/images/2.webp'
      },
      {
        id: 3,
        name: 'Nike Air Zoom TR 1',
        price: 1000,
        image: './asset/images/3.webp'
      },
      {
        id: 4,
        name: 'JA 1 EP Hunger',
        price: 590,
        image: './asset/images/4.webp'
      },
      {
        id: 5,
        name: 'Nike Cortez SE',
        price: 590,
        image: './asset/images/5.webp'
      },
      {
        id: 6,
        name:'Nike Air Max 1',
        price: 1000,
        image: './asset/images/6.webp'
      },
      {
        id: 7,
        name: 'Nike Air Max 1 86 OG G',
        price: 570,
        image: './asset/images/7.webp'
      },
      {
        id: 8,
        name: 'Nike Revolution 6',
        price: 690,
        image: './asset/images/8.webp'
      },
      {
        id: 9,
        name: 'Nike Metcon 8',
        price: 750,
        image: './asset/images/9.webp'
      },
      {
        id: 10,
        name: 'Sabrina 1 Magnetic EP',
        price: 900,
        image: './asset/images/10.webp'
      },
]

function renderProductList(listProduct) {
  let htmls = "";
  // console.log("Trước khi dùng vòng lặp", htmls);

  for (let i = 0; i < listProduct.length; i++) {
    // Qua mỗi lần lặp thì nối thêm sản phẩm vào htmls
    // Dấu " ` " ở dưới dấu ESC
    htmls += `
      <div class="product-item">
        <img src=${listProduct[i].image}>
        <h3>${listProduct[i].name}</h3>
      </div>
    `
  }

  // console.log("Sau khi dùng vòng lặp", htmls);

  // Sau khi nhận được chuỗi htmls thì sẽ gắn chuỗi htmls vào DOM productContainer
  productContainer.innerHTML = htmls
}


// Gọi hàm renderProductList và truyền tham số thật(productList) để chạy
renderProductList(productList)

// Hàm xử lý tìm kiếm sản phẩm theo tên sản phẩm
function searchProducts(searchString) {

  // Tạo 1 biến foundProduct gán bằng những sản phẩm mà có tên bao gồm chuỗi tìm kiếm nhập tử ô input
  let foundProduct = productList.filter( function (product) {

    // Trả về những sản phẩm mà có tên bao gồm chuỗi tìm kiếm nhập tử ô input
    // toLowerCase() => chuyển chuỗi thành chuỗi viết thường. Mục đích là khi người dùng nhập chữ hoa 
      // hay chữ thường thì đều tìm kiếm được
    return product.name.toLowerCase().includes(searchString.toLowerCase());
  } )

  // Render lại danh sách sản phẩm với tham số là foundProduct
  renderProductList(foundProduct)
}

searchInput.addEventListener("input", function(event) {
  // event.target.value là chuỗi mà người dùng nhập vào ô input
  searchProducts(event.target.value)
})