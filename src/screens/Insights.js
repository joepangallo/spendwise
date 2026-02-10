import React from "react";
import { View, Text } from "react-native";
import { tailwind } from "twrnc";

const Insights = () => {
  return (
    <View style={tailwind("flex-1 justify-center items-center")}>
      <Text style={tailwind("text-2xl font-bold")}>Insights</Text>
      <Text style={tailwind("text-base text-gray-500 mt-2")}>
        Coming soon 📊
      </Text>
    </View>
  );
};

export default Insights;