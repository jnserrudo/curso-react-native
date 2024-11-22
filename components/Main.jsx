import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { ActivityIndicator, FlatList, ScrollView } from "react-native-web";

import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";
import { ImageEjemplo } from "./ImageEjemplo";
import { Logo } from "./Logo";

export function Main() {
  const [bandImg, setBandImg] = useState(true);
  const [games, setGames] = useState([]);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    /* const getlastgames = async () => {
      const games = await getLatestGames();
      console.log(games);
      setGames(games);
    };
    getlastgames(); */

    getLatestGames().then((games) => {
      console.log(games);
      setGames(games);
    });
  }, []);
  return (
    <>
      <Pressable
        onPress={() => setBandImg(!bandImg)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "darkblue" : "blue",
            padding: 10,
            width: 200,
            height: 50,
            borderRadius: 10,
          },
        ]}
      >
        {bandImg ? (
          <Text style={{ color: "white" }}>API!</Text>
        ) : (
          <Text style={{ color: "white" }}>Imagenes!</Text>
        )}
      </Pressable>
      {bandImg ? (
        <>
          <ImageEjemplo insets={insets} />
        </>
      ) : (
        <>
          <View
            style={{
              flex: 1,
              paddingBottom: insets.bottom,
              paddingTop: insets.top,
            }}
          >
            <View style={{ width: 100, height: 100, marginBottom: 20 }}>
              <Logo />
            </View>

            {games.length === 0 ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator color="white" size={"large"} />
              </View>
            ) : (
              // <ScrollView>
              //   {games.map((game) => (
              //     <GameCard game={game} key={game.slug} />
              //   ))}
              // </ScrollView>

              //<FlatList
              //data={games}
              //renderItem={({ item }) => <GameCard game={item} />}
              //keyExtractor={(item) => item.slug}
              ///>
              <FlatList
                data={games}
                keyExtractor={(item) => item.slug}
                renderItem={({ item, index }) => (
                  <AnimatedGameCard index={index} game={item} />
                )}
              />
            )}
          </View>
        </>
      )}

      {/* 
      componente de expo especial, ahora lo pongo en light, ya que si es black el fondo sera 
      de color negro y no se podra ver la hora y la bateria por ejemplo
      El valor de 'auto' funciona dependiendo del lado claro o oscuro del dispositivo , no es que detecta el fondo de la pantalla
      */}
      <StatusBar style="light" />
    </>
  );
}
