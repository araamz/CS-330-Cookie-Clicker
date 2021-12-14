# CS-330-Cookie-Clicker
## Purpose
The purpose of the Cookie Clicker is to demonstrate use of backend software, database integration, and use of CRUD mythology for MVC based frontend applications. The following frameworks and tools were used to create the applicaiton:
* Django (Backend Framework)
* Django REST Framework (Backend Framework - CRUD APIs)
* HTML (Frontend)
* CSS (Frontend)
* JavaScript (Frontend)
### Project Structure
### Frontend Design
The Frontend uses the MVC pattern to respond to user events and reflect updates between the user interface and data model. Elements within the view that require interaction to the data model are the following: the cookie image, the high score text, the current score text, name form, and submit button. Data in the data model is the current score, the saved high score, and the high scorer name. 
### Backend Design 
The Backend uses Django and Django REST Framework to create a GET and POST API. The GET API `retrieve_api/download_score/` is used to download the latest high score saved from the database. The POST API `retrieve_api/upload_score/` is used to upload the newest high score once the data model has confirmed a new high score. 
## Additional Notes
- **NOTE 1:** This application was only tested on Safari and may not work correctly on non-webkit based browsers.
- **NOTE 2:** It is recommended to use a web server to test the frontend application. 
- **NOTE 3:** Originally, this application was supposed to be a itinerary application that displayed tickets from a database hence the project files are called `ticketr`.
