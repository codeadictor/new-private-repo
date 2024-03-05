db.inventory.find() // used for the finding alll data or fetching data 

db.inventory.find({qty:15}); // kewal ek fetch karke dega fo ai qty 15

db.inventory.find({qty:{$gt:15}}); // greater than 15 wali retun kr dega 
/*
id: ObjectId('658847c775c5130feec228c1'),
    item: 'stamps',
    qty: 30
*/
db.inventory.find({qty: { $in:[30, "red"]}});  //  qty k ander 30 ho ya red dono case me hi retur kr dega 

//AND
db.inventory.find({item:"stamps", qty:{$lt:35}})  // ye dono true hongi tabi return karega 

//OR
db.inventory.findOne({$or:[{item:"stamps"}, {qty:{$lt:35}}]})

// yadi ham chahte hai ki directly document pull ho jate to use karenge findOne ka and agr javascript me use karenge to document array aayega find ka use krenge to 
 