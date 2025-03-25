
import React from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, className }) => {
  return (
    <div
      className={cn(
        "glass-card p-8 rounded-xl text-center transition-all duration-500 hover:shadow-elevation reveal-on-scroll",
        className
      )}
    >
      <div className="mb-3">
        <h3 className="text-4xl md:text-5xl font-display font-bold text-gradient">
          {value}
        </h3>
      </div>
      <p className="text-stone-700 text-lg">{label}</p>
    </div>
  );
};

export default MetricCard;
