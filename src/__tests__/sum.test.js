import { sum } from "../components/sum";

const result = sum(2,3)
test("sum fun test sum of 2 numbers",()=>{
    expect(result).toBe(5)
})