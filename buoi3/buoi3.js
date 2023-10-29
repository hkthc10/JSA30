let langs = [
    "Javascript",
    "C++",
    "Java",
    "PHP",
    "C#",
    "Python"
    // có thể lặp lại các phần tử
]

let myInfo = {
    name:"TVT",
    email:"abc@gmail.com",
    phone:"0821984182"
}

// vồng lặp for bình thường
for (let index = 0; index < langs.length; index++) {
    console.log("Vị trí thứ " + index + " là phần tử: " + langs[index]);
}

// for-in
// - Đối với Array (mảng): Dùng để lấy ra chỉ số của các phần tử
// - Đói với object (Đối tượng): Dùng để lấy ra thuộc tính của object
//  Cú pháp:
//  for (let tên_biến in tên_mảng/tên_object) {
//     Khối lệnh
//  }

// for (let chi_so in langs) {
//     console.log("Chỉ số: ", chi_so);
// }

for (let thuoc_tinh in myInfo) {
    console.log("Thuộc tính:", thuoc_tinh);
}


// for-of
// - Đối với Array (mảng): Dùng để lấy ra giá tri của các phần tử
// - Đói với object (Đối tượng):
//  Cú pháp:
//  for (let tên_biến of tên_mảng/tên_object) {
//     Khối lệnh
//  }

// Đối với mảng
for (let gia_tri of langs) {
    console.log("giá trị của array: ",gia_tri);
}

// Đối với object
console.log(Object.values(myInfo));
for (let gia_tri of Object.values(myInfo)) {
    console.log("giá trị của object: ", gia_tri);
}
