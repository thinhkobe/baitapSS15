// // tính tổng các số trong khoảng 10~20.20~30.30~40

// // let total1 = 0;

// // for (let i = 10; i <= 20; i++) {
// //   total1 += i;
// // }
// // console.log("total1:", total1);

// // let total2 = 0;

// // for (let i = 20; i <= 30; i++) {
// //   total2 += i;
// // }
// // console.log("total2:", total2);

// // let total3 = 0;

// // for (let i = 30; i <= 40; i++) {
// //   total3 += i;
// // }
// // console.log("total3:", total3);

// // code bị lặp nhiều lần
// // khó bảo trì
// // function ra đời để giải quyết vấn đề trên

// // cú pháp khai báo hàm
// // function tên hàm(tham_so){ logic code}

// // viết hàm tính tổng 2 số a và b

// // function sum(a, b) {
// //   console.log(a + b);
// // }

// // sum(10, 20);

// // function sum(a, b) {
// //   let total = 0;
// //   for (let i = a; i <= b; i++) {
// //     total += i;
// //   }
// //   return total;
// // }

// // console.log(sum(10, 20));
// // console.log(sum(15, 20));
// // console.log(sum(40, 50));

// // viết hàm tính tổng các số trong mảng

// const array = [10, 22, 15, 30, 80, 65];
// /**
//  * Hàm tính tổng các số trong một mảng
//  * @param {*} array Mảng các số cần tính toán
//  * @returns Tổng các số trong mảng
//  * Author;tvthinh(29/11/2023)
//  * modifiedby :
//  */
// function sumArray(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }

//   return total;
// }
// let result = sumArray(array);
// console.log(result);

// // viết hàm tính giá trị lớn nhất trong mảng

// function maxArray(array) {
//   if (array.length === 0) {
//     return null;
//   }
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// console.log(maxArray(array));

// // viết hàm đảo ngược chuỗi

// function reverseAray(array) {
//   let newarray = array.reverse();
//   return newarray;
// }

// console.log(reverseAray(array));

// // viết hàm kiểm tra số chẵn và hàm kiểm tra số lẻ

// function check(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       console.log(`${array[i]}là số chẵn`);
//     } else {
//       console.log(`${array[i]}là số lẻ`);
//     }
//   }
// }

// check(array);
// // trong js thông thường có 3 loại function
// //1,declaration funtion
// //2,expression function
// //3,Arrow function
// // I,Declaration function Cú pháp :function(thamso){//logic code}
// // declaration funtion có cơ chế hosting()
// // phạm vi sử dụng của biến :những biến được khai báo với từ khóa let , const chỉ có giá trị trong khối block đấy
// // nếu khai báo function loại này mà trùng tên nhau thì nó sẽ lấy giá trị của hàm khai báo sau

// // xây dựng hàm tính tổng a và b
// // function sum(a, b) {
// //   // logic code
// //   return a + b;
// // }

// // console.log(sum(1, 3));

// // II,expression function

// // let ten_ham =functiion (tham_so){logic code}
// // chú ý hàm này k có cơ chế hosting
// // nếu như khai báo với từ khóa var thì chúng ta có thể khai báo lại được và nó sẽ lấy kết quả của hàm được khai báo sau cùng

// let subtraction = function (a, b) {
//   return a + b;
// };
// console.log(subtraction(4, 5));

// // III,arrow function
// // Cú pháp : tu_khoa_khai_bao  ten_ham = (tham_so)=>{logic code}
// // Không có cơ chế hosting
// //  nên khai báo với từ khóa const ,không nên sử dụng với từ khóa var

// // khi sử dụng hàm yêu cầu phải bắt try-catch cho hàm để tránh việc hàm bị dừng đột ngột,và làm cho chuong trình chết
// // khi chương trình thành công thì nó sẽ lọt vào try
// // khi có lỗi xảy ra thì nó sẽ lọt vào catch
// // khi thành công hay thất bại thì mặc định nó chạy vào finally

// /**
//  * thực hiện nhân hai số
//  * @param {*} a số thứ nhất
//  * @param {*} b số thứ 2
//  * @returns kết quả nhân 2 số
//  * auth:nv quy(10/11/2023)
//  */
// const multiplication = (a, b) => {
//   return a * b;
// };

// console.log(multiplication(3, 4));

// Đối tượng Date = Phải sử dụng từ khóa new để tạo đối tượng
//lấy ra thời gian hiện tại trên máy

// let today = new Date();

// console.log(today);

// // lấy ra ngày tháng năm giờ phút, giây , mini giây

// let day = today.getDate();

// console.log("Ngày :", day);

// let month = today.getMonth();
// console.log("tháng :", month);

// let year = today.getFullYear();
// console.log("năm :", year);

// let hours = today.getHours();
// console.log("giờ :", hours);

// let minutes = today.getMinutes();
// console.log("phút :", minutes);

// let seconds = today.getSeconds();
// console.log("giây :", seconds);

// let milliSeconds = today.getMilliseconds();
// console.log(" mini giây :", milliSeconds);

// Định dạng chuỗi thời gian

// 1,Định dạng kiểu Ngày/tháng /năm

// let formatDate = `${day}/${month}/${year}`;
// console.log(formatDate);

//2, Định dạng kiểu năm tháng ngày

// viết hàm format thời gian dựa vào một chuỗi thời gian đã cho

//11/10/2023 8:06:13 SA

let time = "Fri Dec 01 2023 08:57:28 ";

/**
 * format định dạng thời gian :Ngày/Tháng/Năm
 * @param {*} timeString  Chuỗi thời gian cần định dạng
 * @returns  Chuỗi định dạng ngày/tháng/năm
 * auth:NVQUY (01/12/2023)
 */
const formatDate = (timeString) => {
  // lấy ra thời gian hiện tại bằng newDate và truyền vào đối tượng cần Format
  let today = new Date(timeString);

  // lấy ra ngày của chuỗi cần định dạng
  let day = today.getDate();

  // lấy ra tháng của chuỗi cần định dạng
  let month = today.getMonth() + 1;
  // lấy ra năm cần định dạng
  let year = today.getFullYear();
  return `${day}/${month}/${year}`;
};

console.log(formatDate(time));

// Chuyển đổi thời gian hiện tại theo quy chuẩn ISOS và cắt chuỗi theo định dạng Năm/Tháng/Ngày
let formatToLacal = new Date().toISOString().split("T")[0];
console.log("formatToLocal:", formatToLacal);
