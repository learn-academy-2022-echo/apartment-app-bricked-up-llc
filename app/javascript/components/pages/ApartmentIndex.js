import React from "react"
import {Card, Button, CardBody,CardText, CardTitle, ListGroup, ListGroupItem, CardLink} from "reactstrap"
import {NavLink} from 'react-router-dom'

const ApartmentIndex = ({apartments}) => {
  console.log(apartments)
  return (
    <div>
    {apartments.map((apartment)=> {
      return ( 
        <>
        <Card style={{width: '18rem'}}>
          <img alt="Card" src={apartment.image}/>
          <CardBody>
            <CardTitle tag="h5">
              {apartment.street}
            </CardTitle>
            <CardText>
              {apartment.city}
            </CardText>
            </CardBody>
          <ListGroup flush>
          <ListGroupItem>
                  {apartment.state}
          </ListGroupItem>
          <ListGroupItem>
                  {apartment.price}
          </ListGroupItem>
          <ListGroupItem>
                  {apartment.bedrooms}
                  {apartment.bathrooms}
          </ListGroupItem>
          </ListGroup>
            <CardBody>
                <CardLink >
                <NavLink to={`/apartmentshow/${apartment.id}`} className="nav-link">
                    <Button>
                    Find Out More
                    </Button>
                </NavLink>
                </CardLink>
                <CardLink href="#">
                  Another Card Link
                </CardLink>
            </CardBody>
         </Card>
         </>
      )
    })
  }
  </div>
  )
}

export default ApartmentIndex
