import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Users, Brain, TrendingUp, Zap, Boxes, Briefcase } from 'lucide-react';

const organizationData = {
  company: {
    title: 'AIMAX',
    subtitle: '(에이아이맥스)',
  },
  ceo: {
    title: '대표이사',
    name: '은창수',
  },
  centers1: {
    name: 'AI 연구센터',
    leader: '장진영 AI센터장(이사)',
  },
  centers2: {
    name: '경영전략본부',
    leader: '김효순 본부장(실장)',
  },
  // centers: [
  //   {
  //     name: 'AI 연구센터',
  //     leader: '장진영 AI센터장(이사)',
  //     icon: Brain,
  //   },
  //   {
  //     name: '경영전략본부',
  //     leader: '김효순 본부장(실장)',
  //     icon: TrendingUp,
  //   },
  // ],
  departments: [
    {
      name: 'AI 융합컨설팅',
      leader: '김지홍 박사(이사)',
      icon: Users,
    },
    {
      name: 'AI Biz융합본부',
      leaders: ['이호태 본부장(이사)'],
      icon: Briefcase,
    },
    {
      name: 'AI 융합개발본부',
      leaders: ['김정익 본부장(이사)', '예민수 팀장'],
      icon: Zap,
    },
    {
      name: 'AI 솔루션본부',
      leader: '박승현 CTO(이사)',
      icon: Boxes,
    },
    {
      name: 'AI PMO본부',
      leader: '오우근 이사',
      icon: Briefcase,
    },
    {
      name: 'AI 교육팀',
      leader: '정석진 팀장',
      icon: Users,
    },
  ],
};

export default function OrganizationChart() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Our Organization
          </h3>
          <p className="text-lg text-gray-600">
            AIMAX 회사 조직도
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Company Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Card className="p-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white min-w-[280px] shadow-xl border-0">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-1">{organizationData.company.title}</h4>
                <p className="text-blue-200 text-lg">{organizationData.company.subtitle}</p>
              </div>
            </Card>
          </motion.div>

          {/* Vertical Line */}
          <div className="flex justify-center">
            <div style={{
              width: '2px',
              height: '32px',
              background: 'linear-gradient(to bottom, #4b5563, #60a5fa)'
            }}></div>
          </div>

          {/* CEO Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Card 
              className="text-white"
              style={{
                padding: '20px',
                background: 'linear-gradient(to bottom right, #1f2937, #374151)',
                minWidth: '240px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                border: 'none'
              }}
            >
              <div className="text-center">
                <h4 className="text-xl font-bold mb-1">{organizationData.ceo.title}</h4>
                <p className="text-gray-300 text-lg">{organizationData.ceo.name}</p>
              </div>
            </Card>
          </motion.div>

          {/* Vertical Line */}
          <div className="flex justify-center">
            <div style={{
              width: '2px',
              height: '48px',
              background: 'linear-gradient(to bottom, #2563eb, #60a5fa)'
            }}></div>
          </div>

          {/* Centers Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-row gap-8 justify-center items-center"
          >
            {/* {organizationData.centers.map((center, index) => (
              <Card 
                key={index} 
                className="p-6 bg-blue-50 border-2 border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h5 className="text-xl font-bold text-gray-900 mb-2">{center.name}</h5>
                    <p className="text-gray-600 text-sm">{center.leader}</p>
                  </div>
                </div>
              </Card>
            ))} */}
            <Card 
              className="p-6 bg-blue-50 border-2 border-blue-200 hover:shadow-lg transition-all duration-300"
              style={{
                marginLeft: '-12px'
              }}
            >
              <div className="text-center">
                <h5 className="text-xl font-bold text-gray-900 mb-2">{organizationData.centers1.name}</h5>
                <p className="text-gray-600 text-sm">{organizationData.centers1.leader}</p>
              </div>
            </Card>

            {/* Connection Lines */}
          <div className="relative" style={{ height: '100px' }}>
            {/* Vertical line from top */}
            <div style={{
              position: 'absolute',
              left: '80%',
              top: '-5px',
              width: '2px',
              height: '110px',
              background: 'linear-gradient(to bottom, #60a5fa, #60a5fa)',
              transform: 'translateX(-80%)'
            }}></div>
            
            {/* Horizontal line */}
            <div style={{
              position: 'absolute',
              left: '-35px',
              right: '0',
              top: '50px',
              width: '70px',
              height: '2px',
              background: 'linear-gradient(to right, transparent, #93c5fd 10%, #93c5fd 90%, transparent)'
            }}></div>
          </div>

            <Card 
              className="p-6 bg-blue-50 border-2 border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <h5 className="text-xl font-bold text-gray-900 mb-2">{organizationData.centers2.name}</h5>
                <p className="text-gray-600 text-sm">{organizationData.centers2.leader}</p>
              </div>
            </Card>
          </motion.div>

          {/* Connection Lines */}
          <div className="relative" style={{ height: '64px' }}>
            {/* Vertical line from top */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              width: '2px',
              height: '32px',
              background: 'linear-gradient(to bottom, #60a5fa, #93c5fd)',
              transform: 'translateX(-50%)'
            }}></div>
            
            {/* Horizontal line */}
            <div style={{
              position: 'absolute',
              left: '0',
              right: '0',
              top: '32px',
              height: '2px',
              background: 'linear-gradient(to right, transparent, #93c5fd 10%, #93c5fd 90%, transparent)'
            }}></div>
            
            {/* Vertical lines to departments - 6 departments */}
            <div style={{
              position: 'absolute',
              left: '8.33%',
              top: '32px',
              width: '2px',
              height: '32px',
              background: '#93c5fd'
            }}></div>
            {/* <div style={{
              position: 'absolute',
              left: '25%',
              top: '32px',
              width: '2px',
              height: '32px',
              background: '#93c5fd'
            }}></div>
            <div style={{
              position: 'absolute',
              left: '41.67%',
              top: '32px',
              width: '2px',
              height: '32px',
              background: '#93c5fd'
            }}></div>
            <div style={{
              position: 'absolute',
              left: '58.33%',
              top: '32px',
              width: '2px',
              height: '32px',
              background: '#93c5fd'
            }}></div>
            <div style={{
              position: 'absolute',
              left: '75%',
              top: '32px',
              width: '2px',
              height: '32px',
              background: '#93c5fd'
            }}></div> */}
            <div style={{
              position: 'absolute',
              left: '91.67%',
              top: '32px',
              width: '2px',
              height: '32px',
              background: '#93c5fd'
            }}></div>
          </div>

          {/* Departments Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6"
          >
            {organizationData.departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="org-dept-box"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500 bg-white">
                  <div className="flex flex-col items-center text-center">
                    <h5 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      {dept.name}
                    </h5>
                    <div className="space-y-1">
                      {dept.leaders ? (
                        dept.leaders.map((leader, idx) => (
                          <p key={idx} className="text-sm text-gray-600">
                            {leader}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-gray-600">{dept.leader}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decoration */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-block px-6 py-3 bg-blue-50 rounded-full border border-blue-200">
            <p className="text-blue-800 text-sm font-medium">
              전문성과 협업으로 AI 혁신을 만들어갑니다
            </p>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}