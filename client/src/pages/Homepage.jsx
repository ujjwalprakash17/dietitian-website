import { Link } from "react-router-dom";
import BmiCalculator from "../components/BmiCalculator";
import fitnessImg from "../assets/Boy checking his fitness.png";

const Homepage = () => {
  return (
    <div className="Home-container">
      {/* top section */}
      <div className="top relative h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        {/* background for the landing page */}
        <div className="absolute w-full top-0 z-[-2] h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* top hero section */}
        <div className="title-content absolute top-1/3 left-1/2 transform -translate-x-1/2 mt-10 -translate-y-1/2 text-center text-white">
          <h1 className="text-6xl font-bold">
            Transform Your Diet, Transform Your Life!
          </h1>
          <p className="text-xl mt-10">
            Discover the power of a balanced diet to boost your energy, mood,
            and well-being. Get expert guidance and start your journey to a
            healthier you today.
          </p>

          {/* registration buttons */}
          <div className="buttons mt-12 flex justify-center space-x-4">
            {/* register button */}
            <Link
              to={"/register"}
              className="register-button px-8 py-3 text-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm bg-white"
            >
              Register
            </Link>
            {/* login button */}
            <Link
              to={"/login"}
              className="px-8 py-3 text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm bg-gray-800"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* BmiCalculator section */}
      <div className="bmi-section px-5 sm:px-10 my-10">
        <BmiCalculator />
      </div>

      {/* Horizontal line */}
      <hr className="border-t-2 border-gray-300 mx-5 sm:mx-10" />

      {/* New section */}
      <div className="new-section flex flex-col md:flex-row items-center py-10 px-5 sm:px-10">
        <div className="text-content md:w-2/5 mb-10 md:mb-0 ml-8 md:ml-20">
          <h2 className="text-4xl font-bold text-black mb-6">Achieve Your Health Goals</h2>
          <p className="text-lg text-gray-700">
            Whether you are looking to lose weight, gain muscle, or simply
            maintain a healthy lifestyle, our personalized nutrition plans are
            designed to meet your unique needs. Our experts will guide you every
            step of the way, providing support and motivation to help you reach
            your health goals. Join our community and start your journey to a
            healthier, happier you!
          </p>
        </div>
        <div className="image-content ml-0 md:w-2/5 md:ml-8">
          <img
            className="food-img w-full h-auto object-cover rounded-lg shadow-lg"
            src={fitnessImg}
            alt="Healthy food and lifestyle"
          />
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-10 px-40 sm:px-10">
        <div className="container mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold">About Us</h2>
              <p className="mt-4">
                We are dedicated to helping you transform your life through
                balanced nutrition. Join us for expert advice and personalized
                plans.
              </p>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold">Quick Links</h2>
              <ul className="mt-4">
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold">Resources</h2>
              <ul className="mt-4">
                <li>
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/recipes" className="hover:underline">
                    Healthy Recipes
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="hover:underline">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="mt-4">Email: Ujjwalprakash762@gmail.com</p>
              <p>Phone: +91-9113353894</p>
              <p>Greater Noida, Uttar Pradesh</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <p>&copy; 2024 Diet Transform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
