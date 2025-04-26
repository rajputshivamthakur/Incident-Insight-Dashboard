import { useState } from "react";
import { IncidentDashboard } from "@/components/IncidentDashboard";
import { IncidentForm } from "@/components/IncidentForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Safety Incident Dashboard
          </h1>
          <p className="text-gray-600">Track and manage AI safety incidents</p>
        </header>

        <div className="mb-8">
          <Button
            onClick={() => setShowForm(!showForm)}
            className="w-full sm:w-auto"
          >
            <Plus className="mr-2 h-4 w-4" />
            {showForm ? "Hide Form" : "Report New Incident"}
          </Button>
        </div>

        {showForm && (
          <div className="mb-8">
            <IncidentForm onClose={() => setShowForm(false)} />
          </div>
        )}

        <IncidentDashboard />
      </div>
    </div>
  );
};

export default Index;
