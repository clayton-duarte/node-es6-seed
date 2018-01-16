// Just copy and paste this folder again and again to start your own components
import React, { PureComponent as Component } from 'react';
import './style.sass';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="my-component-unique-class">
        Build your stuff here!
      </div>
    );
  }
}
