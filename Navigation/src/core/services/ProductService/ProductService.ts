import { Product } from "../../entities";
import ProductRepository from "../../repositories/ProductRepository/ProductRepository";
import { ProductData } from "../../../components/organisms";

const ProductService = {
    create: (data: ProductData): Product => {
        const productExist = ProductRepository.findBySku(data.sku);

        if (productExist !== null) {
            throw new Error("Ya existe un producto con ese SKU");
        }

        const costoCompra = Number(data.costoCompra);
        const precioVenta = Number(data.precioVenta);
        const stock = Number(data.stock);

        if (Number.isNaN(costoCompra) || Number.isNaN(precioVenta) || Number.isNaN(stock)) {
            throw new Error("Los valores numéricos no son válidos");
        }

        const ganancia = precioVenta - costoCompra;

        const productToCreate: Omit<Product, "id"> = {
            nombre: data.nombre,
            sku: data.sku,
            stock,
            costoCompra,
            precioVenta,
            descripcion: data.descripcion,
            ganancia,
        };

        const id = ProductRepository.create(productToCreate);

        return {
            ...productToCreate,
            id,
        };
    },

    getAll: (): Product[] => {
        return ProductRepository.findAll();
    },
};

export default ProductService;