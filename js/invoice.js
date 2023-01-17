//variable
const services = [
  {
    id: 1,
    title: "Domain Service",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting Service",
    price: 30,
  },
  {
    id: 3,
    title: "Web Design Service",
    price: 200,
  },
  {
    id: 4,
    title: "Maintaince Service",
    price: 100,
  },
];
//selectors
const app = document.querySelector("#app");
const invoiceform = document.querySelector("#invoiceform");
const SelectService = document.querySelector("#SelectService");33
const quantity = document.querySelector("#quantity");
const lists = document.querySelector("#lists");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const listTable = document.querySelector("#listTable");

//function
const createTr = (service,quantity) => {
  const tr = document.createElement("tr");
  tr.classList.add("list");
  tr.setAttribute("service-id", service.id);
  const total = service.price * quantity;
  tr.innerHTML = `
    <td class = "d-flex justify-content-between">${service.title} 
    <i class = "bi bi-trash3 del-btn text-danger"></i>
    </td>
    <td class ="text-end list-quantity">${quantity}</td>
    <td class ="text-end">${service.price}</td>
    <td class ="text-end list-total">${total}</td>`;
  return tr;
};

const calculateTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};

//process(task)
const findTotal = () => {
  const listTotal = document.querySelectorAll(".list-total");
  let subTotalcalculated = [...listTotal].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );

  subTotal.innerText = subTotalcalculated;
  tax.innerText = calculateTax(subTotalcalculated);
  total.innerText = subTotalcalculated + calculateTax(subTotalcalculated);
};

const showTable = () => {
  if (lists.children.length) {
    listTable.classList.remove("d-none");
  } else {
    listTable.classList.add("d-none");
  }
};

//service option
services.forEach(({ title, id }) =>
  SelectService.append(new Option(title, id))
);

//data collection from form
invoiceform.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(
  //   SelectService.value,
  //   quantity.valueAsNumber,
  //   services.find((service) => service.id == SelectService.value)
  // );

  const selectedservice = services.find(({ id }) => id == SelectService.value);

  const isExistedService = [...lists.children].find(
    el => el.getAttribute("service-id") === selectedservice.id
  );

  if (isExistedService) {
    console.log("yes it is existed");
    console.log(isExistedService);
    const existedQuantity = isExistedService.querySelector(".list-quantity");
    existedQuantity.innerText =
      parseFloat(existedQuantity.innerText) + quantity.valueAsNumber;
    isExistedService.querySelector(".list-total").innerText =
      existedQuantity.innerText * selectedservice.price;
  } else {
    lists.append(createTr(selectedservice, quantity.valueAsNumber));
  }

  findTotal();
  invoiceform.reset();
  showTable();
});

app.addEventListener("click", (event) => {
  const currentElement = event.target;
  if (currentElement.classList.contains("del-btn")) {
    //delete function here
    currentElement.closest("tr").remove();
    findTotal();
    showTable();
  }
});
