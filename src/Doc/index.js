import React, { PureComponent as Component } from 'react';
import './style.sass';

import Grid, { Col, Row } from '../atoms/Grid';

export default class extends Component { 
 
    render() { 
        return <Grid container>
        <Col>Col 1</Col>
            <Col>
                <Row>
                    <Col>Col 2</Col>
                    <Col>Col 3</Col>          
                </Row>
            </Col>
            {this.props.children}
        </Grid>
    } 
}