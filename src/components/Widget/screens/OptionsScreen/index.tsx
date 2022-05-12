import React from "react";
import { View, Text } from "react-native";

import { Option } from "../../components/Option";
import { Copyright } from "../../components/Copyright";

import { styles } from "./styles";
import { feedbackTypes } from "../../../../utils/feedbackTypes";
import { FeedbackType } from "../..";

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function OptionsScreen({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, { image, title }]) => (
          <Option
            key={key}
            image={image}
            title={title}
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
