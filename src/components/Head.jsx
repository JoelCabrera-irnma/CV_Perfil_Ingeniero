import './Head.css';
import { useEffect, useState } from 'react';


export default function Head() {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    const timer =  setTimeout(() => {
      setIsAnimated(true);
    }, 2000
    )
   
    return () => clearTimeout(timer);



  }, []);
  return (
    <>
      <h1 className="titulo">Ingeniero en Rec. Naturales y Medio Ambiente</h1>
      <p className="descripcion">Especialista en Desarrollo Web y Sistemas de Informacion Geografica</p>
      <img 
        className = {`img-hero ${isAnimated ?'animated' :''}`}
         
        src="/assets/svg/linkedin-svgrepo-com.svg" alt="linkedin" />
    </>
  );
}
