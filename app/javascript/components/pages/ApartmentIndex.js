import React from "react"
import {Card, CardBody,CardText, CardTitle, ListGroup, ListGroupItem, CardLink} from "reactstrap"
const ApartmentIndex = ({mockApartments}) => {
  
  return (
    <div>
    {mockApartments.map((mockApartment)=> {
      return ( 
        <>
        <Card style={{width: '18rem'}}>
          <img alt="Card" src={mockApartment.image}/>
          <CardBody>
            <CardTitle tag="h5">
              {mockApartment.street}
            </CardTitle>
            <CardText>
              {mockApartment.city}
            </CardText>
            </CardBody>
          <ListGroup flush>
          <ListGroupItem>
                  {mockApartment.state}
          </ListGroupItem>
          <ListGroupItem>
                  {mockApartment.price}
          </ListGroupItem>
          <ListGroupItem>
                  {mockApartment.bedrooms}
                  {mockApartment.bathrooms}
          </ListGroupItem>
          </ListGroup>
            <CardBody>
                <CardLink href="#">
                  Card Link
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
