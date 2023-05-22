import React, { useState, useEffect } from 'react';
import './searchBar.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [states, setStates] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          'http://cdn-api.co-vin.in/api/v2/admin/location/states'
        );
        const data = await response.json();
        setStates(data.states);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const matchedStates = states.filter((state) =>
      state.state_name.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(matchedStates);
  };

  return (
    <div className="search-bar">
     <i class="fas fa-search search-icon"></i>
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search Google or type a URL"
      />
      
       
      {suggestions.length > 0 && (
        <ul className="list">
          {suggestions.map((state) => (
            <li key={state.state_id}>{state.state_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
