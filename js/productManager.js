const productsSection = document.createElement("section");
productsSection.id = "render-section";
const mainSection = document.getElementById("allProducts");
mainSection.appendChild(productsSection);

const getProducts = async () => {
    const response = await fetch("../data.json");
    const data = await response.json();

    return data;
};

const renderProducts = async () => {
    const products = await getProducts();

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product-div";

        productDiv.innerHTML = `
            <h2 class="product-name">${product.name}</h2>
            <p class="product-price">${product.price}</p>
            <img class="product-image" src="${product.image}">
            <button id="${product.id}" class="product-button">Add to Cart</button>`;

        productsSection.appendChild(productDiv);
    });

    let ButtonListener = document.querySelectorAll(".product-button");

    ButtonListener.forEach((button) => {
        button.addEventListener("click", (event) => {
            let productId = event.target.id;
            let productItem = products.find(
                (productItem) => productItem.id === parseInt(productId)
            );
            console.log(productItem);

            orderManager1.addItemToOrder(productItem);
        });
    });
};

renderProducts();

let confirmButton = document.createElement("button");
confirmButton.id = "confirm-button";
confirmButton.innerHTML = "Confirm Order";

mainSection.appendChild(confirmButton);

confirmButton.addEventListener("click", () => {
    window.location.href = "../pages/checkout.html";
});