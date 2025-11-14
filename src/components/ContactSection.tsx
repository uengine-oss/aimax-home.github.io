import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('문의가 성공적으로 접수되었습니다!', {
      description: '귀사 전용 AI 로드맵 초안을 준비하여 3일 이내에 연락드리겠습니다.',
      duration: 5000,
    });

    setFormData({ name: '', company: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            지금 AIMAX 전문가와 상담하세요
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            맞춤형 AI 도입 전략서를 무료로 제안드립니다
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl mb-6 text-gray-900">무료 컨설팅 신청</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">이름 *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">회사명 *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="(주)AIMAX"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">이메일 *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="contact@aimax.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">문의 내용 *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="AI 도입 관련 문의사항을 자세히 적어주세요..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-6"
                >
                  {isSubmitting ? (
                    '전송 중...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      무료 상담 신청하기
                    </>
                  )}
                </Button>
              </form>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 mt-4">
                제출하신 정보는 상담 목적으로만 사용되며, 개인정보 보호정책에 따라 안전하게 관리됩니다.
              </p>
            </Card>
          </motion.div>

          {/* Contact Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-blue-200 text-sm">Email</p>
                    <p className="text-lg">contact@aimax.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-blue-200 text-sm">Phone</p>
                    <p className="text-lg">02-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-blue-200 text-sm">Address</p>
                    <p className="text-lg">서울특별시 강남구 테헤란로 123</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* What You Get */}
            <Card className="p-8">
              <h3 className="text-2xl mb-6 text-gray-900">무료 컨설팅에서 받을 수 있는 것</h3>
              <div className="space-y-4">
                {[
                  '귀사 산업 및 비즈니스에 특화된 AI 도입 로드맵',
                  '예상 투자 대비 효과(ROI) 분석',
                  '기술 스택 및 구현 방안 제안',
                  '성공 사례 및 레퍼런스 공유',
                  '3일 이내 전문가 미팅 일정 조율',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Response Time */}
            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-900">평균 응답 시간</p>
                  <p className="text-2xl text-blue-600">24시간 이내</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
