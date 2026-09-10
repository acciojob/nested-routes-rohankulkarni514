
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

// Main Layout Component
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

// Home Component
function Home() {
  return <h2>Home</h2>;
}

// Category Component (e.g., Women)
function Women() {
  const items = ['Grooming', 'Shirt', 'Trouser', 'Jewellery'];

  return (
    <div>
      <h3>Women Items:</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Link to={`/women/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}

// Item Details Component
function ItemDetail() {
  const { itemName } = useParams();
  return <h4>{itemName}</h4>;
}

// App Component with Nested Routes
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="women" element={<Women />}>
            <Route path=":itemName" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}