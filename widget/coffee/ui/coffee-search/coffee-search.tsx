import { StyleSheet, TextInputProps } from 'react-native';
import { CustomInput } from '@shared';
import SearchIcon from '@icons/search';
import { Colors, Radius } from '@tokens';

interface SearchCoffeeProps extends TextInputProps {
	value: string;
	onChangeText: (text: string) => void;
}

export function CoffeeSearch({ value, onChangeText, ...props }: SearchCoffeeProps) {
	return (
		<CustomInput
			value={value}
			onChangeText={onChangeText}
			inputStyles={styles.input}
			icon={<SearchIcon />}
			placeholder="Найти кофе"
			containerStyles={styles.inputContainer}
			{...props}
		/>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 74,
	},
	input: {
		backgroundColor: Colors.darkGrey,
		borderRadius: Radius.r16,
		color: Colors.white,
	},
});
