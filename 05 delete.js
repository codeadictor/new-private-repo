// all the data will be delted 
db.inventory.deleteMany({})

//insert now again 
db.products.insertMany( [
    { item: "card", qty: 15 },
    { item: "envelope", qty: 20 },
    { item: "stamps" , qty: 30 }
 ] );

 //delete only one 
 db.inventory.deleteMany({item:"card"})

 // delete a single document or all documents that match a filter.
 db.inventory.remove() 
 