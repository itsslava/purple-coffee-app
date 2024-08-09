import { Text, View, StyleSheet, ImageBackground, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../shared/button/button';
import { Colors, Font } from '../shared/tokens';
import { useEffect } from 'react';
import { Link } from 'expo-router';

export default function Login() {
	const animatedTransform = new Animated.ValueXY({
		x: 0,
		y: -100,
	});
	const animatedOpacity = new Animated.Value(0);

	useEffect(() => {
		Animated.parallel([
			Animated.timing(animatedOpacity, {
				toValue: 100,
				duration: 10000,
				useNativeDriver: true,
			}),
			Animated.timing(animatedTransform, {
				toValue: {
					x: 0,
					y: 0,
				},
				duration: 1000,
				useNativeDriver: true,
			}),
		]).start();
	}, []);

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/images/coffee-img.png')}
				resizeMode="cover"
				style={styles.image}
			>
				<LinearGradient
					colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)', '#000']}
					locations={[0, 0.2, 0.3]}
					style={styles.gradient}
				>
					<View style={styles.content}>
						<Animated.Text
							style={{
								...styles.title,
								transform: [
									{ translateX: animatedTransform.x },
									{ translateY: animatedTransform.y },
								],
								opacity: animatedOpacity,
							}}
						>
							Один из самых вкусных кофе в городе!
						</Animated.Text>
						<Text style={styles.subtitle}>Свежие зерна, настоящая арабика и бережная обжарка</Text>
						<Link href={'./(tabs)'}>
							<Text style={styles.subtitle}>Каталог</Text>
						</Link>
						<Button text="Начать" />
					</View>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		height: '70%',
		justifyContent: 'flex-end',
	},
	gradient: {
		height: 360,
		width: '100%',
	},
	content: {
		justifyContent: 'center',
		paddingHorizontal: 30,
		marginTop: 52,
	},
	title: {
		fontSize: Font.f34,
		fontFamily: Font.semibold,
		color: Colors.white,
		textAlign: 'center',
		paddingBottom: 8,
	},
	subtitle: {
		fontFamily: Font.regular,
		fontSize: Font.f14,
		textAlign: 'center',
		paddingBottom: 24,
		color: Colors.grey,
	},
});
