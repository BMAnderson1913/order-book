const reconcileOrder = (incomingOrder, existingBook) => {
  let newBook = []

  while (incomingOrder.length && existingBook.length) {
    if incomingOrder[0] <= existingBook[0] {
      newBook.push(incomingOrder.shift())
    } else {
      newBook.push(existingBook.shift())
    }
  }

  //I want to add something to my loop to check for/remove dupes
  return newBook.concat(incomingOrder).concat(existingBook)
}

//Treat the existingBook as an array
//Create a function to search through the array for incomingOrder
//if incomingOrder is not there, add it to existingBook