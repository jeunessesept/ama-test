import { dbConnect } from "../config/dbconnect.mjs";  //import de la function qui permet la connexion à MySQL pour la réutiliser dans les fonctions de query
import express from "express";

const router = express.Router();  // router définie en tant qu'instance pour créer des routes API

 // sélectionner et afficher toutes les tâches stockées dans la database 
router.get('/', (req, res) => { //-> router.get() - route qui permet de récupérer des données depuis l'API
    const query = `SELECT * FROM tasks`;  // sélectionne tous les éléments de la table tasks
    dbConnect.query(query, (err, results) => {
        if (err) {
            console.error('error when trying to get tasks: ', err);
            return res.status(500).send('error getting tasks');   // code d'erreur HTTP 500 si la query échoue
        } else {
            console.log(results)
            return res.status(200).json(results);  // code HTTP 200 si la query ne rencontre pas d'erreur
        }
    });
})


//fonction qui permet à l'utilisateur d'ajouter une tâche
router.post('/postTask', (req, res) => { // route qui permet de poster des données dans l'API
    const { task } = req.body  //=> récupérer la tâche dans le corps de la requête
    const query = `INSERT INTO tasks (task) VALUES (?)`   //la query va ajouter ce qui est entré par l'utilisateur en tant que 'task' dans la table tasks

    dbConnect.query(query, [task], (err, results)=> {         // query est passé en callback, ainsi que [task] qui correspond la VALUE (?)
        if (err){                                             //je crée une connexion avec la database MySQL pour faire parvenir la query définie plus haut
            console.error('error when posting task', err)     // si erreur lors de la requête la réponse retourne un message d'erreur (HTTP 500)
            return res.status(500).send('internal server error')
        }else {                                                 //si pas d'erreur, la requête est menée à bien
            console.log(results)
            res.status(200).json({info: "task succesfully added"})       // la réponse retourne un statut indiquant le status de la requête (HTTP 200)
        }
    })
})


// update de la colonne "completed" de la table "tasks" qui va marquer une tâche comme 'done' ou pas
router.put("/status/:id", (req, res) => { // route qui permet d'updater des données de l'API
    const task_id = req.params.id      //=> je vais récupérer le id d'une tâche spécifique en tant que paramètre de l'url

    const query = `UPDATE tasks SET completed=1 WHERE id= (?)`  //=> dans cette query j'update la colonne 'completed' dont la valeur est un booleen
                                                                // 0 veut dire que la tâche n'est pas encore complétée, 1 signifie que la tâche est complétée

    dbConnect.query(query,[task_id], (err, results) => {        //je crée une connexion avec la database MySQL pour faire parvenir la query définie plus haut
        if (err){
            console.error('error when trying to update the status of the task', err); // si erreur lors de la requête la réponse retourne un message d'erreur
            return res.status(500).send('error when updating the status of the task')
        } else {
            console.log(results)       //si pas d'erreur, la requête est menée à bien
            return res.status(200).json({info: "status of the task updated"}) // la réponse retourne un statut indiquant le status de la requête 
        }
    })
})

 // suppression d'une tâche
router.delete('/delete/:id',(req, res) => { // route qui permet de supprimer des données dans l'API
    const task_id = req.params.id  //=> je vais récupérer le id d'une tâche spécifique en tant que paramètre de l'url
    const query = `DELETE FROM tasks WHERE id = (?)` // la query demande à la database de supprimer dans la table la ligne ayant le id spécifié

    dbConnect.query(query, [task_id], (err, results) => {
        if(err){
            console.error('error when trying to delete a task', err);
            return res.status(500).send('error when trying to delete the task')
        }else{
            console.log(results)
            return res.status(200).json({info: "task deleted succesfully"})
        }
    })
})

export default router