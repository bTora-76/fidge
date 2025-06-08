import images from "";
import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl text-blue-600 font-bold">Fidge</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/items/1">Item1</Link>
    </View>
  );
}
