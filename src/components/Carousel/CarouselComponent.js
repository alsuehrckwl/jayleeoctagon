import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

@autobind
export class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: '',
    };
  }

  generateItems() {
    let items = [];
    let level;
    console.log(this.state.active);
    for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      const className = `item level${level}`;
      items.push({ className: className, index: this.state.items[index] });
    }
    return items;
  }

  moveLeft() {
    let newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left',
    });
  }

  moveRight() {
    let newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right',
    });
  }

  render() {
    const items = this.generateItems().map((item, i) => (
      <CSSTransition key={i} timeout={500} classNames={'left'}>
        <div className={item.className}>{item.index}</div>
      </CSSTransition>
    ));

    return (
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={this.leftClick}>
          {'<'}
          <i className="fi-arrow-left" />
        </div>
        <TransitionGroup className="carousels">{items}</TransitionGroup>
        <div className="arrow arrow-right" onClick={this.rightClick}>
          {'>'}
          <i className="fi-arrow-right" />
        </div>
      </div>
    );
  }
}

CarouselComponent.propTypes = {
  items: PropTypes.array,
  active: PropTypes.any,
};

export default CarouselComponent;
