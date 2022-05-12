import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  Image,
  ImageProps,
} from "react-native";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  image: ImageProps;
  title: string;
}

export function Option({ image, title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
