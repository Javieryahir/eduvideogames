import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from '../class/gameClass';



const GameInfo: React.FC = () => {
  const [gameData, setGameData] = useState<Game[] | null>(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const results: Game[] = [];
        for (let i = 0; i < 4; i++) {
          const response = await fetch('https://api.rawg.io/api/games/'+ Math.floor(Math.random() * 500000) +'?key=1f7c0b67ba684f219ad405b6b0d073ab');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          results.push(jsonData as Game);
        }
        setGameData(results);
        console.log(results)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
    
  }, []);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex items-center flex-col justify-center p-12 bg-bg-100'>
      <h2 className="text-center py-16 text-4xl  text-white  font-bold">No Sabes que jugar?</h2>
    <div className="mx-auto w-full ">
      {gameData.length > 0 ? (
        <div className='grid  md:grid-cols-2 2xl:grid-cols-4  grid-cols-1  gap-12 justify-self-center'>
          {gameData.map((data, index) => (
            <div key={index} className='justify-self-center'>
            <div className="relative flex w-80 flex-col rounded-xl bg-bg-200 bg-clip-border text-gray-700 shadow-md">
  <div className="relative  mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
    className='object-fill h-2/2 '
      src={data.background_image}
      alt="img-blur-shadow"
      
      
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
      {data.name}
    </h5>
    <p className="block font-sans text-base font-normal  leading-relaxed text-white antialiased">
      {data.description_raw.length > 250 ? data.description_raw.substring(0, 250) + '...' : data.description_raw}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
  </div>
</div>
            </div>
            
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
    </div>
    
  );
};

export default GameInfo;