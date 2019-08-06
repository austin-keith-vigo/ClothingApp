import React from 'react';
import { View, TextInput, Text } from 'react-native';

const InputField = (props) => {
  const {
    placeholder,
    value,
    onChangeText,
    autocorrect,
    secureTextEntry
  } = props;
  return(
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autocorrect={autocorrect}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles={
  inputStyle:{
    height: 40,
    fontSize: 18,
  }
}

export default InputField;
