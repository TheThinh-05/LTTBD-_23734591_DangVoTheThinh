# Week 4 - Layout với Flexbox - BookStore Online

**MSSV:** 23734591  
**Họ tên:** Đặng Võ Thế Thịnh

## Nội dung
- Bài tập 1: Home Screen hoàn chỉnh: Header cố định + Category Chips + Book Grid + Floating Cart Button.
- Bài tập 2: Book Detail Screen: ảnh bìa, thông tin sách, mô tả cuộn được và thanh Thêm vào giỏ cố định.

## Chạy project
```bash
npm install
npx expo start --web
```


## Week 4 - Giờ 5
- `components/BottomTabBar.tsx`: Bottom Tab Bar 4 mục, mỗi mục `flex: 1`.
- `screens/CartScreen.tsx`: Cart Screen với ScrollView, danh sách sản phẩm, tổng tiền và nút Thanh toán cố định.
- `App.tsx`: ghép Home/Detail/Cart và Tab Bar, không dùng thư viện navigation.

## Đã sửa lỗi Runtime
`FloatingCartButton.tsx` đã được sửa để nhận `bottom` qua props và áp dụng bằng
`style={[styles.button, { bottom }]}`. Vì vậy sẽ không còn lỗi
`ReferenceError: bottom is not defined`.

Chạy project bằng:
```powershell
npm.cmd install
npx.cmd expo start --web
```
