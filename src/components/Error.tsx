import { Text, View } from "react-native"


const Error = ({ error }: {error: Error}) => {

    return(
        <View>
            <Text>{`Error: ${error}`}</Text>
        </View>
    )
}


export default Error;