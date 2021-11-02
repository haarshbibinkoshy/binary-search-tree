class Node{
    constructor(value){
        this.value = value;
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
       this.root=null;
    }
    insert(value){
        let newNode=new Node(value);
        if (this.root==null) {
            this.root=newNode;
        }else{
            let current=this.root
            while (true) {
                if (value<current.value) {
                    if (current.left==null) {
                        current.left=newNode;
                        return this;
                    }else{
                        current=current.left;
                    }
                }else{
                    if (current.right==null) {
                        current.right=newNode;
                        return this;
                    }else{
                        current=current.right;
                    }
                }
            }
        }
    }
    contains(value){
        let current=this.root;
        while (current) {
            if (value<current.value) {
                current=current.left
            }else if(value>current.value){
                current=current.right
            }else{
                return true;
            }
        }
        return false;
    }
}

let tree=new BST()
tree.insert(10)
tree.insert(5)
tree.insert(2)
tree.insert(16)
tree.insert(13)
console.log(tree.contains(10));
console.log(tree.contains(20));
console.log(tree.contains(99));
