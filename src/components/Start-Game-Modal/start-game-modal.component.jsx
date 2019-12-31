import React, { useState } from 'react';

import { Button, Modal, Form, Col, Row } from 'react-bootstrap'; 

import {games} from '../../data/games';

export default class StartGameModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerCount: 2,
            cardCount: 3
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        const game = this.state;
        console.log(games);
        games.push(game);
        console.log('after', games);
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    render() {
        return (
            <div>
                <Modal {...this.props} centered>
                    <Modal.Header>
                        <Modal.Title>
                            Set Your Game Up
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group as={Row} controlId="player-count">
                                <Form.Label column sm="2">
                                    Players? 
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control as="select" onChange={this.setValue}>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="card-count">
                                <Form.Label column sm="2">
                                    Cards in Hand? 
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control as="select" onChange={this.setValue}>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Button type="submit">PLAY GAME</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}