
import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Load every order from the database.
export async function loadOrders() {
  return await findAllOrders();
}

 
// 2. Return only paid orders from Alexandria.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "paid"
  );
}

 
// 3. Calculate total revenue across all orders.
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

 
// 4. Describe an order, handling missing IDs without throwing an error.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

 
// 5. Convert orders to JSON containing only item and price.
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      item: order.item,
      price: order.price,
    }))
  );
}



