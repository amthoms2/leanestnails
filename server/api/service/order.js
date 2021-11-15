const Order = require("../models/Order");

const getOrderByUserId = async (userId) => {
  const orders = await Order.find({ userId: userId });

  const sumOfAllOrders = orders.reduce((sumOfOrders, currentOrder) => {
    return sumOfOrders + currentOrder;
  })
}
