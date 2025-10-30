import './Grid.css'


export default function Grid() {
  const skills = [
    { src: "/assets/qgis.webp", alt: "QGIS" },
    { src: "/assets/excel.png", alt: "Excel" },
    { src: "/assets/mysql.png", alt: "MySQL" },
    { src: "/assets/gee.png", alt: "GEE" },
    { src: "/assets/react.svg", alt: "React" },
    { src: "/assets/icons8-autocad-50.png", alt: "AutoCAD" },
    { src: "/assets/icons8-git-50.png", alt: "Git" },
    { src: "/assets/icons8-github-50.png", alt: "GitHub" },
    { src: "/assets/icons8-linux-50.png", alt: "Linux" },
    { src: "/assets/icons8-ngp-50.png", alt: "NGP" },
    { src: "/assets/icons8-nodo-js-50.png", alt: "Node.js" },
    { src: "/assets/icons8-python-50.png", alt: "Python" },
    { src: "/assets/icons8-rápidamente-50.png", alt: "Swift" },
    { src: "/assets/icons8-terminal-50.png", alt: "Terminal" },
    { src: "/assets/icons8-visual-studio-code-2019-50.png", alt: "VS Code" },
    { src: "/assets/icons8-wordpress-50.png", alt: "WordPress" },
    { src: "/assets/rstudio_94807.png", alt: "RStudio" },
    { src: "/assets/icons8-power-bi-2021-48.png", alt: "Power BI" },
  ];

  return (
    <section>
      <h2 className="skill-title">Skills Tecnologico</h2>
      <section className="conteiner-skills">
        {skills.map((skill, index) => (
          <div key={index}>
            <img 
              className="icon" 
              src={skill.src} 
              alt={skill.alt}
              style={{ 
                animationDelay: `${index * 0.05}s` 
              }}
            />
          </div>
        ))}
      </section>
    </section>
  );
}