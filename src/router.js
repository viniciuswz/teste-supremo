import React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';


import Home from './pages/Home'; 
import Detail from './pages/Detail'; 
import Minicart from './pages/minicart'; 

const Stack = createStackNavigator();



function Routes(){
 
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="home" 
        component={Home} 
        options={({navigation} )=>({
          title: 'ALUGUE',
          headerTitleStyle:{
            fontFamily: 'Montserrat_700Bold'
          },
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }} 
              onPress={() => navigation.navigate('minicart') }
            >
              <Feather
              name="shopping-bag"
              size={24}
              color="black"
              />
            </TouchableOpacity>
          )
        })}
        />
        <Stack.Screen 
        name="detail" 
        component={Detail} 
        options={({navigation})=>(
          {
            title: 'Detalhe',
            headerTitleStyle:{
              fontFamily: 'Montserrat_700Bold'
            },
  
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('minicart') }
              >
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity>
            )
          }
        )}

        />
         <Stack.Screen 
        name="minicart" 
        component={Minicart} 
        options={{
          title: 'Carrinho',
          headerTitleStyle:{
            fontFamily: 'Montserrat_700Bold'
          },

    
        }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;