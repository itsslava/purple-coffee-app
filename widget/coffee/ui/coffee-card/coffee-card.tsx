import { Pressable, PressableProps, Text } from 'react-native';
import { Coffee } from '../../../../entities/coffee/model/coffee.model';

interface CoffeeCardProps {
	coffee: Coffee;
}

export function CoffeeCard({ coffee, ...props }: CoffeeCardProps & PressableProps) {
	return (
		<Pressable {...props}>
			<Text>{coffee.name}</Text>
		</Pressable>
	);
}
