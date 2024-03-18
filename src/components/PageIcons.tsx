import {Col, Container, Row} from "react-bootstrap";
import IconButton from "@/components/IconButton";
import {data} from "@/utils/LinkData";


export default function PageIcons() {

    return(
        <Container style={{flex: 1}}>
            <Row>
                <Col xs={6} md={4}>
                    <IconButton data={data[0]} />
                </Col>
                <Col xs={6} md={4}>
                    <IconButton data={data[0]} />
                </Col>
                <Col xs={6} md={4}>
                    <IconButton data={data[0]} />
                </Col>
            </Row>
        </Container>
    )
}
