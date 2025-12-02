// PART 1: Setting up Classes
class ProductProperties {
    
    // Basic constructor function, sets the product name, unit price, and quantity in stock
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    
    // Prints the price * quantity of this product
    getTotalValue() {
        return this.price * this.quantity;
    }
    
    // Returns a custom String representation of the product with its details.
    toString() {
        return `Product ${this.name}; Price: $${this.price}, Quantity in Stock: ${this.quantity}`;
    }
    
    // PART 3: Static Methods and Properties
    // Meant to be used on an array of products outside of this class
    // Loops through each product in products and applies the discount using a callback function.
    static applyDiscount(products, discount) {
        products.forEach(element => {
            element.price *= (1 - discount);
        });
    }
}

// PART 2: Adding Inheritance
class PerishableProductProperties extends ProductProperties {
    
    // Create a constructor that calls the superclass constructor for the first 3 arguments, then sets the 4th.
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    
    // Replace toString of the superclass with something that also displays the expiry date
    toString() {
        return `Product ${this.name}; Price: $${this.price}, Quantity in Stock: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// Creating two instances of this subclass
const perishable1 = new PerishableProductProperties("Milk", 24.50, 30, "2025-12-30");
const perishable2 = new PerishableProductProperties("Bananas", 4.50, 40, "2025-12-10");

// PART 4: Store Management
class StoreInventory {
    
    // Constructor function, takes in an array of ProductProperties or PerishableProductProperties instances
    constructor(products) {
        this.products = products;
    }
    
    // Adds a given ProductProperties or PerishableProductProperties instance to the store inventory
    addProduct(product) {
        this.products.push(product);
    }
    
    // Loops through every product in the products array and adds up their total values.
    getInventoryValue() {
        let totalCost = 0;
        this.products.forEach(element => {
            totalCost += element.getTotalValue();
        });
        
        return totalCost;
    }
    
    // Uses Array.prototype.find() with a callback function to find the first product that matches the given name.
    findProductByName(name) {
        let result = this.products.find((element) => element.name == name);
        if (result == undefined) { result = null; }
        return result;
    }
}

// PART 5: Testing the System
// Create 5 ProductProperties instances
const product1 = new ProductProperties("Sour Straps", 3.25, 24);
const product2 = new ProductProperties("Mechanical Pencil", 3.45, 35);
const product3 = new ProductProperties("Toy Car", 4.25, 15);
const product4 = new ProductProperties("Walkie-Talkie", 5.19, 14);
const product5 = new ProductProperties("Nerf Blaster", 5.29, 22);

let products = [product1, product2, product3, perishable1, product4, product5, perishable2];
let store = new StoreInventory(products);

// Print inventory value before adding discount
console.log("Total inventory value before 15% discount: $" + store.getInventoryValue());

// Print inventory value after the discount
ProductProperties.applyDiscount(store.products, 0.15);
console.log("Total inventory value after 15% discount: $" + store.getInventoryValue());

// Search for a specific product in the store and print its details.
let result = store.findProductByName("Toy Car");
console.log("Details of search result: " + result.toString());