import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form';

//Login Input
function LoginInput({ control, name, placeholder, secureTextEntry, rules }: any) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View style={{ position: 'relative' }}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            style={[styles.loginInput, { borderColor: error ? 'red' : '#000' }]}
            placeholder={placeholder}
            placeholderTextColor="#bbb"
          />
          {error && <Text style={styles.errorText}>{error ? error.message : 'error'}</Text>}
        </View>
      )}
    />
  );
}

// Default Input
function Input({
  label,
  style,
  control,
  name,
  placeholder,
  rules,
  editable,
  change,
  button,
  maxLength,
  keyboardType,
  returnKeyType,
}: any) {
  let secureTextEntry = false;
  if (name.includes('password') || name.includes('pw')) {
    secureTextEntry = true;
  }
  if (editable === undefined) {
    editable = true;
  }
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View style={styles.inputContainer}>
          {label && (
            <Text style={styles.labelText}>
              {label} {rules?.required && <Text style={styles.labelRequired}>*</Text>}
            </Text>
          )}
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onChange={change}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              style={[{ ...styles.input, ...style }, { backgroundColor: !editable ? '#eee' : '#fff' }]}
              editable={editable}
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
              placeholderTextColor="#757575"
              placeholder={placeholder}
              maxLength={maxLength}
            />
            {button?.text && (
              <TouchableOpacity style={styles.inputButton} onPress={button.onClick}>
                <Text style={styles.inputButtonText}>{button.text}</Text>
              </TouchableOpacity>
            )}
          </View>
          {error && <Text style={styles.inputError}>{error ? error.message : 'error'}</Text>}
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  loginInput: {
    marginTop: 5,
    paddingHorizontal: 20,
    position: 'relative',
    width: '100%',
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    fontSize: 15,
    height: 50,
    color: 'black',
    fontFamily: 'Pretendard-Regular',
    letterSpacing: -0.42,
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    marginTop: 5,
    alignSelf: 'stretch',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 7,
  },
  labelText: {
    marginTop: 10,
    height: 30,
    fontWeight: '500',
    color: '#212121',
    fontSize: 15,
    fontFamily: 'Pretendard-Bold',
    letterSpacing: -0.42,
  },
  labelRequired: {
    color: '#EA122E',
    fontSize: 15,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderWidth: 1,
    flexGrow: 1,
    flexShrink: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 20,
    color: '#333',
    fontSize: 16,
    fontFamily: 'Pretendard-Regular',
  },
  inputError: {
    flexBasis: 22,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 5,
    color: '#EA122E',
    fontSize: 14,
    fontFamily: 'Pretendard-Regular',
    letterSpacing: -0.42,
  },
  inputButton: {
    borderRadius: 4,
    flexBasis: 100,
    backgroundColor: '#333',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputButtonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Pretendard-Bold',
    letterSpacing: -0.42,
  },
});

export { LoginInput, Input };
