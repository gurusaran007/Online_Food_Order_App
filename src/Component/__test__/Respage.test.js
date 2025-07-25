import { fireEvent, render, screen } from "@testing-library/react";
import ResPage from "../ResPage";
import MOCK_RES from "../mocks/respageMock.json";
import "@testing-library/jest-dom"
import { act } from "react";
import Item_List from "../Item_List";
import MOCK_DATA from "../mocks/restautarantcard.json"
import { Provider } from "react-redux"
import store from "../../utils/store";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import Cart from "../cart";







global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_RES)
        }
    })
})

test ("Should Respage is loaded with data",async()=>{
        await act(async()=>{render(
        <>
        <Provider store={store}>
            <ResPage/>
           <Item_List itemDetails={MOCK_DATA}/>

        </Provider>
           
        </>

         )})
    const accordian =   screen.getByText("Veg Pizza (13)")
    expect (accordian).toBeInTheDocument()

     fireEvent.click(accordian)
      
    const items =  screen.getAllByTestId("groupItems")

    expect(items.length).toBe(14)


    
})

test ("Should data is  refelct on the cartI tems",async()=>{
        await act(async()=>{render(
        <>
        <Provider store={store}>
            <BrowserRouter>
            <ResPage/>
           <Item_List itemDetails={MOCK_DATA}/>
           <Header/>
            </BrowserRouter>
            

        </Provider>
           
        </>

         )})
    const accordian =   screen.getByText("Veg Pizza (13)")
    expect (accordian).toBeInTheDocument()

     fireEvent.click(accordian)
      
    const items =  screen.getAllByTestId("groupItems")

    expect(items.length).toBe(14)


     
    expect(screen.getByText("Cart: 0 items"))

    const add_btn = screen.getAllByRole("button",{name:"ADD"})

    fireEvent.click(add_btn[0])

    expect(screen.getByText("Cart: 1 items"))


    
})

test ("Should cart items card is rendered",async()=>{
        await act(async()=>{render(
        <>
        <Provider store={store}>
            <BrowserRouter>
            <ResPage/>
           <Item_List itemDetails={MOCK_DATA}/>
           <Cart/>
           <Header/>
            </BrowserRouter>
            

        </Provider>
           
        </>

         )})
    const accordian =   screen.getByText("Veg Pizza (13)")
    expect (accordian).toBeInTheDocument()

     fireEvent.click(accordian)
      
    const items =  screen.getAllByTestId("groupItems")


    const add_btn = screen.getAllByRole("button",{name:"ADD"})

    fireEvent.click(add_btn[0])

    
     const cart_items = screen.getAllByTestId("groupItems")

     expect(cart_items.length).toBe(16)


    
})


test ("Should clear cart is work",async()=>{
        await act(async()=>{render(
        <>
        <Provider store={store}>
            <BrowserRouter>
            <ResPage/>
           <Item_List itemDetails={MOCK_DATA}/>
           <Cart/>
           <Header/>
            </BrowserRouter>
            

        </Provider>
           
        </>

         )})
    const accordian =   screen.getByText("Veg Pizza (13)")
    expect (accordian).toBeInTheDocument()

     fireEvent.click(accordian)
      
    const items =  screen.getAllByTestId("groupItems")


    const add_btn = screen.getAllByRole("button",{name:"ADD"})

    fireEvent.click(add_btn[0])

    
     const cart_items = screen.getAllByTestId("groupItems")

     expect(cart_items.length).toBe(17)


     const clear_btn = screen.getByText("Clear Cart")
     fireEvent.click(clear_btn)
      expect(cart_items.length).toBe(17)
    
})