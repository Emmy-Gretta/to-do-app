const mongoose = require('mongoose')   

let todoschema = new mongoose.Schema({
   title: {
      type: 'string',
      required: true
   }
})

const Tasks = new mongoose.model('Task', todoschema);
module.exports = Tasks