import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="w-8 h-8 animate-spin" />
    </div>
  );
}
