import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order-item";

let customer = new Customer("123", "Lucas Alves");
const address = new Address("Av. Paulista", 1, "01310-100", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "p1", 2);
const item2 = new OrderItem("2", "Item 2", 15, "p2", 3);

const order = new Order("1", "123", [item1, item2]);