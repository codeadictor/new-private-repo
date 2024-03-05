//db.collection.updateOne()

db.inventory.updateOne(
    {
        item:"paper",
        
    }
)
// db.collection.updateMany()

db.inventory.updateMany(
    {
        item:"paper",
        $set:{qty:333}
        
    }
)
// db.collection.replaceOne() --poore document ko hi replace kr dega 
db.inventory.replaceOne(
    { item: "cafe", qty: "a" },
    { item: "calfÉ", status: "Replaced" }
   
 );