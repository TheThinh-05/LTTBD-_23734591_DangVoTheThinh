# LAB - BookStore Online: Layout với Flexbox

**MSSV:** 23734591  
**Họ tên:** Đặng Võ Thế Thịnh  
**Môn:** Lập trình thiết bị di động bằng TypeScript / React Native

## Bài tổng hợp

Project này ráp 5 component theo đúng yêu cầu bài tập:

- `components/Header.tsx` — lấy từ `gio1`
- `components/CategoryChips.tsx` — lấy từ `gio2`
- `components/BookGrid.tsx` — lấy từ `gio2`
- `components/DiscountBadge.tsx` — lấy từ `gio2`
- `components/FloatingCartButton.tsx` — lấy từ `gio3`
- `data.ts` — dữ liệu dùng chung
- `App.tsx` — màn hình tổng hợp mới

Thứ tự giao diện: Header → Category Chips → Book Grid (có Badge) → Floating Cart Button.

## Chạy project

```bash
npm install
npm start
```

Sau đó nhấn `a` để chạy Android, `w` để chạy Web hoặc quét QR bằng Expo Go.

## Kiểm tra TypeScript

```bash
npx tsc --noEmit
```

## Lưu ý

Không đưa `node_modules`, `.expo` hoặc thư mục `.git` vào GitHub. Chỉ cần `npm install` trên máy sau khi clone project.
