import React from "react"
import { View } from "react-native"
import Decrease from "./screen/Decrease"
import Increase from "./screen/Increase"
import Result from "./screen/Result"

const Main = () => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View  style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-evenly', flex: 1}}>
            <Increase/>
            <Decrease/>
            </View>
            <Result/>
        </View>
    )
}

export default Main