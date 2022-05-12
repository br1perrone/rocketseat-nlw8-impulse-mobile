import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import * as FileSystem from "expo-file-system";
import { captureScreen } from "react-native-view-shot";

import { ArrowLeft } from "phosphor-react-native";

import { ScreenshotButton } from "../../components/ScreenshotButton";
import { Button } from "../../components/Button";

import { styles } from "./styles";
import { theme } from "../../../../theme";
import { FeedbackType } from "../..";
import { feedbackTypes } from "../../../../utils/feedbackTypes";
import { api } from "../../../../utils/api";

interface Props {
  feedbackType: FeedbackType;
  onResetFeedbackType: () => void;
  onFeedbackSent: () => void;
}

export function FormScreen({
  feedbackType,
  onResetFeedbackType,
  onFeedbackSent,
}: Props) {
  const { image, title } = feedbackTypes[feedbackType];
  const [uri, setUri] = useState<string | null>(null);

  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const handleSendFeedback = () => {
    setIsSendingFeedback(true);

    let screenshot = "";
    if (uri) {
      try {
        FileSystem.readAsStringAsync(uri, { encoding: "base64" }).then(
          (data) => (screenshot = `data:image/png;base64, ${data}`)
        );
      } catch (error) {
        console.log(error);
      }
    }

    console.log({ comment, type: feedbackType, screenshot });
    try {
      api
        .post("/feedbacks", {
          comment,
          type: feedbackType,
          screenshot,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      onFeedbackSent();
    } catch (error) {
      console.log(error);
    }

    setIsSendingFeedback(false);
  };

  const handleTakeScreenshot = () => {
    captureScreen({
      format: "png",
    })
      .then((uri) => setUri(uri))
      .catch((err) => console.log(err));
  };

  const handleRemoveScreenshot = () => setUri(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onResetFeedbackType}
          disabled={isSendingFeedback}
        >
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image style={styles.image} source={image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setComment}
        multiline
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          uri={uri}
          onTakeScreenshot={handleTakeScreenshot}
          onRemoveScreenshot={handleRemoveScreenshot}
        />
        <Button
          disabled={comment.trim().length === 0 || isSendingFeedback}
          label="Enviar feedback"
          onPress={handleSendFeedback}
          isLoading={isSendingFeedback}
        />
      </View>
    </View>
  );
}
