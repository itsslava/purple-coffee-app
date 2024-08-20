import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';
import { Colors, Font } from '../tokens';

interface CustomInputProps extends TextInputProps {
	icon?: React.ReactNode;
	rightButton?: React.ReactNode;
	containerStyles?: object;
	inputStyles?: object;
	onRightIconPress?: () => void;
}

export function CustomInput({
	icon,
	rightButton,
	containerStyles,
	inputStyles,
	...props
}: CustomInputProps) {
	return (
		<View style={[styles.container, containerStyles]}>
			<TextInput
				style={[styles.input, inputStyles]}
				placeholderTextColor={Colors.grey}
				{...props}
			/>
			{icon && <View style={styles.icon}>{icon}</View>}
			{rightButton && <>{rightButton}</>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	icon: {
		position: 'absolute',
		top: 18,
		left: 16,
	},
	input: {
		padding: 19,
		paddingLeft: 48,
		fontSize: Font.f14,
		fontFamily: Font.regular,
	},
});
