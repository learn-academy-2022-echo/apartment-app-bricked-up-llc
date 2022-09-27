import React from "react"
import { screen, render } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import { BrowserRouter } from "react-router-dom"
import mockApartments from '../mockApartments'

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")

    render(
    <BrowserRouter>
     <ApartmentIndex mockApartments={mockApartments}/>
    </BrowserRouter>)

    mockApartments.forEach(apartment => {
      const element = screen.getByText(apartment.street)
      expect(element).toBeInTheDocument()
    })
  })
})
