import { useState } from "react";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Incident } from "@/types/incident";
import { useIncidentStore } from "@/stores/incidents";
import { useToast } from "@/hooks/use-toast";

const severityColors = {
  Low: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  High: "bg-red-100 text-red-800",
};

export const IncidentCard = ({ incident }: { incident: Incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const deleteIncident = useIncidentStore((state) => state.deleteIncident);
  const { toast } = useToast();

  const formattedDate = new Date(incident.reported_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const handleDelete = () => {
    deleteIncident(incident.id);
    toast({
      title: "Incident Deleted",
      description: "The incident has been successfully removed.",
    });
  };

  return (
    <Card className="p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{incident.title}</h3>
          <div className="flex flex-wrap gap-2 items-center text-sm text-gray-600">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                severityColors[incident.severity]
              }`}
            >
              {incident.severity}
            </span>
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="flex gap-2 self-start sm:self-center">
          <Button variant="ghost" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Hide Details
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                View Details
              </>
            )}
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={handleDelete}
            title="Delete incident"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 pt-4 border-t text-gray-600">
          {incident.description}
        </div>
      )}
    </Card>
  );
};
