import React from "react"
import { screen, render } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import mockApartments from '../mockApartments'

const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentindex"]}>
      <Routes>
        <Route path='apartmentindex' element={<ApartmentIndex apartments={mockApartments} />}/>
      </Routes>
    </MemoryRouter>
  )
} 
describe('ApartmentIndex', () => { 
  test("makes sure our page renders without crashing", ()=>{
    renderComponent()
    expect(screen.getByText("All Listings")).toBeInTheDocument()
    })
 })
