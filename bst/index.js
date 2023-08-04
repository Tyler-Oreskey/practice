class Node {
    constructor(val) {
        this.right = null;
        this.left = null;
        this.parent = null;
        this.height = 0;
        this.val = val;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(val) {
        const newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            this.size++;
            return newNode;
        }

        let currNode = this.root;
        let parent = null;

        // find parent node
        while (currNode) {
            if (val > currNode.val) {
                parent = currNode;
                currNode = currNode.right;
            }
            else if (val < currNode.val) {
                parent = currNode;
                currNode = currNode.left;
            }
            else {
                return null;
            }
        }

        // add new node to parent as a L/R child
        if (val > parent.val) {
            parent.right = newNode;
        }
        else {
            parent.left = newNode;
        }

        newNode.parent = parent;

        // update node height
        this.#balance();
        this.size++;
    }

    #balance() {
        // use bfs to traverse tree
        const queue = [];
        queue.push(this.root);

        while (queue.length) {
            const temp = queue.shift();
            this.#updateHeight(temp);

            switch (this.#balanceFactor(temp)) {
                case -2:
                    if (this.#balanceFactor(current.left) <= 0) {
                        // LL rotation
                    }
                    else {
                        // LR rotationm
                    }
                    break;
                case 2:
                    if (this.#balanceFactor(current.right) >= 0) {
                        // RR rotation
                    }
                    else {
                        // RL rotationm
                    }
                    break;
            }

            if (temp.left) {
                queue.push(temp.left)
            }

            if (temp.right) {
                queue.push(temp.right)
            }
        }

    }

    #updateHeight(node) {
        node.height = !node.parent ? 0 : 1 + node.parent.height;
    }

    #balanceFactor(node) {
        let total;

        if (node.right === null) {
            total = -node.height;
        }
        else if (node.left === null) {
            total = node.height;
        }
        else {
            total = node.right.height - node.left.height;
        }

        return total;
    }

    dfsPreorder() {
        const stack = [this.root];
        const traversed = [];

        while (stack.length) {
            let currNode = stack.pop();
            traversed.push(currNode.val);

            if (currNode.right) {
                stack.push(currNode.right);
            }

            if (currNode.left) {
                stack.push(currNode.left);
            }
        }

        return traversed;
    }
}

const tree = new BST();

tree.add(30);
tree.add(20);
tree.add(50);
tree.add(15);
tree.add(25);
tree.add(45);
tree.add(75);

// console.log(tree.root.right.right.right.height)