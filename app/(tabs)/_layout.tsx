import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function MainLayout() {
	return (
		<SafeAreaProvider>
			<StatusBar style="dark" />
			<Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
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
					name="[alias]"
					options={{
						href: null,
					}}
				/>
			</Tabs>
		</SafeAreaProvider>
	);
}
