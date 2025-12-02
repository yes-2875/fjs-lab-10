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
