import { useState, useEffect } from "react";
import "./App.css";

const ContadordeSegundos = ({ seconds }) => {
  const formatoNumero = (num) => num.toString().padStart(6, "0");

  return (
    <div className="container">
      <div className="reloj">
        <i id="reloj" className="fa-regular fa-2x fa-clock"></i>
      </div>
      {[...formatoNumero(seconds)].map((digit, index) => (
        <div key={index} className="digit">
          {digit}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  return <ContadordeSegundos seconds={seconds} />;
};

export default App;
