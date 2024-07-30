import {
	Pressable,
	Text,
	PressableProps,
	StyleSheet,
	Animated,
	GestureResponderEvent,
} from 'react-native';
import { Colors, Font, Radius } from '../tokens';

export default function Button({ text, ...props }: PressableProps & { text: string }) {
	const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryHover, Colors.primary],
	});

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();
		props.onPressIn && props.onPressIn(e);
	};

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();
		props.onPressOut && props.onPressOut(e);
	};

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View style={{ ...styles.button, backgroundColor: color }}>
				<Text style={styles.buttonText}>{text}</Text>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: Radius.r16,
		alignItems: 'center',
		justifyContent: 'center',
		height: 62,
	},
	buttonText: {
		fontFamily: Font.semibold,
		fontSize: Font.f16,
		color: Colors.white,
	},
});
