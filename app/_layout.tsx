import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RootLayout() {
	const insets = useSafeAreaInsets();
	const [loaded, error] = useFonts({
		Sora: require('../assets/fonts/Sora-Regular.ttf'),
		SoraSemiBold: require('../assets/fonts/Sora-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	if (!loaded) {
		return null;
	}
	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: {
						paddingTop: insets.top,
						backgroundColor: '#000000',
					},
				}}
			>
				<Stack.Screen name="index" />
			</Stack>
		</SafeAreaProvider>
	);
}
