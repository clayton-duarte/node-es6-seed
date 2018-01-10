import React from 'react';
import './style.sass';
 
export default class extends React.PureComponent { 
 
    render() { 
        return <div className='demo'>{this.props.children}</div> 
    } 
}