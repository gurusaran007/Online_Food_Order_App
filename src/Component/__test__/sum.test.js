import { sum } from "../sum";

test("Testing the sum of 2 numbers and return the result",()=>{
    const result = sum(2,3);

    //Assertion (always use in test case)
    expect(result).toBe(5);
})