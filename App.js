import React from 'react'
import { StyleSheet, ScrollView, FlatList, Text, View, TextInput, Switch, Button } from 'react-native'
import { Header, Page, Content } from './components'

export default class App extends React.Component {
	constructor() {
		super()

		this.state = {
			inputText: '',
			showList: true,
			fruits: [
				'Apple',
				'Orange',
				'Banana'
			],
			posts: []
		}

		this.addFruit = this.addFruit.bind(this)
		this.updateState = this.updateState.bind(this)
	}
	

	updateState(key) {
		return (value) => {
			const newState = {}
			newState[key] = value
			this.setState(newState)
		}
	}

	addFruit() {
		if (!this.state.inputText.trim()) return
		
		this.setState({
			fruits: [...this.state.fruits, this.state.inputText],
			inputText: ''
		})
	}

	render() {

		const { fruits, inputText } = this.state

		let fruitList = <FlatList
			style={styles.list}
			data={fruits}
			keyExtractor={(item, index) => index}
			renderItem={({item}) => <Text style={styles.fruit}>{item}</Text>}
		/>

		return (
			<Page>
				<Header />
				
				<Content>
					<View style={styles.container}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', marginBottom: 10 }}>
							<Text style={styles.containerText}>Fruit List</Text>
							<Switch value={this.state.showList} onValueChange={this.updateState('showList')} />
						</View>
					</View>
					<View style={styles.form}>
						<TextInput placeholder="Type fruit name here..." style={styles.input} value={inputText} onChangeText={this.updateState('inputText')} onSubmitEditing={this.addFruit.bind(this)} />
						<Button title="Add Fruit" color="#841584" onPress={this.addFruit.bind(this)} />
					</View>

					{this.state.showList && fruitList}
				</Content>
			</Page>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		padding: 10
	},
	containerText: {
		fontSize: 30,
		color: 'red',
		flex: 1
	},
	form: {
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#eee',
		padding: 10,
		paddingHorizontal: 15,
		borderRadius: 5
	},
	input: {
		flex: 1,
		marginRight: 10,
		paddingVertical: 10
	},
	fruit: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd'
	},
	list: {
		width: '100%',
		borderTopWidth: 1,
		borderTopColor: '#ddd'
	}
})
