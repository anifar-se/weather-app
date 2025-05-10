import React from 'react';

interface WeatherCardProps {
    city: string;
    temperature: number;
    description: string;
    icon: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description, icon }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold">{city}</h2>
            <div className="flex items-center">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} className="w-16 h-16" />
                <span className="text-2xl font-semibold ml-4">{temperature}°C</span>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default WeatherCard;