let min, max;
let A = [2, 3, 4, 5, 6, 7, 8, -10, 30];
let soPhanTu = A.length;
max = A[0];
for (let i = 1; i < soPhanTu; i++) {
  if (max < A[i]) {
    max = A[i];
  }
}
min = A[0];
for (let i = 1; i < soPhanTu; i++) {
  if (min > A[i]) {
    min = A[i];
  }
}
console.log("Max la: ", max);
console.log("Min la: ", min);
