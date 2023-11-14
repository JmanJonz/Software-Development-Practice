import sum from "./sum.js";

test("Should return correct sum", ()=>{
    expect(sum(2,4)).toBe(6);
})