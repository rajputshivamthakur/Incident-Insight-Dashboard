import { create } from "zustand";
import { Incident } from "@/types/incident";

const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description:
      "Algorithm consistently favored certain demographics in job recommendations, leading to potential discrimination issues.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description:
      "LLM provided incorrect safety procedure information during emergency response simulation.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description:
      "Chatbot inadvertently exposed non-sensitive user metadata during conversation.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
];

interface IncidentStore {
  incidents: Incident[];
  addIncident: (incident: Omit<Incident, "id" | "reported_at">) => void;
  deleteIncident: (id: number) => void;
}

export const useIncidentStore = create<IncidentStore>((set) => ({
  incidents: mockIncidents,
  addIncident: (incident) => {
    set((state) => ({
      incidents: [
        ...state.incidents,
        {
          ...incident,
          id: Math.max(0, ...state.incidents.map((i) => i.id)) + 1,
          reported_at: new Date().toISOString(),
        },
      ],
    }));
  },
  deleteIncident: (id) => {
    set((state) => ({
      incidents: state.incidents.filter((incident) => incident.id !== id),
    }));
  },
}));
