import api from './api';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getApi = async () => {
    try {
        let apiKey = await AsyncStorage.getItem('@SerFit:token');
        console.log('Testing async storage: ', apiKey);
        api.defaults.headers.common['x-access-token'] = apiKey;
        return apiKey;

    } catch (error) {
        console.log('Error getting apiKey', error);
        return null;
    }
}

getApi();
console.log('The access token:', api.defaults.headers);

let loggedApi = api;
export default loggedApi;
