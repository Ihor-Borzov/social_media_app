import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';           /* create new import for new redux store - here is my new store */
import { Provider } from 'react-redux';          /* react-redux#2  import context from react-redux */



/*############# EVERY LESSON SUMMARY:
LESSON#68   REDIRECT (NAVIGATE)
- to redirect user from some page to another:  inside the functional component before return write a check
- and as a result of this check render a component with tag navigate and to (path) the component you want to redirect to:
if(props.isAuth===false){return<Navigate to={"/login"}/>}

- what we did : is we get a property isAuth from auth-reducer (this property is true when we signed in and is false when we did not sign in)
and send this property through mapSStateToProps to functional component. and then inside functional component before return check this property
and redirect if it is false


 */


ReactDOM.render(
    <React.StrictMode>
<Provider store={store}>       {/* React-redux#1 wrap App in to Provider and specify for him props as value={store}, works exactly as native redux, you just creating a context*/}
      <App />
</Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


reportWebVitals();





/*############# EVERY LESSON SUMMARY:

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