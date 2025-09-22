import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">Logo</div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Welding the Future with Intelligent Robotics
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Revolutionize your manufacturing with cutting-edge welding robots
            that deliver precision and efficiency. Transform your production
            capabilities with IIMT's advanced robotic solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              MIG Robot
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Laser Robot
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-28 px-4 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Advanced welding solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced solutions for modern manufacturing challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-2xl border-2 border-black hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/PlaceholderImage_1758538831609.png"
                  alt="MIG Welding Robot"
                  className="w-[100%] h-[70%] object-contain "
                />
              </div>
              <div className="">
                {" "}
                <h3 className="text-2xl font-bold mb-4 text-black">
                  MIG Welding Robot
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Portable, easy to deploy, and compatible with popular welding
                  machines. Supports multiple processes (straight, arc, weaving,
                  multi-pass) for automotive, shipbuilding, and steel
                  structures.
                </p>
                <button className="flex items-center text-black font-medium text-sm hover:text-gray-700 transition-colors">
                  Details
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-black hover:shadow-lg transition-shadow">
              <div className="mb-6 ">
                <img
                  src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/PlaceholderImage_1758538831609.png"
                  alt="MIG Welding Robot"
                  className="w-[100%] h-[70%] object-contain "
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Laser Welding Robot
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Lightweight and efficient with advanced seam tracking. Ensures
                high-quality, stable welding for carbon steel, stainless steel,
                copper, and aluminum in aerospace, electronics, and precision
                industries.
              </p>
              <button className="flex items-center text-black font-medium text-sm hover:text-gray-700 transition-colors">
                Details
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-28 px-4 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Key Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced robotic welding solutions for modern manufacturing
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                category: "Deployment",
                title: "Flexible Magnetic Base",
                description:
                  "Portable design enables quick setup and easy repositioning in various work environments.",
                image:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/FlexibleMagneticBase_1758539796738.png",
              },
              {
                category: "Operation",
                title: "User-Friendly Interface",
                description:
                  "Intuitive drag-and-drop teaching system eliminates complex programming requirements.",
                image:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/User-FriendlyInterface_1758540380927.png",
              },
              {
                category: "Precision",
                title: "High-Accuracy Welding",
                description:
                  "Exceptional repeatability with precision ranging from ±0.02 to 0.05mm.",
                image:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/High-AccuracyWelding_1758540395132.png",
              },
              {
                category: "Versatility",
                title: "Multi-Process Capabilities",
                description:
                  "Supports multiple welding techniques including MIG/MAG and laser welding with advanced multi-pass functionality.",
                image:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Multi-ProcessCapabilities_1758540520245.png",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-2 border-black  h-130"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6 p-8">
                    <div className="text-sm text-gray-600 font-medium">
                      {service.category}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex space-x-4">
                      <button className="px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors">
                        Details
                      </button>
                      <button className="text-black font-medium hover:underline">
                        More →
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end h-130">
                    <img
                      src={service.image}
                      className="w-[90%]  object-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 lg:py-28">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="space-y-16">
            {[
              {
                category: "Solution",
                title: "Portable MIG Welding Robot",
                features: [
                  "Portable with magnetic base - easy to deploy in any position",
                  "Drag-and-drop teaching - no coding required",
                  "Supports MIG/MAG processes (0.8-1.6 mm wires, 5-50 mm plates)",
                  "Multi-mode welding: straight, arc, weaving, multi-pass",
                  "Ideal for automotive, shipbuilding, aerospace, and steel structures",
                ],
              },
              {
                category: "Technology",
                title: "Advanced Laser Welding System",
                features: [
                  "High-precision laser welding with seam tracking capability",
                  "Lightweight design for easy integration and deployment",
                  "Supports various materials: carbon steel, stainless steel, aluminum",
                  "Real-time quality monitoring and control systems",
                  "Perfect for electronics, aerospace, and precision manufacturing",
                ],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-2 border-black p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
                      <div className="w-full h-full bg-gray-200 rounded-lg flex flex-col items-center justify-center space-y-4">
                        <div className="text-center space-y-2">
                          <div className="text-xs text-gray-500 mb-2">
                            Stationary Welding Station
                          </div>
                          <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                          <div className="text-xs text-gray-500">
                            Magnetic module
                          </div>
                          <div className="w-12 h-12 bg-gray-400 rounded mx-auto"></div>
                          <div className="text-xs text-gray-500">
                            Intelligent Portable Welding
                          </div>
                        </div>
                        <div className="w-full h-32 bg-gray-300 rounded flex items-center justify-center">
                          <span className="text-gray-600 text-sm">
                            Welding Robot Diagram
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="text-sm text-gray-600 font-medium">
                      {product.category}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {product.title}
                    </h2>
                    <ul className="space-y-4">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-gray-600 mt-1">-</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex space-x-4 pt-4">
                      <button className="px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors">
                        Explore
                      </button>
                      <button className="text-black font-medium hover:underline">
                        Specifications →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <div className="text-sm text-gray-500 mb-2">Applications</div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Proven in Multiple
              <br />
              Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Versatile robotic solutions for diverse manufacturing sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Automotive Manufacturing */}
            <div className="bg-white border-2 border-black rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [汽车制造焊接图片]
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-500 mb-2">Automotive</div>
                <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  Advanced welding solutions for automotive production
                </p>
                <button className="text-blue-500 font-medium hover:underline">
                  Details →
                </button>
              </div>
            </div>

            {/* Aerospace Engineering */}
            <div className="bg-white border-2 border-black rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [航空工程焊接图片]
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-500 mb-2">Aerospace</div>
                <h3 className="text-xl font-bold mb-3">Engineering</h3>
                <p className="text-gray-600 mb-4">
                  Precision welding for aerospace components
                </p>
                <button className="text-blue-500 font-medium hover:underline">
                  Details →
                </button>
              </div>
            </div>

            {/* Marine Shipbuilding */}
            <div className="bg-white border-2 border-blue-500 rounded-lg overflow-hidden">
              <div className="h-48 bg-blue-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-blue-600">
                  [海洋焊接图片]
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-500 mb-2">Marine</div>
                <h3 className="text-xl font-bold mb-3">
                  Shipbuilding
                  <br />
                  Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Robust welding technologies for marine construction
                </p>
                <button className="text-blue-500 font-medium hover:underline">
                  Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Automate Welding CTA Section */}
      <section className="py-16 lg:py-28 bg-white text-center">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-gray-500 mb-4">CTA / 57 /</div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to
              <br />
              Automate Welding
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your manufacturing process with our intelligent robotic
              welding solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Quote
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 lg:py-28 bg-blue-400 text-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-white/70 mb-4">
                Testimonial / 42 /
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Success stories
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Real-world results from our innovative solutions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">★★★★★</div>
              </div>
              <blockquote className="text-lg mb-6 leading-relaxed">
                "Our weld quality improved by 40% while significantly reducing
                production costs."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-white/70 text-sm">
                    Operations Manager, Automotive
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  ←
                </button>
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="text-sm text-white/50 mt-8">EWGA / 606 /</div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-28 bg-white text-black">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl lg:text-4xl font-light mb-8 leading-relaxed">
              "This platform has completely transformed how we operate. The
              results speak for themselves - increased efficiency, better
              insights, and happier customers."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="text-left">
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-gray-600">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4 lg:px-16">
        <div className="container mx-auto">
          {/* Impact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="text-sm text-gray-400 mb-2">Impact</div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Impact in
                <br />
                Numbers
              </h2>
              <p className="text-gray-300 mb-6 max-w-md">
                Measuring our commitment to technological innovation and global
                manufacturing excellence
              </p>
              <div className="text-gray-400">→</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-600 p-6">
                <div className="text-4xl font-bold mb-2">380+</div>
                <div className="text-gray-300 text-sm">
                  Patents and
                  <br />
                  Copyrights
                </div>
              </div>
              <div className="border border-gray-600 p-6">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-gray-300 text-sm">Countries Served</div>
              </div>
              <div className="border border-gray-600 p-6">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-gray-300 text-sm">
                  Annual Production
                  <br />
                  Units
                </div>
              </div>
              <div className="border border-gray-600 p-6">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Global Support</div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mb-16">
            <div className="text-lg font-semibold mb-2">Stay Connected</div>
            <div className="text-gray-400 mb-6">
              Get the latest updates and insights
            </div>
            <div className="text-xs text-gray-500 mb-4">
              By subscribing, you agree to our privacy policy. By subscribing,
              you agree to our privacy policy.
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            <div>
              <div className="mb-6">
                <div className="text-xl font-bold">M</div>
                <div className="text-xs text-gray-400">焊接智造</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Company</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Solutions</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    MIG Robot
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Laser Robot
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Support</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Connect</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Global</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    United States
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    China
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Europe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Asia Pacific
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Middle East
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 IIMT Welding Robotics. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies Settings
              </a>
              <div className="flex space-x-3 ml-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  💼
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📺
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
