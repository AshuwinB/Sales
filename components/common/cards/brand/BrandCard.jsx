import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './brandcardstyle'

const BrandCard= ({brand, handleNavigate}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          source={{uri: brand.brandImage}}
          resizeMode='contain'
          style={styles.logImage}     
        />             
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {brand.brandName}
        </Text>
        <Text style={styles.jobType}>
          {brand.brandTagline}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default BrandCard