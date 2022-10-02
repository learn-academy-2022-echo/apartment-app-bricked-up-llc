import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'

const ProtectedApartmentIndex = ({apartments, current_user, logged_in}) => {

const { id } = useParams()
const filteredApartments = apartments?.filter(apartment => apartment.user_id === current_user.id)
console.log(apartments);
// console.log(curret_user.id)
//  console.log(apartment.user_id)
return (
    <>
    <h1>My Apartments</h1>
      {logged_in && (filteredApartments?.map((apartment, index) => {
      return (
      <Card style={{width: '18rem'}} key={index}>
      <img alt="Unit Image" src={apartment.image}/>
        <CardBody>
          <CardTitle tag="h5">
          Location: <br/>{apartment.street} {apartment.city}, {apartment.state}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Price: ${apartment.price}
            <br/>{apartment.bedrooms} bedrooms
            <br/>{apartment.bathrooms} bathrooms
          </CardSubtitle>
          <Button>
            Visit Apartment
          </Button>
        </CardBody>
      </Card>
      )
      })
    )}
    </>
    )
}

export default ProtectedApartmentIndex