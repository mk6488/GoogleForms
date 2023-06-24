import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function DeliveryDetails() {
  return (
    <View>
      <Text>Delivery details</Text>
      <Link href="/checkout/payment">Next</Link>
    </View>
  );
}
