import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface CustomInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoComplete,
  style,
  ...props
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style]}
      placeholderTextColor="#BDBDBD"
      secureTextEntry={secureTextEntry}
      autoComplete={autoComplete}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    padding: 15,
    flexShrink: 0,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto-Regular",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
});

export default CustomInput;
