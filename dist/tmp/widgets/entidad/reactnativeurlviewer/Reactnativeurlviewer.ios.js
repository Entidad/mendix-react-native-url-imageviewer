import { Component, createElement } from 'react';
import { View, Image } from 'react-native';

class Reactnativeurlviewer extends Component {
  render() {
    return createElement(View, null, createElement(Image, {
      source: {
        uri: this.props.uri.value
      },
      style: {
        width: this.props.width,
        height: this.props.height
      }
    }));
  }
}

export { Reactnativeurlviewer };
