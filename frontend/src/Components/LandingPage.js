import React from "react";

const LandingPage = () => {
  return (
    <div id="/"
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }} // Corrected path
    >
      <h1 className="text-white text-5xl font-bold bg-black/50 px-8 py-4 rounded-lg shadow-lg">
        Debug Divas
      </h1>
    </div>
  );
};

export default LandingPage;
