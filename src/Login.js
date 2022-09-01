import React from 'react'
import { Container } from 'react-bootstrap'
//var state = generateRandomString(16)
  //var scope = 'user-read-private user-read-email';
const AUTH_URL="https://accounts.spotify.com/authorize?client_id=53faba11f00e406bbae4973063a93172&response_type=code&redirect_uri=http://localhost:3000"

const Login=()=>{
    return(
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{minHeight:"100vh"}}>
                <a className='btn btn-success btn-lg' href={AUTH_URL}>
                    Login With Spotfy
                </a>

        </Container>
    )
}

export default Login