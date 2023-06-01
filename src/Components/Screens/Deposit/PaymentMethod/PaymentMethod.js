import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../Utils/color";
import { AntDesign } from "@expo/vector-icons";
import { String } from "../../../Utils/String";
const { width } = Dimensions.get("window");
const itemWidth = width * 0.6;
const data = [
  {
    id: 1,
    title: "Bank Transfer",
    image: require("../../../../assets/bank.png"),
  },
  {
    id: 2,
    title: "Paytm Wallet",
    image: require("../../../../assets/paytm.png"),
  },
  { id: 3, title: "UPI", image: require("../../../../assets/google_pay.png") },
  {
    id: 4,
    title: "Phone Pe",
    image: require("../../../../assets/upi.png"),
  },
  {
    id: 5,
    title: "Cash Deposit",
    image: require("../../../../assets/cashDeposit.png"),
  },
  { id: 6, title: "Other", image: require("../../../../assets/bank.png") },
];

const selectPaymentMethod = (item) => {
  console.log(`select payment method :${item.title}`);
};
const PaymentMethod = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => selectPaymentMethod(item)}
      >
        <View
          style={{
            backgroundColor: colors.green,
            marginTop: 20,
            width: "70%",
            height: 90,
            borderWidth: 1,
            margin: 5,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={item.image}
            style={styles.itemImage}
            resizeMode="contain"
          />
          <Text style={styles.item}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.green,
          height: "15%",
          borderBottomLeftRadius: 80,
          flexDirection: "row",
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ right: 70 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="leftcircle" size={32} color={colors.peach} />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            // left: 40,
            // top: 10,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 15,
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            {String.PaymentMethod}
          </Text>
        </View>
      </View>
      <FlatList
        numColumns={3}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.peach,
  },
  item: {
    color: colors.white,
    // padding: 2,
    // margin: 2,

    fontWeight: "bold",
  },
  itemImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default PaymentMethod;
