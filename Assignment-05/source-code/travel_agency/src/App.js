import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';

// destinations data
const destinationsData = [
  { id: 'amalfi', class: 'shore', title: 'Amalfi Coast', price: '$1,200', days: '5 Days', desc: 'Experience the breathtaking cliffs and turquoise waters of Italy.' },
  { id: 'swiss', class: 'peaks', title: 'Swiss Alps', price: '$1,800', days: '7 Days', desc: 'Serene peaks and luxury cabins for the ultimate mountain adventure.' },
  { id: 'kyoto', class: 'kyoto', title: 'Kyoto, Japan', price: '$1,500', days: '6 Days', desc: 'Peaceful temples, Zen gardens, and vibrant cultural traditions.' },
  { id: 'safari', class: 'safari', title: 'Serengeti', price: '$2,200', days: '8 Days', desc: 'Witness the great migration and untamed wildlife in Tanzania.' },
  { id: 'bali', class: 'bali', title: 'Bali, Indonesia', price: '$950', days: '10 Days', desc: 'Tropical paradise with lush jungles and spiritual retreats.' },
  { id: 'paris', class: 'paris', title: 'Paris, France', price: '$1,400', days: '4 Days', desc: 'The city of lights, world-class art, and timeless romance.' },
];

// --- Components ---

const Navbar = ({ user, onLogout }) => (
  <nav className="navbar">
    <div className="logo"><Link to="/">Odyssey</Link></div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><a href="/#destinations">Explore</a></li>
      {user ? (
        <>
          <li className="user-tag">Hi, {user.split('@')[0]}</li>
          <li><button onClick={onLogout} className="logout-btn">Logout</button></li>
        </>
      ) : (
        <li><Link to="/auth" className="auth-btn">Login</Link></li>
      )}
    </ul>
  </nav>
);

const Home = () => (
  <>
    <section className="hero">
      <div className="hero-content">
        <h1>The World is Waiting.</h1>
        <p>Hand-crafted journeys for the modern explorer</p>
      </div>
    </section>

    <section id="destinations" className="destinations">
      <h2 className="section-title">Popular Escapes</h2>
      <div className="grid">
        {destinationsData.map(dest => (
          <div className="card" key={dest.id}>
            <div className={`card-img ${dest.class}`}></div>
            <div className="card-info">
              <h3>{dest.title}</h3>
              <br></br>
              <p>{dest.days}</p>
              <br></br>
              <Link to={`/destination/${dest.id}`} className="btn-outline">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

const DestinationDetail = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinationsData.find(d => d.id === id);
  const [bookingData, setBookingData] = useState({ date: '', guests: 1 });

  if (!destination) return <div className="not-found">Destination not found.</div>;

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to book!");
      navigate('/auth');
      return;
    }

    const response = await fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userEmail: user,
        destinationTitle: destination.title,
        travelDate: bookingData.date,
        guests: bookingData.guests
      }),
    });

    const data = await response.json();
    if (data.status === 'ok') {
      alert(`Success! Your trip to ${destination.title} is confirmed.`);
    }
  };

  return (
    <div className="detail-page">
      <div className={`detail-hero ${destination.class}`}>
        <h1>{destination.title}</h1>
      </div>
      <div className="detail-content">
        <div className="info-side">
          <h2>About the Trip</h2>
          <p>{destination.desc}</p>
          <div className="stats">
            <span><strong>Duration:</strong> {destination.days}</span>
            <span><strong>Starting at:</strong> {destination.price}</span>
          </div>
        </div>
        <div className="booking-side">
          <div className="booking-card">
            <h3>Plan Your Trip</h3>
            <form onSubmit={handleBooking}>
              <label>Travel Date</label>
              <input type="date" required onChange={(e) => setBookingData({...bookingData, date: e.target.value})} />
              <label>Number of Guests</label>
              <input type="number" min="1" defaultValue="1" onChange={(e) => setBookingData({...bookingData, guests: e.target.value})} />
              <button type="submit" className="btn-submit">Book Now - {destination.price}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthPage = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
  
    // Identify whether logging in or signing up based on the state
    const endpoint = isLogin ? 'login' : 'signup';
  
    try {
      const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email, 
          password: e.target[1].value 
        }),
      });

      const data = await response.json();

      if (data.status === 'ok') {
        // 1. Update the app state with the user's email
        setUser(data.email);
        
        // 2. Store in localStorage so they stay logged in if they refresh
        localStorage.setItem('userEmail', data.email);
        
        // 3. Send them back to the home page
        navigate('/');
        alert(`${isLogin ? 'Welcome back' : 'Account created'}!`);
      } else {
        // Show the error message from the backend (e.g., "User already exists")
        alert(data.message);
      }
    } catch (err) {
      console.error("Auth Error:", err);
      alert("Server is not responding. Make sure your backend is running on port 5000.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleAuth}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn-submit">{isLogin ? 'Continue' : 'Create Account'}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} style={{cursor:'pointer', marginTop:'10px'}}>
          {isLogin ? "New here? Sign Up" : "Already a member? Login"}
        </p>
      </div>
    </div>
  );
};

function App() {
  const [user, setUser] = useState(null);
  const [myBookings, setMyBookings] = useState([]);

  const handleLogout = () => {
    setUser(null); // Clear React state
    setMyBookings([]); // Clear bookings state
    localStorage.removeItem('userEmail');
    alert("You have been logged out.");
  };

  return (
    <Router>
      <div className="container">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id" element={<DestinationDetail user={user} />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
        </Routes>
        <footer><p>&copy; 2026 Odyssey Travel. All rights reserved.</p></footer>
      </div>
    </Router>
  );
}

export default App;