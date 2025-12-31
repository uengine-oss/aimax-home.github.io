import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import how01Image from '@/images/how-01.png';
import how02Image from '@/images/how-02.png';
import how03Image from '@/images/how-03.gif';
import how04Image from '@/images/how-04.png';
import how05Image from '@/images/how-05.png';

const Processgpt = [
  {
    title: '자연어 기반 프로세스 이해',
    description: 'AI 채팅을 통해 사용자의 입력을 분석하여 비즈니스 프로세스를 자동 생성합니다.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12.252 18.506a10.4 10.4 0 0 0 1.875-.302a5.2 5.2 0 0 0 2.342.151a1 1 0 0 1 .094-.007c.279 0 .645.16 1.179.497v-.554a.54.54 0 0 1 .28-.472q.349-.197.645-.443c.778-.65 1.217-1.518 1.217-2.436c0-.303-.048-.605-.143-.893q.354-.651.564-1.359c.45.665.692 1.45.695 2.252c0 1.248-.588 2.412-1.607 3.263q-.256.213-.535.392v1.298c0 .446-.522.703-.89.437a14 14 0 0 0-1.08-.72a3 3 0 0 0-.332-.165a6.4 6.4 0 0 1-.935.069c-1.27 0-2.445-.377-3.37-1.008m-6.72-2.595C3.927 14.568 3 12.737 3 10.775c0-4.008 3.832-7.213 8.511-7.213c4.68 0 8.513 3.204 8.513 7.213c0 4.008-3.833 7.212-8.513 7.212q-.789 0-1.555-.12c-.22.051-1.102.568-2.372 1.483c-.46.332-1.112.012-1.112-.547V16.59a8 8 0 0 1-.94-.68m4.455.592q.058 0 .117.009q.69.114 1.407.115c3.953 0 7.116-2.645 7.116-5.852c0-3.206-3.163-5.851-7.115-5.851S4.395 7.57 4.395 10.775c0 1.55.74 3.01 2.046 4.103q.494.412 1.076.74a.68.68 0 0 1 .35.589v1.276c1.005-.665 1.666-.98 2.12-.98"/>
        <path fill="currentColor" d="M8.062 12a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m3.657 0a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m3.656 0a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25"/>
      </svg>
    ),
  },
  {
    title: '맞춤형 프로세스 추천',
    description: '사용자 요구에 맞는 최적의 프로세스를 추천하고 개선 방안을 제안합니다.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32">
        <path fill="currentColor" d="M18 20v-2h1v-7h-1V9h4v2h-1v7h1v2zm-3.5 0h2L13 9h-3L6.503 20h2l.601-2h4.778zm-4.794-4l1.628-5.411l.256-.003L13.264 16zm16.511 5l-1.787 3.621l-3.996.58l2.892 2.82L22.643 32l3.574-1.879L29.791 32l-.683-3.98L32 25.202l-3.996-.581z"/>
        <path fill="currentColor" d="M17 30H0V0h30v17h-2V2H2v26h15z"/>
      </svg>
    ),
  },
  {
    title: '협업 강화',
    description: '프로세스 관리 효율성을 높이고 팀 간 협업을 강화합니다.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
        <g fill="currentColor">
          <path fillRule="evenodd" d="M3.646 2.49a1 1 0 0 0-1.322.502L.161 7.795a1 1 0 0 0 .5 1.322l1.49.671a1 1 0 0 0 1.323-.5l2.163-4.804a1 1 0 0 0-.5-1.322zM1.873 8.418a.681.681 0 1 0 .56-1.242a.681.681 0 0 0-.56 1.242m17.142.83a1 1 0 0 0 .58-1.29L17.73 3.034a1 1 0 0 0-1.29-.581l-1.527.579a1 1 0 0 0-.58 1.29l1.866 4.925a1 1 0 0 0 1.289.581zm-2.937-5.445a.681.681 0 1 0 .483 1.274a.681.681 0 0 0-.483-1.274" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M14.885 4.107h.008a.5.5 0 1 0-.087-.997h-.008l-.026.003l-.097.01l-.353.034c-.297.03-.708.077-1.162.137c-.895.118-2.004.298-2.73.54c-.352.117-.724.344-1.08.604c-.361.264-.735.585-1.093.918A28 28 0 0 0 6.438 7.24c-.419.474-.516 1.23-.024 1.766c.32.346.82.784 1.468.98c.677.203 1.457.124 2.254-.468l.999-.645l.018-.011c.143.087.342.237.58.436c.26.218.542.475.805.722a34 34 0 0 1 .88.86l.055.057l.014.014l.005.005l.059.06l.075.039c.403.2.846.128 1.19.012c.358-.12.714-.324 1.017-.525a9 9 0 0 0 1.075-.849l.018-.016l.005-.005l.001-.001s-.088-.31-.432-.672l-.271.34L16 10l-2.508.957L14 10.5l-.268-.717a34 34 0 0 0-.508-.49c-.27-.254-.568-.525-.85-.76c-.273-.23-.557-.448-.794-.578c-.394-.216-.78-.056-.988.079l-1.028.664l-.014.01c-.555.416-1.011.432-1.38.321c-.4-.12-.755-.412-1.02-.7c-.083-.09-.107-.263.037-.426a27 27 0 0 1 1.751-1.815c.341-.317.683-.61 1.002-.843c.326-.238.6-.393.807-.462c.624-.208 1.645-.379 2.544-.498a41 41 0 0 1 1.478-.167l.093-.009z" clipRule="evenodd"/>
          <path d="M14.127 10.177a35 35 0 0 0-.395-.394L14 10.5l-.508.457L16 10l.229-.66L16.5 9l-.255-.054l-.003.002l-.014.013l-.054.05a8 8 0 0 1-.895.699c-.27.18-.543.33-.783.41c-.186.063-.302.068-.369.057"/>
          <path fillRule="evenodd" d="m5.047 5.068l-.197-.46l-.197-.46l.04-.016l.113-.048a93 93 0 0 1 1.67-.69a38 38 0 0 1 1.372-.523c.203-.072.392-.134.55-.179c.136-.04.31-.084.452-.084c.13 0 .267.03.38.06c.122.033.256.077.392.127c.274.1.583.23.869.356a29 29 0 0 1 .992.466l.066.032l.018.009l.006.003a.5.5 0 0 1-.447.895l-.005-.003l-.016-.008l-.062-.03a29 29 0 0 0-.959-.45a13 13 0 0 0-.803-.33a4 4 0 0 0-.309-.1a1 1 0 0 0-.119-.026l-.009.002c-.02.003-.073.014-.172.042a9 9 0 0 0-.492.161c-.388.137-.865.322-1.332.509a87 87 0 0 0-1.651.681l-.111.047zm-.657-.263a.5.5 0 0 1 .263-.656l.197.46l.197.459a.5.5 0 0 1-.657-.263m-1.903 3.96a.5.5 0 0 1 .707-.02l-.344.363l-.343.364a.5.5 0 0 1-.02-.707m4.57 3.387l2.763 1.036a1.5 1.5 0 0 0 1.587-.344l2.09-2.09a.5.5 0 0 1 .707.708l-2.09 2.09a2.5 2.5 0 0 1-2.645.572l-2.82-1.057l-.023-.011a3 3 0 0 1-.434-.292c-.162-.125-.352-.28-.557-.455a57 57 0 0 1-1.358-1.199a128 128 0 0 1-1.623-1.5l-.109-.102l-.038-.036l.343-.364l.344-.363l.037.035l.107.101a132 132 0 0 0 1.61 1.488c.46.417.935.84 1.333 1.178c.2.169.377.313.52.424c.132.101.215.157.256.18M3.67 14.288a.5.5 0 0 1 .703-.063l.959.8a1.5 1.5 0 0 0 .753.334l1.236.174a.5.5 0 1 1-.138.99l-1.237-.173a2.5 2.5 0 0 1-1.255-.557l-.959-.8a.5.5 0 0 1-.063-.705" clipRule="evenodd"/>
        </g>
      </svg>
    ),
  },
];

export default function ProcessgptSection() {
  return (
    <section id="processgpt" className="py-20 bg-gradient-to-b from-white to-gray-50 border-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
          제품 소개 - ProcessGPT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            코딩 없이 대화만으로, AI 에이전트가 비즈니스 프로세스를 설계하고 실행합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {Processgpt.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group border-2 hover:border-blue-500 relative overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    {item.icon}
                  </div>

                  {/* title */}
                  <div className="mb-6">
                    <p className="text-gray-700 text-2xl font-bold">{item.title}</p>
                  </div>

                  {/* description */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
            <div className="text-center">
              <div>
                <p className="text-lg text-blue-100">
                  <strong>Process GPT는 생성 AI(LLM)의 기능을 활용하여 비즈니스 프로세스를 자연어로 정의하고 실행 가능한 모델로 변환합니다.</strong>
                </p>
                <p className="text-blue-200 mt-2">
                  이를 통해 전통적인 BPM 작업을 단순화하여 비용과 노력을 줄일 수 있고, LangChain과 Chat-GPT 모델을 통합하여 실행과 정의를 원활하게 합니다.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Process GPT의 핵심 기능 */}
      <div className="container mx-auto px-4 pt-20">
        {/* 1. 사람·에이전트 협업형 업무 실행 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2" style={{borderRadius: '15px', border: '10px solid #efefef'}}>
              <img src={how01Image} alt="ProcessGPT 에이전트 설정" className="rounded-lg w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-bold text-gray-900 mb-6 text-left border-b-15">1. 사람·에이전트 협업형 업무 실행</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>에이전트는 실무를 실행하고, 사람은 승인 및 결정을 담당합니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>BPMN 기반으로 업무 흐름을 시각화하고 팀 단위 협업을 자동화합니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 2. 스템 간 연결(A2A) 자동화 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2" style={{borderRadius: '15px', border: '10px solid #efefef'}}>
              <img src={how02Image} alt="ProcessGPT 프로세스 생성" className="rounded-lg w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-bold text-gray-900 mb-6 text-left border-b-15">2. 시스템 간 연결(A2A) 자동화</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>ERP, CRM, 그룹웨어 등 주요 시스템을 자동으로 연결합니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>데이터 조회, 입력, 문서 첨부 등 반복적인 작업을 자동 처리합니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>외부 API 및 MCP 툴과 연동하여 내외부 시스템 화면을 제어합니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 3. 프로세스 자동 생성 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2" style={{borderRadius: '15px', border: '10px solid #efefef'}}>
              <img src={how03Image} alt="ProcessGPT 프로세스 실행" className="rounded-lg w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-bold text-gray-900 mb-6 text-left border-b-15">3. 프로세스 자동 생성</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>자연어로 업무를 설명하면 BPMN 프로세스가 자동으로 모델링됩니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>휴먼 승인 및 검토 단계를 자동으로 삽입합니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>부서별, 역할별 업무 흐름을 자동으로 구성합니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 4. 지식 자동 축적 및 재사용 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2" style={{borderRadius: '15px', border: '10px solid #efefef'}}>
              <img src={how04Image} alt="ProcessGPT 개선" className="rounded-lg w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-bold text-gray-900 mb-6 text-left border-b-15">4. 지식 자동 축적 및 재사용</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>AI가 업무를 수행하면서 지속적으로 학습합니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>규칙, 메타데이터, 온톨로지를 자동으로 보강하여 업무 매뉴얼 및 룰북 생성에 활용합니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>사람의 피드백을 통해 프로세스를 지속적으로 개선합니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 5. 멀티모달 인터페이스 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2" style={{borderRadius: '15px', border: '10px solid #efefef'}}>
              <img src={how05Image} alt="ProcessGPT 프로세스 실행" className="rounded-lg w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-bold text-gray-900 mb-6 text-left border-b-15">5. 멀티모달 인터페이스</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>웹 기반 MCP(브라우저/데스크톱)와 모바일 앱 환경을 모두 지원하여 다양한 사용자의 업무 환경에 대응합니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>내근직은 정밀한 프로세스 설계 UI를, 외근·영업직은 음성/이미지 기반 모바일 인터페이스를 제공합니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mr-2" />
                  <span className="text-gray-700" style={{fontWeight: 'bold'}}>사용 환경에 따라 선택 가능한 멀티 인터페이스를 제공함으로써, 업무 장소나 기기에 구애받지 않고 일관된 사용자 경험과 작업 연속성을 확보할 수 있습니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
