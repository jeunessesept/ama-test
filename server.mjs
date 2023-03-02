import express from "express"            ///=> ici j'importe les packages dont j'ai besoin et que j'ai installé (npm install)
import bodyParser from "body-parser";


import { dbConnect } from "./config/dbconnect.mjs";
// import { addTask, getTasks, taskDone, deleteTask } from "./controllers/taskControllers.mjs";
import taskController from './controllers/taskControllers.mjs'

// je définie 'app' en tant qu'instance d'application express
const app = express()  

//ici j'assigne des middlewares
app.use(express.json());
app.use(bodyParser.json());


app.use('/tasks', taskController)  //=> utilisation de express.router(), voir ./controllers/taskControllers pour plus de détails

// j'assigne un port au serveur pour créer une connexion
const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
    console.log(`app connected to port ${ PORT }`)
})
