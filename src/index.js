import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseAppComponent from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <BaseAppComponent/>,
    document.getElementById('root')
  );


reportWebVitals();





/*############# EVERY LESSON SUMMARY:
Lesson#96
Uploading the picture to the App
 - First thing is write the logic which will check if you are the owner of the page ( if you are the owner  => show the button to 
change the profile picture). To upload the file there is a special <input type={"file"}><input>.  then write the pipeline: (thunk => 
  api => action creator => case in reducer => callback to the component to call thunk ) 

Lesson#92
Component testing:
- I had to move Provider and React.StrictMode to the BaseAppComponent in case to be able to test components,
 because I need ReactDOM.render() function to expect only one component, not the whole bunch of components. So I have to create that start 
 component which will have Provider with the store and Browser Router... and everything what needs to run the app. And now I am able to pass
 just one start component BaseAppComponent when I will need to test the whale app.

  ReactDOM.render(
    <React.StrictMode>
<Provider store={store}>       
<App />
</Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


Lesson#83
Implemented library reselect
Selector is a function what expects whole global state, takes from it some piece  and returns that particular piece of state
We create primitive selector which does nothing but extracts needed us piece of state from global state. We call those selectors
 - dependences - because the state they extract will be determining if we will call main reselect.
#2 create main reselect function with the help of createSelector() method what returns selector. That method expects dependences-
(primitive selectors) and callback with main selecting logic. the callback gets in his parameters the return from each dependence selector (which is piece of state), and calculation happens on that piece of state.


LESSON#80
issue: when you press on the button messages and then press reload : you load the header then header make auth server request, 
you load the messages, but the server request did not get back yet (it is asynchronous), so messages redirect you to the Login page - you
 get to the login page but then your request gets back and isAuth becams true and Login page redirects you to the Profile page. That glitch 
 happens because of the delay of the data we receive. we rerendering pages with information, which is not full (because when we press reload
  we make auth request, but auth request takes time to be executed, because it is server request) that is why first browser tries to render dialogs
  then he sees that user is not authorized, because request is still going - he sends us to the login, then we receive response from server
   isAuth becomes true and login page moves us to the profile.
To fix that - we have to prevent anything from rendering until we doing authentication
for that the component app will be responsible to wait and show us preloader until authentication is going - for that we have to use promises and
method then and also set a variable "marker" which will get true when authentication is finished  with no matter user authorized or not
(for that we have to change the marker from true to false only when all the async authentication requests finished and we received response.
  just execute the function which changes the "marker" last in the method .then)

 - change functional app.js to class component
 - remove authorization from the HeaderContainer
 - create app-reducer.js
 - invoke authenticate function from auth-reducer in the thunk of app-reducer (initializeApp) : ror that we have to return our promise (in the authenticate
   function it is the server request - so just return the whole server request)
 - let that request to execute and then in the method .then call another function which will change your marker  in app-reducer to true .  
 !!! remember each method then   returns a promise
 - in the app component in componentDidMount invoke initializeApp() and in the render method set if statement which will check the marker and
 will show the preloader in marker is false

 


LESSON#79 how to show error from the server response
- whenever you send server request to login - you  may succeed or fail depends of the data (login, password) you specified.
So if you succeed the server will return resultCode === 0 but if you failed the resultCode !=0
- the response from server you receive in your thunk -  if(resultCode === 0){...}  else {you code to handle the failure}
- if your component made from redux-form => you may handle the failure and show user that something is wrong by method stopSubmit()
- aas the arguments you have to specify what is the name of your redux-form (you can get this name from  const LoginReduxForm = reduxForm({form:'login'})(LoginForm))
and the second parameter is the Field name in your redux-form and what message you want to send to that field (the field is a tag or your upgraded
  component) will receive this message in props.meta.error. 
  - instead of sending this info to a field you can sand it to the wholl form as a common error, for that just specify at the field name (_error)
- dispatch(stopSubmit("login", {_error:message}))

Lesson#77  Redux-Form validators:
- to add a validator to redux-from first you have to  create a function Validator, this function receives input and returns undefined if everything
is ok or returns a string with an error message if the value is invalid {you specify it with logic}.
- then you can import your validators in to the file with your form and pass it as a parameter to attribute "validate={[validator,]}" to
to corresponding field you want to validate. your form will automatically deny submitting if the input is invalid.
- to be able to do any UI changes with the errors - you have to pass the validators not to regular attribute "component='input'" but you
have to create your custom component and pass everything to it <Field component={MyInput} name="postText" placeholder:"message"/>
-  MyInput will receive props which will include : input, meta, ...otherProps.   input - has validators and other functions inside itself,
meta contains all the information about this field: touched, error ... and otherProps contains placeholder and other not very important props.
 - all that information you have to pass to the actual tag you will be render, but you can sat css for that tag depending on the changes in 
 your field, what validators will return. remember each time you change something redux-form rerender component.


LESSON#75   REDUX-FORM
- npm install redux-form
- create login page with form in a separate component
- import redux form reducer in to our store  (import {reducer as formReducer} from 'redux-form')
         let reducers = combineReducers({reducer1:..., form:formReducer})
- wrap LoginForm component into Redux-form HOC
- all the input tags change to <field></field> add to each of them attribute "component="input"" what will
     specify what kind of tag you want to render, also add to each of them attribute "name"
- set eventListener <form onSubmit={props.handleSubmit}>...</form>, and create a method onSubmit=(whichReceivesData)=>{},
 in a component what renders React-form HOC  and pass this method through props to React-form HOC  


LESSON#73
IMPORTANT: response from put request on profile/status does not return updated status - it just set it at the server but does not return it to you,
in response. you have to set your global state from the argument (status) you receive to your thunk !!!

- create pipeline to getStatus.; create pipeline to setStatus.
the span in Profile status has to get value fro the global state,
the input has to get the value from local state. when input onBlur he has to change the global state and change the status on the server


LESSON#71  CREATING THE LOCAL STATE
- the  local state you can create only for a class component. Because class component creates an object what can have some properties, 
and functional component you can only invoke, execute, but can not add properties
- to change the state you have to use a method this.SetState - this method is asynchronous (keep that in mind, they can ask you at interview)
and this method will rerender the page after changing thew local State. 


LESSON#69 HOC
- HOC is a function, what expects an argument - component.creates the containerComponent with some functionality and the renders inner component
tis way our inner component receives functionality been wrapped in a containerComponent with functionality.
- HOW TO PERFORM IT?
- create a function in a separate file. src->HOC->withAuthRedirect this function should expect a component as an argument and be exported,
- inside the function create class component which will have needed functionality and will render received function at the end.
- also if you need to get some state or dispatch use function connect inside the function withAuthRedirect and pass to connect your class component
- then just return result of connect out from the function withAuthRedirect.
- then at the file where you call this function withAuthRedirect you will receive : let WithRedirect = withAuthRedirect(Component)
1. the class component with some props, what connect function returns: withRedirectConnectClassComponent
2. inside that withRedirectConnectClassComponent we will get our HOCClassContainer what we wrote in  the function withAuthRedirect
3. HOCClassContainer inside will have our component which needs to be rendered
- then all this package (WithRedirect) we put in our main connect as a component.
so here is the pipe line who renders whom.:
-mainConnect->withRedirectConnectClassComponent->HOCClassContainer->Component

- it could be more components, the one rule : you insert your HOC in the main connect and then do the render in whatever sequence you like 


LESSON#68   REDIRECT (NAVIGATE)
- to redirect user from some page to another:  inside the functional component before return write a check
- and as a result of this check render a component with tag navigate and to (path) the component you want to redirect to:
if(props.isAuth===false){return<Navigate to={"/login"}/>}

- what we did : is we get a property isAuth from auth-reducer (this property is true when we signed in and is false when we did not sign in)
and send this property through mapSStateToProps to functional component. and then inside functional component before return check this property
and redirect if it is false

LESSON#66      THUNK
- create thunk function in user-reducer.js 
- in to that thunk copy everything from the usersContainer=>componentDidMount
 - substitute all the props to dispatch.
 -wrap the thunk in getUsersThunkCreator - it will receive the parameters and return thunk
 - install middleware "npm i redux-thunk"
 import thunkMiddleware from "redux-thunk" in to redux-store.js file
  - insert  applyMiddleware (thunkMiddleware) in redux createStore to enable to dispatch not only objects action, but also functions
  -  import thunkCreator to the usersContainer and invoke it sending needed parameters to it
  - in connect:
  connect(stateDispatchToProps,{getUsersThunkCreator:(currentPage,PageSize)=>{dispatch(getUsersThunkCreator(currentPage,PageSize))}})
  so the connect returns us a callback, when we invoke the function getUsersThunkCreator in th usersContainer we first invoke thunkCreator, it will return
  us function and then we dispatch function, the function will get to dispatch and dispatch will see that this is the function, so he will 
  understand that this is thunk and will invoke the function dispatching all the subfunctions,  subfunctions are action creators, so we invoke them, they return 
  actions, actions will dispatch to reducer and change the state, component will rerender... and our thunk will continue to invoke the functions
  down the road

  - create thunk for render, follow, unfollow
  - homework  substitute to thunk all the other axios requests




LESSON#64 buttons follow/unfollow disabled during a server request to follow or unfollow
- start from business logic: create an array in the initialState (following_unfollowingIds)
- Think about a logic... you render your page : you have to check something to decide if you want to disable the button or not.
: each time we press the button, before server request, we can set the flag property to true and add a current u.id to the 
following_unfollowingIds in the initialState.  then the page will rerender and we can determin if we want to disable this button by checking
if we have current u.id in the following_unfollowingIds - if it has - then disable the button.  Then in a stack que will go server request, after
 we will receive response and in the response we will change the flag to false and will remove u.id from the following_unfollowingIds, so when
 react will rerender the next time he will not find this u.id and will make the button available.
   to check for matching id use method some(). to remove needed id use method filter() in the reducer
   - create the pipeline to change the flag and add and remove users id

LESSON#63
ENCAPSULATING SERVER REQUESTS IN TO DAL - data access layer. 
- create api folder. create api.js file in that folder
- from UserContainer class=> method componentDidMount take axios request and move it to api.js
- in the api.js create a function (call it getUsers) which will be returning axios request, export this function
- import getUsers function to UsersContainer and call method then     getUsers.then
- from the place where you invoke getUsers(parameters) send him all needed parameters 
- instead of using url each time for axios request substitute it with axios instance
- put getUsers in to an object usersAPI to keep everything in order 
- CHECK HOW TO ENCAPSULATE SERVER REQUESTS IN api.js file

LESSON#62
 remember you have to be logged in the dimich website, to enable cookies
 we have to send request been authorized to be able to use cookies. so send requests post to follow and delete to unfollow
 - all the server requests, except get, required to have exes key  
 - you have to add headers to server request. header you should write at the same object as cookie request  (our headers will be exes key)
 - add cookies to the server requests in UsersContainer class

LESSON#61
 - create HeaderContainer and make axios request to authenticator end point.  
  - to be able to authenticate you have to log in to DIMICH website: https://social-network.samuraijs.com  this way you save cookies in to your system
  - to be able to authenticate with cookies add a second parameter to axios request {withCredentials:true}
  - get from response 3 variables: id, email, login
  - create the whole pipeLine to dispatch those 3 variables (create reducer, dispatch, AC, insert your reducer in to store, use it in HeaderContainer)
  - in the authorization reducer initialState should be also isAuth variable to check if you authorized.
  - send to the Header props and  check if you received props.login then display the name of a user. if not - just a link

LESSON#60
 -instead of withRouter I used useMatch (it returns the same staff like withRouter) except you have to apply that function only in function component
 -so I had to create an function component, what will check the URL for userId (that what we specify in the arguments for the function) and then
 render class component.
  -first executes function connect, rendering ProfileMatchComponent and then executes function ProfileMatchComponent rendering ProfileContainer
  - inside class ProfileContainer we check if we received something in "match"  if yes we assign our userId to it, if not - we assign our userId to Dimich
  id number = 2.   and then do server request with proper id address

LESSON#59
- created  ProfileContainer component
- implement behavior: press on one of the users and it opens a user information in the ProfileInfo component (for now I do not know how to get particular user)
- in the ProfileContainer component happens axios get request to get a user information. implemented a pipeLine to assign a user from server
request to a parameter in a state: userProfile
-in the ProfileInfo.js implemented alternative return (alternative rendering component), it is like an alternative exit from the function 
when we did not receive props yet then do not render the page!
- created "window.store = store" the object window creates a new variable named store and assign this variable to our store. now we can get to know
what our store is from any point of the app!    

LESSON#58
- we removed mapDispatchToProps function from UsersContainer.js component
- moved all the Action Creators in the object and put it directly in to the context
 parameters on the place of mapDispatchToProps.
 - we renamed our Action Creators to be able to assign shortly in the object 

LESSON#57  adding preloader gif
- create separate functional component Preloader.jsx which will return image.gif
- create a variable 'isFetching' in users-reducer.js => initial state. set it to boolean true 
- create pipeline to change isFetching from true to false and back.
- inside the UsersContainer class in the return of function render. specify ternary expression
isFetching? <Preloader/>:null 
- then you have to manipulate isFetching : you have to show the preloader while
server request is going, and finish showing it, when fetching is finished: it
means change isFetching to true before server request and right after you got the
response set isFetching to false


LESSON# 56
- moved class component to the UsersContainer - now class component will be responsible only for server requests
- created functional component, sent all the props to it, now this functional
 component is responsible for returning jsx

LESSON #55
  -in Users.js => moved axios request from the constructor to componentDidMount(){}, removed constructor
  -users-reducer.js=> added to state variables: pageSize, totalUserCount, currentPage
  -Users-container=> pass new(3) variables to User.js component
  -Users.js => inside the render function before return => calculate how many pages you will need (users/amountUsersPerPage), use Math.ceil() to round the digit to a bigger integer 
  -Users.js => inside the render function before return => push all the pages to an array :pagesArray
  -Users.js => inside return => map through the pagesArray and render a span with the page number for each page. also set the className to check if currentPage from state===page from map and set for that page special class to be able to recognize which page is current.
  -Users.js => componentDidMount => change your request from hardcoded to responsive, using your variables: currentPage, pageSize.  for that remember to wrap whole request in the backtick `${variable} text ${variable}`
  - So you have to change the currentPage in the state, clicking on a page number: set an action listener onClick to all <span>page</span> 
and make whole pipe line: (onClick=>function in the class=>props.method=>AC=>dispatch)  you have to send clicked page number through all the arguments all the way to state.
important: onClick should call to a function in your class: (setCurrentPage), and then that function should call to props.setCurrentPage. you will understand this in the next step.
  -  -Users.js =>setCurrentPage function => copy ajax request in to this function and change EndPoint ?page=${this.curre...} to ?page${page} to received page
what you just clicked! 
why?   because method componentDidMount invokes ONLY ONCE!!! when function is born (there you make your first server request), but when you do some actions 
on your page you need to rerender it, and for that you will be making request each time we press at another page number, and because this another page we have
only in received arguments as (page) and our currentPage is not accurate anymore (it is old, and we pressed new page now),  so we will pass the new page to request.
  -users-reducer.js => change SET_USERS dispatch to reassign new users each time.
  -Users.js=> setCurrentPage function => ajax server request=>  dispatch totalUserCount for state (make whole pipeline...), so each time you making 
  the request you check the  number of users from response and change your state value "totalUsersCount" through dispatch and rerender the page. 




LESSON #53
implemented first class component to Users.js file and component
*/

/*
LESSON #51
installed axios library: npm install axios --save
import axios in to users.jsx component
made first server request with axios.get().then()   at users.jsx component
add a folder with a picture and imported that picture to users.jsx
*/

/*lesson#47.1 we removed rerenderEntireTree subscriber function on state change, 
and we removed invoking the function rerenderEntireTree. so now we could remove actual function rerenderEntireTree
and live only what was inside it, because only at the start this code will be rendering our app, we do not 
need to call it again.
 */