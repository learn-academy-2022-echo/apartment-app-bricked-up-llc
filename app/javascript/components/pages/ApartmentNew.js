import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const ApartmentNew = ({ createApartment }) => {
  const navigate = useNavigate();
  const [newApartment, setNewApartment] = useState({
    street: "",
    city: "",
    state: "",
    manager: "",
    email: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
  });
  const handleApartments = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    createApartment(newApartment);
    navigate("/apartmentindex");
  };

  return (
    <>
      <h1>Add A Listing</h1>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input
                name="street"
                placeholder="Enter A Street"
                type="text"
                onChange={handleApartments}
                value={newApartment.street}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                name="city"
                placeholder="Enter A City"
                type="text"
                onChange={handleApartments}
                value={newApartment.city}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            name="state"
            placeholder="Enter A State"
            type="text"
            onChange={handleApartments}
            value={newApartment.state}
          />
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input
            name="manager"
            placeholder="Enter A Manager"
            type="text"
            onChange={handleApartments}
            value={newApartment.manager}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Manager</Label>
              <Input
                name="email"
                placeholder="Enter an Email"
                type="text"
                onChange={handleApartments}
                value={newApartment.email}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                name="price"
                placeholder="Enter The Price"
                type="text"
                onChange={handleApartments}
                value={newApartment.price}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="bedrooms">Bedrooms</Label>
              <Input
                name="bedrooms"
                placeholder="Number of Bedrooms"
                type="text"
                onChange={handleApartments}
                value={newApartment.bedrooms}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            name="bathrooms"
            placeholder="Number of Bathrooms"
            type="text"
            onChange={handleApartments}
            value={newApartment.bathrooms}
          />
        </FormGroup>
        <Col md={2}>
          <FormGroup>
            <Label for="pets">Pets</Label>
            <Input
              name="pets"
              placeholder="Are Pets Allowed?"
              type="text"
              onChange={handleApartments}
              value={newApartment.pets}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              name="image"
              placeholder="Add an Image"
              type="text"
              onChange={handleApartments}
              value={newApartment.image}
            />
          </FormGroup>
        </Col>
        <Button onClick={handleSubmit} name="submit">
          Submit A Property
        </Button>
      </Form>
    </>
  );
};

export default ApartmentNew;
