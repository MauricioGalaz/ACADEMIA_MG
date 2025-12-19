// ===================================
// Configuración Global
// ===================================
const CONFIG = {
    animationDuration: 300,
    scrollOffset: 80
};

// ===================================
// Navbar - Scroll y Mobile Menu
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Efecto scroll en navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Smooth Scroll para Links de Navegación
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - CONFIG.scrollOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Language Tabs - Editor de Código
// ===================================
const tabButtons = document.querySelectorAll('.tab-btn');
const editorContainers = document.querySelectorAll('.editor-container');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const language = button.getAttribute('data-lang');
        
        // Remove active class from all tabs and editors
        tabButtons.forEach(btn => btn.classList.remove('active'));
        editorContainers.forEach(container => container.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding editor
        button.classList.add('active');
        document.getElementById(`${language}-editor`).classList.add('active');
    });
});

// ===================================
// HTML/CSS Editor Tabs
// ===================================
const htmlTabs = document.querySelectorAll('.html-tab');
const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');

htmlTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabType = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs
        htmlTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show/hide editors
        if (tabType === 'html') {
            htmlCode.classList.add('active');
            cssCode.classList.remove('active');
            htmlCode.style.display = 'block';
            cssCode.style.display = 'none';
        } else {
            htmlCode.classList.remove('active');
            cssCode.classList.add('active');
            htmlCode.style.display = 'none';
            cssCode.style.display = 'block';
        }
    });
});

// ===================================
// Code Examples - Ejemplos de Código
// ===================================
const codeExamples = {
    python: `# Ejemplo: Calculadora Simple en Python
def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b != 0:
        return a / b
    else:
        return "Error: División por cero"

# Prueba las funciones
print("Suma: 10 + 5 =", suma(10, 5))
print("Resta: 10 - 5 =", resta(10, 5))
print("Multiplicación: 10 * 5 =", multiplicar(10, 5))
print("División: 10 / 5 =", dividir(10, 5))`,

    java: `// Ejemplo: Calculadora Simple en Java
public class Calculadora {
    
    public static int suma(int a, int b) {
        return a + b;
    }
    
    public static int resta(int a, int b) {
        return a - b;
    }
    
    public static int multiplicar(int a, int b) {
        return a * b;
    }
    
    public static double dividir(int a, int b) {
        if (b != 0) {
            return (double) a / b;
        }
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println("Suma: 10 + 5 = " + suma(10, 5));
        System.out.println("Resta: 10 - 5 = " + resta(10, 5));
        System.out.println("Multiplicación: 10 * 5 = " + multiplicar(10, 5));
        System.out.println("División: 10 / 5 = " + dividir(10, 5));
    }
}`,

    html: {
        html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página Web</title>
</head>
<body>
    <header>
        <h1>Bienvenido a mi Sitio Web</h1>
        <nav>
            <a href="#inicio">Inicio</a>
            <a href="#about">Acerca de</a>
            <a href="#contacto">Contacto</a>
        </nav>
    </header>
    
    <main>
        <section id="inicio">
            <h2>Inicio</h2>
            <p>Esta es mi primera página web creada con HTML y CSS.</p>
        </section>
        
        <section id="about">
            <h2>Acerca de</h2>
            <p>Estoy aprendiendo desarrollo web con Mauricio Galaz.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Mi Sitio Web</p>
    </footer>
</body>
</html>`,
        css: `/* Estilos para la página */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    text-align: center;
}

nav {
    margin-top: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background 0.3s;
}

nav a:hover {
    background: rgba(255, 255, 255, 0.2);
}

main {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

section {
    background: white;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h2 {
    color: #667eea;
    margin-bottom: 1rem;
}

footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
}`
    }
};

// ===================================
// Load Example - Cargar Ejemplo
// ===================================
function loadExample(language) {
    if (language === 'html') {
        document.getElementById('html-code').value = codeExamples.html.html;
        document.getElementById('css-code').value = codeExamples.html.css;
        showNotification('Ejemplo cargado correctamente', 'success');
    } else {
        const codeEditor = document.getElementById(`${language}-code`);
        codeEditor.value = codeExamples[language];
        showNotification('Ejemplo cargado correctamente', 'success');
    }
}

// ===================================
// Clear Editor - Limpiar Editor
// ===================================
function clearEditor(language) {
    if (language === 'html') {
        document.getElementById('html-code').value = '';
        document.getElementById('css-code').value = '';
        document.getElementById('html-output').srcdoc = '';
    } else {
        document.getElementById(`${language}-code`).value = '';
        document.getElementById(`${language}-output`).textContent = 'La salida aparecerá aquí...';
    }
    showNotification('Editor limpiado', 'info');
}

// ===================================
// Run Code - Ejecutar Código
// ===================================
function runCode(language) {
    const codeEditor = document.getElementById(`${language}-code`);
    const output = document.getElementById(`${language}-output`);
    const code = codeEditor.value.trim();
    
    if (!code) {
        showNotification('Por favor, escribe algo de código primero', 'warning');
        return;
    }
    
    if (language === 'python') {
        runPythonCode(code, output);
    } else if (language === 'java') {
        runJavaCode(code, output);
    } else if (language === 'html') {
        runHTMLCode();
    }
}

// ===================================
// Run Python Code - Simulación
// ===================================
function runPythonCode(code, output) {
    try {
        // Simulación básica de Python
        let result = '';
        const lines = code.split('\n');
        
        // Buscar prints
        const printRegex = /print\((.*)\)/g;
        let match;
        
        while ((match = printRegex.exec(code)) !== null) {
            try {
                let content = match[1];
                
                // Evaluar expresiones simples
                if (content.includes('+') || content.includes('-') || content.includes('*') || content.includes('/')) {
                    // Remover comillas de strings antes de evaluar
                    const parts = content.split(',').map(part => {
                        part = part.trim();
                        if (part.startsWith('"') || part.startsWith("'")) {
                            return part.replace(/["']/g, '');
                        }
                        try {
                            return eval(part);
                        } catch {
                            return part.replace(/["']/g, '');
                        }
                    });
                    result += parts.join(' ') + '\n';
                } else {
                    // Contenido simple
                    result += content.replace(/["']/g, '') + '\n';
                }
            } catch (e) {
                result += match[1].replace(/["']/g, '') + '\n';
            }
        }
        
        if (result) {
            output.textContent = result;
            output.style.color = '#10b981';
        } else {
            output.textContent = '✓ Código ejecutado sin errores.\nNota: Este es un simulador básico. Para funcionalidad completa, usa un intérprete Python real.';
            output.style.color = '#3b82f6';
        }
        
        showNotification('Código Python ejecutado', 'success');
    } catch (error) {
        output.textContent = `Error: ${error.message}\n\nNota: Este es un simulador básico de Python.`;
        output.style.color = '#ef4444';
        showNotification('Error al ejecutar el código', 'error');
    }
}

// ===================================
// Run Java Code - Simulación
// ===================================
function runJavaCode(code, output) {
    try {
        let result = '';
        
        // Buscar System.out.println
        const printRegex = /System\.out\.println\((.*?)\);/g;
        let match;
        
        while ((match = printRegex.exec(code)) !== null) {
            try {
                let content = match[1];
                
                // Evaluar expresiones simples
                if (content.includes('+') || content.includes('-') || content.includes('*') || content.includes('/')) {
                    const parts = content.split('+').map(part => {
                        part = part.trim();
                        if (part.startsWith('"')) {
                            return part.replace(/"/g, '');
                        }
                        try {
                            return eval(part);
                        } catch {
                            return part.replace(/"/g, '');
                        }
                    });
                    result += parts.join('') + '\n';
                } else {
                    result += content.replace(/"/g, '') + '\n';
                }
            } catch (e) {
                result += match[1].replace(/"/g, '') + '\n';
            }
        }
        
        if (result) {
            output.textContent = result;
            output.style.color = '#10b981';
        } else {
            output.textContent = '✓ Código compilado sin errores.\nNota: Este es un simulador básico. Para funcionalidad completa, usa un compilador Java real.';
            output.style.color = '#3b82f6';
        }
        
        showNotification('Código Java ejecutado', 'success');
    } catch (error) {
        output.textContent = `Error de compilación: ${error.message}\n\nNota: Este es un simulador básico de Java.`;
        output.style.color = '#ef4444';
        showNotification('Error al compilar el código', 'error');
    }
}

// ===================================
// Run HTML Code
// ===================================
function runHTMLCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const output = document.getElementById('html-output');
    
    const fullCode = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
        </body>
        </html>
    `;
    
    output.srcdoc = fullCode;
    showNotification('Vista previa actualizada', 'success');
}

// ===================================
// Exercises Data - Datos de Ejercicios
// ===================================
const exercises = {
    python: [
        {
            title: "Hola Mundo",
            description: "Imprime 'Hola Mundo' en la consola",
            difficulty: "easy",
            hint: "Usa la función print()"
        },
        {
            title: "Suma de Números",
            description: "Crea una función que sume dos números",
            difficulty: "easy",
            hint: "Define una función con def suma(a, b):"
        },
        {
            title: "Números Pares",
            description: "Imprime los números pares del 1 al 20",
            difficulty: "medium",
            hint: "Usa un bucle for y el operador %"
        },
        {
            title: "Factorial",
            description: "Calcula el factorial de un número",
            difficulty: "medium",
            hint: "Usa recursión o un bucle while"
        },
        {
            title: "Palíndromo",
            description: "Verifica si una palabra es un palíndromo",
            difficulty: "hard",
            hint: "Compara la palabra con su reverso"
        },
        {
            title: "FizzBuzz",
            description: "Imprime números del 1 al 100, pero 'Fizz' para múltiplos de 3, 'Buzz' para múltiplos de 5",
            difficulty: "medium",
            hint: "Usa if-elif para verificar divisibilidad"
        }
    ],
    java: [
        {
            title: "Hola Mundo",
            description: "Imprime 'Hola Mundo' usando Java",
            difficulty: "easy",
            hint: "Usa System.out.println()"
        },
        {
            title: "Suma de Números",
            description: "Crea un método que sume dos números enteros",
            difficulty: "easy",
            hint: "Define un método static int suma(int a, int b)"
        },
        {
            title: "Array de Números",
            description: "Crea un array de 5 números y calcula su promedio",
            difficulty: "medium",
            hint: "Usa int[] numeros = new int[5];"
        },
        {
            title: "Clase Persona",
            description: "Crea una clase Persona con nombre y edad",
            difficulty: "medium",
            hint: "Define atributos private y métodos getter/setter"
        },
        {
            title: "Números Primos",
            description: "Encuentra todos los números primos hasta 100",
            difficulty: "hard",
            hint: "Usa bucles anidados para verificar divisibilidad"
        },
        {
            title: "Calculadora POO",
            description: "Crea una calculadora usando programación orientada a objetos",
            difficulty: "hard",
            hint: "Define una clase con métodos para cada operación"
        }
    ],
    web: [
        {
            title: "Página Básica",
            description: "Crea una página HTML con encabezado y párrafo",
            difficulty: "easy",
            hint: "Usa etiquetas <h1> y <p>"
        },
        {
            title: "Navegación",
            description: "Crea un menú de navegación con 3 enlaces",
            difficulty: "easy",
            hint: "Usa <nav> y <a href>"
        },
        {
            title: "Formulario de Contacto",
            description: "Crea un formulario con nombre, email y mensaje",
            difficulty: "medium",
            hint: "Usa <form> con <input> y <textarea>"
        },
        {
            title: "Card Responsiva",
            description: "Crea una tarjeta (card) que se adapte a móviles",
            difficulty: "medium",
            hint: "Usa CSS Flexbox y media queries"
        },
        {
            title: "Galería de Imágenes",
            description: "Crea una galería con CSS Grid",
            difficulty: "hard",
            hint: "Usa display: grid y grid-template-columns"
        },
        {
            title: "Animación CSS",
            description: "Crea un botón con animación hover",
            difficulty: "medium",
            hint: "Usa @keyframes y transition"
        }
    ]
};

// ===================================
// Load Exercises - Cargar Ejercicios
// ===================================
function loadExercises() {
    const exercisesGrid = document.getElementById('exercises-grid');
    const activeLanguage = document.querySelector('.tab-btn.active').getAttribute('data-lang');
    
    const languageExercises = activeLanguage === 'html' ? exercises.web : exercises[activeLanguage];
    
    exercisesGrid.innerHTML = '';
    
    languageExercises.forEach((exercise, index) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <div class="exercise-header">
                <span class="exercise-difficulty difficulty-${exercise.difficulty}">
                    ${exercise.difficulty === 'easy' ? 'Fácil' : exercise.difficulty === 'medium' ? 'Medio' : 'Difícil'}
                </span>
            </div>
            <h4>${exercise.title}</h4>
            <p>${exercise.description}</p>
        `;
        
        card.addEventListener('click', () => {
            showExerciseModal(exercise, activeLanguage);
        });
        
        exercisesGrid.appendChild(card);
    });
}

// Cargar ejercicios iniciales
document.addEventListener('DOMContentLoaded', () => {
    loadExercises();
});

// Actualizar ejercicios al cambiar de lenguaje
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        setTimeout(loadExercises, 100);
    });
});

// ===================================
// Show Exercise Modal
// ===================================
function showExerciseModal(exercise, language) {
    const modal = document.getElementById('courseModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2>${exercise.title}</h2>
        <div class="exercise-difficulty difficulty-${exercise.difficulty}" style="display: inline-block; margin: 1rem 0;">
            ${exercise.difficulty === 'easy' ? 'Fácil' : exercise.difficulty === 'medium' ? 'Medio' : 'Difícil'}
        </div>
        <h3>Descripción:</h3>
        <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">
            ${exercise.description}
        </p>
        <h3>💡 Pista:</h3>
        <p style="color: var(--text-muted); background: var(--bg-darker); padding: 1rem; border-radius: 10px; margin-bottom: 2rem;">
            ${exercise.hint}
        </p>
        <button class="btn btn-primary" onclick="closeModal()">
            <i class="fas fa-check"></i> Entendido, voy a intentarlo
        </button>
    `;
    
    modal.classList.add('active');
}

// ===================================
// Modal Functions
// ===================================
function closeModal() {
    const modal = document.getElementById('courseModal');
    modal.classList.remove('active');
}

// Cerrar modal al hacer click fuera
window.addEventListener('click', (e) => {
    const modal = document.getElementById('courseModal');
    if (e.target === modal) {
        closeModal();
    }
});

// ===================================
// Show Course Detail
// ===================================
function showCourseDetail(course) {
    const modal = document.getElementById('courseModal');
    const modalContent = document.getElementById('modalContent');
    
    const courseDetails = {
        python: {
            title: "Curso de Python",
            icon: "fab fa-python",
            color: "#3776ab",
            description: "Python es un lenguaje de programación versátil y fácil de aprender, perfecto para principiantes y profesionales.",
            topics: [
                "Variables y tipos de datos",
                "Estructuras de control (if, for, while)",
                "Funciones y módulos",
                "Listas, tuplas y diccionarios",
                "Programación orientada a objetos",
                "Manejo de archivos",
                "Bibliotecas populares (NumPy, Pandas)",
                "Proyectos prácticos"
            ],
            duration: "8 semanas",
            level: "Principiante a Intermedio"
        },
        java: {
            title: "Curso de Java",
            icon: "fab fa-java",
            color: "#007396",
            description: "Java es uno de los lenguajes más utilizados en el mundo empresarial, ideal para aplicaciones robustas y escalables.",
            topics: [
                "Sintaxis básica de Java",
                "Programación orientada a objetos avanzada",
                "Herencia y polimorfismo",
                "Interfaces y clases abstractas",
                "Colecciones (ArrayList, HashMap, etc.)",
                "Manejo de excepciones",
                "Streams y programación funcional",
                "Desarrollo de aplicaciones"
            ],
            duration: "10 semanas",
            level: "Principiante a Avanzado"
        },
        web: {
            title: "Curso de HTML + CSS",
            icon: "fab fa-html5",
            color: "#e34c26",
            description: "Aprende a crear sitios web modernos y responsivos desde cero. La base fundamental del desarrollo web.",
            topics: [
                "HTML5 semántico",
                "Formularios y validación",
                "CSS3 y selectores",
                "Flexbox y CSS Grid",
                "Diseño responsivo",
                "Animaciones y transiciones",
                "Metodologías CSS (BEM)",
                "Proyectos web completos"
            ],
            duration: "6 semanas",
            level: "Principiante"
        }
    };
    
    const details = courseDetails[course];
    
    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 100px; height: 100px; background: ${details.color}; border-radius: 20px; 
                        display: inline-flex; align-items: center; justify-content: center; font-size: 3rem; color: white; margin-bottom: 1rem;">
                <i class="${details.icon}"></i>
            </div>
            <h2 style="color: var(--primary-color);">${details.title}</h2>
        </div>
        
        <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">
            ${details.description}
        </p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
            <div style="background: var(--bg-darker); padding: 1rem; border-radius: 10px; text-align: center;">
                <i class="fas fa-clock" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 0.5rem;"></i>
                <h4>Duración</h4>
                <p style="color: var(--text-muted);">${details.duration}</p>
            </div>
            <div style="background: var(--bg-darker); padding: 1rem; border-radius: 10px; text-align: center;">
                <i class="fas fa-signal" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 0.5rem;"></i>
                <h4>Nivel</h4>
                <p style="color: var(--text-muted);">${details.level}</p>
            </div>
        </div>
        
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
            <i class="fas fa-list-ul"></i> Contenido del Curso
        </h3>
        <ul style="list-style: none; padding: 0;">
            ${details.topics.map(topic => `
                <li style="padding: 0.7rem; margin-bottom: 0.5rem; background: var(--bg-darker); 
                           border-radius: 8px; display: flex; align-items: center; gap: 10px; color: var(--text-secondary);">
                    <i class="fas fa-check-circle" style="color: var(--success-color);"></i>
                    ${topic}
                </li>
            `).join('')}
        </ul>
        
        <div style="margin-top: 2rem; text-align: center;">
            <button class="btn btn-primary" onclick="scrollToSection('practica'); closeModal();">
                <i class="fas fa-rocket"></i> Comenzar a Practicar
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

// ===================================
// Scroll to Section Helper
// ===================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - CONFIG.scrollOffset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===================================
// Show Resource
// ===================================
function showResource(resourceType) {
    const resourceContent = {
        'python-docs': {
            title: 'Documentación de Python',
            content: `
                <h3>Recursos Oficiales</h3>
                <ul>
                    <li><a href="https://docs.python.org/es/" target="_blank">Documentación Oficial Python (Español)</a></li>
                    <li><a href="https://www.python.org/about/gettingstarted/" target="_blank">Guía de Inicio Python</a></li>
                </ul>
                <h3>Tutoriales Recomendados</h3>
                <ul>
                    <li>Tutorial básico de variables y tipos de datos</li>
                    <li>Guía de funciones y módulos</li>
                    <li>Introducción a POO en Python</li>
                </ul>
            `
        },
        'java-docs': {
            title: 'Documentación de Java',
            content: `
                <h3>Recursos Oficiales</h3>
                <ul>
                    <li><a href="https://docs.oracle.com/en/java/" target="_blank">Documentación Oficial Java</a></li>
                    <li><a href="https://dev.java/learn/" target="_blank">Java Learning Center</a></li>
                </ul>
                <h3>Tutoriales Recomendados</h3>
                <ul>
                    <li>Fundamentos de Java</li>
                    <li>POO avanzada en Java</li>
                    <li>Colecciones y Streams</li>
                </ul>
            `
        },
        'web-docs': {
            title: 'Documentación Web',
            content: `
                <h3>Recursos Oficiales</h3>
                <ul>
                    <li><a href="https://developer.mozilla.org/es/" target="_blank">MDN Web Docs (Español)</a></li>
                    <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a></li>
                </ul>
                <h3>Tutoriales Recomendados</h3>
                <ul>
                    <li>HTML5 semántico completo</li>
                    <li>CSS Flexbox y Grid</li>
                    <li>Diseño responsive desde cero</li>
                </ul>
            `
        }
    };
    
    const resource = resourceContent[resourceType];
    if (resource) {
        const modal = document.getElementById('courseModal');
        const modalContent = document.getElementById('modalContent');
        
        modalContent.innerHTML = `
            <h2>${resource.title}</h2>
            <div style="color: var(--text-secondary); line-height: 1.8;">
                ${resource.content}
            </div>
            <button class="btn btn-primary" onclick="closeModal()" style="margin-top: 2rem;">
                Cerrar
            </button>
        `;
        
        modal.classList.add('active');
    }
}

// ===================================
// Contact Form
// ===================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;
        const message = document.getElementById('message').value;
        
        // Aquí podrías enviar los datos a un servidor
        console.log('Formulario enviado:', { name, email, interest, message });
        
        showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        contactForm.reset();
    });
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'info') {
    // Remover notificaciones existentes
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-card);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: var(--shadow-xl);
        border-left: 4px solid ${colors[type]};
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    notification.innerHTML = `
        <i class="fas ${icons[type]}" style="color: ${colors[type]}; font-size: 1.5rem;"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Intersection Observer para Animaciones
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.course-card, .resource-card, .exercise-card');
    elements.forEach(el => observer.observe(el));
});

console.log('🚀 Academia de Programación MG - Sistema inicializado correctamente');
