/* eslint-disable prettier/prettier */
import icon from "../assets/icon.png";
import { TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";

import { Pressable, Text, View } from "react-native";
import { Button, Image} from "react-native-web";
export const ImageEjemplo = ({insets}) => {
  return (
    <>
      <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
        <Image
          source={icon}
          style={{ width: 100, height: 75, resizeMode: "stretch" }}
        />
        <Image
          source={icon}
          blurRadius={10}
          style={{ width: 100, height: 75, resizeMode: "stretch" }}
        />
        <Image
          source={{
            uri: "https://res.cloudinary.com/utmb-world/image/upload/q_auto/f_auto/c_fill,g_auto/if_w_gt_1920/c_scale,w_1920/if_end/v1/montblanc/Races/UTMB/utmb23_utmb_pb_00_0005_3746aa323f?_a=ATADJAA0",
          }}
          /* a las imagenes que son remotas, hay que ponerlas de esta manera, pero si o si hay que definir un tamaño */
          style={{ width: 100, height: 75, resizeMode: "stretch" }}
        />
        <Image
          source={icon}
          style={{ width: 100, height: 75, resizeMode: "cover" }}
        />
      </View>

      <Pressable
        /*  onPress={() => alert("holaa alerta")} */
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
        {({ pressed }) => (
          <Text
            style={{
              color: pressed ? "yellow" : "white",
              fontWeight: pressed ? "bold" : "normal",
              fontSize: pressed ? 20 : 16,
            }}
          >
            Pressable
          </Text>
        )}
      </Pressable>

      <Button
        color="green"
        title="Puulsaaar"
        onPress={() => alert("pressed")}
      />

      <TouchableHighlight
        underlayColor={"red"}
        onPress={() => alert("holaa alerta")}
        style={{
          backgroundColor: "blue",
          padding: 10,
          width: 200,
          height: 50,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}> TouchableHighlight </Text>
      </TouchableHighlight>

      <TouchableOpacity
        onPress={() => alert("holaa alerta")}
        style={{
          backgroundColor: "blue",
          padding: 10,
          width: 200,
          height: 50,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}> TouchableOpacity </Text>
      </TouchableOpacity>

      <Image
        source={icon}
        style={{ width: 200, height: 150, resizeMode: "center" }}
      />
      {/* esta unidad es en numero de pixeles EFECTIVOS en pantalla, 
        no son los pixeles reales!, esto pasa porque la densidad de pixeles para que se vean bien bien, aumenta la densidad de pixeles   */}
    </>
  );
};
