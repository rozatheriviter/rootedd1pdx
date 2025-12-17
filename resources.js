const resources = [
  // Shelter
  {
    category: "Shelter",
    name: "Wy’east Shelter",
    address: "1415 SE 122nd Avenue, Portland, OR",
    phone: "503-490-0285",
    hours: "24/7",
    services: "110 beds in a congregate setting. Meals, hygiene, and housing placement support.",
    notes: "Priority access to veterans, individuals aged 55+, and those with disabilities. Operated by Do Good Multnomah. Entry by reservation only (referral via Transition Projects Day Center or provider contact).",
    transportation: ""
  }, //
  {
    category: "Shelter",
    name: "Laurelwood Center",
    address: "6130 SE Foster Road, Portland, OR",
    phone: "",
    hours: "24/7",
    services: "120 beds for women and couples. Pets allowed. On-site laundry, showers, and commercial kitchen.",
    notes: "Operated by Transition Projects. Prioritizes veterans and seniors. Located on the Foster Road rapid transit corridor.",
    transportation: "Foster Road rapid transit"
  }, //
  {
    category: "Shelter",
    name: "Gresham Women’s Shelter",
    address: "16141 E Burnside St, Gresham, OR",
    phone: "971-333-1223",
    hours: "24/7",
    services: "94 beds. Secure facility with no walk-up access.",
    notes: "Serves women, including survivors of domestic violence or sexual exploitation. Intake coordinated via 211 or referral line. Operated by Our Just Future.",
    transportation: ""
  }, //
  {
    category: "Shelter",
    name: "Lilac Meadows Family Shelter",
    address: "7740 SE Powell Blvd, Portland, OR",
    phone: "211",
    hours: "",
    services: "39 personal rooms for families with minor children and individuals in their third trimester of pregnancy.",
    notes: "Non-congregate motel model. No walk-up access; intake via 211 and Family System of Care. Operated by Our Just Future.",
    transportation: ""
  }, //
  {
    category: "Shelter",
    name: "Chestnut Tree Inn",
    address: "9699 SE Stark St, Portland, OR",
    phone: "",
    hours: "",
    services: "55 rooms for women, non-binary, and gender-queer individuals.",
    notes: "Referral from congregate shelters only (step-up model). Operated by Our Just Future.",
    transportation: "Near Gateway Transit Center"
  }, //
  {
    category: "Shelter",
    name: "Roseway Inn Motel Shelter",
    address: "9723 NE Sandy Blvd, Portland, OR",
    phone: "",
    hours: "",
    services: "Shelter for adults of all genders and couples.",
    notes: "Operated by Do Good Multnomah.",
    transportation: ""
  }, //
  {
    category: "Shelter",
    name: "Rockwood Bridge Shelter",
    address: "121 NE 181st Ave, Portland, OR",
    phone: "",
    hours: "",
    services: "Bridge housing for individuals approved for permanent housing but waiting for a unit.",
    notes: "Operated by Sunstone Way.",
    transportation: ""
  }, //
  {
    category: "Shelter",
    name: "Menlo Park Safe Rest Village",
    address: "SE 122nd & Glisan, Portland, OR",
    phone: "",
    hours: "24/7 staffing",
    services: "60 conditioned sleeping pods. On-site case management and behavioral health support.",
    notes: "Low-barrier (pets and partners allowed). Operated by Cultivate Initiatives.",
    transportation: ""
  }, //
  {
    category: "Shelter",
    name: "Agape Village",
    address: "9715 SE Powell Blvd, Portland, OR",
    phone: "",
    hours: "",
    services: "Approximately 15 tiny homes/pods in a structured community.",
    notes: "Faith-based partnership; intake is relational or referral-based.",
    transportation: ""
  }, //
  {
    category: "Shelter",
    name: "Parkrose Community Village",
    address: "12505 NE Halsey St, Portland, OR",
    phone: "",
    hours: "",
    services: "10 sleeping units serving adults who identify as LGBTQIA2S+.",
    notes: "Operated by WeShine.",
    transportation: ""
  }, //
  {
    category: "Shelter",
    name: "Oak Street Village",
    address: "333 SE 82nd Ave, Portland, OR",
    phone: "",
    hours: "",
    services: "29 sleeping units with on-site case management.",
    notes: "Operated by Straightway Services. Referrals by specific outreach workers only (no self-referral).",
    transportation: ""
  }, //
  {
    category: "Shelter",
    name: "Central Church of the Nazarene (Severe Weather)",
    address: "9715 SE Powell Blvd, Portland, OR",
    phone: "",
    hours: "Intake typically 8:00 PM during activation",
    services: "Severe weather shelter providing up to 100 mats.",
    notes: "Operated by Union Gospel Mission. Activates only when severe weather thresholds are met (below 25°F, snow, etc.).",
    transportation: ""
  }, //

  // Health Care
  {
    category: "Health Care",
    name: "The Blackburn Center",
    address: "12121 E Burnside St, Portland, OR",
    phone: "971-361-7800 (Pharmacy)",
    hours: "",
    services: "Primary care, substance use treatment (MAT), mental health services, pharmacy, and 51 recuperative care beds.",
    notes: "Operated by Central City Concern. Also provides affordable housing and employment services.",
    transportation: "MAX Blue Line"
  }, //
  {
    category: "Health Care",
    name: "Wallace Medical Concern - Rockwood",
    address: "18633 SE Stark St, Portland, OR",
    phone: "",
    hours: "",
    services: "Primary care, dental services, and urgent care.",
    notes: "Serves uninsured and low-income residents. Sliding fee discount program.",
    transportation: ""
  }, //
  {
    category: "Health Care",
    name: "Wallace Medical Concern - Rosewood Dental",
    address: "18139 NE Couch St, Portland, OR",
    phone: "",
    hours: "",
    services: "Essential dental care.",
    notes: "Focus on culturally competent care.",
    transportation: ""
  }, //

  // Food and Grocery Assistance
  {
    category: "Food and Grocery Assistance",
    name: "SnowCap Community Charities",
    address: "17805 SE Stark St, Portland, OR",
    phone: "",
    hours: "",
    services: "Warehouse-scale pantry providing food boxes and clothing.",
    notes: "Serves Multnomah County residents east of 82nd Avenue.",
    transportation: ""
  }, //
  {
    category: "Food and Grocery Assistance",
    name: "The Francis Center",
    address: "6535 SE 82nd Ave, Portland, OR",
    phone: "",
    hours: "Food: Mon.-Thurs. 10 a.m.-2 p.m.; Clothing: 10 a.m.-1 p.m.",
    services: "Food pantry and clothing closet.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Food and Grocery Assistance",
    name: "Southeast Community Food Pantry",
    address: "5535 SE Rhone St, Portland, OR",
    phone: "",
    hours: "Mon. and Thurs. 10 a.m.-2 p.m.; Wed. 2 p.m.-6 p.m.",
    services: "Emergency food boxes and clothing. Harvest Share on 4th Thursday of the month.",
    notes: "Associated with SE Community Church of the Nazarene.",
    transportation: ""
  }, //
  {
    category: "Food and Grocery Assistance",
    name: "St. Joseph the Worker Pantry",
    address: "2310 SE 148th Ave, Portland, OR",
    phone: "",
    hours: "",
    services: "Food pantry and furniture program.",
    notes: "St. Pauly Used Clothing Shed available 24/7 for donations.",
    transportation: ""
  }, //

  // Meals
  {
    category: "Meals",
    name: "PDX Saints Love - Day Center",
    address: "247 SE 82nd Ave, Portland, OR",
    phone: "",
    hours: "Thurs. 10 a.m.-2 p.m.",
    services: "Hot meals, hygiene kits, and case management.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Meals",
    name: "PDX Saints Love - Lents Park Wellness Fair",
    address: "4808 SE 92nd Ave, Portland, OR",
    phone: "",
    hours: "Mon. 10 a.m.-2 p.m.; Fri. 5 p.m.-7 p.m.",
    services: "Outdoor pop-up offering food, haircuts, and wound care.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Meals",
    name: "Rahab’s Sisters",
    address: "247 SE 82nd Ave, Portland, OR",
    phone: "",
    hours: "Fri. 7 p.m.-9 p.m.",
    services: "Hot meals, hygiene supplies, and community connection.",
    notes: "Specifically for women, gender-diverse individuals, and those marginalized by the sex trade.",
    transportation: ""
  }, //

  // Day Services/Hygiene
  {
    category: "Day Services/Hygiene",
    name: "Cultivate Initiatives Mobile Showers - Lents",
    address: "4244 SE 91st Ave (Pilgrim Church)",
    phone: "",
    hours: "Mon. 11 a.m.-2 p.m.",
    services: "Mobile shower truck, clothing distribution, and hygiene products.",
    notes: "Lents Wellness Fair location.",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "Cultivate Initiatives Mobile Showers - Hazelwood",
    address: "12414 E Burnside St (Family of Grace)",
    phone: "",
    hours: "Tues. 11 a.m.-2 p.m.",
    services: "Mobile shower truck, clothing distribution, and hygiene products.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "Cultivate Initiatives Mobile Showers - Montavilla",
    address: "247 SE 82nd Ave (PDX Saints Love)",
    phone: "",
    hours: "Tues. and Thurs. 11 a.m.-2 p.m.",
    services: "Mobile shower truck, clothing distribution, and hygiene products.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "Cultivate Initiatives Mobile Showers - Centennial",
    address: "3130 SE 148th Ave (Eastside Imago Dei)",
    phone: "",
    hours: "Wed. 11 a.m.-2 p.m.",
    services: "Mobile shower truck, clothing distribution, and hygiene products.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "Cultivate Initiatives Mobile Showers - Parkrose",
    address: "12505 NE Halsey St (WeShine Village)",
    phone: "",
    hours: "Wed. 11 a.m.-2 p.m.",
    services: "Mobile shower truck, clothing distribution, and hygiene products.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "Cultivate Initiatives Mobile Showers - Mill Park",
    address: "805 SE 122nd Ave (Midland Library)",
    phone: "",
    hours: "Thurs. 11 a.m.-2 p.m.",
    services: "Mobile shower truck, clothing distribution, and hygiene products.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "Cultivate Initiatives Mobile Showers - Centennial (Freedom Foursquare)",
    address: "660 SE 160th Ave",
    phone: "",
    hours: "Thurs. 11 a.m.-2 p.m.",
    services: "Mobile shower truck, clothing distribution, and hygiene products.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "Cultivate Initiatives Mobile Showers - Woodstock Border",
    address: "4033 SE Woodstock (All Saints Episcopal)",
    phone: "",
    hours: "Sat. 11 a.m.-2 p.m.",
    services: "Mobile shower truck, clothing distribution, and hygiene products.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "Cultivate Initiatives Hygiene Hub",
    address: "14625 SE Stark St, Portland, OR",
    phone: "",
    hours: "Mon. and Fri. 10:30 a.m.-3 p.m.; Tues.-Thurs. 9:30 a.m.-2 p.m.",
    services: "Stationary hub with showers and laundry machines.",
    notes: "Sign-up required for machines.",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "LoveOne Laundry - Eco Laundry",
    address: "122nd & Division, Portland, OR",
    phone: "",
    hours: "Every other Tues. 1 p.m.-3 p.m.",
    services: "Free laundry events; detergent provided.",
    notes: "Partnership with Love Shack Compassion Ministry.",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "LoveOne Laundry - QED Laundry",
    address: "SE McLoughlin Blvd, Portland, OR",
    phone: "",
    hours: "3rd Wed. of the month 6 p.m.-8 p.m.",
    services: "Free laundry events.",
    notes: "",
    transportation: ""
  }, //
  {
    category: "Day Services/Hygiene",
    name: "Parkrose Community UCC",
    address: "12505 NE Halsey St, Portland, OR",
    phone: "",
    hours: "Wed. 10 a.m.-2 p.m.",
    services: "Wellness Wednesdays: Clothing closet, lunch, and showers.",
    notes: "",
    transportation: ""
  }, //

  // Youth Services
  {
    category: "Youth Services",
    name: "Youth Opportunity Center (New Avenues)",
    address: "470 SE 165th Ave, Portland, OR",
    phone: "",
    hours: "Drop-in: Mon., Tues., Thurs., Fri. 2 p.m.-5 p.m.",
    services: "Meals, showers, laundry, computer access, and outreach connection.",
    notes: "East Connect Program serves youth ages 9-24.",
    transportation: ""
  }, //
  {
    category: "Youth Services",
    name: "The Alba Collaborative",
    address: "470 SE 165th Ave, Portland, OR",
    phone: "24/7 Crisis Line",
    hours: "24/7",
    services: "Crisis intervention, family reunification, and shelter prevention for minors ages 9-17.",
    notes: "Access to emergency beds if necessary.",
    transportation: ""
  }, //
  {
    category: "Youth Services",
    name: "Janus Youth Programs - Yellow Brick Road",
    address: "Mobile/Street Outreach",
    phone: "",
    hours: "",
    services: "Street outreach team connecting youth to safety.",
    notes: "Patrols East Portland; centralized intake is at the Access Center downtown.",
    transportation: ""
  }, //

  // Community Resources
  {
    category: "Community Resources",
    name: "The Rosewood Initiative",
    address: "14127 SE Stark St, Portland, OR",
    phone: "",
    hours: "",
    services: "Digital literacy, computer lab, and Wellness Wednesdays with food pantries.",
    notes: "Functions as a cooling/warming center during emergencies.",
    transportation: ""
  }, //
  {
    category: "Community Resources",
    name: "Portland Street Response",
    address: "Mobile Response",
    phone: "911",
    hours: "Daily 8 a.m.-10 p.m. (Subject to change)",
    services: "Non-police response to mental health crises or homelessness.",
    notes: "Can conduct welfare checks in encampments.",
    transportation: ""
  }, //

  // Libraries
  {
    category: "Libraries",
    name: "Midland Library",
    address: "805 SE 122nd Ave, Portland, OR",
    phone: "",
    hours: "",
    services: "Safe day space, restrooms, Wi-Fi, and access to computers.",
    notes: "Staff can connect patrons to housing and benefits resources.",
    transportation: ""
  }, //
  {
    category: "Libraries",
    name: "Holgate Library",
    address: "7905 SE Holgate Blvd, Portland, OR",
    phone: "",
    hours: "",
    services: "Safe day space, restrooms, Wi-Fi, and access to computers.",
    notes: "",
    transportation: ""
  } //
];