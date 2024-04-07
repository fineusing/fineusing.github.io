document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(function(link) {
        link.classList.remove('current'); // 移除所有链接的 current 类
        if (link.href === window.location.href) {
            link.classList.add('current'); // 根据当前页面的 URL 添加 current 类
        }
    });
});