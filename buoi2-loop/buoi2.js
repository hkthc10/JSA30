//biến: let ,var ,const

let name = "VV"
name = "gg"
name
console.log(name);

//Mảng là một biến có thể lưu nhiều giá trị cùng một lúc
//Cú pháp khai báo một mảng: let/var/const <tên_mảng> = [<giá_trị_1>,<giá_trị_2>,<giá_trị_3>]
// vd
let studientList = ["Thịnh", "Vũ", "Dương", "...u"];


// Lưu ý: Các phần tử của mảng phải cùng môt kiểu dữ liệu
// chỉ số của mảng n phần tử bắt đầu từ 0, kết thúc là n-1
// truy cập phần tử của mảng
// console.log("phần tử ở vị trí cuối cùng là",studientList[studientList.length-1]);
// console.log("phần tử ở vị trí đầu là",studientList[0]);
// console.log("phần tử ở vị trí 2 là",studientList[2]);

// Thêm một phần tử vào cuối mảng
studientList.push("Phạm Anh Tuấn");
for (let index = 0; index <= studientList.length; index++) {
    console.log(studientList[index]);
}

// Vòng lặp for
// Khái niệm: Thực hiện một đoạn code lặp lại nhiều lần (biết trước số lần lặp)
// Ứng dụng:
// Cú pháp: 
// for (let biến-đếm(điểm bắt đầu), điều kiện_dừng_vòng(điểm kết thúc), bước_nhảy) {
//      khối lệnh
//  }

// Toán tử logic:>, <, >=, <=, ==
// Kết quả trả về là giá trị true hoặc false (boolean)


// VD: In ra các số từ 0 đến 50
// for (let i = 0; i <= 4; i++) {
//     console.log(i);
// }

// i ++ <=> i = i + 1

let n = 50
console.log("Check: ", n > 60);

// in ra các phần tử có trong mảng let studientList = ["Thịnh", "Vũ", "Dương", "...u"];
// for (let index = 0; index < 6; index ++) {
//     console.log(studientList[index]);
// }

// Duyệt mảng:
// lần đầu tiên: index = 0 => studentList[0] => "Thịnh"
// lần thứ 2: index = 1 => studentList[1] => "Vũ"
// ...

// vòng lặp while: chỉ thực thi đoạn code bên trong khi điều kiện trả về true
// Cú pháp:
   // while (điều_kiện) {
   //     khối lệnh
   // }

// Vd
// while (19 >= 18) {
//     alert("Bạn đã đủ tuổi")
//     break
// }

// break => dừng vòng lặp
// Tìm hiểu thêm: do while()

// Kiểu dữ liệu Object - Đối tượng

// Cú pháp:
// let/var/const = {
//     tên_thuộc_tính_1: giá_trị,
//     tên_thuộc_tính_2: giá_trị,
//     ...
// }

let student1 = {
    name: "TVT",
    age: 15,
    address: "Ba Vi, Ha Noi",
    phone: "0961463722"
}

// lấy ra giá trị của các thuộc tính là name, age, address, phone
console.log("name của student1 là: ", student1.name);
console.log("name của student1 là: ", student1.age);
console.log("name của student1 là: ", student1.address);
console.log("name của student1 là: ", student1.phone);





