document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('moving-placeholder');
    const text = "Nhập điện thoại bạn muốn tìm vào đây";
    let index = 0;

    function updatePlaceholder() {
        if (index < text.length) {
            input.placeholder += text.charAt(index);
            index++;
        } else {
            input.placeholder = "";
            index = 0;
        }
    }

    setInterval(updatePlaceholder, 100);
});