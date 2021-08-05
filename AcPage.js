import React from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
} from 'reactstrap';

import Page from 'components/Page';

const AcPage = () => {
    return (
        <Page
            title="A/C Info"
            breadcrumbs={[{ name: 'Account', active: true }]}
        >
            <Row>
                <Col md={6}>
                    <Card>
                        <CardHeader>Personal Details</CardHeader>
                        <CardBody>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                <Input placeholder="names" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">#</InputGroupAddon>
                                <Input placeholder="id" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                <Input placeholder="email" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="append">#</InputGroupAddon>
                                <Input placeholder="0336655221" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>$</InputGroupText>
                                    <InputGroupText>$</InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Dolla dolla billz yo!" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>$</InputGroupText>
                                    <InputGroupText>$</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input placeholder="Amount" type="number" step="1" />
                                <InputGroupAddon addonType="append">.00</InputGroupAddon>
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardHeader>Top up</CardHeader>
                        <CardBody>
                            <InputGroup>
                                <Input />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>$</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Once</InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="amount" type="number" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>Monthly</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <CardHeader>Transfer</CardHeader>
                        <CardBody>
                            <InputGroup size="lg">
                                <InputGroupAddon addonType="prepend">To</InputGroupAddon>
                                <Input />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Amount</InputGroupAddon>
                                <Input type="number" />
                            </InputGroup>
                            <br />
                            <InputGroup size="sm">
                                <InputGroupAddon addonType="prepend">Store ID</InputGroupAddon>
                                <Input />
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardHeader>A/C Settings</CardHeader>
                        <CardBody>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
                                <Input />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Input />
                                <UncontrolledButtonDropdown addonType="append">
                                    <DropdownToggle caret>
                                        Button Dropdown
            </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <UncontrolledButtonDropdown addonType="prepend">
                                    <Button outline>Split Button</Button>
                                    <DropdownToggle split outline />
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                                <Input placeholder="and..." />
                                <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Page>
    );
};

export default AcPage;