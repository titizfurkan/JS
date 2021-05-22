import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "tura",
      flipping: false,
      count: 0,
      turaSide: 0,
      yaziSide: 0,
    };
  }

  handleClick = () => {
    this.state.count += 1;

    let randomSide = Math.floor(Math.random() * 2);

    if (randomSide > 0) {
      this.setState({ side: "yazi" });
      this.state.yaziSide++;
    } else {
      this.setState({ side: "tura" });
      this.state.turaSide++;
    }

    this.setState({
      flipping: true,
    });
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atıştan <br />
          <strong> {this.state.turaSide} </strong> tura
          <br />
          <strong> {this.state.yaziSide} </strong>
          yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
