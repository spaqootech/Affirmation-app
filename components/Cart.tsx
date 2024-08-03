import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'

const Cart = ({color , bgColor , title , description}) => {
  return (
<View style={className`h-[320px] w-[250px] ${bgColor} p-5 rounded-2xl flex-col gap-10 `}>
<Text style={className`text-2xl ${color} text-center`}>
{title}
</Text>
<Text style={className`text-3xl font-semibold ${color} text-center`}>
{description}
</Text>
</View>
  )
}

export default Cart