import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Quote, TrendingUp, DollarSign, Clock, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const successStories = [
  {
    company: 'A저축은행',
    industry: '금융',
    problem: '리스크 예측 정확도 개선',
    results: [
      { label: '정확도 향상', value: '+25%', icon: Target },
      { label: '심사시간 단축', value: '40%', icon: Clock },
      { label: '부실 예측률', value: '99.2%', icon: TrendingUp },
    ],
    testimonial: '데이터에 기반한 확신을 얻었습니다.',
    author: '김OO 이사, 리스크관리부',
    chartData: [
      { name: '도입 전', accuracy: 65, time: 100 },
      { name: '도입 후', accuracy: 90, time: 60 },
    ],
  },
  {
    company: 'B반도체 부품사',
    industry: '제조',
    problem: '불량 검출 및 공정 최적화',
    results: [
      { label: '불량 검출률', value: '99.8%', icon: Target },
      { label: '연간 비용 절감', value: '5억원', icon: DollarSign },
      { label: '가동률 증가', value: '+15%', icon: TrendingUp },
    ],
    testimonial: 'AIMAX 덕분에 공정 안정성이 완전히 달라졌습니다.',
    author: '이OO 부장, 생산기술팀',
    chartData: [
      { name: '도입 전', defect: 92, cost: 100 },
      { name: '도입 후', defect: 99.8, cost: 35 },
    ],
  },
];

export default function SuccessSection() {
  return (
    <section id="success" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            실적 중심으로 증명하는 성공 사례
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            숫자로 말하는 AIMAX의 성과
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl text-gray-900">{story.company}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {story.industry}
                    </span>
                  </div>
                  <p className="text-gray-600">{story.problem}</p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <result.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl text-blue-700 mb-1">{result.value}</div>
                      <div className="text-xs text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mb-6 bg-white rounded-lg p-4 border border-gray-100">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={story.chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey={Object.keys(story.chartData[0])[1]} radius={[8, 8, 0, 0]}>
                        {story.chartData.map((entry, idx) => (
                          <Cell key={idx} fill={idx === 0 ? '#94a3b8' : '#3b82f6'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6 text-white relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-400 opacity-50" />
                  <p className="mb-4 italic">"{story.testimonial}"</p>
                  <p className="text-sm text-blue-200">— {story.author}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
