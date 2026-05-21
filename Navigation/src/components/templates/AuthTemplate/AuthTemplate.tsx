import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import styles from "./AuthTemplateStyles";

interface AuthTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const AuthTemplate = ({ title, subtitle, children }: AuthTemplateProps) => {
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                <View style={styles.content}>{children}</View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AuthTemplate;