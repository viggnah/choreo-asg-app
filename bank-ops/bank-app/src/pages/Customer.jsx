import axios from "axios";
import { Button, Col, Container, Row, Table, Alert, DropdownButton, Dropdown, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Hosts } from "../constants/links";

const Customer = () => {
    const [points, setPoints] = useState(0);
    const [currency, setCurrency] = useState('ugx');
    const [convertedPoints, setConvertedPoints] = useState(0);
    const options = { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      };

    let userName = localStorage.getItem('userName');
    // let userName = Hosts.LoyaltyUserName;
    const HOST = Hosts.Loyalty;
    const HOST_MI = Hosts.Mi;

    const headers = {
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // Authorization: `Bearer ${Hosts.LoyaltyAccessToken}`
        },
        params: { name: userName }
    };

    useEffect(() => {
        axios.get(HOST + "/loyalty", headers).then(res => {
            setPoints(res.data.totalNumberOfPoints);
        });

        axios.get(HOST_MI + "/" + encodeURIComponent(userName) + "/" + currency).then(res => {
            setConvertedPoints(res.data.converted_points);
        });
    }, [currency]);


    return (
        <Container className="mt-5">
            <Row >
                <Col>
                    You Currently Have {points} Points to Redeem !
                </Col>
            </Row>
            <Row >
                <Col>
                <Form.Group controlId="currencyDropdown">
                    <Form.Control
                        as="select"
                        value={currency}
                        onChange={e => setCurrency(e.target.value)}
                    >
                        <option value="ugx">UGX</option>
                        <option value="mwk">MWK</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                    <Alert variant="info">Your current {points} Points gives you {Number(convertedPoints).toLocaleString('en', options)} {currency.toUpperCase()} </Alert>
                </Col>
            </Row>
            <Row className="mt-5" >
                <Col>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Merchant</th>
                                <th>Product</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PizzaHut</td>
                                <td>1 x Chicken Pizza</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Target</td>
                                <td>1 x Table Mirror</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Scope Cinema</td>
                                <td>2 x Tickets For Any Movie</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Walmart</td>
                                <td>8 x Cloth Hangers</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Keels</td>
                                <td>1 x Butter Knife</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Swarnamahal</td>
                                <td>1 x Gold Pendant</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>ABC Travels</td>
                                <td>1 x Ticket to Africa</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Customer;