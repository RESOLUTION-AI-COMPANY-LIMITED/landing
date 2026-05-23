import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng | R.AI",
  description:
    "Điều khoản và điều kiện sử dụng dịch vụ của Resolution AI Company Limited.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Điều khoản sử dụng"
      subtitle="Điều khoản và điều kiện áp dụng khi bạn sử dụng các dịch vụ của R.AI."
    >
      <LegalSection title="1. Giới thiệu">
        <p>
          Chào mừng bạn đến với các dịch vụ của CÔNG TY TNHH RESOLUTION AI
          (MST: 0108572098), có trụ sở tại Hà Nội, Việt Nam (&quot;R.AI&quot;,
          &quot;chúng tôi&quot;). Bằng việc truy cập hoặc sử dụng website
          resolutionai.vn và các sản phẩm bao gồm AI Platform, LLM Gateway,
          Domain AI Products, cùng các dịch vụ Cloud & Data, bạn đồng ý tuân thủ
          các điều khoản dưới đây.
        </p>
      </LegalSection>

      <LegalSection title="2. Quyền sở hữu trí tuệ">
        <p>
          Toàn bộ nội dung, mã nguồn, thiết kế giao diện, thương hiệu, logo và
          tài liệu trên nền tảng thuộc quyền sở hữu của R.AI hoặc các bên cấp
          phép cho chúng tôi. Bạn không được sao chép, phân phối, chỉnh sửa hoặc
          tạo sản phẩm phái sinh từ bất kỳ nội dung nào mà không có sự đồng ý
          bằng văn bản.
        </p>
        <p>
          Các mô hình AI, thuật toán và pipeline xử lý dữ liệu do R.AI phát
          triển là tài sản trí tuệ được bảo hộ theo pháp luật Việt Nam và các
          điều ước quốc tế mà Việt Nam tham gia.
        </p>
      </LegalSection>

      <LegalSection title="3. Liên kết bên ngoài">
        <p>
          Website có thể chứa liên kết đến các trang web của bên thứ ba. R.AI
          không chịu trách nhiệm về nội dung, chính sách bảo mật hoặc hoạt động
          của các trang web đó. Việc truy cập liên kết bên ngoài hoàn toàn do bạn
          tự chịu rủi ro.
        </p>
      </LegalSection>

      <LegalSection title="4. Chấm dứt">
        <p>
          Chúng tôi có quyền tạm ngừng hoặc chấm dứt quyền truy cập của bạn vào
          dịch vụ bất cứ lúc nào nếu bạn vi phạm các điều khoản này, hoặc vì lý
          do bảo mật hệ thống. Trong trường hợp chấm dứt, các điều khoản liên
          quan đến quyền sở hữu trí tuệ, giới hạn trách nhiệm và luật áp dụng
          vẫn có hiệu lực.
        </p>
      </LegalSection>

      <LegalSection title="5. Giới hạn trách nhiệm">
        <p>
          Trong phạm vi tối đa được pháp luật cho phép, R.AI không chịu trách
          nhiệm đối với bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc
          mang tính hệ quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng
          dịch vụ, bao gồm nhưng không giới hạn ở mất dữ liệu, mất lợi nhuận
          hoặc gián đoạn kinh doanh.
        </p>
        <p>
          Tổng trách nhiệm bồi thường của R.AI trong mọi trường hợp không vượt
          quá số tiền bạn đã thanh toán cho dịch vụ trong 12 tháng trước thời
          điểm phát sinh tranh chấp.
        </p>
      </LegalSection>

      <LegalSection title="6. Tuyên bố miễn trừ">
        <p>
          Dịch vụ được cung cấp theo nguyên tắc &quot;như hiện trạng&quot; (as-is)
          và &quot;theo khả năng sẵn có&quot; (as-available). R.AI không đưa ra
          bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý, bao gồm bảo đảm về tính phù
          hợp cho mục đích cụ thể, tính không vi phạm, hoặc hoạt động liên tục
          không gián đoạn.
        </p>
        <p>
          Kết quả từ các mô hình AI mang tính tham khảo và có thể không chính xác
          100%. Người dùng có trách nhiệm kiểm chứng trước khi đưa ra quyết định
          kinh doanh dựa trên đầu ra của hệ thống.
        </p>
      </LegalSection>

      <LegalSection title="7. Luật áp dụng">
        <p>
          Các điều khoản này được điều chỉnh và giải thích theo pháp luật nước
          Cộng hòa Xã hội Chủ nghĩa Việt Nam. Mọi tranh chấp phát sinh sẽ được
          giải quyết tại Tòa án nhân dân có thẩm quyền tại Hà Nội, Việt Nam.
        </p>
      </LegalSection>

      <LegalSection title="8. Thay đổi điều khoản">
        <p>
          R.AI có quyền cập nhật hoặc sửa đổi các điều khoản này bất cứ lúc nào.
          Phiên bản mới sẽ có hiệu lực ngay khi được đăng tải trên website. Chúng
          tôi khuyến khích bạn kiểm tra định kỳ để nắm bắt các thay đổi.
        </p>
      </LegalSection>

      <LegalSection title="9. Liên hệ">
        <p>
          Nếu bạn có câu hỏi về các điều khoản này, vui lòng liên hệ chúng tôi
          qua email:{" "}
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
