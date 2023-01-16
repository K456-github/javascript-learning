const result =document.getElementById("result");
const store =document.getElementById("store");
const width =document.getElementById("width");
const breadth =document.getElementById("breadth");
const clear =document.getElementById("clear");
const calculate =document.getElementById("calculate");
const records =document.getElementById("records");

const calcArea= () =>{
    const area = width.value * breadth.value;
    result.innerText = `w:${width.value}ft * b:${breadth.value}ft = ${area}sqft`;
    width.value = breadth.value = null;
};

//function
const clearResult = () =>{
    // console.log("clear result function");
    result.innerText = null;
};


// width.valueAsNumber = breadth.valueAsNumber = null;

const storeResult= () =>{ 
    records.innerHTML += `<li>${result.innerText}</li>`;
    clearResult();
};

//process
calculate.onclick = calcArea;
store.onclick = storeResult;
clear.onclick = clearResult;
