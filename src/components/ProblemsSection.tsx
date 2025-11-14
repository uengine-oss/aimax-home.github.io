import { motion } from 'motion/react';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';

const problems = [
  {
    problem: '수많은 데이터 속 미세한 부실 징후를 놓치고 있나요?',
    solution: 'AI Risk Detection',
    description: '신용평가모델이 99.9% 데이터 속 0.1%의 이상을 포착',
    icon: '🏦',
  },
  {
    problem: '숙련자 경험에만 의존하는 품질 검사를 개선하고 싶으신가요?',
    solution: 'AI Vision System',
    description: '미세 불량 검출률 99.8%, 24시간 자동 관리',
    icon: '🏭',
  },
  {
    problem: 'AI 도입, 어디서부터 시작해야 할지 막막하신가요?',
    solution: 'AIMAX Consulting Roadmap',
    description: '진단 → 설계 → 운영 전 과정을 지원',
    icon: '🚀',
  },
];

export default function ProblemsSection() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            당신의 비즈니스 고민, AIMAX가 해결합니다
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            산업별 맞춤형 AI 솔루션으로 실질적인 성과를 만듭니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-blue-500 relative overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-6">{item.icon}</div>

                  {/* Problem */}
                  <div className="mb-6">
                    <div className="flex items-start gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{item.problem}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center mb-6">
                    <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-2 transition-transform" />
                  </div>

                  {/* Solution */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <h3 className="text-blue-900">{item.solution}</h3>
                    </div>
                    <p className="text-blue-700 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
