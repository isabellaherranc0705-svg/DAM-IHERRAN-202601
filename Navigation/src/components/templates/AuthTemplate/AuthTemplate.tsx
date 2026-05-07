import React from "react";
import { View, Text } from "react-native";

interface AuthTemplateProps {
    title: String;
    subtitle?: String;
    children: React.ReactNode;
}

const AuthTemplate = (
    {title, subtitle, children}: AuthTemplateProps) => {
        return (
         <View>
                <Text>{title}</Text>
                { subtitle && <Text>{subtitle}</Text>}
                <View>
                {children}
                </View>
        </View>

    );

}
    
export default AuthTemplate;