import React, {Component} from 'react';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';

export default class Show extends Component{
  render(){
    return (
      <div>

            <Card style={{width: 500}} >
              <CardHeader
                title='Weather'
                titleStyle={{float:'left '}}
              />
              <CardMedia
                overlay={<CardTitle title={this.props.place} titleStyle={{float:'left '}} />}
              >
                <img style={{height: 200}} src="http://cottonaustralia.com.au/uploads/images/thumbnails/CF_-_Birds_Fly_Across_the_Reflective_Waters_of_Another_On_Farm_Storage_Dam%2C_Jamie_Condon.jpg" alt="" />
              </CardMedia>
              <CardTitle titleStyle={{fontSize: 15}} title="Temperature" subtitle={this.props.data.temp-273.15 +" C"} />
              <CardTitle titleStyle={{fontSize: 15}} title="Humidity" subtitle={this.props.data.humidity} />

            </Card>


      </div>
    )
  }
}
