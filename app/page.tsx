"use client";


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, MessageCircle } from "lucide-react"

export default function JainPanditPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-blue-100 border-b border-blue-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/jain_emblem.png?height=60&width=60"
                alt="महावीर स्वामी चिह्न"
                className="w-15 h-15 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold font-serif text-blue-900">पंडित अजय प्रकाश जैन</h1>
                <p className="text-blue-700">अनुभवी जैन धर्म गुरु | Experienced Jain Religious Guide</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="text-blue-800 hover:text-blue-900 transition-colors">
                सेवाएं
              </a>
              <a href="#about" className="text-blue-800 hover:text-blue-900 transition-colors">
                परिचय
              </a>
              <a href="#testimonials" className="text-blue-800 hover:text-blue-900 transition-colors">
                प्रशंसापत्र
              </a>
              <a href="#contact" className="text-blue-800 hover:text-blue-900 transition-colors">
                संपर्क
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-left bg-no-repeat"
          style={{
            backgroundImage: `url('/images/tirthankar-statue.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-50/95"></div>

        <div className="relative container mx-auto px-4 flex items-center justify-end h-full">
          <div className="max-w-lg mr-8 bg-blue-50/98 p-8 rounded-lg shadow-2xl backdrop-blur-sm border border-blue-200">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-blue-900 mb-6">जैन धर्म की पवित्र सेवाएं</h2>
            <p className="text-lg text-blue-800 mb-6 leading-relaxed">
              हैदराबाद में 15+ वर्षों के अनुभव के साथ पारंपरिक जैन पूजा, विधि और धार्मिक संस्कारों की संपूर्ण सेवा
            </p>
            <p className="text-base text-blue-700 mb-8">
              Traditional Jain religious ceremonies, pooja, and vidhi services with over 15 years of experience in
              Hyderabad
            </p>
            <a
              href="https://wa.me/919359563090?text=नमस्कार%20पंडित%20जी,%20मुझे%20जैन%20पूजा%20विधि%20की%20जानकारी%20चाहिए"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp पर संपर्क करें
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-serif text-blue-900 mb-6">पंडित जी का परिचय</h3>
              <div className="space-y-4 text-blue-800 leading-relaxed">
                <p>
                  <strong>पंडित अजय प्रकाश जैन</strong> हैदराबाद में निवासरत एक अनुभवी और श्रद्धेय जैन धर्म गुरु हैं। उन्होंने पिछले 15 वर्षों
                  से जैन समुदाय की सेवा में अपना जीवन समर्पित किया है।
                </p>
                <p>
                  विशेषज्ञता:{" "}
                  <span className="text-blue-900 font-semibold">
                    पूजा विधि, गृह प्रवेश, विवाह संस्कार, नामकरण, पर्युषण पर्व, दीवाली पूजा, और सभी जैन धार्मिक अनुष्ठान
                  </span>
                </p>
                <p>
                  Pandit Ajay Prakash Jain is a respected Jain religious guide residing in Hyderabad, dedicated to
                  serving the Jain community with traditional ceremonies and spiritual guidance.
                </p>
                <p className="font-semibold text-blue-900">
                  मंदिर पता: श्री 1008 आदिनाथ दिगंबर जैन मंदिर, नचाराम, हैदराबाद, तेलंगाना - 500076
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                  ))}
                </div>
                <span className="text-blue-700">100+ संतुष्ट परिवार</span>
              </div>
            </div>
            <div className="relative">
              <img src="/pandit.jpeg?height=400&width=400" alt="जैन मंदिर" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-serif text-blue-900 mb-4">हमारी सेवाएं</h3>
            <p className="text-blue-700 max-w-2xl mx-auto">पारंपरिक जैन धर्म के अनुसार सभी प्रकार की पूजा और विधि सेवाएं</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "गृह प्रवेश पूजा",
                description: "नए घर में प्रवेश के लिए शुभ मुहूर्त और पूर्ण विधि",
                icon: "🏠",
              },
              {
                title: "विवाह संस्कार",
                description: "जैन रीति-रिवाज के अनुसार संपूर्ण विवाह विधि",
                icon: "💒",
              },
              {
                title: "नामकरण संस्कार",
                description: "नवजात शिशु के नामकरण की पारंपरिक विधि",
                icon: "👶",
              },
              {
                title: "पर्युषण पर्व",
                description: "जैन धर्म के सबसे महत्वपूर्ण त्योहार की विधि",
                icon: "🕉️",
              },
              {
                title: "दीवाली पूजा",
                description: "महावीर निर्वाण दिवस की विशेष पूजा विधि",
                icon: "🪔",
              },
              {
                title: "व्रत और उपवास",
                description: "विभिन्न व्रतों की सही विधि और मार्गदर्शन",
                icon: "🙏",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-blue-200">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle className="font-serif text-blue-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-serif text-blue-900 mb-4">प्रशंसापत्र</h3>
            <p className="text-blue-700">हमारे संतुष्ट परिवारों के अनुभव</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "श्रीमती सुनीता जैन",
                location: "बंजारा हिल्स, हैदराबाद",
                text: "पंडित जी ने हमारे गृह प्रवेश की पूजा बहुत ही शुद्ध विधि से की। उनका ज्ञान और अनुभव अद्भुत है।",
              },
              {
                name: "श्री अनिल कुमार जैन",
                location: "जुबली हिल्स, हैदराबाद",
                text: "हमारे बेटे के विवाह में पंडित जी की सेवा अमूल्य थी। सभी रीति-रिवाज सही तरीके से हुए।",
              },
              {
                name: "श्रीमती प्रिया शाह",
                location: "मधापुर, हैदराबाद",
                text: "पर्युषण पर्व के दौरान पंडित जी का मार्गदर्शन बहुत ही प्रेरणादायक था। धन्यवाद!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                  <p className="text-blue-800 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-blue-700">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-serif text-blue-900 mb-4">संपर्क करें</h3>
            <p className="text-blue-700">आपकी धार्मिक आवश्यकताओं के लिए हमसे जुड़ें</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="font-serif text-blue-900">संपर्क विवरण</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">पंडित अजय प्रकाश जैन</p>
                    <p className="text-blue-700">+91 93595 63090</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">पंडित अक्षय प्रकाश जैन</p>
                    <p className="text-blue-700">+91 97044 20659</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">पता</p>
                    <p className="text-blue-700">श्री 1008 आदिनाथ दिगंबर जैन मंदिर, नचाराम, हैदराबाद, तेलंगाना - 500076</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">उपलब्धता</p>
                    <p className="text-blue-700">सुबह 6:00 - रात 9:00 (सभी दिन)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="font-serif text-blue-900">WhatsApp पर संदेश भेजें</CardTitle>
                <CardDescription className="text-blue-700">
                  नीचे दिए गए विकल्पों में से चुनें और सीधे WhatsApp पर संदेश भेजें
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://wa.me/919359563090?text=नमस्कार%20पंडित%20जी,%20मुझे%20गृह%20प्रवेश%20पूजा%20की%20जानकारी%20चाहिए"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    गृह प्रवेश पूजा के लिए संपर्क करें
                  </Button>
                </a>

                <a
                  href="https://wa.me/919359563090?text=नमस्कार%20पंडित%20जी,%20मुझे%20विवाह%20संस्कार%20की%20जानकारी%20चाहिए"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    विवाह संस्कार के लिए संपर्क करें
                  </Button>
                </a>

                <a
                  href="https://wa.me/919359563090?text=नमस्कार%20पंडित%20जी,%20मुझे%20पर्युषण%20पर्व%20की%20जानकारी%20चाहिए"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    पर्युषण पर्व के लिए संपर्क करें
                  </Button>
                </a>

                <a
                  href="https://wa.me/919359563090?text=नमस्कार%20पंडित%20जी,%20मुझे%20अन्य%20पूजा%20विधि%20की%20जानकारी%20चाहिए"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    अन्य सेवाओं के लिए संपर्क करें
                  </Button>
                </a>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 text-center">
                    <strong>सीधे कॉल करें:</strong>
                    <br />
                    पंडित अजय प्रकाश जैन: +91 93595 63090
                    <br />
                    पंडित अक्षय प्रकाश जैन: +91 97044 20659
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 border-t border-blue-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
          <img
                src="/jain_emblem.png?height=60&width=60"
                alt="महावीर स्वामी चिह्न"
                className="w-15 h-15 rounded-full"
              />
            <h4 className="text-xl font-bold font-serif text-blue-900">पंडित अजय प्रकाश जैन</h4>
          </div>
          <p className="text-blue-700 mb-4">जैन धर्म की सेवा में समर्पित | Dedicated to serving Jain community</p>
          <p className="text-sm text-blue-600">© 2024 पंडित अजय प्रकाश जैन. सभी अधिकार सुरक्षित।</p>
        </div>
      </footer>
    </div>
  )
}
