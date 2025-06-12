const projects = [
    {
        "image": {
            "src": "img/WonderWay.webp",
            "alt": "Logo de WonderWay",
            "title": "Logo de WonderWay"
        },
        "name": "WonderWay",
        "description": "Organizador de viajes con hoteles, restaurantes y atracciones. Hecho en Angular, json-server y la API de TripAdvisor. Proyecto final de carrera UTN.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/wonderway",
                "title": "Enlace a GitHub"
            },
            {
                "name": "Docs",
                "link": "https://github.com/soypato/WonderWay/blob/main/README.MD",
                "title": "Enlace a GitHub"
            }
        ],
        "tags": ["angular", "javascript", "tripadvisor-api", "frontend", "typescript"]
    },
    {
        "image": {
            "src": "img/PandyTask.webp",
            "alt": "Logo de PandyTask",
            "title": "Logo de PandyTask"
        },
        "name": "PandyTask",
        "description": "Sistema de gestión de tareas y recompensas gamificadas. Proyecto Final UTN - Lab. 3. Hecho en Java.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/pandytask",
                "title": "Enlace a GitHub"
            },
            {
                "name": "Docs",
                "link": "https://github.com/soypato/PandyTask/blob/main/readme.md",
                "title": "Enlace a GitHub"
            }
        ],
        "tags": ["java", "gamification", "mvc", "oop", "desktop"]
    },
    {
        "image": {
            "src": "img/FitHub-logo.webp",
            "alt": "Logo de FitHub",
            "title": "Logo de FitHub"
        },
        "name": "FitHub Gimnasios",
        "description": "Sistema de Gimnasios en CLI con eficiencia de datos. Proyecto Final UTN - Lab. 2. Hecho en C.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/fithub",
                "title": "Enlace a GitHub"
            },
            {
                "name": "Docs",
                "link": "https://github.com/soypato/FitHub/tree/main/aa%20docs%20project",
                "title": "Enlace a GitHub"
            }
        ],
        "tags": ["c", "cli", "data-structures", "efficiency", "desktop"]
    },
    {
        "image": {
            "src": "/img/stay.webp",
            "alt": "Logo de Stay Track Gestiones",
            "title": "Logo de Stay Track Gestiones"
        },
        "name": "StayTrack Gestiones",
        "description": "Sistema de Hotel basado en consola, CRUD. Proyecto Final UTN - Lab. 1. Hecho en C.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/Stay-Track-Gestiones",
                "title": "Enlace a GitHub"
            },
            {
                "name": "Docs",
                "link": "https://github.com/soypato/Stay-Track-Gestiones/tree/main/OFFCODE%20ASSETS",
                "title": "Enlace a GitHub"
            }
        ],
        "tags": ["c", "cli", "data-structures", "desktop"]
    },
    {
        "image": {
            "src": "img/EnExterior-banner.webp",
            "alt": "Página principal de EnExterior",
            "title": "Página principal de EnExterior"
        },
        "name": "EnExterior",
        "description": "Valor de una compra en monedas extranjeras. Hecho con JavaScript y API de DolarSI.",
        "buttons": [
            {
                "name": "Código",
                "link": "https://github.com/soypato/enexterior",
                "title": "Enlace a GitHub"
            },
            {
                "name": "Abrir",
                "link": "https://soypato.github.io/enexterior",
                "title": "Enlace a la demostración en GitHub Pages"
            }
        ],
        "tags": ["javascript", "api", "web", "frontend"]
    }
]

const publicTags = ["java", "javascript", "angular", "c", "python", "flask", "sql", "web", "cli", "desktop", "data-structures"]


// CONFERENCES GALLERY COMPONENT
const conferences = [
    {
        "image": {
            "src": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/d5d21a5d62e16fe6c131_soypato_19830465946_2014052701/thumb/custom-25dc52a3-be32-40df-b5c5-4a0409610145-320x180.png",
            "alt": "Miniatura de clase de código",
            "title": "Miniatura de clase de código"
        },
        "name": "Clase introductoria de programación",
        "description": "Clase introductoria de lógica de programación y sistemas.",
        "buttons": [
            {
                "name": "Ver Clase",
                "link": "https://www.twitch.tv/videos/2078610954",
                "title": "Enlace a Twitch"
            },
            {
                "name": "Temario",
                "link": "https://mdputneduar-my.sharepoint.com/:w:/g/personal/patriciotubio_estudiante_mdp_utn_edu_ar/EX1Uc0SDQj1NjsqlGu75INQBQB8T2_F3f4prz3-IwWYW8A",
                "title": "Enlace al temario"
            }
        ]
    },
    {
        "image": {
            "src": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/22e2c462f423e5102e5e_soypato_33175249687_9860609536/thumb/custom-11723de6-0580-4fb2-a495-62f23b556d3d-320x180.png",
            "alt": "Miniatura: Optimizar Windows",
            "title": "Miniatura: Optimizar Windows"
        },
        "name": "Optimización de Windows",
        "description": "Utilizamos scripts de debloating y personalización en Windows.",
        "buttons": [
            {
                "name": "Ver Clase",
                "link": "https://www.twitch.tv/videos/1712538272",
                "title": "Enlace a Twitch"
            }
        ]
    },
    {
        "image": {
            "src": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/9740dc4adbcdb11b5fe3_soypato_22117433040_1801466352/thumb/custom-7adb0597-9a7e-46cc-9477-88bbb1a7fdeb-320x180.png",
            "alt": "web scraping, hacking, instagram, osintgram, osint, hacking etico, soypato",
            "title": "web scraping, hacking, instagram, osintgram, osint, hacking etico, soypato"
        },
        "name": "Scraping y OSINT ético en Instagram",
        "description": "Clase educativa hacking en Instagram con Osintgram en Linux.",
        "buttons": [
            {
                "name": "Ver Clase",
                "link": "https://www.twitch.tv/videos/1619106308",
                "title": "Enlace a Twitch"
            }
        ]
    },
    {
        "image": {
            "src": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/ad4dc23b3e324e18934c_soypato_58895367835_9739168497/thumb/custom-019d469d-f8f1-42f1-9feb-8761cad03b05-320x180.png",
            "alt": "inteligencia artificial, foto, soypato",
            "title": "inteligencia artificial, foto, soypato"
        },
        "name": "DALL·E: Inteligencia Artificial a fotos",
        "description": "Presentación de DALL·E, repercusiones y vistazo a la IA.",
        "buttons": [
            {
                "name": "Ver Clase",
                "link": "https://www.twitch.tv/videos/1503142718?filter=highlights&sort=time",
                "title": "Enlace a Twitch"
            }
        ]
    },
    {
        "image": {
            "src": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/c4d53b5c00e4486aea5b_soypato_11673922893_9962255400/thumb/custom-d945b667-27ea-4587-b5a9-247d2a74585d-320x180.png",
            "alt": "miniatura de pizarra con explicación, soypato",
            "title": "miniatura de pizarra con explicación, soypato"
        },
        "name": "Guía básica sobre contraseñas",
        "description": "Cómo proteger nuestros datos en internet.",
        "buttons": [
            {
                "name": "Ver Clase",
                "link": "https://www.twitch.tv/videos/1476174774?filter=highlights&sort=time",
                "title": "Enlace a Twitch"
            }
        ]
    }
];

// TECHNOLOGIES GALLERY COMPONENT
const technologies = [
 
    {
        "image": {
            "src": "img/tech-stack/net.webp",
            "alt": "Logo de .NET",
            "title": "Logo de .NET"
        },
        "name": ".NET"
    },
    {
        "image": {
            "src": "img/tech-stack/sql.webp",
            "alt": "Logo de SQL, bases de datos relacionales",
            "title": "Logo de SQL"
        },
        "name": "Bases de datos / SQL"
    },        
    {
        "image": {
            "src": "img/tech-stack/json.webp",
            "alt": "Logo JSON",
            "title": "JSON"
        },
        "name": "JSON"
    },
    {
        "image": {
            "src": "img/tech-stack/java.webp",
            "alt": "Logo de Java/POO",
            "title": "Logo de Java/POO"
        },
        "name": "Java/POO"
    },
        {
        "image": {
            "src": "img/tech-stack/springb.webp",
            "alt": "Spring Boot",
            "title": "Logo de Spring Boot"
        },
        "name": "Spring Boot"
    },  
        {
        "image": {
            "src": "img/tech-stack/angular.webp",
            "alt": "Logo de Angular",
            "title": "Logo de Angular"
        },
        "name": "Angular"
    },
    {
        "image": {
            "src": "img/tech-stack/git-github.webp",
            "alt": "Logo de GIT y GitHub",
            "title": "Logo de GIT y GitHub"
        },
        "name": "GIT & GitHub"
    },
];


function renderButtons(buttons) {
    const container = document.createElement('div');
    container.classList.add('middleGridButtons');
    buttons.forEach(({ name, link, title }) => {
        const btn = document.createElement('a');
        btn.classList.add('fullWidthButton');
        btn.href = link;
        btn.target = '_blank';
        btn.title = title;
        btn.innerHTML = `<span>${name}</span>`;
        container.appendChild(btn);
    });
    return container;
}

function renderImage({ src, alt, title }) {
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = src;
    img.alt = alt;
    img.title = title;
    return img;
}

function renderTags(tags = []) {
    if (!Array.isArray(tags) || tags.length === 0) return null;
    const tagsDiv = document.createElement('div');
    tagsDiv.classList.add('tags');
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.textContent = tag;
        tagsDiv.appendChild(tagEl);
    });
    return tagsDiv;
}

function renderCard({ image, name, description, buttons, tags }) {
    const article = document.createElement('article');
    article.classList.add('middleGrid');
    // Imagen
    article.appendChild(renderImage(image));

    // Título
    const h3 = document.createElement('h3');
    h3.textContent = name;
    article.appendChild(h3);

    // Descripción
    if (description) {
        const p = document.createElement('p');
        p.textContent = description;
        article.appendChild(p);
    }

    // Botones (ahora VAN DESPUÉS del título y descripción)
    if (buttons && Array.isArray(buttons)) {
        article.appendChild(renderButtons(buttons));
    }

    // Tags (si aplica)
    const tagsDiv = renderTags(tags);
    if (tagsDiv) article.appendChild(tagsDiv);


    // Hacer clic en el card redirige al primer link, excepto si el click es en un botón
    if (buttons && Array.isArray(buttons) && buttons.length > 0) {
        article.addEventListener('click', function (e) {
            // Si el click fue en un botón, no hacer nada
            if (e.target.closest('a.fullWidthButton')) return;
            window.open(buttons[0].link, '_blank');
        });
    }

    return article;
}

// En tu función donde insertás los filtros de tags, por ejemplo renderTagFilter:
function renderTagFilter(tags, onTagClick) {
    // ENVOLTORIO para slider y sombras:
    const wrapper = document.createElement('div');
    wrapper.classList.add('tags-filter-wrapper');

    // El carril de tags scrolleables:
    const container = document.createElement('div');
    container.classList.add('tags-filter');
    container.setAttribute('tabindex', '0');

    tags.forEach(tag => {
        const tagBtn = document.createElement('button');
        tagBtn.classList.add('tag-filter-btn');
        tagBtn.textContent = capitalize(tag);
        tagBtn.addEventListener('click', () => onTagClick(tag));
        container.appendChild(tagBtn);
    });
    // Botón para limpiar filtro
    const clearBtn = document.createElement('button');
    clearBtn.classList.add('tag-filter-btn', 'clear');
    clearBtn.textContent = "Mostrar todo";
    clearBtn.title = "Limpiar filtro";
    clearBtn.addEventListener('click', () => onTagClick(null));
    container.appendChild(clearBtn);

    // Estructura: wrapper > container
    wrapper.appendChild(container);
    return wrapper;
}


function renderGallery(items, showTags = false) {
    const container = document.createElement('div');
    container.classList.add('gridGallery');
    items.forEach(item => {
        const card = renderCard({
            ...item,
            tags: showTags ? item.tags : undefined
        });
        container.appendChild(card);
    });
    return container;
}

function getUniqueTags(projects) {
    const tagSet = new Set();
    projects.forEach(p => Array.isArray(p.tags) && p.tags.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function setupTagsShadow(wrapperSelector = '.tags-filter-wrapper', filterSelector = '.tags-filter') {
    const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;
    const filter = wrapper.querySelector(filterSelector);
    if (!filter) return;

    function updateShadows() {
        // ¿Hay contenido oculto a la izquierda?
        if (filter.scrollLeft > 2) {
            wrapper.style.setProperty('--shadow-left', 1);
            wrapper.classList.add('has-left-shadow');
            wrapper.style.setProperty('--shadow-left-opacity', 1);
            wrapper.style.setProperty('--shadow-left-raw', '1');
            wrapper.style.setProperty('--shadow-right-raw', '1');
        } else {
            wrapper.classList.remove('has-left-shadow');
        }
        // ¿Hay contenido oculto a la derecha?
        if (filter.scrollLeft + filter.clientWidth < filter.scrollWidth - 2) {
            wrapper.classList.add('has-right-shadow');
        } else {
            wrapper.classList.remove('has-right-shadow');
        }

        // Alternativamente, si querés setear el opacity directamente:
        wrapper.style.setProperty('--left-shadow-opacity', filter.scrollLeft > 2 ? 1 : 0);
        wrapper.style.setProperty('--right-shadow-opacity',
            filter.scrollLeft + filter.clientWidth < filter.scrollWidth - 2 ? 1 : 0);
        // Y modificar el CSS arriba a opacity: var(--left-shadow-opacity, 0); etc si querés.
    }

    filter.addEventListener('scroll', updateShadows);
    window.addEventListener('resize', updateShadows);
    setTimeout(updateShadows, 100); // Ajuste inicial (por si se renderizan dinámico)
}
setupTagsShadow();

function setupTagsShadow(wrapperSelector = '.tags-filter-wrapper', filterSelector = '.tags-filter') {
    document.querySelectorAll(wrapperSelector).forEach(wrapper => {
        const filter = wrapper.querySelector(filterSelector);
        if (!filter) return;

        function updateShadows() {
            // Sombra izquierda
            if (filter.scrollLeft > 2) {
                wrapper.classList.add('has-left-shadow');
            } else {
                wrapper.classList.remove('has-left-shadow');
            }
            // Sombra derecha
            if (filter.scrollLeft + filter.clientWidth < filter.scrollWidth - 2) {
                wrapper.classList.add('has-right-shadow');
            } else {
                wrapper.classList.remove('has-right-shadow');
            }
        }
        // Eventos que actualizan las sombras
        filter.addEventListener('scroll', updateShadows);
        window.addEventListener('resize', updateShadows);
        setTimeout(updateShadows, 100); // Inicial
    });
}

setupTagsShadow();


// Renderización principal

// Renderizado principal con búsqueda por tags
const gridGalleryProjects = document.getElementById('gridGalleryProjects');

if (gridGalleryProjects) {
    // 1. Obtener todos los tags únicos
    const allTags = publicTags;

    // 2. Div contenedor de filtro y galería
    const wrapper = document.createElement('div');
    wrapper.classList.add('gallery-wrapper');

    // 3. Renderizar el filtro de tags
    let selectedTag = null;
    const tagFilterDiv = renderTagFilter(allTags, handleTagClick);
    wrapper.appendChild(tagFilterDiv);

    // 4. Contenedor de galería (se re-renderiza al filtrar)
    const galleryContainer = document.createElement('div');
    wrapper.appendChild(galleryContainer);

    // 5. Función para renderizar la galería filtrada
    function renderFilteredGallery() {
        galleryContainer.innerHTML = ''; // Limpiar
        let filteredProjects = projects;
        if (selectedTag) {
            filteredProjects = projects.filter(p => p.tags && p.tags.includes(selectedTag));
        }
        const gallery = renderGallery(
            filteredProjects,
            true,
            { href: 'https://github.com/soypato?tab=repositories', text: 'Más proyectos' }
        );
        galleryContainer.appendChild(gallery);
    }

    // 6. Callback para cuando se cliquea un tag
    function handleTagClick(tag) {
        selectedTag = tag;
        renderFilteredGallery();
    }

    // 7. Render inicial
    renderFilteredGallery();

    // 8. Agregar todo al contenedor real del DOM
    gridGalleryProjects.appendChild(wrapper);
}


const gridGalleryConferences = document.getElementById('gridGalleryConferences');
if (gridGalleryConferences) {
    const conferencesGallery = renderGallery(conferences, false);
    gridGalleryConferences.appendChild(conferencesGallery);
}

function renderTechGallery(techs) {
    const container = document.createElement('div');
    container.classList.add('gridGallery');
    techs.forEach(({ image, name }) => {
        const card = document.createElement('div');
        card.classList.add('middleGrid');
        card.appendChild(renderImage(image));
        const h3 = document.createElement('h3');
        h3.textContent = name;
        card.appendChild(h3);
        container.appendChild(card);
    });
    return container;
}

const gridGalleryTech = document.getElementById('gridGalleryTech');
if (gridGalleryTech) {
    gridGalleryTech.appendChild(renderTechGallery(technologies));
}

