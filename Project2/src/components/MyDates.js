import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import { format, formatDate } from "date-fns"
import DateTimePicker from '@react-native-community/datetimepicker';
import useSportCall from '../hook/useSportCall';


export default function MyDates({ path }) {

    const currentYear = new Date().getFullYear()
    const [date, setDate] = useState(new Date());

    const { getFixtures } = useSportCall()

    const [formattedDate, setFormattedDate] = useState(format(new Date(), 'MM-dd-yyyy'));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setFormattedDate(format(currentDate, 'yyyy-MM-dd'));
    };

    useEffect(() => {
        const info = { formattedDate,currentYear }
        getFixtures(info)
    }, [formattedDate])


    return (
        <SafeAreaView
            style={{ width: '90%', height: 'auto', marginTop: 25, flexDirection: 'column', gap: 10 }}
        >

            <View style={styles.dateContainer}>

                <Text>{path}</Text>

                <DateTimePicker
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="clock"
                    onChange={onChange}
                />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginHorizontal: 5,
    },
    currentDate: {
        color: '#FFD700', // Öne çıkan tarih rengi (altın sarısı gibi)
    },
});