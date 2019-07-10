import React, { Component, Fragment } from 'react';
import CarouselComponent from '../../components/Carousel/CarouselComponent';
import Img1 from 'static/images/party/1.png';
import Img2 from 'static/images/party/2.png';
import Img3 from 'static/images/party/3.png';
import Img4 from 'static/images/party/4.png';
import OwlCarousel from 'react-owl-carousel';
import autobind from 'autobind-decorator';
import './Schedule.scss';

@autobind
export default class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };

    this.carousel = React.createRef();
  }

  prevButton() {
    this.carousel.current.prev();
  }

  nextButton() {
    this.carousel.current.next();
  }

  render() {
    const { items } = this.state;
    const responsiveOptions = {
      0: { items: 1, nav: false },
      480: { items: 3, nav: true },
    };

    return (
      <Fragment>
        <div className="onav">
          <div className="onav__prev">
            <button onClick={this.prevButton}>prev</button>
          </div>
          <div className="onav__next">
            <button onClick={this.nextButton}>next</button>
          </div>
        </div>
        <OwlCarousel
          ref={this.carousel}
          className="owl-theme"
          loop={false}
          margin={24}
          center={true}
          stagePadding={24}
          responsive={responsiveOptions}
        >
          <div className="item">
            <img src={Img1} />
          </div>
          <div className="item">
            <img src={Img2} />
          </div>
          <div className="item">
            <img src={Img3} />
          </div>
          <div className="item">
            <img src={Img4} />
          </div>
        </OwlCarousel>
      </Fragment>
    );
  }
}
