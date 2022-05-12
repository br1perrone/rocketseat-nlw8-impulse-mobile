import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Copyright } from "../../components/Copyright";

import successPng from "../../../../assets/success.png";

import { styles } from "./styles";

interface Props {
  onRestartFeedback: () => void;
}

export function SuccessScreen({ onRestartFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image source={successPng} style={styles.image} />

      <Text style={styles.title}>Agradecemos o Feedback</Text>

      <TouchableOpacity style={styles.button} onPress={onRestartFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro!</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
