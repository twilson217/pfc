import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Customer, Project, MaterialPrice } from '../types';

interface Store {
  customers: Customer[];
  projects: Project[];
  materials: MaterialPrice[];
  darkMode: boolean;
  addCustomer: (customer: Customer) => void;
  addProject: (project: Project) => void;
  updateMaterialPrice: (material: MaterialPrice) => void;
  toggleDarkMode: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      customers: [],
      projects: [],
      materials: [],
      darkMode: false,
      addCustomer: (customer) =>
        set((state) => ({ customers: [...state.customers, customer] })),
      addProject: (project) =>
        set((state) => ({ projects: [...state.projects, project] })),
      updateMaterialPrice: (material) =>
        set((state) => ({
          materials: state.materials.map((m) =>
            m.id === material.id ? material : m
          ),
        })),
      toggleDarkMode: () =>
        set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'post-frame-cloud-storage',
    }
  )
);