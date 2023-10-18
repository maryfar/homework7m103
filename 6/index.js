"use strict";
const closeModalButton = document.getElementById("close");
const cartModal = document.getElementById("cartModal");
const modalContent = document.getElementById("modalContent");
const buyButtons = document.querySelectorAll(".beautiful-button");
const productContainer = document.querySelector(".product-list");
const filterModel = document.getElementById("model-filter");
const processorFilter = document.getElementById("processor-filter");
const filterRAM = document.getElementById("filterRAM");
const filterHardDisk = document.getElementById("filterHardDisk");
const filterDisplay = document.getElementById("filterDisplay");
const filterGraphic = document.getElementById("filterGraphic");
// Array to store the products in the shopping cart
const shoppingCart = [];
// Function to add a product to the shopping cart
function addToCart(product) {
    shoppingCart.push(product);
}
// Function to display the shopping cart in the modal
function displayCart() {
    console.log("hi");
    // Clear the modal content
    modalContent.innerHTML = "";
    console.log(cartModal.style);
    // Check if the shopping cart is empty
    if (shoppingCart.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.innerText = "Your cart is empty.";
        modalContent.appendChild(emptyMessage);
        return;
    }
    // Create a div for each product in the shopping cart
    shoppingCart.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("cart-item");
        const modelElement = document.createElement("p");
        modelElement.innerText = "Model: " + product.model;
        const processorElement = document.createElement("p");
        processorElement.innerText = "Processor: " + product.processor;
        const ramElement = document.createElement("p");
        ramElement.innerText = "RAM: " + product.ram;
        const hardDiskElement = document.createElement("p");
        hardDiskElement.innerText = "Hard Disk: " + product.hardDisk;
        const displayElement = document.createElement("p");
        displayElement.innerText = "Display: " + product.display;
        const graphicElement = document.createElement("p");
        graphicElement.innerText = "Graphic: " + product.graphic;
        const priceElement = document.createElement("p");
        priceElement.innerText = "Price: " + product.price;
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", () => {
            // Handle the edit functionality
            // You can display a form to edit the product details
        });
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            // Handle the delete functionality
            removeFromCart(product);
            displayCart();
        });
        // Append elements to product container
        productDiv.appendChild(modelElement);
        productDiv.appendChild(processorElement);
        productDiv.appendChild(ramElement);
        productDiv.appendChild(hardDiskElement);
        productDiv.appendChild(displayElement);
        productDiv.appendChild(graphicElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(editButton);
        productDiv.appendChild(deleteButton);
        modalContent.appendChild(productDiv);
    });
    // modalContent.appendChild(closeModalButton);
    closeModalButton.addEventListener("click", () => {
        cartModal.style.display = "none";
    });
}
// Function to remove a product from the shopping cart
function removeFromCart(product) {
    const index = shoppingCart.findIndex((p) => p.model === product.model);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }
}
// Add event listeners to the "Buy" buttons
buyButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const productDiv = productContainer.children[index];
        // Get the values from HTML elements
        const model = (_b = (_a = productDiv.querySelector("#model-span")) === null || _a === void 0 ? void 0 : _a.innerText) !== null && _b !== void 0 ? _b : "";
        const processor = (_d = (_c = productDiv.querySelector("#processor-span")) === null || _c === void 0 ? void 0 : _c.innerText) !== null && _d !== void 0 ? _d : "";
        const ram = (_f = (_e = productDiv.querySelector("#ram-span")) === null || _e === void 0 ? void 0 : _e.innerText) !== null && _f !== void 0 ? _f : "";
        const hardDisk = (_h = (_g = productDiv.querySelector("#hard-disk-span")) === null || _g === void 0 ? void 0 : _g.innerText) !== null && _h !== void 0 ? _h : "";
        const display = (_k = (_j = productDiv.querySelector("#display-span")) === null || _j === void 0 ? void 0 : _j.innerText) !== null && _k !== void 0 ? _k : "";
        const graphic = (_m = (_l = productDiv.querySelector("#graphic-span")) === null || _l === void 0 ? void 0 : _l.innerText) !== null && _m !== void 0 ? _m : "";
        const price = (_p = (_o = productDiv.querySelector("#price-span")) === null || _o === void 0 ? void 0 : _o.innerText) !== null && _p !== void 0 ? _p : "";
        const photo = (_r = (_q = productDiv.querySelector("img")) === null || _q === void 0 ? void 0 : _q.src) !== null && _r !== void 0 ? _r : "";
        // Create product object
        const product = {
            model: model,
            processor: processor,
            ram: ram,
            hardDisk: hardDisk,
            display: display,
            graphic: graphic,
            price: price,
            photo: photo,
        };
        addToCart(product);
    });
});
// Add event listener to the "Cart" button
const cartButton = document.getElementById("cartButton");
cartButton.addEventListener("click", () => {
    cartModal.style.display = 'block';
    cartModal.style.display = 'flex';
    displayCart();
});
//Function to FILTER a product
filterModel.addEventListener('change', applyFilters);
processorFilter.addEventListener('change', applyFilters);
filterRAM.addEventListener('change', applyFilters);
filterHardDisk.addEventListener('change', applyFilters);
filterDisplay.addEventListener('change', applyFilters);
filterGraphic.addEventListener('change', applyFilters);
function applyFilters() {
    // Get selected filter values
    const selectedModel = filterModel.value;
    const selectedProcessor = processorFilter.value;
    const selectedRAM = filterRAM.value;
    const selectedHardDisk = filterHardDisk.value;
    const selectedDisplay = filterDisplay.value;
    const selectedGraphic = filterGraphic.value;
    // Get all product elements
    const products = document.querySelectorAll('.product');
    // Loop through each product and check if it matches the selected filters
    products.forEach((product, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const productDiv = productContainer.children[index];
        const model = (_b = (_a = productDiv.querySelector("#model-span")) === null || _a === void 0 ? void 0 : _a.innerText) !== null && _b !== void 0 ? _b : "";
        const processor = (_d = (_c = productDiv.querySelector("#processor-span")) === null || _c === void 0 ? void 0 : _c.innerText) !== null && _d !== void 0 ? _d : "";
        const ram = (_f = (_e = productDiv.querySelector("#ram-span")) === null || _e === void 0 ? void 0 : _e.innerText) !== null && _f !== void 0 ? _f : "";
        const hardDisk = (_h = (_g = productDiv.querySelector("#hard-disk-span")) === null || _g === void 0 ? void 0 : _g.innerText) !== null && _h !== void 0 ? _h : "";
        const display = (_k = (_j = productDiv.querySelector("#display-span")) === null || _j === void 0 ? void 0 : _j.innerText) !== null && _k !== void 0 ? _k : "";
        const graphic = (_m = (_l = productDiv.querySelector("#graphic-span")) === null || _l === void 0 ? void 0 : _l.innerText) !== null && _m !== void 0 ? _m : "";
        // Check if all filter conditions match
        const matchModel = selectedModel === '0' || model === `Model ${selectedModel}`;
        const matchProcessor = selectedProcessor === 'all' || processor === `CORE ${selectedProcessor}`;
        const matchRAM = selectedRAM === 'all' || ram === `${selectedRAM} GB`;
        const matchHardDisk = selectedHardDisk === '0' || hardDisk === `${selectedHardDisk} TB`;
        const matchDisplay = selectedDisplay === 'all' || display === `${selectedDisplay} inch`;
        const matchGraphic = selectedGraphic === 'all' || graphic === `${selectedGraphic} GB`;
        // Hide or show the product based on the filter conditions
        if (matchModel && matchProcessor && matchRAM && matchHardDisk && matchDisplay && matchGraphic) {
            product.style.display = 'flex'; // Show the product
        }
        else {
            product.style.display = 'none'; // Hide the product
        }
    });
}
// const filterHandler = (event:any) => {
//   const filterElement = event.target;
//   const selectedValue = filterElement.value;
//   switch (filterElement.id) {
//     case 'filterModel':
//       applyFilter('model', selectedValue);
//       break;
//     case 'processorFilter':
//       applyFilter('processor', selectedValue);
//       break;
//     case 'filterRAM':
//       applyFilter('ram', selectedValue);
//       break;
//     case 'filterHardDisk':
//       applyFilter('hardDisk', selectedValue);
//       break;
//     case 'filterDisplay':
//       applyFilter('display', selectedValue);
//       break;
//     case 'filterGraphic':
//       applyFilter('graphic', selectedValue);
//       break;
//     default:
//       break;
//   }
// }
// function applyFilter(filterProperty:any, selectedValue:any) {
//   const products = document.querySelectorAll('.product');
//   products.forEach((product) => {
//     const productValue = (product.querySelector(`.${filterProperty}-span`) as HTMLElement)?.innerText ?? '';
//     if (selectedValue === '0' || productValue === selectedValue) {
//       (product as HTMLElement).style.display = 'flex'; // Show the product
//           } else {
//             (product as HTMLElement).style.display = 'none'; // Hide the product
//           }
//         });
//       }
