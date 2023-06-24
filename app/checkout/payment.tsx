import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function PaymentDetails() {
  const router = useRouter();

  const nextPage = () => {
    //* Submit logic

    // TODO: link not navigating home!
    router.push("/");
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Payment details</Text>

      <Button onPress={nextPage} mode="contained">
        Submit
      </Button>
    </View>
  );
}
