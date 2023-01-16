const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const donetotal = document.querySelector("#donetotal");

const createLi = (text) => {
  const dynamicId = "flexCheck" + Date.now;
  const li = document.createElement("li");
  li.addEventListener("dblclick", edit);
  li.className =
    "list-group-item d-flex align-items-center justify-content-between my-2";
  li.innerHTML = `<div class="form-check">
    <input type="checkbox" value="" onchange = done(event) class="form-check-input" id="${dynamicId}">
    <label for="${dynamicId}" class="form-check-label">
    ${text}
    </label>
</div>
<div>
<button class="btn btn-sm btn-outline-danger pe-none" onclick = "edit(event)">
    <i class="bi bi-pencil"></i>
</button>
<button class="btn btn-sm btn-outline-danger pe-none" onclick = "del(event)">
    <i class ="bi bi-trash3"></i>
</button>
</div>
`;
  return li;
};

const addlist = () => {
  if (textInput.value.trim()) {
    lists.append(createLi(textInput.value));
    textInput.value = null;
    counter()
  } else {
    alert("input text is empty");
  }
};

const del = (event) => {
  if (confirm("Are you sure to delete?")) {
    event.target.closest(".list-group-item").remove();
  }
};

const done = (event) => {
  event.target.nextElementSibiling.classList.toogle(
    "text-decoration-line-through"
  );
};

const edit = (event) => {
  const old = event.target.target.closest(".list-group-item").querySelector(".form-check-label");
//   const newText = promt("Input New Text", old.innerText);
  if(newText && newText.trim()){
    old.innerText = newText;
  }
};

createBtn.addEventListener("click", addlist);

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addlist();
  }
});

const counter = () =>{
    total.innerText = lists.childern.length;
};