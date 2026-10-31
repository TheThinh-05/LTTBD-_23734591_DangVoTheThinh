# Trả lời câu hỏi bổ sung — Buổi 7 (BookStore)

## Câu 1. Cấu trúc điều hướng
`BookDetail` được đăng ký ở **Stack ngoài cùng** nên khi mở nó sẽ phủ lên toàn bộ màn hình, che luôn Tab Bar, và Native Stack tự cho sẵn nút ← để quay lại đúng vị trí cũ của Home. Nếu đặt vào **Tab**, `BookDetail` sẽ trở thành một tab ngang hàng với Home / Danh mục / Giỏ hàng / Tài khoản: Tab Bar vẫn hiện, phải tự thêm một mục tab không cần thiết cho nó, và không có nút ← nên người dùng chỉ thoát ra bằng cách bấm sang tab khác. Ngoài ra truyền `bookId` vào một tab cố định cũng kém tự nhiên hơn việc "đẩy" một màn chi tiết lên stack.

## Câu 2. Redux
Redux Toolkit dùng **Immer**: reducer nhận một *bản nháp* (draft) của state, nên `state.items.push(...)` thực chất chỉ sửa bản nháp; sau khi reducer chạy xong, Immer so sánh và tạo ra một state mới bất biến, còn state gốc không hề bị đụng tới. Nếu bỏ `useMemo` trong `useCart` thì **kết quả hiển thị không đổi** (tổng vẫn đúng) vì `reduce` vẫn chạy ra cùng một số. Hậu quả chỉ là hiệu năng: tổng bị tính lại ở *mọi lần render* dù `items` không đổi, giỏ càng lớn càng tốn. `useMemo` là tối ưu chứ không quyết định đúng/sai.

## Câu 3. Promise.all
Nếu `getCategories()` lỗi còn `getBooks()` thành công thì `Promise.all` **bị reject cả nhóm**, đi vào `catch` và Home hiện `ErrorView`, dù dữ liệu sách thực ra đã tải được. Dùng `Promise.allSettled` thì cả hai request đều chạy xong và trả về trạng thái từng cái (`fulfilled` / `rejected`), nên ta vẫn hiển thị được danh sách sách và chỉ thiếu hàng chip danh mục. Cái giá phải trả: phải tự kiểm tra và xử lý lỗi cho **từng phần** (ví dụ báo nhẹ "không tải được danh mục"), code dài hơn, và giao diện ở trạng thái "tải một nửa" phức tạp hơn để thiết kế.

## Câu 4. Debounce
Nếu đặt `setTimeout` thẳng trong `onChangeText` thì mỗi lần gõ phím tạo một timer riêng và **không timer nào bị huỷ**, nên n phím sẽ gây n lần lọc (chỉ bị trễ chứ không được gộp lại) — đúng thứ debounce cần tránh. Trong `useEffect`, hàm dọn dẹp `return () => clearTimeout(t)` chạy trước lần effect kế tiếp nên **huỷ timer cũ**, chỉ lần gõ cuối cùng được áp dụng. Nó cũng huỷ timer khi component bị gỡ (unmount), tránh gọi `setDebounced` lên một component không còn tồn tại (cảnh báo/lỗi cập nhật state sau unmount và rò rỉ bộ nhớ).

## Câu 5. Code bổ sung — sắp xếp giá tăng/giảm
Thêm một state `sort` và sửa đúng một chỗ là `visibleBooks` trong `HomeScreen.tsx`. Sắp xếp trên **bản sao** (`[...filtered]`) vì `sort()` làm thay đổi mảng gốc.

```tsx
type SortOrder = "asc" | "desc" | null;
const [sort, setSort] = useState<SortOrder>(null);

const visibleBooks = useMemo(() => {
  const filtered = filterBooks(books, { keyword: debouncedKeyword, categoryId, priceRange });
  if (sort === null) return filtered;
  return [...filtered].sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
}, [books, debouncedKeyword, categoryId, priceRange, sort]);
```

Giao diện: hai nút "Giá tăng dần" / "Giá giảm dần" ở hàng "Sắp xếp:" dưới bộ lọc giá; bấm lần nữa để bỏ sắp xếp.

> **Ảnh chụp màn hình:** (chèn ảnh Home đang sắp xếp vào đây khi nộp)
