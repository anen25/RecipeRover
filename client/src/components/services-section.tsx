import { motion } from "framer-motion";
import { ShoppingCart, Instagram, Video, PieChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: ShoppingCart,
    title: "결제 연동 홈페이지 개발",
    description: "토스페이먼츠 PG 연동으로 즉시 판매가 가능한 쇼핑몰 및 예약 사이트 구축",
    color: "text-brand-primary",
    bgColor: "bg-blue-50",
    hoverColor: "hover:border-brand-primary",
  },
  {
    icon: Instagram,
    title: "전략적 SNS 마케팅",
    description: "인스타그램, 블로그를 활용한 브랜딩 및 잠재고객 확보",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    hoverColor: "hover:border-pink-600",
  },
  {
    icon: Video,
    title: "바이럴 영상 제작",
    description: "유튜브, 틱톡 숏폼을 통한 폭발적 인지도 상승",
    color: "text-red-600",
    bgColor: "bg-red-50",
    hoverColor: "hover:border-red-600",
  },
  {
    icon: PieChart,
    title: "통합 비즈니스 컨설팅",
    description: "개발부터 마케팅까지, 성장을 위한 로드맵 설계",
    color: "text-brand-secondary",
    bgColor: "bg-purple-50",
    hoverColor: "hover:border-brand-secondary",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-light-surface/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">핵심 서비스</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            개발부터 마케팅까지, 비즈니스 성장에 필요한 모든 것을 제공합니다
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className={`bg-white border-light-border transition-all duration-300 hover:transform hover:-translate-y-3 shadow-soft hover:shadow-card ${service.hoverColor} group`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
