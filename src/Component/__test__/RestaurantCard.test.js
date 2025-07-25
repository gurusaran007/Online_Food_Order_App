 import { render, screen } from "@testing-library/react"
import Restaurant_cards from "../Restaurant_cards"
 import MOCK_DATA from "../mocks/restautarantcard.json"
 import "@testing-library/jest-dom"

 import { Restaurant_updated } from "../Body"

 test("Should Restaurant card accept the props data",()=>{
    render(<Restaurant_cards Item = {MOCK_DATA}/>)

    const value = screen.getByText("Veggie Feast")

    expect(value).toBeInTheDocument()
 })

 test("Should Good Hotel value is there  in Document",()=>{
    render(<Restaurant_updated Item = {MOCK_DATA}/>)

    const value = screen.getByText("Good Hotel")

    expect(value).toBeInTheDocument()
 })


 
