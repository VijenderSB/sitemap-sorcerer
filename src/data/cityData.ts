export interface CityData {
  slug: string;
  name: string;
  state: string;
  tier: 1 | 2 | 3;
}

export const cities: CityData[] = [
  // Tier 1 — Metro Cities
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", tier: 1 },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka", tier: 1 },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", tier: 1 },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", tier: 1 },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", tier: 1 },
  { slug: "pune", name: "Pune", state: "Maharashtra", tier: 1 },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", tier: 1 },

  // Tier 1 — NCR & North India
  { slug: "gurgaon", name: "Gurgaon", state: "Haryana", tier: 1 },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh", tier: 1 },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", tier: 1 },
  { slug: "faridabad", name: "Faridabad", state: "Haryana", tier: 1 },
  { slug: "greater-noida", name: "Greater Noida", state: "Uttar Pradesh", tier: 1 },

  // Tier 2 — North India
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", tier: 2 },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan", tier: 2 },
  { slug: "chandigarh", name: "Chandigarh", state: "Chandigarh", tier: 2 },
  { slug: "amritsar", name: "Amritsar", state: "Punjab", tier: 2 },
  { slug: "ludhiana", name: "Ludhiana", state: "Punjab", tier: 2 },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh", tier: 2 },
  { slug: "agra", name: "Agra", state: "Uttar Pradesh", tier: 2 },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", tier: 2 },
  { slug: "prayagraj", name: "Prayagraj", state: "Uttar Pradesh", tier: 2 },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand", tier: 2 },
  { slug: "meerut", name: "Meerut", state: "Uttar Pradesh", tier: 2 },
  { slug: "patna", name: "Patna", state: "Bihar", tier: 2 },
  { slug: "ranchi", name: "Ranchi", state: "Jharkhand", tier: 2 },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", tier: 2 },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", tier: 2 },
  { slug: "jodhpur", name: "Jodhpur", state: "Rajasthan", tier: 2 },
  { slug: "udaipur", name: "Udaipur", state: "Rajasthan", tier: 2 },
  { slug: "kota", name: "Kota", state: "Rajasthan", tier: 2 },
  { slug: "jalandhar", name: "Jalandhar", state: "Punjab", tier: 2 },
  { slug: "patiala", name: "Patiala", state: "Punjab", tier: 2 },

  // Tier 2 — West India
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra", tier: 2 },
  { slug: "nashik", name: "Nashik", state: "Maharashtra", tier: 2 },
  { slug: "surat", name: "Surat", state: "Gujarat", tier: 2 },
  { slug: "vadodara", name: "Vadodara", state: "Gujarat", tier: 2 },
  { slug: "rajkot", name: "Rajkot", state: "Gujarat", tier: 2 },
  { slug: "aurangabad", name: "Aurangabad", state: "Maharashtra", tier: 2 },
  { slug: "thane", name: "Thane", state: "Maharashtra", tier: 2 },
  { slug: "navi-mumbai", name: "Navi Mumbai", state: "Maharashtra", tier: 2 },
  { slug: "goa", name: "Goa", state: "Goa", tier: 2 },

  // Tier 2 — South India
  { slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", tier: 2 },
  { slug: "kochi", name: "Kochi", state: "Kerala", tier: 2 },
  { slug: "thiruvananthapuram", name: "Thiruvananthapuram", state: "Kerala", tier: 2 },
  { slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", tier: 2 },
  { slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", tier: 2 },
  { slug: "madurai", name: "Madurai", state: "Tamil Nadu", tier: 2 },
  { slug: "mysore", name: "Mysore", state: "Karnataka", tier: 2 },
  { slug: "mangalore", name: "Mangalore", state: "Karnataka", tier: 2 },
  { slug: "hubli", name: "Hubli", state: "Karnataka", tier: 2 },
  { slug: "tirupati", name: "Tirupati", state: "Andhra Pradesh", tier: 2 },
  { slug: "warangal", name: "Warangal", state: "Telangana", tier: 2 },

  // Tier 2 — East India
  { slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", tier: 2 },
  { slug: "guwahati", name: "Guwahati", state: "Assam", tier: 2 },
  { slug: "jamshedpur", name: "Jamshedpur", state: "Jharkhand", tier: 2 },
  { slug: "siliguri", name: "Siliguri", state: "West Bengal", tier: 2 },

  // Tier 3 — North India
  { slug: "bareilly", name: "Bareilly", state: "Uttar Pradesh", tier: 3 },
  { slug: "aligarh", name: "Aligarh", state: "Uttar Pradesh", tier: 3 },
  { slug: "moradabad", name: "Moradabad", state: "Uttar Pradesh", tier: 3 },
  { slug: "gorakhpur", name: "Gorakhpur", state: "Uttar Pradesh", tier: 3 },
  { slug: "mathura", name: "Mathura", state: "Uttar Pradesh", tier: 3 },
  { slug: "muzaffarnagar", name: "Muzaffarnagar", state: "Uttar Pradesh", tier: 3 },
  { slug: "saharanpur", name: "Saharanpur", state: "Uttar Pradesh", tier: 3 },
  { slug: "firozabad", name: "Firozabad", state: "Uttar Pradesh", tier: 3 },
  { slug: "jhansi", name: "Jhansi", state: "Uttar Pradesh", tier: 3 },
  { slug: "haridwar", name: "Haridwar", state: "Uttarakhand", tier: 3 },
  { slug: "rishikesh", name: "Rishikesh", state: "Uttarakhand", tier: 3 },
  { slug: "haldwani", name: "Haldwani", state: "Uttarakhand", tier: 3 },
  { slug: "roorkee", name: "Roorkee", state: "Uttarakhand", tier: 3 },
  { slug: "shimla", name: "Shimla", state: "Himachal Pradesh", tier: 3 },
  { slug: "jammu", name: "Jammu", state: "Jammu & Kashmir", tier: 3 },
  { slug: "srinagar", name: "Srinagar", state: "Jammu & Kashmir", tier: 3 },
  { slug: "panipat", name: "Panipat", state: "Haryana", tier: 3 },
  { slug: "karnal", name: "Karnal", state: "Haryana", tier: 3 },
  { slug: "hisar", name: "Hisar", state: "Haryana", tier: 3 },
  { slug: "rohtak", name: "Rohtak", state: "Haryana", tier: 3 },
  { slug: "sonipat", name: "Sonipat", state: "Haryana", tier: 3 },
  { slug: "ambala", name: "Ambala", state: "Haryana", tier: 3 },
  { slug: "bhiwani", name: "Bhiwani", state: "Haryana", tier: 3 },
  { slug: "bathinda", name: "Bathinda", state: "Punjab", tier: 3 },
  { slug: "pathankot", name: "Pathankot", state: "Punjab", tier: 3 },
  { slug: "gwalior", name: "Gwalior", state: "Madhya Pradesh", tier: 3 },
  { slug: "jabalpur", name: "Jabalpur", state: "Madhya Pradesh", tier: 3 },
  { slug: "ujjain", name: "Ujjain", state: "Madhya Pradesh", tier: 3 },
  { slug: "raipur", name: "Raipur", state: "Chhattisgarh", tier: 3 },
  { slug: "bilaspur", name: "Bilaspur", state: "Chhattisgarh", tier: 3 },
  { slug: "bikaner", name: "Bikaner", state: "Rajasthan", tier: 3 },
  { slug: "ajmer", name: "Ajmer", state: "Rajasthan", tier: 3 },
  { slug: "alwar", name: "Alwar", state: "Rajasthan", tier: 3 },
  { slug: "bhilwara", name: "Bhilwara", state: "Rajasthan", tier: 3 },
  { slug: "sikar", name: "Sikar", state: "Rajasthan", tier: 3 },
  { slug: "muzaffarpur", name: "Muzaffarpur", state: "Bihar", tier: 3 },
  { slug: "gaya", name: "Gaya", state: "Bihar", tier: 3 },
  { slug: "bhagalpur", name: "Bhagalpur", state: "Bihar", tier: 3 },
  { slug: "darbhanga", name: "Darbhanga", state: "Bihar", tier: 3 },
  { slug: "purnia", name: "Purnia", state: "Bihar", tier: 3 },

  // Tier 3 — West India
  { slug: "kolhapur", name: "Kolhapur", state: "Maharashtra", tier: 3 },
  { slug: "solapur", name: "Solapur", state: "Maharashtra", tier: 3 },
  { slug: "sangli", name: "Sangli", state: "Maharashtra", tier: 3 },
  { slug: "ahmednagar", name: "Ahmednagar", state: "Maharashtra", tier: 3 },
  { slug: "bhavnagar", name: "Bhavnagar", state: "Gujarat", tier: 3 },
  { slug: "jamnagar", name: "Jamnagar", state: "Gujarat", tier: 3 },
  { slug: "junagadh", name: "Junagadh", state: "Gujarat", tier: 3 },
  { slug: "anand", name: "Anand", state: "Gujarat", tier: 3 },

  // Tier 3 — South India
  { slug: "salem", name: "Salem", state: "Tamil Nadu", tier: 3 },
  { slug: "tiruchirappalli", name: "Tiruchirappalli", state: "Tamil Nadu", tier: 3 },
  { slug: "erode", name: "Erode", state: "Tamil Nadu", tier: 3 },
  { slug: "vellore", name: "Vellore", state: "Tamil Nadu", tier: 3 },
  { slug: "thoothukudi", name: "Thoothukudi", state: "Tamil Nadu", tier: 3 },
  { slug: "kozhikode", name: "Kozhikode", state: "Kerala", tier: 3 },
  { slug: "thrissur", name: "Thrissur", state: "Kerala", tier: 3 },
  { slug: "kannur", name: "Kannur", state: "Kerala", tier: 3 },
  { slug: "guntur", name: "Guntur", state: "Andhra Pradesh", tier: 3 },
  { slug: "nellore", name: "Nellore", state: "Andhra Pradesh", tier: 3 },
  { slug: "kurnool", name: "Kurnool", state: "Andhra Pradesh", tier: 3 },
  { slug: "rajahmundry", name: "Rajahmundry", state: "Andhra Pradesh", tier: 3 },
  { slug: "karimnagar", name: "Karimnagar", state: "Telangana", tier: 3 },
  { slug: "nizamabad", name: "Nizamabad", state: "Telangana", tier: 3 },
  { slug: "belgaum", name: "Belgaum", state: "Karnataka", tier: 3 },
  { slug: "davangere", name: "Davangere", state: "Karnataka", tier: 3 },
  { slug: "bellary", name: "Bellary", state: "Karnataka", tier: 3 },
  { slug: "shimoga", name: "Shimoga", state: "Karnataka", tier: 3 },

  // Tier 3 — East & Northeast India
  { slug: "cuttack", name: "Cuttack", state: "Odisha", tier: 3 },
  { slug: "rourkela", name: "Rourkela", state: "Odisha", tier: 3 },
  { slug: "sambalpur", name: "Sambalpur", state: "Odisha", tier: 3 },
  { slug: "bokaro", name: "Bokaro", state: "Jharkhand", tier: 3 },
  { slug: "dhanbad", name: "Dhanbad", state: "Jharkhand", tier: 3 },
  { slug: "asansol", name: "Asansol", state: "West Bengal", tier: 3 },
  { slug: "durgapur", name: "Durgapur", state: "West Bengal", tier: 3 },
  { slug: "dibrugarh", name: "Dibrugarh", state: "Assam", tier: 3 },
  { slug: "jorhat", name: "Jorhat", state: "Assam", tier: 3 },
  { slug: "imphal", name: "Imphal", state: "Manipur", tier: 3 },
  { slug: "agartala", name: "Agartala", state: "Tripura", tier: 3 },
  { slug: "shillong", name: "Shillong", state: "Meghalaya", tier: 3 },
  { slug: "aizawl", name: "Aizawl", state: "Mizoram", tier: 3 },
  { slug: "gangtok", name: "Gangtok", state: "Sikkim", tier: 3 },
  { slug: "itanagar", name: "Itanagar", state: "Arunachal Pradesh", tier: 3 },
];

// Helper to get nearby city names for interlinking
export const getNearbyCities = (currentSlug: string, count = 6): CityData[] => {
  const current = cities.find(c => c.slug === currentSlug);
  if (!current) return cities.slice(0, count);
  
  // Same state first, then same tier
  const sameState = cities.filter(c => c.slug !== currentSlug && c.state === current.state);
  const sameTier = cities.filter(c => c.slug !== currentSlug && c.tier === current.tier && c.state !== current.state);
  const others = cities.filter(c => c.slug !== currentSlug && c.tier !== current.tier && c.state !== current.state);
  
  return [...sameState, ...sameTier, ...others].slice(0, count);
};
