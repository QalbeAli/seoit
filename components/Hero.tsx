import Image from 'next/image';

const Hero = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Business with Digital Marketing</h1>
        <button className="bg-white border border-gray-400 py-2 px-4 rounded-md mr-4">
          Registration
        </button>
        <button className="text-blue-500 py-2 px-4">
          See How It Works →
        </button>
      </section>

      <section className="flex justify-between items-center my-12">
        <div className="bg-blue-500 text-white p-8 rounded-md w-1/2 relative">
          <div className="absolute -top-10 left-4">
            <Image
              src="/path/to/logo.png"
              alt="Megaphone"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Our Service</h2>
          <ul>
            <li>01 SEO Service</li>
            <li>02 Web Design Development</li>
            <li>03 Social Media Marketing</li>
          </ul>
          <div className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2">
            <Image
              src="/path/to/logo.png"
              alt="Decoration"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className="flex flex-col items-center bg-orange-500 text-white p-8 rounded-md w-1/4">
          <div className="relative mb-4">
            <Image
              src="/path/to/logo.png"
              alt="Person"
              width={100}
              height={100}
            />
            <div className="absolute -top-4 -right-4">
              <Image
                src="/path/to/logo.png"
                alt="Decoration"
                width={50}
                height={50}
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">20 Years</h2>
          <p>We are a full-service digital agency, opening 20 years ago.</p>
        </div>
      </section>

      <section className="flex justify-around text-center text-white">
        <div className="bg-blue-700 p-6 rounded-md w-1/4">
          <h3 className="text-xl font-bold">3.5k</h3>
          <p>Jobs done successfully</p>
        </div>
        <div className="bg-blue-700 p-6 rounded-md w-1/4">
          <h3 className="text-xl font-bold">12+</h3>
          <p>Years Experience</p>
        </div>
        <div className="bg-blue-700 p-6 rounded-md w-1/4">
          <h3 className="text-xl font-bold">1.6k+</h3>
          <p>World wide clients</p>
        </div>
        <div className="bg-blue-700 p-6 rounded-md w-1/4">
          <h3 className="text-xl font-bold">22+</h3>
          <p>Trusted company</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
