import React from "react"
import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(<Home />)
    const element = screen.getByText(/Welcome to Bricked Up!/i)
    expect(element).toBeInTheDocument()
  })
  it("has clickable links", () => {
    render(<Home />)
    userEvent.click(screen.getByText("Sign In"))
    expect(screen.getByText("Sign In")).toBeInTheDocument()
  })
})
