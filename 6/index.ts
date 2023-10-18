const closeModalButton = <HTMLButtonElement>document.getElementById("close");
const cartModal = <HTMLDivElement>document.getElementById("cartModal");
const modalContent = <HTMLDivElement> document.getElementById("modalContent");
const buyButtons = document.querySelectorAll(".beautiful-button");
const productContainer =<HTMLDivElement> document.querySelector(".product-list");
const filterModel = <HTMLSelectElement> document.getElementById("model-filter");
const processorFilter = <HTMLSelectElement> document.getElementById("processor-filter");
const filterRAM = <HTMLSelectElement> document.getElementById("filterRAM");
const filterHardDisk = <HTMLSelectElement> document.getElementById("filterHardDisk");
const filterDisplay = <HTMLSelectElement> document.getElementById("filterDisplay");
const filterGraphic = <HTMLSelectElement> document.getElementById("filterGraphic");


interface Product {
  model: string;
  processor: string;
  ram: string;
  hardDisk: string;
  display: string;
  graphic: string;
  price: string;
  photo: string;
}


// Array to store the products in the shopping cart
const shoppingCart: Product[] = [];

// Function to add a product to the shopping cart
function addToCart(product: Product) {
  shoppingCart.push(product);
}

// Function to display the shopping cart in the modal
function displayCart() {
  console.log("hi")
 

  // Clear the modal content
  
  modalContent.innerHTML = "";
  console.log(cartModal.style)
  
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
function removeFromCart(product: Product) {
  const index = shoppingCart.findIndex((p) => p.model === product.model);
  if (index !== -1) {
    shoppingCart.splice(index, 1);
  }
}

// Add event listeners to the "Buy" buttons

buyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {

    const productDiv = productContainer.children[index];

    // Get the values from HTML elements
    const model = (productDiv.querySelector("#model-span") as HTMLElement)?.innerText ?? "";
    const processor = (productDiv.querySelector("#processor-span") as HTMLElement)?.innerText ?? "";
    const ram = (productDiv.querySelector("#ram-span") as HTMLElement)?.innerText ?? "";
    const hardDisk = (productDiv.querySelector("#hard-disk-span") as HTMLElement)?.innerText ?? "";
    const display = (productDiv.querySelector("#display-span") as HTMLElement)?.innerText ?? "";
    const graphic = (productDiv.querySelector("#graphic-span") as HTMLElement)?.innerText ?? "";
    const price = (productDiv.querySelector("#price-span") as HTMLElement)?.innerText ?? "";
    const photo = (productDiv.querySelector("img") as HTMLImageElement)?.src ?? "";

    // Create product object
    const product: Product = {
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
const cartButton = <HTMLButtonElement>document.getElementById("cartButton");
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
    const productDiv = productContainer.children[index] as HTMLElement;

    const model = (productDiv.querySelector("#model-span") as HTMLElement)?.innerText ?? "";
    const processor = (productDiv.querySelector("#processor-span") as HTMLElement)?.innerText ?? "";
    const ram = (productDiv.querySelector("#ram-span") as HTMLElement)?.innerText ?? "";
    const hardDisk = (productDiv.querySelector("#hard-disk-span") as HTMLElement)?.innerText ?? "";
    const display = (productDiv.querySelector("#display-span") as HTMLElement)?.innerText ?? "";
    const graphic = (productDiv.querySelector("#graphic-span") as HTMLElement)?.innerText ?? "";

    // Check if all filter conditions match
    const matchModel = selectedModel === '0' || model === `Model ${selectedModel}`;
    const matchProcessor = selectedProcessor === 'all' || processor === `CORE ${selectedProcessor}`;
    const matchRAM = selectedRAM === 'all' || ram === `${selectedRAM} GB`;
    const matchHardDisk = selectedHardDisk === '0' || hardDisk === `${selectedHardDisk} TB`;
    const matchDisplay = selectedDisplay === 'all' || display === `${selectedDisplay} inch`;
    const matchGraphic = selectedGraphic === 'all' || graphic === `${selectedGraphic} GB`;

    // Hide or show the product based on the filter conditions
    if (matchModel && matchProcessor && matchRAM && matchHardDisk && matchDisplay && matchGraphic) {
      
     (product as HTMLElement).style.display = 'flex'; // Show the product
    } else {
      (product as HTMLElement).style.display = 'none'; // Hide the product
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



