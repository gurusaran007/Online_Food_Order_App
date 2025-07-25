import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/fetchMockData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return  Promise.resolve({
        json: ()=>{
           return Promise.resolve(MOCK_DATA)
        },
    });
        
    
   
});

test ("Should we render the component with 4 cards based on burger input",async()=>{

      await act(async()=>{render(<BrowserRouter> <Body /> </BrowserRouter>)})


      const cardsBeforeSearch = screen.getAllByTestId("cards")
      expect (cardsBeforeSearch.length).toBe(8)
    
    const search_btn = screen.getByRole("button",{name:"Search"})
    expect (search_btn).toBeInTheDocument()

    const search_inputBox = screen.getByTestId("input_box")

    fireEvent.change(search_inputBox,{target:{value:"burger"}})

    fireEvent.click(search_btn)


    const cardsAfterSearch = screen.getAllByTestId("cards")
    expect (cardsAfterSearch.length).toBe(1)
    
    
   

   



})