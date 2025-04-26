import { useState } from "react";
import { useIncidentStore } from "@/stores/incidents";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Severity } from "@/types/incident";

export const IncidentForm = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast();
  const addIncident = useIncidentStore((state) => state.addIncident);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<Severity>("Medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    addIncident({
      title,
      description,
      severity,
    });

    toast({
      title: "Success",
      description: "Incident reported successfully",
    });

    setTitle("");
    setDescription("");
    setSeverity("Medium");
    onClose();
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Report New Incident</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter incident title"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the incident"
            className="min-h-[100px]"
          />
        </div>

        <div>
          <label
            htmlFor="severity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Severity
          </label>
          <Select
            value={severity}
            onValueChange={(value) => setSeverity(value as Severity)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Submit Report</Button>
        </div>
      </form>
    </Card>
  );
};
