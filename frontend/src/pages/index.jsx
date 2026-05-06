export default function Home() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Tìm việc </span>
                <span className="gradient-gold">mơ ước</span>
                <br />
                <span className="text-white">Xây dựng </span>
                <span className="gradient-gold">sự nghiệp tương lai</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Kết nối tài năng với cơ hội việc làm chất lượng cao tại Việt Nam
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gold text-lg py-4 px-10">
                  Tìm việc ngay →
                </button>
                <button className="btn-outline-white text-lg py-4 px-10">
                  Dành cho nhà tuyển dụng
                </button>
              </div>
            </div>
            <div className="hidden md:block animate-slide-up">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-navy-light to-navy-lighter rounded-3xl flex items-center justify-center border border-yellow-400/20">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍💼</div>
                    <p className="text-gray-400">Confident Professional</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold shadow-xl">
                  98% Tỷ lệ hài lòng
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="stats-bar py-8">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500.000+', label: 'Ứng viên' },
              { number: '10.000+', label: 'Doanh nghiệp' },
              { number: '50.000+', label: 'Việc làm đang tuyển' },
              { number: '98%', label: 'Tỷ lệ hài lòng' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Ngành nghề </span>
              <span className="gradient-gold">nổi bật</span>
            </h2>
            <p className="text-xl text-gray-400">
              Khám phá cơ hội việc làm trong các lĩnh vực hàng đầu
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Công nghệ & IT', desc: 'Lập trình, AI, Data Science', icon: '💻', color: 'from-blue-600 to-cyan-600' },
              { title: 'Kinh doanh & Marketing', desc: 'Sales, Digital Marketing', icon: '📈', color: 'from-green-600 to-emerald-600' },
              { title: 'Tài chính & Ngân hàng', desc: 'Banking, Fintech, Investment', icon: '💰', color: 'from-yellow-600 to-orange-600' },
              { title: 'Sản xuất & Logistics', desc: 'Supply Chain, Manufacturing', icon: '🚚', color: 'from-purple-600 to-pink-600' },
              { title: 'Nhân sự & Phát triển', desc: 'HR, Training, Coaching', icon: '👥', color: 'from-red-600 to-rose-600' },
            ].map((cat, i) => (
              <div key={i} className="category-card p-6 rounded-2xl text-center cursor-pointer">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-4xl`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{cat.desc}</p>
                <span className="text-yellow-400 font-medium text-sm hover:text-yellow-300 transition-colors">
                  Khám phá →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-navy-light">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-navy-lighter rounded-3xl h-80 flex items-center justify-center border border-yellow-400/20">
              <div className="text-center">
                <div className="text-8xl mb-4">🏢</div>
                <p className="text-gray-400">Modern Office Environment</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">Về </span>
                <span className="gradient-gold">VIỆC LÀM VIỆT</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Chúng tôi kết nối tài năng với cơ hội việc làm chất lượng cao. 
                Với công nghệ AI tiên tiến, chúng tôi giúp ứng viên tìm được việc làm mơ ước 
                và hỗ trợ doanh nghiệp tìm kiếm nhân tài phù hợp.
              </p>
              <button className="btn-gold">
                Tìm hiểu thêm →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Khách hàng nói gì về </span>
              <span className="gradient-gold">chúng tôi</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Nguyễn Văn A', role: 'Software Engineer', content: 'Tìm được việc mơ ước sau 2 tuần sử dụng platform. AI matching rất chính xác!', rating: 5 },
              { name: 'Trần Thị B', role: 'Marketing Manager', content: 'Giao diện chuyên nghiệp, quy trình ứng tuyển mượt mà. Rất hài lòng!', rating: 5 },
              { name: 'Công ty XYZ', role: 'HR Director', content: 'Tìm được ứng viên chất lượng cao nhanh chóng. Tiết kiệm 50% thời gian tuyển dụng.', rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient section-padding">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Sẵn sàng cho bước đi tiếp theo?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Tham gia cùng hàng ngàn ứng viên và doanh nghiệp đang sử dụng VIỆC LÀM VIỆT
          </p>
          <button className="btn-gold text-xl py-5 px-12 animate-pulse">
            Tham gia ngay hôm nay
          </button>
        </div>
      </section>
    </div>
  );
}