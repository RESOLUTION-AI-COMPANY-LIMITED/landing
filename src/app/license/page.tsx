import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Giấy phép dịch vụ | R.AI",
  description:
    "Thỏa thuận cấp phép dịch vụ nền tảng AI của Resolution AI — bao gồm quyền sử dụng, hạn chế và cam kết SLA.",
};

export default function LicensePage() {
  return (
    <LegalPage
      title="Giấy phép dịch vụ"
      subtitle="Thỏa thuận cấp phép sử dụng nền tảng AI và các dịch vụ của R.AI."
    >
      <LegalSection title="1. Cấp phép sử dụng">
        <p>
          R.AI cấp cho bạn quyền sử dụng không độc quyền, không chuyển nhượng,
          có giới hạn thời gian để truy cập và sử dụng các dịch vụ nền tảng AI
          bao gồm AI Platform, LLM Gateway và Domain AI Products theo gói
          dịch vụ bạn đăng ký.
        </p>
        <p>
          Giấy phép có hiệu lực trong suốt thời hạn hợp đồng và gia hạn tự động
          trừ khi một bên thông báo chấm dứt trước 30 ngày.
        </p>
      </LegalSection>

      <LegalSection title="2. Hạn chế sử dụng">
        <p>Bạn không được:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Tái phân phối, bán lại hoặc cho thuê quyền truy cập dịch vụ cho bên
            thứ ba mà không có sự đồng ý bằng văn bản.
          </li>
          <li>
            Reverse engineer, dịch ngược mã nguồn, hoặc cố gắng trích xuất thuật
            toán, trọng số mô hình AI.
          </li>
          <li>
            Sử dụng dịch vụ để phát triển sản phẩm cạnh tranh trực tiếp với R.AI.
          </li>
          <li>
            Vượt quá giới hạn sử dụng (rate limits, quotas) đã thỏa thuận trong
            gói dịch vụ.
          </li>
          <li>
            Sử dụng dịch vụ cho mục đích bất hợp pháp, lừa đảo, hoặc tạo nội
            dung gây hại.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Quyền sở hữu trí tuệ">
        <p>
          Nền tảng, mã nguồn, mô hình AI, tài liệu kỹ thuật và tất cả cải tiến
          do R.AI phát triển là tài sản trí tuệ thuộc quyền sở hữu của R.AI.
          Giấy phép này không chuyển giao bất kỳ quyền sở hữu nào.
        </p>
        <p>
          Các tùy chỉnh (customizations) được phát triển riêng cho bạn theo hợp
          đồng dự án sẽ có điều khoản sở hữu riêng được ghi rõ trong hợp đồng
          tương ứng.
        </p>
      </LegalSection>

      <LegalSection title="4. Quyền sở hữu dữ liệu">
        <p>
          Bạn sở hữu toàn bộ dữ liệu đầu vào và đầu ra được tạo ra từ việc sử
          dụng dịch vụ. R.AI không tuyên bố quyền sở hữu đối với dữ liệu kinh
          doanh, nội dung hoặc kết quả AI của bạn.
        </p>
        <p>
          R.AI có quyền sử dụng dữ liệu tổng hợp, ẩn danh (không nhận diện được
          khách hàng cụ thể) để cải thiện chất lượng dịch vụ và mô hình AI, trừ
          khi bạn yêu cầu loại trừ bằng văn bản.
        </p>
      </LegalSection>

      <LegalSection title="5. Cam kết mức dịch vụ (SLA)">
        <p>
          R.AI cam kết mức khả dụng tối thiểu 99.5% cho các dịch vụ nền tảng
          (tính theo tháng), không bao gồm thời gian bảo trì định kỳ đã thông báo
          trước 48 giờ.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Thời gian phản hồi sự cố nghiêm trọng (P1): trong vòng 1 giờ.
          </li>
          <li>
            Thời gian phản hồi sự cố ảnh hưởng (P2): trong vòng 4 giờ làm việc.
          </li>
          <li>
            Thời gian phản hồi yêu cầu chung (P3): trong vòng 1 ngày làm việc.
          </li>
        </ul>
        <p>
          Nếu không đạt SLA cam kết, bạn có quyền yêu cầu bù đắp tín dụng dịch
          vụ (service credits) theo tỷ lệ tương ứng.
        </p>
      </LegalSection>

      <LegalSection title="6. Chấm dứt">
        <p>
          Giấy phép có thể bị chấm dứt trong các trường hợp:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hết hạn hợp đồng và không gia hạn.</li>
          <li>Vi phạm nghiêm trọng điều khoản sử dụng mà không khắc phục trong 15 ngày sau khi nhận thông báo.</li>
          <li>Một bên thông báo chấm dứt trước 30 ngày.</li>
          <li>Phá sản hoặc mất khả năng thanh toán.</li>
        </ul>
        <p>
          Khi chấm dứt, R.AI sẽ hỗ trợ bạn xuất dữ liệu trong vòng 30 ngày.
          Sau thời gian này, dữ liệu sẽ bị xóa khỏi hệ thống.
        </p>
      </LegalSection>

      <LegalSection title="7. Giới hạn trách nhiệm">
        <p>
          Trách nhiệm bồi thường tối đa của R.AI không vượt quá tổng phí dịch vụ
          đã thanh toán trong 12 tháng gần nhất. R.AI không chịu trách nhiệm với
          thiệt hại gián tiếp, mất dữ liệu do lỗi người dùng, hoặc thiệt hại
          phát sinh từ việc sử dụng kết quả AI mà không kiểm chứng.
        </p>
      </LegalSection>

      <LegalSection title="8. Chính sách hoàn tiền">
        <p>
          Đối với dịch vụ subscription: bạn có thể yêu cầu hoàn tiền trong vòng
          14 ngày kể từ ngày thanh toán nếu chưa sử dụng dịch vụ đáng kể (dưới
          100 API calls hoặc dưới 2 giờ sử dụng platform).
        </p>
        <p>
          Đối với dịch vụ dự án: điều khoản hoàn tiền được quy định riêng trong
          hợp đồng dự án, thường áp dụng theo từng milestone đã nghiệm thu.
        </p>
        <p>
          Phí dịch vụ đã sử dụng vượt qua ngưỡng trên sẽ không được hoàn trả.
        </p>
      </LegalSection>

      <LegalSection title="9. Liên hệ">
        <p>
          CÔNG TY TNHH RESOLUTION AI
          <br />
          MST: 0108572098
          <br />
          Email: contact@resolutionai.vn
          <br />
          Website: resolutionai.vn
        </p>
      </LegalSection>
    </LegalPage>
  );
}
