import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Target, Lightbulb, Award, Users, Rocket, Globe, ArrowRight, Quote } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'AI + AX = Value for All',
    description: 'AI 기술과 실무 경험(AX)을 결합하여 모든 이해관계자에게 가치를 제공합니다. 기술 그 자체가 아닌, 비즈니스 문제 해결에 집중합니다.',
  },
  {
    icon: Lightbulb,
    title: '데이터 중심의 의사결정',
    description: '모든 의사결정은 객관적 데이터 분석과 실험 결과에 기반합니다. 추측이 아닌, 검증된 인사이트로 비즈니스를 이끕니다.',
  },
  {
    icon: Rocket,
    title: '지속 가능한 성장',
    description: '단기 성과가 아닌, 장기적인 비즈니스 혁신을 지원합니다. AI는 도구이며, 진짜 목표는 지속 가능한 성장입니다.',
  },
];

const team = [
  {
    role: 'AI 전략 컨설턴트',
    description: '10년 이상의 금융/제조 AI 프로젝트 경험을 바탕으로 비즈니스 전략을 수립합니다.',
    expertise: ['AI 전략 수립', '비즈니스 분석', '프로젝트 관리'],
    icon: Target,
  },
  {
    role: '머신러닝 엔지니어',
    description: '최신 AI 기술을 연구하고 실전에 적용하여 최고 성능의 모델을 개발합니다.',
    expertise: ['딥러닝', 'MLOps', '모델 최적화'],
    icon: Lightbulb,
  },
  {
    role: '데이터 사이언티스트',
    description: '산업별 데이터 특성을 이해하고 인사이트를 도출하여 의사결정을 지원합니다.',
    expertise: ['데이터 분석', '통계 모델링', '시각화'],
    icon: Award,
  },
  {
    role: 'AI 아키텍트',
    description: '확장 가능하고 안정적인 AI 시스템 아키텍처를 설계하고 구현합니다.',
    expertise: ['시스템 설계', '클라우드', '인프라'],
    icon: Globe,
  },
];

const milestones = [
  {
    year: '2020',
    title: 'AIMAX 설립',
    description: 'AI 컨설팅 전문 기업으로 출발',
  },
  {
    year: '2021',
    title: '금융 AI 솔루션 런칭',
    description: '첫 금융권 프로젝트 성공적 완료',
  },
  {
    year: '2022',
    title: '제조 AI 솔루션 확장',
    description: '제조업 진출 및 주요 고객사 확보',
  },
  {
    year: '2023',
    title: '글로벌 파트너십',
    description: 'AWS, Google Cloud 파트너 체결',
  },
  {
    year: '2024',
    title: '산업 확장',
    description: '리테일, 헬스케어 등 다양한 산업으로 확장',
  },
  {
    year: '2025',
    title: 'AI 혁신 리더',
    description: '국내 최고의 AI 컨설팅 기업으로 자리매김',
  },
];

const testimonials = [
  {
    quote: 'AIMAX는 단순히 기술을 제공하는 것이 아니라, 우리의 비즈니스 파트너입니다.',
    author: '김OO 이사',
    company: 'A저축은행',
    role: '리스크관리부',
  },
  {
    quote: 'AI 도입을 망설이던 우리에게 AIMAX는 확신을 주었고, 결과로 증명했습니다.',
    author: '이OO 부장',
    company: 'B반도체 부품사',
    role: '생산기술팀',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              About AIMAX
            </h1>
            <p className="text-2xl text-blue-100 mb-4">
              AI로 세상을 읽고, 경험으로 미래를 설계합니다
            </p>
            <p className="text-xl text-blue-200">
              AIMAX는 AI 기술과 산업 전문성을 결합하여
              <br />
              기업의 디지털 전환을 성공으로 이끄는 AI 컨설팅 파트너입니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-12 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="w-10 h-10" />
                      <h2 className="text-3xl">Our Vision</h2>
                    </div>
                    <p className="text-2xl mb-4">
                      <strong>AI Experience for All</strong>
                    </p>
                    <p className="text-blue-200 text-lg leading-relaxed">
                      모든 기업이 AI 기술의 혜택을 누릴 수 있도록, 실용적이고 효과적인 AI 솔루션을 제공합니다. AI는 더 이상 대기업만의 전유물이 아닙니다.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Lightbulb className="w-10 h-10" />
                      <h2 className="text-3xl">Our Mission</h2>
                    </div>
                    <p className="text-2xl mb-4">
                      <strong>데이터를 비즈니스 성과로 연결</strong>
                    </p>
                    <p className="text-blue-200 text-lg leading-relaxed">
                      산업별 데이터를 실제 비즈니스 성과로 연결합니다. 단순한 기술 제공이 아닌, 비즈니스 목표 달성을 위한 전략적 파트너가 됩니다.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">우리가 AI를 다루는 방식</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">AIMAX의 핵심 가치</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all border-2 hover:border-blue-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">
              <Users className="inline-block w-10 h-10 mr-2 text-blue-600 dark:text-blue-400" />
              Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">다양한 전문성을 가진 팀이 함께합니다</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-xl transition-all border-2 hover:border-blue-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{member.role}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{member.description}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full inline-block mx-1">
                        {skill}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">AIMAX의 성장 스토리</p>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <Card className={`p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl mb-2 text-gray-900">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg flex-shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-white">고객의 목소리</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 bg-white relative h-full">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
                  <p className="text-lg text-gray-700 mb-6 italic relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full" />
                    <div>
                      <p className="text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.company} · {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MDMyMzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AIMAX Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end">
                <div className="p-12 text-white">
                  <h3 className="text-3xl mb-3">함께 만드는 AI의 미래</h3>
                  <p className="text-xl text-blue-100">
                    AIMAX 팀은 여러분의 성공을 위해 최선을 다합니다
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-white">
              AIMAX와 함께 성장하세요
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              AI 전문가와 상담하고 귀사의 미래를 설계하세요
            </p>
            <Link to="/">
              <Button
                size="lg"
                className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold"
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
