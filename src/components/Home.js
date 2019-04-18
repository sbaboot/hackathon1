import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";

class Home extends Component {
  render() {
    const { characters } = this.props;
    return (
      <div className="header">
        <div className="borderTitle">
          <div className="headerOverlay">
            <h1 className="headerTitle">A la recherche de l'oeuf cosmique</h1>
            <h5 className="headerText">
              Repondez juste aux différentes questions pour obtenir le plus
              d'oeufs, et peut-être ... l'Oeuf Cosmique !
            </h5>
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
                    <img
                      className="charactersImg"
                      src={characters.image}
                      alt={characters.name}
                    />{" "}
                  </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Button
                className="btnTryAgain mr-3"
                color="warning"
                onClick={this.props.chooseYourCharacter}
              >
                Choisis un autre avatar
              </Button>

              <Link to="/Quiz">
                <Button className="btnLetsGo" color="success">
                  C'est parti !!
                </Button>
              </Link>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
