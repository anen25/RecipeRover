import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: 1,
    category: "website",
    title: "프리미엄 패션 쇼핑몰",
    description: "토스페이먼츠 연동으로 구축한 고급 패션 브랜드 쇼핑몰",
    metric: "매출 200% 성장",
    client: "Fashion Brand A",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 2,
    category: "sns",
    title: "카페 브랜딩 캠페인",
    description: "인스타그램 중심의 통합 SNS 마케팅 전략",
    metric: "팔로워 500% 증가",
    client: "Cafe Moon",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 3,
    category: "video",
    title: "브랜드 바이럴 영상",
    description: "틱톡, 유튜브 숏츠를 활용한 바이럴 마케팅",
    metric: "조회수 100만+",
    client: "Startup B",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 4,
    category: "website",
    title: "레스토랑 예약 시스템",
    description: "실시간 예약과 결제가 가능한 통합 시스템",
    metric: "예약률 3배 증가",
    client: "Restaurant C",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 5,
    category: "sns",
    title: "B2B 블로그 마케팅",
    description: "전문성을 어필하는 콘텐츠 마케팅 전략",
    metric: "리드 300% 증가",
    client: "Tech Company D",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 6,
    category: "video",
    title: "교육 콘텐츠 채널",
    description: "유튜브 채널 런칭부터 구독자 확보까지",
    metric: "구독자 10만+ 달성",
    client: "EduChannel E",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
];

const filters = [
  { id: "all", label: "전체" },
  { id: "website", label: "웹사이트" },
  { id: "sns", label: "SNS" },
  { id: "video", label: "영상" },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = portfolioItems.filter(
    item => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-20 bg-light-surface/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">성공 사례</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            다양한 업종의 클라이언트와 함께 만들어낸 성공 스토리를 확인해보세요
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-3 font-semibold transition-all rounded-full ${
                activeFilter === filter.id
                  ? "bg-brand-primary hover:bg-blue-700 text-white shadow-md"
                  : "bg-white border-light-border text-secondary hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Card className="bg-white border-light-border hover:border-brand-primary transition-all overflow-hidden group shadow-soft hover:shadow-card">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                    <p className="text-secondary mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-green-600 bg-green-50 border-green-200">
                        {item.metric}
                      </Badge>
                      <span className="text-sm text-muted font-medium">{item.client}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
