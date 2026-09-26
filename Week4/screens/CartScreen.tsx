import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { CART_ITEMS } from "../data";

const totalPrice = CART_ITEMS.reduce(
  (sum, item) => sum + item.book.price * item.quantity,
  0
);

export function CartScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Giỏ hàng</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {CART_ITEMS.map((item) => (
          <View key={item.book.id} style={styles.row}>
            <Image source={{ uri: item.book.cover }} style={styles.image} />

            <View style={styles.nameColumn}>
              <Text style={styles.bookTitle} numberOfLines={2}>
                {item.book.title}
              </Text>
              <Text style={styles.author}>{item.book.author}</Text>
            </View>

            <View style={styles.quantityColumn}>
              <Text style={styles.quantity}>x{item.quantity}</Text>
              <Text style={styles.price}>
                {(item.book.price * item.quantity).toLocaleString()} đ
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.summary}>
        <View>
          <Text style={styles.totalLabel}>Tổng tiền</Text>
          <Text style={styles.totalPrice}>
            {totalPrice.toLocaleString()} đ
          </Text>
        </View>

        <Pressable
          style={styles.checkout}
          onPress={() => console.log("Thanh toán")}
        >
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 12,
  },
  scroll: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    paddingBottom: 20,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
    gap: 10,
  },
  image: {
    width: 56,
    height: 76,
    borderRadius: 7,
  },
  nameColumn: {
    flex: 1,
    justifyContent: "center",
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
  author: {
    marginTop: 4,
    fontSize: 12,
    color: "#64748B",
  },
  quantityColumn: {
    width: 95,
    alignItems: "flex-end",
  },
  quantity: {
    fontSize: 13,
    color: "#475569",
    marginBottom: 5,
  },
  price: {
    fontSize: 13,
    fontWeight: "700",
    color: "#4338CA",
  },
  summary: {
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  totalLabel: {
    fontSize: 12,
    color: "#64748B",
  },
  totalPrice: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
  },
  checkout: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#4338CA",
  },
  checkoutText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
