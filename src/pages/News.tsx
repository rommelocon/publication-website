const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Grade 12 Textbooks Released",
      date: "October 15, 2025",
      excerpt: "We are excited to announce the release of our latest Senior High School textbook series, covering all core subjects with updated curriculum alignment."
    },
    {
      id: 2,
      title: "Digital Learning Platform Launch",
      date: "September 28, 2025",
      excerpt: "St. Augustine Publications introduces e-SAPI Hub, our new digital learning platform providing interactive educational content."
    },
    {
      id: 3,
      title: "Teacher Training Workshop",
      date: "September 10, 2025",
      excerpt: "Join us for our upcoming teacher training workshops focusing on effective use of our educational materials in the classroom."
    },
    {
      id: 4,
      title: "Preschool Series Update",
      date: "August 22, 2025",
      excerpt: "Our preschool learning materials have been updated with new activities and colorful illustrations to engage young learners."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-br from-primary to-primary-light text-white py-16 px-8 text-center">
        <h1 className="text-5xl mb-4 font-bold">News & Updates</h1>
        <p className="text-xl opacity-90">Stay informed about our latest releases and announcements</p>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-accent font-semibold text-sm mb-4 uppercase">
                {item.date}
              </div>
              <h2 className="text-primary text-2xl mb-4 font-semibold leading-tight">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.excerpt}
              </p>
              <button className="py-3 px-6 bg-primary text-white border-none rounded font-semibold cursor-pointer transition-colors hover:bg-primary-light">
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

