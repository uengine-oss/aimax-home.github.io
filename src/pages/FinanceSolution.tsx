import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Shield, TrendingUp, FileSearch, Users, CheckCircle2, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const features = [
  {
    icon: Shield,
    title: 'AI Risk Detection',
    description: '실시간 리스크 모니터링과 이상 징후 자동 탐지로 부실 채권 발생을 사전 예방합니다.',
  },
  {
    icon: FileSearch,
    title: '신용평가 자동화',
    description: '대량의 신용 데이터를 분석하여 정확한 신용등급을 자동으로 산출합니다.',
  },
  {
    icon: Users,
    title: 'AML/KYC 분석',
    description: '자금세탁 방지와 고객확인 절차를 AI로 자동화하여 컴플라이언스를 강화합니다.',
  },
  {
    icon: TrendingUp,
    title: '포트폴리오 최적화',
    description: '시장 데이터와 리스크 분석을 결합하여 최적의 투자 포트폴리오를 제안합니다.',
  },
];

const kpis = [
  { name: '정확도', value: 90, target: 99.2, color: '#3b82f6' },
  { name: '처리시간', value: 100, target: 40, color: '#10b981', inverse: true },
  { name: '승인율', value: 75, target: 92, color: '#8b5cf6' },
];

const chartData = [
  { month: '1월', before: 65, after: 87 },
  { month: '2월', before: 68, after: 89 },
  { month: '3월', before: 70, after: 91 },
  { month: '4월', before: 72, after: 93 },
  { month: '5월', before: 74, after: 95 },
  { month: '6월', before: 76, after: 97 },
];

const benefits = [
  '리스크 예측 정확도 25% 이상 향상',
  '대출 심사 시간 40% 단축',
  '부실 채권 발생률 60% 감소',
  '컴플라이언스 비용 30% 절감',
  '고객 만족도 향상 (승인 대기 시간 감소)',
  '업무 효율성 증대 및 인적 오류 최소화',
];

export default function FinanceSolution() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6">
                <span className="text-blue-200">Financial AI Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl mb-6 text-white">
                금융의 리스크를
                <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  AI로 관리합니다
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                데이터 기반 의사결정으로 금융 리스크를 최소화하고,
                고객에게 더 나은 금융 서비스를 제공합니다.
              </p>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold"
              >
                금융 AI 적용 상담
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
                  src="https://images.unsplash.com/photo-1733503747506-773e56e4078f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDM3MTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Financial Technology"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
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
            <h2 className="text-4xl mb-4 text-gray-900">금융 AI 핵심 기능</h2>
            <p className="text-xl text-gray-600">
              금융 산업 특화 AI 솔루션으로 비즈니스 가치를 창출합니다
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
                <Card className="p-8 h-full hover:shadow-xl transition-all border-2 hover:border-blue-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* KPI Performance */}
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
              A저축은행 도입 후 6개월 간의 성과
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 mb-12">
                <h3 className="text-2xl mb-6 text-gray-900">리스크 예측 정확도 추이</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="before" stackId="1" stroke="#94a3b8" fill="#94a3b8" name="도입 전" />
                    <Area type="monotone" dataKey="after" stackId="2" stroke="#3b82f6" fill="#3b82f6" name="도입 후" />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>

            {/* KPI Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center">
                    <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="text-lg text-gray-700 mb-2">{kpi.name}</h4>
                    <div className="flex items-end justify-center gap-2 mb-2">
                      <span className="text-3xl text-gray-400 line-through">{kpi.value}%</span>
                      <span className="text-5xl text-blue-600">{kpi.target}%</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {kpi.inverse ? '단축' : '향상'}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl mb-12 text-center text-gray-900">
              AIMAX 금융 AI 도입 효과
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              금융 AI 도입을 지금 시작하세요
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              AIMAX 전문가가 귀사에 최적화된 AI 전략을 제안합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold"
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
