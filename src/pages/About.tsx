const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-br from-primary to-primary-light text-white py-16 px-8 text-center">
        <h1 className="text-5xl mb-4 font-bold">About Us</h1>
        <p className="text-xl opacity-90">Empowering Education Since Our Establishment</p>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-8">
        <section className="bg-white p-8 mb-8 rounded-lg shadow-md">
          <h2 className="text-primary text-3xl mb-4 font-semibold">Our Story</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            St. Augustine Publications, Inc. has been a trusted name in educational publishing,
            dedicated to providing quality books and reading materials that enhance the minds of
            students across the Philippines.
          </p>
        </section>

        <section className="bg-white p-8 mb-8 rounded-lg shadow-md">
          <h2 className="text-primary text-3xl mb-4 font-semibold">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Facilitating effective teaching and learning processes, St. Augustine Publications, Inc.
            dedicates itself to provide quality books and reading materials to enhance the minds of
            its customers. We recognize the wonderful efforts of Filipino teachers in the total
            development of the youth.
          </p>
        </section>

        <section className="bg-white p-8 mb-8 rounded-lg shadow-md">
          <h2 className="text-primary text-3xl mb-4 font-semibold">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To be the leading educational publishing company in the Philippines, recognized for
            excellence in providing innovative and comprehensive learning materials that support
            the holistic development of Filipino students.
          </p>
        </section>

        <section className="bg-white p-8 mb-8 rounded-lg shadow-md">
          <h2 className="text-primary text-3xl mb-4 font-semibold">Our Values</h2>
          <ul className="list-none p-0">
            <li className="text-gray-700 leading-loose text-lg pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-xl">
              <strong className="text-primary">Quality:</strong> We maintain the highest standards in all our publications
            </li>
            <li className="text-gray-700 leading-loose text-lg pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-xl">
              <strong className="text-primary">Innovation:</strong> We continuously update our materials to meet modern educational needs
            </li>
            <li className="text-gray-700 leading-loose text-lg pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-xl">
              <strong className="text-primary">Integrity:</strong> We conduct our business with honesty and transparency
            </li>
            <li className="text-gray-700 leading-loose text-lg pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-xl">
              <strong className="text-primary">Service:</strong> We are committed to excellent customer service
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;

