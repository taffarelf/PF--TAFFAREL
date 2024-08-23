class orderManager {
    constructor() {
        if (localStorage.getItem("orders") === null) {
            localStorage.setItem("orders", JSON.stringify([]));
        }
    }

    createOrder() {
        let tableId = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        let clientOrder = {
            table: tableId,
            products: [],
        };

        localStorage.setItem("tableId", tableId);
        let orders = JSON.parse(localStorage.getItem("orders"));
        let orderIndex = orders.findIndex((order) => order.table === tableId);
        if (orderIndex === -1) {
            orders.push(clientOrder);
        } else {
            orders[orderIndex] = clientOrder;
        }
        localStorage.setItem("orders", JSON.stringify(orders));
    }

    addItemToOrder(item) {
        let tableId = JSON.parse(localStorage.getItem("tableId"));
        let orders = JSON.parse(localStorage.getItem("orders"));

        let orderIndex = orders.findIndex((order) => order.table === tableId);
        let productIndex = orders[orderIndex].products.findIndex(
            (product) => product.id === item.id
        );
        if (productIndex === -1) {
            orders[orderIndex].products.push(item);
        } else {
            orders[orderIndex].products[productIndex].quantity += item.quantity;
        }

        localStorage.setItem("orders", JSON.stringify(orders));
    }

    getCurrentOrder() {
        let tableId = JSON.parse(localStorage.getItem("tableId"));
        let orders = JSON.parse(localStorage.getItem("orders"));
        return orders.find((order) => order.table === tableId);
    }
}

const orderManager1 = new orderManager();