import React,{useState} from 'react'
import './ProductsContainer.css'
import FilterProducts from '../FilterProducts/FilterProducts'
import ProductGrid from '../ProductGrid/ProductGrid'

const ProductsContainer = () => {


      const filters = [
        'Type of Plants',
        'Price',
        'Nursery',
        'Ideal Plants Location',
        'Indoor/Outdoor',
        'Maintenance',
        'Plant Size',
        'Water Schedule',
        'Color',
        'Seasonal',
        'Light Efficient'
    ];

    const products = [
  {
    image: "https://via.placeholder.com/150",
    price: 19.99,
    rating: 4.5,
    description: "A sleek, modern chair perfect for your home office.",
    name: "Ergonomic Chair"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 49.99,
    rating: 4.7,
    description: "A high-quality wireless Bluetooth speaker.",
    name: "Portable Bluetooth Speaker"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 15.00,
    rating: 4.1,
    description: "A stylish notebook with 200 pages of high-quality paper.",
    name: "Leather Notebook"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 89.99,
    rating: 4.9,
    description: "A powerful blender for all your kitchen needs.",
    name: "Professional Blender"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 29.99,
    rating: 4.3,
    description: "A stainless steel insulated water bottle.",
    name: "Insulated Water Bottle"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 120.00,
    rating: 4.8,
    description: "A premium leather jacket with a sleek design.",
    name: "Leather Jacket"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 9.99,
    rating: 3.9,
    description: "An eco-friendly bamboo toothbrush set.",
    name: "Bamboo Toothbrush"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 75.00,
    rating: 4.6,
    description: "A durable and spacious backpack for daily use.",
    name: "Travel Backpack"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 15.99,
    rating: 4.2,
    description: "A wireless mouse with ergonomic design for comfort.",
    name: "Wireless Mouse"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 199.99,
    rating: 5.0,
    description: "A state-of-the-art smartwatch with fitness tracking features.",
    name: "Smartwatch"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 45.00,
    rating: 4.4,
    description: "A set of professional-grade kitchen knives.",
    name: "Kitchen Knife Set"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 99.99,
    rating: 4.7,
    description: "A high-performance gaming keyboard with RGB lighting.",
    name: "Gaming Keyboard"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 250.00,
    rating: 4.9,
    description: "A full HD 27-inch monitor perfect for gaming or office use.",
    name: "27-inch Monitor"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 59.99,
    rating: 4.5,
    description: "A stylish and comfortable pair of running shoes.",
    name: "Running Shoes"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 8.99,
    rating: 3.8,
    description: "A pack of 5 reusable grocery bags made from recycled material.",
    name: "Reusable Grocery Bags"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 399.99,
    rating: 5.0,
    description: "A premium espresso machine for coffee lovers.",
    name: "Espresso Machine"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 32.50,
    rating: 4.3,
    description: "A set of essential oil diffusers with multiple fragrance options.",
    name: "Essential Oil Diffuser Set"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 179.99,
    rating: 4.7,
    description: "A professional-grade DSLR camera with 24MP resolution.",
    name: "DSLR Camera"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 7.99,
    rating: 4.1,
    description: "A pair of durable, noise-cancelling earplugs.",
    name: "Noise-Cancelling Earplugs"
  },
  {
    image: "https://via.placeholder.com/150",
    price: 299.99,
    rating: 4.8,
    description: "A modern, stylish smartwatch with heart rate monitor.",
    name: "Advanced Smartwatch"
  }
    ];



    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };
        return (
            <div className='main-container2'>
                <div className='product-container'>
                    <div style={{ backgroundColor: '#f0f8e0', padding: '16px' }} className='filter-list-style'>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <h4>Filter</h4>
                            <button style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>
                            CLEAR ALL
                            </button>
                        </div>
                        {filters.map((filter, index) => (
                            <div key={index} style={{ marginBottom: '12px' }}>
                                <div
                                    style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                                    onClick={() => toggleSection(filter)}
                                >
                                    <span>{filter}</span>
                                    <span>{openSection === filter ? '-' : '+'}</span>
                            </div>
                                {openSection === filter && (
                                    <div style={{ paddingLeft: '10px', marginTop: '8px', fontSize: '14px' }}>
                                    {/* Placeholder for filter content, you can replace this with actual filter options */}
                                    Filter options go here
                                    </div>
                                        )}
                                        <hr />
                                    </div>
                        ))}
                    </div>
                    <div className='products-container'>
                        <ProductGrid products={products}/>
                    </div>
                </div>
            </div>
        )
}

export default ProductsContainer