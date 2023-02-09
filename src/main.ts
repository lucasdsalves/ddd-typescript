import Address from "./domain/customer/value-object/address";
import Customer from "./domain/customer/entity/customer";
import OrderItem from "./domain/checkout/entity/order-item";
import Order from "./domain/checkout/entity/order";

let customer = new Customer("123", "Lucas Alves");
const address = new Address("Av. Paulista", 1, "01310-100", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "p1", 2);
const item2 = new OrderItem("2", "Item 2", 15, "p2", 3);

const order = new Order("1", "123", [item1, item2]);