import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button }
	from 'react-native';

const StopWatch = () => {

  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startTimer = () => {
    setIsRunning(true);
  };

  const StopTimer = () => {
    setIsRunning(false);
  };
  // Method to reset timer back to 0
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

	return (
		<View style={styles.container}>
			
			<Text style={styles.timeText}>{hours}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:
      {milliseconds.toString().padStart(2, "0")}</Text>
			<View style={styles.buttonContainer}>
				{isRunning &&  (
					<>
						<Button
							style={[styles.button  ]}
							onPress={StopTimer}
              title="stop"
						/>
							
						
						<Button
							style={[styles.button]}
							onPress={startTimer}
              title="start"
						/>
                        <Button
						style={[styles.button]}
						onPress={reset}
            title="reset"
					/>
							
					</>
				)}
				{!isRunning  && (
					<>
                    {!isRunning&&<Button
							style={[styles.button  ]}
							onPress={StopTimer}
              title="stop"
						/>}
							
						
						<Button
							style={[styles.button]}
							onPress={startTimer}
              title="start"
						/>
                        <Button
						style={[styles.button]}
						onPress={reset}
            title="reset"
					/>
							
					</>
						
					
				)}
			</View>
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

export default StopWatch;
