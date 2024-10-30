import React from "react";
import { Dimensions } from "react-native";
import { NativeBaseProvider, ScrollView, Box } from "native-base";
import { Themes } from "@aemforms/af-react-native";
import Form from "./src/Form";

const App = () => {
  const { height: heightOfDeviceScreen } = Dimensions.get("window");

  return (
    <NativeBaseProvider theme={Themes.primary}>
      <ScrollView
        contentContainerStyle={{ minHeight: heightOfDeviceScreen }}
        style={{ flex: 1 }}
      >
        <Box h="100%" safeArea bg="white" style={{ paddingHorizontal: 10 }}>
          <Form />
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;
