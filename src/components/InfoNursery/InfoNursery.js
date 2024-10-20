import React from 'react'
import './InfoNursery.css'

const InfoNursery = () => {
   const data = [
  {
    id: 1,
    image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2023/11/lollipop-plants_0_1200.jpg',
    desc: 'Description 1',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImePyOFKoBd74dMqzj51eGbBxn3QcqDD507_D-DL31vpw2N7DQcdZwCvAQC_ZOUDbcOk&usqp=CAU',
    desc: 'Description 2',
  },
  {
    id: 3,
    image: 'https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/image14_40.png?yeOWxfnfmLbu9TiEkodhTyf7_HnbvpXV',
    desc: 'Description 3',
  },
  {
    id: 4,
    image: 'https://cdn.britannica.com/84/195984-138-C1D6AF1A/species-plants.jpg?w=800&h=450&c=crop',
    desc: 'Description 4',
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqs8K7FMOrETuckj9B3skhcvc25UtisXcRYHr8FUyyjmUXc1FGaNKG11vAc2_Jx2PQYlQ&usqp=CAU',
    desc: 'Description 5',
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfATGjsq84znuteUgAbKGl6auuBYFjNzuFlT8h8jPsJL44wFQ38XozogYEcH7Se3hqEUg&usqp=CAU',
    desc: 'Description 6',
  },
  {
    id: 7,
    image: 'https://cdn.shopify.com/s/files/1/0780/3119/2375/articles/EF_-_flowers_that_start_with_c.jpg?v=1710324529',
    desc: 'Description 7',
  },
  {
    id: 8,
    image: 'https://nestasia.in/cdn/shop/files/DSC8452_45b34d0b-02a4-4b93-9ca6-d1236dca8418.jpg?v=1689141261&width=600',
    desc: 'Description 8',
  },
  {
    id: 9,
    image: 'https://modernfarmer.com/wp-content/uploads/2016/08/edible-flowers-borage-hero-1.jpg',
    desc: 'Description 9',
  },
  {
    id: 10,
    image: 'https://www.gardenmyths.com/wp-content/uploads/2023/09/colchicum-autumnale-main-500.jpg',
    desc: 'Description 10',
  },
  {
    id: 11,
    image: 'https://glenmoredirect.co.uk/cdn/shop/products/ProductImage_32_800x.png?v=1656500647',
    desc: 'Description 11',
  },
  {
    id: 12,
    image: 'https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/image14_40.png?yeOWxfnfmLbu9TiEkodhTyf7_HnbvpXV',
    desc: 'Description 12',
  },
  {
    id: 13,
    image: 'https://cdn.shopify.com/s/files/1/0780/3119/2375/articles/EF_-_flowers_that_start_with_c.jpg?v=1710324529',
    desc: 'Description 13',
  },
  {
    id: 14,
    image: 'https://nestasia.in/cdn/shop/files/DSC8452_45b34d0b-02a4-4b93-9ca6-d1236dca8418.jpg?v=1689141261&width=600',
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
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum sit deserunt quidem aut necessitatibus enim ut internos accusantium aut numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestias voluptates ut porro excepturi sit molestiae obcaecati quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic sit delectus et porro aspernatur.
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