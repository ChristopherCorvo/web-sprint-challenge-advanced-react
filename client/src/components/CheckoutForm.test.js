import React from "react";
import { findByTestId, fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("checking to see that component renders to the DOM", () => {
    render(<CheckoutForm/>)
})

test("form header renders", () => {
    //Arrange 
    render(<CheckoutForm/>)
    const formHeader = screen.getByText(/checkout form/i) // this grabs the <h2> by its text

    //Assert
    expect(formHeader).toBeInTheDocument() // saying the content of formHeader is in the DOM
});

test("form shows success message on submit with form details", async () => {
    // Arrange 
    const {findByTestId} = render(<CheckoutForm/>)

    // these are the initial values for our input fields
    const firstNameInput = 'Christopher'
    const lastNameInput = 'Corvo'
    const addressInput = '10 West 4th St'
    const cityInput = 'New York'
    const stateInput = 'NY'
    const zipInput = '10010'
    
    // grabbing the various elements 
    // Input elements
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    // button element
    const checkoutButton = screen.getByRole(/button/i)

    // Act:
    // fireEvents are plugging in initial values into the input feilds 
    fireEvent.change(firstName, {target: {value: firstNameInput}})
    fireEvent.change(lastName, {target: {value: lastNameInput}})
    fireEvent.change(address, {target: {value: addressInput}})
    fireEvent.change(city, {target: {value: cityInput}})
    fireEvent.change(state, {target: {value: stateInput}})
    fireEvent.change(zip, {target: {value: zipInput}})

    // this fires the checkoutButton
    // if you comment out the button fireEvent then the test will fail  
    // because the successMessage will not be rendered to the screen.
    fireEvent.click(checkoutButton) 

    // Assert
    // checking that the input fields have recieved fireEvent data
    expect(firstName.value).toBe(firstNameInput)
    expect(lastName.value).toBe(lastNameInput)
    expect(address.value).toBe(addressInput)
    expect(city.value).toBe(cityInput)
    expect(zip.value).toBe(zipInput)

   
    
   await waitFor(() => findByTestId('successMessage'))


});
