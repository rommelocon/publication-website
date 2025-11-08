import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const allProducts = {
    preschool: [
      { id: 1, title: "Early Learning Workbook", description: "Foundation skills for young learners", price: "₱299" },
      { id: 2, title: "Reading Readiness", description: "Preparing children for reading success", price: "₱349" },
      { id: 3, title: "Numbers and Colors", description: "Fun introduction to basic concepts", price: "₱279" },
    ],
    gradeschool: [
      { id: 4, title: "Elementary Mathematics", description: "Comprehensive math curriculum", price: "₱450" },
      { id: 5, title: "Science Explorer", description: "Discover the wonders of science", price: "₱495" },
      { id: 6, title: "English Language Arts", description: "Building language proficiency", price: "₱425" },
    ],
    juniorhigh: [
      { id: 7, title: "Advanced Algebra", description: "Master algebraic concepts", price: "₱595" },
      { id: 8, title: "Philippine History", description: "Understanding our heritage", price: "₱550" },
      { id: 9, title: "Biology Fundamentals", description: "Exploring life sciences", price: "₱625" },
    ],
    seniorhigh: [
      { id: 10, title: "Calculus & Analytics", description: "Higher mathematics", price: "₱750" },
      { id: 11, title: "Philippine Literature", description: "Literary masterpieces", price: "₱695" },
      { id: 12, title: "Chemistry in Action", description: "Advanced chemistry concepts", price: "₱725" },
    ],
  };

  const categoryTitles: { [key: string]: string } = {
    preschool: "Preschool Books",
    gradeschool: "Grade School Books",
    juniorhigh: "Junior High School Books",
    seniorhigh: "Senior High School Books",
  };

  const categories = [
    { key: 'preschool', label: 'Preschool' },
    { key: 'gradeschool', label: 'Grade School' },
    { key: 'juniorhigh', label: 'Junior High School' },
    { key: 'seniorhigh', label: 'Senior High School' },
  ];

  const products = category 
    ? allProducts[category as keyof typeof allProducts] 
    : Object.values(allProducts).flat();
  const title = category ? categoryTitles[category] : "All Products";

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // Pagination logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (categoryKey: string) => {
    navigate(`/products/${categoryKey}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-br from-primary to-primary-light text-white py-16 px-8 text-center">
        <h1 className="text-5xl mb-4 font-bold">{title}</h1>
        <p className="text-xl opacity-90">Quality educational materials for every learning stage</p>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-8">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate('/products')}
            className={`py-2 px-6 rounded-lg font-semibold transition-all ${
              !category 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`py-2 px-6 rounded-lg font-semibold transition-all ${
                category === cat.key 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {products && products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-[200px] bg-linear-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                    <span className="text-6xl">📚</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl text-primary mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <button className="py-3 px-6 bg-accent text-primary border-none rounded font-semibold cursor-pointer transition-colors hover:bg-accent-hover">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`py-2 px-4 rounded-lg font-semibold transition-all ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`py-2 px-4 rounded-lg font-semibold transition-all ${
                      currentPage === pageNum
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`py-2 px-4 rounded-lg font-semibold transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 text-xl text-gray-600">
            <p>Select a category to view products</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

