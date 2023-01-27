import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order-item";

let customer = new Customer("123", "Lucas Alves");
const address = new Address("Av. Paulista", 1, "01310-100", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "p1", 2);
const item2 = new OrderItem("2", "Item 2", 15, "p2", 3);

const order = new Order("1", "123", [item1, item2]);