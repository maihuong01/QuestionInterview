const myPromise = new Promise((resolve, reject) => {
  console.log('Promise executor'); // Thực thi ngay lập tức
  resolve('Promise resolved');
});

myPromise
  .then((value) => {
    console.log(value); // Thực thi sau khi promise được resolve
  })
  .catch((error) => {
    console.log(error);
  });

setTimeout(() => {
  console.log('setTimeout'); // Thực thi sau khi tất cả các microtask hoàn thành
}, 0);

setInterval(() => {
  console.log('setInterval'); // Thực thi định kỳ sau mỗi khoảng thời gian nhất định
}, 1000);

if (typeof setImmediate === 'function') {
  setImmediate(() => {
    console.log('setImmediate'); // Thực thi ngay sau khi event loop hoàn thành các tác vụ hiện tại (chỉ có trong Node.js)
  });
}

console.log('Synchronous log');
