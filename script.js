// PART 1: Setting up Classes
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    
    getTotalValue() {
        return this.price * this.quantity;
    }
    
    toString() {
        return `Product ${this.name}; Price: $${this.price}, Quantity in Stock: ${this.quantity}`;
    }
    
    // PART 3: Static Methods and Properties
    static applyDiscount(products, discount) {
        products.forEach(element => {
            element.price *= (1 - discount);
        });
    }
}

// PART 2: Adding Inheritance
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    
    toString() {
        return `Product ${this.name}; Price: $${this.price}, Quantity in Stock: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// Creating two instances of this subclass
const perishable1 = new PerishableProductProperties("Milk", 24.50, 30, "2025-12-30");
const perishable2 = new PerishableProductProperties("Bananas", 4.50, 40, "2025-12-10");

// PART 4: Store Management
class StoreInventory {
    
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        this.products.push(product);
    }
    
    getInventoryValue() {
        let totalCost = 0;
        this.products.forEach(element => {
            totalCost += element.getTotalValue();
        });
        
        return totalCost;
    }
    
    findProductByName(name) {
        let result = this.products.find((element) => element.name == name);
        if (result == undefined) { result = null; }
        return result;
    }
}

// PART 5: Testing the System
const product1 = new ProductProperties("Sour Straps", 3.25, 24);
const product2 = new ProductProperties("Mechanical Pencil", 3.45, 35);
const product3 = new ProductProperties("Toy Car", 4.25, 15);
const product4 = new ProductProperties("Walkie-Talkie", 5.19, 14);
const product5 = new ProductProperties("Nerf Blaster", 5.29, 22);

let products = [product1, product2, product3, perishable1, product4, product5, perishable2];
let store = new StoreInventory(products);

// Print inventory value before adding discount
console.log("Total inventory value before 15% discount: $" + store.getInventoryValue());

ProductProperties.applyDiscount(store.products, 0.15);
console.log("Total inventory value after 15% discount: $" + store.getInventoryValue());

let result = store.findProductByName("Toy Car");
console.log("Details of search result: " + result.toString());