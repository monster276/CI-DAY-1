// bài tập 1
const array = [
  {
    gia: "3000",
    san_pham: "ao 3 lỗ",
    so_luong: 1
  },
  {
    gia: "12000",
    san_pham: "quan Đen",
    so_luong: 2
  },
  {
    gia: "3000",
    san_pham: "quan dài",
    so_luong: 5
  }
];
let sum = array.reduce( (total, currentValue)=> {
    return total + currentValue.gia*currentValue.so_luong;
}, 0);
console.log(sum);

// bài tập 2
// tìm số lần xuất hiện của số 2 trong chuỗi
const chuoiNumber = "12234534342";
// huong dan sung split cat chuoi thanh mang cac 
// phan tu

let newArr = chuoiNumber.split('')
console.log(newArr)
let solandem=0
for (let i = 0; i <= newArr.length; i++){
    if (newArr[i] == 2) {
        solandem=solandem+1
    } 
}
console.log(`so 2 xuat hien ${solandem} lan`)