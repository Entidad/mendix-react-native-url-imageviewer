import { Component, createElement } from "react";
import { View, Image} from "react-native";
export class Reactnativeurlviewer extends Component {
    render() {
        return <View>
		<Image source={{uri:this.props.uri.value}} style={{width:this.props.width,height:this.props.height}}/>
	</View>
    }
}
