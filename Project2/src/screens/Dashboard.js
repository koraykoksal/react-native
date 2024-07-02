import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import MyDialog from '../components/MyDialog';

export default function Dashboard() {

  const { userData } = useSelector((state) => state.auth)

  return (
    <SafeAreaView style={styles.container}>

      <MyDialog />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})