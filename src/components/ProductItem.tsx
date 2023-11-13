import { Text, View } from "react-native";

const ProductItem = ({id, title, price}: {id: number, title: string, price: number}) => {
    return (
        <View>
            <Text>{`Id del Producto: ${id}`}</Text>
            <Text>{`Nombre: ${title}`}</Text>
            <Text>{`Precio: ${price}`}</Text>
        </View>
    )
}

export default ProductItem;