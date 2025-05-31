import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryNavbar.css';
import 'boxicons/css/boxicons.min.css';

const categories = [
  { name: 'All', items: [] }, // sidebar for this one
  { name: 'Sell', items: ['Electronics', 'Books', 'Clothing'] },
  { name: 'Bestsellers', items: ['Top 10', 'Trending', 'Recommended'] },
  { name: "Today's Deals", items: ['Discounts', 'Flash Sales', 'Clearance'] },
  { name: 'Customer Service', items: ['Help Center', 'Returns', 'Contact Us'] },
  { name: 'Fashion', items: ['Men\'s Clothing', 'Women\'s Clothing', 'Accessories'] },
  { name: 'New Releases', items: ['Latest Gadgets', 'New Books', 'Fresh Fashion'] },
  { name: 'Electronics', items: ['Mobile Phones', 'Laptops', 'Cameras'] },
  { name: 'Home & Kitchen', items: ['Furniture', 'Appliances', 'Decor'] },
  { name: 'Artificial Jewelry', items: ['Necklaces', 'Earrings', 'Rings', 'Bangles'] },
  { name: 'Books', items: ['Fiction', 'Non-Fiction', 'Children\'s Books'] },
  { name: 'Toys & Games', items: ['Action Figures', 'Board Games', 'Puzzles'] },
];
// Optional: Smooth horizontal scroll with mouse wheel
const container = document.querySelector(".category-inner");
if (container) {
  container.addEventListener("wheel", (evt) => {
    if (evt.deltaY !== 0) {
      evt.preventDefault();
      container.scrollLeft += evt.deltaY;
    }
  });
}

const CategoryNavbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  if (!token) return null;

  const handleClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="category-navbar">
      <div className="category-inner">
        {categories.map(({ name, items }, idx) => (
          <div key={idx} className={`category-dropdown ${name === 'All' ? 'sidebar' : ''}`}>
            <button
              className="category-link"
              onClick={() => name !== 'All' && handleClick(name)}
              type="button"
            >
              {name}
               {items && <span className="dropdown-icon">< i class='bx  bx-chevron-down'  ></i> </span>}
            </button>

            {name === 'All' ? (
              <div className="sidebar-dropdown">
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    className="sidebar-item"
                    onClick={() => handleClick(cat.name)}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(cat.name)}
                  >
                    {cat.name}
                  </div>
                ))}
              </div>
            ) : (
              items && (
                <div className="dropdown-content">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="dropdown-item"
                      onClick={() => handleClick(item)}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleClick(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
