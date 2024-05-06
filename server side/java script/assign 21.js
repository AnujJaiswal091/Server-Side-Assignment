// JavaScript program to check whether a single linked list is empty or not.
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to check if the linked list is empty
    isEmpty() {
        return this.head === null;
    }
}

// Example usage:
let list = new LinkedList();
console.log("Is the linked list empty?", list.isEmpty()); // Should print true
