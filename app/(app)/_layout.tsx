import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors, Font } from '../../shared/tokens';
import { CustomTabLabel } from '../../shared/custom-tab-label/custom-tab-label';
import CatalogTabIcon from '../../assets/icons/tab-icons/catalog-tab';
import CartTabIcon from '../../assets/icons/tab-icons/cart-tab';

export default function MainLayout() {
	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: Colors.primary,
					tabBarInactiveTintColor: Colors.grey,
					tabBarLabelStyle: {
						fontSize: Font.f14,
						fontFamily: Font.regular,
					},
					tabBarStyle: {
						flexDirection: 'row',
					},
					headerShown: false,
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						tabBarLabel: ({ focused }) => {
							return (
								<CustomTabLabel focused={focused} label="Главная" IconComponent={CatalogTabIcon} />
							);
						},
						tabBarIcon: () => null,
					}}
				/>
				<Tabs.Screen
					name="order"
					options={{
						tabBarLabel: ({ focused }) => {
							return <CustomTabLabel focused={focused} label="Заказ" IconComponent={CartTabIcon} />;
						},
						tabBarIcon: () => null,
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
