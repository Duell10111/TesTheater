"use client"

import {MDBFooter, MDBIcon} from "mdb-react-ui-kit";
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";

const year = new Date().getFullYear()

export default function Footer() {

    return(
        <MDBFooter style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            <Container className={"mt-3"}>
                <Row>
                    <Col>
                    </Col>
                    <Col />
                    <Col>
                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                        <Link href={"https://github.com/Duell10111/TesTheater"}>
                            <p>
                                <MDBIcon fab icon="github" className='me-2'/>
                                Github
                            </p>
                        </Link>
                        <Link href={"https://github.com/Duell10111/TesTheater/issues/new/choose"} style={{ textDecoration: 'none' }}>
                            <p>
                                <MDBIcon fab icon="github" className='me-2'/>
                                Report an issue/feature request
                            </p>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <div className='text-center p-4'>
            © {year} Copyright Duell10111
            </div>
        </MDBFooter>
    )
}
