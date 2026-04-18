import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Hero from '../../ui/Hero';
import HeroStates from '../../ui/HeroStates';
import Cards from '../cards/Cards';

const Home = () => {
      const { friends, loading } = useAppContext();

      return (
            <section className="w-full bg-[#F3F4F6] min-h-screen">
                  <Hero />
                  <HeroStates />
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
                        <h2 className="text-2xl font-bold text-[#1D2939] mb-8 text-center">
                              Your Friends
                        </h2>
                        {loading ? (
                              <div className="flex justify-center py-20">
                                    <div className="w-10 h-10 border-4 border-[#00D991] border-t-transparent rounded-full animate-spin"></div>
                              </div>
                        ) : (
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                                    {friends.map((item) => (
                                          <div className="w-full max-w-[320px]">
                                                <Cards key={item.id} item={item} />
                                          </div>
                                    ))}
                              </div>
                        )}
                  </div>
            </section>
      );
};

export default Home;