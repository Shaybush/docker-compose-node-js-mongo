const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://db:27017/my-collection');
  console.log("mongo connect to my-collection");
}