/* Binary Search Tree */

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(...data) {
        for (let item of data) {
            this.addOne(item);
        }
    }

    addOne(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
        } else {
            const searchTree = node => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                    } else if (node.left !== null) {
                         searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else if (node.right !== null) {
                         searchTree(node.right);
                    }
                }
            }
            searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data <current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = (node, data)=>{
           if (node === null) {
               return null
           }
           if (data === node.data) {
                // node has no children
                if (node.left === null && node.right === null) {
                    return null;
                }

                // node has no left child
                if (node.left === null) {
                    return node.right;
                }

                // node has no right child
                if (node.right === null) {
                    return node.left;
                }

                // node has two children
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
           } else if (data < node.data) {
               node.left = removeNode(node.left, data);
               return node;
           } else {
               node.right = removeNode(node.right, data);
               return node;
           }
        }
        this.root = removeNode(this.root, data);
    }

    isBanlanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    findMinHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    inOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = [];
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    //从上到下,由左到右
    preOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = [];
            function traverseInOrder(node) {
                result.push(node.data);
                node.left && traverseInOrder(node.left);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    //从下到上,由左到右
    postOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = [];
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                node.right && traverseInOrder(node.right);
                result.push(node.data);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    levelOrder() {
        let result = [];
        let Q = [];
        if (this.root !== null) {
            Q.push(this.root);
            while(Q.length > 0 ) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left !== null) {
                    Q.push(node.left);
                }
                if (node.right !== null) {
                    Q.push(node.right);
                }
            }
            return result;
        } else {
            return null;
        }
    }
}

const bst = new BST();
bst.add(4,2,6,1,3,5,7,8);

console.log(bst.isPresent(4))  //true
bst.remove(4);
console.log(bst.isPresent(4));  //false

console.log(bst.findMin()); //1
console.log(bst.findMax()); //8

console.log(bst.findMaxHeight()); // 2
console.log(bst.findMinHeight()); // 1

console.log(bst.inOrder()) // [ 1, 2, 3, 5, 6, 7, 8 ]
console.log(bst.preOrder())  // [ 5, 2, 1, 3, 6, 7, 8 ]
console.log(bst.postOrder())  //[ 1, 3, 2, 8, 7, 6, 5 ]
console.log(bst.levelOrder());  // [ 5, 2, 6, 1, 3, 7, 8 ]
