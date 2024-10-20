import React from 'react'
import './InfoNursery.css'

const InfoNursery = () => {
   const data = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 1',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 3',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 4',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 5',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 6',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 7',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 8',
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 9',
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 10',
  },
  {
    id: 11,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 11',
  },
  {
    id: 12,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 12',
  },
  {
    id: 13,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 13',
  },
  {
    id: 14,
    image: 'https://via.placeholder.com/150',
    desc: 'Description 14',
  },
];

    return (
        <div className='main-container'>
            <div>
                <div className='buttons-container'>
                    <button className='buttons'>Plants</button>
                    <button className='buttons button-pot'>Pots</button>
                </div>
                <div>
                    <p>Lorem ipsum dolar sit amet Learning to code can be both exciting and challenging. 
                        It opens up a world of possibilities for building creative solutions. 
                        With dedication and practice, anyone can become a proficient programmer. 
                        The key is to keep experimenting and never give up!
                    </p>
                </div>
            </div>
            <div>
                <h1>Nursery</h1>
                <div className='container'>
                    {data.map((item) => (
                        <div key={item.id} className='card'>
                            <img src={item.image} alt={`${item.id}`} className='image'/>
                            <p className='desc'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InfoNursery