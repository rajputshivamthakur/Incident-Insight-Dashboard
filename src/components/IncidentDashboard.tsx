import { useState } from "react";
import { Incident, Severity } from "@/types/incident";
import { useIncidentStore } from "@/stores/incidents";
import { IncidentCard } from "./IncidentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const IncidentDashboard = () => {
  const incidents = useIncidentStore((state) => state.incidents);
  const [severity, setSeverity] = useState<Severity | "All">("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const filteredIncidents = incidents
    .filter((incident) => severity === "All" || incident.severity === severity)
    .sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-48">
          <Select
            value={severity}
            onValueChange={(value) => setSeverity(value as Severity | "All")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Severities</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-48">
          <Select
            value={sortOrder}
            onValueChange={(value) =>
              setSortOrder(value as "newest" | "oldest")
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Sort by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredIncidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
};
