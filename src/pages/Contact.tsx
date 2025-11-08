import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-br from-primary to-primary-light text-white py-16 px-8 text-center">
        <h1 className="text-5xl mb-4 font-bold">Contact Us</h1>
        <p className="text-xl opacity-90">We'd love to hear from you</p>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-primary text-3xl mb-8 font-semibold">Get in Touch</h2>
          <div className="mb-8">
            <h3 className="text-primary text-xl mb-2">📍 Address</h3>
            <p className="text-gray-600 leading-relaxed my-1">Manila, Philippines</p>
          </div>
          <div className="mb-8">
            <h3 className="text-primary text-xl mb-2">📞 Phone</h3>
            <p className="text-gray-600 leading-relaxed my-1">+63 (2) 1234-5678</p>
          </div>
          <div className="mb-8">
            <h3 className="text-primary text-xl mb-2">✉️ Email</h3>
            <p className="text-gray-600 leading-relaxed my-1">info@staugustinepublications.com</p>
          </div>
          <div className="mb-8">
            <h3 className="text-primary text-xl mb-2">🕒 Business Hours</h3>
            <p className="text-gray-600 leading-relaxed my-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-600 leading-relaxed my-1">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-primary text-3xl mb-8 font-semibold">Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-base transition-colors focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-base transition-colors focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded text-base transition-colors focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-base transition-colors focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-3 border border-gray-300 rounded text-base resize-y transition-colors focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full p-4 bg-accent text-primary border-none rounded text-lg font-semibold cursor-pointer transition-colors hover:bg-accent-hover"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

