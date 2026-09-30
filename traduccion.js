const diccionario = {
    "es": {
        "btn_lang": "ES / EN",
        "txt_hola": "¡Hola, estudiante! 👋",
        "txt_bienvenida": "Encuentra tu balance entre estudio, salud y bienestar.",
        "btn_continuar": "CONTINUAR",
        "txt_rutina": "Mi rutina",
        "btn_mis_modulos": "MIS MÓDULOS",
        "txt_ver_todos": "Ver todos",
        "card_pausa_tit": "Pausa<br>Activa",
        "card_pausa_desc": "Rutina de 5 min para estirar y relajar tu cuerpo.",
        "card_pomo_tit": "Reloj<br>Pomodoro",
        "card_pomo_desc": "Técnica: 25 min de enfoque x 5 min de descanso.",
        "tip_titulo": "💡 TIP DEL DÍA",
        "tip_desc": '"Aplica la regla 20-20-20 hoy para cuidar tus ojos. Mira a 20 pies cada 20 minutos."',
        "nav_inicio": "Inicio",
        "nav_modulos": "Módulos",
        "nav_creditos": "Créditos",
        "nav_volver": '<span style="font-size: 18px;">←</span> Volver',
        "tit_header_modulos": "MÓDULOS NET-U",
        "ruta_tit": "Ruta de Aprendizaje",
        "ruta_desc": "Selecciona un módulo interactivo para comenzar:",

        "tit_mod_1": "MÓDULO 1: SALUD VISUAL & PANTALLA",
        "mod1_t1": "Regla 20-20-20",
        "mod1_t2": "Luz azul y sueño",

        "tit_mod_2": "MÓDULO 2: HÁBITOS & POSTURA",
        "mod2_t1": "Ergonomía en escritorio",
        "mod2_t2": "Pausas activas",

        "tit_mod_3": "MÓDULO 3: GESTIÓN DEL TIEMPO",
        "mod3_t1": "Técnica Pomodoro",
        "mod3_t2": "Matriz Eisenhower",

        "tit_mod_4": "MÓDULO 4: PRIVACIDAD & CIBERSEGURIDAD",
        "mod4_t1": "Detección de Phishing",
        "mod4_t2": "Contraseñas y 2FA",

        "tit_mod_5": "MÓDULO 5: SALUD MENTAL Y APOYO",
        "mod5_t1": "Manejo del Estrés (Zona Calma)",
        "mod5_t2": "Evaluación de Redes de Apoyo",

        // --- TEXTOS MÓDULO 1 (ESPAÑOL) ---
        "m1_header_title": "MÓDULO 1",
        "m1_intro_title": "Salud Visual & Pantalla",
        "m1_intro_desc": "Aprende a proteger tus ojos de la fatiga visual y a configurar tu entorno digital para un mejor descanso físico y mental.",
        "m1_i1_title": "1. La Regla 20-20-20",
        "m1_btn_timer_start": "Iniciar descanso (20s)",
        "m1_btn_timer_repeat": "Repetir pausa",
        "m1_timer_msg_init": "Toca el botón para iniciar tu pausa visual.",
        "m1_timer_msg_active": "<strong>¡Aleja la vista!</strong> Mira un objeto a 6 metros de distancia (20 pies).",
        "m1_timer_msg_success": "<strong>¡Excelente!</strong> Tus ojos han descansado. Ya puedes volver a la pantalla.",
        "m1_i2_title": "2. Luz Azul y Sueño",
        "m1_sim_title": "📱 Simulación de Pantalla",
        "m1_sim_desc": "Así se ve tu celular al leer un documento o navegar en redes.",
        "m1_filter_label": "Filtro de Descanso:",
        "m1_filter_msg_off": "<strong>Filtro Desactivado:</strong> La luz azul brillante de la pantalla engaña a tu cerebro haciéndole creer que es de día, bloqueando la melatonina y dificultando el sueño.",
        "m1_filter_msg_on": "<strong>Filtro Activado:</strong> La luz cálida le avisa a tu cerebro que es hora de relajarse, permitiendo la producción de melatonina para un buen descanso.",

        // --- TEXTOS MÓDULO 2 (ESPAÑOL) ---
        "m2_header_title": "MÓDULO 2",
        "m2_intro_title": "Hábitos & Postura",
        "m2_intro_desc": "Corrige tu ergonomía y mantén tu cuerpo en movimiento para evitar la fatiga durante largas sesiones de estudio.",
        "m2_i1_title": "1. Tu Postura Ahora Mismo",
        "m2_check_1": "Espalda recta y apoyada en la silla",
        "m2_check_2": "Pies planos descansando en el suelo",
        "m2_check_3": "Pantalla a la altura de los ojos",
        "m2_posture_success": "¡Excelente! Tu espalda te lo agradecerá. ✨",
        "m2_i2_title": "2. Ruleta de Pausas Activas",
        "m2_roulette_desc": "¿Llevas mucho tiempo sentado? Deja que la app elija un estiramiento rápido para ti.",
        "m2_btn_roulette": "Generar Estiramiento 🎲",
        "m2_ex_1": "Gira el cuello suavemente formando círculos, 5 veces por lado.",
        "m2_ex_2": "Sube los hombros hacia las orejas, sostén 3 segundos y suelta. Repite 5 veces.",
        "m2_ex_3": "Estira los brazos al frente y abre y cierra las manos rápidamente por 15 segundos.",
        "m2_ex_4": "Sin levantarte, estira las piernas y gira los tobillos hacia afuera 10 veces.",
        "m2_ex_5": "Estira los brazos hacia arriba como si quisieras tocar el techo durante 10 segundos.",
        "m2_ex_6": "Cierra los ojos con fuerza por 3 segundos y luego ábrelos relajados. Repite 3 veces.",

        // --- TEXTOS MÓDULO 3 (ESPAÑOL) ---
        "m3_header_title": "MÓDULO 3",
        "m3_intro_title": "Gestión del Tiempo",
        "m3_intro_desc": "Vence la procrastinación utilizando herramientas comprobadas para enfocar tu atención y priorizar tus tareas universitarias.",
        "m3_i1_title": "1. Técnica Pomodoro",
        "m3_btn_focus": "Enfoque (25m)",
        "m3_btn_break": "Descanso (5m)",
        "m3_btn_start": "▶ Iniciar Sesión",
        "m3_btn_pause": "⏸ Pausar",
        "m3_btn_resume": "▶ Continuar",
        "m3_pomo_completed": "Tus Pomodoros Completados:",
        "m3_pomo_empty": "Inicia una sesión para ganar tomates",
        "m3_alert_break": "¡Buen trabajo! Es hora de un descanso.",
        "m3_alert_focus": "Descanso terminado. ¡A enfocarse de nuevo!",

        "m3_i2_title": "2. Clasificador Eisenhower",
        "m3_eisen_desc": "Toca a qué cuadrante pertenece la siguiente tarea:",
        "m3_btn_do": "HACER YA",
        "m3_sub_do": "(Urgente + Importante)",
        "m3_btn_plan": "PLANIFICAR",
        "m3_sub_plan": "(No Urgente + Importante)",
        "m3_btn_delegate": "DELEGAR",
        "m3_sub_delegate": "(Urgente + No Importante)",
        "m3_btn_delete": "ELIMINAR",
        "m3_sub_delete": "(No Urgente + No Importante)",

        "m3_task_1": '"Entrega del proyecto de grado para esta medianoche"',
        "m3_hint_1": "Pista: Si no lo haces hoy, repruebas.",
        "m3_task_2": '"Estudiar para el examen parcial de la próxima semana"',
        "m3_hint_2": "Pista: Es muy importante, pero aún tienes tiempo. Prográmalo.",
        "m3_task_3": '"Responder un formulario de un compañero (toma 2 min)"',
        "m3_hint_3": "Pista: Es rápido/urgente para él, pero no es vital para tu estudio.",
        "m3_task_4": '"Hacer scroll en TikTok viendo memes por 2 horas"',
        "m3_hint_4": "Pista: Ni te urge, ni te aporta a tu vida académica.",
        "m3_task_done": "<strong>¡Felicidades! 🎉</strong><br>Has clasificado todas las tareas. Ya dominas la matriz.",
        "m3_feedback_correct": "¡Correcto! Excelente clasificación. ✅",

        // --- TEXTOS MÓDULO 4 (ESPAÑOL) ---
        "m4_header_title": "MÓDULO 4",
        "m4_intro_title": "Privacidad & Ciberseguridad",
        "m4_intro_desc": "Protege tus datos académicos y personales reconociendo amenazas digitales y creando barreras de seguridad sólidas.",
        "m4_i1_title": "1. Simulador de Phishing",
        "m4_phishing_desc": "Lee el siguiente correo y decide si es real o una estafa:",
        "m4_mail_from": "De:",
        "m4_mail_subject": "Asunto:",
        "m4_mail_subj_txt": "⚠️ AVISO: Bloqueo de cuenta institucional",
        "m4_mail_greet": "Estimado estudiante,",
        "m4_mail_body_1": "Hemos detectado actividad inusual. Tu cuenta será eliminada en",
        "m4_mail_body_2": "12 horas",
        "m4_mail_body_3": "Ingresa tus datos inmediatamente aquí:",
        "m4_btn_safe": "✅ Es Seguro",
        "m4_btn_phish": "🚨 Es Phishing",
        "m4_alert_wrong": "¡Cuidado! Este correo es falso. Revisa el remitente y el enlace.",
        "m4_fb_title": "¡Correcto! Evitaste el ataque.",
        "m4_fb_b1_t": "Dominio falso:",
        "m4_fb_b1_d": "La universidad usa .edu.co, no .xyz.",
        "m4_fb_b2_t": "Tono de urgencia:",
        "m4_fb_b2_d": 'Te presionan con "12 horas" para asustarte.',
        "m4_fb_b3_t": "Enlace dudoso:",
        "m4_fb_b3_d": "No lleva al sitio oficial de la universidad.",

        "m4_i2_title": "2. Creador de Seguridad Total",
        "m4_pwd_desc": "Toca los bloques para construir una contraseña segura:",
        "m4_pwd_weak": "🔓 Estado: Débil",
        "m4_pwd_strong": "🔒 Estado: Fuerte",
        "m4_b_phrase": "Frase",
        "m4_b_nums": "Números",
        "m4_b_symb": "Símbolos",
        "m4_pwd_success": "¡Excelente! Mezclar estos elementos es mucho más seguro que usar fechas de cumpleaños. Pero falta el paso final:",
        "m4_btn_2fa": "📲 Activar 2FA (Autenticador)",
        "m4_sms_header": "💬 Mensaje Nuevo (SMS)",
        "m4_sms_code_txt": "Tu código Net-U es:",
        "m4_sms_secure_txt": "¡Cuenta protegida!",
        "m4_sms_secure_desc": "Con el 2FA, aunque adivinen tu contraseña, no podrán entrar sin tu celular personal.",

        // --- TEXTOS MÓDULO 5 (ESPAÑOL) ---
        "m5_header_title": "MÓDULO 5",
        "m5_intro_title": "Salud Mental & Redes de Apoyo",
        "m5_intro_desc": "Aprende a regular tu estrés académico y descubre la importancia de no aislarte frente a los retos universitarios.",
        "m5_i1_title": "1. Zona de Calma",
        "m5_i1_desc": "Sincroniza tu respiración con el círculo para reducir la ansiedad rápidamente.",
        "m5_circle_init": "Iniciar",
        "m5_circle_inhale": "Inhala...",
        "m5_circle_hold": "Sostén",
        "m5_circle_exhale": "Exhala...",
        "m5_btn_breathe_start": "🌬️ Empezar Ejercicio",
        "m5_btn_breathe_stop": "⏹️ Detener",
        "m5_player_title": "🎧 Focus Audio (Música Chill)",

        "m5_i2_title": "2. Quiz: Tu Perfil de Apoyo",
        "m5_i2_desc": "Descubre cómo manejas la presión respondiendo 3 preguntas honestas.",

        "m5_q1": "1. ¿Qué sueles hacer cuando la carga académica de la universidad te supera?",
        "m5_q1_o1": "A. Me aíslo de todo y dejo de responder mensajes.",
        "m5_q1_o2": "B. Intento resolverlo todo yo solo(a) aunque no duerma.",
        "m5_q1_o3": "C. Hablo con compañeros o tutores para buscar una salida.",

        "m5_q2": "2. Si tienes un problema personal que afecta tus estudios, ¿qué haces?",
        "m5_q2_o1": "A. Lo guardo para mí, a nadie le importan mis problemas.",
        "m5_q2_o2": "B. Trato de separar mi vida personal de la académica sin éxito.",
        "m5_q2_o3": "C. Busco apoyo en mi familia, amigos o bienestar universitario.",

        "m5_q3": "3. ¿Cómo te sientes al compartir tu estrés con otras personas?",
        "m5_q3_o1": "A. Siento que es una pérdida de tiempo o me juzgarán.",
        "m5_q3_o2": "B. Me alivia un poco, pero me cuesta mucho iniciar la charla.",
        "m5_q3_o3": "C. Siento que me quita un peso de encima de inmediato.",

        "m5_res1_title": "Perfil: Lobo Solitario 🐺",
        "m5_res1_desc": "Tiendes a cargar todo el peso sobre ti. <strong>Recomendación:</strong> El aislamiento aumenta la ansiedad. Empieza por compartir un pequeño problema con un compañero de confianza; notarás la diferencia.",
        "m5_res2_title": "Perfil: Independiente en Proceso ⚖️",
        "m5_res2_desc": "Sabes que necesitas ayuda, pero el orgullo o la pena te frenan a veces. <strong>Recomendación:</strong> No hay debilidad en pedir apoyo. Usa los foros y tutores de la universidad, están ahí exactamente para ti.",
        "m5_res3_title": "Perfil: Conectado 🤝",
        "m5_res3_desc": "¡Excelente manejo de tus redes! Sabes reconocer cuándo una situación te supera y buscas el apoyo adecuado. Sigue cultivando la comunicación con tus compañeros y red familiar.",

        // --- TEXTOS CRÉDITOS (ESPAÑOL) ---
        "c_header_title": "CRÉDITOS",
        "c_c1_title": "El Proyecto Net-U App",
        "c_c1_p1": '<span class="highlight-text">Net-U App</span> es una aplicación interactiva móvil, conceptualizada, diseñada y programada en su totalidad por <span class="highlight-text">Diter Steven Rico Quevedo</span>. Nace como una solución tecnológica independiente para brindar herramientas tangibles de organización y bienestar digital en el entorno académico.',
        "c_c1_p2": 'Para apoyar a la plataforma de contenido psicoeducativo de valor, la aplicación está estructurada y potenciada por la campaña <span class="highlight-text">RBUU (Red de Bienestar Universal Universitario)</span>, una iniciativa que nació de la idea principal del autor y se consolidó como una campaña digital multimedia enfocada en promover la importancia de la salud mental y el bienestar emocional en estudiantes universitarios.',
        "c_c2_title": "Equipo de Campaña RBUU",
        "c_c2_p1": "La campaña de contenidos <strong>RBUU</strong> fue estructurada de manera colaborativa bajo la metodología ágil Scrum, orientada a mitigar problemáticas como el estrés por la carga de trabajo, la presión por obtener buenos resultados y la falta de una adecuada gestión del tiempo. Este eje de investigación y producción de contenido fue posible gracias al trabajo conjunto del siguiente equipo:",
        "c_c2_li1": "👤 <strong>Diter Steven Rico Quevedo:</strong> Product Owner y Developer.",
        "c_c2_li2": "👤 <strong>Valentina Quintero Desalvador:</strong> Scrum Master.",
        "c_c2_li3": "👤 <strong>Angie Tatiana Yara Daza:</strong> Principal Developer.",
        "c_c3_title": "Referencias Académicas",
        "c_c3_p1": "Los módulos de bienestar, pausas activas y manejo de la procrastinación presentados en esta aplicación se sustentan en las siguientes investigaciones académicas:",
        "c_c3_ref1": "<strong>Estrés Académico:</strong><br>Barraza, A. (2007). El estrés académico en alumnos de educación media superior: Un estudio comparativo. <em>Revista Electrónica Psicología Científica</em>",
        "c_c3_ref2": "<strong>Gestión del Tiempo:</strong><br>Misra, R., & McKean, M. (2000). College students' academic stress and its relation to their anxiety, time management, and leisure satisfaction. <em>American Journal of Health Studies</em>, 16(1), 41-51.",
        "c_c3_ref3": "<strong>Procrastinación:</strong><br>Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review of quintessential self-regulatory failure. <em>Psychological Bulletin</em>, 133(1), 65-94.",

        //TEXTOS INTRO Y PERFIL ESPAÑOL//
        "intro_entrar": "COMENZAR",
        "p_header": "MI PERFIL",
        "p_title": "Personaliza tu experiencia",
        "p_avatar_lbl": "Selecciona tu avatar:",
        "p_btn_save": "Guardar Cambios",
        "p_msg_save": "¡Perfil actualizado correctamente!",
        "nav_perfil": "Perfil",

        "img_banner": "assets/images/BannerInicioNetU.jpg"
    },
    "en": {
        "btn_lang": "EN / ES",
        "txt_hola": "Hello, student! 👋",
        "txt_bienvenida": "Find your balance between study, health, and wellness.",
        "btn_continuar": "RESUME",
        "txt_rutina": "My routine",
        "btn_mis_modulos": "MY MODULES",
        "txt_ver_todos": "View all",
        "card_pausa_tit": "Active<br>Break",
        "card_pausa_desc": "5 min routine to stretch and relax your body.",
        "card_pomo_tit": "Pomodoro<br>Timer",
        "card_pomo_desc": "Technique: 25 min focus x 5 min break.",
        "tip_titulo": "💡 DAILY TIP",
        "tip_desc": '"Apply the 20-20-20 rule today to protect your eyes. Look 20 feet away every 20 minutes."',
        "nav_inicio": "Home",
        "nav_modulos": "Modules",
        "nav_creditos": "Credits",
        "nav_volver": '<span style="font-size: 18px;">←</span> Back',
        "tit_header_modulos": "NET-U MODULES",
        "ruta_tit": "Learning Path",
        "ruta_desc": "Select an interactive module to begin:",

        "tit_mod_1": "MODULE 1: VISUAL HEALTH & SCREEN",
        "mod1_t1": "20-20-20 Rule",
        "mod1_t2": "Blue light and sleep",

        "tit_mod_2": "MODULE 2: HABITS & POSTURE",
        "mod2_t1": "Desk ergonomics",
        "mod2_t2": "Active breaks",

        "tit_mod_3": "MODULE 3: TIME MANAGEMENT",
        "mod3_t1": "Pomodoro Technique",
        "mod3_t2": "Eisenhower Matrix",

        "tit_mod_4": "MODULE 4: PRIVACY & CYBERSECURITY",
        "mod4_t1": "Phishing Detection",
        "mod4_t2": "Passwords and 2FA",

        "tit_mod_5": "MODULE 5: MENTAL HEALTH AND SUPPORT",
        "mod5_t1": "Stress Management (Calm Zone)",
        "mod5_t2": "Support Networks Assessment",

        // --- TEXTOS MÓDULO 1 (INGLÉS) ---
        "m1_header_title": "MODULE 1",
        "m1_intro_title": "Visual Health & Screen",
        "m1_intro_desc": "Learn to protect your eyes from digital eye strain and configure your digital environment for better physical and mental rest.",
        "m1_i1_title": "1. The 20-20-20 Rule",
        "m1_btn_timer_start": "Start break (20s)",
        "m1_btn_timer_repeat": "Repeat break",
        "m1_timer_msg_init": "Tap the button to start your visual break.",
        "m1_timer_msg_active": "<strong>Look away!</strong> Focus on an object 20 feet (6 meters) away.",
        "m1_timer_msg_success": "<strong>Excellent!</strong> Your eyes have rested. You can now return to the screen.",
        "m1_i2_title": "2. Blue Light and Sleep",
        "m1_sim_title": "📱 Screen Simulation",
        "m1_sim_desc": "This is how your phone looks when reading a document or browsing social media.",
        "m1_filter_label": "Rest Filter:",
        "m1_filter_msg_off": "<strong>Filter Off:</strong> Bright blue light from the screen tricks your brain into thinking it's daytime, blocking melatonin and making sleep difficult.",
        "m1_filter_msg_on": "<strong>Filter On:</strong> Warm light signals your brain that it's time to relax, allowing melatonin production for a good night's rest.",

        // --- TEXTOS MÓDULO 2 (INGLÉS) ---
        "m2_header_title": "MODULE 2",
        "m2_intro_title": "Habits & Posture",
        "m2_intro_desc": "Correct your ergonomics and keep your body moving to prevent fatigue during long study sessions.",
        "m2_i1_title": "1. Your Posture Right Now",
        "m2_check_1": "Straight back, supported by the chair",
        "m2_check_2": "Feet resting flat on the floor",
        "m2_check_3": "Screen at eye level",
        "m2_posture_success": "Excellent! Your back will thank you. ✨",
        "m2_i2_title": "2. Active Breaks Roulette",
        "m2_roulette_desc": "Been sitting too long? Let the app choose a quick stretch for you.",
        "m2_btn_roulette": "Generate Stretch 🎲",
        "m2_ex_1": "Gently roll your neck in circles, 5 times each side.",
        "m2_ex_2": "Bring your shoulders up to your ears, hold for 3 seconds, and release. Repeat 5 times.",
        "m2_ex_3": "Stretch your arms in front of you and quickly open and close your hands for 15 seconds.",
        "m2_ex_4": "Without standing up, stretch your legs and rotate your ankles outward 10 times.",
        "m2_ex_5": "Stretch your arms upward as if trying to touch the ceiling for 10 seconds.",
        "m2_ex_6": "Squeeze your eyes shut for 3 seconds, then open them relaxed. Repeat 3 times.",

        // --- TEXTOS MÓDULO 3 (INGLÉS) ---
        "m3_header_title": "MODULE 3",
        "m3_intro_title": "Time Management",
        "m3_intro_desc": "Beat procrastination using proven tools to focus your attention and prioritize your university tasks.",
        "m3_i1_title": "1. Pomodoro Technique",
        "m3_btn_focus": "Focus (25m)",
        "m3_btn_break": "Break (5m)",
        "m3_btn_start": "▶ Start Session",
        "m3_btn_pause": "⏸ Pause",
        "m3_btn_resume": "▶ Resume",
        "m3_pomo_completed": "Your Completed Pomodoros:",
        "m3_pomo_empty": "Start a session to earn tomatoes",
        "m3_alert_break": "Good job! It's time for a break.",
        "m3_alert_focus": "Break is over. Back to focus!",

        "m3_i2_title": "2. Eisenhower Matrix",
        "m3_eisen_desc": "Tap the quadrant where the following task belongs:",
        "m3_btn_do": "DO IT NOW",
        "m3_sub_do": "(Urgent + Important)",
        "m3_btn_plan": "SCHEDULE IT",
        "m3_sub_plan": "(Not Urgent + Important)",
        "m3_btn_delegate": "DELEGATE IT",
        "m3_sub_delegate": "(Urgent + Not Important)",
        "m3_btn_delete": "DELETE IT",
        "m3_sub_delete": "(Not Urgent + Not Important)",

        "m3_task_1": '"Submit final degree project by midnight tonight"',
        "m3_hint_1": "Hint: If you don't do it today, you fail.",
        "m3_task_2": '"Study for next week\'s midterm exam"',
        "m3_hint_2": "Hint: It's very important, but you still have time. Schedule it.",
        "m3_task_3": '"Fill out a classmate\'s survey (takes 2 mins)"',
        "m3_hint_3": "Hint: It's urgent for them, but not vital for your studies.",
        "m3_task_4": '"Scroll through TikTok watching memes for 2 hours"',
        "m3_hint_4": "Hint: It's neither urgent nor helpful to your academic life.",
        "m3_task_done": "<strong>Congratulations! 🎉</strong><br>You classified all tasks. You've mastered the matrix.",
        "m3_feedback_correct": "Correct! Excellent classification. ✅",

        // --- TEXTOS MÓDULO 4 (INGLÉS) ---
        "m4_header_title": "MODULE 4",
        "m4_intro_title": "Privacy & Cybersecurity",
        "m4_intro_desc": "Protect your academic and personal data by recognizing digital threats and creating solid security barriers.",
        "m4_i1_title": "1. Phishing Simulator",
        "m4_phishing_desc": "Read the following email and decide if it's real or a scam:",
        "m4_mail_from": "From:",
        "m4_mail_subject": "Subject:",
        "m4_mail_subj_txt": "⚠️ NOTICE: Institutional account block",
        "m4_mail_greet": "Dear student,",
        "m4_mail_body_1": "We have detected unusual activity. Your account will be deleted in",
        "m4_mail_body_2": "12 hours",
        "m4_mail_body_3": "Enter your details immediately here:",
        "m4_btn_safe": "✅ It's Safe",
        "m4_btn_phish": "🚨 It's Phishing",
        "m4_alert_wrong": "Careful! This email is fake. Check the sender and the link.",
        "m4_fb_title": "Correct! You avoided the attack.",
        "m4_fb_b1_t": "Fake domain:",
        "m4_fb_b1_d": "The university uses .edu.co, not .xyz.",
        "m4_fb_b2_t": "Urgency tone:",
        "m4_fb_b2_d": 'They pressure you with "12 hours" to scare you.',
        "m4_fb_b3_t": "Sketchy link:",
        "m4_fb_b3_d": "It doesn't lead to the university's official site.",

        "m4_i2_title": "2. Total Security Creator",
        "m4_pwd_desc": "Tap the blocks to build a strong password:",
        "m4_pwd_weak": "🔓 Status: Weak",
        "m4_pwd_strong": "🔒 Status: Strong",
        "m4_b_phrase": "Phrase",
        "m4_b_nums": "Numbers",
        "m4_b_symb": "Symbols",
        "m4_pwd_success": "Excellent! Mixing these elements is much safer than using birthdays. But the final step is missing:",
        "m4_btn_2fa": "📲 Activate 2FA (Authenticator)",
        "m4_sms_header": "💬 New Message (SMS)",
        "m4_sms_code_txt": "Your Net-U code is:",
        "m4_sms_secure_txt": "Account protected!",
        "m4_sms_secure_desc": "With 2FA, even if they guess your password, they won't be able to log in without your personal phone.",

        // --- TEXTOS MÓDULO 5 (INGLÉS) ---
        "m5_header_title": "MODULE 5",
        "m5_intro_title": "Mental Health & Support",
        "m5_intro_desc": "Learn to manage academic stress and discover the importance of not isolating yourself when facing university challenges.",
        "m5_i1_title": "1. Calm Zone",
        "m5_i1_desc": "Sync your breathing with the circle to quickly reduce anxiety.",
        "m5_circle_init": "Start",
        "m5_circle_inhale": "Inhale...",
        "m5_circle_hold": "Hold",
        "m5_circle_exhale": "Exhale...",
        "m5_btn_breathe_start": "🌬️ Start Exercise",
        "m5_btn_breathe_stop": "⏹️ Stop",
        "m5_player_title": "🎧 Focus Audio (Chill Music)",

        "m5_i2_title": "2. Quiz: Your Support Profile",
        "m5_i2_desc": "Find out how you handle pressure by honestly answering 3 questions.",

        "m5_q1": "1. What do you usually do when university workload overwhelms you?",
        "m5_q1_o1": "A. I isolate myself and stop replying to messages.",
        "m5_q1_o2": "B. I try to solve everything on my own even if I lose sleep.",
        "m5_q1_o3": "C. I talk to classmates or tutors to find a solution.",

        "m5_q2": "2. If a personal problem affects your studies, what do you do?",
        "m5_q2_o1": "A. I keep it to myself, nobody cares about my problems.",
        "m5_q2_o2": "B. I try to separate personal life from academic life without success.",
        "m5_q2_o3": "C. I seek support from family, friends, or university wellness.",

        "m5_q3": "3. How do you feel when sharing your stress with others?",
        "m5_q3_o1": "A. I feel like it's a waste of time or they'll judge me.",
        "m5_q3_o2": "B. It relieves me a bit, but it's very hard for me to start the talk.",
        "m5_q3_o3": "C. I feel a weight lifted off my shoulders immediately.",

        "m5_res1_title": "Profile: Lone Wolf 🐺",
        "m5_res1_desc": "You tend to carry all the weight on yourself. <strong>Recommendation:</strong> Isolation increases anxiety. Start by sharing a small problem with a trusted classmate; you'll notice the difference.",
        "m5_res2_title": "Profile: Independent in Progress ⚖️",
        "m5_res2_desc": "You know you need help, but pride or embarrassment holds you back sometimes. <strong>Recommendation:</strong> There is no weakness in asking for support. Use the university forums and tutors, they are there exactly for you.",
        "m5_res3_title": "Profile: Connected 🤝",
        "m5_res3_desc": "Excellent management of your networks! You know when a situation is too much and seek proper support. Keep cultivating communication with your peers and family network.",

        // --- TEXTOS CRÉDITOS (INGLÉS) ---
        "c_header_title": "CREDITS",
        "c_c1_title": "The Net-U App Project",
        "c_c1_p1": '<span class="highlight-text">Net-U App</span> is an interactive mobile application, conceptualized, designed, and programmed entirely by <span class="highlight-text">Diter Steven Rico Quevedo</span>. It was born as an independent technological solution to provide tangible digital organization and wellness tools in the academic environment.',
        "c_c1_p2": 'To support the valuable psychoeducational content platform, the application is structured and powered by the <span class="highlight-text">RBUU (Universal University Wellness Network)</span> campaign, an initiative born from the author\'s main idea and consolidated as a multimedia digital campaign focused on promoting the importance of mental health and emotional well-being in university students.',
        "c_c2_title": "RBUU Campaign Team",
        "c_c2_p1": "The <strong>RBUU</strong> content campaign was collaboratively structured under the agile Scrum methodology, aimed at mitigating issues such as workload stress, pressure to achieve good results, and poor time management. This research and content production axis was made possible thanks to the joint work of the following team:",
        "c_c2_li1": "👤 <strong>Diter Steven Rico Quevedo:</strong> Product Owner & Developer.",
        "c_c2_li2": "👤 <strong>Valentina Quintero Desalvador:</strong> Scrum Master.",
        "c_c2_li3": "👤 <strong>Angie Tatiana Yara Daza:</strong> Principal Developer.",
        "c_c3_title": "Academic References",
        "c_c3_p1": "The wellness, active breaks, and procrastination management modules presented in this application are supported by the following academic research:",
        "c_c3_ref1": "<strong>Academic Stress:</strong><br>Barraza, A. (2007). El estrés académico en alumnos de educación media superior: Un estudio comparativo. <em>Revista Electrónica Psicología Científica</em>",
        "c_c3_ref2": "<strong>Time Management:</strong><br>Misra, R., & McKean, M. (2000). College students' academic stress and its relation to their anxiety, time management, and leisure satisfaction. <em>American Journal of Health Studies</em>, 16(1), 41-51.",
        "c_c3_ref3": "<strong>Procrastination:</strong><br>Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review of quintessential self-regulatory failure. <em>Psychological Bulletin</em>, 133(1), 65-94.",

        //TEXTOS INTRO Y PERFIL INGLES//
        "intro_entrar": "START",
        "p_header": "MY PROFILE",
        "p_title": "Customize your experience",
        "p_avatar_lbl": "Select your avatar:",
        "p_btn_save": "Save Changes",
        "p_msg_save": "Profile successfully updated!",
        "nav_perfil": "Profile",

        "img_banner": "assets/images/BannerInicioNetU_EN.jpg"
    }
};

function aplicarIdioma() {
    // Lee el idioma guardado, o usa 'es' por defecto
    const idioma = localStorage.getItem('NetU_Idioma') || 'es';

    // Busca todos los elementos HTML marcados para traducir
    const elementos = document.querySelectorAll('[data-i18n]');

    elementos.forEach(el => {
        const clave = el.getAttribute('data-i18n');

        // Verifica si la clave existe en el diccionario
        if (diccionario[idioma] && diccionario[idioma][clave]) {

            // Si el elemento es una IMAGEN, cambia su ruta (src)
            if (el.tagName.toLowerCase() === 'img') {
                el.src = diccionario[idioma][clave];
            }
            // Si es texto o botón, cambia su contenido HTML
            else {
                el.innerHTML = diccionario[idioma][clave];
            }
        }
    });
}

function alternarIdioma(e) {
    if (e) e.preventDefault();
    const idiomaActual = localStorage.getItem('NetU_Idioma') || 'es';
    const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';

    // Guarda el nuevo idioma en la memoria y actualiza la pantalla
    localStorage.setItem('NetU_Idioma', nuevoIdioma);
    aplicarIdioma();
}

// Ejecuta la traducción apenas carga la página
document.addEventListener('DOMContentLoaded', () => {
    aplicarIdioma();

    // Vincula el botón de ES/EN en el header
    const btnTraduccion = document.getElementById('btn-traduccion');
    if (btnTraduccion) {
        btnTraduccion.addEventListener('click', alternarIdioma);
    }
});