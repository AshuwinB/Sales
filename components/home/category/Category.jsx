import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import CategoryCard from '../../common/cards/category/CategoryCard';
import useFetch from '../../../hook/useFetch';

import styles from './category.style'
import { COLORS, SIZES } from "../../../constants";
import {demoOne, demoTwo, demoThree} from "./images";





const Category = () => {

  const [selectedCategory, setSelectedCategory] = useState();

  const {data, isLoading, error} = useFetch("BrandCategory")

  
  const handleCategoryPress = (item) => {
    setSelectedCategory(item.id);
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Category</Text>
      <TouchableOpacity>
          <Text style={styles.headerBtn}>Add category</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      <FlatList
            data={data}
            renderItem={({ item }) => (            
              <CategoryCard
                item={item}
                selectedCategory={selectedCategory}
                handleCardPress={handleCategoryPress}

              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        
      </View>       
    </View>
  )
}

export default Category