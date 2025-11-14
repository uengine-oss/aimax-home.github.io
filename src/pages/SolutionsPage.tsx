import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Building2, Factory, ShoppingBag, Stethoscope, GraduationCap, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: '금융 서비스',
    description: 'AI 기반 리스크 관리, 신용평가, 부정거래 탐지로 금융 산업의 혁신을 이끕니다.',
    features: ['리스크 예측 모델', '신용평가 자동화', 'AML/KYC 분석', '포트폴리오 최적화'],
    link: '/solutions/finance',
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1733503747506-773e56e4078f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDM3MTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Factory,
    title: '제조 & 생산',
    description: 'AI 비전 검사와 예지보전으로 품질을 향상하고 생산 효율을 극대화합니다.',
    features: ['AI 비전 검사', '예지 보전', '공정 최적화', '품질 예측 모델'],
    link: '/solutions/manufacturing',
    color: 'from-green-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjAzNDY4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: ShoppingBag,
    title: '리테일 & 커머스',
    description: '고객 데이터 분석과 수요 예측으로 매출을 증대하고 재고를 최적화합니다.',
    features: ['수요 예측', '고객 세분화', '추천 시스템', '재고 최적화'],
    link: '#',
    color: 'from-purple-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMzY3NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Stethoscope,
    title: '헬스케어',
    description: '의료 데이터 분석과 AI 진단 보조로 환자 케어의 질을 향상시킵니다.',
    features: ['의료 영상 분석', '질병 예측', '환자 모니터링', '약물 상호작용 분석'],
    link: '#',
    color: 'from-red-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MDQxMzEwOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: GraduationCap,
    title: '교육 & 이러닝',
    description: '개인화된 학습 경험과 성과 분석으로 교육 효과를 극대화합니다.',
    features: ['학습 추천', '성과 예측', '맞춤형 커리큘럼', '학습 분석'],
    link: '#',
    color: 'from-indigo-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMzY3NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Rocket,
    title: '스타트업 & 혁신',
    description: 'AI 기술로 비즈니스 모델을 혁신하고 빠르게 성장할 수 있도록 지원합니다.',
    features: ['MVP 개발', 'AI 전략 수립', '데이터 인프라', '스케일업 지원'],
    link: '#',
    color: 'from-orange-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMzY3NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const benefits = [
  {
    title: '산업별 맞춤 솔루션',
    description: '각 산업의 특성과 요구사항을 이해하고 최적화된 AI 솔루션을 제공합니다.',
  },
  {
    title: '검증된 기술력',
    description: '최신 AI 기술과 업계 베스트 프랙티스를 적용하여 실질적인 성과를 창출합니다.',
  },
  {
    title: '전문 컨설팅',
    description: 'AI 도입 전략부터 실행, 운영까지 전 과정을 함께합니다.',
  },
  {
    title: '빠른 ROI',
    description: '명확한 목표 설정과 단계별 실행으로 빠른 투자 대비 효과를 달성합니다.',
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 dark:from-blue-950 dark:via-blue-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              산업별 AI 솔루션
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              귀사의 산업에 최적화된 AI 솔루션으로
              <br />
              비즈니스 혁신을 시작하세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">
              모든 산업을 위한 AI 솔루션
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              AIMAX는 다양한 산업 분야에서 검증된 AI 솔루션을 제공합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl mb-3 text-gray-900">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6 flex-1">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    {industry.link !== '#' ? (
                      <Link to={industry.link}>
                        <Button className={`w-full bg-gradient-to-r ${industry.color} text-white hover:opacity-90`}>
                          자세히 보기
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button className={`w-full bg-gradient-to-r ${industry.color} text-white hover:opacity-90`} disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">
              AIMAX 솔루션의 강점
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-white">
              귀사에 맞는 AI 솔루션을 찾고 계신가요?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              AIMAX 전문가가 귀사의 비즈니스 목표에 최적화된 AI 전략을 제안합니다
            </p>
            <Link to="/">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold"
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                무료 상담 신청하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
