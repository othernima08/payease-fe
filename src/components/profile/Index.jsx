import React from 'react'
import { Container, Button } from 'react-bootstrap'

function ProfilePageComponent() {
  return (
    <Container>
        <Button className="d-grid gap-4 mt-5" type="submit" size="lg" style={{ backgroundColor: "#6379F4", borderColor: "#6379F4" }} >
        Change Password
        </Button>
    </Container>
  )
}

export default ProfilePageComponent