import React from 'react'

import { Container } from 'react-bootstrap'

import './footer.css'

function CustomFooter() {
    return (
        <Container bsPrefix='footer-container'>
            <p className="credit">
                2023 PayEase. All right reserved.
            </p>
            <section className="company-info">
                <p className="company-num">
                    +62 5637 8882 9901
                </p>
                <p className="company-email">
                    contact@zwallet.com
                </p>
            </section>
        </Container>
    )
}

export default CustomFooter