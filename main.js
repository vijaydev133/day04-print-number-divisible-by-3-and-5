/************************************************************************************ */
//5) Modify the previous program such that only multiples of three or five are
// considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
/************************************************************************************ */

let input = document.getElementById("inp");

let btn1 = document.getElementById("btn-1");

let btn2 = document.getElementById("btn-2");

let output = document.getElementById("out");

btn1.addEventListener("click", function () {
  let num = input.value;
  console.log(num);
  // let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      let para = document.createElement("p");
      para.innerText = i;
      output.appendChild(para);
    }
  }
});
btn2.addEventListener("click", function () {
  output.innerHTML = " ";
  input.value = " ";
});

// let n = prompt("Enter a number");

// let sum = 0;

// for(let i = 1; i <= n; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//         document.write(` ${i} `)
//     }
// }
