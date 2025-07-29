import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-light-surface border-t border-light-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-brand-primary mb-4">
              아는마케팅
            </div>
            <p className="text-secondary mb-6 max-w-md leading-relaxed">
              아이디어가 바로 매출로. 개발과 마케팅을 한번에 끝내는 여러분의 비즈니스 파트너입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-muted hover:text-brand-primary transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-2xl text-muted hover:text-brand-primary transition-colors">
                <Youtube />
              </a>
              <a href="#" className="text-2xl text-muted hover:text-brand-primary transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">서비스</h3>
            <ul className="space-y-3 text-secondary">
              <li>
                <a href="#services" className="hover:text-brand-primary transition-colors">
                  홈페이지 개발
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-primary transition-colors">
                  SNS 마케팅
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-primary transition-colors">
                  영상 제작
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-primary transition-colors">
                  비즈니스 컨설팅
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">연락처</h3>
            <ul className="space-y-3 text-secondary">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-primary" />
                contact@aneunmarketing.co.kr
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary" />
                02-1234-5678
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-primary" />
                서울특별시 강남구
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light-border pt-8 mt-8 text-center text-muted">
          <p>&copy; 2024 주식회사 아는마케팅. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
