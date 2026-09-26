// MSSV: 23734591
// Họ tên: Đặng Võ Thế Thịnh
// Week 4 - Giờ 5: Bottom Tab Layout & Cart Screen

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "./screens/HomeScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { CartScreen } from "./screens/CartScreen";
import { BottomTabBar, TabKey } from "./components/BottomTabBar";
import { BOOKS } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const selectedBook =
    BOOKS.find((book) => book.id === selectedBookId) ?? null;

  const handleTabChange = (tab: TabKey) => {
    setSelectedBookId(null);
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (selectedBook) {
      return (
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBookId(null)}
          onAddToCart={() => setCartCount((n) => n + 1)}
        />
      );
    }

    if (activeTab === "home") {
      return (
        <HomeScreen
          cartCount={cartCount}
          onPressBook={(id) => setSelectedBookId(id)}
          onPressCart={() => setActiveTab("cart")}
        />
      );
    }

    if (activeTab === "cart") {
      return <CartScreen />;
    }

    return (
      <View style={styles.placeholder}>
        <Text style={styles.placeholderTitle}>
          {activeTab === "categories" ? "Danh mục" : "Tài khoản"}
        </Text>
        <Text style={styles.placeholderText}>
          Giao diện này dùng để minh họa bố cục Tab Bar.
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>{renderContent()}</View>

      {!selectedBook && (
        <BottomTabBar
          activeTab={activeTab}
          onChange={handleTabChange}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
  },
  placeholderText: {
    marginTop: 8,
    textAlign: "center",
    color: "#64748B",
  },
});
