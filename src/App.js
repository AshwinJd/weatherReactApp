import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {fullWhite} from 'material-ui/styles/colors';
import Show from './show';
import { Row, Col } from 'react-flexbox-grid';


const request = require('superagent');

const styles = {
  customWidth: {
    width: 300,

    marginTop:50,
    padding:0

  },

};
const style = {
 marginBottom: 0
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      valuePlace: 'Bengaluru',
      info: [],
      showComponent: false,
    }
  }

  handleClick = (e) =>{
    let URL = "http://api.openweathermap.org/data/2.5/weather?q="+ e + ",IND&&APPID=48ceeac5f18778d0397ef869b78921fe";
    request
      .get(URL)
      .end((err,res)=>{
        // console.log(res.body)
        if(err){
          console.log("err", err)
            this.setState({error: err})
        }else {
          this.setState({
            info: res.body.main,
            showComponent: true,
          })
        }

      });

  }

  handleChange = (event, index, valuePlace) => this.setState({valuePlace});

  render() {
    return (

      <div>
        <Row>
        <Col xs={12}>
          <Row center='xs'>
            <Col xs={5}>
              <div style={{padding:0, display: "inline-block"}}>
              <DropDownMenu
                value={this.state.valuePlace}
                onChange={this.handleChange}
                style={styles.customWidth}
                autoWidth={false}
               >
                <MenuItem value={'Bengaluru'} primaryText="Bengaluru" />
                <MenuItem value={'Delhi'} primaryText="Delhi" />
                <MenuItem value={'Chennai'} primaryText="Chennai" />
                <MenuItem value={'Kolkata'} primaryText="Kolkata" />
                <MenuItem value={'Trivandrum'} primaryText="Trivandrum" />
              </DropDownMenu>
              <RaisedButton
                backgroundColor="#a4c639"
                icon={<SearchIcon color={fullWhite}  />}
                style={style}
                onClick = {this.handleClick.bind(this,this.state.valuePlace)}
              />
              </div>
        {this.state.showComponent ?
           <Show data = {this.state.info} place = {this.state.valuePlace} /> :
           null
        }

          </Col>
        </Row>
      </Col>
      </Row>

      </div>

    );
  }
}

export default App;
