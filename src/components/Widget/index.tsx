import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import BottomSheet from "@gorhom/bottom-sheet";

import { ChatTeardropDots } from "phosphor-react-native";

import { OptionsScreen } from "./screens/OptionsScreen";
import { FormScreen } from "./screens/FormScreen";
import { SuccessScreen } from "./screens/SuccessScreen";

import { styles } from "./styles";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes;

const _Component = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const handleResetFeedbackType = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };

  const handleFeedbackSent = () => {
    setFeedbackSent(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpenBottomSheet}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight="bold"
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <SuccessScreen onRestartFeedback={handleResetFeedbackType} />
        ) : (
          <>
            {feedbackType ? (
              <FormScreen
                feedbackType={feedbackType}
                onFeedbackSent={handleFeedbackSent}
                onResetFeedbackType={handleResetFeedbackType}
              />
            ) : (
              <OptionsScreen onFeedbackTypeChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(_Component);
