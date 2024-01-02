let gameseq = [];
let userseq = [];
let btns = ["cadetblue", "orange", "brown", "aquamarine"];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let btn = document.querySelector(".click");

btn.addEventListener("click", function () {
  if (started == false) {
    started = true;
    levelup();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function levelup() {
  userseq = [];
  level++;
  h3.innerText = `level ${level}`;
  //rendom number
  let randomInx = Math.floor(Math.random() * 3);
  let randomColor = btns[randomInx];
  let randombtn = document.querySelector(`.${randomColor}`);
  gameseq.push(randomColor);
  gameflash(randombtn);
}

function checkAns(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h3.innerHTML = `game over! your score was <b>${level}</b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    console.log(level);
    let array = [];
    array.push(level);
    console.log(array);
    reset();
  }
}

function btnpress() {
  let btn = this;
  userflash(btn);
  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
