import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  Button
} from 'react-native';

export default class SplashPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.navigate = this.navigate.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
  }

  navigate() {
    this.props.navigator.push(this.props.routeStack[1]);
  }

  navigateBack() {
    this.props.navigator.pop();
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.navButtons}>
          {
            this.props.route.index>0 &&
            <Button
              style={styles.backButton}
              onPress={this.navigateBack}
              title="<-"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          }
          <Button
            style={styles.nextButton}
            onPress={this.navigate}
            title="Next Page"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <Text style={styles.welcome}>
          {this.props.route.title} - ({this.props.route.index})
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navButtons: {
    flexDirection: 'row'
  },
  backButton: {},
  nextButton: {},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});