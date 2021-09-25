import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-elements';
import axios from 'axios';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      url: `http://localhost:5000/star?name=${this.props.navigation.getParam('name')}`
    }
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then(response => {
        this.setDetails(response.data.data);
      })
      .catch(error => {
        alert(error.message);
      })
  }

  setDetails = planetDetails => {
    this.setState({
      details: planetDetails
    })
  }

  render() {
    const { details } = this.state;
    if (details.specifications) {
      return (
        <View style = {styles.container}>
          <Card title = {details.star_names}>
            <View>
              <Text style = {styles.card_design}>
                {`Distance from Earth: ${details.distance}`}
              </Text>

              <Text style = {styles.card_design}>
                {`Solar Radius: ${details.solar_radius}`}
              </Text>

              <Text style = {styles.card_design}>
                {`Gravity: ${details.star_gravity}`}
              </Text>

              <Text style = {styles.card_design}>
                {`Solar Mass: ${details.solar_mass}`}
              </Text>

              <Text style = {styles.card_design}>
                {`Star Mass: ${details.mass}`}
              </Text>

              <Text style = {styles.card_design}>
                {`Star Radius: ${details.radius}`}
              </Text>

              <Text style = {styles.card_design}>
                {`Apparent Magnitude: ${details.apparent_magnitude}`}
              </Text>

              <Text style = {styles.card_design}>
                {`Star Luminosity: ${details.luminosity}`}
              </Text>
            </View>
          </Card>
        </View>
      )
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FCE4EC'
  },
  card_design: {
    marginBottom: 10,
    color:'#1A237E'
  }
})