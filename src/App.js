import React, { Component } from 'react';
import './App.css';
import { connect} from 'react-redux';
import * as actionCreators from './Actions/';
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions,  CardTitle, CardText} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      pi: ""
    };
  }

  render() {
    var restart 
    return (
        <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            <Card>  
              <CardTitle title="Pi Trainer" subtitle={"How High Can You Go " + this.props.length } />
              <CardText>
               <TextField id="sofar" onChange={this.updateVal} value={this.props.pi}/> 
              
                <h1 className="nextNum" style={{display:'inline'}}>{this.props.nextDigit}</h1>
              </CardText>
              <CardActions>
                  <RaisedButton primary={true} onClick={this.restart} label={this.props.valid}></RaisedButton>
              </CardActions>
            </Card>
                      </Col>
        </Row>
      </Grid>
    );
  }
  restart = () => {
    this.props.actions.restart();
  }

  updateVal = (e) => {
    this.props.actions.check_pi(e.target.value);
  }


}

const mapStateToProps = function(store, ownProps) {
  return {
    pi: store.pi,
    valid:store.valid,
    length:store.digits,
    nextDigit:store.nextDigit
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);