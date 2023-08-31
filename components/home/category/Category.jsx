import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import CategoryCard from '../../common/cards/category/CategoryCard';

import styles from './category.style'
import { COLORS, SIZES } from "../../../constants";
import {demoOne, demoTwo, demoThree} from "./images";





const Category = () => {

  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Choose Your Category</Text>
      </View>
      <View style={styles.cardsContainer}>
      <FlatList
            data={[
              {
                categoryImage: demoOne,
                category_id: 1
              },
              {
                categoryImage: demoTwo,
                category_id: 2
              },
              {
                categoryImage: demoThree,
                category_id: 3
              },
              
            ]}
            renderItem={({ item }) => (
              <CategoryCard
                item={item}
                selectedCategory={selectedCategory}
                handleCardPress={() => {}}
              />
            )}
            keyExtractor={(item) => item.category_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        
      </View>       
    </View>
  )
}

export default Category