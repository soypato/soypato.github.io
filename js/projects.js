const proyectos = [
    {
        "image": {
            "src": "img/FitHub-logo.webp",
            "alt": "Logo de FitHub"
        },
        "name": "FitHub Gimnasios",
        "description": "Sistema de Gimnasios en CLI con eficiencia de datos. Proyecto Final UTN - Lab. 2. Hecho en C.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/fithub"
            },
            {
                "name": "Documentación",
                "link": "https://github.com/soypato/FitHub/tree/main/aa%20docs%20project"
            }
        ]
    },
    {
        "image": {
            "src": "/img/stay.webp",
            "alt": "Logo de Stay Track Gestiones"
        },
        "name": "StayTrack Gestiones",
        "description": "Sistema de Hotel basado en consola, CRUD. Proyecto Final UTN - Lab. 1. Hecho en C.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/Stay-Track-Gestiones"
            },
            {
                "name": "Documentación",
                "link": "https://github.com/soypato/Stay-Track-Gestiones/tree/main/OFFCODE%20ASSETS"
            }
        ]
    },
    {
        "image": {
            "src": "/img/duckTime.webp",
            "alt": "Página principal de DuckTime"
        },
        "name": "DuckTime",
        "description": "Una librería escrita en C para el manejo básico de fechas con sus respectivos comprobantes.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/ducktime"
            },
            {
                "name": "Instrucciones",
                "link": "https://github.com/soypato/DuckTime/blob/main/readme.md"
            }
        ]
    },
    {
        "image": {
            "src": "/img/countrycodefinder.webp",
            "alt": "Página principal de CountryCodeFinder"
        },
        "name": "CountryCodeFinder",
        "description": "Buscador de países en base a su código de área. Hecho en Flask y SQL.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/CountryCodeFinder"
            },
            {
                "name": "Documentación",
                "link": "https://github.com/soypato/CountryCodeFinder/blob/main/readme.md"
            }
        ]
    },
    {
        "image": {
            "src": "img/EnExterior-banner.webp",
            "alt": "Página principal de EnExterior"
        },
        "name": "EnExterior",
        "description": "Valor de una compra en monedas extranjeras. Hecho con JavaScript y API de DolarSI.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/enexterior"
            },
            {
                "name": "Ver Demo",
                "link": "soypato.github.io/enexterior"
            }
        ]
    },
    {
        "image": {
            "src": "img/portfolio.webp",
            "alt": "Vista previa del portfolio"
        },
        "name": "Portfolio de soypato",
        "description": "¡Este portfolio! Realizado con HTML, CSS, JS y Bootstrap. El lugar donde viven mis proyectos.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/soypato.github.io/"
            }
        ]
    },
    {
        "image": {
            "src": "img/clon-lt.webp",
            "alt": "Captura del clon de Linktree"
        },
        "name": "Clon de Linktree",
        "description": "Clon de recopilador de redes para social media. Hecho con HTML y CSS.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/redes"
            },
            {
                "name": "Ver Demo",
                "link": "bit.ly/soypato"
            }
        ]
    }
];

function generarGaleria(proyectos) {
    const galeriaContainer = document.createElement('div');
    galeriaContainer.classList.add('gridGallery');

    proyectos.forEach(proyecto => {
        const middleGrid = document.createElement('div');
        middleGrid.classList.add('middleGrid');

        const image = document.createElement('img');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('src', proyecto.image.src);
        image.setAttribute('alt', proyecto.image.alt);

        const projectName = document.createElement('h3');
        projectName.textContent = proyecto.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = proyecto.description;

        const middleGridButtons = document.createElement('div');
        middleGridButtons.classList.add('middleGridButtons');

        for(let i = 0; i < proyecto.buttons.length; i++){
            const button = document.createElement('a');
            button.classList.add('fullWidthButton');
            button.setAttribute('href', proyecto.buttons[i].link);
            button.setAttribute('target', '_blank');
            button.innerHTML = `<span>${proyecto.buttons[i].name}</span>`;
            middleGridButtons.appendChild(button);
        }

        middleGrid.classList.add('middleGrid');
        middleGrid.appendChild(image);
        middleGrid.appendChild(projectName);
        middleGrid.appendChild(projectDescription);
        middleGrid.appendChild(middleGridButtons);


        galeriaContainer.appendChild(middleGrid);
    });

    const masProyectosLink = document.createElement('a');
    masProyectosLink.classList.add('fullWidthButton');
    masProyectosLink.setAttribute('href', 'https://github.com/soypato?tab=repositories');
    masProyectosLink.innerHTML = `<span>Más proyectos</span>`;


    return galeriaContainer;
}

const galeria = generarGaleria(proyectos);
const gridGalleryContainer = document.querySelector('.gridGallery');
gridGalleryContainer.appendChild(galeria);