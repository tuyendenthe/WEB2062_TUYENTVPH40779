(function () {
    const header = document.querySelector('h1');
    const div = document.querySelector('div');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
      header.style.opacity = '50%';
      div.style.opacity = '50%';
      div.style.backgroundColor = 'yellow';
    });
  })();
//   đây là 1 hàm tự gọi ngay lập tức bằng cách trình duyệt đọc đến hàm đó 
//   hàm const header để gọi ra thẻ h1 và chuyển style cho nó thành đỏ bằng lệnh  header.style.color = 'red';
// lệnh   document.querySelector('body').addEventListener('click', function () là khi click vào sự kiện gì trong thẻ body thì nó sẽ ghi nhận
// sau đó chạy câu lệnh bên trong nó  header.style.color = 'blue'; để chuyển sang màu xanh 
