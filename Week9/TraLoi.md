# BÁO CÁO BÀI TẬP THỰC HÀNH REACT NATIVE - BUỔI 9
## Môn học: Lập trình Thiết bị Di động (IUH)
**Chủ đề:** BookStore - Thanh toán, Đơn hàng & Thông báo  

---

### Câu 1: Giá trị dẫn xuất (Derived State)
**Câu hỏi:** Ở Checkout, tại sao `errors` và `valid` được tính trực tiếp mỗi lần render mà không dùng `useState` riêng? Nếu dùng `useState` thì dễ sai ở chỗ nào?

**Trả lời:**
- `errors` và `valid` là các giá trị dẫn xuất (derived state) có thể suy ra hoàn toàn từ dữ liệu form hiện tại (`name`, `phone`, `address`) và danh sách `items` trong giỏ hàng. Việc tính toán trực tiếp trong quá trình render đảm bảo tính nhất quán tuyệt đối (single source of truth), mã nguồn tinh gọn và không bao giờ bị lệch nhịp giữa input và trạng thái kiểm tra.
- Nếu lưu bằng `useState`, ta phải viết logic đồng bộ hóa (hoặc dùng `useEffect`) mỗi khi một trong các state thay đổi. Khi đó rất dễ xảy ra lỗi:
  1. Trạng thái bị lệch 1 nhịp render (do bất đồng bộ của `setState`).
  2. Bỏ quên việc cập nhật tại một nhánh logic nào đó khiến nút bấm mở/khoá sai hoặc thông báo lỗi sai lệch.
  3. Gây re-render thừa thãi làm giảm hiệu năng của ứng dụng.

---

### Câu 2: Thứ tự gọi (Order of Operations)
**Câu hỏi:** Trong `submit`, nếu để `clear()` chạy trước `await createOrder(...)` thì khi mất mạng người dùng gặp chuyện gì? Vì sao đặt `clear()` ngay sau `createOrder` là đúng?

**Trả lời:**
- Nếu gọi `clear()` trước `await createOrder(...)`, giỏ hàng sẽ bị xoá ngay lập tức (cả trong Redux store và AsyncStorage). Khi gặp sự cố mạng hoặc server trả về lỗi, API `createOrder` thất bại nhưng toàn bộ sản phẩm khách hàng đã chọn trước đó đều đã bị mất trắng, gây ức chế lớn cho trải nghiệm người dùng.
- Đặt `clear()` ngay sau `await createOrder(...)` là hoàn toàn chính xác theo nguyên tắc **Pessimistic Update**: chỉ khi server phản hồi thành công (mã 201 Created và trả về thông tin đơn hàng), ta mới dọn sạch giỏ hàng. Nếu có lỗi mạng hay lỗi hệ thống xảy ra, khối `catch` sẽ kích hoạt giữ nguyên vẹn giỏ hàng và hiển thị thông báo lỗi để người dùng an tâm nhấn nút gửi lại.

---

### Câu 3: PUT hay PATCH
**Câu hỏi:** Nếu dùng `PUT /users/1` với `{ name, phone }` thì `db.json` còn lại gì ở user đó? Vì sao bài này chọn `PATCH`?

**Trả lời:**
- Phương thức `PUT` theo chuẩn RESTful mang ngữ nghĩa **thay thế toàn bộ** (replace entire resource). Do đó, nếu gửi `PUT /users/1` với payload `{ name, phone }`, `json-server` sẽ ghi đè toàn bộ đối tượng của user đó, khiến user chỉ còn lại `{ id: 1, name: "...", phone: "..." }` và làm **mất hoàn toàn** các trường quan trọng như `email`, `password`, `avatar`...
- Bài này chọn `PATCH` vì `PATCH` mang ngữ nghĩa **cập nhật từng phần** (partial update). Server chỉ thay đổi hoặc bổ sung hai trường `name` và `phone`, trong khi giữ nguyên các thông tin tài khoản khác trong `db.json`.

---

### Câu 4: Cập nhật lạc quan (Optimistic UI Update)
**Câu hỏi:** Ở màn Thông báo, nếu bỏ đoạn hoàn lại `read: false` trong `catch` thì xảy ra lỗi gì khi mất mạng? Hãy nêu một chức năng khác trong app nên dùng cách làm này và một chức năng không nên (ví dụ thanh toán).

**Trả lời:**
- Nếu bỏ đoạn rollback `read: false` trong `catch`, khi mất mạng giao diện trên màn hình sẽ hiển thị thông báo như thể "đã đọc" (chuyển sang màu trắng, mất chấm đỏ), nhưng thực tế server chưa ghi nhận `read: true`. Khi người dùng kéo làm mới hoặc mở lại app, thông báo lại trở về trạng thái "chưa đọc", gây ra sự không nhất quán dữ liệu và khó hiểu cho người dùng.
- **Chức năng nên dùng Cập nhật lạc quan:** Nút "Thả tim / Yêu thích sách" (Wishlist / Like). Đây là thao tác nhỏ, tần suất cao, tỉ lệ lỗi thấp; người dùng cần phản hồi tức thì về mặt thị giác mà không phải đợi độ trễ mạng.
- **Chức năng KHÔNG NÊN dùng Cập nhật lạc quan:** Chức năng "Thanh toán / Đặt hàng" hoặc "Rút tiền / Nạp tiền". Các thao tác nhạy cảm liên quan đến giao dịch và tài chính bắt buộc phải dùng cập nhật bi quan (Pessimistic UI): chờ xác nhận thành công tuyệt đối từ server trước khi báo hoàn tất.

---

### Câu 5: Code bổ sung - Bộ lọc trạng thái ở màn Đơn hàng
**Câu hỏi:** Thêm bộ lọc trạng thái ở màn Đơn hàng (Tất cả / Chờ xác nhận / Đang giao / Hoàn tất / Đã huỷ) bằng state và một chỗ sửa trong dữ liệu truyền cho FlatList.

**Giải pháp Code:**
1. Thêm kiểu và state lưu trạng thái đang lọc:
```typescript
type FilterStatus = "all" | OrderStatus;
const [statusFilter, setStatusFilter] = useState<FilterStatus>("all");

const FILTER_TABS: { key: FilterStatus; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "pending", label: "Chờ xác nhận" },
  { key: "shipping", label: "Đang giao" },
  { key: "completed", label: "Hoàn tất" },
  { key: "cancelled", label: "Đã hủy" },
];
```

2. Lọc dữ liệu truyền vào `FlatList`:
```typescript
const filteredOrders = useMemo(() => {
  if (statusFilter === "all") return orders;
  return orders.filter((o) => o.status === statusFilter);
}, [orders, statusFilter]);
```

3. Giao diện hàng nút chọn danh mục trạng thái (Filter Chips bar):
```tsx
<View style={{ flexDirection: "row", paddingHorizontal: 12, paddingVertical: 8, gap: 8 }}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
    {FILTER_TABS.map((tab) => {
      const active = statusFilter === tab.key;
      return (
        <Pressable
          key={tab.key}
          onPress={() => setStatusFilter(tab.key)}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 999,
            backgroundColor: active ? colors.indigo : "#E5E7EB",
          }}
        >
          <Text style={{ color: active ? "#fff" : colors.text, fontWeight: "700", fontSize: 13 }}>
            {tab.label}
          </Text>
        </Pressable>
      );
    })}
  </ScrollView>
</View>
```
Dữ liệu truyền vào `FlatList` đổi từ `data={orders}` thành `data={filteredOrders}`.
