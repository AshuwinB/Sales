import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack, useRouter } from 'expo-router'
import {Welcome, Category, Brands} from '../components'

import {COLORS, SIZES, icons} from '../constants'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen 
            options={{
                // headerTitle: "SALES MANAGEMENT",
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerShown: false
            }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, padding: SIZES.medium}}>
            <Welcome />
            <Category />
            <Brands />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})