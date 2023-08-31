import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './category.style'

const CategoryCard = (item, selectedCategory, handleCardPress) => {
  return (
    <TouchableOpacity 
      style={styles.container(selectedCategory, item)}
      onPress={() => {handleCardPress}}
    >
        <TouchableOpacity
          style={styles.logoContainer(selectedCategory, item)}
        >
          <Image 
            source={item.categoryImage}
            resizeMode='contain'
            style={styles.logoImage}
          />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default CategoryCard