let inputvalue1 = prompt("Enter number ?");
inputvalue1 = Number(inputvalue1);
let a = inputvalue1;
let result;
if (a > 1) {
    result = a + " là số nguyên tố"
} else {
    alert(a + " không phải là số nguyên tố")
    result = a + " không phải là số nguyên tố"
}
console.log(result);