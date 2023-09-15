
import { View ,StyleSheet}
	from 'react-native';
import StopWatch from './components/StopWatch';

const App = () => {

  

	return (
		<View style={styles.container}>
			<StopWatch />
      <StopWatch />
      <StopWatch />
			
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		fontSize: 30,
		color: "green",
		marginBottom: 10,
	},
	subHeader: {
		fontSize: 18,
		marginBottom: 10,
		color: "blue",
	},
	timeText: {
		fontSize: 48,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 20,
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},

	buttonText: {
		color: 'white',
		fontSize: 16,
	},
});

export default App;
