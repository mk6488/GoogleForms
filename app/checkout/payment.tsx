import { useRouter } from "expo-router";
import { View, ScrollView, Alert } from "react-native";
import { Button, Card, useTheme, Checkbox } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  PaymentInfo,
  PaymenyInfoSchema,
} from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/components/ControlledInput";
import { useCheckoutContext } from "../../src/contexts/CheckoutContext";

export default function PaymentDetails() {
  const { control, handleSubmit } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymenyInfoSchema),
  });

  const { onSubmitAll } = useCheckoutContext();
  const router = useRouter();
  const theme = useTheme();

  const nextPage = async (data: PaymentInfo) => {
    // setPayment(data);
    const success = await onSubmitAll(data);

    if (success) {
      router.push("/");
    } else {
      Alert.alert("Oops, something went wrong! Failed to submit the form");
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 500,
        width: "100%",
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Payment details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="number"
            label={"Card number"}
            placeholder="4242 4242 4242 4242"
          />
          <View style={{ flexDirection: "row", gap: 15 }}>
            <ControlledInput
              control={control}
              name="expirationDate"
              label={"Expiration date"}
              placeholder="mm/yy"
            />
            <ControlledInput
              control={control}
              name="securityCode"
              label={"Security code"}
              placeholder="123"
              secureTextEntry={true}
            />
          </View>
          <Controller
            control={control}
            name="saveInfo"
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                label="Save payment information"
                onPress={() => onChange(!value)}
                status={value ? "checked" : "unchecked"}
              />
            )}
          />
        </Card.Content>
      </Card>

      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Submit
      </Button>
    </ScrollView>
  );
}
