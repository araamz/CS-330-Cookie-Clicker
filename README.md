# CS-330-Cookie-Clicker
## Purpose
The purpose of the Cookie Clicker is to demonstrate use of backend software, database integration, and use of CRUD mythology for MVC based frontend applications. Django and the Django REST Framework were used to create `retrieve_api` and integrate with the built-in MySQL database Django provides. 
## Frontend Design
The Frontend uses the MVC pattern to respond to user events and reflect updates between the user interface and data model. Elements within the view that require interaction to the data model are the following: the cookie image, the high score text, the current score text, name form, and submit button. Data in the data model is the current score, the saved high score, and the high scorer name. 
## Backend Design 
The Backend uses Django and Django REST Framework to create a GET and POST API. The GET API `retrieve_api/download_score/` is used to download the latest high score saved from the database. The POST API `retrieve_api/upload_score/` is used to upload the newest high score once the data model has confirmed a new high score. 
