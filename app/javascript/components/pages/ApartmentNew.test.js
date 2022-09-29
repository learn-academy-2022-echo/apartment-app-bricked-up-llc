import React from "react";
import { render, screen } from "@testing-library/react";
import ApartmentNew from "./ApartmentNew";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const renderComponent = (createApartment) => {
  render(
    <MemoryRouter initialEntries={["/apartmentnew"]}>
      <Routes>
        <Route
          path="apartmentnew"
          element={<ApartmentNew createApartment={createApartment} />}
        />
      </Routes>
    </MemoryRouter>
  );
};
describe("ApartmentNew", () => {
  test("makes sure our page renders without crashing", () => {
    renderComponent();
    expect(screen.getByText("Add A Listing")).toBeInTheDocument();
  });
});
