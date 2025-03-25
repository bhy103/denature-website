import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About DE NATURE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Making a difference in children's lives through nutritious meals
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg">
            <p>
              DE NATURE was founded with a simple mission: to ensure that every child has access to nutritious meals. 
              We believe that proper nutrition is essential for children's growth, development, and future success.
            </p>
            <p>
              Our journey began when we noticed that many children in our community were going to school without proper meals. 
              This observation led us to create a program that provides healthy, balanced lunches to children in need.
            </p>
            <p>
              Today, we continue to expand our reach and impact, working with schools, community organizations, 
              and volunteers to make a difference in children's lives through proper nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
            It All Begins with a Meal
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p>
              At De Nature, we believe that every child deserves access to nutritious, delicious meals that support their growth and development. Our journey began with a simple idea: to provide healthy, balanced lunch boxes to children in need across Sydney.
            </p>
            <p>
              Today, we're proud to serve thousands of students across multiple schools, making a real difference in their lives through proper nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Why I Started Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
            Why I Started Making Healthy Lunch Boxes
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p>
              I am a mother of three, and my children's health has always been my top priority.
            </p>
            <p>
              When my daughter Anna was just one, my busy work schedule forced me to make a heartbreaking decision—I sent her back to China to be cared for by family. But at age two, she suddenly fell gravely ill. She convulsed, foamed at the mouth—it was terrifying. We rushed her to the hospital, but no one could diagnose or treat her condition.
            </p>
            <p>
              One doctor's words shattered me:
              <span className="block italic mt-2">"If she has another episode, she may suffer permanent brain damage."</span>
            </p>
            <p>
              I was devastated, but as a mother, I refused to accept this fate. I took control of her diet, preparing every meal from scratch, researching food therapy, and selecting only natural, nutritious ingredients. For two years, she never ate takeout or food from outside. I observed her progress, adjusted her diet, and held onto hope.
            </p>
            <p>
              Then, a miracle happened—Anna fully recovered.
            </p>
            <p>
              Doctors couldn't explain it, but I knew: healthy eating saved her. That moment changed my life.
            </p>
            <p>
              This is why I created De Nature Healthy Lunch Box—to provide children with nutritious, balanced, and delicious meals that support their health, focus, and growth. I know many parents want the best for their kids but don't always have time to prepare fresh, healthy lunches. De Nature makes it easier.
            </p>
            <p>
              Because I've been there.
              <br />
              Because I understand.
              <br />
              This is more than a business—it's my mission.
            </p>
          </div>
        </div>
      </section>

      {/* Sydney Lunch Program Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
            Sydney Lunch Program – Providing Nutritional and Delicious Meals for Children
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Project Overview:</h3>
              <p>
                In Sydney, many children from low-income and refugee families struggle to access balanced and diverse meals due to the high cost of living. We aim to provide these children with healthy, delicious lunches, helping them stay focused on learning and activities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Our Goal:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide low-income, refugee, and special education school children with nutritious, varied, and delicious meals.</li>
                <li>By offering diverse meals, we aim to improve children's physical health and academic performance.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Target Groups:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Children from low-income families</li>
                <li>Children from refugee families</li>
                <li>Special education students</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">How You Can Help:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Donate Vegetables and Ingredients:</span> We invite organizations to donate fresh vegetables and food supplies to help us provide nutritious meals for children.</li>
                <li><span className="font-semibold">Volunteer:</span> Join our team of volunteers and contribute your time and effort to support the program.</li>
                <li><span className="font-semibold">Spread the Word:</span> Share the project to help us reach more supporters and participants.</li>
              </ul>
            </div>

            <p className="text-center font-semibold mt-8">
              Your support can make a lasting impact on these children's future!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 