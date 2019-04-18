import React, { Component } from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: {}
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch("http://easteregg.wildcodeschool.fr/api/characters/random", {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          characters: data
        });
      });
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="header">
        <div className="borderTitle">
          <div className="headerOverlay">
            <h1 className="headerTitle">Chasse aux oeufs</h1>
            <h5 className="headerText">Repondez juste au différentes questions pour obtenir le plus d'oeuf, et peut-être ... l'oeuf cosmique !</h5>
            <Row>
              <Col className="col-lg-12 projet-titre">
                <h2 className="orange-color">Aujourd'hui je joue avec :</h2>
              </Col>
            </Row>
            <Container>
              <div className="title col-md-12 col-sm-12 col-12 p-4 name">
                <h2>{characters.name}</h2>
              </div>
              <br />
              <Row>
                <Col>
                  <div className="item margin-description">
                    <img className="charactersImg" src={characters.image} alt={characters.name} /> </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Button className="btnTryAgain" color="warning" onClick={this.componentDidMount}>Try Again</Button>
            </Container>
            <Container>
              <Button className="btnLetsGo" color="warning">Let's go !!</Button>
            </Container>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
