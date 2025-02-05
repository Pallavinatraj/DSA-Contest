// cant add insert before element because it is single direction only in SLL 

class Node {
    constructor(element) {
        this.data = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    addElement(element) {
        var node = new Node(element);
        var current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    insertAfterParticularElement(element, x) {
        var temp = new Node(element);
        var current = this.head;
        while (current != null) {
            if (current.data == x) {
                var temp = new Node(element);
                temp.next = current.next;
                current.next = temp;
            }
            current = current.next;
        }

    }

    printList() {
        var current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

var l1 = new LinkedList();
l1.addElement(10);
l1.addElement(20);
l1.addElement(30);
l1.addElement(40);
l1.addElement(50);
l1.addElement(60);
l1.addElement(70);

l1.insertAfterParticularElement(5, 30);

l1.printList();

