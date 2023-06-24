import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PersonalDetails() {
  return (
    <View>
      <Text>Personal details</Text>
      <Link href="/checkout/delivery">Next</Link>
    </View>
  );
}
