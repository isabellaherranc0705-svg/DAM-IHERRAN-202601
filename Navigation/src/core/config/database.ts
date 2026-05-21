import { open } from "react-native-quick-sqlite";

export const db = open({
    name: "navigation_database.sqlite"
});

export const setupDatabase = () => {
    try {
        db.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT,
                username TEXT,
                correo TEXT,
                fechaNacimiento TEXT,
                contrasena TEXT
            );
        `);

        db.execute(`
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                sku TEXT NOT NULL UNIQUE,
                stock INTEGER NOT NULL,
                costoCompra REAL NOT NULL,
                precioVenta REAL NOT NULL,
                descripcion TEXT,
                ganancia REAL NOT NULL
            );
        `);
    } catch (error) {
        console.error("No se pudo inicializar la base de datos", error);
    }
};