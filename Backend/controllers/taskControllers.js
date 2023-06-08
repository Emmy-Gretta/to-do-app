const Tasks = require('../Models/task.model')

//Add task
const addTask = async (req, res) => {
   if(!req.body.title && !req.body.description) {
      res.status(400).send({ message: "The task is empty." });
   }
   const task = new Tasks({
      title: req.body.title,
      description: req.body.description
   })

   await task.save().then(data => {
      res.status(201).send({message: "Task added successfully."})
   }).catch(err => {
      res.status(500).send({message: err.message});
   });
}

//All tasks
const allTasks = async (req, res) => {
   try{
      const tasks = awaitTasks.find()
      res.status(200).json(tasks);
   }catch(err){
      res.status(500).json({message: err.message});
   }
}

//one task
const oneTask = async (res, req) => {
   Tasks.findById(req.params.id)
   .then((task) => res.json(task))
   .catch((err) => res.json(err.message));
}

//update task
const updateTask = async (req, res) => {
   if(!req.body){
      return res.json({
         message: 'Do not update empty task!'
      })
   }
   const id = req.params.id;
   await Tasks.findOneAndUpdate(id, req.body).then(data => {
      if(!data){
         return res.json({
            message: `Task width${id} was not found`
         })
      }else{
         return res.json({
            message: "Task updated successsfully"
         })
      }
   })
}