import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export type TabKey = "home" | "categories" | "cart" | "account";

type Props = {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
};

const TABS: { key: TabKey; icon: string; label: string }[] = [
  { key: "home", icon: "⌂", label: "Trang chủ" },
  { key: "categories", icon: "☰", label: "Danh mục" },
  { key: "cart", icon: "🛒", label: "Giỏ hàng" },
  { key: "account", icon: "●", label: "Tài khoản" },
];

export function BottomTabBar({ activeTab, onChange }: Props) {
  return (
    <View style={styles.bar}>
      {TABS.map((tab) => {
        const active = tab.key === activeTab;

        return (
          <Pressable
            key={tab.key}
            style={styles.item}
            onPress={() => onChange(tab.key)}
          >
            <Text style={[styles.icon, active && styles.active]}>
              {tab.icon}
            </Text>
            <Text style={[styles.label, active && styles.active]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  icon: {
    fontSize: 21,
    color: "#64748B",
  },
  label: {
    fontSize: 11,
    color: "#64748B",
  },
  active: {
    color: "#4338CA",
    fontWeight: "700",
  },
});
