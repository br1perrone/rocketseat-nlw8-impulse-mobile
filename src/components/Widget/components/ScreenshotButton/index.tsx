import React from "react";
import { TouchableOpacity, View, Image } from "react-native";

import { Camera, Trash } from "phosphor-react-native";

import { styles } from "./styles";
import { theme } from "../../../../theme";

interface Props {
  uri: string | null;
  onTakeScreenshot: () => void;
  onRemoveScreenshot: () => void;
}

export function ScreenshotButton({
  uri,
  onTakeScreenshot,
  onRemoveScreenshot,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={uri ? onRemoveScreenshot : onTakeScreenshot}
    >
      {uri ? (
        <View>
          <Image source={{ uri }} style={styles.image} />
          <Trash
            size={22}
            color={theme.colors.text_primary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_primary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
