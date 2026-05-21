import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../atoms";
import styles from "./ProductCardStyles";

interface ProductCardProps {
    nombre: string;
    sku: string;
    stock: number;
    ganancia: number;
    onVender?: () => void;
}

const ProductCard = ({ nombre, sku, stock, ganancia, onVender }: ProductCardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.nombre}>{nombre}</Text>
                <Text style={styles.detail}>SKU {sku}</Text>
                <Text style={styles.detail}>Stock: {stock}</Text>
                <Text style={styles.ganancia}>Ganancia: ${ganancia.toFixed(2)}</Text>
            </View>
            <Button title="VENDER" onSubmit={onVender} variant="secondary" />
        </View>
    );
};

export default ProductCard;