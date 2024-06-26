import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import { premiumData } from "../helper/data";
import soccerField from "../../assets/images/soccerField.png";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"


export default function Premium() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const navigate = useNavigation()

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan.check);
    setSelectedPrice(plan.price);
  };

  return (
    <View style={styles.container}>

      <View style={styles.content1}>
        <Image
          source={soccerField}
          resizeMode='cover'
          style={{ width: '100%', height: '100%' }}
        />


        <Pressable
          onPress={() => navigate.navigate('Home')}
          style={styles.closeIcon}
        >
          <AntDesign name="closecircle" size={24} color="#375A64" />
        </Pressable>

      </View>

      <View style={styles.content2}>

        <View style={styles.header}>
          <FontAwesome6 name="crown" size={34} color="#FBC700" />
          <Text style={styles.headerText}>Pick Your AI Plan</Text>
        </View>

        <View style={styles.plansContainer}>
          {premiumData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.planCard,
                { borderColor: selectedPlan === item.check ? '#06D001' : '#fff' }
              ]}
              onPress={() => handlePlanSelect(item)}
            >
              <Text style={styles.planText}>{item.type}</Text>
              <Text style={styles.planPrice}>{item.currency}{item.price}</Text>
              {selectedPlan === item.check && (
                <FontAwesome5 name="check-circle" size={24} color="#06D001" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.footerText}>Full access for just ${selectedPrice || premiumData[1].price}</Text>

        <Pressable style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content1: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  content2: {
    backgroundColor: '#000',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    width: '100%',
    height: 400,
    bottom: 0,
    left: 0,
    zIndex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  plansContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    marginVertical: 20,
  },
  planCard: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 120,
    height: 120,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  planText: {
    color: '#fff',
    fontSize: 18,
  },
  planPrice: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  okText: {
    color: '#06D001',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
    padding: 10
  },
  subscribeButton: {
    backgroundColor: '#604CC3',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 50,
  },
  subscribeButtonText: {
    color: '#F5F7F8',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
