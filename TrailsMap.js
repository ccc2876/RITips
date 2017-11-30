import React, {Component} from 'react';
import MapView from 'react-native-maps';

const initialCoords = {
  latitude: 43.0861,
  longitude: longitude: -77.6705,
  latitudeDelta: 0.0522,
  longitudeDelta: 0.0421,
};

class TrailsMap extends Component {
	render(){
		var coords = [
			{longitude: -77.669606, latitude: 43.083822},//0
			{longitude: -77.670498, latitude: 43.083491},//1
			{longitude: -77.670658, latitude: 43.083148},//2
			{longitude: -77.670713, latitude: 43.082895},//3
			{longitude: -77.670855, latitude: 43.082659},
			{longitude: -77.671058, latitude: 43.082328},
			{longitude: -77.671161, latitude: 43.082227},
			{longitude: -77.671268, latitude: 43.082219},
			{longitude: -77.671403, latitude: 43.081938},
			{longitude: -77.671441, latitude: 43.081862},
			{longitude: -77.671352, latitude: 43.081775},
			{longitude: -77.671260, latitude: 43.081580},
			{longitude: -77.671088, latitude: 43.081527},
			{longitude: -77.670933, latitude: 43.081398},
			{longitude: -77.670526, latitude: 43.081324},
			{longitude: -77.670227, latitude: 43.081403},
			{longitude: -77.670042, latitude: 43.081446},
			{longitude: -77.669802, latitude: 43.081484},
			{longitude: -77.669654, latitude: 43.081552},
			{longitude: -77.669490, latitude: 43.081442},
			{longitude: -77.669339, latitude: 43.081465},
			{longitude: -77.669217, latitude: 43.081254},
			{longitude: -77.668864, latitude: 43.081126},
			{longitude: -77.668820, latitude: 43.080979},
			{longitude: -77.668684, latitude: 43.080671},
			{longitude: -77.668500, latitude: 43.080449},
			{longitude: -77.668455, latitude: 43.080247},
			{longitude: -77.668309, latitude: 43.080076},
			{longitude: -77.668059, latitude: 43.080125},
			{longitude: -77.667935, latitude: 43.080068},
			{longitude: -77.668028, latitude: 43.079946},
			{longitude: -77.668170, latitude: 43.079876},
			{longitude: -77.668251, latitude: 43.079751},
			{longitude: -77.668395, latitude: 43.079687},
			{longitude: -77.668624, latitude: 43.079671},
			{longitude: -77.668882, latitude: 43.079630},
			{longitude: -77.669151, latitude: 43.079524},
			{longitude: -77.669447, latitude: 43.079677},
			{longitude: -77.669479, latitude: 43.079840},
			{longitude: -77.669449, latitude: 43.079949},
			{longitude: -77.669259, latitude: 43.080077},
			{longitude: -77.669172, latitude: 43.080376},
			{longitude: -77.669135, latitude: 43.080517},
			{longitude: -77.669095, latitude: 43.080707},
			{longitude: -77.668996, latitude: 43.080896},
			{longitude: -77.669117, latitude: 43.081139},
			{longitude: -77.671578, latitude: 43.081766},
			{longitude: -77.671683, latitude: 43.081668},
			{longitude: -77.671809, latitude: 43.081645},
			{longitude: -77.671927, latitude: 43.081694},
			{longitude: -77.672164, latitude: 43.081730},
			{longitude: -77.672213, latitude: 43.081890},
			{longitude: -77.672075, latitude: 43.082080},
			{longitude: -77.672015, latitude: 43.082208},
			{longitude: -77.672136, latitude: 43.082422},
			{longitude: -77.671872, latitude: 43.082595},
			{longitude: -77.671691, latitude: 43.082630},
			{longitude: -77.671622, latitude: 43.082658},
			{longitude: -77.671495, latitude: 43.082699},
			{longitude: -77.671476, latitude: 43.082717},
			{longitude: -77.671440, latitude: 43.082948},
			{longitude: -77.671396, latitude: 43.083020},
			{longitude: -77.671211, latitude: 43.083133},
			{longitude: -77.671081, latitude: 43.083154},
			{longitude: -77.670960, latitude: 43.083129},
			{longitude: -77.670836, latitude: 43.083134},
			{longitude: -77.670690, latitude: 43.083115}
		];
		return (
			<MapView
				style = {{flex: 1}}
				initialCoords = {initialCoords}
			>
			<MapView.Polyline
				coordinates = {coords}
			/>
			</MapView>
		);
	}
}