import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@tokens';

interface CustomTabIconProps {
	focused: boolean;
	label: string;
	IconComponent: React.ElementType;
}

export function CustomTabLabel({ focused, label, IconComponent }: CustomTabIconProps) {
	return (
		<View style={styles.tabContainer}>
			<IconComponent color={focused ? Colors.primary : Colors.grey} />
			<Text style={[styles.tabText, { color: focused ? Colors.primary : Colors.grey }]}>
				{label}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 9,
	},
	tabText: {
		paddingLeft: 9,
	},
});
