import React from "react";
import { cn } from "../../utils/cn";

export function Card({ children, className = "" }) {
  return (
    <div className={cn("rounded-2xl border border-gray-200 bg-white shadow-sm", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={cn("border-b border-gray-100 px-5 py-4", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={cn("text-lg font-semibold text-gray-900", className)}>{children}</h3>;
}

export function CardContent({ children, className = "" }) {
  return <div className={cn("px-5 py-4", className)}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={cn("border-t border-gray-100 px-5 py-4", className)}>
      {children}
    </div>
  );
}