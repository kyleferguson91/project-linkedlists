function linkedList() {

return {
   


    append: function(value) {
       
        // we want to append to the end of the linked list, well we need to find the end, which exists when we find the first item with a next reference to null, this could be as simple as this.head.next or in other words the first item
        // although if this.head.value is null, then we add it here.
if (this.list.head.value == null) {
    // no value present, there is no list, add it here..
    this.list.head = node(value)

}

// below, the value exists (so we have an item) so check the next pointer, while it is not equal to null, keep going, once we find one equal to null, we know we have reached the end of our list and can append our node      
       else {
        let current = this.list.head
        while(current.next) {
            // 
            // until we reach a null value for the next pointer, keep going
            current = current.next
        }
        
        current.next = node(value)

       }
       
    },



    prepend: function(value) {
        // in the event we have no value in first item.. 
        if (!this.list.head.value) {
            // there is no item in spot one.. add the node
            this.list.head = node('added')
        }
        // we only want to add it to the front of the list, 
        // we store the current item in old reference, 
        // and we set the 
        let oldref = this.list.head
        this.list.head = node(value)
        this.list.head.next = oldref

    },
    
    size: function(node = this.list.head, count = 0) {
        // assuming that a 'node' contains both a data and next field
        if (node.next == null) {
            if (node.value) {   return 1}
            else {
                return 0
            }
        }
        
       return    1 +  this.size(node.next)
    },

    head: function() {
        return this.list.head   
    },
    
    tail: function(node = this.list.head) {

        // start with head of list and recurse until we reach tail or in otherwords we reach a next pointer of null

        if (node.next == null) {return node}
       return this.tail(node.next)

    },
    
    pop: function(node = this.list.head, prevnode = this.list.head) {
// we need to traverse through the list until we reach the tail node, and then set that node to null

if (node.next == null) {
    
    // this exists so if we have a list with only one item, then node equals previous node which are both the same at the start.. 
    // so the head of the list is now empt
  if (node == prevnode) {
this.list.head = null
  } 
  else {
    prevnode.next = null
  }
   return
}
prevnode = node
node = node.next
return this.pop(node, prevnode)

    },

    contains: function(value, node = this.list.head) {
        // return true if value is in list otherwise return false
        // go through every value in the list, if we have a match return true
if (node.next == null && node.value !== value) {
    return false
}
        if (node.value === value) {
            return true
        }

        return this.contains(value, node.next)
        
        

    },

    find: function(value, node = this.list.head, count = 0) {

        if (node.next == null && node.value !== value) {
            return null
        }
        if (node.value === value) {
            return count
        }
        count++
        return this.find(value, node.next, count)

    },

        toString: function(node = this.list.head) {
            // this function is to console log the list
            // lets do this recursively.
            if (node.next == null) {
                if (node.value) {return `(${node.value}) -> null`}
                else {return 'null'}
            }
            return `(${node.value})` + ` -> ` + this.toString(node.next)

        },
        
        insertAt: function(value, index, node = this.list.head, prevnode = this.list.head, count = 0) {
            // inserts the given value at the specified index..
            // go through one by one, counting the index each time until we have a match.. 
            // once we have a match we are to set the previous nodes next value to the insert value, and the current nodes next value to the rest of the list..
            if (index == count) {
                if (index == 0 && count == 0) {
                    this.prepend(value)
                    return
                }
               // set the current nodes next value to the current node+
                let current = node
           
                let stored = createnode(value)
                
          
                prevnode.next = stored
                prevnode.next.next = current
      
               return
            }
            
            if (node.next == null) {
                // reached the end of the list..
               return
            }
     

            // if we reach the end of the list without finding the index, we return
            // otherwise we can check if we are at the index..
            
           
            prevnode = node
            count++ 
            return this.insertAt(value,index, node.next, prevnode,count)

            
        },

    list: { head: {
        
      
    }}


}

}

const dog = linkedList()

//dog.append(22)
//console.log(dog.list.head)
//console.log(dog.tail(), 'tailfn')
//dog.append(1)
dog.append(122)
dog.append(3)

//dog.append(17)
//console.log(dog.toString())
//dog.pop()
 // console.log(  dog.find(122))
    console.log(dog.list)
    console.log(dog.insertAt(2,1))
    
    console.log(dog.list)

function node(value) {

    return {
value: value,
next: this.next || null
    }
}


function createnode(value) {

    return {
value: value,
next: this.next || null
    }
}
