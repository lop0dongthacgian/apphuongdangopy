const vneidGuideContent = `
    <h2>Hướng dẫn tạo tài khoản VNeID</h2>
    <ol>
        <li><strong>Tải ứng dụng VNeID:</strong> Truy cập App Store (iOS) hoặc Google Play Store (Android) và tải ứng dụng VNeID.</li>
        <li><strong>Đăng ký tài khoản:</strong>
            <ul>
                <li>Nhập số định danh cá nhân (CMND/CCCD) và số điện thoại.</li>
                <li>Chụp ảnh CCCD/CMND mặt trước và mặt sau theo hướng dẫn của ứng dụng.</li>
                <li>Chụp ảnh chân dung theo hướng dẫn.</li>
                <li>Nhập mã OTP được gửi về số điện thoại.</li>
                <li>Thiết lập mật khẩu.</li>
            </ul>
        </li>
        <li><strong>Kích hoạt tài khoản mức 1 (nếu có):</strong> Nếu bạn đã có tài khoản mức 1, bạn cần đến cơ quan Công an để thực hiện nâng cấp lên mức 2.</li>
        <li><strong>Đăng ký tài khoản mức 2 (nếu chưa có):</strong> Đến trực tiếp cơ quan Công an để đăng ký tài khoản định danh điện tử mức 2. Mang theo CCCD/CMND bản gốc.</li>
        <li><strong>Đăng nhập:</strong> Sau khi có tài khoản mức 2, đăng nhập vào ứng dụng bằng số định danh cá nhân và mật khẩu đã thiết lập.</li>
    </ol>
`;

document.addEventListener('DOMContentLoaded', () => {
    const vneidGuideDiv = document.getElementById('vneid-guide');
    if (vneidGuideDiv) {
        vneidGuideDiv.innerHTML = vneidGuideContent;
    }
});