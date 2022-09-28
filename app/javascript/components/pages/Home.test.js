import React from "react"
import { screen, render } from "@testing-library/react"
import Home from "./Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(<Home />)
    const element = screen.getByText(/Home/i)
    expect(element).toBeInTheDocument()
  })
})
