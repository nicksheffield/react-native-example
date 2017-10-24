import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

export class Header extends React.Component {
	render() {
		let { title='My Cool App' } = this.props

		return (
			<View>
				<View style={styles.header}>
					<Text style={styles.logo}>
						{title}
					</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#333',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		padding: 10,
		paddingTop: 10 + 24
	},
	logo: {
		fontSize: 30,
		color: '#fff'
	}
})