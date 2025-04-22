import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Filter, Search, Download, Clock, Target } from 'lucide-react';

const ActivitiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  
  const activities = [
    {
      id: 'counting-adventure',
      title: 'Counting Adventure',
      description: 'A printable activity that helps children learn to count objects and recognize numbers from 1-10.',
      image: 'https://images.pexels.com/photos/4498122/pexels-photo-4498122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subject: 'Math',
      age: '3-5',
      time: '15-20 min',
      type: 'Printable'
    },
    {
      id: 'alphabet-soup',
      title: 'Alphabet Soup',
      description: 'Help children practice letter recognition by finding and circling letters in a letter soup.',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subject: 'Language',
      age: '4-6',
      time: '10-15 min',
      type: 'Printable'
    },
    {
      id: 'shapes-and-colors',
      title: 'Shapes and Colors',
      description: 'Learn to identify and match different shapes and colors with this interactive activity.',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subject: 'Art',
      age: '3-5',
      time: '15-20 min',
      type: 'Interactive'
    },
    {
      id: 'animal-habitats',
      title: 'Animal Habitats',
      description: 'Match animals to their natural habitats while learning about different ecosystems.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subject: 'Science',
      age: '5-7',
      time: '20-25 min',
      type: 'Interactive'
    },
    {
      id: 'storytelling-cards',
      title: 'Storytelling Cards',
      description: 'Printable cards that help children create and tell their own stories using pictures as prompts.',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subject: 'Language',
      age: '6-8',
      time: '25-30 min',
      type: 'Printable'
    },
    {
      id: 'science-experiments',
      title: 'Simple Science Experiments',
      description: 'Easy and safe science experiments that children can do at home with adult supervision.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subject: 'Science',
      age: '7-10',
      time: '30-40 min',
      type: 'Hands-on'
    },
    {
      id: 'number-patterns',
      title: 'Number Patterns',
      description: 'Help children recognize and complete number patterns with this interactive activity.',
      image: 'https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subject: 'Math',
      age: '6-8',
      time: '15-20 min',
      type: 'Interactive'
    },
    {
      id: 'world-map-explorer',
      title: 'World Map Explorer',
      description: 'An interactive world map that introduces children to different countries, cultures, and geographical features.',
      image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subject: 'Geography',
      age: '7-10',
      time: '25-30 min',
      type: 'Interactive'
    }
  ];
  
  const subjects = [...new Set(activities.map(activity => activity.subject))];
  const ageGroups = [...new Set(activities.map(activity => activity.age))];
  
  const filteredActivities = activities.filter(activity => {
    return (
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSubject === '' || activity.subject === selectedSubject) &&
      (selectedAge === '' || activity.age === selectedAge)
    );
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-green-50">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Educational Activities
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore our collection of interactive and printable activities designed to make learning fun!
        </motion.p>
        
        {/* Search and Filter */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search activities..."
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">All Subjects</option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>{subject}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Filter size={20} className="text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
              >
                <option value="">All Age Groups</option>
                {ageGroups.map((age, index) => (
                  <option key={index} value={age}>{age} years</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Filter size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity, index) => (
              <motion.div 
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {activity.subject}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      activity.type === 'Printable' 
                        ? 'bg-blue-100 text-blue-800' 
                        : activity.type === 'Interactive'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-orange-100 text-orange-800'
                    }`}>
                      {activity.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{activity.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Target size={16} className="mr-1" />
                      <span>Ages {activity.age}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-1" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    className={`w-full ${
                      activity.type === 'Printable' 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-green-600 hover:bg-green-700'
                    } text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {activity.type === 'Printable' ? (
                      <>
                        <Download size={18} className="mr-2" />
                        Download
                      </>
                    ) : (
                      <>
                        <BookOpen size={18} className="mr-2" />
                        Start Activity
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600">No activities found matching your criteria.</p>
            </div>
          )}
        </div>
        
        {/* Learning Tip Section */}
        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <BookOpen size={32} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Educational Tip</h3>
              <p className="text-gray-600">
                Activities that engage multiple senses help children learn more effectively. Try combining 
                our printable activities with interactive games for a comprehensive learning experience. 
                Remember to make learning fun by celebrating progress and encouraging curiosity!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivitiesPage;