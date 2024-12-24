import { useEffect, useState } from 'react'; 
import axios from 'axios';
import SearchBar from '../Components/SearchBar';

const UserListing = () => {
  // Declare state variables
  const [users, setUsers] = useState([]); // Stores the list of users
  const [searchQuery, setSearchQuery] = useState(''); // Stores the search query entered by the user

  // Fetch users and sort them by years of experience when the component mounts
  useEffect(() => {
    // Make a GET request to fetch users
    axios.get('http://localhost:3000/users')
      .then(response => {
        // Sort the users by yearOfExperience in ascending order
        const sortedUsers = response.data.sort((a, b) => a.yearOfExperience - b.yearOfExperience);
        setUsers(sortedUsers); // Set the sorted users in state
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error); // Handle any errors
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Filter the users based on the search query (name or skills)
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Check if the search query matches the name (case-insensitive)
    user.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) // Check if any of the skills match the search query (case-insensitive)
  );

  return (
    <div>
      {/* Search Bar component */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Heading for the table */}
      <h1>User Data</h1>
      
      {/* Table to display users */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            {/* Table headers */}
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Skills</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Experience</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over filteredUsers to display each user */}
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              {/* User data rows */}
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.skills.join(', ')}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.yearOfExperience} years</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListing;
