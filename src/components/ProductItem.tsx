import { Text, View, StyleSheet } from "react-native";

const ProductItem = ({title, price}: {id: number, title: string, price: number}) => {
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>{`Nombre: ${title}`}</Text>
            <Text style={style.textPrice}>{`Precio: ${price}`}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
    },
    textTitle:{
        fontWeight: "bold",
        flexBasis: 150
    },
    textPrice:{

    }

})


export default ProductItem;