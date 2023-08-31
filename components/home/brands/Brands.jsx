import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import BrandCard from '../../common/cards/brand/BrandCard'


import styles from './brand.style'
import { COLORS } from "../../../constants";

const Brands = () => {
  
  const data = [{
    brandName: "abc",
    // brandImage=  ,
    brandTagline: "ahwdofa",
    // brandCategoryId: "",
    id: 1
  }, {
    brandName: "def",
    // brandImage=  ,
    brandTagline: "sfwafw",
    // brandCategoryId: "",
    id: 2
  }, {
    brandName: "ghi",
    // brandImage=  ,
    brandTagline: "giawudw",
    // brandCategoryId: "",
    id: 3
  }, {
    brandName: "abc",
    // brandImage=  ,
    brandTagline: "ahwdofa",
    // brandCategoryId: "",
    id: 4
  }, {
    brandName: "def",
    // brandImage=  ,
    brandTagline: "sfwafw",
    // brandCategoryId: "",
    id: 5
  }, {
    brandName: "ghi",
    // brandImage=  ,
    brandTagline: "giawudw",
    // brandCategoryId: "",
    id: 6
  },
]

  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Brands</Text>
      </View>
      <View style={styles.cardsContainer}>
      {data?.map((brand)=> (
        <BrandCard 
          brand={brand}
          key={`brand-${brand.id}`}
          handleNavigate={() => router.push(`/subitems/${brand.id}`)}
        />
      ))}
      </View>
    </View>
  )
}



export default Brands