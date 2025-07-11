import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  return (
    <>
      <SafeAreaView
        className="flex-1 items-center w-screen h-screen bg-mainGreen"
        edges={["top"]}
      >
        <Text
          style={{
            fontSize: 85,
            marginTop: 50,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Fidge!
        </Text>

        <View id="btn-container" className="w-screen items-center">
          <View className=" bg-white w-2/3 h-96 my-16"></View>
          <Link href="/(tabs)/(register)/login" asChild>
            <TouchableOpacity className="rounded-3xl bg-white px-4 py-5 w-2/3 items-center">
              <Text className="text-center text-3xl font-bold color-textGreen">
                Login
              </Text>
            </TouchableOpacity>
          </Link>
          <Text style={{ fontSize: 15, marginTop: 10, color: "white" }}>
            {"Don't have an account?"}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                marginTop: 7,
                fontWeight: "semibold",
                color: "white",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Register;
