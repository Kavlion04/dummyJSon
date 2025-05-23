import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileText, ShoppingBag } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl mb-[100px] font-bold p-5">
              Welcome to ContentHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your ultimate destination for discovering amazing content
            </p>
            <div className="flex justify-center gap-4 mb-[100px]">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-700"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Features
            </h2>
            <p className="text-xl text-gray-600">
              Discover what makes ContentHub special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Posts
              </h3>
              <p className="text-gray-600 mb-6">
                Explore thought-provoking content from our community
              </p>
              <Link to="/posts">
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700"
                >
                  View Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <ShoppingBag className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Products
              </h3>
              <p className="text-gray-600 mb-6">
                Browse through our curated collection of products
              </p>
              <Link to="/products">
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700"
                >
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Users
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with other members of our community
              </p>
              <Link to="/users">
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700"
                >
                  View Users
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our community today and start exploring amazing content
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
