import React, { PureComponent as Component } from 'react';
import Grid, { Col, Row } from '../atoms/Grid';

export default class extends Component { 
 
    render() { 
        return <Grid container>
            <Col>{'<Grid/>'}
            <Row>{'<Row/>'}
                <Col>{'<Col/>'}</Col>
                    <Col>
                    {'<Col/>'}
                        <Row>{'<Row/>'}
                            <Col>{'<Col/>'}</Col>
                            <Col>{'<Col/>'}</Col>          
                        </Row>
                    </Col>
                {this.props.children}
            </Row>
            <Row>{'<Row/>'}
                <Col>{'<Col/>'}</Col>
                    <Col>
                    {'<Col/>'}
                        <Row>{'<Row/>'}
                            <Col>{'<Col/>'}</Col>
                            <Col>{'<Col/>'}</Col>          
                        </Row>
                    </Col>
                {this.props.children}
            </Row>
            </Col>
        </Grid>
    } 
}