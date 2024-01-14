// components/ProductFilter.js
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/router';
import qs from 'qs';
const ProductFilter = () => {
    const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); // Initially open
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    location: '',
    name: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    yearBuilt: '',
    amenities: [],
    parkingSpaces: '',
    floorNumber: '',
    furnished: false,
    search:router.query.search
  });

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleToggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    const currentQuery = router.query;
    console.log(currentQuery);
    const newQuery = { ...currentQuery, ...filters };

    // Remove undefined or empty string values from the query
    Object.keys(newQuery).forEach((key) => {
      if (!newQuery[key] || newQuery[key] === '') {
        delete newQuery[key];
      }
    });

    const queryString = qs.stringify(newQuery, { encodeValuesOnly: true, });
    console.log('Constructed Query String:', queryString);
    router.push({
      pathname: router.pathname,
      query: queryString ? { filter: queryString } : {},
    });


    const searchQuery = router.query.filter;

    // Parse the search query string into a JavaScript object
    const parsedQuery = qs.parse(searchQuery, { ignoreQueryPrefix: true });
  
    // Now, `parsedQuery` is a JavaScript object containing your filter values
    console.log('Parsed Query:', parsedQuery);
  
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className={`bg-gray-800 text-white p-4 rounded-md shadow-md ${isOpen ? 'block' : 'hidden'}`}>
      <button onClick={handleToggleFilters} className="w-full text-left mb-4 focus:outline-none">
        {isOpen ? 'Close Filters' : 'Open Filters'}
      </button>

      <div className="space-y-4">
        {/* ... Other filters ... */}
        <div className="flex items-center">
          <label className="mr-2">Price Range:</label>
          <input
            type="number"
            name="priceMin"
            placeholder="Min"
            value={filters.priceMin}
            onChange={(e) => handleFilterChange('priceMin', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
          <span className="mx-2">to</span>
          <input
            type="number"
            name="priceMax"
            placeholder="Max"
            value={filters.priceMax}
            onChange={(e) => handleFilterChange('priceMax', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Product Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={filters.name}
            onChange={(e) => handleFilterChange('name', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Property Type:</label>
          <Select
            value={filters.propertyType}
            onChange={(selectedOption) => handleFilterChange('propertyType', selectedOption)}
            options={options}
            className="w-full"
          />
        </div>

        {/* Additional Filters */}
        <div className="flex items-center">
          <label className="mr-2">Bedrooms:</label>
          <input
            type="number"
            name="bedrooms"
            placeholder="Number of Bedrooms"
            value={filters.bedrooms}
            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Bathrooms:</label>
          <input
            type="number"
            name="bathrooms"
            placeholder="Number of Bathrooms"
            value={filters.bathrooms}
            onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Square Footage:</label>
          <input
            type="number"
            name="squareFootage"
            placeholder="Square Footage"
            value={filters.squareFootage}
            onChange={(e) => handleFilterChange('squareFootage', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Year Built:</label>
          <input
            type="number"
            name="yearBuilt"
            placeholder="Year Built"
            value={filters.yearBuilt}
            onChange={(e) => handleFilterChange('yearBuilt', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Number of Amenities (Select Range):</label>
          <input
            type="range"
            name="numAmenities"
            min="0"
            max="5"
            step="1"
            value={filters.amenities.length}
            onChange={(e) => handleFilterChange('amenities', { value: e.target.value })}
            className="w-1/2"
          />
          <span className="ml-2">{filters.amenities.length}</span>
        </div>

        <div className="flex items-center">
          <label className="mr-2">Parking Spaces:</label>
          <input
            type="number"
            name="parkingSpaces"
            placeholder="Parking Spaces"
            value={filters.parkingSpaces}
            onChange={(e) => handleFilterChange('parkingSpaces', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Floor Number:</label>
          <input
            type="number"
            name="floorNumber"
            placeholder="Floor Number"
            value={filters.floorNumber}
            onChange={(e) => handleFilterChange('floorNumber', e.target.value)}
            className="p-2 border bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">
            Furnished:
            <input
              type="checkbox"
              name="furnished"
              checked={filters.furnished}
              onChange={(e) => handleFilterChange('furnished', { value: e.target.checked })}
              className="ml-2"
            />
          </label>
        </div>
        {/* End of Additional Filters */}

        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 w-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
