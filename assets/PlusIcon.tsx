import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'

const PlusIcon = () => {
  return (
    <View>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={className`text-white size-6`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

    </View>
  )
}

export default PlusIcon