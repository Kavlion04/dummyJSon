
import { Link } from 'react-router-dom';
import { ArrowRight, Users, ShoppingBag, FileText, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const features = [
    {
      icon: FileText,
      title: 'Posts',
      description: 'Explore engaging articles and blog posts from our community',
      href: '/posts',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShoppingBag,
      title: 'Products',
      description: 'Discover amazing products and deals in our marketplace',
      href: '/products',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Users',
      description: 'Connect with people and build your network',
      href: '/users',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ChefHat,
      title: 'Recipes',
      description: 'Find delicious recipes and cooking inspiration',
      href: '/recipes',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="w-full">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-100 opacity-70"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ContentHub
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-[100px] text-gray-600  max-w-3xl mx-auto animate-fade-in">
            Your ultimate destination for discovering amazing content. Explore posts, products, connect with users, and find delicious recipes all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
              asChild
            >
              <Link to="/posts">
                Explore Posts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-gray-50"
              asChild
            >
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-[100px] sm:px-6 lg:px-8 bg-white mt-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <Link to={feature.href} className="group block h-full">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Explore {feature.title}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
