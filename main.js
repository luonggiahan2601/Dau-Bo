const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");

function showAlert(message) {
    alert(message);
}

btn1.addEventListener("click", function() {
    showAlert("Sản phẩm Kẹo ngọt Táo Xanh đã được thêm vào giỏ hàng!");
});

btn2.addEventListener("click", function() {
    showAlert("Sản phẩm Kẹo ngọt Nho đã được thêm vào giỏ hàng!");
});

btn3.addEventListener("click", function() {
    showAlert("Sản phẩm Kẹo ngọt Dưa Hấu đã được thêm vào giỏ hàng!");
});

btn4.addEventListener("click", function() {
    showAlert("Sản phẩm Swetie Đỏ đã được thêm vào giỏ hàng!");
});

btn5.addEventListener("click", function() {
    showAlert("Sản phẩm Swetie Hồng đã được thêm vào giỏ hàng!");
});

btn6.addEventListener("click", function() {
    showAlert("Sản phẩm Swetie Xanh đã được thêm vào giỏ hàng!");
});

 btn7.addEventListener("click", function() {
    showAlert("Thông tin đã được ghi nhận!!!!");
});


function handleButtonHover() {
    const buttons = document.querySelectorAll('.btn-hover');
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'gray';
        button.style.transition = 'background-color 0.1s';
      });
      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'blue';
        button.style.transition = 'background-color 0.1s';
      });
    });
  }
  
  handleButtonHover();
  
 
  
  