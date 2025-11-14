import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Search, Cog, Link2, TrendingUp, CheckCircle2, Clock, Users, FileText, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Deep-Dive Analysis',
    subtitle: '비즈니스 모델 및 KPI 분석',
    icon: Search,
    color: 'from-blue-500 to-blue-600',
    duration: '1-2주',
    description: '귀사의 비즈니스 목표와 현황을 심층 분석하여 AI 적용 가능성을 진단합니다.',
    activities: [
      '비즈니스 목표 및 KPI 정의',
      '현재 데이터 인프라 분석',
      '프로세스 병목 지점 파악',
      'AI 적용 가능 영역 도출',
      '예상 ROI 계산',
    ],
    deliverables: ['비즈니스 분석 리포트', 'AI 적용 가능성 평가서', 'ROI 예측 모델'],
  },
  {
    step: '02',
    title: 'Customized AI Design',
    subtitle: '데이터 특성에 맞춘 아키텍처 설계',
    icon: Cog,
    color: 'from-purple-500 to-purple-600',
    duration: '2-3주',
    description: '산업별, 기업별 데이터 특성을 고려한 맞춤형 AI 모델을 설계합니다.',
    activities: [
      '데이터 수집 및 전처리 계획',
      'AI 모델 아키텍처 설계',
      '기술 스택 선정',
      'PoC(Proof of Concept) 개발',
      '성능 검증 및 최적화',
    ],
    deliverables: ['AI 솔루션 설계서', 'PoC 데모', '기술 아키텍처 문서'],
  },
  {
    step: '03',
    title: 'Seamless Integration',
    subtitle: '기존 시스템과 충돌 없는 현장 중심 통합',
    icon: Link2,
    color: 'from-green-500 to-green-600',
    duration: '4-8주',
    description: '기존 IT 인프라와 업무 프로세스를 존중하며 AI 시스템을 통합합니다.',
    activities: [
      '기존 시스템 연동',
      'AI 모델 배포 및 운영화',
      '사용자 교육 및 트레이닝',
      '변화 관리 지원',
      '단계적 확산 전략 실행',
    ],
    deliverables: ['통합 시스템', '운영 매뉴얼', '교육 자료', '파일럿 운영 결과'],
  },
  {
    step: '04',
    title: 'Sustainable Growth',
    subtitle: '지속적 고도화 및 모니터링 지원',
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-600',
    duration: '지속적',
    description: 'AI 모델의 성능을 지속적으로 모니터링하고 개선합니다.',
    activities: [
      '실시간 성능 모니터링',
      '모델 재학습 및 업데이트',
      '정기 성과 리포팅',
      '개선 사항 발굴 및 적용',
      '기술 지원 및 유지보수',
    ],
    deliverables: ['월간 성과 리포트', '모델 업데이트', '개선 제안서', 'SLA 보고서'],
  },
];

const methodology = [
  {
    title: 'Agile 방법론',
    description: '빠른 반복 개발로 변화하는 요구사항에 유연하게 대응합니다.',
    icon: Clock,
  },
  {
    title: '협업 중심',
    description: '고객과의 긴밀한 협업으로 최적의 솔루션을 찾아갑니다.',
    icon: Users,
  },
  {
    title: '데이터 기반 의사결정',
    description: '모든 의사결정은 데이터와 실험 결과에 기반합니다.',
    icon: FileText,
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 dark:from-purple-950 dark:via-purple-900 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              AIMAX의 AX 설계 프로세스
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              체계적인 방법론으로 AI 프로젝트 성공을 보장합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <process.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                          {process.step}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{process.duration}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-3xl mb-2 text-gray-900 dark:text-white">{process.title}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{process.subtitle}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{process.description}</p>

                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="text-lg mb-3 text-gray-900 dark:text-white">주요 활동</h4>
                      <div className="space-y-2">
                        {process.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm mb-2 text-gray-900 dark:text-white">산출물</h4>
                      <div className="flex flex-wrap gap-2">
                        {process.deliverables.map((deliverable, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <Card className={`p-8 bg-gradient-to-br ${process.color} text-white h-full`}>
                      <div className="text-6xl mb-4 opacity-20">{process.step}</div>
                      <h4 className="text-2xl mb-4">{process.title}</h4>
                      <div className="space-y-3">
                        {process.activities.slice(0, 3).map((activity, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-white/90">
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">
              우리의 방법론
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              검증된 방법론으로 프로젝트 성공률을 높입니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {methodology.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-white">
              AIMAX와 함께 AI 프로젝트를 시작하세요
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              전문가와 상담하고 귀사에 최적화된 로드맵을 받아보세요
            </p>
            <Link to="/">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 font-bold"
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                무료 컨설팅 신청하기
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
