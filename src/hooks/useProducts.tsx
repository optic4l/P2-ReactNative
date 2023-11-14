import { useState, useEffect } from "react";
import { IProduct } from "../interfaces/Products.interface";
import { getProducts } from "../services/Products.service";

const useProducts =() => {
    const [products, setProducts] = useState<IProduct[]>();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>(undefined);

    useEffect(() => {
        getData();
      }, []);

    const getData = async () => {
        setLoading(true);
    
        try {
          const resp = (await getProducts()).data;
          setProducts(
            resp.sort((a: IProduct, b: IProduct) => {
              a.price - b.price;
            })
          );
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
    };

    const sortAsc = () => {
        if (products != undefined) {
          const sortedProducts = [...products];
          sortedProducts.sort((a, b) => a.price - b.price);
          setProducts(sortedProducts);
        }
      };
    
      const sortDesc = () => {
        if (products != undefined) {
          const sortedProducts = [...products];
          sortedProducts.sort((a, b) => b.price - a.price);
          setProducts(sortedProducts);
        }
    };
    
    return {
        products,
        isLoading,
        error,
        sortAsc,
        sortDesc
    }
}


export default useProducts;