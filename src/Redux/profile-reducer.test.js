import profileReducer, { addNewPostCreator, removePost } from "./profile-reducer"


let initialState = {
    postsData: [
        {id:0, likes: "10", message: "some message" },
        {id:1, likes: "12", message: "momolongmo" },
        {id:2, likes: "11", message: "some hurucasami" },
    ],}



test("the length of initialState should increase",()=>{

let newAC = addNewPostCreator("It-camasutra");

let newState = profileReducer(initialState,newAC);

expect(newState.postsData.length).toBe(4);

})


test("the length of initialState should decrease",()=>{

    let newAC = removePost(2);

    let newState = profileReducer(initialState,newAC);
    
    expect(newState.postsData.length).toBe(2);  


})