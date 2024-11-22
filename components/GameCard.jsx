/* eslint-disable prettier/prettier */
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-web";

export const GameCard = ({ game }) => {
  return (
    <View key={game.id} style={styles.card}>
      <Image source={game.image} style={styles.imagen} />
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.titulo}>{game.title}</Text>
      <Text style={styles.releaseDate}>{game.releaseDate}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
};

export const AnimatedGameCard = ({ game, index }) => {
  //Animated es una clase que tiene como componentes:
  // Value: es un objeto que representa un valor que puede ser animado
  // Funciones: como fadeIn, fadeOut, spring, timing, etc. que se
  // pueden utilizar para animar los valores
  // Hooks: como useAnimatedStyle, useAnimatedGestureHandler, etc. que
  // se pueden utilizar para crear estilos animados y gestos animados
  // Otros componentes como ScrollView, FlatList, etc. que pueden ser
  // utilizados para crear listas y scrollviews animadas
  
  // useRef es un hook de React que nos permite crear una referencia a un valor o una funcion
  // y mantenerla en memoria durante todo el ciclo de vida del componente
  // Es muy util para crear variables que se mantengan entre renders y que no sean reemplazadas
  // cada vez que se renderiza el componente
  // Por ejemplo, si queremos mantener un contador de cuantas veces se ha presionado un boton
  // podemos crear una referencia a un numero y luego incrementarla cada vez que se presiona el boton
  // De esta forma, el valor del contador se mantendra entre renders y no se perdera
  //
  // En este caso, estamos creando una referencia a un objeto Animated.Value que representa un valor
  // que puede ser animado, y lo estamos inicializando con el valor 0
  // Luego, en el useEffect, estamos utilizando esta referencia para animar el valor de la opacidad
  // desde 0 hasta 1 en un lapso de 500ms
  // De esta forma, la opacidad se va a cambiar desde 0 hasta 1 en un lapso de 500ms, y luego se va a mantener
  // en 1 hasta que el componente se desmonte
  const opacity=useRef(new Animated.Value(0)).current;


  useEffect(()=>{
    //aca le vamos a decir como va a hacer la animacion, que me cambie el valor de la opacidad al valor de 1
    // Animated.timing es una funcion que recibe 3 argumentos
    // 1. El valor que se va a animar (en este caso, la opacidad)
    // 2. Un objeto con las propiedades de la animacion
    // 3. Un objeto con opciones adicionales
    // En este caso, estamos diciendo que la opacidad debe cambiar
    // desde 0 (inicialmente) hasta 1 (finalmente) en un lapso de 500ms
    // y que use el driver nativo (useNativeDriver: true) para que la animacion
    // sea mas suave y eficiente

    Animated.timing(opacity, {
      toValue: 1, // valor final de la animacion
      duration: 500, // duracion de la animacion en milisegundos
      delay: index * 250, // delay de la animacion en milisegundos
      useNativeDriver: true // si es true, se utiliza el driver nativo
    }).start(); // inicia la animacion


  },[opacity,index])


  return(
    <>
      <Animated.View style={{opacity}}>
        <GameCard game={game} />
      </Animated.View>
    </>
  )


}

const styles = StyleSheet.create({
  card: {
    /*     alignItems: "center", */
    marginBottom: 42,
  },
  imagen: {
    width: 100,
    height: 120,
    borderRadius: 10,
    display: "block",
  },
  titulo: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  releaseDate: {
    color: "white",
    fontSize: 14,
    opacity: 0.7,
    marginTop: 5,
  },
  description: {
    color: "white",
    fontSize: 12,
    opacity: 0.5,
    marginTop: 5,
    textAlign: "center",
  },
  score: {
    color: "green",
    fontSize: 16,
    fontWeight: "extrabold",
    marginTop: 10,
  },
});
