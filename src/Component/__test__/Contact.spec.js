 import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'
 
 describe("Grouping Contact page test Cases",()=>{
    it("Should render the contact page",()=>{
      render(<Contact/>)// render the react component to JsDOM

       const heading = screen.getAllByRole("heading")

       //Assertion(expect the result)
       expect(heading.length).toBe(2)
 })


 it("Should render the contact page",()=>{
      render(<Contact/>)// render the react component to JsDOM

       const text = screen.getByText("number : 912345678")

       //Assertion(expect the result)
       expect(text).toBeInTheDocument()
 })
 })
 