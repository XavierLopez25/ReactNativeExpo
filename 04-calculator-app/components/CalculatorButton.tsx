import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { View, Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSized?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSized = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.7 : 1,
        width: doubleSized ? 180 : 80, //180??? -> 80*2=160 (double size), 160+20 (padding) = 180
      })}
      onPress={() => {
        //TODO: Add haptics feedback
        onPress();
        if (color === Colors.darkGray) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        } else {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
export default CalculatorButton;
