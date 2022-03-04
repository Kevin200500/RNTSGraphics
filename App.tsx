/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React,{useState} from 'react';
import { 
  Text,  
  View,
  Dimensions,
  Button
} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const screenWidth = Dimensions.get("window").width;

const App = () => {
  const [planetas,setPlanetas]=useState<Number>(0);
  const [estaciones,setEstaciones] = useState<Number>(0);
  const data = [
    {
      name : 'Planetas',
      cantidad : planetas,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Estaciones",
      cantidad: estaciones,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  const ObtenerDatosJson = async ()=>{
     await fetch('https://rickandmortyapi.com/api/location?type=Planet').then((res)=> res.json()).then((json)=>{setPlanetas(json.info.count)});
     await fetch('https://rickandmortyapi.com/api/location?type=Space station').then((res)=> res.json()).then((json)=> {setEstaciones(json.info.count)});
  }
  return (
    <View>
        <Text>Estaciones Espaciales y planetas</Text>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"cantidad"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 50]}
          absolute
        />
        <Button title="Obtener Resultados" onPress={ObtenerDatosJson}/>
    </View>
  );
};


export default App;
