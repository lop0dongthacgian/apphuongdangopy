const gopyGuideContent = `
    <h2>HƯỚNG DẪN NGƯỜI DÂN GÓP Ý HIẾN PHÁP TRÊN ỨNG DỤNG VNeID</h2>
    <hr>
    <p><strong>BƯỚC 1: MỞ ỨNG DỤNG VNeID</strong></p>
    <p>📱 Truy cập ứng dụng VNeID trên điện thoại (hoặc vào <a href="https://vneid.gov.vn" target="_blank">https://vneid.gov.vn</a>)</p>
    <p>🔐 Đăng nhập bằng tài khoản định danh điện tử mức 2</p>
    <hr>
    <p><strong>BƯỚC 2: CHỌN MỤC TIỆN ÍCH</strong></p>
    <p>🧭 Vào mục “Tiện ích”</p>
    <p>➡️ Chọn “Lấy ý kiến người dân về nội dung sửa đổi Hiến pháp năm 2013”</p>
    <hr>
    <p><strong>BƯỚC 3: ĐỌC DỰ THẢO HIẾN PHÁP</strong></p>
    <p>📘 Chọn “Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 2013”</p>
    <p>🧐 Đọc kỹ nội dung dự thảo sửa đổi, bổ sung</p>
    <hr>
    <p><strong>BƯỚC 4: THAM GIA GÓP Ý</strong></p>
    <p>✍️ Nhập nội dung góp ý hoặc</p>
    <p>☑️ Chọn “Tán thành” / ❌ “Không tán thành”</p>
    <hr>
    <p><strong>BƯỚC 5: GỬI GÓP Ý VÀ XÁC NHẬN</strong></p>
    <p>✅ Kiểm tra lại và gửi góp ý</p>
    <hr>
    <p>🇻🇳🇻🇳Hãy cùng đóng góp tiếng nói xây dựng Nhà nước pháp quyền, dân chủ, văn minh! Mỗi ý kiến của bạn đều góp phần vì tương lai đất nước!🇻🇳🇻🇳</p>
`;

document.addEventListener('DOMContentLoaded', () => {
    const gopyGuideDiv = document.getElementById('gopy-guide');
    if (gopyGuideDiv) {
        gopyGuideDiv.innerHTML = gopyGuideContent;
    }
});