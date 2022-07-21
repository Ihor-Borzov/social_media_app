import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component",()=>{

test("Status from props should appear in the local state",()=>{
const component = create(<ProfileStatus status = "Not Empty"/>);
const instance = component.getInstance();  //! what is getInstance ???
expect(instance.state.status).toBe("Not Empty")
});

test ("After creation span should be displayed",()=>{
    const component = create(<ProfileStatus/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBe(null)
})

test("After creation input should not be displayed",()=>{
    const component = create(<ProfileStatus/>);
    const root = component.root;
    expect(()=>{
        let input = root.findByType("input");
    }).toThrow()
})

test("after creation span should contain correct status",()=>{
    const component = create(<ProfileStatus status = "JavaScript"/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("JavaScript");
})

test("Input should be displayed in editMode instead of span",()=>{
    const component = create(<ProfileStatus status = "JavaScript"/>);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("JavaScript")
})

test("callback should be called",()=>{
     const mockCallback = jest.fn()  
    const component = create(<ProfileStatus status = "JavaScript"  updateStatus = {mockCallback} />)
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
})

//this is the special function JEST can spy after

})