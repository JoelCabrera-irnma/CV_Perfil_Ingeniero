import { useState, useRef } from "react";
import Projects from "./Projects.jsx";
import About from "./About.jsx";

export default function Button() {
    const [activeComponent, setActiveComponent] = useState("about");
    const sectionRef = useRef(null);

    const handleClick = () => {
        setActiveComponent("projects");
        // Esperamos un tick para que el DOM actualice antes de hacer scroll
        setTimeout(() => {
            sectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };
    const renderComponent = () => {
        switch (activeComponent) {
            case "about":
                return <About />;
            case "projects":
                return <Projects />;
            default:
                return null;
        }
    };
    return (
        <main>
            <span className="background">
                <a onClick={handleClick} className="button">
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%" />
                    </svg>
                    Proyectos
                </a>
            </span>
            <section ref={sectionRef} >{renderComponent()}</section>
        </main>

    );
}