import React from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"
const Result = () => {
    const result  = useSelector(state =>state)
    return(
        <View style={{flex: 1}}>
         <Text style={{fontSize: 40, color: 'black'}}>{`ket qua ${result.value}`}</Text>
        </View>
    )
}

export default Result