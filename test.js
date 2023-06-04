// Problem - 1

// var array = [
//   2, 3, 55, 6, 67, 78, 23, 5, 67, 78, 43, 67, 34, 6, 74, 7, 74, 45, 23, 45, 78,
//   89, 34, 23,
// ];
// var target = -129;

// function subtraction(array, target) {
//   var flag = false;

//   for (let i = 0; i < array.length - 4; i++) {
//     // console.log(array[i]);
//     for (let j = i + 1; j < array.length - 3; j++) {
//       //   console.log(array[j]);
//       for (let k = j + 1; k < array.length - 2; k++) {
//         for (let l = k + 1; l < array.length - 1; l++) {
//           for (let m = l + 1; m < array.length; m++) {
//             if (
//               array[i] - array[j] - array[k] - array[l] - array[m] ===
//               target
//             ) {
//               console.log(
//                 array[i],
//                 array[j],
//                 array[k],
//                 array[l],
//                 array[m],
//                 "=",
//                 target
//               );
//               flag = true;
//             }
//           }
//         }
//       }
//     }
//   }
//   if (flag == false) {
//     console.log("sorry not match");
//   }
// }
// subtraction(array, target);

// Problem 2

// var array2 = [
//   2, 3, 55, 6, 67, 78, 23, 5, 67, 78, 43, 67, 34, 6, 74, 7, 45, 23, 45, 78, 89,
//   34, 23,
// ];
// var target = 236028;

// function mul(array, target) {
//   var flag = false;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] * array[j] === target) {
//         console.log(array[i], array[j]);
//         flag = true;
//       }
//     }
//   }
//   if (flag == false) {
//     console.log("no match found");
//   }
// }

// mul(array2, target);

// Problem 3
// var array3 = [
//   2, 3, 55, 6, 67, 78, 23, 5, 67, 78, 43, 67, 34, 6, 74, 7, 45, 23, 45, 78, 89,
//   34, 23,
// ];

// function sum(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       console.log(array[i]);
//     }
//   }
// }

// sum(array3);

// Problem 4

// var array4 = [
//   2, 3, 55, 6, 67, 78, 23, 5, 67, 78, 43, 67, 34, 6, 74, 7, 45, 23, 45, 78, 89,
//   34, 23,
// ];

// function countOfOdd(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//       console.log(array[i]);
//     }
//   }
// }
// countOfOdd(array4);
