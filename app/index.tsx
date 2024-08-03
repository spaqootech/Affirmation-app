import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc' // for tailwindcss
import PlusIcon from '@/assets/PlusIcon'
import BellIcon from '@/assets/BellIcon'
import Cart from '@/components/Cart'
import HomeIcon from '@/assets/HomeIcon'
import FavoriteIcon from '@/assets/FavoriteIcon'
import SquareIcon from '@/assets/SquareIcon'

const index = () => {
  return (
    <View style={className`bg-black flex-1`}>
        
        {/* header icons */}
        <View style={className`p-5 flex-row justify-between items-center`}>
           <View style={className`flex-row`}>
           <Image source={require('../assets/profile.jpg')}
            style={className`h-12 w-12 rounded-full z-10`}/>
            <View style={className`flex-row justify-center items-center h-12 w-12 rounded-full bg-gray-700 ml-[-7px]`}>
                <PlusIcon/>
            </View>
           </View>
           <View style={className`flex-row justify-center items-center h-12 w-12 rounded-full bg-gray-700`}>
                <BellIcon/>
            </View>
        </View>
        {/* header icons */}



        {/* Texts */}
        <View style={className`p-5 flex-col gap-5`}>
            <Text style={className`text-2xl text-gray-400`}>
                Choose
            </Text>
            <Text style={className`text-5xl font-semibold text-gray-100`}>
                FAVORITE AFFIRMATIONS
            </Text>
        </View>
        {/* Texts */}


        {/* Affirmations Carts */}
        <View style={className`py-5`}>
            <ScrollView horizontal>
            <View style={className`flex-row gap-3`}>
            <Cart
                title="FOR EVERY DAY"
                description="I KNOW AND REVEAL MY POTENTIAL"
                bgColor="bg-yellow-500"
                color="text-gray-900"
                />

                <Cart
                title="FOR MONEY"
                description="I LOVE MONEY AND MONEY LOVES ME"
                bgColor="bg-yellow-900"
                color="text-red-500"
                />

                <Cart
                title="FOR GOOD LUCK"
                description="I KNOW THAT LUCK WILL ALWAYS FOLLOW ME"
                bgColor="bg-red-600"
                color="text-gray-100"
                />

                <Cart
                title="FOR EVERY DAY"
                description="A SOURCE OF INSPIRATION WITHIN ME"
                bgColor="bg-purple-600"
                color="text-gray-100"
                />

                <Cart
                title="FOR LOVE"
                description="THE LOVE I'M LOOKING FOR IS ALSO LOOKING FOR ME"
                bgColor="bg-green-900"
                color="text-gray-100"
                />

                <Cart
                title="FOR HEALTH"
                description="I'M GETTING HEALTHIER EVERY DAY"
                bgColor="bg-green-500"
                color="text-gray-200"
                />

                <Cart
                title="FOR WORK"
                description="MY WORK BRINGS ME HAPPINESS AND PLEASURE"
                bgColor="bg-gray-200"
                color="text-gray-900"
                />

                <Cart
                title="FOR WORK"
                description="MY WORLD IS FULL OF HAPPINESS JOY AND ABUNDANCE"
                bgColor="bg-gray-800"
                color="text-gray-100"
                />

            </View>
            </ScrollView>
        </View>
        {/* Affirmations Carts */}


        {/* Dotes */}
        <View style={className`flex-row justify-center items-center gap-3`}>
            <View style={className`p-1 rounded-full bg-gray-700`}></View>
            <View style={className`p-1 rounded-full bg-gray-700`}></View>
            <View style={className`p-2 rounded-full bg-gray-100`}></View>
            <View style={className`p-1 rounded-full bg-gray-700`}></View>
            <View style={className`p-1 rounded-full bg-gray-700`}></View>
            <View style={className`p-1 rounded-full bg-gray-700`}></View>
            <View style={className`p-1 rounded-full bg-gray-700`}></View>
            <View style={className`p-1 rounded-full bg-gray-700`}></View>
        </View>
        {/* Dotes */}

        {/* NAVIGATION */}
        <View style={className`p-5 flex-row justify-center items-center`}>

            <View style={className`p-5 bg-gray-700 rounded-full flex-row gap-5`}>
                <HomeIcon/>
                <FavoriteIcon/>
                <SquareIcon/>
            </View>
        </View>
        {/* NAVIGATION */}




    </View>
  )
}

export default index