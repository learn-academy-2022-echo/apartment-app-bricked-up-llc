import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import mockApartments from "../mockApartments"

const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
        <Route path='apartmentshow/:id' element={<ApartmentShow apartments={mockApartments} />}/>
      </Routes>
    </MemoryRouter>
  )
} 
describe('ApartmentShow', () => { 
    test("makes sure our page renders without crashing", ()=>{
      renderComponent()
      expect(screen.getByText("View Your Apartment")).toBeInTheDocument()
    })
 })