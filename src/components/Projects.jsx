import './Projects.css';

const Projects = () => {
  const projects = [
        { 
            id: 1, 
            title: 'Admin Dashboard', 
            description: 'Desarrollo de un tablero con mis proyectos de aprendizaje',
            link: 'https://dashboard-ten-opal.vercel.app/'
        },
        { 
            id: 2, 
            title: 'Memory Card', 
            description: 'Aplicamos los Hooks de React en un juego de memoria',
            link: 'https://memory-card-nine-eta.vercel.app/'
        },
        { 
            id: 3, 
            title: 'Batalla Naval', 
            description: 'Desarrollamos el juego de batalla naval en una version simple',
            link: 'https://joelcabrera-irnma.github.io/Battleship_project/'
        },
        { 
            id: 4, 
            title: 'Map Argentina', 
            description: 'El mapa de la Argentina con sus respectiva informacion de flora y fauna',
            link: 'https://joelcabrera-irnma.github.io/Map-interactive-argentina-flora-fauna/'
        },
    ];

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <a 
                        key={project.id} className="project-card" 
                        href={project.link} target="_blank" rel="noopener noreferrer"
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;