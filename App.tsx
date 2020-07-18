import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue'
  }
})

let title:string = "React Native + Expo + TypeScript";

interface User {
  name: string
  age: number
};

let user:User ={
  name: "sato",
  age: 25
};

let printName = (name: string) => {
  return name = `${name}さん`
};

let hobby:any = "music"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text>名前:{printName(user.name)}</Text>
      <Text>年齢:{user.age}</Text>
      <Test />
    </View>
  );
};

const Test = () => {
  return(
    <>
      <Text>Testコンポーネント</Text>
    </>
  );
};
