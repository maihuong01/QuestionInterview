\*\*Avoid memory leaks in large Reactjs applications

Những cách để tránh rò rỉ bộ nhớ trong các ứng dụng React lớn:

1. Dọn dẹp hiệu ứng (useEffect)
2. Hủy bỏ các thao tác bất đồng bộ
3. Sử dụng useRef cho các biến có thể thay đổi
4. Tránh định nghĩa hàm trong render
5. Giới hạn các Event Listener
6. Theo dõi các phụ thuộc
7. Phân tích và theo dõi hiệu suất
8. Tránh lưu trữ các đối tượng lớn trong state
9. Sử dụng lazy loading cho các component nặng
10. Sử dụng React.memo và PureComponent
