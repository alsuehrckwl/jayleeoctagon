import React, { Component } from 'react';
import Reservation from '../reservation/Reservation';
import Schedule from '../schedule/Schedule';
import { Price } from '../price/Price';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Schedule />
        <Price />
        <Reservation />
      </div>
    );
  }
}
