import { Member, Service, Client, Project } from '../types';

// @ts-ignore
import imgGuhring from '../assets/images/project_factory_no_people_1782500195371.jpg';
// @ts-ignore
import imgPersistent from '../assets/images/project_office_no_people_1782500210719.jpg';
// @ts-ignore
import imgTapadia from '../assets/images/project_villa_landscape_1782499783202.jpg';
// @ts-ignore
import imgHonda from '../assets/images/project_car_showroom_1782499796683.jpg';
// @ts-ignore
import imgChildrenClinic from '../assets/images/project_clinic_no_people_1782500223010.jpg';
// @ts-ignore
import imgBankBranch from '../assets/images/project_bank_no_people_1782500234622.jpg';
// @ts-ignore
import imgDentalClinic from '../assets/images/project_dental_no_people_1782500247011.jpg';
// @ts-ignore
import imgSchoolCampus from '../assets/images/project_school_no_people_1782500257560.jpg';
// @ts-ignore
import imgCafeInteriors from '../assets/images/project_cafe_no_people_1782500270593.jpg';
// @ts-ignore
import imgLuxuryBungalow from '../assets/images/project_luxury_bungalow_1782499884703.jpg';

export const companyMembers: Member[] = [
  {
    id: 'amar-samal',
    name: 'Mr. Amar R. Samal',
    role: 'Founder & Principal Executor',
    qualifications: ['Electrical Projects Specialist', '18+ Years Engineering Experience'],
    experience: '18+ Years',
    keyMilestone: 'Partner of Ved Enterprises & Pyramid Cooling Technology',
    detailedExperience: [
      'HT & LT heavy industrial substation design, erection, and charging approvals',
      'Over 30 major industrial cabling and fabrication projects executed across Chakan, Bhosari, and Pune hubs',
      'On-site project management of complex MEP layouts and multi-specialty clinical installations',
      'Power rating evaluations, load analysis, and direct MSEB contract coordination'
    ],
    bio: 'Founding proprietor of Samal Engineers, partner of Ved Enterprises, and partner of Pyramid Cooling Technology. Specializes in heavy-duty HT (High Tension) & LT (Low Tension) installations, industrial cabling, transformers, and site executions across Maharashtra.',
    linkedin: 'https://www.linkedin.com/in/amar-samal',
    github: 'https://github.com/samalvaishnavi'
  },
  {
    id: 'mn-karandikar',
    name: 'Mr. M. N. Karandikar',
    role: 'Technical Advisor & MEPH Specialist',
    qualifications: ['M. Tech in Electrical Engg. (IIT Powai)', 'DBM (Symbiosis Institute of Management)', 'Pune University with Distinction'],
    experience: '25+ Years',
    keyMilestone: 'IIT Powai Alumnus & Pioneer in High-Rise Ventilation Networks',
    detailedExperience: [
      'Integrated MEPH design and consultancy for multi-storey residential towers (24+ storeys)',
      'Thermal Heat Load computations and VRF/VRV central chilling layouts for large multiplexes',
      'Consultancy for chemical manufacturing plants, including Effluent Treatment Plant (ETP) plumbing design',
      'Technical validation of complex Bill of Quantities (BOQs) and tender evaluation systems'
    ],
    bio: 'Invaluable leader with over 25 years of profound expertise in the design, consultancy, and execution of complex building services, spanning Electrical, Mechanical, and Plumbing (MEP) for major high-rise residential towers, multiplexes, hotels, and chemical industrial plants.'
  },
  {
    id: 'ak-vaidya',
    name: 'Mr. A. K. Vaidya',
    role: 'Senior Technical Consultant',
    qualifications: ['B.E. (Electrical)', 'Retired Superintending Engineer (MSEB)'],
    experience: '35+ Years',
    keyMilestone: 'Retired Superintending Engineer of Maharashtra State Electricity Board',
    detailedExperience: [
      'Grid-level compliance and multi-megawatt statutory load sanctions across Maharashtra',
      'High-voltage safety audits, substations, and industrial tariff structures consultation',
      'Regulatory liaison strategy with state power companies for heavy-scale manufacturing grids',
      'Liaison and design auditing for complex infrastructural and government engineering works'
    ],
    bio: 'Retired Superintending Engineer of Maharashtra State Electricity Board. Brings extensive regulatory, grid-level, and compliance-related expertise, serving as a senior advisor for diverse industrial scale wiring systems and heavy electrical grids.'
  },
  {
    id: 'anand-gandle',
    name: 'Ar. Anand Gandle',
    role: 'Senior Architect & Layout Specialist',
    qualifications: ['B. Arch (Pune University)', 'Council of Architecture Certified Planner'],
    experience: '22+ Years',
    keyMilestone: 'Master Space Planner with 200+ Housing Blueprints Approved',
    detailedExperience: [
      'Expert in PMC and PCMC municipal layout planning and municipal authority sanctions',
      'Developed complete architectural space coordination protocols for premium commercial campuses',
      'Master planning of large educational institutions and high-end residential bungalows',
      'Highly adept in structural-architectural harmony and landscape engineering design'
    ],
    bio: 'Highly experienced architect specializing in comprehensive architectural drawings, commercial landscaping, and functional space layouts. Expert in coordinating structural and licensing bylaws for large-scale properties across Maharashtra.'
  },
  {
    id: 'tushar-deshpande',
    name: 'Mr. Tushar Deshpande',
    role: 'Chief of Interior Architecture & Design',
    qualifications: ['D.I.D.D. (Diploma in Interior Designing & Decoration)', 'Fergusson College Campus, Pune'],
    experience: '13+ Years',
    keyMilestone: 'Lead consultant for persistent software workspaces & showrooms',
    detailedExperience: [
      'Designed over 50,000 sq ft of high-end corporate office spaces for leading IT multinationals',
      'Specialized clinic layouts improving doctor-patient traffic ergonomics and clinical sterilization workflows',
      'Executed luxury visual merchandising showrooms, high-end bungalows, and modular home setups',
      'Integrated detailing across furniture design, partition placements, and false ceiling HVAC diffuser routing'
    ],
    bio: 'Leads the creative division specializing in high-end workspace interiors, executive suites, and medical clinic workflows. Principal consultant to leading IT multi-nationals like Persistent Systems Ltd and corporate showrooms across Pune.'
  },
  {
    id: 'mahesh-malval',
    name: 'Arc. Mahesh Malval',
    role: 'Associate Architect & Eco-Consultant',
    qualifications: ['B. Arch (Pune University)', 'Green Building Consultant'],
    experience: '15+ Years',
    keyMilestone: 'Pioneer of Carbon-Efficient Space layouts in Chakan region',
    detailedExperience: [
      'Eco-friendly landscape layouts incorporating passive solar orientation and natural light optimization',
      'Comprehensive Project Management Consultancy (PMC) for green factories from excavation to hand-over',
      'Delivered energy-efficient spatial designs for corporate giants including Godrej, Axis Bank, and Guhring India',
      'Technical drawing clearance under strict environmental preservation bylaws and IGBC codes'
    ],
    bio: 'Prominent architect championing eco-friendly, carbon-efficient projects in Pune. Expert in sustainable architectural space planning, campus layouts, and compliance, having delivered projects for massive clients like Godrej, Axis Bank, and Guhring India.'
  }
];

export const companyServices: Service[] = [
  {
    id: 'electrical',
    icon: 'Zap',
    title: 'Electrical Engineering & Contracting',
    shortDesc: 'End-to-end electrical grid designs, substation set-ups, and commercial layout wiring based on IS Codes and MSEB rules.',
    details: [
      {
        title: 'HT & LT Grid Installations',
        basis: 'Based on relevant I.S. Codes & State Electricity Board rules',
        items: [
          'High Tension & Low Tension line laying & heavy-duty industrial cabling',
          'Transformer Installation, testing, sub-station layouts & commissioning',
          'Heavy industrial wiring, commercial layouts, and power rating analysis',
          'All types of fresh HT & LT connection allocations, statutory load documentation & maintenance contracting'
        ]
      },
      {
        title: 'Detailed Layout & Protective Design',
        basis: 'CAD Drawings & Lighting Protection Code standards',
        items: [
          'Detailed electrical fixture layout, TV, audio, and secure intercom system schematics',
          'Secure conduit path layouts & structural partition detailing for cables',
          'Meter room optimization details and cable routing matrices',
          'Protective Earthing grid layouts and advanced chemical grounding schemes',
          'Structural lightning protection computations & structural down-conductor mesh designs'
        ]
      },
      {
        title: 'Backup & Project Coordination',
        basis: 'Energy Audits & BOQ formulations',
        items: [
          'Calculations for high-capacity D.G. Set requirements & custom control schemes',
          'Preparing complete Bill of Quantities (BOQ), comprehensive technical assessments & project tenders',
          'On-site inspection matrices to rigorously evaluate execution quality and design compliance'
        ]
      }
    ]
  },
  {
    id: 'hvac',
    icon: 'Wind',
    title: 'HVAC Venting & Cooling Systems',
    shortDesc: 'Pioneering space ventilation, thermal heat load calculation, and VRV cooling system project consulting.',
    details: [
      {
        title: 'Thermal Engineering & Sizing',
        basis: 'Based on ASHRAE & ISHRAE guidelines',
        items: [
          'Scientifically rigorous structural Heat Load calculations reflecting high occupancy and machinery loads',
          'Detailed system drafting, air-flow velocity sketches, duct-work detailing & load estimations',
          'Tailored sizing of VRF/VRV units, chillers, and precision cooling units'
        ]
      },
      {
        title: 'Implementation & Tenders',
        basis: 'Standard Engineering Practices',
        items: [
          'Preparing exhaustive Bill of Quantities (BOQ) with customized component breakdowns',
          'Tender filing, bidder scrutiny matrices, and technical developer appointment support',
          'Inspections of active pipeline routing, insulation, dampers, and pressure testing cycles'
        ]
      }
    ]
  },
  {
    id: 'firefighting',
    icon: 'Shield',
    title: 'Firefighting, CCTV & Security Systems',
    shortDesc: 'Conforming strictly to the National Building Code of India, integrating automated fire containment and surveillance.',
    details: [
      {
        title: 'Structural Fire Combat Systems',
        basis: 'National Building Code of India & Tariff Advisory Committee (TAC) guidelines',
        items: [
          'Heavy internal & external fire hydrant pipeline networks',
          'Advanced wet riser cum downcomer automatic pipeline layouts',
          'Sizing computations for Fire Storage Tanks & complex fire pump engine sets',
          'Automated overhead high-pressure sprinkler lines & chemical spray suppressors'
        ]
      },
      {
        title: 'Low Voltage & Building Securitech',
        basis: 'Certified Security Engineering Standard',
        items: [
          'High-precision electronic keyless Access Control & Biometric terminals',
          'Automated Fire Alarm panels, thermal/smoke trigger lines, and multi-zone notifications',
          'CCTV network layout mapping with wide-angle dynamic range cameras'
        ]
      }
    ]
  },
  {
    id: 'plumbing',
    icon: 'Droplet',
    title: 'Plumbing & Environmental Infrastructure',
    shortDesc: 'Comprehensive hydraulics, public drainage, water harvesting architectures, and treatment plant systems.',
    details: [
      {
        title: 'Hydraulic Sanitary Systems',
        basis: 'National Building Code (NBC) & Local Municipal Byelaws',
        items: [
          'Detailed interior kitchen & bathroom sanitary piping layouts',
          'Robust soil, waste ventilation, and secondary vent pipe pathways',
          'Water supply distribution networks & multi-manifold hot/cold lines'
        ]
      },
      {
        title: 'Eco-Hydrology & Treatment Plants',
        basis: 'State Environmental Protection guidelines',
        items: [
          'Structured Rainwater Water Harvesting (RWH) recharge pits & bypass filtrators',
          'Industrial and basement emergency flood pump designs & drainage pits',
          'Storm-water distribution pipelines & external open-drain channels',
          'Erecting central Sewage Treatment Plants (STP) & Effluent/Water Treatment Plants (WTP) for chemical factories'
        ]
      }
    ]
  },
  {
    id: 'architecture',
    icon: 'Grid',
    title: 'Architecture, Interiors & Landscaping',
    shortDesc: 'Melding physics and aesthetics to construct eco-conscious commercial edifices, modern offices, and rich natural landscapes.',
    details: [
      {
        title: 'Architectural Craft & Sustainability',
        basis: 'Council of Architecture (COA) standards',
        items: [
          'High-contrast, functional space planning for software parks and industries',
          'Bespoke eco-friendly designs incorporating maximum natural day-lighting and passive ventilation',
          'Comprehensive project management consultancy (PMC) from excavation to finish'
        ]
      },
      {
        title: 'Corporate Workspace Interiors',
        basis: 'Acoustic & Ergonomic workspace standards',
        items: [
          'Bespoke corporate workstation setups, ergonomic boardrooms, and reception counters',
          'Turnkey medical and dental outpatient configurations emphasizing hygiene, air filters, and visual warmth',
          'Specialized space integration for high-traffic environments (e.g. schools, bank branches)'
        ]
      },
      {
        title: 'Landscape Architecture',
        basis: 'Urban Forestry guidelines',
        items: [
          'Large-scale environmental landscaping (e.g., active 1.6-acre natural park designs for commercial spaces)',
          'Hardscaping, water features, ambient pathways, and regional high-retention foliage planning'
        ]
      }
    ]
  }
];

export const companyClients: Client[] = [
  // Industrial
  { name: 'Guhring India Ltd.', location: 'Pirangut, Pune', category: 'Industrial', scope: 'Factory Renovation & Complete Workspace Interiors (6,000 Sq.Ft.)' },
  { name: 'Tox Pressotechnic Pvt. Ltd.', location: 'Pirangut, Pune', category: 'Industrial', scope: 'Corporate Office interior design, executive chambers, and customized modular kitchen set-ups' },
  { name: 'T.I. Metals', location: 'Shikrapur, Pune', category: 'Industrial', scope: 'Civil modifications, structural column reinforcing, and heavy mechanical platforms' },
  { name: 'Tata Blue Scope', location: 'Hinjewadi, Pune', category: 'Industrial', scope: 'High-tension electrical distribution panel supplies & industrial wiring' },
  { name: 'Sandvik Asia', location: 'Pimpri-Chinchwad, Pune', category: 'Industrial', scope: 'Consulting for heavy-duty HVAC venting, heat load parameters, and fire safety systems' },
  { name: 'Bharat Forge Ltd.', location: 'Mundhwa, Pune', category: 'Industrial', scope: 'Long-term Annual Maintenance Contract (AMC) representing electrical and hydraulic lines' },
  { name: 'Dandekar Industries', location: 'MIDC Bhosari, Pune', category: 'Industrial', scope: 'HT electrical connection setup, heavy machinery wiring, and industrial power factor correction' },

  // Corporate & Software
  { name: 'Persistent Systems Ltd.', location: 'Senapati Bapat Road, Pune', category: 'Corporate & Software', scope: 'Corporate space modeling, VRF/VRV central AC integration, and workspace cabling infrastructure' },
  { name: 'SAVA InfoTech Pvt. Ltd.', location: 'Pune', category: 'Corporate & Software', scope: 'Turnkey interior architecture, server rooms, glass-partition acoustic cabins' },
  { name: 'Sas Global Services Pvt. Ltd.', location: 'G Plaza, Yerwada, Pune', category: 'Corporate & Software', scope: 'Electrical AMC management, comprehensive CCTV network security, and backup DG capacity alignment' },
  { name: 'Affinity Express India Pvt. Ltd.', location: 'Hinjewadi IT Park, Pune', category: 'Corporate & Software', scope: 'Commercial scale wiring schemes, data line structures, and office layout design' },
  { name: 'Imagination Technologies Pvt. Ltd.', location: 'Range Hills Road, Pune', category: 'Corporate & Software', scope: 'Design-execution, fiber-optic distribution systems, and air-conditioning grid layout' },
  { name: 'Veritas Software', location: 'Aundh IT Park, Pune', category: 'Corporate & Software', scope: 'Low-voltage alarm layout consulting, fire safety, and server-room networking setups' },
  { name: 'Taco Faurecia Design Center', location: 'Near Hotel Le Meridien, Pune', category: 'Corporate & Software', scope: 'Structured networking layout, multi-port workstations, and safety systems consulting' },

  // Banks
  { name: 'Development Credit Bank (DCB)', location: 'Pandharpur, Pune', category: 'Banks', scope: 'Architecture, structural multi-level civil layout, central VRV air conditioning, and full interiors' },
  { name: 'Rupee Co-operative Bank Ltd.', location: '14 Branches across Maharashtra', category: 'Banks', scope: 'Firefighting lines, electronic alarm setups, security grilles, and branch electrical compliance review' },
  { name: 'Janata Sahakari Bank', location: 'Pune-Kolhapur', category: 'Banks', scope: 'Branch security network cabling, thermal fire alarms, and local UPS backup infrastructure' },
  { name: 'Saraswat Bank', location: 'Pune & Chakan Branches', category: 'Banks', scope: 'Air-conditioning layouts, acoustic ceiling patterns, and branch interior styling' },
  { name: 'Janaseva Bank', location: '4 Branches in Pune', category: 'Banks', scope: 'Electrical distribution panel alignments, CCTV networks, and cash vault security integrations' },
  { name: 'Vidya Sahakari Bank', location: '2 Branches in Pune', category: 'Banks', scope: 'Turnkey branch wiring, counter woodwork design, and secure network infrastructure' },
  { name: 'Axis Bank', location: 'Pirangut, Pune', category: 'Banks', scope: 'Workspace lighting consultancy, detailed earthing layouts, and emergency backup sets' },
  { name: 'ICICI Bank', location: 'Apte Road, Pune', category: 'Banks', scope: 'Cabling networks, fiber terminal loops, and localized HVAC cooling zones' },

  // Medical
  { name: 'Dental Clinic for Dr. Pallavi Kalaskar', location: 'Deccan Gymkhana, Pune', category: 'Medical', scope: 'Pristine ergonomic dental workstation flow, hidden compressor routing, and visual patient comfort details' },
  { name: 'Children\'s Clinic for Dr. Gojumgunde', location: 'Latur', category: 'Medical', scope: 'Architecture & exterior structural design of medical building, welcoming interior layout, child-friendly play zones' },
  { name: 'Ruby Hall Hospital', location: 'Pune', category: 'Medical', scope: 'Consultancy for safe medical gas pipes, ventilation routing, and high-tension backup lines' },
  { name: 'Aditya Birla Hospital', location: 'Chinchwad, Pune', category: 'Medical', scope: 'Network routing consulting, critical zone backup power, and firefighting lines compliance' },

  // Retail & Showrooms
  { name: 'Honda Showroom & Residential Complex', location: 'Baramati, Pune', category: 'Commercial & Showrooms', scope: 'Massive double-height automobile showroom structure, ambient structural facade, and multi-unit apartments (20,000 Sq.Ft.)' },
  { name: 'Mahindra Distributor Showroom', location: 'Pandharpur', category: 'Commercial & Showrooms', scope: 'Structural layout planning, high-lux display lighting layouts, and central ducting design' },
  { name: 'Gold Mart Jewelry Showroom', location: 'Pune', category: 'Commercial & Showrooms', scope: 'High-security cash vault interior structural works, jewelry display fixtures, and custom focused LED styling' },
  { name: 'Waman Hari Pethe (Jewelers)', location: 'Pune', category: 'Commercial & Showrooms', scope: 'Intruder alarm networks, thermal smoke sensors, and hidden safety structures' },

  // Residential
  { name: 'Personal Bungalow, Mr. Tapadia', location: 'Dhayari, Pune', category: 'Residential', scope: '1.6-Acre ambient natural garden design, water fountain loops, and localized stone layout' },
  { name: 'Personal Bungalow, Mr. Joshi', location: 'Vedvihar, Pune', category: 'Residential', scope: 'Modern home interiors, warm drop ceilings, modular cabinets, and hidden safety electrical conduits' },
  { name: 'Personal Bungalow, Mr. Punshi', location: 'Pune', category: 'Residential', scope: 'Bespoke apartment interiors, accent walls, designer light fixtures, and modern modular kitchen' }
];

export const companyProjects: Project[] = [
  {
    id: 'project-guhring',
    title: 'Guhring Factory Renovation & Interiors',
    client: 'Guhring India Ltd.',
    location: 'Pirangut, Pune',
    scale: '6,000 Sq.Ft. Factory Floor & Office',
    type: 'Completed',
    category: 'Factory',
    image: imgGuhring
  },
  {
    id: 'project-honda',
    title: 'Honda Showroom & Residential Complex',
    client: 'Rohit Shaha',
    location: 'Baramati, Pune',
    scale: '20,000 Sq.Ft. Dual-Use Layout',
    type: 'Completed',
    category: 'Showroom',
    image: imgHonda
  },
  {
    id: 'project-dcb',
    title: 'Development Credit Bank (DCB) Branch Construction',
    client: 'Development Credit Bank',
    location: 'Pandharpur, Pune',
    scale: 'Multi-floor bank structure',
    type: 'Completed',
    category: 'Civil',
    image: imgBankBranch
  },
  {
    id: 'project-children-clinic',
    title: 'Dr. Gojumgunde Multi-Specialty Children\'s Clinic',
    client: 'Dr. Gojumgunde',
    location: 'Latur, Maharashtra',
    scale: 'Standard Pediatric Building',
    type: 'Completed',
    category: 'Clinic',
    image: imgChildrenClinic
  },
  {
    id: 'project-tapadia-landscaping',
    title: 'Mr. Tapadia 1.6-Acre Estate Landscaping',
    client: 'Mr. Tapadia',
    location: 'Vijaynagar, Dhayari, Pune',
    scale: '1.6 Acres (approx. 70,000 Sq.Ft.)',
    type: 'At Hand',
    category: 'Bungalow',
    image: imgTapadia
  },
  {
    id: 'project-joshi-interiors',
    title: 'Mr. Joshi Modern Residence Interiors',
    client: 'Mr. Joshi',
    location: 'Vedvihar, Pune',
    scale: 'Premium Multi-BHK Apartment',
    type: 'At Hand',
    category: 'Interiors',
    image: imgPersistent
  },
  {
    id: 'project-dental-clinic',
    title: 'Dr. Pallavi Kalaskar Dental Outpatient Facility',
    client: 'Dr. Pallavi Kalaskar',
    location: 'Deccan Gymkhana, Pune',
    scale: 'Premium Medical Suite',
    type: 'Completed',
    category: 'Clinic',
    image: imgDentalClinic
  },
  {
    id: 'project-green-fingers',
    title: 'Green Fingers International Academy Campus Design',
    client: 'St. Andrews / Green Fingers',
    location: 'Vashi, Navi Mumbai',
    scale: 'State-of-the-art school block',
    type: 'Completed',
    category: 'Institutional',
    image: imgSchoolCampus
  },
  {
    id: 'project-tox-kitchen',
    title: 'Tox Pressotechnic Kitchen & Cafe Interiors',
    client: 'Tox Pressotechnic (I) Pvt. Ltd.',
    location: 'Pirangut, Pune',
    scale: 'Executive Canteen Area',
    type: 'At Hand',
    category: 'Interiors',
    image: imgCafeInteriors
  },
  {
    id: 'project-bhandari-bungalow',
    title: 'Mr. Mahavir Bhandari Premium Bungalow',
    client: 'Mr. Mahavir Bhandari',
    location: 'Maharshinagar, Pune',
    scale: 'Sizable private residence',
    type: 'At Hand',
    category: 'Bungalow',
    image: imgLuxuryBungalow
  }
];
