// api.js - Mock cho api.alightcreative.com
// Trả về trạng thái Pro cho tất cả API endpoints

if ($request.url.includes("/v1/user/subscription")) {
    $done({
        body: JSON.stringify({
            isPro: true,
            features: ["no_watermark", "4k_export", "no_ads"],
            validUntil: "2099-12-31"
        }),
        status: 200
    });
} else if ($request.url.includes("/v1/watermark")) {
    $done({
        body: JSON.stringify({ enabled: false }),
        status: 200
    });
} else {
    // Các API khác: cho qua hoặc mock trống
    $done({});
}
