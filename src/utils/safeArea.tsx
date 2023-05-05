import { StyleSheet, Platform } from 'react-native';
 const SafeAreaStyles =  StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});

export default SafeAreaStyles