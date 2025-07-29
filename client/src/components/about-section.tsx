import { motion } from "framer-motion";
import { Handshake, Lightbulb, CreditCard, Megaphone, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const businessCycle = [
  {
    icon: Lightbulb,
    title: "기획/개발",
    description: "아이디어를 실현 가능한 서비스로 설계",
    color: "bg-brand-primary",
  },
  {
    icon: CreditCard,
    title: "결제 시스템 탑재",
    description: "토스페이먼츠로 안정적인 결제 환경 구축",
    color: "bg-green-500",
  },
  {
    icon: Megaphone,
    title: "마케팅/판매",
    description: "다채널 마케팅으로 고객 유입 및 매출 증대",
    color: "bg-brand-secondary",
  },
  {
    icon: BarChart,
    title: "데이터 분석",
    description: "성과 분석을 통한 지속적인 최적화",
    color: "bg-cyan-500",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">왜 아는마케팅인가?</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            신뢰할 수 있는 파트너십과 검증된 노하우로 여러분의 성공을 보장합니다
          </p>
        </motion.div>

        {/* Toss Partnership Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-brand-primary/20 mb-16 shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-brand-primary p-4 rounded-2xl">
                      <Handshake className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      토스페이먼츠 공식 파트너사
                    </h3>
                  </div>
                  <p className="text-lg text-secondary leading-relaxed">
                    대한민국 1위 간편결제 서비스 토스페이먼츠의 공식 파트너로서, 
                    안정적이고 신뢰할 수 있는 결제 시스템을 제공합니다. 
                    고객의 결제 경험부터 매출 정산까지 모든 과정이 완벽하게 연동됩니다.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl text-center shadow-soft border border-light-border">
                  <div className="text-4xl mb-3">🏆</div>
                  <p className="text-primary font-bold text-sm">
                    OFFICIAL
                    <br />
                    PARTNER
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Business Cycle Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-light-surface border-light-border shadow-card">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary">
                통합 비즈니스 사이클
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {businessCycle.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`${step.color} p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-soft`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold mb-2 text-primary">{step.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Cycle Connection Lines */}
              <div className="hidden md:flex justify-center mt-12">
                <div className="flex items-center space-x-8 text-muted">
                  <div className="w-16 border-t-2 border-light-border"></div>
                  <span className="text-2xl">→</span>
                  <div className="w-16 border-t-2 border-light-border"></div>
                  <span className="text-2xl">→</span>
                  <div className="w-16 border-t-2 border-light-border"></div>
                  <span className="text-2xl">→</span>
                  <div className="w-16 border-t-2 border-light-border"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
