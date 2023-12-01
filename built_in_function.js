// setTimeout cho phép chương trình bị delay trong một khoảng thời gian nhất định
// chỉ chạy 1 lần

// setTimeout(function,time_delay)

// setTimeout(() => {
//   console.log("logger");
// }, 3000);

// // setInterval cho phép chương trình bị delay trong một khoảng thời gian nhất định tuy nhiên
// // nó sẽ chạy liên tục
// // cú pháp : setInterval(function,timedelay)
// // Hàm không có tên gọi là hàm ẩn danh

// const logger = () => {
//   console.log("logger");
// };

// setInterval(logger, 3000);
// đồng hồ

const clock = () => {
  let today = new Date();

  let hours = today.getHours().toString().padStart(2, "0");

  let minutes = today.getMinutes().toString().padStart(2, "0");

  let seconds = today.getSeconds().toString().padStart(2, "0");

  console.log(`${hours}${minutes}${seconds}`);
  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
};
// setInterval(() => {
//   console.log(clock());
// }, 1000);
/**
 * kiểm tra định dạng email
 * @param {*} email chuỗi email cần kiểm tra
 * @returns true nếu email đúng định dạng ,false nếu email sai định dạng
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

if (!validateEmail("quygmail.com")) {
  console.log("sai");
} else {
  console.log("dungs");
}

// Xây dựng hàm kiểm tra các trường nhập vào có để trống không , trừ các giá trị
// Null , undefiend "" thì các giá trị khác đều thỏa mãn

// checkIsEmpty(field)

let field = prompt("nhập đoạn văn");
/**
 * Kiểm tra các trường có giá trị rỗng
 * @param {*} field  trường cần kiểm tra
 * @returns nếu trường đó bị rỗng sẽ có giá trị true
 */
const checkEmpty = (field) => {
  if (field === undefined || field === null || field === "") {
    return true;
  } else {
    return false;
  }
};

let value = prompt("Mời bạn nhập địa chỉ Email:");

if (checkEmpty(value)) {
  console.log("email không được để trống");
} else {
  console.log("gửi dữ liệu");
}
