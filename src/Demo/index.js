import React, { PureComponent as Component } from 'react';
import './style.sass';

export default class extends Component { 
 
    render() { 
        return <div className='demo'>{this.props.children}</div> 
    } 
}