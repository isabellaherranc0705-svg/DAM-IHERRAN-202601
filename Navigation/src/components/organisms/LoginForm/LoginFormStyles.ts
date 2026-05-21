import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        marginTop: -6,
    },
    forgotPasswordText: {
        fontSize: 12,
        color: '#ef7f00',
        fontWeight: '600',
    },
    registerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    registerText: {
        fontSize: 13,
        color: '#6B7280',
    },
    registerLink: {
        fontSize: 13,
        color: '#ef7f00',
        fontWeight: '700',
    },
});

export default styles;