import { router, Stack, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function OrderLayout() {
	useFocusEffect(
		useCallback(() => {
			router.replace('/order/cart');
		}, [router]),
	);

	const insets = useSafeAreaInsets();
	return (
		<SafeAreaProvider>
			<StatusBar style="light" backgroundColor="#fff" />
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: {
						paddingTop: insets.top,
						backgroundColor: '#fff',
					},
				}}
			>
				<Stack.Screen name="cart" />
				<Stack.Screen name="address" />
				<Stack.Screen name="success" />
			</Stack>
		</SafeAreaProvider>
	);
}
