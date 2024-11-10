export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  projects: Project[];
}

export interface Project {
  id: string;
  customerId: string;
  name: string;
  status: 'draft' | 'in_progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface MaterialPrice {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  lastUpdated: string;
  supplier: string;
}