# Trả lời câu hỏi bổ sung – Buổi 8 BookStore

## 1. Cờ `ready`
Ở lần render đầu, giỏ hàng trong Redux store còn là mảng rỗng, còn dữ liệu cũ vẫn nằm trong AsyncStorage và việc đọc là bất đồng bộ nên chưa xong. Nếu `useAutoPersist` bỏ điều kiện `ready`, effect chạy ngay sau render đầu và ghi `[]` đè lên dữ liệu đã lưu, trước khi `loadJSON` kịp trả kết quả. Khi dữ liệu đọc xong thì dữ liệu cũ đã mất, giỏ hàng luôn trống sau khi mở lại app. Cờ `ready` chỉ bật sau khi đọc xong và đã `dispatch(hydrateCart(...))`, nên chỉ những lần ghi sau đó mới thật sự ghi.

## 2. Token giả
Hai điểm không an toàn: (1) mật khẩu nằm sẵn trong `db.json` (dạng thô) và được app tự so sánh ở phía client, ai mở API cũng đọc được mật khẩu của mọi người; (2) token do app tự tạo nên ai cũng có thể làm giả, server không có cách xác minh.
Hệ thống thật: server kiểm tra mật khẩu (đã băm bằng bcrypt/argon2) và cấp token có chữ ký, có thời hạn (JWT hoặc session token). Phía app nên lưu token bằng `expo-secure-store` (Keychain trên iOS, Keystore trên Android) thay vì AsyncStorage vì AsyncStorage lưu chữ thô, không mã hóa.

## 3. Hai effect trong `CartItemRow`
Nếu xóa effect `setQty(item.quantity)` thì state cục bộ `qty` chỉ nhận giá trị `item.quantity` của lần render đầu và không cập nhật theo store nữa. Số hiển thị trên nút sẽ lệch store khi store đổi từ nơi khác, ví dụ: giỏ được nạp lại từ AsyncStorage sau khi mở app (dòng đã render với số lượng mặc định), hoặc xóa sản phẩm rồi thêm lại (component được tái sử dụng với `quantity` mới), hoặc bấm "Thêm vào giỏ" ở trang chi tiết khiến số lượng trong store tăng. Khi đó nút hiện số cũ còn tổng tiền theo số mới.

## 4. Một nguồn state
Nếu mỗi nơi tự giữ `useState` riêng thì mỗi `HeartButton` là một biến độc lập: thả tim ở lưới sách thì nút trong trang chi tiết (một component khác, state khởi tạo riêng) vẫn là tim trắng, quay lại lưới cũng có thể mất tim khi component bị unmount; màn Yêu thích cũng không biết sách nào đã thả tim. Với store (Redux `wishlistSlice`), mọi `HeartButton` đều đọc cùng `ids` qua `useWishlist()`, nên một lần `toggle` làm tất cả nơi hiển thị cập nhật đồng thời; thêm nữa `usePersistence` chỉ cần lưu một mảng `ids` duy nhất.

## 5. Code bổ sung: nút 👁 hiện/ẩn mật khẩu
Trong `src/screens/LoginScreen.tsx`:

```tsx
const [showPassword, setShowPassword] = useState(false);

<View>
  <FormField label="Mật khẩu" value={password} onChangeText={setPassword}
    error={errors.password} secureTextEntry={!showPassword} style={{ paddingRight: 44 }} />
  <Pressable style={styles.eye} onPress={() => setShowPassword((v) => !v)} hitSlop={8}
    accessibilityLabel={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
    <Text style={{ fontSize: 18, opacity: showPassword ? 1 : 0.5 }}>👁</Text>
  </Pressable>
</View>
// styles: eye: { position: "absolute", right: 12, top: 32 }
```
(Ảnh chụp màn hình: chạy app rồi chụp màn Đăng nhập khi bấm 👁 để dán vào bài nộp.)
