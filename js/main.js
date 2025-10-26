// ===== CONFIGURACIÓN GLOBAL =====
const CONFIG = {
    // URLs y endpoints
    facebookPage: 'https://www.facebook.com/emancipacionamericana',
    apiBaseUrl: '', // Para futuras integraciones
    
    // Configuración de animaciones
    scrollOffset: 80,
    animationThreshold: 0.1,
    
    // Configuración del formulario
    formTimeout: 5000,
    
    // Configuración del carrusel
    carouselInterval: 5000, // 5 segundos
    
    // Personal (datos simulados - en producción deberían venir de una API)
    staffData: {
        directivos: [
            {
                nombre: "Mg. Jaime Delgado Arteaga",
                cargo: "Director",
                especialidad: "Docente de Matemática",
                foto: "imagenes/profesor.png"
            },
             {
                nombre: "Lic. Angel Edgardo Barreto Ortiz",
                cargo: "Sub Director",
                especialidad: "Docente de Comunicación",
                foto: "imagenes/profesor.png"
            },
             {
                nombre: "Prof. Manuel Celestino Guzman Soto",
                cargo: "Coordinador Pedagógico",
                especialidad: "Docente de Comunicación",
                foto: "imagenes/profesor.png"
            },
             {
                nombre: "Prof. Isabel Zarela Condori Arizaca",
                cargo: "Coordinadora de Ciencias",
                especialidad: "Docente de Ciencias y Tecnologias",
                foto: "imagenes/profesora.png"
            },
             {
                nombre: "Prof. Walter Laguna Cusi",
                cargo: "Coordinador de Ciencias Sociales",
                especialidad: "Docente de Ciencias Sociales",
                foto: "imagenes/profesor.png"
            },
             {
                nombre: "Prof. Ronald Pacheco Zeagarra",
                cargo: "Coordinador de Tútoria",
                especialidad: "Docente de Educación por el Trabajo",
                foto: "imagenes/profesor.png"
            }
        ],
        docentes: [
            {
                nombre: "Prof. Bernabé Cuno Huamán",
                cargo: "Docente de Ciencias Sociales",
                especialidad: "Ciencias Sociales",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Godofredo Soto Muñoz",
                cargo: "Docente de Educación Artistica",
                especialidad: "Educacion por el Arte",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof(a). Yda Eufemia Tintaya Solis",
                cargo: "Docente de Ingles",
                especialidad: "Ingles",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof. Jaime Huacoto Bejar",
                cargo: "Docente de Educacion por el Trabajo",
                especialidad: "Educacion por el Trabajo",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof(a). Rosa V.Orccohuarancca Condori",
                cargo: "Docente de Ciencias Sociales",
                especialidad: "Ciencias Sociales",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof(a). Victoriana Mamani Charca",
                cargo: "Docente de Matemática",
                especialidad: "Matemática",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof. Victor Elias Huapaya Cahuantico",
                cargo: "Docente de Educacion por el Trajo",
                especialidad: "Matematica y computación e informática",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof(a). Doris Ofelia Rojas Callo",
                cargo: "Docente de Comunicación ",
                especialidad: "Comunicación",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof. Daniel Charca Mamani",
                cargo: "Docente de Matemática",
                especialidad: "Matemática",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof(a). Nayu Karisa Castro Jara",
                cargo: "Docente de Educación Religiosa",
                especialidad: "Religión",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof. Ricardo M. Jaqquehua Calloquispe",
                cargo: "Docente de Quechua",
                especialidad: "Comunicacion",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Jorge Roque Quispe",
                cargo: "Docente de Matematica",
                especialidad: "Matemática",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Alberto Yahuira Pfoccori",
                cargo: "Docente de Ciencias Sociales",
                especialidad: "Ciencias Sociales",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Armando Rodrigo Almaza Apaza",
                cargo: "Docente de Ciencias y tecnologias",
                especialidad: "Ciencias y Tecnologías",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Cipriano Quispe Aquino",
                cargo: "Docente de Matemática",
                especialidad: "Matemática",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Percy Mamani Rojas",
                cargo: "Docente de Educación Física",
                especialidad: "Educación Fisica",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Adrian Mamani Huillca ",
                cargo: "Docente de Ciencias y tecnologias",
                especialidad: "Ciencias y Tecnologías",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof(a). Yesenia Cahuascanco Quispe",
                cargo: "Docente de ingles",
                especialidad: "ingles",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof. Celso Mamani Quispe",
                cargo: "Docente de Ciencias y tecnologías",
                especialidad: "Ciencias y Tecnologias",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof(a). Jail Yomara Bonifacio Gutierez",
                cargo: "Docente de Formacion civica y Ciudadana",
                especialidad: "Ciencias Sociales",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof. Bonifacio Corilla Villanueva",
                cargo: "Docente de Matemática",
                especialidad: "Matemática",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof(a). Nohemi Pachapuma Apaza",
                cargo: "Docente de Ingles",
                especialidad: "Ingles",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof(a). Nelly Nancy Espirilla Ccolque",
                cargo: "Docente de Innovación Pedagogica",
                especialidad: "Computación e Informatica",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof(a). Miranda Serrat Castro Yampi",
                cargo: "Docente de Comunicacion",
                especialidad: "Comunicacion",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof(a). Lucy Evelina Sumire Huahuachampi",
                cargo: "Docente de Comunicación",
                especialidad: "Comunicación",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof(a). Roxana Rosario Phocco Berrios",
                cargo: "Docente de Ingles",
                especialidad: "Ingles",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof. Sixto Mamani Aslla",
                cargo: "Docente de Comunicacion",
                especialidad: "Comunicacion",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Orlando Sotteccani Cardeña",
                cargo: "Docente de Educacion Regligiosa",
                especialidad: "Religion",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Giberto Mamani Mamani",
                cargo: "Docente de Educación Fisica",
                especialidad: "Educacion Fisica",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof(a). Marina Mayhuiri Ticuña",
                cargo: "Docente de Ciencias y Tecnologias",
                especialidad: "Ciencias y Tecnologias ",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof. Edwin Montufar Yepez",
                cargo: "Docente de Ciencias Sociales",
                especialidad: "Ciencias Sociales",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof. Guido Quispe Ccalla",
                cargo: "Docente de Comunicacion",
                especialidad: "Comunicacion",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Prof(a). Mary Isabel Mamani Mamani",
                cargo: "Docente de Formacion Civica y Ciudadana",
                especialidad: "Ciencias Sociales",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Prof(a). Rosalia Montalvo Quispe",
                cargo: "Docente de Arte y Cultura",
                especialidad: "Arte y Cultura",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Aux. Guido llalla salcedo",
                cargo: "Auxiliar de Educacion",
                especialidad: "Auxiliar de Educacion",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Aux. Walter Imata Huahuaccapa",
                cargo: "Auxiliar de Educacion",
                especialidad: "Primaria",
                foto: "imagenes/walterimata.jpg"
            },
            {
                nombre: "Aux. Luis Carlos Mogrovejo Ccalahuille",
                cargo: "Auxiliar de Educacion",
                especialidad: "Auxiliar de Educacion",
                foto: "imagenes/profesor.png"
            }
        ],
        administrativos: [
             {
                nombre: "Psicologo Jose Luis Medina Jara",
                cargo: "Psicologo",
                especialidad: "Psicologo",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Ing. Cesar Rodrigo Ttito Quilca",
                cargo: "CIST",
                especialidad: "Computacion e Informatica",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Sra. Leonor Arosquipa Huiche",
                cargo: "Secretaria",
                especialidad: "Secretaria",
                foto: "imagenes/profesora.png"
            },
            {
                nombre: "Sr. Rómulo Valderrama Nina",
                cargo: "Auxiliar Laboratorio - SIAGIE",
                especialidad: "Archivo y Documentación",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Sr. Alberto Quiñones Surco",
                cargo: "Personal de Servicio",
                especialidad: "Personal de Servicio",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Sr. Florencio Yahuaire Sotecani",
                cargo: "Personal de Servicio",
                especialidad: "Personal de Servicio",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Sr. Roger Aparicio Suyo",
                cargo: "Personal de Servicio",
                especialidad: "Personal de Servicio",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Sr. Saulo German Challco Lloclle",
                cargo: "Personal Vigilante",
                especialidad: "Personal Vigilante",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Sr. Walter Ruperto Herrera Gomez",
                cargo: "Personal Vigilante",
                especialidad: "Personal Vigilante",
                foto: "imagenes/profesor.png"
            },
            {
                nombre: "Sra. Olivia Irene Pineda Aguilar",
                cargo: "Personal de mantenimiento",
                especialidad: "Personal de mantenimiento",
                foto: "imagenes/profesora.png"
            }
        ]
    }
};

// ===== SISTEMA MEJORADO DE IMÁGENES =====
function getDefaultImage(altText, nombre) {
    const esMujer = nombre?.toLowerCase().includes('prof(a)') || 
                   nombre?.toLowerCase().includes('sr(a)') ||
                   nombre?.toLowerCase().includes('sra.') ||
                   altText?.toLowerCase().includes('mujer') ||
                   altText?.toLowerCase().includes('femenino');
    
    return esMujer ? 'imagenes/profesora.png' : 'imagenes/profesor.png';
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('IE JEC Emancipación Americana - Inicializando aplicación');
    
    // Inicializar componentes
    initGlobalNavigation();
    initScrollAnimations();
    initStaffSection();
    initContactForm();
    initFacebookIntegration();
    initPerformanceMonitoring();
    initExpandableCards();
    
    // Inicializar funcionalidades específicas de páginas
    initGalleryFilters();
    initCommissionFilters();
    
    // Cargar recursos críticos
    preloadCriticalResources();
});

// ===== NAVEGACIÓN GLOBAL MEJORADA =====
function initGlobalNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('active');
            
            // Cambiar ícono del menú
            const menuIcon = this.querySelector('.menu-icon');
            if (menuIcon) {
                menuIcon.textContent = nav.classList.contains('active') ? '✕' : '☰';
            }
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
                if (menuIcon) menuIcon.textContent = '☰';
            }
        });
    });
    
    // Header con efecto al hacer scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(88, 115, 166, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--color-primary)';
            header.style.backdropFilter = 'blur(0)';
        }
        
        // Efecto de ocultar/mostrar header al hacer scroll
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });
}

// ===== FILTROS PARA GALERÍA =====
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gallery-filters .filter-btn');
    const winnerCards = document.querySelectorAll('.winner-card');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar tarjetas
            winnerCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===== FILTROS PARA COMISIONES =====
function initCommissionFilters() {
    const filterButtons = document.querySelectorAll('.commission-filters .filter-btn');
    const commissionCards = document.querySelectorAll('.commission-card');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar tarjetas
            commissionCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Animación de entrada para las tarjetas
    commissionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ===== FUNCIONALIDAD PARA TARJETAS EXPANDIBLES =====
function initExpandableCards() {
    const expandableCards = document.querySelectorAll('.expandable-card');
    
    if (expandableCards.length === 0) {
        console.warn('No se encontraron tarjetas expandibles');
        return;
    }
    
    expandableCards.forEach(card => {
        const header = card.querySelector('.expandable-card-header');
        const content = card.querySelector('.expandable-card-content');
        const toggleIcon = card.querySelector('.expandable-card-toggle i');
        
        // Añadir atributos de accesibilidad
        card.setAttribute('aria-expanded', 'false');
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        
        header.addEventListener('click', function() {
            toggleCard(card);
        });
        
        // Añadir accesibilidad con teclado
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard(card);
            }
        });
    });
    
    // Abrir la primera tarjeta por defecto
    if (expandableCards.length > 0) {
        setTimeout(() => {
            openCard(expandableCards[0]);
        }, 800);
    }
    
    console.log('Tarjetas expandibles inicializadas:', expandableCards.length);
}

function toggleCard(card) {
    const isActive = card.classList.contains('active');
    
    // Si es acordeón, cerrar otras tarjetas
    if (card.parentElement.classList.contains('accordion')) {
        document.querySelectorAll('.expandable-card').forEach(otherCard => {
            if (otherCard !== card && otherCard.classList.contains('active')) {
                closeCard(otherCard);
            }
        });
    }
    
    if (isActive) {
        closeCard(card);
    } else {
        openCard(card);
    }
}

function openCard(card) {
    const content = card.querySelector('.expandable-card-content');
    const text = card.querySelector('.expandable-card-text');
    
    card.classList.add('active');
    card.setAttribute('aria-expanded', 'true');
    
    // Calcular la altura exacta del contenido dinámicamente
    const contentHeight = text.scrollHeight + 60; // +60px para padding y márgenes
    
    requestAnimationFrame(() => {
        content.style.maxHeight = contentHeight + 'px';
        content.style.padding = '2rem';
    });
}

function closeCard(card) {
    const content = card.querySelector('.expandable-card-content');
    
    card.classList.remove('active');
    card.setAttribute('aria-expanded', 'false');
    
    content.style.maxHeight = '0';
    content.style.padding = '0 2rem';
}

// ===== SECCIÓN DE PERSONAL CON PESTAÑAS =====
function initStaffSection() {
    try {
        // Actualizar contadores
        document.getElementById('directivos-count').textContent = CONFIG.staffData.directivos.length;
        document.getElementById('docentes-count').textContent = CONFIG.staffData.docentes.length;
        document.getElementById('administrativos-count').textContent = CONFIG.staffData.administrativos.length;
        
        // Cargar cada categoría en su contenedor
        loadStaffCategory('directivos', CONFIG.staffData.directivos);
        loadStaffCategory('docentes', CONFIG.staffData.docentes);
        loadStaffCategory('administrativos', CONFIG.staffData.administrativos);
        
        // Configurar pestañas
        setupStaffTabs();
        
        // Configurar búsqueda para docentes
        setupStaffSearch();
        
        // Agregar manejo de errores para imágenes
        handleImageErrors();
        
    } catch (error) {
        console.error('Error al cargar la sección de personal:', error);
        const container = document.getElementById('personal');
        if (container) {
            container.innerHTML = `
                <div class="container">
                    <h2 class="section-title">Nuestro Equipo Educativo</h2>
                    <div style="text-align: center; padding: 2rem; color: var(--color-error);">
                        <i class="fas fa-exclamation-triangle fa-3x" style="margin-bottom: 1rem;"></i>
                        <p>Error al cargar la información del personal. Por favor, intente recargar la página.</p>
                    </div>
                </div>
            `;
        }
    }
}

function loadStaffCategory(category, staffArray) {
    const container = document.getElementById(`${category}-container`);
    if (!container) return;
    
    let html = '';
    staffArray.forEach(persona => {
        html += createStaffCard(persona);
    });
    
    container.innerHTML = html;
}

function createStaffCard(persona) {
    const defaultImage = getDefaultImage(null, persona.nombre);
    
    return `
        <div class="staff-card" data-name="${persona.nombre.toLowerCase()}" data-specialty="${persona.especialidad.toLowerCase()}">
            <img src="${persona.foto || defaultImage}" 
                 alt="${persona.nombre} - ${persona.cargo}" 
                 title="${persona.nombre}"
                 loading="lazy"
                 onerror="this.src='${defaultImage}'; this.alt='Foto de ${persona.nombre}'">
            <div class="staff-info">
                <h3>${persona.nombre}</h3>
                <p class="cargo">${persona.cargo}</p>
                <p>${persona.especialidad}</p>
            </div>
        </div>
    `;
}

function setupStaffTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remover clase active de todos los botones y paneles
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Agregar clase active al botón y panel actual
            this.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

function setupStaffSearch() {
    const searchInput = document.getElementById('docentes-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const staffCards = document.querySelectorAll('#docentes-container .staff-card');
        
        staffCards.forEach(card => {
            const name = card.getAttribute('data-name');
            const specialty = card.getAttribute('data-specialty');
            
            if (name.includes(searchTerm) || specialty.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ===== ANIMACIONES AL SCROLL =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: CONFIG.animationThreshold,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animación específica para tarjetas
                if (entry.target.classList.contains('value-card') || 
                    entry.target.classList.contains('staff-card') ||
                    entry.target.classList.contains('program-card') ||
                    entry.target.classList.contains('expandable-card')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
                    entry.target.style.animationDelay = `${delay}ms`;
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            }
        });
    }, observerOptions);
    
    // Observar secciones
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Observar elementos con animación específica
    document.querySelectorAll('.value-card, .staff-card, .program-card, .expandable-card').forEach(card => {
        observer.observe(card);
    });
}

// ===== FORMULARIO DE CONTACTO =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remover errores previos
    clearFieldError(field);
    
    // Validar según el tipo de campo
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Este campo es obligatorio');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Por favor ingrese un email válido');
            return false;
        }
    }
    
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[0-9+\-\s()]{9,}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Por favor ingrese un número de teléfono válido');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.style.borderColor = 'var(--color-error)';
    
    // Crear elemento de error si no existe
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.cssText = `
            color: var(--color-error);
            font-size: 0.8rem;
            margin-top: 0.3rem;
        `;
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

function clearFieldError(e) {
    const field = e.target || e;
    field.style.borderColor = '';
    
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Validar todos los campos
    const fields = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    fields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showNotification('Por favor complete correctamente todos los campos obligatorios', 'error');
        return;
    }
    
    // Mostrar estado de carga
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;
    
    try {
        // Simular envío (en producción, aquí iría la llamada a la API)
        await simulateFormSubmission(form);
        
        showNotification('Mensaje enviado correctamente. Nos pondremos en contacto pronto.', 'success');
        form.reset();
        
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        showNotification('Error al enviar el mensaje. Por favor, intente nuevamente.', 'error');
    } finally {
        // Restaurar estado normal del botón
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
    }
}

function simulateFormSubmission(form) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simular éxito (90% de probabilidad) o error (10%) 
            Math.random() > 0.1 ? resolve() : reject(new Error('Error de servidor simulado'));
        }, 2000);
    });
}

// ===== INTEGRACIÓN CON FACEBOOK =====
function initFacebookIntegration() {
    // Verificar si Facebook SDK está cargado
    if (typeof FB !== 'undefined') {
        FB.Event.subscribe('xfbml.render', function() {
            console.log('Widget de Facebook cargado correctamente');
        });
        
        FB.Event.subscribe('xfbml.load', function() {
            console.log('Facebook XFBML iniciado');
        });
    }
    
    // Fallback para el widget después de 5 segundos
    setTimeout(() => {
        const fbContainer = document.querySelector('.fb-page');
        if (fbContainer && fbContainer.offsetHeight < 100) {
            const fallback = document.querySelector('.facebook-fallback');
            if (fallback) fallback.style.display = 'block';
        }
    }, 5000);
}

function likeFacebookPage() {
    window.open(CONFIG.facebookPage, '_blank', 'noopener,noreferrer');
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Conoce la IE JEC Emancipación Americana de Tinta, Cusco');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'IE JEC Emancipación Americana',
            text: 'Conoce nuestra institución educativa en Tinta, Cusco',
            url: window.location.href
        })
        .catch(error => console.log('Error al compartir:', error));
    } else {
        // Fallback para navegadores que no soportan Web Share API
        shareOnFacebook();
    }
}

// ===== NOTIFICACIONES =====
function showNotification(message, type = 'info') {
    // Remover notificación anterior si existe
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" aria-label="Cerrar notificación">×</button>
    `;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? 'var(--color-error)' : 
                    type === 'success' ? 'var(--color-success)' : 'var(--color-info)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.3s;
    `;
    
    notification.querySelector('button').addEventListener('mouseover', function() {
        this.style.background = 'rgba(255,255,255,0.2)';
    });
    
    notification.querySelector('button').addEventListener('mouseout', function() {
        this.style.background = 'transparent';
    });
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== MANEJO DE ERRORES DE IMÁGENES =====
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            const defaultImage = getDefaultImage(this.alt, this.alt);
            this.src = defaultImage;
            this.alt = 'Imagen no disponible';
        });
    });
}

// ===== MONITOREO DE RENDIMIENTO =====
function initPerformanceMonitoring() {
    // Medir tiempo de carga
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Tiempo de carga total: ${loadTime}ms`);
        
        if (loadTime > 3000) {
            console.warn('El tiempo de carga es elevado. Considere optimizar recursos.');
        }
    });
    
    // Monitorizar errores
    window.addEventListener('error', (e) => {
        console.error('Error capturado:', e.error);
        // En producción, aquí se enviaría a un servicio de monitoreo
    });
}

// ===== OPTIMIZACIONES =====
function preloadCriticalResources() {
    // Preload de imágenes críticas
    const criticalImages = [
        'imagenes/fondo.jpg',
        'imagenes/fondo2.jpg',
        'imagenes/fondo3.jpg',
        'imagenes/fondo4.jpg',
        'imagenes/fondo5.jpg',
        'imagenes/fondo6.jpg',
        'imagenes/INSIGNIA.png',
        'imagenes/profesor.png',
        'imagenes/profesora.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ===== POLYFILLS Y COMPATIBILIDAD =====
// Polyfill para IntersectionObserver (para navegadores antiguos)
if (!('IntersectionObserver' in window)) {
    // Cargar polyfill dinámicamente
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/intersection-observer@0.12.0/intersection-observer.js';
    document.head.appendChild(script);
    
    // Fallback básico para animaciones
    script.onload = function() {
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('visible');
        });
    };
}

// ===== ANIMACIONES CSS ADICIONALES =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInExpand {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ===== MANEJO OFFLINE =====
window.addEventListener('online', () => {
    showNotification('Conexión restaurada', 'success');
});

window.addEventListener('offline', () => {
    showNotification('Estás trabajando sin conexión', 'warning');
});

// ===== EXPORTAR FUNCIONES GLOBALES =====
window.likeFacebookPage = likeFacebookPage;
window.shareOnFacebook = shareOnFacebook;
window.sharePage = sharePage;
window.toggleExpandableCard = toggleExpandableCard;
window.openExpandableCard = openExpandableCard;
window.closeExpandableCard = closeExpandableCard;

console.log('IE JEC Emancipación Americana - Aplicación inicializada correctamente');