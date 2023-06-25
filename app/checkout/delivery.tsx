import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import {
  Button,
  Card,
  useTheme,
  RadioButton,
  HelperText,
} from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  DeliveryInfo,
  DeliveryInfoSchema,
} from "../../src/schema/checkout.schema";

import ControlledInput from "../../src/components/ControlledInput";

export default function DeliveryDetails() {
  const { control, handleSubmit } = useForm<DeliveryInfo>({
    resolver: zodResolver(DeliveryInfoSchema),
    defaultValues: {
      shipping: "free",
    },
  });

  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    router.push("/checkout/payment");
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
        <Card.Title title="Delivery address" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="city"
            label={"City"}
            style={{ backgroundColor: theme.colors.background }}
          />
          <ControlledInput
            control={control}
            name="postCode"
            label={"Postcode"}
            style={{ backgroundColor: theme.colors.background }}
          />
          <ControlledInput
            control={control}
            name="address"
            label={"Address"}
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>

      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Shipping options" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <Controller
            control={control}
            name="shipping"
            render={({
              field: { value, onChange },
              fieldState: { invalid, error },
            }) => (
              <View>
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
                <RadioButton.Group
                  value={value}
                  onValueChange={(value) => onChange(value)}
                >
                  <RadioButton.Item label="Free" value="free" />
                  <RadioButton.Item label="Fast" value="fast" />
                  <RadioButton.Item label="Same day" value="same_day" />
                </RadioButton.Group>
              </View>
            )}
          />
        </Card.Content>
      </Card>

      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Next
      </Button>
    </ScrollView>
  );
}
