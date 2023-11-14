
import { View,  FlatList, Button, StyleSheet } from "react-native";
import Error from "./Error";
import ProductItem from "./ProductItem";
import Loading from "./Loading";
import Constants from 'expo-constants'
import FlatListSeparator from "./FlatListSeparator";
import useProducts from "../hooks/useProducts";

const Main = () => {
  const {
    products, 
    error, 
    isLoading,
     sortAsc, 
     sortDesc 
  } = useProducts();
 

  return (
    <>
      {error ? (
        <Error error={error} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }} >
          <View >
            <Button
              onPress={sortAsc}
              title="Ordenar ascendente"
              color="#000"
              accessibilityLabel="boton"
            />

            <Button
              onPress={sortDesc}
              title="Ordenar Descendente"
              color="#f194ff"
              accessibilityLabel="boton"
            />
          </View>
          <View style={styles.container}>
            <FlatList
              data={products}
              ItemSeparatorComponent={FlatListSeparator}
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
    padding: 20
  }
})


export default Main;
