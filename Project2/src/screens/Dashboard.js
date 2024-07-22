import { StyleSheet, Text, View, SafeAreaView ,ScrollView} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import MyDialog from '../components/MyDates';

export default function Dashboard() {

  const { userData } = useSelector((state) => state.auth)

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrolViewContent}>

        <View
          style={{
            width: '90%',
            alignItems:'center'
          }}>
          <Text>Here Dashboard</Text>
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    gap: 5,
    alignItems: 'center'
  },
  scrolViewContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // gap: 5,
  },
  scrollView: {
    width: '95%',
    marginTop:25
  },
  input: {
    height: 30,
    width: '90%',
    marginTop: 30,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
})