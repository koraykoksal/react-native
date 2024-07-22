import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import MyDates from '../MyDates'

export default function Basketball() {
  return (
    <SafeAreaView style={styles.container}>
      <MyDates path={'Basketboll'} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
})