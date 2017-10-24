import React from 'react'
import { View } from 'react-native'

export class Page extends React.Component {
	render() {
		return (
			<View style={{ height: '100%' }}>
				{this.props.children}
			</View>
		)
	}
}