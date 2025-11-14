import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-2xl font-bold flex items-baseline">
                <span className="text-white">AI</span>
                <span className="text-3xl text-orange-500 mx-0.5">M</span>
                <span className="text-white">AX</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              AI Experience for All<br />
              AI로 세상을 읽고, 경험으로 미래를 설계합니다
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/finance" className="text-gray-400 hover:text-blue-400 transition-colors">
                  금융 AI 솔루션
                </Link>
              </li>
              <li>
                <Link to="/solutions/manufacturing" className="text-gray-400 hover:text-blue-400 transition-colors">
                  제조 AI 솔루션
                </Link>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-blue-400 transition-colors">
                  컨설팅 프로세스
                </a>
              </li>
              <li>
                <a href="#success" className="text-gray-400 hover:text-blue-400 transition-colors">
                  성공 사례
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About AIMAX
                </a>
              </li>
              <li>
                <a href="#insights" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">contact@aimax.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">02-1234-5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  서울특별시 강남구<br />
                  테헤란로 123
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AIMAX. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
