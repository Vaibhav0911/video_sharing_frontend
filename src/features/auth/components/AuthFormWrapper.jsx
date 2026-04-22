import React from "react";
import { Card, CardContent } from "../../../components/ui";

function AuthFormWrapper({ children }) {
  return (
    <Card className="border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
      <CardContent className="p-6 sm:p-8">{children}</CardContent>
    </Card>
  );
}

export default AuthFormWrapper;