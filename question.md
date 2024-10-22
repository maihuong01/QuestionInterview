\*\*Avoid memory leaks in large Reactjs applications

<!-- Những cách để tránh rò rỉ bộ nhớ trong các ứng dụng React lớn: chi ong lau lau -->

1. Dọn dẹp hiệu ứng (useEffect)
   Sử dụng hàm dọn dẹp (cleanup function) trong useEffect để hủy bỏ các subscription hoặc các tác vụ không đồng bộ khi component bị unmount.
2. Hủy bỏ các timer:
   Hủy bỏ các timer được tạo bằng setTimeout hoặc setInterval khi component bị unmount.
3. Hủy bỏ các request không đồng bộ:
   Sử dụng cờ (flag) để hủy bỏ các request không đồng bộ khi component bị unmount.
4. Sử dụng useRef để giữ các tham chiếu:
   Sử dụng useRef để giữ các tham chiếu đến các đối tượng hoặc hàm mà không gây ra re-render không cần thiết.
5. Tránh lưu trữ dữ liệu lớn trong state:
   Tránh lưu trữ các đối tượng hoặc mảng lớn trong state nếu không cần thiết. Sử dụng các kỹ thuật tối ưu hóa như pagination hoặc infinite scrolling để giảm lượng dữ liệu cần lưu trữ.
6. Sử dụng React.memo và useCallback:
   Sử dụng React.memo để ngăn chặn việc render lại không cần thiết của các component con.
   Sử dụng useCallback để giữ các hàm không thay đổi giữa các lần render.

7. Sử dụng useEffect đúng cách:
   Đảm bảo rằng các dependency của useEffect được khai báo đúng cách để tránh việc tạo ra các hiệu ứng phụ không cần thiết.

\*\*Explain about lazy loading and code splitting in reactjs

1. Lazy Loading (tải lười) là một kỹ thuật tối ưu hóa hiệu suất trong các ứng dụng web, trong đó các thành phần hoặc tài nguyên chỉ được tải khi chúng thực sự cần thiết. Điều này giúp giảm thời gian tải ban đầu của trang web và cải thiện trải nghiệm người dùng.

2. Code Splitting (chia nhỏ mã) là một kỹ thuật tối ưu hóa khác, trong đó mã nguồn của ứng dụng được chia thành các phần nhỏ hơn và chỉ tải các phần cần thiết khi người dùng tương tác với ứng dụng. Điều này giúp giảm kích thước của bundle ban đầu và cải thiện thời gian tải trang.

3. Lợi ích của Lazy Loading và Code Splitting
   Cải thiện hiệu suất: Giảm kích thước của bundle ban đầu, giúp trang web tải nhanh hơn.
   Tối ưu hóa tài nguyên: Chỉ tải các tài nguyên khi cần thiết, giảm tải cho server và client.
   Trải nghiệm người dùng tốt hơn: Giảm thời gian chờ đợi và tăng tốc độ phản hồi của ứng dụng.

\*\*When component is re render too often, what can you do?

Khi thành phần được kết xuất lại quá thường xuyên, bạn có thể làm gì?

1. Sử dụng React.memo
2. Sử dụng useCallback và useMemo
3. Tránh thay đổi state không cần thiết
   Đảm bảo rằng bạn chỉ thay đổi state khi cần thiết và tránh việc thay đổi state với cùng một giá trị.
4. Tối ưu hóa các dependency của useEffect
5. Tránh inline function và object:
   Tránh tạo lại các hàm và object trong render method, vì điều này sẽ tạo ra các props mới và gây ra render lại không cần thiết.
6. Tránh truyền props qua nhiều component

\*\*image and asset optimization

tối ưu hóa hình ảnh và nội dung

1. Sử dụng định dạng hình ảnh tối ưu:

Sử dụng các định dạng hình ảnh hiện đại như WebP, JPEG 2000, hoặc AVIF để giảm kích thước tệp mà không làm giảm chất lượng hình ảnh.

2. Nén hình ảnh:
   Sử dụng các công cụ nén hình ảnh như ImageOptim, TinyPNG, hoặc Squoosh để giảm kích thước tệp hình ảnh trước khi đưa vào ứng dụng.
3. Lazy Loading hình ảnh:
   Sử dụng kỹ thuật lazy loading để chỉ tải hình ảnh khi chúng xuất hiện trong viewport. Điều này giúp giảm thời gian tải ban đầu của trang.
4. Sử dụng các thư viện tối ưu hóa hình ảnh:
   Sử dụng các thư viện như react-lazyload hoặc react-intersection-observer để dễ dàng triển khai lazy loading cho hình ảnh và các thành phần khác.

5.Sử dụng CDN (Content Delivery Network):

Sử dụng CDN để phân phối hình ảnh và nội dung tĩnh từ các máy chủ gần người dùng nhất, giúp giảm thời gian tải.

6. Tối ưu hóa các tệp CSS và JavaScript:

Sử dụng các công cụ như Webpack, Parcel, hoặc Rollup để nén và tối ưu hóa các tệp CSS và JavaScript.
Sử dụng kỹ thuật code splitting để chỉ tải các phần cần thiết của ứng dụng.

7. Sử dụng các công cụ phân tích và tối ưu hóa:
   Sử dụng các công cụ như Lighthouse, WebPageTest, hoặc PageSpeed Insights để phân tích hiệu suất trang web và nhận các gợi ý tối ưu hóa.

\*\* how would you set up real-time communication between the client and server using socket
setup socket.io

\*\*explain how socket io handles events, and what kinds of events are commonly used in chat app
giải thích cách socket io xử lý các sự kiện và loại sự kiện nào thường được sử dụng trong ứng dụng trò chuyện

Trong một ứng dụng trò chuyện, các sự kiện thường được sử dụng bao gồm:

1. connection:

Được kích hoạt khi một client kết nối tới server. Thường được sử dụng để thông báo rằng một người dùng mới đã tham gia phòng trò chuyện.

2. disconnect:

Được kích hoạt khi một client ngắt kết nối. Thường được sử dụng để thông báo rằng một người dùng đã rời khỏi phòng trò chuyện.
message:

Được sử dụng để gửi và nhận tin nhắn giữa các client. Khi một client gửi tin nhắn, server sẽ phát lại tin nhắn đó tới tất cả các client khác.

3. typing:

Được sử dụng để thông báo rằng một người dùng đang gõ tin nhắn. Thường được sử dụng để hiển thị trạng thái "đang gõ" cho các người dùng khác.

4. stopTyping:

Được sử dụng để thông báo rằng một người dùng đã ngừng gõ tin nhắn. Thường được sử dụng để ẩn trạng thái "đang gõ" cho các người dùng khác.

5. joinRoom và leaveRoom:

Được sử dụng để quản lý việc tham gia và rời khỏi các phòng trò chuyện. Khi một người dùng tham gia hoặc rời khỏi phòng, server sẽ phát lại sự kiện này tới tất cả các người dùng trong phòng.

\*\* how would you handle real time content delivery in case loss of network
bạn sẽ xử lý việc phân phối nội dung theo thời gian thực như thế nào trong trường hợp mất mạng

1. Xử lý mất kết nối và tự động kết nối lại
   Socket.IO cung cấp cơ chế tự động kết nối lại khi mất kết nối. Bạn có thể cấu hình các tùy chọn kết nối lại để đảm bảo rằng client sẽ cố gắng kết nối lại với server khi mạng được khôi phục.

2. Lưu trữ tạm thời các tin nhắn chưa gửi
   Bạn có thể lưu trữ tạm thời các tin nhắn chưa gửi trong local storage hoặc state của ứng dụng và gửi lại chúng khi kết nối được khôi phục.

How would you implement authentication in real-time chat app?
Bạn sẽ triển khai xác thực trong ứng dụng trò chuyện thời gian thực như thế nào?

JWT


**CSS: What is your strategy when implement a responsive web design (Mobile first vs Desktop first)?
CSS: Chiến lược của bạn khi triển khai thiết kế web đáp ứng (Di động trước và Máy tính để bàn trước) là gì?


** Sự khác biệt giữa các đơn vị em, rem, vw, vh và %:
1. em:

Đơn vị này dựa trên kích thước font của phần tử cha gần nhất.
Ví dụ: Nếu phần tử cha có font-size là 16px, thì 1em = 16px.
2. rem:

Đơn vị này dựa trên kích thước font của phần tử gốc (root element), thường là <html>.
Ví dụ: Nếu <html> có font-size là 16px, thì 1rem = 16px.
3. vw:

Đơn vị này dựa trên 1% của chiều rộng viewport (khung nhìn).
Ví dụ: 1vw = 1% chiều rộng của viewport.
4. vh:

Đơn vị này dựa trên 1% của chiều cao viewport.
Ví dụ: 1vh = 1% chiều cao của viewport.
5. %:

<!-- Đơn vị này dựa trên kích thước của phần tử cha. -->
<!-- Ví dụ: Nếu phần tử cha có chiều rộng là 100px, thì 50% = 50px. -->