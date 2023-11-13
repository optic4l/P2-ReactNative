import React, { useEffect, useState } from "react";
import { View,  FlatList, Button, StyleSheet } from "react-native";
import { getProducts } from "../services/Products.service";
import { IProduct } from "../interfaces/Products.interface";
import Error from "./Error";
import ProductItem from "./ProductItem";
import Loading from "./Loading";

const Main = () => {
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

  return (
    <>
      {error ? (
        <Error error={error} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <View>
            <Button
              onPress={sortAsc}
              title="Ordenar ascendente"
              color="#f194ff"
              accessibilityLabel="boton"
            />

            <Button
              onPress={sortDesc}
              title="Ordenar Descendente"
              color="#f194ff"
              accessibilityLabel="boton"
            />
          </View>
          <View style={styles.container} >
            <FlatList
              data={products}
              renderItem={({ item }) => (
                <ProductItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                />
              )}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Main;
