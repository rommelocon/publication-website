import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCategories />
      
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-primary mb-6 font-bold">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed text-gray-700">
            St. Augustine Publications, Inc. recognizes the wonderful efforts of Filipino teachers
            in the total development of the youth. We are committed to providing quality educational
            materials that enhance the teaching and learning experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

