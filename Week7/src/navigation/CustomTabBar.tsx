import React from "react";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabBar, TabItem } from "../components/TabBar";
import { useCart } from "../store/hooks";

const EMOJI: Record<string, string> = { Home: "🏠", Categories: "🗂️", Cart: "🛒", Account: "👤" };

// Nối Tab Bar tự dựng với React Navigation: nhận { state, descriptors, navigation }
export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { totalQuantity } = useCart();

  // BT7.1a: biến state.routes thành mảng TabItem cho TabBar vẽ
  const items: TabItem[] = state.routes.map((route) => ({
    key: route.key,
    label: descriptors[route.key].options.title ?? route.name,
    emoji: EMOJI[route.name] ?? "•",
    // BT7.3e: badge = tổng số lượng trong giỏ (chỉ cho tab Cart)
    badge: route.name === "Cart" ? totalQuantity : undefined,
  }));

  // BT7.1a: phát sự kiện tabPress, rồi chuyển màn nếu tab chưa được focus
  const onPress = (key: string) => {
    const route = state.routes.find((r) => r.key === key);
    if (!route) return;
    const isFocused = state.routes[state.index].key === key;
    const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return <TabBar items={items} activeKey={state.routes[state.index].key} onPress={onPress} />;
}
