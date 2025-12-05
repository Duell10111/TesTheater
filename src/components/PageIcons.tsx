import {Col, Container, Row} from "react-bootstrap";
import IconButton from "@/components/IconButton";
import {dataGrouped} from "@/utils/LinkData";
import _ from "lodash";


export default function PageIcons() {

    return(
        <Container style={{flex: 1}} fluid>
            {
                dataGrouped.map(row => (
                    <Row className={"my-3"} key={_.join(row.map(v => v.id))} xs={2} sm={3} md={4} lg={6} xl={8}>
                        {
                            row.map(col => (
                                <Col key={col.id}>
                                    <IconButton data={col} />
                                </Col>
                            ))
                        }
                    </Row>
                ))
            }
        </Container>
    )
}
