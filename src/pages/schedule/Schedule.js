import React, { Component } from 'react';
import CarouselComponent from '../../components/Carousel/CarouselComponent';

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }
  render() {
    const { items } = this.state;
    return <CarouselComponent items={items} active={0} />;
  }
}
