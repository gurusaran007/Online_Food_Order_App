import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { BrowserRouter } from "react-router-dom"

test("Should Header Component rendered with login button",()=>{

    //rendering react component
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
    
    </Provider>
    )

    //Quering it 

    const loginButton = screen.getByRole("button",{name:"Login"})
    
    //Assertion

  expect(loginButton).toBeInTheDocument()
  

})

test("Should Header Component rendered with logOut Button",()=>{

    //rendering react component
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
    
    </Provider>
    )

    //Quering it 

    const loginButton = screen.getByRole("button",{name:"Login"})

    //Checkout event is triggered

    fireEvent.click(loginButton)

   const logOutButton = screen.getByRole("button",{name:"LogOut"})


    //Assertion

  
  expect(logOutButton).toBeInTheDocument()


})