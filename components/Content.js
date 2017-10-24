import React from 'react'
import { ScrollView, View } from 'react-native'

export class Content extends React.Component {
	render() {
		return (
			<ScrollView style={{ height: '100%' }}>
				<View style={{ height: '100%' }}>
					{this.props.children}
				</View>
			</ScrollView>
		)
	}
}