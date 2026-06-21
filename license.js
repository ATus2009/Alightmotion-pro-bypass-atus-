// license.js - Mock response for AlightMotion Pro license check
// Dùng cho Shadowrocket MITM, đặt URL raw trên GitHub/Pastebin

// Kiểm tra nội dung phản hồi từ server
if ($response.body) {
    try {
        // Parse JSON gốc từ licensing.googleapis.com
        let original = JSON.parse($response.body);
        
        // Ghi đè trường license thành GRANTED
        original.license = "GRANTED";
        original.status = "ACTIVE";
        original.expiry = "2099-12-31T23:59:59Z";
        original.signature = "MOCK_SIGNATURE_1234567890"; // thêm chuỗi giả để vượt checksum
        
        // Trả về phản hồi đã sửa
        $done({
            body: JSON.stringify(original),
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store"
            }
        });
    } catch (e) {
        // Nếu parse lỗi, trả về mock hoàn chỉnh
        $done({
            body: JSON.stringify({
                license: "GRANTED",
                status: "ACTIVE",
                expiry: "2099-12-31T23:59:59Z"
            }),
            status: 200
        });
    }
} else {
    // Nếu không có body, tạo mới
    $done({
        body: JSON.stringify({
            license: "GRANTED",
            status: "ACTIVE",
            expiry: "2099-12-31T23:59:59Z"
        }),
        status: 200
    });
}
