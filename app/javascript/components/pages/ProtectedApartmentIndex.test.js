import React from "react"
import { screen, render } from "@testing-library/react"
import ProtectedApartmentIndex from "./ProtectedApartmentIndex"
import { BrowserRouter } from "react-router-dom"
import mockApartments from '../mockApartments'

describe("<ProtectedApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")

    render(
    <BrowserRouter>
     <ProtectedApartmentIndex mockApartments={mockApartments}/>
    </BrowserRouter>)

    mockApartments.forEach(apartment => {
      const element = screen.getByText(apartment.street)
      expect(element).toBeInTheDocument()
    })
  })
})
