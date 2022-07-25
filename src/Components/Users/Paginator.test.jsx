import { create } from "react-test-renderer"
import Paginator from "./Paginator"






describe("paginator component test",()=>{
    test("pages count is 11 but should be shown only 10",()=>{
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });

    test("if page count is more then 10 button next should be present", ()=>{
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1);
    })
})