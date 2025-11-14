import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Eye, Wrench, Activity, Brain, CheckCircle2, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const features = [
  {
    icon: Eye,
    title: 'AI Vision 검사',
    description: '딥러닝 기반 비전 시스템으로 미세 불량까지 99.8% 정확도로 검출합니다.',
  },
  {
    icon: Activity,
    title: '예지 보전',
    description: '설비 데이터 분석을 통해 고장을 사전에 예측하고 다운타임을 최소화합니다.',
  },
  {
    icon: Wrench,
    title: '공정 최적화',
    description: '생산 데이터를 실시간으로 분석하여 최적의 공정 파라미터를 자동으로 조정합니다.',
  },
  {
    icon: Brain,
    title: '품질 예측 모델',
    description: '과거 데이터 학습을 통해 품질 이슈를 사전에 예측하고 대응합니다.',
  },
];

const performanceData = [
  { name: '불량 검출률', before: 92, after: 99.8 },
  { name: '검사 속도', before: 60, after: 95 },
  { name: '설비 가동률', before: 78, after: 93 },
];

const radarData = [
  { category: '품질', before: 75, after: 98 },
  { category: '생산성', before: 70, after: 92 },
  { category: '비용', before: 65, after: 88 },
  { category: '안전', before: 80, after: 95 },
  { category: '유연성', before: 60, after: 85 },
];

const benefits = [
  '불량 검출률 99.8% 달성',
  '연간 품질 비용 5억원 절감',
  '검사 시간 60% 단축',
  '설비 가동률 15% 향상',
  '인적 오류로 인한 불량 제로화',
  '24시간 무중단 품질 관리',
  '생산 데이터 실시간 모니터링',
  '예방 정비로 돌발 고장 80% 감소',
];

const useCases = [
  {
    title: '반도체 부품 검사',
    description: '나노 단위의 미세 결함 검출',
    result: '불량률 0.2% 이하 유지',
  },
  {
    title: '자동차 부품 조립',
    description: '실시간 조립 품질 확인',
    result: '재작업률 70% 감소',
  },
  {
    title: '디스플레이 패널',
    description: '픽셀 결함 자동 검출',
    result: '검사 시간 80% 단축',
  },
];

export default function ManufacturingSolution() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full mb-6">
                <span className="text-green-200">Manufacturing AI Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl mb-6 text-white">
                제조의 효율을
                <br />
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  AI로 극대화합니다
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                AI 비��� 검사와 예지보전으로 품질을 높이고,
                생산 효율을 극대화합니다.
              </p>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-green-500 text-white hover:bg-green-600"
              >
                제조 AI 도입 상담
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjAzNDY4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Manufacturing Factory"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900">제조 AI 핵심 기능</h2>
            <p className="text-xl text-gray-600">
              제조 현장 특화 AI 솔루션으로 생산성을 혁신합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all border-2 hover:border-green-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900">실제 성과 지표</h2>
            <p className="text-xl text-gray-600">
              B반도체 부품사 도입 후 성과
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Bar Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl mb-6 text-gray-900">주요 지표 개선</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="before" fill="#94a3b8" name="도입 전" />
                    <Bar dataKey="after" fill="#10b981" name="도입 후" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>

            {/* Radar Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl mb-6 text-gray-900">종합 성과 분석</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis />
                    <Radar name="도입 전" dataKey="before" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3} />
                    <Radar name="도입 후" dataKey="after" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12"
          >
            {[
              { label: '불량 검출률', value: '99.8%', icon: TrendingUp },
              { label: '연간 절감', value: '5억원', icon: CheckCircle2 },
              { label: '가동률 증가', value: '+15%', icon: Activity },
              { label: '검사 시간', value: '-60%', icon: Eye },
            ].map((metric, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <metric.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl text-green-600 mb-2">{metric.value}</div>
                <p className="text-gray-600">{metric.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900">적용 사례</h2>
            <p className="text-xl text-gray-600">
              다양한 제조 현장에서 검증된 AIMAX의 솔루션
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all border-2 hover:border-green-500">
                  <h3 className="text-xl mb-3 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="bg-green-100 rounded-lg p-4">
                    <p className="text-green-800 font-medium">{useCase.result}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl mb-12 text-center text-gray-900">
              AIMAX 제조 AI 도입 효과
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-green-50 p-4 rounded-lg"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-white">
              제조 AI 도입을 지금 시작하세요
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              AIMAX 전문가가 귀사 공정에 최적화된 AI 전략을 제안합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-green-900 hover:bg-green-50 font-bold"
              >
                무료 컨설팅 신청
              </Button>
              <Link to="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  다른 솔루션 보기
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
