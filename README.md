## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Setup](#setup)


## General info
It is a single-page application built on React library using the  FLux principle and divided into 3 layers:
BLL using Redux, DAL utilizing Axios for API requests, and UIL using React. The app contains both class and functional components. The app is optimized with React.Lazy, React.memo, thunk Middleware, hooks, HOC. User authentication and authorization
Implemented using cookies. The forms were created using the Redux Form library. Unit tests had
been conducted to identify bugs and to improve UI.

* The app is currently hosted at:    **https://ihor-borzov.github.io/social_media_app/**


## Technologies
Project is created with:
* react: ^17.0.2
* react-dom: ^17.0.2
* react-router-dom: ^6.0.2
* react-redux: ^7.2.6
* redux-thunk: ^2.4.1
* redux-form: ^8.3.8
* axios: ^0.25.0
* reselect:  ^4.1.5
* react-test-renderer:  ^17.0.2
* typescript: ^4.8.4

    
    
## Features:
* Login Page:
- Log in to the social media app as a guest
- If you try to type in a wrong @mail or password more than 5 times you will get a captcha, which you will have to submit in order to continue.

* Profile Page
- you will see  your-(test) profile page 
- At the profile page, you can change your profile photo, edit your status, and edit "about me" info which includes social media, is looking for a job checkbox, and more...
- you can add a post, but the data about the post keeps locally in the Redux  

* Nav Bar
- At the nav bar you can see the navigation menu and the list of your best friends, the first friend is always Ihor Borzov - me.
- You can click on the friend's icon to go to their page.

* Users
- This page is a list of all users, you can subscribe to them or unsubscribe. This action is performed at the back - end.  


## Setup
To run this project, install it locally using npm:
$ npm install
$ npm start
