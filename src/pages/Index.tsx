
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("Redirecting to case studies");
    navigate("/case-studies");
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to case studies...</p>
    </div>
  );
};

export default Index;
