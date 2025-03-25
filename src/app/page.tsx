import Link from "next/link";
import Image from "next/image";

const coreValues = [
  {
    title: 'Pure Ingredients',
    description: 'Premium natural ingredients, no additives',
    icon: '🌱',
  },
  {
    title: 'Balanced Nutrition',
    description: 'Scientifically balanced meals',
    icon: '🥗',
  },
  {
    title: 'Eco-Conscious',
    description: 'Sustainable practices, Earth-friendly',
    icon: '🌍',
  },
  {
    title: 'Growth Focus',
    description: 'Supporting healthy development',
    icon: '🌱',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Healthy food background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Providing Nutritious Meals to Children in Need
            </h1>
            {/* 四个特点 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Pure Ingredients</h3>
                <p className="text-white/80">Premium natural ingredients, no additives</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Balanced Nutrition</h3>
                <p className="text-white/80">Scientifically balanced meals</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Eco-Conscious</h3>
                <p className="text-white/80">Sustainable practices, Earth-friendly</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Growth Focus</h3>
                <p className="text-white/80">Supporting healthy development</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our Mission is to provide nutritious, diverse, and delicious meals to low-income, refugee, and special education school children, promoting balanced eating habits to support their growth, health, and academic performance, ensuring every child has the opportunity to thrive.
          </p>
        </div>
      </section>
    </div>
  );
}
