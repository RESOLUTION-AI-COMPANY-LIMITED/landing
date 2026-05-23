import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Chính sách Cookies | R.AI",
  description:
    "Tìm hiểu về cách R.AI sử dụng cookies và công nghệ tương tự trên website.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Chính sách Cookies"
      subtitle="Thông tin về cách chúng tôi sử dụng cookies để cải thiện trải nghiệm của bạn trên resolutionai.vn."
    >
      <LegalSection title="1. Cookies là gì?">
        <p>
          Cookies là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn khi
          truy cập website. Chúng giúp website ghi nhớ thông tin về phiên truy
          cập, tùy chọn của bạn và cải thiện trải nghiệm sử dụng. Cookies không
          chứa mã độc và không thể truy cập dữ liệu khác trên thiết bị.
        </p>
      </LegalSection>

      <LegalSection title="2. Các loại cookies chúng tôi sử dụng">
        <p className="font-medium text-white">Cookies thiết yếu (Essential)</p>
        <p>
          Cần thiết để website hoạt động đúng cách. Bao gồm cookies xác thực
          phiên đăng nhập, bảo mật CSRF, và ghi nhớ tùy chọn ngôn ngữ. Không thể
          tắt loại cookies này vì website sẽ không hoạt động bình thường.
        </p>

        <p className="font-medium text-white mt-4">
          Cookies phân tích (Analytics)
        </p>
        <p>
          Giúp chúng tôi hiểu cách bạn tương tác với website — trang nào được xem
          nhiều nhất, thời gian trung bình trên trang, tỷ lệ thoát. Dữ liệu được
          thu thập ở dạng tổng hợp, ẩn danh. Chúng tôi sử dụng các công cụ phân
          tích tôn trọng quyền riêng tư để đo lường hiệu quả nội dung và cải
          thiện dịch vụ.
        </p>

        <p className="font-medium text-white mt-4">
          Cookies tiếp thị (Marketing)
        </p>
        <p>
          Được sử dụng để hiển thị nội dung và quảng cáo phù hợp với bạn. Cookies
          này theo dõi hiệu quả chiến dịch marketing và giúp chúng tôi tiếp cận
          đúng đối tượng. Bạn có thể từ chối loại cookies này mà không ảnh hưởng
          đến trải nghiệm sử dụng dịch vụ chính.
        </p>
      </LegalSection>

      <LegalSection title="3. Cách kiểm soát cookies">
        <p>
          Bạn có thể quản lý cookies thông qua cài đặt trình duyệt. Hầu hết trình
          duyệt cho phép bạn:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Xem cookies đang được lưu trữ.</li>
          <li>Xóa toàn bộ hoặc từng cookies cụ thể.</li>
          <li>Chặn cookies từ tất cả hoặc một số website nhất định.</li>
          <li>Nhận thông báo khi có cookies mới được thiết lập.</li>
        </ul>
        <p className="mt-3">
          Lưu ý: việc chặn cookies thiết yếu có thể khiến một số tính năng trên
          website không hoạt động đúng cách.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies bên thứ ba">
        <p>
          Một số cookies trên website được thiết lập bởi các dịch vụ bên thứ ba mà
          chúng tôi tích hợp, bao gồm:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Công cụ phân tích web — để đo lường lưu lượng truy cập và hành vi
            người dùng.
          </li>
          <li>
            Nền tảng quảng cáo — để theo dõi hiệu quả chiến dịch và remarketing.
          </li>
          <li>
            Chat hỗ trợ — để cung cấp trải nghiệm tư vấn trực tuyến.
          </li>
        </ul>
        <p className="mt-3">
          Các bên thứ ba này hoạt động theo chính sách bảo mật riêng. Chúng tôi
          chọn đối tác tuân thủ tiêu chuẩn bảo mật dữ liệu phù hợp.
        </p>
      </LegalSection>

      <LegalSection title="5. Liên hệ">
        <p>
          Nếu bạn có câu hỏi về chính sách cookies, vui lòng liên hệ:{" "}
          <a
            href="mailto:contact@resolutionai.vn"
            className="text-[#7c3aed] hover:underline"
          >
            contact@resolutionai.vn
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
