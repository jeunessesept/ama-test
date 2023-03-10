#AMA TEST
=========

### french/ 

Ceci est un serveur Node.js qui utilise Express et se connecte à une base de données MySQL pour effectuer des opérations CRUD sur des tâches. 
Le serveur importe les packages requis, y compris Express et Body-parser, et se connecte à la base de données. 
Il utilise ensuite une instance de routeur pour créer des routes API et définir des fonctions qui effectuent des opérations CRUD sur la base de données. 
Le routeur est ensuite réimporté dans le fichier principal du serveur et monté sur l'endpoint /tasks.

Pour lancer l'application en local : npm run dev


Le serveur propose quatre routes pour gérer les données de tâche, vous pouvez accéder à l'API déployé sur Heroku en utilisant ce lien de base :

### https://ama-test.herokuapp.com/tasks


## GET /tasks : 
Récupère toutes les tâches stockées dans la base de données et les renvoie sous forme de réponse JSON. 
Si une erreur se produit, un code d'état HTTP 500 est renvoyé avec un message d'erreur.

```js
(get) https://ama-test.herokuapp.com/tasks

RESPONSE
------------------------------------
[
	{
		"id": 2,
		"task": "coding",
		"completed": 0,
		"created_at": "2023-03-02T08:34:09.000Z"
	},
	{
		"id": 3,
		"task": "eating",
		"completed": 0,
		"created_at": "2023-03-02T08:35:33.000Z"
	},
	{
		"id": 4,
		"task": "walking",
		"completed": 0,
		"created_at": "2023-03-02T08:35:56.000Z"
	},
  ...
  ]
```
------------------------------------



## POST /tasks/postTask : 
Ajoute une nouvelle tâche à la base de données. La tâche à ajouter est passée dans le corps de la requête. 
Si une erreur se produit, un code d'état HTTP 500 est renvoyé avec un message d'erreur.


```js
(post) https://ama-test.herokuapp.com/tasks/postTask

REQUEST
------------------------------------
{
	"task": "coding"
}
------------------------------------

RESPONSE 
------------------------------------

{
	"info": "task succesfully added"
}
```
------------------------------------

## PUT /tasks/status/:id : 
Met à jour le statut terminé d'une tâche dans la base de données. 
La tâche à mettre à jour est identifiée par son ID passé en paramètre dans l'URL. 
Si une erreur se produit, un code d'état HTTP 500 est renvoyé avec un message d'erreur.

```js
(put) https://ama-test.herokuapp.com/tasks/status/:id

RESPONSE
------------------------------------
{
	"info": "status of the task updated"
}
```

------------------------------------

## DELETE /tasks/delete/:id : 
Supprime une tâche de la base de données. La tâche à supprimer est identifiée par son ID passé en paramètre dans l'URL. 
Si une erreur se produit, un code d'état HTTP 500 est renvoyé avec un message d'erreur.

```js
(delete) https://ama-test.herokuapp.com/tasks/delete/:id

RESPONSE
-------------------------------------
{
	"info": "task deleted succesfully"
}

```
--------------------------------------

### english/ 

This is a Node.js server that uses Express and connects to a MySQL database to perform CRUD operations on tasks. 
The server imports the required packages, including Express and Body-parser, and connects to the database. 
It then uses a router instance to create API routes and define functions that perform CRUD operations on the database. 
The router is then imported back into the main server file and mounted to the /tasks endpoint.

to run the app on local : npm run dev

The server provides four routes for handling task data, you can test the API using this Heroku link : 

https://ama-test.herokuapp.com/tasks

## GET /tasks: 
Retrieves all the tasks stored in the database and returns them as a JSON response. 
If an error occurs, a 500 HTTP status code is returned with an error message.

## POST /tasks/postTask: 
Adds a new task to the database. The task to be added is passed as the request body. 
If an error occurs, a 500 HTTP status code is returned with an error message.

## PUT /tasks/status/:id : 
Updates the completed status of a task in the database. 
The task to be updated is identified by its ID passed as a parameter in the URL. 
If an error occurs, a 500 HTTP status code is returned with an error message.

## DELETE /tasks/delete/:id : 
Deletes a task from the database. The task to be deleted is identified by its ID passed as a parameter in the URL. 
If an error occurs, a 500 HTTP status code is returned with an error message.

