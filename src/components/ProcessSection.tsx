import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Search, Cog, Link2, TrendingUp } from 'lucide-react';

const processes = [
  {
    step: '01',
    title: 'Deep-Dive',
    subtitle: '비즈니스 모델 및 KPI 분석',
    description: '귀사의 비즈니스 목표와 현황을 심층 분석하여 AI 적용 가능성을 진단합니다. 데이터 현황, 프로세스 병목 지점, 개선 가능 영역을 명확히 파악합니다.',
    icon: Search,
    color: 'from-blue-500 to-blue-600',
  },
  {
    step: '02',
    title: 'Customized AI',
    subtitle: '데이터 특성에 맞춘 아키텍처 설계',
    description: '산업별, 기업별 데이터 특성을 고려한 맞춤형 AI 모델을 설계합니다. 최신 머신러닝 기술과 검증된 알고리즘을 활용하여 최적의 솔루션을 제공합니다.',
    icon: Cog,
    color: 'from-purple-500 to-purple-600',
  },
  {
    step: '03',
    title: 'Seamless Integration',
    subtitle: '기존 시스템과 충돌 없는 현장 중심 통합',
    description: '기존 IT 인프라와 업무 프로세스를 존중하며, 최소한의 변경으로 AI 시스템을 통합합니다. 직원 교육과 변화 관리를 함께 진행합니다.',
    icon: Link2,
    color: 'from-green-500 to-green-600',
  },
  {
    step: '04',
    title: 'Sustainable Growth',
    subtitle: '지속적 고도화 및 모니터링 지원',
    description: 'AI 모델의 성능을 지속적으로 모니터링하고, 새로운 데이터로 학습시켜 정확도를 개선합니다. 정기적인 리포트와 개선 제안을 제공합니다.',
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-600',
  },
];

export default function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            결과로 증명하는 AIMAX의 AX 설계 프로세스
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI와 경험을 결합하여 비즈니스 가치를 창출합니다
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-orange-200 transform -translate-x-1/2" />

            {/* Process Steps */}
            <div className="space-y-16">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <Card
                      className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-500"
                      onClick={() => setSelectedStep(selectedStep === index ? null : index)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${process.color}`}>
                          <process.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {process.step}
                            </span>
                            <div>
                              <h3 className="text-gray-900">{process.title}</h3>
                              <p className="text-sm text-gray-600">{process.subtitle}</p>
                            </div>
                          </div>
                          <AnimatePresence>
                            {selectedStep === index && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-gray-700 mt-3"
                              >
                                {process.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden md:block relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${process.color} border-4 border-white shadow-lg`}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
