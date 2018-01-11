import React, { PureComponent as Component } from 'react';
import './style.sass';

export default class Grid extends Component {
 
    render() { 
        return <main className='grid' {...this.props}>{this.props.children}</main> 
    } 
}

export class Col extends Component {

    render() { 
        return <div className='y' {...this.props}>{this.props.children}</div> 
    } 
}

export class Row extends Component {

    render() { 
        return <div className='x' {...this.props}>{this.props.children}</div> 
    } 
}

//be carefull with this one

export class FlexGH extends Component {

    render() { 
        return <div className='flexGH' {...this.props}>{this.props.children}</div> 
    } 
}