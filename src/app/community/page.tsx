import Image from 'next/image';

const targetGroups = [
  {
    title: 'Low-Income Families',
    description: 'Providing nutritious meals to children from low-income families',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Refugee Children',
    description: 'Supporting refugee children with healthy food options',
    icon: '🌍',
  },
  {
    title: 'Special Education Students',
    description: 'Catering to the dietary needs of special education students',
    icon: '🎓',
  },
];

const achievements = [
  {
    number: '10,000+',
    label: 'Meals Provided',
  },
  {
    number: '500+',
    label: 'Volunteers',
  },
  {
    number: '50+',
    label: 'Schools Supported',
  },
  {
    number: '1,000+',
    label: 'Children Fed',
  },
];

const partners = [
  {
    name: 'Sydney Community Foundation',
    logo: '/images/partners/partner1.png',
  },
  {
    name: 'Local Food Bank',
    logo: '/images/partners/partner2.png',
  },
  {
    name: 'Education Department',
    logo: '/images/partners/partner3.png',
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/community-hero.jpg"
            alt="Community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Community
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Join us in making a difference in children's lives
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Volunteer Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Join our team of dedicated volunteers who help prepare and deliver meals to children in need.
              </p>
              <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors">
                Sign Up to Volunteer
              </button>
            </div>
            {/* Donate Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Donate</h3>
              <p className="text-gray-600 mb-4">
                Your support helps us provide nutritious meals to more children in our community.
              </p>
              <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 