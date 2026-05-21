import React from "react";
import { View, TextInputProps } from "react-native";
import { Label, Input } from "../../atoms";
import styles from "./FormFieldStyles";

interface FormFieldProps extends TextInputProps {
    label: string;
    secure?: boolean;
}

const FormField = ({ label, secure = false, ...props }: FormFieldProps) => {
    return (
        <View style={styles.container}>
            <Label text={label} />
            <Input secure={secure} {...props} />
        </View>
    );
};

export default FormField;