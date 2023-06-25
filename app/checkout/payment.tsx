import { useRouter } from "expo-router";
import { View, ScrollView } from "react-native";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  Checkbox,
} from "react-native-paper";

export default function PaymentDetails() {
  const theme = useTheme();
  const router = useRouter();

  const nextPage = () => {
    //* Submit logic

    // TODO: link not navigating home!
    router.push("/");
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
          <TextInput
            label={"Card number"}
            placeholder="4242 4242 4242 4242"
            style={{ backgroundColor: theme.colors.background }}
          />
          <View style={{ flexDirection: "row", gap: 15 }}>
            <TextInput
              label={"Expiration date"}
              placeholder="mm/yy"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <TextInput
              label={"Security code"}
              placeholder="123"
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>

          <Checkbox.Item label="Save payment information" status="checked" />
        </Card.Content>
      </Card>

      <Button onPress={nextPage} mode="contained">
        Submit
      </Button>
    </ScrollView>
  );
}
