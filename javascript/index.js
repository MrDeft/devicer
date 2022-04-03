// Auto
let coll1 = document.getElementById("coll1");
let coll2 = document.getElementById("coll2");
let coll3 = document.getElementById("coll3");

function step1() {
    coll1.classList.remove("visibility");
    coll1.classList.add("hidden");
    coll2.classList.remove("hidden");
    coll2.classList.add("visibility");
    setTimeout(step2, 4000)
}

function step2() {
    coll2.classList.remove("visibility");
    coll3.classList.remove("hidden");
    coll2.classList.add("hidden");
    coll3.classList.add("visibility");
    setTimeout(step3, 4000);
}

function step3() {
    coll3.classList.remove("visibility");
    coll3.classList.add("hidden");
    coll1.classList.remove("hidden");
    coll1.classList.add("visibility");
    setTimeout(step1, 4000);
}
setTimeout(step1, 4000);


// Date
let a = document.getElementsByClassName('sec');
let b = document.getElementsByClassName('min');
let c = document.getElementsByClassName('hrs');
let d = document.getElementsByClassName('day');

function date() {
    let sec = new Date().getSeconds();
    let min = new Date().getMinutes();
    let hrs = new Date().getHours();
    let day = new Date().getDay();

    for (let i = 0; i < 4; i++) {
        a[i].innerHTML = String(sec).length == 1 ? '0' + sec : sec;
        b[i].innerHTML = String(min).length == 1 ? '0' + min : min;
        c[i].innerHTML = String(hrs).length == 1 ? '0' + hrs : hrs;
        d[i].innerHTML = String(day).length == 1 ? '0' + day : day;
    }
}
setInterval(date, 1000)

// Coach
let f = new Date().getHours();
console.log(f);

function heart(str, e) {
    if (e.classList[1] == 'fa-heart') {
        e.classList.toggle('fa-heart-o');
        e.classList.add('fa-heart');
    } else if (e.classList[1] == 'fa-heart-o') {
        e.classList.remove('fa-heart-o');
        e.classList.add('fa-heart');
    }
}