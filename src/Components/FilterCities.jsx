import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from './FilterCities.module.css';

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivli",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubballi-Dharwad",
  "Mysore",
  "Tiruchirappalli",
  "Bareilly",
  "Aligarh",
  "Tiruppur",
  "Moradabad",
  "Jalandhar",
  "Bhubaneswar",
  "Salem",
  "Warangal",
  "Guntur",
  "Bhiwandi",
  "Saharanpur",
  "Gorakhpur",
  "Bikaner",
  "Amravati",
  "Noida",
  "Jamshedpur",
  "Bhilai",
  "Cuttack",
  "Firozabad",
  "Kochi",
  "Bhavnagar",
  "Dehradun",
  "Durgapur",
  "Asansol",
  "Nanded",
  "Kolhapur",
  "Ajmer",
  "Gulbarga",
  "Jamnagar",
  "Ujjain",
  "Loni",
  "Siliguri",
  "Jhansi",
  "Ulhasnagar",
  "Jammu",
  "Sangli-Miraj & Kupwad",
  "Mangalore",
  "Erode",
  "Belgaum",
  "Ambattur",
  "Tirunelveli",
  "Malegaon",
  "Gaya",
  "Jalgaon",
  "Udaipur",
  "Maheshtala",
  "Davanagere",
  "Kozhikode",
  "Kurnool",
  "Rajpur Sonarpur",
  "Bokaro",
  "South Dumdum",
  "Bellary",
  "Patiala",
  "Gopalpur",
  "Agartala",
  "Bhagalpur",
  "Muzaffarnagar",
  "Bhatpara",
  "Panihati",
  "Latur",
  "Dhule",
  "Rohtak",
  "Korba",
  "Bhilwara",
  "Brahmapur",
  "Muzaffarpur",
  "Ahmednagar",
  "Mathura",
  "Kollam",
  "Avadi",
  "Kadapa",
  "Anantapur",
  "Kamarhati",
  "Bilaspur",
  "Sambalpur",
  "Shahjahanpur",
  "Satara",
  "Bijapur",
  "Rampur",
  "Shivamogga",
  "Chandrapur",
  "Junagadh",
  "Thrissur",
  "Alwar",
  "Bardhaman",
  "Kulti",
  "Kakinada",
  "Nizamabad",
  "Parbhani",
  "Tumkur",
  "Khammam",
  "Uzhavarkarai",
  "Bihar Sharif",
  "Panipat",
  "Darbhanga",
  "Bally",
  "Aizawl",
  "Dewas",
  "Ichalkaranji",
  "Karnal",
  "Bathinda",
  "Jalna",
  "Eluru",
  "Barasat",
  "Kirari Suleman Nagar",
  "Purnia",
  "Satna",
  "Mau",
  "Sonipat",
  "Farrukhabad",
  "Sagar",
  "Rourkela",
  "Durg",
  "Imphal",
  "Ratlam",
  "Hapur",
  "Arrah",
  "Karimnagar",
  "Anantapuram",
  "Etawah",
  "Ambarnath",
  "North Dumdum",
  "Bharatpur",
  "Begusarai",
  "New Delhi",
  "Gandhidham",
  "Baranagar",
  "Tiruvottiyur",
  "Pondicherry",
  "Sikar",
  "Thoothukudi",
  "Rewa",
  "Mirzapur",
  "Raichur",
  "Pali",
  "Ramagundam",
  "Haridwar",
  "Vijayanagaram",
  "Katihar",
  "Nagercoil",
  "Sri Ganganagar",
  "Karawal Nagar",
  "Mango",
  "Thanjavur",
  "Bulandshahr",
  "Uluberia",
  "Katni",
  "Sambhal",
  "Singrauli",
  "Nadiad",
  "Secunderabad",
  "Naihati",
  "Yamunanagar",
  "Bidhannagar",
  "Pallavaram",
  "Bidar",
  "Munger",
  "Panchkula",
  "Burhanpur",
  "Raurkela Industrial Township",
  "Kharagpur",
  "Dindigul",
  "Gandhinagar",
  "Hospet",
  "Nangloi Jat",
  "Malda",
  "Ongole",
  "Deoghar",
  "Chapra",
  "Haldia",
  "Khandwa",
  "Nandyal",
  "Morena",
  "Amroha",
  "Anand",
  "Bhind",
  "Bhalswa Jahangir Pur",
  "Madhyamgram",
  "Bhiwani",
  "Berhampur",
  "Ambala",
  "Morbi",
  "Fatehpur",
  "Raebareli",
  "Khora, Ghaziabad",
  "Chittoor",
  "Bhusawal",
  "Orai",
  "Bahraich",
  "Phusro",
  "Vellore",
  "Mehsana",
  "Rampurhat",
  "Tinsukia",
  "Alappuzha",
  "Habra",
  "Ambikapur",
  "Maunath Bhanjan",
  "Raiganj",
  "Sirsa",
  "Danapur",
  "Serampore",
  "Sultan Pur Majra",
  "Guna",
  "Jaunpur",
  "Panvel",
  "Shivpuri",
  "Surendranagar Dudhrej",
  "Unnao",
  "Chinsurah",
  "Aligarh",
  "Sikar",
];
const FilterCities = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length >= 3) {
      const filtered = cities
        .filter(
          (city) =>
            city.toLowerCase().startsWith(value.toLowerCase()) ||
            city.toLowerCase().endsWith(value.toLowerCase()) ||
            city.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 10);

      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  return (
    <div className={styles.maindiv}>
      <div className={styles.searchdiv}>
        <CiSearch />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search cities..."
        />
      </div>

      {filteredCities.length > 0 && (
        <ul className="autocomplete-dropdown">
          {filteredCities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterCities;
