export interface Patient {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  owner: Owner;
  medicalHistory: MedicalRecord[];
  vaccinations: Vaccination[];
  bills: Bill[];
}

export interface Owner {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface MedicalRecord {
  id: string;
  date: string;
  symptoms: string[];
  diagnosis: string;
  treatment: string;
  notes: string;
  prescriptions: Prescription[];
  veterinarianId: string;
}

export interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  duration: string;
  notes: string;
}

export interface Vaccination {
  id: string;
  name: string;
  date: string;
  nextDueDate: string;
  administrator: string;
  batchNumber: string;
}

export interface Bill {
  id: string;
  date: string;
  dueDate: string;
  items: BillItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'pending' | 'paid' | 'overdue';
  paymentMethod?: string;
  paymentDate?: string;
}

export interface BillItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  category: 'consultation' | 'procedure' | 'medication' | 'vaccination' | 'other';
}