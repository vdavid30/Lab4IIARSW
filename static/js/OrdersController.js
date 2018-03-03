

var newOrder = {
    1: {
        "orderAmountsMap": {
            "HOTDOG": 1,
            "BEER": 5
        },
        "tableNumber": 1
    }
}
var newOrder2 = {
    2: {
        "orderAmountsMap": {
            "HAMBURGUER": 1
        },
        "tableNumber": 2
    }
}


var nOrder = [newOrder, newOrder2] 

var prices = {
    "HOTDOG": 3000,
    "HAMBURGER": 12300,
    "BEER": 2500,
    "PIZZA": 10000,
    "COKE": 1300
}
var initialOrder = '{ "order_id": 1, "table_id": 1, "products": [{ "product": "PIZZA", "quantity": 3,"price": "$15.000"}, {"product": "HAMBURGER","quantity": 1,"price": "$12.300"}]}';
var initialOrdObj = JSON.parse(initialOrder);


var OrdersControllerModule = (function () {

    var showOrdersByTable = function () {
        var callback = {

            onSuccess: function (ordersList) {
                var body = document.getElementsByTagName("main")[0];
                var tabla = document.createElement("table");
                var tblBody = document.createElement("tbody");
                for (var i = 0; i <= ordersList["products"].length; i++) {
                    var hilera = document.createElement("tr");
                    for (var j = 0; j < 4; j++) {
                        var celda = document.createElement("td");
                        if (i == 0) {
                            if (j == 0) {
                                var textoCelda = document.createTextNode("Product");
                            } else if (j == 1) {
                                var textoCelda = document.createTextNode("Quantity");
                            } else if (j == 2) {
                                var textoCelda = document.createTextNode("Price");
                            } else {
                                var textoCelda = document.createTextNode("Order Number");
                            }
                        } else {
                            if (j == 0) {
                                var textoCelda = document.createTextNode(initialOrdObj["products"][i - 1].product);
                            } else if (j == 1) {
                                var textoCelda = document.createTextNode(initialOrdObj["products"][i - 1].quantity);
                            } else if (j == 2) {
                                var textoCelda = document.createTextNode(initialOrdObj["products"][i - 1].price);
                            } else {
                                var textoCelda = document.createTextNode(initialOrdObj["order_id"]);
                            }
                        }
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                    }

                    tblBody.appendChild(hilera);
                }
                tabla.appendChild(tblBody);
                body.appendChild(tabla);
                tabla.setAttribute("border", "2");
                tabla.setAttribute("id", initialOrdObj["order_id"]);
                var espacio = document.createElement("br");
                body.appendChild(espacio);

            },
            onFailed: function (exception) {
                alert("No se pudo consultar las ordenes");
            }
        }
        RestControllerModule.getOrders(callback);
    };

  var updateOrder = function () {
    // todo implement
  };

  var deleteOrderItem = function (itemName) {
    // todo implement
  };

  var addItemToOrder = function (orderId, item) {
    // todo implement
  };

  return {
    showOrdersByTable: showOrdersByTable,
    updateOrder: updateOrder,
    deleteOrderItem: deleteOrderItem,
    addItemToOrder: addItemToOrder
  };

})();
var RestControllerModule = (function () {

    var getOrders = function (callback) {
        return {
            getOrders: function () {
                axios.get('/orders')
                    .then(function (response) {
                        callback.onSuccess(response);

                    }).catch(function (error) {
                        console.log(error);
                        message();
                    });
            }
        };

        var updateOrder = function (order, callback) {
            // todo implement
        };

        var deleteOrder = function (orderId, callback) {
            // todo implement
        };

        var createOrder = function (order, callback) {
            // todo implement
        };

        return {
            getOrders: getOrders,
            updateOrder: updateOrder,
            deleteOrder: deleteOrder,
            createOrder: createOrder
        };
    };
})();
function message() {
    alert("There is a problem with our servers. We apologize for the inconvince, please try again later");
}
