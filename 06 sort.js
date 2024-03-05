// limits the number of documets in the output to two 
db.inventory.find().limit(2);

// fitst document ko skip krke dega 
db.inventory.find().skip(1);


// second document ko skip krke dega 
db.inventory.find().skip(2); 

// increasing order of quantity
db.inventory.find().sort({qty:1})

// decreasing order of quantity
db.inventory.find().sort({qty:-1})

// achiving pagination using mongodb find and limit 

