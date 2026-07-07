import './Projects.css'; 

const Projects = () => {
  const projects = [
        { 
            id: 1, 
            title: 'Analisis de Disturbios Forestales', 
            description: 'Proyecto de tesis realizado con R Studio y QGIS para la deteccion de disturbios y su represantacion visual',
            link: 'https://github.com/JoelCabrera-irnma/analisis_disturbios_forestales'
        },
        { 
            id: 2,
            title: 'Mapa Argentina', 
            description: 'El mapa de la Argentina con sus respectiva informacion de flora y fauna en imagenes',
            link: 'https://joelcabrera-irnma.github.io/Map-interactive-argentina-flora-fauna/' 
        },
        { 
            id: 3, 
            title: 'Minerales_estrategicos', 
            description: 'Analisis de datos de minerales criticos desde el punto de vista global',
            link: 'https://github.com/JoelCabrera-irnma/strategic_minerals'
        },
        { 
            id: 4, 
            title: 'Memory Card', 
            description: 'Aplicamos los Hooks de React en un juego de memoria',
            link: 'https://memory-card-nine-eta.vercel.app/'
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
                        <div>
                            <img src="/public/assets/icons8-github-50.png" alt="github" />
                            <img src="/public/assets/icons8-internet-50.png" alt="web" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;