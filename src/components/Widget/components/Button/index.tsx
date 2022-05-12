import { isLoading } from "expo-font";
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from "react-native";

import { theme } from "../../../../theme";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  label: string;
  isLoading?: boolean;
  size?: number | "large" | "small";
}

export function Button({ label, isLoading, size, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator
          size={size}
          color={theme.colors.text_on_brand_color}
        />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
