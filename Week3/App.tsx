import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from './components/Header';
import { CategoryChips } from './components/CategoryChips';
import { BookGrid } from './components/BookGrid';
import { FloatingCartButton } from './components/FloatingCartButton';
import { BOOKS } from './data';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleBookPress = (id: number) => {
    setCartCount((count) => count + 1);
    const book = BOOKS.find((item) => item.id === id);
    if (book) {
      Alert.alert('BookStore', `Đã thêm "${book.title}" vào giỏ hàng.`);
    }
  };

  const handleCartPress = () => {
    Alert.alert('Giỏ hàng', `Bạn đang có ${cartCount} sản phẩm trong giỏ.`);
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      {/* 1. Header cố định trên cùng */}
      <Header />

      {/* 2. ScrollView chứa Chips + Grid */}
      <ScrollView contentContainerStyle={styles.content}>
        <CategoryChips />
        <BookGrid books={BOOKS} onPressBook={handleBookPress} />
      </ScrollView>

      {/* 3. Nút giỏ nổi — NGOÀI ScrollView */}
      <FloatingCartButton count={cartCount} onPress={handleCartPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
    paddingBottom: 100,
    gap: 16,
  },
});
