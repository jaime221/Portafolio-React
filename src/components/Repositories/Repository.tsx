import React from 'react';
import '../css/Repository.css'


function Repositories() {
    const repositories = [
        {
            id: 1,
            name: "Calculadora",
            description: "Calculadora usando Vue.js y TypeScript",
            url: "https://github.com/jaime221/Calculadora-Vue",
        },
        {
            name: "Publicacion de Productos",
            description: "Publicacion de Productos usando C# y estructura MVC5",
            url: "https://github.com/jaime221/Publicaciones-Productos",

        },
        {
            name: "Validacion de Correo",
            description: "Validacion de correo usando TypeScript",
            url: "https://github.com/jaime221/Validacion-Correo-TypeScript",

        },
        {
            name: "Crud Api",
            description: "Crud Api usando TypeScript y MySql",
            url: "https://github.com/jaime221/Crud-Api-TypeScript",

        },
        {
            name: "Crud Api NestJs",
            description: "Crud Api usando Nest.Js y MySql",
            url: "https://github.com/jaime221/Crud-Api-NestJs",

        },
        {
            name: "Portafolio",
            description: "Portafolio usando Vue.js",
            url: "https://github.com/jaime221/Portafolio-Vue",

        },
    ];

    return (



        <div id="Repository" className="background">
            <br></br>
            <div className="center-text">
                <h1>Mis Proyectos</h1>
            </div>
            <br></br>
            <div className="card-container">
                {repositories.map((repo) => (
                    <div key={repo.id} className="card">
                        <div className="card-header">
                            <img
                                src="https://i.pinimg.com/564x/45/23/04/452304c912d8c9fe851131894d1a32ee.jpg"
                                alt="Avatar"
                                className="avatar"
                            />
                            <h3 className="repo-name">{repo.name}</h3>
                        </div>
                        <p className="repo-description">{repo.description}</p>
                        <br />
                        <div className="card-footer">
                            <a
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="repo-link"
                            >
                            
                                Ver repositorio
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Repositories;
