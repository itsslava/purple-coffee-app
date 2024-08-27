import {
	Pressable,
	Text,
	PressableProps,
	StyleSheet,
	Animated,
	GestureResponderEvent,
} from 'react-native';
import { Colors, Font, Radius } from '@tokens';

type ButtonSize = 'large' | 'small';

interface CustomButtonProps extends PressableProps {
	text?: string;
	icon?: React.ReactNode;
	size?: ButtonSize;
}

export function CustomButton({ text, icon, size = 'large', ...props }: CustomButtonProps) {
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
			<Animated.View
				style={[
					styles.button,
					size === 'small' ? styles.smallButton : styles.largeButton,

					{ backgroundColor: color },
				]}
			>
				{icon && <>{icon}</>}
				{text && <Text style={styles.buttonText}>{text}</Text>}
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	largeButton: {
		height: 62,
		paddingVertical: 16,
		borderRadius: Radius.r16,
		paddingHorizontal: 16,
	},
	smallButton: {
		width: 32,
		height: 32,
		padding: 8,
		borderRadius: Radius.r10,
	},
	buttonText: {
		fontFamily: Font.semibold,
		fontSize: Font.f16,
		color: Colors.white,
	},
});
