
const questions = {
    "professional": [
        {
            "id": 1,
            "question": "¿Cuál es tu especialidad o enfoque principal en el desarrollo web?",
            "answer": "Mi especialidad se centra en la creación de diseños estéticos y vanguardistas, con un enfoque en la accesibilidad del usuario. Además, mi sólida base de conocimientos y buenas prácticas en HTML, CSS y JavaScript me permitien construir un destacado desarrollo de mis objetivos profesionales."
        },
        {
            "id": 2,
            "question": "Cuál consideras que ha sido tu logro académico más destacado?",
            "answer": "Con gran orgullo, destaco mi logro académico más significativo en el proyecto final de egreso de la UTU con la Tecnicatura en Desarrollo Web. Mi dedicación y esfuerzo se vieron reflejados en la obtención de una calificación de 12 con honores. Este hito resalta mi compromiso con la excelencia y la calidad en mi formación académica."
        },
        {
            "id": 3,
            "question": "¿Tienes experiencia en trabajar en proyectos colaborativos?",
            "answer": "Sí, tengo experiencia en proyectos colaborativos en la empresa ficticia 'Codexpert'. Trabajé estrechamente con compañeros de curso, siendo crucial para aprobar nuestro proyecto de egreso. Mi contribución fue fundamental en la creacion de un diseño moderno y accesible, junto al desarrollo de nuestra web y la del cliente."
        },
        {
            "id": 4,
            "question": "¿Qué buenas prácticas conoces y/o aplicas en tus proyectos?",
            "answer": "Conozco y aplico las siguientes buenas prácticas para mejorar la calidad del código: en HTML, priorizo la semántica para accesibilidad y SEO. Por otro lado, en CSS, empleo la metodología BEM para estructuras claras y modulares. En JavaScript, optimizo el rendimiento mediante el manejo eficiente de eventos."
        },
        {
            "id": 5,
            "question": "¿Cuál tu proceso de trabajo en el desarrollo frontend?",
            "answer": "En mi proceso de desarrollo frontend, comienzo con una planificación detallada y la creación de wireframes. Progreso hacia el diseño UI/UX y la implementación, valorando la retroalimentación del equipo para ajustar y mejorar continuamente el proyecto durante todo su desarrollo."
        },
        {
            "id": 6,
            "question": "¿Cómo te desenvuelves en un entorno colaborativo?",
            "answer": "Me destaco como colaborador comprometido y comunicativo, trabajé estrechamente con mis compañeros de curso. Contribuí activamente en reuniones de lluvia de ideas, facilitando un excelente diseño user-friendly en proyectos web. Mi enfoque en el equipo garantizó eficiencia y resultados exitosos."
        },
        {
            "id": 7,
            "question": "¿Cómo manejas proyectos con plazos ajustados?",
            "answer": "En situaciones con plazos ajustados, tengo la habilidad de priorizar tareas según su importancia y complejidad. Esta evaluación me permite determinar qué tareas abordar primero, asegurando una maximización eficiente del tiempo y la entrega exitosa del proyecto en el plazo establecido."
        }
        
    ],
    "personal": [
        {
            "id": 1,
            "question": "¿Qué habilidades blandas destacan en tu personalidad?",
            "answer": "Destaco por mi dedicación y firme compromiso. Cuando me propongo alcanzar un objetivo, me esfuerzo incansablemente para alcanzarlo. Soy detallista y observador, características que aporto para asegurar la calidad y la atención meticulosa en cada tarea que emprendo."
        },
        {
            "id": 2,
            "question": "¿Cuál es tu pasatiempo favorito fuera del desarrollo web?",
            "answer": "Mi pasatiempo favorito, además del desarrollo web, es la calistenia, la cual practico diariamente desde el 2020. Esta disciplina no solo me mantiene activo físicamente, sino que también fortalece mi determinación y perseverancia, cualidades valiosas en mi desarrollo físico y carrera profesional."
        },
        {
            "id": 3,
            "question": "¿Cómo mantienes el bienestar mientras trabajas en proyectos desafiantes?",
            "answer": "Conservo un equilibrio saludable durante proyectos desafiantes gracias a mi apasionado compromiso con el entrenamiento. Esta práctica no solo me proporciona una liberación del estrés, sino que también contribuye a mi bienestar general, permitiéndome mantener un enfoque claro y efectivo en mis labores profesionales."
        },
        {
            "id": 4,
            "question": "¿Cómo manejas la gestión del tiempo en tu vida diaria?",
            "answer": "Administro eficientemente mi tiempo gracias a una rutina estructurada que guía mi día de principio a fin. Sin embargo, también soy flexible y estoy abierto a ajustar mis hábitos según las necesidades específicas de cada situación, asegurando así una gestión del tiempo adaptativa y efectiva."
        },
        {
            "id": 5,
            "question": "¿Cómo descubriste tu pasión por el desarrollo web?",
            "answer": "Desde temprana edad, mi fascinación por la computación me llevó a explorar el mundo de la programación. Mi primo, un desarrollador web de alto nivel, ha sido un referente inspirador que me alentó a adentrarme aún más en este apasionante rubro. Su influencia ha sido clave en mi camino hacia el desarrollo web."
        }
    ]
}

let indexProfessional = 1;
let indexPersonal = 1;


const nextProfessionalQuiestion = (e) => {

    e.preventDefault()

    const titleQuestion = document.querySelectorAll('.about__category__titleQuestion')[0];
    const answerQuestion = document.querySelectorAll('.about__category__answer')[0];
    const indexQuestion = document.querySelectorAll('.about__category__index')[0];
    
    if (indexProfessional == questions.professional.length) {
        indexProfessional = 0;
    } 

    const currentQuiestion = questions.professional[indexProfessional];
    indexQuestion.innerHTML = currentQuiestion.id;
    titleQuestion.innerHTML = currentQuiestion.question;
    answerQuestion.innerHTML = currentQuiestion.answer;
    indexProfessional++;


};

const nextPersonalQuiestion = (e) => {

    e.preventDefault()

    const titleQuestion = document.querySelectorAll('.about__category__titleQuestion')[1];
    const answerQuestion = document.querySelectorAll('.about__category__answer')[1];
    const indexQuestion = document.querySelectorAll('.about__category__index')[1];
    
    if (indexPersonal == questions.personal.length) {
        indexPersonal = 0;
    } 

    const currentQuiestion = questions.personal[indexPersonal];
    indexQuestion.innerHTML = currentQuiestion.id;
    titleQuestion.innerHTML = currentQuiestion.question;
    answerQuestion.innerHTML = currentQuiestion.answer;
    indexPersonal++;
    

};

const nextProfessionalQuiestionBtn = document.querySelectorAll('.about__category__nextQuestion')[0];
nextProfessionalQuiestionBtn.addEventListener('click', nextProfessionalQuiestion);

const nextPersonalQuiestionBtn = document.querySelectorAll('.about__category__nextQuestion')[1];

nextPersonalQuiestionBtn.addEventListener('click', nextPersonalQuiestion);