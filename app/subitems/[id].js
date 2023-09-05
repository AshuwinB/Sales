import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'


import {Company, ItemSearch, ItemList, ScreenHeaderBtn, data} from '../../components'
import {COLORS, icons, SIZES} from '../../constants'


const SubItems = () => {
  const params = useGlobalSearchParams()
  const router = useRouter()
console.log(data)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (<ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].brandImage}
                tagline={data[0].brandTagline}
                companyName={data[0].brandName}
              />

              <ItemSearch
                
              />
              <ItemList />
              
            </View>
        </ScrollView>

      </Stack.Screen>
    </SafeAreaView>
  )
}

export default SubItems
