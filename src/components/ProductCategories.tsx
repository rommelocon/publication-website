import { Link } from 'react-router-dom';

const ProductCategories = () => {
  const categories = [
    {
      title: "Preschool Books",
      description: "Educational materials for early childhood learning",
      image: "/preschool.jpg",
      link: "/products/preschool"
    },
    {
      title: "Grade School Books",
      description: "Comprehensive curriculum for elementary students",
      image: "/gradeschool.jpg",
      link: "/products/gradeschool"
    },
    {
      title: "Junior High School Books",
      description: "Advanced learning materials for junior high students",
      image: "/juniorhigh.jpg",
      link: "/products/juniorhigh"
    },
    {
      title: "Senior High School Books",
      description: "Specialized textbooks for senior high education",
      image: "/seniorhigh.jpg",
      link: "/products/seniorhigh"
    }
  ];

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl text-primary mb-12 font-bold">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={index} 
              className="no-underline text-inherit rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-[300px]"
            >
              <div 
                className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="bg-linear-to-b from-primary/70 to-primary/90 w-full h-full flex flex-col items-center justify-center p-8 text-center text-white transition-all duration-300 hover:from-primary/80 hover:to-primary/95">
                  <h3 className="text-3xl mb-2 font-semibold">
                    {category.title}
                  </h3>
                  <p className="text-base mb-4 opacity-90">
                    {category.description}
                  </p>
                  <span className="inline-block py-3 px-6 bg-accent text-primary rounded font-semibold transition-colors hover:bg-accent-hover">
                    View Products
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;

