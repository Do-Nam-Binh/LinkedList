class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.rootNode = null;
  }

  prepend(value) {
    let temp = this.rootNode;
    this.rootNode = new Node(value);
    this.rootNode.nextNode = temp;
  }

  append(value) {
    if (this.rootNode == null) this.rootNode = new Node(value);
    else {
      let temp = this.rootNode;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value);
    }
  }

  size() {
    let temp = this.rootNode;
    let size = 0;
    while (temp != null) {
      size++;
      temp = temp.nextNode;
    }
    return size;
  }

  head() {
    return this.rootNode;
  }

  tail() {
    let temp = this.rootNode;
    if (temp == null) {
      return null;
    }
    while (temp.nextNode != null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  at(index) {
    if (index < 0) {
      return null;
    }
    let currIndex = 0;
    let temp = this.rootNode;
    while (temp != null) {
      if (currIndex == index) {
        return temp;
      }
      currIndex++;
      temp = temp.nextNode;
    }
    return null;
  }

  pop() {
    let temp = this.rootNode;
    if (temp == null || temp.nextNode == null) {
      temp = null;
      this.rootNode = null;
    }
    while (temp != null) {
      if (temp.nextNode.nextNode == null) {
        temp.nextNode = null;
      }
      temp = temp.nextNode;
    }
  }

  contains(value) {
    let temp = this.rootNode;
    while (temp != null) {
      if (temp.value == value) {
        return true;
      }
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    let temp = this.rootNode;
    let index = 0;
    while (temp != null) {
      if (temp.value == value) {
        return index;
      }
      temp = temp.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let temp = this.rootNode;
    let resultStr = "";
    while (temp != null) {
      resultStr += `(${temp.value}) -> `;
      temp = temp.nextNode;
    }
    return (resultStr += "null");
  }

  insertAt(value, index) {
    if (index == 0 || this.rootNode == null) {
      this.prepend(value);
    } else {
      let temp = this.rootNode;
      let beforeNode = null;
      let insertNode = new Node(value);
      let currIndex = 0;
      while (temp != null) {
        if (currIndex == index) {
          beforeNode.nextNode = insertNode;
          insertNode.nextNode = temp;
        }
        beforeNode = temp;
        temp = temp.nextNode;
        currIndex++;
      }
    }
  }
  removeAt(index) {
    let temp = this.rootNode;
    let placeholder = null;
    let currIndex = 0;
    if (index == list.size - 1) {
      this.pop();
      temp = null;
    }

    if (index > list.size - 1) {
      temp = null;
    }
    while (temp != null) {
      if (currIndex == index - 1) {
        placeholder = temp.nextNode.nextNode;
        temp.nextNode = placeholder;
      }
      temp = temp.nextNode;
      currIndex++;
    }
    if (temp == null) {
      return "List is empty";
    }
  }
}
