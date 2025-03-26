import React from "react";

export function Card({ children, className = "" }) {
  return <div className={`p-4 shadow-md bg-white rounded-lg ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
