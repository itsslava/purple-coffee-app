import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '../../shared/tokens';

export default function MainLayout() {
	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: Colors.primary,
					headerShown: false,
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Главная',
					}}
				/>
				<Tabs.Screen
					name="cart"
					options={{
						title: 'Заказ',
					}}
				/>
				<Tabs.Screen
					name="address"
					options={{
						href: null,
					}}
				/>
				<Tabs.Screen
					name="success"
					options={{
						href: null,
					}}
				/>
				<Tabs.Screen
					name="drink/[alias]"
					options={{
						href: null,
					}}
				/>
			</Tabs>
		</SafeAreaProvider>
	);
}
