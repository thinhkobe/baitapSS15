// Viết hàm kiểm tra số lượng ký tự mật khẩu, nếu mật khẩu nhập vào
// ngắn hơn 8 ký tự thì in ra là “Mật khẩu không được ngắn hơn 8 ký tự),
//  nếu mật khẩu nhập lớn hơn 8 ký tự thì in ra nội dung “Đăng ký tài khoản thành công”

/**
 * Hàm check mật khẩu
 * @param {*} password mật khẩu từ khách hàng
 */
// const checkPassword = (password) => {
//   if (password.length < 8) {
//     return "Mật khẩu không được ngắn hơn 8 kí tự";
//   } else {
//     return "đăng nhập thành công";
//   }
// };

// let password = prompt("Nhập Mật Khẩu");
// console.log(checkPassword(password));

// Xây dựng một hàm nhập vào một chuỗi và một ký tự bất kỳ, giá trị trả ra
// là một chuỗi mới có ký tự vừa nhập vào sẽ là một chữ cái in hoa.
// Ví dụ: Nhập chuỗi “lâm xấu trai lắm” thành chuỗi “Lâm xấu trai Lắm”.

// let string = prompt("nhập chuỗi");
// let text = prompt("nhap chu can in hoa");

// const convert = (string, text) => {
//   let newString = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == text) {
//       newString += string[i].toUpperCase();
//     } else {
//       newString += string[i];
//     }
//   }
//   return newString;
// };

// console.log(convert(string, text));

// Xây dựng hàm chuyển đổi từ độ C sang độ F và ngược lại từ độ F sang độ C.
//  Tạo hàm convertTemperature nhận vào 3 tham số, tham số 1 là giá trị cần chuyển đổi,
//   tham số 2 là đơn vị gốc (có thể là độ C hoặc độ F) ,
//   tham số 3 là giá trị chuyển đổi qua ( có thể là độ F hoặc độ C)

// let value = parseInt(prompt("nhiệt độ"));
// let fromUnit = prompt("đơn vị gốc viết hoa");
// let toUnit = prompt("đơn vị muốn chuyển qua ");

// const convert = (a, b, c) => {
//   let temperature;
//   if (b == "f" && c == "c") {
//     temperature = (5 / 9) * (a - 32);
//   } else if (b == "c" && c == "f") {
//     temperature = (a * 9) / 5 + 32;
//   } else {
//     console.log("nhập lại");
//     return;
//   }
//   return temperature;
// };

// console.log(convert(value, fromUnit, toUnit) + "do" + toUnit);

// Xây dựng hàm để đếm số lần xuất hiện của một ký tự.
// Ví dụ khi mình gọi hàm: count(“a”, “anh day”) thì nó sẽ in ra là 2

// const count = (text, a) => {
//   let N = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] == a) {
//       N += 1;
//     }
//   }
//   return N;
// };

// let text = prompt("nhập text");
// let characters = prompt("Nhập kí tự cần đếm");
// console.log(count(text, characters));

// // Xây dựng hàm trả về giá trị lớn nhất trong một mảng

// const findMax = (array) => {
//   let max = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// };

// let array = [654, 598, 598, 629, 848];
// console.log(findMax(array) + "là số có giá trị lơn nhất trong mảng");

// Viết hàm để đảo ngược một số nguyên. Ví dụ nhập vào 12345 thì trả về 54321

// const reverceNumber = (number) => {
//   let newNumber = number.toString().split("").reverse().join("");

//   return newNumber;
// };
// let str = 782222244;
// console.log(reverceNumber(str));

// Viết hàm đặt tên là findIndex() nhập vào một mảng số nguyên và một giá trị
// , trả về vị trí xuất hiện của phần tử đó trong mảng, nếu không tìm thấy thì trả về -1.

const findIndexz = (array, characters) => {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === characters) {
      index = i;
      break;
    }
  }
  return index;
};

let result = findIndexz([12712, 212, 7, 24343], 7);
console.log(result);

// Viết một hàm nhập vào một mảng các số nguyên và một giá trị,
//  trả về một mảng mới nhưng không chứa giá trị nhập vào.
//  Đặt tên hàm là filter() nhập vào filter (2, [1, 2, 3, 4, 5])  và kết quả trả ra là [1, 3, 4, 5]

const filter = (array, value) => {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

let result1 = filter([12712, 212, 7, 24343], 7);
console.log(result1);
