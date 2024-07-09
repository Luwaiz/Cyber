import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { interest } from '../../../constants/OnBoard';
import { styles } from './styles';

const Scheme = () => {
  return (
    <View>
    <Text style={styles.subTitle}>What you should expect to learn</Text>
      <FlatList renderItem={renderItem} data={interest}/>
    </View>
  )
}
const renderItem = ({ item }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.text}>{item.topic}</Text>
		</View>
	);
};

export default Scheme

