import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
const Decrease = () => {
    const dispatch = useDispatch()
    const onPress=()=>{
dispatch ({type : 'Sub', value :1})
    }
    return(
        <View style={{flex: 1}}>
            <TouchableOpacity
             onPress={onPress}
             style={{backgroundColor: 'yellow', width: '80%', height: '20%', justifyContent: 'center', alignItems: 'center', padding: 5}}>
                <Text style={{fontSize: 40}}>Press -</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Decrease