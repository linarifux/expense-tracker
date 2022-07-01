const mongoose = require('mongoose')

const conn = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('DB Connected...');
    }catch(e){
        console.log('Error while connecting to DB');
    }
}

module.exports = conn