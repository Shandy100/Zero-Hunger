import React from 'react'
import Button from 'react-bootstrap/Button'

const Donate = () => {
    return (
        <div className="donate">
            <h2>YOUR SUPPORT MATTERS</h2>
            <h3>Contribute to help us provide essential food support to those in need</h3>
            <Button variant="danger">Donate now</Button>{' '}<br /><br />
            <p>All our initiatives are designed to provide essential food support to underserved communities <br />in the form of raw grains, freshly cooked food or packaged food products depending on the<br /> need. Our aim is to ensure, hunger never comes in the way of a brighter future.<br />
            Your donations make this possible.</p>

        </div>
    )
}

export default Donate;