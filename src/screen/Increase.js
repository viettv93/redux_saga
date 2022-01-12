import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { useDispatch } from "react-redux"

const Increase = () => {
    const dispatch = useDispatch()
    const onPress=()=>{
      dispatch({ type: 'Add', value :1})
    }

    return(
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={onPress} style={{backgroundColor: 'red', width: '80%', height: '20%', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{padding: 5, fontSize: 40}}>Press + </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Increase