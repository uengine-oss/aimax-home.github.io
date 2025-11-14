import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, BookOpen, FileText, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const insights = [
  {
    type: 'Blog',
    title: '2025년 금융권 AI 리스크 예측 트렌드',
    description: 'AI 기반 리스크 관리가 금융권의 새로운 표준이 되고 있습니다. 최신 동향과 적용 사례를 살펴봅니다.',
    date: '2025. 10. 10',
    readTime: '5분',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MDQxMzEwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Finance',
  },
  {
    type: 'Tech Note',
    title: 'AI Vision 시스템의 불량 검출 정확도 향상 기법',
    description: '딥러닝 기반 비전 검사 시스템의 핵심 기술과 AIMAX의 최적화 전략을 공유합니다.',
    date: '2025. 10. 05',
    readTime: '10분',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMzY3NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Manufacturing',
  },
  {
    type: 'Blog',
    title: '제조 현장의 AI 도입, 실패하지 않는 5가지 원칙',
    description: 'AI 프로젝트 성공률을 높이는 AIMAX의 검증된 방법론을 소개합니다.',
    date: '2025. 09. 28',
    readTime: '7분',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMzY3NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Strategy',
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            AIMAX Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI와 산업에 대한 깊이 있는 인사이트를 공유합니다
          </p>
        </motion.div>

        {/* Category Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['All', 'Blog', 'Tech Note', 'Case Study'].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full border-2 transition-all ${
                category === 'All'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {insight.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-sm">
                      {insight.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {insight.description}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{insight.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            <FileText className="w-5 h-5 mr-2" />
            모든 인사이트 보기
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
        >
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Published Articles</p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-2">20+</div>
            <p className="text-gray-600">Technical Deep-Dives</p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-2">10K+</div>
            <p className="text-gray-600">Monthly Readers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
