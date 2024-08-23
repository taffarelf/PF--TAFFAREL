let newClient = document.getElementById("newClient");

newClient.addEventListener("click", () => {
    orderManager1.createOrder();
    window.location.href = "../pages/products.html";
});