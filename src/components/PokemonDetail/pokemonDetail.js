import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import './style.css'

class PokemonDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }
    render() {


        return (
            <div>
                <Button className=" btnModal col-12" onClick={() => { this.handleModal() }}>Details</Button>
                <Modal show={this.state.show}>
                    <Modal.Header><h3>{this.props.name}</h3></Modal.Header>
                    <Modal.Body>
                        <h5>Types</h5>
                        <p>{this.props.type}</p>
                        <h5>Ability</h5>
                        <p>{this.props.ability}</p>
                        <h5>Weight</h5>
                        <p>{this.props.wight}</p>
                        <h5>Height</h5>
                        <p>{this.props.height}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btnModal" onClick={() => { this.handleModal() }}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )

    }
}

export default PokemonDetail;