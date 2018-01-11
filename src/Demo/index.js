import React, { PureComponent as Component } from 'react';
import './style.sass';

import Grid, { Col, Row } from '../atom/Grid';

export default class extends Component { 
 
    render() { 
        return <Grid>
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