import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: 'Rainbow Bowl',
    description: 'A colorful mix of quinoa, roasted vegetables, and fresh herbs',
    price: '$12.99',
    image: '/images/menu/rainbow-bowl.jpg',
    nutrition: {
      calories: '450',
      protein: '12g',
      carbs: '45g',
      fat: '8g',
    },
  },
  {
    id: 2,
    name: 'Protein Power Bowl',
    description: 'Grilled chicken, brown rice, and steamed vegetables',
    price: '$14.99',
    image: '/images/menu/protein-bowl.jpg',
    nutrition: {
      calories: '550',
      protein: '20g',
      carbs: '40g',
      fat: '10g',
    },
  },
  {
    id: 3,
    name: 'Mediterranean Wrap',
    description: 'Hummus, falafel, and fresh vegetables in a whole wheat wrap',
    price: '$11.99',
    image: '/images/menu/mediterranean-wrap.jpg',
    nutrition: {
      calories: '400',
      protein: '10g',
      carbs: '35g',
      fat: '6g',
    },
  },
  {
    id: 4,
    name: 'Whole Grain Sandwich',
    description: 'Fresh vegetables and hummus on whole grain bread',
    price: '$11.99',
    image: '/images/menu/whole-grain-sandwich.jpg',
    nutrition: {
      calories: '320',
      protein: '14g',
      carbs: '42g',
      fat: '7g',
    },
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/menu_hero.jpg?v=2"
            alt="Our Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Menu
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Delicious and nutritious meals for growing children
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/menu/whole-grain-sandwich.jpg"
                  alt="Whole Grain Sandwich"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Whole Grain Sandwich</h3>
                <p className="text-gray-600 mb-4">
                  Made with premium ingredients, no artificial additives
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">$12.99</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/menu/fruit-salad.jpg"
                  alt="Fresh Fruit Salad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Fruit Salad</h3>
                <p className="text-gray-600 mb-4">
                  Scientifically balanced meals for optimal growth
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">$14.99</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/menu/veggie-wrap.jpg"
                  alt="Veggie Wrap"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Veggie Wrap</h3>
                <p className="text-gray-600 mb-4">
                  Sustainable packaging and locally sourced ingredients
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">$13.99</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 