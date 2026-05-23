import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Chính sách bảo mật | R.AI",
  description:
    "Chính sách bảo mật của Resolution AI — cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Chính sách bảo mật"
      subtitle="Cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn khi sử dụng dịch vụ R.AI."
    >
      <LegalSection title="1. Thông tin chúng tôi thu thập">
        <p>Khi bạn sử dụng dịch vụ R.AI, chúng tôi có thể thu thập:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Thông tin cá nhân: họ tên, email, số điện thoại, tên công ty khi bạn
            đăng ký hoặc liên hệ.
          </li>
          <li>
            Dữ liệu sử dụng: thông tin về cách bạn tương tác với nền tảng, bao
            gồm API calls, thời gian phiên làm việc, tính năng sử dụng.
          </li>
          <li>
            Dữ liệu kỹ thuật: địa chỉ IP, loại trình duyệt, hệ điều hành, thiết
            bị truy cập.
          </li>
          <li>
            Dữ liệu đầu vào AI: nội dung bạn gửi đến các mô hình AI thông qua
            LLM Gateway hoặc AI Platform (xử lý theo chính sách riêng của
            từng dịch vụ).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Cách chúng tôi sử dụng thông tin">
        <p>Thông tin thu thập được sử dụng để:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cung cấp, vận hành và cải thiện dịch vụ.</li>
          <li>Xử lý yêu cầu hỗ trợ kỹ thuật và tư vấn.</li>
          <li>
            Phân tích xu hướng sử dụng nhằm tối ưu hiệu suất nền tảng.
          </li>
          <li>
            Gửi thông báo quan trọng về dịch vụ, bảo mật hoặc thay đổi chính
            sách.
          </li>
          <li>Tuân thủ các nghĩa vụ pháp lý và quy định tại Việt Nam.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Chia sẻ thông tin">
        <p>
          R.AI không bán hoặc cho thuê thông tin cá nhân của bạn. Chúng tôi chỉ
          chia sẻ thông tin trong các trường hợp:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Có sự đồng ý rõ ràng của bạn.</li>
          <li>
            Với nhà cung cấp dịch vụ đáng tin cậy hỗ trợ vận hành (hosting, phân
            tích, thanh toán) — theo hợp đồng bảo mật nghiêm ngặt.
          </li>
          <li>Khi có yêu cầu từ cơ quan nhà nước có thẩm quyền theo pháp luật.</li>
          <li>
            Để bảo vệ quyền lợi hợp pháp, an toàn của R.AI và người dùng.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Cookies">
        <p>
          Chúng tôi sử dụng cookies và công nghệ tương tự để cải thiện trải
          nghiệm người dùng. Chi tiết về các loại cookies và cách quản lý, vui
          lòng tham khảo{" "}
          <a href="/cookies" className="text-[#7c3aed] hover:underline">
            Chính sách Cookies
          </a>{" "}
          của chúng tôi.
        </p>
      </LegalSection>

      <LegalSection title="5. Lưu trữ dữ liệu">
        <p>
          Dữ liệu cá nhân được lưu trữ trong thời gian bạn sử dụng dịch vụ và
          tối đa 24 tháng sau khi tài khoản bị hủy, trừ khi pháp luật yêu cầu
          lưu trữ lâu hơn. Dữ liệu đầu vào AI qua LLM Gateway được lưu tạm để
          xử lý và xóa trong vòng 30 ngày, trừ khi bạn chọn lưu trữ lịch sử.
        </p>
      </LegalSection>

      <LegalSection title="6. Bảo mật">
        <p>
          Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp để bảo vệ
          dữ liệu, bao gồm:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mã hóa dữ liệu khi truyền tải (TLS 1.3) và khi lưu trữ (AES-256).</li>
          <li>Kiểm soát truy cập theo nguyên tắc quyền tối thiểu.</li>
          <li>Giám sát hệ thống 24/7 và kiểm tra bảo mật định kỳ.</li>
          <li>Hạ tầng triển khai trên các nền tảng đám mây đạt chứng nhận ISO 27001.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Người dùng dưới 18 tuổi">
        <p>
          Dịch vụ của R.AI không hướng đến người dùng dưới 18 tuổi. Chúng tôi
          không cố ý thu thập thông tin từ trẻ vị thành niên. Nếu phát hiện đã
          thu thập thông tin của người dưới 18 tuổi, chúng tôi sẽ xóa ngay lập
          tức.
        </p>
      </LegalSection>

      <LegalSection title="8. Quyền của bạn">
        <p>
          Bạn có quyền:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Truy cập và xem thông tin cá nhân chúng tôi lưu trữ.</li>
          <li>Yêu cầu chỉnh sửa thông tin không chính xác.</li>
          <li>Yêu cầu xóa dữ liệu cá nhân (trừ dữ liệu cần thiết cho nghĩa vụ pháp lý).</li>
          <li>Rút lại sự đồng ý xử lý dữ liệu.</li>
          <li>Xuất dữ liệu theo định dạng máy có thể đọc được.</li>
        </ul>
        <p>
          Để thực hiện các quyền trên, liên hệ:{" "}
          <a
            href="mailto:contact@resolutionai.vn"
            className="text-[#7c3aed] hover:underline"
          >
            contact@resolutionai.vn
          </a>
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
          <br />
          Địa chỉ: Hà Nội, Việt Nam
        </p>
      </LegalSection>
    </LegalPage>
  );
}
