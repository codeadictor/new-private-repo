db.inventory.insertOne(
    {item:"canvas",qty:100, tags:["cotton"], size:{h:32,w:44}}
);

// insert many  - run this comand in mongodb shell to get startd 

db.inventory.insertMany( [
    { _id: 10, item: "large box", qty: 20 },
    { _id: 11, item: "small box", qty: 55 },
    { _id: 11, item: "medium box", qty: 30 },
    { _id: 12, item: "envelope", qty: 100},
    { _id: 13, item: "stamps", qty: 125 },
    { _id: 13, item: "tape", qty: 20},
    { _id: 14, item: "bubble wrap", qty: 30}
 ]);
 