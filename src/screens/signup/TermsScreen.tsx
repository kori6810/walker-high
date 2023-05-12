import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// import { useSelector, useDispatch } from 'react-redux';
// import Step from '@src/components/Step';
// import styled from 'styled-components/native';
import ToastMessage from '@utils/ToastMessage';
import Steps from '../../components/Steps';


interface ITerms {
  code: string;
  value: boolean;
  required: boolean;
  label: string;
  link: string;
}

const TermsScreen = ({ navigation }: any) => {
 

  const [checkAll, setCheckAll] = useState(false);
  const [checkTerms, setCheckTerms] = useState<ITerms[]>();

 
 
//   useEffect(() => {
//     if (checkTerms) {
//       const checks = [...checkTerms];
//       const checkUpdate = checks.map(check => {
//         return { ...check, value: checkAll };
//       });
//       setCheckTerms(checkUpdate);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [checkAll]);

//   const onClickCheckBox = (index: number) => {
//     if (index < 0) {
//       setCheckAll(!checkAll);
//       return;
//     }
//     if (checkTerms) {
//       const checks = [...checkTerms];
//       checks[index].value = !checks[index].value;
//       setCheckTerms(checks);
//     }
//   };

//   const onClickButton = () => {
//     if (checkTerms) {
//       const idx = checkTerms.findIndex(check => check.required && check.value === false);
//       if (idx > -1) {
//         ToastMessage('error', `${checkTerms[idx].label}는 필수항목 입니다.`);
//         return;
//       }

//       const terms = checkTerms.map(data => {
//         return { code: data.code, value: data.value };
//       });
//       dispatch(signup({ ...signupInfo, terms: terms }));
//       navigation.navigate('Join');
//     }
//   };

//   const renderItem = () => {
//     if (!checkTerms) {
//       return;
//     }

//     return checkTerms.map((data: any, index: number) => {
//       return (
//         <View key={index} style={styles.agreeItemContainer}>
//           <View style={styles.agreeItem}>
//             <CheckBox
//               value={data.value}
//               boxType={'square'}
//               offAnimationType={'bounce'}
//               tintColors={{ true: '#1CBDB3' }}
//               tintColor={'#1CBDB3'}
//               onValueChange={() => onClickCheckBox(index)}
//             />
//             <TextCheckBox value={data.value} onPress={() => onClickCheckBox(index)}>
//               {data.label}
//             </TextCheckBox>
//             <Text style={styles.agreeItemView}>보기</Text>
//           </View>
//         </View>
//       );
//     });
//   };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Steps step={1}/>
        <Text style={styles.title}>
          Terms and Conditions
        </Text>
        <View style={styles.joinAgree}>
          <View style={styles.agreeAll}>
            {/* <CheckBox
              value={checkAll}
              boxType={'square'}
              offAnimationType={'bounce'}
              tintColors={{ true: '#1CBDB3' }}
              tintColor={'#1CBDB3'}
              onValueChange={() => onClickCheckBox(-1)}
            /> */}
            {/* <Text style={styles.agreeAllText} onPress={() => onClickCheckBox(-1)}>
              전체동의
            </Text> */}
          </View>
        </View>
        {/* <View style={styles.agreeItemGroupContainer}>{renderItem()}</View> */}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IdScreen')}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    // paddingTop: 20,
    paddingHorizontal: 15,
  },
  title:{
    fontSize:25, color:'black',
    marginTop:25
  },
  joinAgree: {
    width: '100%',
    marginTop: 30,
  },
  agreeAll: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 18,
    marginBottom: 18,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  agreeAllText: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    paddingLeft: 8,
  },
  agreeItemGroupContainer: {
    flexGrow: 1,
    width: '100%',
  },
  agreeItemContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  agreeItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  agreeItemText: {
    flexGrow: 1,
    fontSize: 16,
    paddingLeft: 8,
  },
  agreeItemView: {
    flexGrow: 0,
    flexBasis: 30,
    textAlign: 'center',
    fontSize: 14,
    marginRight: 8,
    color: '#777',
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 60,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
  },
});

export default TermsScreen;
