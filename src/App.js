import React from "react";
import './App.css';
import SortingVisualiser from "./Sorting Visualiser/SortingVisualiser";
import Footer from "./Sorting Visualiser/Components/Footer/Footer"; // Import footer

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <SortingVisualiser />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
