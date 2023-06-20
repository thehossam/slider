let arr = [ `img/slid_1.jpg`, `img/slid_2.jpg`, `img/slid_3.jpg`, `img/slid_4.jpg`, `img/slid_5.jpg`, `img/slid_6.jpg`, `img/slid_7.jpg`];
let img = document.getElementsByTagName("img")[0]
let pre = document.querySelector(".pre")
let next = document.querySelector(".next")
let number = document.querySelector(".number")
let i = 1;
next.addEventListener("click",() => {
  if (i >= arr.length) {
    i = 1;
  }
  img.src = `img/slid_${++i}.jpg`
  number.appendChild(i)
})
pre.addEventListener("click",() => {
  if (i <= 1) {
    i = arr.length -1;
  }
  img.src = `img/slid_${--i}.jpg`

})
setInterval(() =>{
  if (i >= arr.length) {
    i = 1;
  }
  img.src = `img/slid_${++i}.jpg`
  number.appendChild(i)
},4000)