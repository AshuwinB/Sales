import {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput 
          style={styles.searchInput}
          value=""
          onChange={() => {}}
          placeholder='Choose your brands'
        />
      </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode = "contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
    </View>
  )
}

export default Welcome