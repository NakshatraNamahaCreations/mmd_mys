import React, { useState, useEffect } from "react";
import Image30 from "../../images/Police_verification_image.png";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/documents.svg";
import howIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import axios from "axios";
import { useLayoutEffect } from "react";
import { ArrowLeft } from "lucide-react";
import "../police/policeclearance.css"
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const stateData = [
  {
    state: "Arunachal Pradesh",
    districts: [
      "Anjaw",
      "Changlang",
      "Dibang Valley",
      "East Kameng",
      "East Siang",
      "Kamle",
      "Kra Daadi",
      "Kurung Kumey",
      "Leparada",
      "Lohit",
      "Longding",
      "Lower Dibang Valley",
      "Lower Siang",
      "Lower Subansiri",
      "Namsai",
      "Pakke Kessang",
      "Papum Pare ",
      "Shi Yomi",
      "Siang",
      "Tawang",
      "Tirap",
      "Upper Siang",
      "Upper Subansiri",
      "West Kameng",
      "West Siang",
    ],
  },
  {
    state: "Andhra Pradesh",
    districts: [
      "Alluri Sitharama Raju",
      "Anakapalli",
      "Ananthapuramu",
      "Annamayya",
      "Bapatla",
      "Chittoor",
      "Dr. B.R. Ambedkar Konaseema",
      "East Godavari",
      "Eluru",
      "Guntur",
      "Kakinada",
      "Krishna",
      "Kurnool",
      "Nandyal",
      "Ntr",
      "Palnadu",
      "Parvathipuram Manyam",
      "Prakasam",
      "Sri Potti Sriramulu Nellore",
      "Sri Sathya Sai",
      "Srikakulam",
      "Tirupati",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
      "Y.S.R.",
    ],
  },
  {
    state: "Arunachal Pradesh",
    districts: [
      "Anjaw",
      "Changlang",
      "Dibang Valley",
      "East Kameng",
      "East Siang",
      "Itanagar Capital Complex",
      "Kamle",
      "Kra Daadi",
      "Kurung Kumey",
      "Lepa Rada",
      "Lohit",
      "Longding",
      "Lower Dibang Valley",
      "Lower Siang",
      "Lower Subansiri",
      "Namsai",
      "Pakke-Kessang",
      "Papum Pare",
      "Shi-Yomi",
      "Siang",
      "Tawang",
      "Tirap",
      "Upper Siang",
      "Upper Subansiri",
      "West Kameng",
      "West Siang",
    ],
  },
  {
    state: "Assam",
    districts: [
      "Bajali",
      "Baksa",
      "Barpeta",
      "Biswanath",
      "Bongaigaon",
      "Cachar",
      "Charaideo",
      "Chirang",
      "Darrang",
      "Dhemaji",
      "Dhubri",
      "Dibrugarh",
      "Goalpara",
      "Golaghat",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Kamrup",
      "Kamrup Metropolitan",
      "Karbi Anglong",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Majuli",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "Sivasagar",
      "Sonitpur",
      "South Salmara-Mankachar",
      "Tinsukia",
      "Udalguri",
      "West Karbi Anglong",
    ],
  },
  {
    state: "Bihar",
    districts: [
      "Araria",
      "Arwal",
      "Aurangabad",
      "Banka",
      "Begusarai",
      "Bhagalpur",
      "Bhojpur",
      "Buxar",
      "Darbhanga",
      "Gaya",
      "Gopalganj",
      "Jamui",
      "Jehanabad",
      "Kaimur (Bhabua)",
      "Katihar",
      "Khagaria",
      "Kishanganj",
      "Lakhisarai",
      "Madhepura",
      "Madhubani",
      "Munger",
      "Muzaffarpur",
      "Nalanda",
      "Nawada",
      "Pashchim Champaran",
      "Patna",
      "Purbi Champaran",
      "Purnia",
      "Rohtas",
      "Saharsa",
      "Samastipur",
      "Saran",
      "Sheikhpura",
      "Sheohar",
      "Sitamarhi",
      "Siwan",
      "Supaul",
      "Vaishali",
    ],
  },
  {
    state: "Chhattisgarh",
    districts: [
      "Balod",
      "Balodabazar-Bhatapara",
      "Balrampur-Ramanujganj",
      "Bastar",
      "Bemetara",
      "Bijapur",
      "Bilaspur",
      "Dakshin Bastar Dantewada",
      "Dhamtari",
      "Durg",
      "Gariyaband",
      "Gaurela-Pendra-Marwahi",
      "Janjgir-Champa",
      "Jashpur",
      "Kabeerdham",
      "Khairagarh-Chhuikhadan-Gandai",
      "Kondagaon",
      "Korba",
      "Korea",
      "Mahasamund",
      "Manendragarh-Chirmiri-Bharatpur(M C B)",
      " Mohla-Manpur-Ambagarh Chouki",
      "Mungeli",
      "Narayanpur",
      "Raigarh",
      "Raipur",
      "Rajnandgaon",
      "Sakti",
      "Sarangarh-Bilaigarh",
      "Sukma",
      "Surajpur",
      "Surguja",
      "Uttar Bastar Kanker",
    ],
  },
  {
    state: "Goa",
    districts: ["North Goa", "South Goa"],
  },
  {
    state: "Gujarat",
    districts: [
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Arvalli",
      " Banas Kantha",
      "Bharuch",
      "Bhavnagar",
      "Botad",
      "Chhotaudepur",
      "Dahod",
      "Dangs",
      "Devbhumi Dwarka",
      "Gandhinagar",
      "Gir Somnath",
      "Jamnagar",
      "Junagadh",
      "Kachchh",
      "Kheda",
      "Mahesana",
      "Mahisagar",
      "Morbi",
      "Narmada",
      "Navsari",
      "Panch Mahals",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Sabar Kantha",
      "Surat",
      "Surendranagar",
      "Tapi",
      "Vadodara",
      "Valsad",
    ],
  },
  {
    state: "Haryana",
    districts: [
      "Ambala",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gurugram",
      "Hisar",
      "Jhajjar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Mahendragarh",
      "Nuh",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
      "Yamunanagar",
    ],
  },
  {
    state: "Jammu and Kashmir",
    districts: [
      "Anantnag",
      "Bandipora",
      "Baramulla",
      "Budgam",
      "Doda",
      "Jammu",
      "Kathua",
      "Kishtwar",
      "Kulgam",
      "Kupwara",
      "Poonch",
      "Pulwama",
      "Rajouri",
      "Ramban",
      "Reasi",
      "Samba",
      "Shopian",
      "Srinagar",
      "Udhampur",
    ],
  },
  {
    state: "Himachal Pradesh",
    districts: [
      "Bilaspur",
      "Chamba",
      "Hamirpur",
      "Kangra",
      "Kinnaur",
      "Kullu",
      "Lahaul And Spiti",
      "Mandi",
      "Shimla",
      "Sirmaur",
      "Solan",
      "Una",
    ],
  },
  {
    state: "Jharkhand",
    districts: [
      "Bokaro",
      "Chatra",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "East Singhbum",
      "Garhwa",
      "Giridih",
      "Godda",
      "Gumla",
      "Hazaribagh",
      "Jamtara",
      "Khunti",
      "Koderma",
      "Latehar",
      "Lohardaga",
      "Pakur",
      "Palamu",
      "Ramgarh",
      "Ranchi",
      "Sahebganj",
      "Saraikela Kharsawan",
      "Simdega",
      "West Singhbhu",
    ],
  },
  {
    state: "Karnataka",
    districts: [
      "Bagalkot",
      "Ballari (Bellary)",
      "Belagavi (Belgaum)",
      "Bengaluru (Bangalore) Rural",
      "Bengaluru (Bangalore) Urban",
      "Bidar",
      "Chamarajanagar",
      "Chikballapur",
      "Chikkamagaluru (Chikmagalur)",
      "Chitradurga",
      "Dakshina Kannada",
      "Davangere",
      "Dharwad",
      "Gadag",
      "Hassan",
      "Haveri",
      "Kalaburagi (Gulbarga)",
      "Kodagu",
      "Kolar",
      "Koppal",
      "Mandya",
      "Mysuru (Mysore)",
      "Raichur",
      "Ramanagara",
      "Shivamogga (Shimoga)",
      "Tumakuru (Tumkur)",
      "Udupi",
      " Uttara Kannada (Karwar)",
      " Vijayapura (Bijapur)",
      "Yadgir",
    ],
  },
  {
    state: "Kerala",
    districts: [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad",
    ],
  },
  {
    state: "Ladakh",
    districts: ["Leh", "Kargil"],
  },
  {
    state: "Madhya Pradesh",
    districts: [
      "Agar Malwa",
      "Alirajpur",
      "Anuppur",
      "Ashoknagar",
      "Balaghat",
      "Barwani",
      "Betul",
      "Bhind",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Dindori",
      "Guna",
      "Gwalior",
      "Harda",
      "Hoshangabad",
      "Indore",
      "Jabalpur",
      "Jhabua",
      "Katni",
      "Khandwa",
      "Khargone",
      "Mandla",
      "Mandsaur",
      "Morena",
      "Narsinghpur",
      "Neemuch",
      "Niwari",
      "Panna",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shajapur",
      "Sheopur",
      "Shivpuri",
      "Sidhi",
      "Singrauli",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
    ],
  },
  {
    state: "Lakshadweep",
    districts: ["Lakshadweep"],
  },
  {
    state: "Maharashtra",
    districts: [
      "Ahilyanagar",
      "Akola",
      "Amravati",
      "Beed",
      "Bhandara",
      "Buldhana",
      "Chandrapur",
      "Chhatrapati Sambhajinagar",
      "Dharashiv",
      "Dhule",
      "Gadchiroli",
      "Gondia",
      "Hingoli",
      "Jalgaon",
      "Jalna",
      "Kolhapur",
      "Latur",
      "Mumbai",
      "Mumbai Suburban",
      "Nagpur",
      "Nanded",
      "Nandurbar",
      "Nashik",
      "Palghar",
      "Parbhani",
      "Pune",
      "Raigad",
      "Ratnagiri",
      "Sangli",
      "Satara",
      "Sindhudurg",
      "Solapur",
      "Thane",
      "Wardha",
      "Washim",
      "Yavatmal",
    ],
  },

  {
    state: "Manipur",
    districts: [
      "Bishnupur",
      "Chandel",
      "Churachandpur",
      "Imphal East",
      "Imphal West",
      "Jiribam",
      "Kakching",
      "Kamjong",
      "Kangpokpi",
      "Noney",
      "Peren",
      "Senapati",
      "Tamenglong",
      "Thoubal",
      "Ukhrul",
    ],
  },
  {
    state: "Meghalaya",
    districts: [
      "East Garo Hills",
      "East Jaintia Hills",
      "East Khasi Hills",
      "Eastern West Khasi Hills",
      "North Garo Hills",
      "Ri Bhoi",
      "South Garo Hills",
      "South West Garo Hills",
      "South West Khasi Hills",
      "West Garo Hills",
      "West Jaintia Hills",
      "West Khasi Hills",
    ],
  },
  {
    state: "Mizoram",
    districts: [
      "Aizawl",
      "Champhai",
      "Hnahthial",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saitual",
      "Serchhip",
      "Siaha",
      "Vaihnuai",
    ],
  },
  {
    state: "Nagaland",
    districts: [
      "Chumoukedima",
      "Dimapur",
      "Kiphire",
      "Kohima",
      "Longleng",
      "Mokokchung",
      "Mon",
      "Niuland",
      "Noklak",
      "Peren",
      "Phek",
      "Shamator",
      "Tseminyu",
      "Tuensang",
      "Wokha",
      "Zunheboto",
    ],
  },
  {
    state: "Odisha",
    districts: [
      "Angul",
      "Balangir",
      "Balasore",
      "Bargarh",
      "Bhadrak",
      "Boudh",
      "Cuttack",
      "Deogarh",
      "Dhenkanal",
      "Gajapati",
      "Ganjam",
      "Jagatsinghpur",
      "Jajpur",
      "Jharsuguda",
      "Kalahandi",
      "Kandhamal",
      "Kendrapara",
      "Kendujhar",
      "Khurda",
      "Koraput",
      "Malkangiri",
      "Mayurbhanj",
      "Nabarangpur",
      "Nayagarh",
      "Nuapada",
      "Puri",
      "Rayagada",
      "Sambalpur",
      "Subarnapur",
      "Sundargarh",
    ],
  },
  {
    state: "Punjab",
    districts: [
      "Amritsar",
      "Barnala",
      "Bathinda",
      "Faridkot",
      "Fatehgarh Sahib",
      "Firozpur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Kapurthala",
      "Ludhiana",
      "Mansa",
      "Moga",
      "Muktsar",
      "Nawan Shehr",
      "Patiala",
      "Rupnagar",
      "Sahibzada Ajit Singh Nagar (Mohali)",
      "Sangrur",
      "Tarn Taran",
    ],
  },
  {
    state: "Rajasthan",
    districts: [
      "Ajmer",
      "Alwar",
      "Anupgarh",
      "Balotra",
      "Banswara",
      "Baran",
      "Barmer",
      "Beawar",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Deeg",
      "Dholpur",
      "Didwana-Kuchaman",
      "Dudu",
      "Dungarpur",
      "Ganganagar",
      "Gangapurcity",
      "Hanumangarh",
      "Jaipur",
      "Jaipur (Gramin)",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Jodhpur (Gramin)",
      "Karauli",
      "Kekri",
      "Khairthal-Tijara",
      "Kota",
      "Nagaur",
      "Neem Ka Thana",
      "Pali",
      "Phalodi",
      "Shahpura",
      "Sikar",
      "Sirohi",
      "Tonk",
      "Udaipur",
      "Pratapgarh",
      "Rajsamand",
      "Salumbar",
      "Sanchore",
      "Sawai Madhopur",
    ],
  },
  {
    state: "Sikkim",
    districts: [
      "Gangtok",
      "Namchi",
      "Mangan",
      "Soreng",
      "Gyalshing",
      "Pakyong",
    ],
  },
  {
    state: "Tamil Nadu",
    districts: [
      "Ariyalur",
      "Chengalpattu",
      "Chennai",
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri",
      "Dindigul",
      "Erode",
      "Kallakurichi",
      "Kancheepuram",
      "Kanniyakumari",
      "Karur",
      "Krishnagiri",
      "Madurai",
      "Mayiladuthurai",
      "Nagapattinam",
      "Namakkal",
      "Perambalur",
      "Pudukkottai",
      "Ramanathapuram",
      "Ranipet",
      "Salem",
      "Sivaganga",
      "Tenkasi",
      "Thanjavur",
      "The Nilgiris",
      "Theni",
      "Thiruvallur",
      "Thiruvarur",
      "Thoothukkudi",
      "Tiruchirappalli",
      "Tirunelveli",
      "Tirupathur",
      "Tiruppur",
      "Tiruvannamalai",
      "Vellore",
      "Viluppuram",
      "Virudhunagar",
    ],
  },
  {
    state: "Telangana",
    districts: [
      "Adilabad",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Jayashankar Bhupalapally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem Asifabad",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal-Malkajgiri",
      "Mulugu",
      "Nagarkurnool",
      "Nalgonda",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Rangareddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Warangal",
      "Warangal (Rural)",
      "Yadadri Bhuvanagiri",
    ],
  },
  {
    state: "Tripura",
    districts: [
      "Dhalai",
      "Gomati",
      "Khowai",
      "North Tripura",
      "South Tripura",
      "Unakoti",
      "West Tripura",
    ],
  },
  {
    state: "Uttar Pradesh",
    districts: [
      "Agra",
      "Aligarh",
      "Ambedkar Nagar",
      "Amethi",
      "Amroha",
      "Auraiya",
      "Azamgarh",
      "Baghpat",
      "Bahraich",
      "Ballia",
      "Banda",
      "Barabanki",
      "Bareilly",
      "Basti",
      "Bijnor",
      "Bulandshahr",
      "Chandauli",
      "Chitrakoot",
      "Deoria",
      "Etah",
      "Etawah",
      "Faizabad",
      "Farrukhabad",
      "Fatehpur",
      "Firozabad",
      "Gautam Buddha Nagar",
      "Ghaziabad",
      "Ghazipur",
      "Gonda",
      "Gorakhpur",
      "Hamirpur",
      "Hapur",
      "Hardoi",
      "Hathras",
      "Jalaun",
      "Jaunpur",
      "Jhansi",
      "Kannauj",
      "Kanpur Dehat",
      "Kanpur Nagar",
      "Kushinagar",
      "Lakhimpur Kheri",
      "Lalitpur",
      "Lucknow",
      "Mau",
      "Meerut",
      "Mirzapur",
      "Moradabad",
      "Muzaffarnagar",
      "Pilibhit",
      "Pratapgarh",
      "Raebareli",
      "Rampur",
      "Saharanpur",
      "Sant Kabir Nagar",
      "Shahjahanpur",
      "Shamli",
      "Siddharth Nagar",
      "Sitapur",
      "Sonbhadra",
      "Sultanpur",
      "Unnao",
      "Varanasi",
    ],
  },
  {
    state: "Uttarakhand",
    districts: [
      "Almora",
      "Bageshwar",
      "Chamoli",
      "Champawat",
      "Dehradun",
      "Haridwar",
      "Nainital",
      "Pauri Garhwal",
      "Pithoragarh",
      "Rudraprayag",
      "Tehri Garhwal",
      "Udham Singh Nagar",
      "Uttarkashi",
    ],
  },
  {
    state: "West Bengal",
    districts: [
      "Alipurduar",
      "Bankura",
      "Birbhum",
      "Cooch Behar",
      "Dakshin Dinajpur",
      "Darjeeling",
      "Hooghly",
      "Howrah",
      "Jalpaiguri",
      "Jhargram",
      "Kolkata",
      "Malda",
      "Murshidabad",
      "Nadia",
      "North 24 Parganas",
      "Paschim Bardhaman",
      "Paschim Medinipur",
      "Purba Bardhaman",
      "Purba Medinipur",
      "Purulia",
      "South 24 Parganas",
      "Uttar Dinajpur",
    ],
  },
  {
    state: "Andaman and Nicobar Islands",
    districts: ["Port Blair", "Nicobar", "Car Nicobar", "Little Andaman"],
  },
  {
    state: "Chandigarh",
    districts: ["Chandigarh"],
  },
  {
    state: "Dadra and Nagar Haveli and Daman and Diu",
    districts: ["Daman", "Diu", "Silvassa"],
  },

  {
    state: "Delhi",
    districts: [
      "Central",
      "East",
      " New Delhi ",
      "North",
      "North East ",
      "North West ",
      "Shahdara",
      "South",
      " South East ",
      "South West",
      "West",
    ],
  },
  {
    state: "Puducherry",
    districts: ["Puducherry", "Karaikal"],
  },
];

const PoliceClearance = () => {
 const navigate = useNavigate();
            const location = useLocation();
  
            // useEffect(() => {
            //   window.scrollTo(0, 0); // Opens at the top without scrolling
            // }, []);
            

  const [openIndex, setOpenIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [maskedNumber, setMaskedNumber] = useState("XXXX-XXXX-XXXX");
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isCompleted, setIsCompleted] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [fullName, setFullName] = useState("");
  const [placeofbirth, setPlaceOfBirth]= useState("");
  const [nearbypolicestation , setNearByPoliceStation] = useState ("");
  const [emailId, setEmailId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [houseStreetName, setHouseStreetName] = useState("");
  const [villageTownCity, setVillageTownCity] = useState("");
  const [dob, setDob] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [leadId, setLeadId] = useState();
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [qualification, setQualification] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [error, setError] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(true);
  const openPopup = () => {
              setShowPopup(true);
              navigate("/police-clearance-certificate-form"); // Update the URL
            };
          
            // Function to close the popup and revert the URL
            const closePopup = () => {
              setShowPopup(false);
              navigate("/police-clearance-certificate"); // Revert the URL
              setCurrentStep(1);
              setIsCompleted(false);
            };
          
            React.useEffect(() => {
              // Automatically show the popup if the URL matches /two-wheeler-insurance-info
              if (location.pathname === "/police-clearance-certificate-form" || location.pathname === "/police-clearance-certificate/proceed-to-pay") {
                setShowPopup(true);
              } else {
                setShowPopup(false);
              }
            }, [location.pathname]);
  const [applyingFor, setApplyingFor] = useState("");
  const handleApplyingFor = (e) => setApplyingFor(e.target.value);
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  // const handleDateofbirth = (e) => setDob(e.target.value);
  const handleQualification = (e) => setQualification(e.target.value);
  const handleSelectedGender = (e) => setSelectedGender(e.target.value);
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handlePlaceofBirth = (e) => setPlaceOfBirth (e.target.value);
  const handleNearByPoliceStation = (e) => setNearByPoliceStation (e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);

  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };
  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];

  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and limit it to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setError(""); // Clear error if valid input
    }
  };

  const validatePincode = () => {
    // Validate that the pincode is exactly 6 digits long
    if (pincode.length !== 6) {
      setError("Pin Code must be exactly 6 digits.");
    }
  };
  const handleDateofbirth = (e) => {
    const value = e.target.value;
    const year = value.split("-")[0];

    if (/^\d{4}$/.test(year)) {
      setDob(value);
        setError("");
    } else {
        setError("Year must be exactly 4 digits.");
    }
};

  // Navigate steps
  const nextStep = () => {
    if (currentStep === 1) {
      if (!applyingFor) {
        setError("Please select an application type.");
        return;
      }
    } else if (currentStep === 2) {
      // Validating each field individually with specific messages
      if (!fullName || !/^[a-zA-Z\s]+$/.test(fullName)) {
          setError("Full Name is required and must contain only letters.");
          return;
      }

      if (!selectedGender) {
          setError("Please select a gender.");
          return;
      }

      if (!dob) {
          setError("Date of Birth is required.");
          return;
      }

      const dobYear = dob.split("-")[0];
      if (!/^\d{4}$/.test(dobYear)) {
          setError("Year in Date of Birth must be exactly 4 digits.");
          return;
      }

      const today = new Date().toISOString().split("T")[0];
      if (dob >= today) {
          setError("Date of Birth cannot be in the future.");
          return;
      }

      if (!placeofbirth) {
          setError("Place of Birth is required.");
          return;
      }

      if (!employmentType) {
          setError("Please select an employment type.");
          return;
      }

      if (!qualification) {
          setError("Please select an education qualification.");
          return;
      }
    } else if (currentStep === 3) {
      // Validate Step 3 Fields
      if (!villageTownCity) {
          setError("House No. and Street Name are required.");
          return;
      }
      if (!selectedState) {
          setError("Please select a state.");
          return;
      }
      if (!selectedDistrict) {
          setError("Please select a district.");
          return;
      }
      if (!mobileNumber) {
          setError("Mobile Number is required.");
          return;
      }
      if (!/^\d{10}$/.test(mobileNumber)) {
          setError("Please enter a valid 10-digit mobile number.");
          return;
      }
  }

    setError(""); // Clear the error if validations pass
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const validateStep3 = () => {
    if (!villageTownCity) {
        setError("House No. and Street Name are required.");
        return false;
    }
    if (!selectedState) {
        setError("Please select a state.");
        return false;
    }
    if (!selectedDistrict) {
        setError("Please select a district.");
        return false;
    }
    if (!pincode) {
        setError("Pin Code is required.");
        return false;
    }
    if (!/^\d{6}$/.test(pincode)) {
        setError("Pin Code must be exactly 6 digits.");
        return false;
    }
    if (!emailId) {
        setError("Email ID is required.");
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
        setError("Please enter a valid Email ID.");
        return false;
    }
    if (!nearbypolicestation) {
        setError("Nearest Police Station is required.");
        return false;
    }
    if (!mobileNumber) {
        setError("Mobile Number is required.");
        return false;
    }
    if (!/^\d{10}$/.test(mobileNumber)) {
        setError("Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Clear any existing errors if validation passes
    setError("");
    return true;
};


  const handleSubmit = () => {
    if (!validateStep3()) {
      return;
  }
    if (!mobileNumber) {
      setError("Mobile number is required.");
      return;
    }
    handleSendOtp();
    setShowOtpSection(true);
    setError("");
    setIsCompleted(true);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const [date, setDate] = useState(null); // Manage date state
  const [time, setTime] = useState(null); // Manage time state

  useEffect(() => {
    if (!date) {
      setDate(new Date().toISOString().split("T")[0]); // Set the current date once when the component mounts
    }
    if (!time) {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); // Set the current time once when the component mounts
    }
  }, []);
  const [employmentType, setEmploymentType] = useState("");
  const handleEmploymentChange = (e) => {
    setEmploymentType(e.target.value); // Update state with selected option
  };

  const formatTime = (timeString) => {
    return timeString && timeString !== "00:00:00" ? timeString : "00:00:00";
  };
  
  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber));
    }
    setIsCompleted(true);
  };

  const submitDataToAPI = async () => {
    const data = {
      orderid:orderid || "",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      services: applyingFor || "",
      address: villageTownCity || "",
      district: selectedDistrict || "",
      date: date,
      paidAmount: "99",

      dob: dob || "",

      applying_for: applyingFor || "",
      qualification: qualification || "",
      employmentType: employmentType || "",
      gender: selectedGender || "",
      // fathername: fatherName || "",
      // mothername: motherName || "",
      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      pancard: "",
      time: time
        ,
        nearby_police_station : nearbypolicestation || "",
      comment: "",
      placeofbirth : placeofbirth || "",
      status: "",
      service: "Police Clearance Certificate",
      // PGID: `ORD_${Date.now()}`,
      village: villageTownCity || "",
      state: selectedState || "",
      // "pancard-district": selectedDistrict || "",
    };

    console.log("Data being sent to API:", data);

    try {
      const response = await axios.post(
        "https://api.makemydocuments.com/api/lead/createLead",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", response.data);
      if (response.data.status === "success") {
        const leadData = response.data.lead;
  
        setLeadId(leadData._id); // Correctly setting the lead ID
        setUserDetails({
          name: leadData.name || "",
          mobilenumber: leadData.mobilenumber || "",
          orderid: leadData.orderId || "",
          services: leadData.services || "N/A",
          paidAmount: leadData.paidAmount || "₹99",
          // PGID: leadData.PGID,
        });
      } else {
      }
    } catch (error) {
      console.error("Error while saving data:", error);
      // alert("An error occurred while saving your details. Please try again.");
    }
  };

  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
      if (!/^\d{10}$/.test(formattedNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      formattedNumber = `91${formattedNumber}`;
      console.log("Formatted Mobile Number:", formattedNumber);

      const response = await axios.post(
        "https://api.makemydocuments.com/api/sendOTP",
        {
          mobilenumber: formattedNumber,
        }
      );

      if (response.status === 200) {
        console.log("API Response:", response.data);
        if (response.data.status === "success") {
          // Remove the alert and just set the state
          setOtpSent(true);
          setResendCountdown(30); // Reset countdown to 30 seconds
        } else {
          alert(response.data.message || "Error sending OTP.");
        }
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP. Please try again.");
    }
  };

  React.useEffect(() => {
    if (resendCountdown > 0 && otpSent) {
      const timer = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (resendCountdown === 0) {
      setOtpSent(false); // Reset otpSent when countdown reaches zero
    }
  }, [resendCountdown, otpSent]);


useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const [userDetails, setUserDetails] = useState(null); // Holds user details
  const [orderid, setOrderID] = useState();

  const [paidAmount, setPaidAmount] = React.useState(99);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const handleProceedToPay = async () => {
    const txnBaseAmount = userDetails?.baseAmount || 0;
    const txnFee = 99;
    const txnAmount = txnBaseAmount + txnFee;

    const custId = userDetails?.name
        ? `CUST_${userDetails.name.toUpperCase()}`
        : "CUST0012";

    // ✅ Generate Unique Order ID if not available
    const orderId = userDetails?.orderid || `ORD_${Date.now()}`;

    const requestBody = {
        MID: "MAKEMY09422872921500",
        ORDER_ID: orderId,  // Make sure ORDER_ID is set
        CUST_ID: custId,
        INDUSTRY_TYPE_ID: "Retail",
        CHANNEL_ID: "WEB",
        TXN_AMOUNT: txnAmount.toString(),
        WEBSITE: "DEFAULT",
        SERVICE: "PoliceClearance",
        id: leadId, 
        mobilenumber: userDetails.mobile
    };

    console.log("Sending Payment Payload:", requestBody);

    try {
        const response = await axios.post(
            "https://api.makemydocuments.com/api/PG/paytm/initiate",
            requestBody
        );

        console.log("Paytm Response:", response.data);

        if (response.data.paramList && response.data.CHECKSUMHASH) {
            const paramList = response.data.paramList;
            const paytmTxnUrl = "https://secure.paytmpayments.com/theia/processTransaction";
            // https://secure.paytmpayments.com/theia/processTransaction

            // Create a form dynamically
            const form = document.createElement("form");
            form.method = "POST";
            form.action = paytmTxnUrl;

            // Append all parameters as hidden inputs
            Object.keys(paramList).forEach((key) => {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = paramList[key];
                form.appendChild(input);
            });

            // Append form to the body and submit
            document.body.appendChild(form);
            form.submit();

            setPaidAmount(txnAmount);
        } else {
            setError("Payment initiation failed.");
        }
    } catch (err) {
        console.error(
            "Payment API Error:", 
            err.response ? err.response.data : err.message
        );
        setError("Error initiating payment.");
    }
};
  

  const checkPaymentStatus = async (orderid) => {
    try {
      const statusResponse = await axios.get(
        `https://makemydocuments.nakshatranamahacreations.in/payment-status.php?orderid=${orderid}`
      );
  
      if (statusResponse.status === 200) {
        console.log("Payment Status Response:", statusResponse.data);
  
       
        if (statusResponse.data.status === "SUCCESS") {
          // alert("Payment was successful!");
        } else {
          // alert("Payment failed or is pending.");
        }
      } else {
        // alert("Unable to fetch payment status. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching payment status:", error);
      // alert("An error occurred while fetching the payment status.");
    }
  };

  const handleResend = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
      if (!/^91\d{10}$/.test(formattedNumber)) {
        formattedNumber = `91${formattedNumber}`;
      }
  
      console.log("Formatted Mobile Number for Resend:", formattedNumber);
  
      const config = {
        url: "https://api.makemydocuments.com/api/sendOTP",
        method: "post",
        data: {
          mobilenumber: formattedNumber,
        },
      };
      const response = await axios(config);
  
      if (response.status === 200 && response.data.status === "success") {
        console.log("Resend OTP Response:", response.data);
        setResendCountdown(30); 
        startCountdown(); 
       
      } else {
    
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
    } finally {
      setIsResending(false); 
    }
  };
  

  const startCountdown = () => {
    let countdownValue = resendCountdown;
    const interval = setInterval(() => {
      if (countdownValue > 0) {
        countdownValue -= 1;
        setResendCountdown(countdownValue);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };
  const handleVerify = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
  
      if (!/^\d{10}$/.test(formattedNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
  
      formattedNumber = `${formattedNumber}`;
      console.log("Formatted Mobile Number:", formattedNumber);
  
      const enteredOtp = otp.join("").trim();
      if (!enteredOtp || enteredOtp.length !== 4) {
        alert("Please enter a valid 4-digit OTP.");
        return;
      }
  
      const response = await axios.post(
        "https://api.makemydocuments.com/api/verifyOTP",
        { mobilenumber: formattedNumber, otp: enteredOtp }
      );
  
      if (response.status === 200) {
        console.log("OTP Verification Response:", response.data);
        if (response.data.status === "success") {
          // alert("OTP Verified Successfully!");
          setShowOtpSection(false);
  
          // Finish submission first
          finishSubmission();
          navigate("/police-clearance-certificate/proceed-to-pay");
          // await sendMessage(formattedNumber);
        } else {
          alert(response.data.message || "Error verifying OTP.");
        }
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP. Please try again.");
    }
  };
  



  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [isResending, setIsResending] = useState(false);

  // Handle OTP input
  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to the next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
    }
  };


  const faqs = [
    {
      question: "Who needs a PCC?",
      
      answer:
        "Individuals applying for employment, immigration, long-term visas, or residency in another country typically require a PCC.",
    },
    {
      question: "How long is a PCC valid?",
      answer:
        "The validity of a PCC varies by country and institution but is generally valid for six months. It's advisable to check the specific requirements of the requesting entity.",
    },
    {
      question: "How long does it take to obtain a PCC?",
      answer: "The processing time can vary depending on the issuing authority and the applicant's background. It may range from a few days to several weeks.",
    },
    {
      question: "Can I apply for a PCC if I have lived at multiple addresses?",
      // answer: (
      //   <ul style={{ listStyleType: "none" }}>
      //     <li>
      //       In normal application you will receive your passport within 10 to 15
      //       working days
      //     </li>
      //     <br />
      //     <li>
      //       In tatkal application you will receive your passport within 2 to 5
      //       working days
      //     </li>
      //   </ul>
      // ),
      answer: "Yes, but you may need to provide additional documentation and undergo verification for each address you've resided at.",

    },
    {
      question: "What if my application for a PCC is rejected?",
      // "answer": "If your application is rejected, you can appeal the decision or provide additional supporting documents for reconsideration. For personalized assistance and to begin your PCC application process, contact Make My Documents today.  Our dedicated team is here to simplify the process and ensure you receive your certificate promptly!"
      answer :(
        <div>
          <p>
          If your application is rejected, you can appeal the decision or provide additional supporting documents for reconsideration.
          </p>
        
        </div>
      ),
    }
    
    
  ];


  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
      
<title> Apply Police Clearance Certificate Online | PCC Application India </title>
<meta name="description" content="Get your Police Clearance Certificate (PCC) hassle-free with expert guidance. Apply online for immigration, employment, or travel needs. Fast and reliable service."/>
<meta name="keywords" content="police clearance certificate, PCC application, apply PCC online, PCC application India, police clearance certificate online, PCC for visa, PCC agents near me, PCC for employment, police verification certificate, PCC document requirements, online PCC service, how to apply PCC, PCC process, police certificate for immigration, PCC Bangalore, police clearance certificate for travel, police clearance certificate India, PCC near me, apply police certificate online"/>
<link rel="canonical" href="https://www.makemydocuments.com/police-clearance-certificate"/>
<meta name="rating" content="General"/>
<meta name="revisit-after" content="2 days"/>
<meta name="robots" content="ALL, index, follow"/>
<meta name="distribution" content="Global" />
<meta name="rating" content="Safe For All" />
<meta name="language" content="English" />
<meta http-equiv="window-target" content="_top"/>
<meta http-equiv="pics-label" content="for all ages"/>
<meta content="All, FOLLOW" name="GOOGLEBOTS"/>
<meta content="All, FOLLOW" name="YAHOOBOTS"/>
<meta content="All, FOLLOW" name="MSNBOTS"/>
<meta content="All, FOLLOW" name="BINGBOTS"/>
<meta content="all" name="Googlebot-Image"/>
<meta content="all" name="Slurp"/>
<meta content="all" name="Scooter"/>
<meta content="ALL" name="WEBCRAWLERS"/>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-QN4189EDG5"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QN4189EDG5');
        `}
      </script>

<script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '865961251883214');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=865961251883214&ev=PageView&noscript=1" alt="Meta Pixel" />`}
        </noscript>

        <script>
          {`
            (function(w,d,t,r,u){
              var f,n,i;w[u]=w[u]||[],f=function(){
                var o={ti:"56340877", enableAutoSpaTracking: true};
                o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
              },
              n=d.createElement(t),n.src=r,n.async=1,
              n.onload=n.onreadystatechange=function(){
                var s=this.readyState;
                s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
              },
              i=d.getElementsByTagName(t)[0];
              i.parentNode.insertBefore(n,i)
            })(window,document,"script","//bat.bing.com/bat.js","uetq");
          `}
        </script>
<script>
{`!function(e,t,n,s,u,a){
  e.twq||(s=e.twq=function(){
    s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
  },s.version='1.1',s.queue=[],u=t.createElement(n),
  u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
  a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
}(window,document,'script');
twq('config','onik3');`}
</script>

<script type="text/javascript">
{`_linkedin_partner_id = "7447820";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
</script>

<script type="text/javascript">
{`(function(l) {
  if (!l) {
    window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[];
  }
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript"; b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);
})(window.lintrk);`}
</script>

<noscript dangerouslySetInnerHTML={{
  __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7447820&fmt=gif" />`
}} />


    </Helmet>
    <div style={{overflow:'hidden'}}>
      <div className="container-clearance"
        style={{
          background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
          minHeight: "60vh",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          marginTop: "4%",
        }}
      >
        <div style={{ flex: 1, textAlign: "left", fontWeight: "bold" }}>
          {/* <h2 style={{marginLeft:"25%", marginBottom:"60px",fontWeight:"bold"}}>Lease Agreement Online</h2> */}
          <h4 style={{fontWeight:'bold'}}>Police Clearance Certificate(PCC)</h4>
          {/* <p>PAN Card Services - Apply Now!"</p> */}
        </div>
        <div>
          <img
            src={Image30}
            alt="Lease Agreement"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    <div
      className="content-section"
      style={{
        backgroundColor: "#fffff",
        padding: "30px 15px",
        borderRadius: "10px",
        margin: "-1% ",
        marginLeft:'10%',
        marginRight: "72%",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 position-relative d-none d-lg-block">
          {/* First Section: Documents Required (Any One Address Proof) */}
          <div className="d-flex align-items-center mb-5" style={{gap: '20px'}}>
            <div style={{ position: "relative", minWidth: "80px", marginTop:'-70%' }}>
              <img src={circleIcon} alt="Circle Background" className="img-fluid" />
              <img
                src={documentsIcon}
                alt="Documents Icon"
                style={{
                  position: "absolute",
                  top: "58%",
                  left: "40%",
                  width:'43%',
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
            <div>
              <h4 className="desktop-text">Documents Required (Any One Address Proof)</h4>
              <ul className="desktop-ul">
              <li>Existing Passport(M)</li>
                <li>Aadhaar card</li>
                
                <li>Bank statement</li>

                <li>Voter Id</li>

              </ul>
            </div>
          </div>
    
          {/* Second Section: How It Works */}
          <div className="d-flex align-items-center mb-5" style={{gap: '20px'}}>
            <div style={{ position: "relative", minWidth: "80px", marginTop:'-140%' }}>
              <img src={circleIcon} alt="Circle Background" className="img-fluid" />
              <img
                src={howIcon}
                alt="How It Works Icon"
                style={{
                  position: "absolute",
                  top: "58%",
                  left: "40%",
                  width:'43%',
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
            <div>
              <h4 className="desktop-text">How It Works</h4>
              <ul className="desktop-ul">
                <li>Register online</li>
                <li>Upload Documents</li>
                <li>Payment</li>
                <li>Get Appointment</li>
                <li>Visit Psk</li>
                <li>Get Delivered</li>

              </ul>
            </div>
          </div>
    
          {/* Third Section: Charges */}
          <div className="d-flex align-items-center mb-5" style={{gap: '20px'}}>
            <div style={{ position: "relative", minWidth: "80px" , marginTop:'-100%'}}>
              <img src={circleIcon} alt="Circle Background" className="img-fluid" />
              <img
                src={Price}
                alt="Price Icon"
                style={{
                  position: "absolute",
                  top: "58%",
                  left: "40%",
                  width:'43%',
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
            <div>
              <h4 className="desktop-text">Charges</h4>
              <ul className="desktop-ul">
                <li>
                  <strong>Rs.1000</strong>
                </li>
                <li>
                  <strong>Rs.99</strong> as booking fee. Need to pay while submitting online form (This fee <br/> is non-refundable and
                    will be adjusted in the total bill.)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="address-proof-container d-block d-lg-none">
  {/* Documents Required Section */}
  <div className="address-proof-section row-container">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={documentsIcon}
          alt="Documents Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>
        Documents Required <br />(Any One Address Proof)
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li>Existing Passport (M)</li>
        <li>Aadhaar card</li>
        <li>Bank statement</li>
        <li>Voter ID</li>
      </ul>
    </div>
  </div>

  {/* How It Works Section */}
  <div className="how-it-works-section row-container">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={howIcon}
          alt="How It Works Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>How It Works</h4>
      <ul className="steps-list" style={{ listStyleType: "disc",}}>
        <li>Register Online</li>
        <li>Upload Documents</li>
        <li>Payment</li>
        <li>Get Appointment</li>
        <li>Visit PSK</li>
        <li>Get Delivered</li>
      </ul>
    </div>
  </div>

  {/* Charges Section */}
  <div className="charges-section row-container">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={Price}
          alt="Charges Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>Charges</h4>
      <ul className="charges-list" style={{ listStyleType: "disc",}}>
        <li>
          <strong>Rs.1000</strong>
        </li>
        <li>
          <strong>Rs.99</strong> as booking fee. Need to pay while submitting online form. This fee is non-refundable and will be adjusted in the total bill.
        </li>
      </ul>
    </div>
  </div>
  <br/>
</div>


      <div>
        {/* Get Quotes Button */}
        {/* <div style={{ textAlign: "center", marginTop: "4%" }}>
          <button
            style={{
              backgroundColor: "#FCA505",
              color: "#000000",
              padding: "12px 50px",
              border: "none",
              borderRadius: "30px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "40%",
              marginTop: "-30%",
            }}
            onClick={openPopup}
          >
            CONTINUE
          </button>
        </div> */}
        <div className="continue-button-container">
  <button className="continue-button" onClick={openPopup} style={{borderRadius:'0px'}}>
    Apply Now
  </button>
</div>

        {/* Modal Popup */}
        {showPopup && (
          <div className="popupstyle-clearance"
            style={{
              position: "fixed",
              top: "100px",
              left: "0",
              width: "100%",
              height: "86%",
              // backgroundColor: "rgba(26, 118, 216, 0.9)",
              backgroundColor: "#126ece",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "9999",
            }}
          >
            <div className="popup-clearance"
              // style={{
              //   backgroundColor: "#FFFFFF",
              //   padding: "40px",
              //   borderRadius: "28px",
              //   width: "70%",
              //   maxHeight: "90%", // Maximum height of the popup
              //   overflowY: "auto", // Enable scrolling if content overflows
              //   textAlign: "center",
              //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              // }}
            >
              {/* Stepper */}

              {!isCompleted ? (
                <>
                  <div className="stepper-clearance"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "30px",
                    }}
                  >
                    {Array.from({ length: 3 }).map((_, index) => (
                      <React.Fragment key={index}>
                        <div className="step-container"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            flex: 1,
                          }}
                        >
                          <button className="button-clearance-stepper"
                            onClick={() => setCurrentStep(index + 1)} // Make step clickable
                            style={{
                              width: "50px",
                              height: "50px",
                              backgroundColor:
                                currentStep >= index + 1 ? "#4285F4" : "#ccc",
                              color: "white",
                              borderRadius: "50%",
                              lineHeight: "50px",
                              fontWeight: "bold",
                              border: "none",
                              cursor: "pointer",
                              outline: "none",
                            }}
                          >
                            {index + 1}
                          </button>
                          {/* Optional Step Labels */}
                          {/* <span style={{ marginTop: "10px", fontSize: "16px" }}>Step {index + 1}</span> */}
                        </div>

                        {/* Add Connection Divider Between Steps */}
                        {index < 2 && (
                          <div
                            style={{
                              height: "2px",
                              flex: 1,
                              backgroundColor:
                                currentStep > index + 1 ? "#4285F4" : "#ccc",
                              alignSelf: "center",
                            }}
                              className="step-divider"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                  {currentStep === 1 && (
  <div className="application-form" style={{ textAlign: "center" }}>
    <h5 className="form-title" style={{ color: "#007BFF", fontWeight: "bold" }}>
      Applying for <span style={{ color: "red" }}>*</span>
    </h5>

    {/* Radio Buttons */}
    <div
      className="radio-group"
      value={applyingFor}
      onChange={handleApplyingFor}
    >
      <label className="radio-option">
        <input
          type="radio"
          name="agreementOption"
          value="Citizenship/Nationality Application"
          onChange={handleApplyingFor}
          style={{textAlign:'left'}}
        />
        Citizenship/Nationality Application
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="agreementOption"
          value="Education/Research"
          onChange={handleApplyingFor}
          style={{textAlign:'left'}}
        />
        Education/Research
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="agreementOption"
          value="Employment Visa/Work Permit"
          onChange={handleApplyingFor}
          style={{textAlign:'left'}}
        />
        Employment Visa/Work Permit
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="agreementOption"
          value="Immigration Purposes Other Than Citizenship"
          onChange={handleApplyingFor}
          style={{textAlign:'left'}}
        />
        Immigration Purposes Other Than Citizenship
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="agreementOption"
          value="Long Term Visa/Stay"
          onChange={handleApplyingFor}
          style={{textAlign:'left'}}
        />
        Long Term Visa/Stay
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="agreementOption"
          value="Residence Permit"
          onChange={handleApplyingFor}
          style={{textAlign:'left'}}
        />
        Residence Permit
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="agreementOption"
          value="Tourist Visa"
          onChange={handleApplyingFor}
          style={{textAlign:'left'}}
        />
        Tourist Visa
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="agreementOption"
          value="Others"
          onChange={handleApplyingFor}
          style={{textAlign:'left'}}
        />
        Others
      </label>
    </div>

    {error && <p className="error-message">{error}</p>}
    <br/>
  </div>
)}

                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Application Details
                          <span style={{ color: "red" }}>*</span>
                        </p>

                        {/* Given Name */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="givenname"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Given Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={handleFullNameChange}
                            id="givernname"
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Gender */}
                        <div
                          style={{
                            marginBottom: "33px",
                            textAlign: "left",
                            gap: "10px",
                          }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "500" }}
                          >
                            Gender
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column", // Align radio buttons in a column
                              gap: "10px", // Add space between the radio buttons
                            }}
                          >
                            <label>
                              <input
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={handleSelectedGender}
                                style={{ marginRight: "10px" }}
                              />
                              Female
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={handleSelectedGender}
                                style={{ marginRight: "10px" }}
                              />
                              Male
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="gender"
                                value="transgender"
                                onChange={handleSelectedGender}
                                style={{ marginRight: "10px" }}
                              />
                              Transgender
                            </label>
                          </div>
                        </div>

                        {/* Date of Birth */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="dateOfBirth"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Date of Birth
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="date"
                            id="dateOfBirth"
                            value={dob}
                            onChange={handleDateofbirth}
                            placeholder="Enter Date of Birth"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Place of Birth */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="place"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Place of Birth (Village/ Town / City){" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={placeofbirth}
                            onChange={handlePlaceofBirth}
                            id="place"
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Employment Type */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="employmentType"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Employment Type{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="employmentType"
                            value={employmentType} // Bind the value to state
                            onChange={handleEmploymentChange} // Handle changes
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Choose</option>
                            <option value="Government">Government</option>
                            <option value="Private">Private</option>
                            <option value="Student">Student</option>
                            <option value="Homemaker">Homemaker</option>
                            <option value="Retired">Retired</option>
                          </select>
                        </div>

                        {/* Education Qualification */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="educationQualification"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Education Qualification{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            value={qualification}
                            onChange={handleQualification}
                            id="educationQualification"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Choose</option>
                            <option value="Grduate and Above">
                              Grduate and Above
                            </option>
                            <option value="10th Pass and Above">
                              10th Pass and Above
                            </option>
                            <option value="10th Pass and Above">Below 10th</option>
                          </select>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <br/>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Present Residential Address
                          <span style={{ color: "red" }}>*</span>
                        </p>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            //  htmlFor="ownerName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            House No. and Street Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={villageTownCity}
                            onChange={handleVillageTownCityChange}
                            id=""
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                            required
                          />
                          
                        </div>

                        <div>
                          {/* State Dropdown */}
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="state"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              State<span style={{ color: "red" }}>*</span>
                            </label>
                            <select
                              id="state"
                              value={selectedState}
                              onChange={handleStateChange}
                              style={{
                                width: "100%",
                                height: "45px",
                                fontSize: "16px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                border: "2px solid #FCA505",
                              }}
                              required
                            >
                              <option value="">Select State</option>
                              {stateData.map((stateObj, index) => (
                                <option key={index} value={stateObj.state}>
                                  {stateObj.state}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* District Dropdown */}
                          {selectedState && (
                            <div
                              style={{
                                marginBottom: "20px",
                                textAlign: "left",
                              }}
                            >
                              <label
                                htmlFor="district"
                                style={{
                                  display: "block",
                                  marginBottom: "10px",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                }}
                              >
                                District<span style={{ color: "red" }}>*</span>
                              </label>
                              <select
                                id="district"
                                value={selectedDistrict}
                                onChange={handleDistrictChange}
                                style={{
                                  width: "100%",
                                  height: "45px",
                                  fontSize: "16px",
                                  border: "1px solid #ccc",
                                  borderRadius: "4px",
                                  border: "2px solid #FCA505",
                                }}
                                required
                              >
                                <option value="">Select District</option>
                                {districts.map((district, index) => (
                                  <option key={index} value={district}>
                                    {district}
                                  </option>
                                ))}
                              </select>
                              
                            </div>
                            
                          )}
                        </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="pincode"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Pin Code <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="pincode"
                            placeholder="Enter Pin Code"
                            value={pincode}
                            onChange={handlePincodeChange} // Handle input change
                            onBlur={validatePincode} // Validate when input loses focus
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                            required
                          />
                        </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor=""
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Email ID
                          </label>
                          <input
                            type="text"
                            value={emailId} 
                            onChange={handleEmailIdChange} 
                            id=""
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                           required
                        </div>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            //  htmlFor="ownerName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Nearest Police Station
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={nearbypolicestation}
                            onChange={handleNearByPoliceStation}
                            id=""
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                            required
                          />
                          
                        </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="mobilenumber"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Mobile Number
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="mobileNumber"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <p
                          style={{
                            marginTop: "20px",
                            fontSize: "14px",
                            textAlign: "left",
                          }}
                        >
                          By clicking submit, you agree to our{" "}
                          <a
                            href="/terms-conditions"
                            style={{
                              color: "#007BFF",
                              textDecoration: "underline",
                            }}
                          >
                            Terms & Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy-policy"
                            style={{
                              color: "#007BFF",
                              textDecoration: "underline",
                            }}
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <br/>
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    {currentStep > 1 && (
                      <>
                      {/* Desktop Button */}
                      {!isMobile && (
                        <button
                          onClick={prevStep}
                          className="desktop-back-btn"
                          style={{
                            padding: "10px 20px",
                            backgroundColor: "#FCA505",
                            color: "#000000",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginTop:'2%',
                            height:'1%'
                          }}
                        >
                          Back
                        </button>
                      )}
                      
                      {/* Mobile Button */}
                      {isMobile && (
                        <button
                          onClick={prevStep}
                          className="mobile-back-btn"
                          style={{
                            padding: "10px",
                            backgroundColor: "#FCA505",
                            color: "#000000",
                            border: "none",
                            borderRadius: "50%",
                            cursor: "pointer",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            top: "10px", // Adjust for positioning
                            left: "10px",
                          }}
                        >
                          <ArrowLeft size={20} />
                        </button>
                      )}
                      </>
                    )}

                    {currentStep < 3 ? (
                      // <button
                      //   onClick={nextStep}
                      //   style={{
                      //     padding: "10px 20px",
                      //     backgroundColor: "#FCA505",
                      //     color: "#000000",
                      //     border: "none",
                      //     borderRadius: "5px",
                      //     cursor: "pointer",
                      //   }}
                      // >
                      //   Next
                      // </button>
                      <div className="next-button-container">
  <button className="next-button" onClick={nextStep}>
    Next
  </button>
</div>

                    ) : (
                      // <button
                      //   onClick={handleSubmit}
                      //   style={{
                      //     padding: "10px 20px",
                      //     backgroundColor: "FCA505",
                      //     color: "#000000",
                      //     border: "none",
                      //     borderRadius: "5px",
                      //     cursor: "pointer",
                      //   }}
                      // >
                      //   SUBMIT
                      // </button>
                      <div className="submit-button-container">
  <button className="submit-button" onClick={handleSubmit}>
    Submit
  </button>
</div>

                    )}
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  {showOtpSection ? (
                    <div>
                      <h4 style={{ color: "#007BFF", fontWeight: "bold" }}>
                        OTP sent on{" "}
                        {mobileNumber
                          ? mobileNumber.replace(/.(?=.{4})/g, "*")
                          : ""}
                      </h4>
                      <div style={{ margin: "20px 0" }}>
                        <label
                          style={{ fontWeight: "500", marginBottom: "10px" }}
                        >
                          Enter OTP <span style={{ color: "red" }}>*</span>
                        </label>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                          }}
                        >
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              id={`otp-input-${index}`}
                              type="text"
                              maxLength="1"
                              value={digit}
                              onChange={(e) =>
                                handleChange(e.target.value, index)
                              }
                              onKeyDown={(e) => handleBackspace(e, index)}
                              style={{
                                width: "50px",
                                height: "50px",
                                textAlign: "center",
                                fontSize: "18px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: "20px", textAlign: "center" }}>
                        <p style={{ fontSize: "14px", color: "#888" }}>
                          {resendCountdown > 0 ? (
                            <>Not Received? Resend in {resendCountdown}s</>
                          ) : (
                            <a
                              href="#"
                              onClick={handleResend}
                              style={{
                                textDecoration: "none",
                                color: isResending ? "#ccc" : "#007BFF",
                                pointerEvents: isResending ? "none" : "auto",
                              }}
                            >
                              Resend OTP
                            </a>
                          )}
                        </p>
                      </div>

                      <div className="verify-button-container">
  <button
    onClick={() => {
      handleVerify().then((isVerified) => {
        if (isVerified) {
          finishSubmission();
        } else {
          setError("OTP verification failed.");
        }
      });
    }}
    style={{color:'#000', fontWeight:'bold'}}
    className="verify-button"
  >
    Verify
  </button>
</div>
                    </div>
                  ) : (
                    <>
                 {location.pathname === "/police-clearance-certificate/proceed-to-pay" && (
                    <>
                      {paymentSuccess ? ( // Conditionally render success message
                        <div>
                          <h2 style={styles.successMessage}>
                            Payment Successful!
                          </h2>
                          <h3 style={styles.thankYouMessage}>
                            Thank You for Your Submission!
                          </h3>
                        </div>
                      ) : (
                        <div>
                          <h2 style={styles.thankYouMessage}>
                            Thank You for Your Submission!
                          </h2>
                          <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
  {/* Name, Mobile Number, Order ID, Services */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {[
      { label: "Name", value: userDetails?.name || "N/A" },
      { label: "Mobile Number", value: userDetails?.mobilenumber || "N/A" },
      { label: "Order ID", value: userDetails?.orderid || "N/A" },
      { label: "Services", value: applyingFor || "N/A" }, // Ensures a default if applyingFor is empty
    ].map((item, index) => (
      <div key={index} style={{ flex: "1 1 45%", minWidth: "200px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign: "left" }}>
          {item.label}
        </label>
        <input type="text" value={item.value} readOnly 
               style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
      </div>
    ))}
  </div>

  {/* Amount (Booking Fee) */}
  <div style={{ marginTop: "10px" }}>
    <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign: "left" }}>
      Amount (Booking Fee)
    </label>
    <input type="text" value={paidAmount || "₹0"} readOnly 
           style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    <p style={{ fontSize: "12px", marginTop: "5px" }}>
      You can pay the balance amount post documents verification by our consultant.
    </p>
  </div>
</div>

                          <div className="proceed-button-container">
  <button
    onClick={handleProceedToPay}
    style={{color:'#000', fontWeight:'bold'}}
    className="proceed-button"
    disabled={isLoading} // Disable button while loading
  >
    {isLoading ? "Loading..." : "Proceed to Pay"}
  </button>
</div>

      {/* Spinner */}
      {isLoading && (
        <div style={styles.spinnerContainer}>
          <div style={styles.spinner}></div>
        </div>
      )}
                        </div>
                      )}
                    </>
                    )}

                    </>
                  )}
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="d-none d-lg-block"
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "8%",
                  background: "#000000",
                  border: "1px solid #FCA505",
                  fontSize: "20px",
                  padding: "8px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <FaArrowLeft />
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        className="faq-section"
        style={{
          margin: "14px auto",
          padding: "20px",
          background: "#FFFFFF",
          borderRadius: "10px",
          width: "80%",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#007BFF",
            marginBottom: "20px",
          }}
        >
          FAQs
        </h4>
        <p
          style={{
            textAlign: "center",
            fontWeight: "500",
            marginBottom: "30px",
          }}
        >
          Need help? Contact us for any queries related to us
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              style={{ marginBottom: "10px" }}
            >
              <button
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "10px 20px",
                  border: "1px solid #007BFF",
                  borderRadius: "5px",
                  background: "#F9F9F9",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginLeft: "10px",
                  }}
                >
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <div
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    background: "#F3F3F3",
                    borderRadius: "5px",
                    color: "#333",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <br></br>
        <>
          <h1 className="faq-tag-title-h3">
            <strong>Police Clearance Certificate (PCC) Services by Make My Documents</strong>
          </h1>
          <p style={{textAlign:'left'}}>
          At <strong> Make My Documents</strong> , we specialize in assisting individuals in obtaining <strong>Police Clearance Certificates (PCC)</strong> efficiently and hassle-free. Our expert team ensures a seamless experience, guiding you through every step of the process.
          </p>

          <h2  style={{textAlign:'left', fontSize:'20px'}}>
            <strong>What is a Police Clearance Certificate (PCC)?</strong>
          </h2>
          <p  style={{textAlign:'left', marginTop:'1%'}}>
          A <strong>Police Clearance Certificate (PCC)</strong> is an official document issued by the police or authorized government agencies, stating that the applicant has no criminal records. It is often required for various purposes such as <strong>employment, immigration, or obtaining visas.
            </strong>
          </p>

          <h2  style={{textAlign:'left', fontSize:'20px', fontWeight:'bold'}}>
          Importance of a PCC
          </h2>
          <br/>                                          
          <div>
          <h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Employment Opportunities:</strong></h3>
<p style={{display: 'inline'}}>Many employers, both domestic and international, require a PCC to ensure the credibility and integrity of potential employees.</p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Immigration and Visas: </strong></h3>
<p style={{display: 'inline'}}>Countries often mandate a PCC for visa applications, especially for long-term stays, to assess the applicant's background.</p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Adoption: </strong></h3>
<p style={{display: 'inline'}}>Individuals seeking to adopt a child may need a PCC to demonstrate their suitability as guardians.</p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Residency Applications: </strong></h3>
<p style={{display: 'inline'}}>When applying for residency in another country, a PCC may be required to prove good conduct.</p>
</div>

<br/>

          <h2  style={{textAlign:'left', fontSize:'20px', fontWeight:'bold'}}>
          How Make My Documents Can Help To Get (PCC)
          </h2>
          <br/>
          <p>
          Navigating the process of obtaining a PCC can be complex and time-consuming. At <strong>Make My Documents</strong>, we offer:
          </p>
        
          <div>
          <h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Expert Guidance: </strong></h3>
<p style={{display: 'inline'}}>Our knowledgeable team provides step-by-step assistance, ensuring all requirements are met accurately.</p>
</div>
<br/>
<div>
          <h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Document Preparation: </strong></h3>
<p style={{display: 'inline'}}>We help in gathering and organizing necessary documents to avoid any delays.</p>
</div>
<br/>
<div>
          <h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Application Submission: </strong></h3>
<p style={{display: 'inline'}}>Our service includes submitting your application to the appropriate authorities promptly.</p>
</div>
<br/>
<div>
          <h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Follow-up Services: </strong></h3>
<p style={{display: 'inline'}}>We monitor the progress of your application and keep you informed throughout the process.</p>
</div>
<br/>
<p>For <strong>personalized assistance</strong> and to begin your <strong>PCC application process,</strong> contact <strong>Make My Documents</strong> today. Our dedicated team is here to simplify the process and ensure you receive your certificate promptly!</p>
        </>
      </div>
    </div>
    </>
  );
};

const styles = {
  paymentSummary: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  thankYouMessage: {
    textAlign: "center",
    color: "#007BFF",
    marginBottom: "20px",
  },
  infoBox: {
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },
  label: {
    flex: "1",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    flex: "2",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    marginLeft: "10px",
    width: "45%",
  },
  proceedButton: {
    backgroundColor: "#fca505",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #ccc",
    borderTop: "5px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
 

};

export default PoliceClearance;
