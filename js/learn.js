

// const x = window.prompt()
// window.alert(x);

//area calc (w,b)
// const width = window.prompt("Input Width");
// const breadth = window.prompt("Input breadth");
// const area = width * breadth;
// window.alert("Area is "+area+" sqft");

// const run = (x,y) => {
//     window.alert(parseInt (x));
//     window.alert(parseInt (y));
//     return parseFloat(x) + parseFloat(y);
// };
// const inputX = window.prompt("InputX...");
// const inputY = window.prompt("InputY...");
// window.alert(run(inputX,inputY));

// const answer = window.confirm("ထမင်းစားပြီးပြီလား...");
// window.alert(answer?"စားပြီးပြီ.." : "မစားရ ေသးဘူး..");


// dom
// const h1 = document.getElementsByTagName("h1")[0];

// console.dir(h1);
// console.log(h1.innerText);
// console.log(h1.style.color);
// console.log(h1.title);

//BTN

// const showAlert  = (event,x,y) => alert(x+y);

// const btn = document.querySelector("#btn");
// btn.onclick = showAlert.bind(null,event,3,6);
// console.dir(btn);

// btn.addEventListener('click',showAlert.bind(null,event,8,9));

// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter",() => console.log("mouse enter event"));
// h1.addEventListener("mouseout",() => console.log("mouse out event"));
// h1.addEventListener("mousemove",() => console.log("mouse move event"));


//input
const input = document.querySelector("input");
input.addEventListener("change",() => console.log("change event"));
input.addEventListener("keydown",() => console.log("keydown event"));
input.addEventListener("keyup",() => console.log("keyup event"));
input.addEventListener("keypress",() => console.log("keyPress event"));

//change
const select = document.querySelector("select");
select.addEventListener("change",() => console.log("change event"));

//form
const form = document.querySelector("form");
// form.addEventListener("submit",() => console.log ("U submit"));
form.addEventListener("submit",(e) => {
    // e.preventDefault();
    // console.log(this.valueAsDate);
    // console.log(document.querySelector(("input").valueAsDate));
    console.log(event.target.valueAsDate);
});

// window.addEventListener("scroll",() => console.log("U scroll"));
document.querySelector("#box").addEventListener("scroll",() => console.log("U scroll div"));

// window.addEventListener("load",() => console.log("window loaded"));

document.querySelector("a").addEventListener("click",(e) => {
    e.preventDefault()
    console.log(e)
});

