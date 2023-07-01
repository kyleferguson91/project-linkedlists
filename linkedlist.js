function linkedList() {

return {
   


    append: function(value) {
       
        // we want to append to the end of the linked list, well we need to find the end, which exists when we find the first item with a next reference to null, this could be as simple as this.head.next or in other words the first item
        // although if this.head.value is null, then we add it here.
if (this.head.value == null) {
    // no value present, there is no list, add it here..
    this.head = node(value)

}

// below, the value exists (so we have an item) so check the next pointer, while it is not equal to null, keep going, once we find one equal to null, we know we have reached the end of our list and can append our node      
       else {
        let current = this.head
        while(current.next) {
            // 
            // until we reach a null value for the next pointer, keep going
            current = current.next
        }
        
        current.next = node(value)

       }
       
    },



    prepend: function(value) {
        // want to add to start of list.  what if head points to null?  then we don't need to update the next pointer..
        if (this.head.value == null) {
            // head points to an empty list, add it here, don't need to update anything else 
       
            this.head = node(value)
        }
        else if (this.head.value && !this.head.next) {

            //head points to something, but it is only one item in list so we must add it here and update the pointer..
            // we want to set this.head.next to be equal to the current value of this.head, and then overwrite this.head with our prepend value

            this.head.next = this.head
            this.head = node(value)
        }
        else {
                // otherwise the head has a value (we have item 1), the the next pointer is not a null reference, we want to shift everything down 1..

                let current = this.head
                while (current.next) {
                    // while head.next is defind, keep moving things down one, once done we will overwrite the initial value
                    
                    // set the next link in chain equal to the current link
                    current.next = current
                    // advance the loop by 1 
                    current = current.next

                }
                current.next = null
                // once we are done moving each link 'down by one' we can finially prepend our value..
                this.head = node(value)

        }
        


    },
    
    

    head: {
        value: '1',
        next: null

    }


}

}

const dog = linkedList()

dog.prepend(22)
console.log(dog.head)

function node(value) {

    return {
value: value,
next: null
    }
}
