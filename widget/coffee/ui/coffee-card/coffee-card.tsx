import { Pressable, PressableProps, Text, View, Image, StyleSheet } from 'react-native';
import { Coffee } from '../../../../entities/coffee/model/coffee.model';
import RatingStarIcon from '../../../../assets/icons/rating-star';
import { CustomButton } from '../../../../shared/custom-button/custom-button';
import { Colors, Font, Radius } from '../../../../shared/tokens';
import { BlurView } from 'expo-blur';
import AddIcon from '../../../../assets/icons/add';

interface CoffeeCardProps {
	coffee: Coffee;
}

export function CoffeeCard({ coffee, ...props }: CoffeeCardProps & PressableProps) {
	return (
		<View style={styles.container}>
			<Pressable {...props}>
				<Image
					source={{
						uri: coffee.image,
					}}
					style={styles.image}
				/>
				<View style={styles.info}>
					<Text style={styles.title}>{coffee.name}</Text>
					<Text style={styles.subTitle}>{coffee.subTitle}</Text>
					<Text style={styles.price}>{coffee.price}</Text>
				</View>
				<BlurView style={styles.rating} intensity={15}>
					<RatingStarIcon />
					<Text style={styles.ratingText}>{coffee.rating}</Text>
				</BlurView>
			</Pressable>
			<View style={styles.buttonContainer}>
				<CustomButton size="small" icon={<AddIcon />} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		borderRadius: Radius.r16,
		padding: 4,
	},
	image: {
		width: 141,
		height: 132,
		borderRadius: Radius.r16,
	},
	info: {
		margin: 12,
	},
	title: {
		fontSize: Font.f16,
		fontFamily: Font.semibold,
		color: Colors.blackLight,
		marginBottom: 4,
	},
	subTitle: {
		fontSize: Font.f12,
		fontFamily: Font.regular,
		color: Colors.grey,
		marginBottom: 12,
	},
	price: {
		fontSize: Font.f18,
		fontFamily: Font.semibold,
		color: Colors.deepGreen,
	},
	rating: {
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 2,
		paddingHorizontal: 10,
		paddingVertical: 6,
		overflow: 'hidden',
		borderTopLeftRadius: Radius.r16,
		borderBottomRightRadius: Radius.r16,
	},
	ratingText: {
		fontSize: Font.f10,
		fontFamily: Font.semibold,
		color: Colors.white,
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 12,
		right: 12,
	},
});
