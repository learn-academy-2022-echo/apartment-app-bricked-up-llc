import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Button,
  CardTitle,
  CardBody,
  CardLink,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams();
  let currentApartment = apartments.find((apartment) => apartment.id === +id);
  return (
    <>
      <h1>View Your Apartment</h1>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Card" src={currentApartment.image} />
        <CardBody>
          <CardTitle tag="h5">
            {currentApartment.street},{currentApartment.city},
            {currentApartment.state}
          </CardTitle>
          <CardText>
            Manager: {currentApartment.manager}
            Manager Email: {currentApartment.email}
          </CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>Price: {currentApartment.price}</ListGroupItem>
          <ListGroupItem>Bedrooms: {currentApartment.bedrooms}</ListGroupItem>
          <ListGroupItem>Bathrooms: {currentApartment.bathrooms}</ListGroupItem>
          <ListGroupItem>Allow Pets: {currentApartment.pets}</ListGroupItem>
        </ListGroup>
        <CardBody>
          <CardLink>
            <NavLink to="/apartmentindex" className="nav-link">
              <Button>See All Apartments</Button>
            </NavLink>
          </CardLink>
          <CardLink>
            <NavLink to="/" className="nav-link">
              <Button>Back To Home</Button>
            </NavLink>
          </CardLink>
        </CardBody>
      </Card>
    </>
  );
};

export default ApartmentShow;
