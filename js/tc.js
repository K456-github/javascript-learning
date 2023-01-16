//font
const font = ["Ariel","Corbel","sans-serif","Gill Sans"] ;

//selectors

const output =document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("count");
const color = document.querySelector("color");
const fontsize = document.querySelector("fontsize");
const fontFamily = document.querySelector("fontFamily");

// fontsize.forEach((font) => {
//     fontFamily.append(new Option(font, font));
// });

text.addEventListener("keyup",(event) => {
 
    output.innerText = text.value;
    count.innerText = text.value.length;
});
color.addEventListener("change",(event) => {
    output.style.color = event.target.value;
});

fontsize.addEventListener("change",(event) => {
    console.log(fontsize.value);
    output.style.fontsize = event.target.value + "px";
});

fontFamily.addEventListener("change", (event) => {
    console.log(event.target.value);
    output.style.fontFamily = fontFamily.value;
})

