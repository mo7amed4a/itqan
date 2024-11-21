import React from 'react';

const HousingList = ({ housings, t }:{
  housings: any,
  t: any
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {housings.map((housing: any) => (
        <div key={housing.id} className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">{housing.name}</h2>
          <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: housing.description }} />
          
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-500">
              <span>{t('city')}: {housing.city}</span>
              <span>{t('capacity')}: {housing.capacity}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>{t('beds')}: {housing.beds}</span>
              <span>{t('meals')}: {housing.meals}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>{t('internet')}: {housing.internet}</span>
              <span>{t('price')}: {housing.price}$</span>
            </div>
          </div>
          
          <div className="mt-4">
            {housing.images[0] ? (
              <img src={housing.images[0]} alt={housing.name} className="w-full h-40 object-cover rounded-md" />
            ) : (
              <div className="bg-gray-200 w-full h-40 rounded-md flex items-center justify-center">
                <span className="text-gray-500">{t('no_image')}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HousingList;
