export interface Member {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  experience: string;
  detailedExperience?: string[];
  keyMilestone?: string;
  bio: string;
  linkedin?: string;
  github?: string;
}

export interface ServiceDetail {
  title: string;
  basis: string;
  items: string[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  details: ServiceDetail[];
}

export interface Client {
  name: string;
  location: string;
  category: 'Industrial' | 'Corporate & Software' | 'Banks' | 'Medical' | 'Commercial & Showrooms' | 'Residential' | 'Other';
  scope?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  scale?: string;
  type: 'Completed' | 'At Hand';
  category: 'Factory' | 'Interiors' | 'Showroom' | 'Bungalow' | 'Clinic' | 'Institutional' | 'Civil';
  image?: string;
}
