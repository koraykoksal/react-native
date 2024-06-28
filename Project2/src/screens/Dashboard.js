import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import MyDialog from '../components/MyDialog';

export default function Dashboard() {

  const { userData } = useSelector((state) => state.auth)

  return (
    <View style={styles.container}>

      <MyDialog />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})