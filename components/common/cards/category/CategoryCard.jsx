import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './category.style'

const CategoryCard = ({item, selectedCategory, handleCategoryPress}) => {
  console.log(item)
  return (
    <TouchableOpacity 
      style={styles.container(selectedCategory, item)}
      onPress={() => {handleCategoryPress}}
    >
        <TouchableOpacity
          style={styles.logoContainer(selectedCategory, item)}
        >
          <Image 
            source = {{uri:item.brandCategoryImage}}
            resizeMode='contain'
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>
        {item.brandCategoryName}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard