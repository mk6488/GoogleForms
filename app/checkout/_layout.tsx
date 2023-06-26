import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CheckoutContextProvider from "../../src/contexts/CheckoutContext";

export default function CheckoutStack() {
  return (
    <CheckoutContextProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: { padding: 15, backgroundColor: "#F0EBF8", flex: 1 },
          headerStyle: { backgroundColor: "#673AB8" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "#F0EBF8",
        }}
      >
        <Stack.Screen name="personal" options={{ title: "Personal Info" }} />
        <Stack.Screen name="delivery" options={{ title: "Delivery Info" }} />
        <Stack.Screen name="payment" options={{ title: "Payment Info" }} />
      </Stack>
    </CheckoutContextProvider>
  );
}
