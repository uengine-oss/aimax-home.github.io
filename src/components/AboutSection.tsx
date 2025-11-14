import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const teamMembers = [
  {
    role: 'AI 전략 컨설턴트',
    description: '10년+ 금융/제조 AI 프로젝트 경험',
    icon: Target,
  },
  {
    role: '머신러닝 엔지니어',
    description: '최신 AI 기술 연구 및 실전 적용',
    icon: Lightbulb,
  },
  {
    role: '데이터 사이언티스트',
    description: '산업별 데이터 분석 및 모델링',
    icon: Award,
  },
];

const partners = [
  { name: 'AWS', category: 'Cloud Partner' },
  { name: 'Google Cloud', category: 'AI Platform' },
  { name: 'Microsoft Azure', category: 'Enterprise Solutions' },
  { name: 'NVIDIA', category: 'AI Computing' },
];

const values = [
  {
    title: 'AI + AX = Value for All',
    description: 'AI 기술과 실무 경험을 결합하여 모든 이해관계자에게 가치를 제공합니다.',
  },
  {
    title: '데이터 중심의 의사결정',
    description: '객관적 데이터 분석을 통해 비즈니스 인사이트를 도출합니다.',
  },
  {
    title: '지속 가능한 성장',
    description: '단기 성과가 아닌, 장기적인 비즈니스 혁신을 지원합니다.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            About AIMAX
          </h2>
          <p className="text-2xl text-blue-600 mb-4">
            AI로 세상을 읽고, 경험으로 미래를 설계합니다
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIMAX는 AI 기술과 산업 전문성을 결합하여 기업의 디지털 전환을 성공으로 이끄는 AI 컨설팅 파트너입니다
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20" />
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl mb-4 flex items-center gap-3">
                    <Target className="w-8 h-8" />
                    Our Vision
                  </h3>
                  <p className="text-xl text-blue-100">
                    <strong>AI Experience for All</strong>
                  </p>
                  <p className="text-blue-200 mt-2">
                    모든 기업이 AI 기술의 혜택을 누릴 수 있도록, 실용적이고 효과적인 AI 솔루션을 제공합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-4 flex items-center gap-3">
                    <Lightbulb className="w-8 h-8" />
                    Our Mission
                  </h3>
                  <p className="text-xl text-blue-100">
                    <strong>산업별 데이터를 실제 비즈니스 성과로 연결</strong>
                  </p>
                  <p className="text-blue-200 mt-2">
                    단순한 기술 제공이 아닌, 비즈니스 목표 달성을 위한 전략적 파트너가 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h3 className="text-3xl mb-8 text-center text-gray-900">우리가 AI를 다루는 방식</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-500">
                <h4 className="text-xl mb-3 text-gray-900">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h3 className="text-3xl mb-8 text-center text-gray-900">
            <Users className="inline-block w-8 h-8 mr-2 text-blue-600" />
            Expert Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl mb-2 text-gray-900">{member.role}</h4>
                  <p className="text-gray-600">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl mb-8 text-center text-gray-900">Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-gray-900 mb-1">{partner.name}</p>
                <p className="text-sm text-gray-500">{partner.category}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            글로벌 리더들과의 협력을 통해 최고 수준의 AI 솔루션을 제공합니다
          </p>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MDMyMzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AIMAX Team"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
              <div className="p-8 text-white">
                <p className="text-2xl mb-2">함께 만드는 AI의 미래</p>
                <p className="text-blue-200">AIMAX 팀은 여러분의 성공을 위해 최선을 다합니다</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
