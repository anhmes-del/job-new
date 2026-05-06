import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Trang chủ' },
    { href: '/jobs', label: 'Tìm việc' },
    { href: '/companies', label: 'Công ty' },
    { href: '/blog', label: 'Blog' },
    { href: '/events', label: 'Sự kiện' },
    { href: '/contact', label: 'Liên hệ' },
  ];

  return (
    <div className="min-h-screen bg-navy">
      <nav className="glass-dark sticky top-0 z-50 px-6 py-4">
        <div className="container-max flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="gradient-gold">VIỆC LÀM</span> VIỆT
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  router.pathname === item.href
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="btn-gold text-sm py-2 px-6 hidden md:block">
            Đăng tin tuyển dụng
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="btn-gold w-full text-sm py-2 mt-4">
              Đăng tin tuyển dụng
            </button>
          </div>
        )}
      </nav>

      <main>
        {children}
      </main>

      <footer className="bg-navy-light py-12 border-t border-navy-lighter">
        <div className="container-max px-6 text-center text-gray-400">
          <p>&copy; 2026 VIỆC LÀM VIỆT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}