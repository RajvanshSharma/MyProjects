const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const fruits = mongoose.model('fruit', { name: String });

const fruit = new fruits({ name: 'apple' });

fruits.find(function(err, fruits){
if(err){
    console.log(err);
}else{
    console.log(fruits[0].name);
}
});

