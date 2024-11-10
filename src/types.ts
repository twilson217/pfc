export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Project {
  id: string;
  customerId: string;
  name: string;
  status: 'draft' | 'in_progress' | 'completed';
  createdAt: string;
}

export interface MaterialPrice {
  id: string;
  name: string;
  price: number;
  unit: string;
  supplier: string;
  lastUpdated: string;
}