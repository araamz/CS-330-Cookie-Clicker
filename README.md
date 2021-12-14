# CS-330-Cookie-Clicker

<p align="center">
    <img src="Cookie-Clicker.gif" width="300">
</p>

## Purpose
The purpose of the Cookie Clicker is to demonstrate use of backend frameworks, database integration, and use of CRUD mythology for a MVC based frontend application. The following frameworks and tools were used to create the applicaiton:
* Django (Backend Framework)
* Django REST Framework (Backend Framework - CRUD APIs)
* HTML (Frontend)
* CSS (Frontend)
* JavaScript (Frontend)
### Project Structure
The project structure adheres to the default Django project structure; only relevant files will be denoted.
```
Cookie-Clicker
|---frontend
    |---Controller.js
    |---Model.js
    |---View.js
    |---index.html
    |---cookie.png
|---retrieve_api
    |---urls.py
    |---models.py
    |---serializers.py
    |---views.py
|---ticketr
    |---urls.py
```
### Frontend Design
The Frontend uses the MVC pattern to respond to user events and reflect updates between the user interface and saved client data. The following are items that require communication between the `View.js` and `Model.js` via the `Controller.js`: the high score, name of the high scorer, the background of high score, the cookie, the current score, the name input, and the upload button. The `View.js`,`Model.js`, and `Controller.js` all have specfic actions being the 
- `View` saves the references to HTML elements and access to element's data,
- `Model` saves the downloaded high score and high scorer name from the server, manages the current score saved, and responsible of providing methods for downloading and uploading new high scores to the sever,
- `Controller` facilitates updating of values between the `View` and `Model` by creating handlers for `View` events and binding handlers to functions that update the `Model`.
### Backend Design 
The Backend uses Django and Django REST Framework to create a GET API and POST API. Both GET API and POST API are used to communicate the following JSON data.
```
{
    "username":"(\s)",
    "score":"(\d)"
}
```

Both APIs save a new `Player` record (once a new high score is identified) to Django's built-in MySQL database. 
- The GET API `retrieve_api/download_score/` is used to download the latest high score and high scorer name saved from the database. 
- The POST API `retrieve_api/upload_score/` is used to upload the newest high score and high scorer name once the data model has confirmed a new high score. 
## Additional Notes
1. This application was only tested on Safari and may not work correctly on non-webkit based browsers.
2. It is recommended to use a web server to test the frontend application. 
3. Originally, this application was supposed to be a itinerary application that displayed tickets from a database hence the project files are called `ticketr`.
4. This application is meant to be part of a fairly small-scale project meaning there are use cases that will result in broken functionality. This is a **rapid prototype**. 
