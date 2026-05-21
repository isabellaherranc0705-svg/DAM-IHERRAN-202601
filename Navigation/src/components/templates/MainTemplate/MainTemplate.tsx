import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import styles from "./MainTemplateStyles";

interface MainTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    scrollable?: boolean;
}

const MainTemplate = ({ title, subtitle, children, scrollable = true }: MainTemplateProps) => {
    const content = (
        <View style={styles.content}>{children}</View>
    );

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            {scrollable
                ? <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>{content}</ScrollView>
                : <View style={styles.flat}>{content}</View>
            }
        </SafeAreaView>
    );
};

export default MainTemplate;