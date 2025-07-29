import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, TrendingUp, Heart, Rocket, Lightbulb, ChevronDown, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";
// SVG 배경 제거하고 CSS 그라디언트로 대체

// 기하학적 배경 도형 컴포넌트
const GeometricShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2, delay, ease: "easeOut" }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="w-full h-full"
    />
  </motion.div>
);

const FloatingIcon = ({ children, delay = 0, position }: { children: React.ReactNode; delay?: number; position: string }) => (
  <motion.div
    className={`absolute ${position} opacity-30`}
    animate={{
      y: [0, -30, 0],
      x: [0, 10, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    whileHover={{ scale: 1.2, opacity: 0.8 }}
  >
    <motion.div
      className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
      whileHover={{ 
        backgroundColor: "rgba(255,255,255,0.2)",
        borderColor: "rgba(255,255,255,0.4)"
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// 마우스 패럴랙스 효과를 위한 컴포넌트
const ParallaxElement = ({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * speed,
        y: (e.clientY - window.innerHeight / 2) * speed,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [speed]);

  return (
    <motion.div
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
      {/* 세련된 배경 그라디언트와 패턴 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50/30"></div>
      
      {/* 배경 패턴 오버레이 */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.04) 0%, transparent 50%),
          linear-gradient(45deg, rgba(59, 130, 246, 0.02) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(139, 92, 246, 0.02) 25%, transparent 25%)
        `,
        backgroundSize: '400px 400px, 300px 300px, 200px 200px, 40px 40px, 40px 40px'
      }}></div>
      
      {/* 기하학적 배경 도형들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GeometricShape 
          className="top-20 left-20 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-xl"
          delay={0}
        />
        <GeometricShape 
          className="top-40 right-32 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-lg"
          delay={0.5}
        />
        <GeometricShape 
          className="bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-cyan-400/8 to-blue-500/8 rounded-full blur-2xl"
          delay={1}
        />
        <GeometricShape 
          className="bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-lg"
          delay={1.5}
        />
        
        {/* 추가 기하학적 요소들 */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-brand-primary/20 to-transparent"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-1 bg-gradient-to-r from-brand-secondary/20 to-transparent"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* 패럴랙스 플로팅 아이콘들 */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxElement speed={0.02}>
          <FloatingIcon position="top-32 left-16" delay={0}>
            <Code className="w-6 h-6 text-brand-primary" />
          </FloatingIcon>
        </ParallaxElement>
        
        <ParallaxElement speed={0.03}>
          <FloatingIcon position="top-48 right-24" delay={2}>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </FloatingIcon>
        </ParallaxElement>
        
        <ParallaxElement speed={0.025}>
          <FloatingIcon position="bottom-48 left-1/4" delay={4}>
            <Sparkles className="w-4 h-4 text-pink-600" />
          </FloatingIcon>
        </ParallaxElement>
        
        <ParallaxElement speed={0.035}>
          <FloatingIcon position="top-72 right-1/3" delay={1}>
            <Rocket className="w-5 h-5 text-brand-secondary" />
          </FloatingIcon>
        </ParallaxElement>
        
        <ParallaxElement speed={0.02}>
          <FloatingIcon position="bottom-32 right-16" delay={3}>
            <Zap className="w-4 h-4 text-yellow-600" />
          </FloatingIcon>
        </ParallaxElement>
        
        <ParallaxElement speed={0.04}>
          <FloatingIcon position="top-96 left-1/3" delay={5}>
            <Heart className="w-4 h-4 text-red-500" />
          </FloatingIcon>
        </ParallaxElement>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* 텍스트 뒤 글로우 효과 */}
              <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black leading-none opacity-10 blur-lg -z-10">
                <span className="block text-brand-primary">아이디어가 바로</span>
                <span className="block text-brand-secondary">매출로</span>
              </div>
              
              <span className="block text-gray-900 font-black drop-shadow-sm relative z-10">
                아이디어가 바로
              </span>
              <span className="block text-brand-primary font-black relative z-10">
                매출로
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold tracking-tight"
          >
            아는마케팅은 개발과 마케팅을 한번에 끝냅니다
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            토스페이먼츠 공식 파트너사. 결제되는 홈페이지부터 바이럴 마케팅까지,
            <br className="hidden md:block" />
            당신의 비즈니스는 성공만 준비하세요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-brand-primary hover:bg-blue-700 text-white px-12 py-5 text-xl font-bold transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl rounded-full relative overflow-hidden group"
              size="lg"
            >
              <span className="relative z-10">프로젝트 문의하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="border-3 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-12 py-5 text-xl font-bold transition-all hover:scale-105 rounded-full shadow-lg hover:shadow-xl"
              size="lg"
            >
              서비스 둘러보기
            </Button>
          </motion.div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </motion.div>
    </section>
  );
}
