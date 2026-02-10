<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chanukya Paruchuri - Portfolio | B.Tech CSE at IIITM Gwalior">
    <title>Chanukya Paruchuri | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <!-- Animated Background -->
    <div class="background-animation">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
    </div>

    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#home" class="nav-logo"><span class="logo-text">C</span>hanukya</a>
            <ul class="nav-menu" id="nav-menu">
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#achievements" class="nav-link">Leadership</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger" id="hamburger">
                <span class="bar"></span><span class="bar"></span><span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <p class="hero-greeting">Hello, I'm</p>
                <h1 class="hero-name">
                    <span class="name-first">Chanukya</span>
                    <span class="name-last">Paruchuri</span>
                </h1>
                <div class="typewriter-container">
                    <span class="typewriter-text" id="typewriter"></span>
                    <span class="cursor">|</span>
                </div>
                <p class="hero-description">
                    B.Tech CSE student at <span class="highlight">IIITM Gwalior</span> with experience in
                    Data Science and Machine Learning; skilled in Python, SQL, and building predictive models.
                </p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary"><span>View Projects</span><i
                            class="fas fa-arrow-right"></i></a>
                    <a href="#contact" class="btn btn-secondary"><span>Get In Touch</span><i
                            class="fas fa-envelope"></i></a>
                </div>
                <div class="hero-social">
                    <a href="https://github.com/asura-3036" target="_blank" class="social-link"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/chanukya-paruchuri" target="_blank" class="social-link"><i
                            class="fab fa-linkedin"></i></a>
                    <a href="https://leetcode.com/u/chanukya-3036/" target="_blank" class="social-link"><i class="fas fa-code"></i></a>
                    <a href="mailto:chanukya3036@gmail.com" class="social-link"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="profile-card">
                    <div class="profile-glow"></div>
                    <div class="profile-avatar"><img src="pfp.jpeg" alt="Chanukya Paruchuri" class="avatar-image">
                    </div>
                    <div class="profile-stats">
                        <div class="stat-item"><span class="stat-number" data-count="2">0</span><span
                                class="stat-label">Internships</span></div>
                        <div class="stat-item"><span class="stat-number" data-count="3">0</span><span
                                class="stat-label">Projects</span></div>
                        <div class="stat-item"><span class="stat-number" data-count="4">0</span><span
                                class="stat-label">Languages</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <div class="mouse">
                <div class="wheel"></div>
            </div><span>Scroll Down</span>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about section">
        <div class="container">
            <h2 class="section-title"><span class="title-number">01.</span>About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>I'm a <span class="highlight">Computer Science undergraduate</span> currently pursuing my B.Tech
                        at
                        Indian Institute of Information Technology and Management, Gwalior (2023-2027). I focus on
                        Data Science and Machine Learning.</p>
                    <p>My expertise spans across <span class="highlight">Data Analysis</span>, <span
                            class="highlight">Predictive Modeling</span>, and <span class="highlight">Machine Learning Algorithms</span>. I have experience working with Python, Pandas, Scikit-learn, and
                        various regression techniques.</p>
                    <p>Beyond coding, I've been actively involved in organizing events at IIITM Gwalior, including
                        being a Volunteer for the Mock IPL Auction and working with the Disaster Management Team.</p>
                    <div class="about-highlights">
                        <div class="highlight-item"><i class="fas fa-graduation-cap"></i>
                            <div>
                                <h4>Education</h4>
                                <p>B.Tech CSE, IIITM Gwalior</p>
                            </div>
                        </div>
                        <div class="highlight-item"><i class="fas fa-trophy"></i>
                            <div>
                                <h4>JEE Mains 2023</h4>
                                <p>AIR 14796</p>
                            </div>
                        </div>
                        <div class="highlight-item"><i class="fas fa-code"></i>
                            <div>
                                <h4>DSA Enthusiast</h4>
                                <p>300+ Problems Solved</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <div class="image-frame">
                        <div class="frame-decoration"></div>
                        <div class="code-window">
                            <div class="window-header">
                                <div class="window-dots"><span class="dot red"></span><span
                                        class="dot yellow"></span><span class="dot green"></span></div>
                                <span class="window-title">model.py</span>
                            </div>
                            <pre class="code-content"><code><span class="keyword">import</span> <span class="class-name">pandas</span> <span class="keyword">as</span> <span class="class-name">pd</span>
<span class="keyword">import</span> <span class="class-name">sklearn</span>

<span class="keyword">class</span> <span class="class-name">DataScientist</span>:
    <span class="keyword">name</span> = <span class="string">"Chanukya"</span>
    <span class="keyword">role</span> = <span class="string">"ML Engineer"</span>
    <span class="keyword">skills</span> = [
        <span class="string">"Python"</span>, <span class="string">"Pandas"</span>,
        <span class="string">"Scikit-learn"</span>
    ]
    
    <span class="keyword">def</span> <span class="function">analyze</span>(data):
        <span class="keyword">return</span> insight
</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience section">
        <div class="container">
            <h2 class="section-title"><span class="title-number">02.</span>Experience</h2>
            <div class="projects-grid">
                <!-- Data Science Intern, SkillCraft Technologies -->
                <article class="project-card">
                    <div class="project-content" style="width: 100%;">
                        <div class="project-header"><span class="project-label">Internship</span><span
                                class="project-date">July 2025 - Aug 2025</span></div>
                        <h3 class="project-title">Data Science Intern @ SkillCraft Technologies</h3>
                        <p class="project-description">Applied data science techniques to extract insights and optimize decision-making. Developed predictive and classification models using Python and modern ML frameworks.</p>
                        <ul class="project-features">
                            <li><i class="fas fa-check"></i> Cleaned, analyzed, and visualized real-world datasets</li>
                            <li><i class="fas fa-check"></i> Built predictive models for business use cases</li>
                        </ul>
                        <div class="project-tech"><span>Python</span><span>ML</span><span>Data Analysis</span></div>
                    </div>
                </article>

                <!-- Data Science Intern, Teachnook -->
                <article class="project-card">
                    <div class="project-content" style="width: 100%;">
                        <div class="project-header"><span class="project-label">Internship</span><span
                                class="project-date">May 2024 - June 2024</span></div>
                        <h3 class="project-title">Data Science Intern @ Teachnook</h3>
                        <p class="project-description">Performed Python-based data analysis using Jupyter Notebook. Engineered a sales prediction model for D-Mart using regression techniques.</p>
                        <ul class="project-features">
                            <li><i class="fas fa-check"></i> Interactive dashboards using Tableau</li>
                            <li><i class="fas fa-check"></i> Model deployment with Pickle</li>
                        </ul>
                        <div class="project-tech"><span>Python</span><span>Tableau</span><span>Scikit-learn</span></div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects section">
        <div class="container">
            <h2 class="section-title"><span class="title-number">03.</span>Featured Projects</h2>
            <div class="projects-grid">
                <!-- Project 1: D-Mart Sales Prediction -->
                <article class="project-card featured">
                    <div class="project-image">
                        <div class="project-overlay">
                            <div class="overlay-content"><i class="fas fa-chart-line"></i></div>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-header"><span class="project-label">Data Science</span><span
                                class="project-date">June 2024</span></div>
                        <h3 class="project-title">D-Mart Sales Prediction Analysis</h3>
                        <p class="project-description">Comprehensive data analysis and visualization to identify trends, seasonality, and demand patterns. Built predictive models using <span class="highlight">Lasso Regression</span>, Random Forest, and XGBoost.</p>
                        <ul class="project-features">
                            <li><i class="fas fa-check"></i> Achieved best results using Lasso Regression</li>
                            <li><i class="fas fa-check"></i> Deployed model using Pickle</li>
                            <li><i class="fas fa-check"></i> Hyperparameter tuning & feature selection</li>
                        </ul>
                        <div class="project-tech"><span>Python</span><span>Pandas</span><span>XGBoost</span><span>Lasso</span></div>
                    </div>
                </article>

                <!-- Project 2: Deloitte Australia Data Analytics (Job Simulation) -->
                <article class="project-card">
                    <div class="project-image">
                        <div class="project-overlay">
                            <div class="overlay-content"><i class="fas fa-briefcase"></i></div>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-header"><span class="project-label">Job Simulation</span><span
                                class="project-date">Oct 2025</span></div>
                        <h3 class="project-title">Deloitte Data Analytics Simulation</h3>
                        <p class="project-description">Completed a job simulation involving data analysis and forensic technology. Created interactive dashboards and classified data to draw business conclusions.</p>
                        <ul class="project-features">
                            <li><i class="fas fa-check"></i> Data Dashboard using Tableau</li>
                            <li><i class="fas fa-check"></i> Business insights from raw data</li>
                        </ul>
                        <div class="project-tech">
                            <span>Tableau</span><span>Excel</span><span>Data Analysis</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills section">
        <div class="container">
            <h2 class="section-title"><span class="title-number">04.</span>Technical Skills</h2>
            <div class="skills-content">
                <div class="skills-category">
                    <div class="category-header">
                        <div class="category-icon"><i class="fas fa-code"></i></div>
                        <h3>Languages</h3>
                    </div>
                    <div class="skills-list">
                        <div class="skill-item"><i class="fas fa-code"></i><span>C/C++</span></div>
                        <div class="skill-item"><i class="fab fa-python"></i><span>Python</span></div>
                        <div class="skill-item"><i class="fas fa-database"></i><span>SQL</span></div>
                    </div>
                </div>
                <div class="skills-category">
                    <div class="category-header">
                        <div class="category-icon"><i class="fas fa-chart-line"></i></div>
                        <h3>Data Science</h3>
                    </div>
                    <div class="skills-list">
                        <div class="skill-item"><i class="fas fa-table"></i><span>Pandas</span></div>
                        <div class="skill-item"><i class="fas fa-brain"></i><span>Scikit-learn</span></div>
                        <div class="skill-item"><i class="fas fa-chart-bar"></i><span>Matplotlib</span></div>
                        <div class="skill-item"><i class="fas fa-chart-area"></i><span>Seaborn</span></div>
                        <div class="skill-item"><i class="fas fa-network-wired"></i><span>TensorFlow</span></div>
                        <div class="skill-item"><i class="fas fa-project-diagram"></i><span>XGBoost</span></div>
                        <div class="skill-item"><i class="fas fa-book-open"></i><span>Jupyter Notebook</span></div>
                    </div>
                </div>
                <div class="skills-category">
                    <div class="category-header">
                        <div class="category-icon"><i class="fas fa-tools"></i></div>
                        <h3>Tools & Platforms</h3>
                    </div>
                    <div class="skills-list">
                        <div class="skill-item"><i class="fab fa-git-alt"></i><span>Git</span></div>
                        <div class="skill-item"><i class="fab fa-github"></i><span>GitHub</span></div>
                        <div class="skill-item"><i class="fas fa-code"></i><span>VS Code</span></div>
                        <div class="skill-item"><i class="fas fa-file-alt"></i><span>LaTeX</span></div>
                        <div class="skill-item"><i class="fas fa-table"></i><span>Tableau</span></div>
                    </div>
                </div>
                <div class="skills-category">
                    <div class="category-header">
                        <div class="category-icon"><i class="fas fa-users"></i></div>
                        <h3>Soft Skills</h3>
                    </div>
                    <div class="skills-list">
                        <div class="skill-item"><i class="fas fa-crown"></i><span>Leadership</span></div>
                        <div class="skill-item"><i class="fas fa-clock"></i><span>Time Management</span></div>
                        <div class="skill-item"><i class="fas fa-comments"></i><span>Communication</span></div>
                        <div class="skill-item"><i class="fas fa-sync-alt"></i><span>Adaptability</span></div>
                        <div class="skill-item"><i class="fas fa-hands-helping"></i><span>Teamwork</span></div>
                    </div>
                </div>
            </div>
            <!-- Relevant Coursework -->
            <div class="certifications">
                <h3 class="subsection-title"><i class="fas fa-book"></i>Relevant Coursework</h3>
                <div class="cert-grid">
                    <div class="cert-card">
                        <div class="cert-icon"><i class="fas fa-sitemap"></i></div>
                        <div class="cert-content">
                            <h4>Data Structures</h4>
                            <p>Advanced data organization & algorithms</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <div class="cert-icon"><i class="fas fa-chart-bar"></i></div>
                        <div class="cert-content">
                            <h4>Algorithmic Analysis</h4>
                            <p>Complexity & algorithm design</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <div class="cert-icon"><i class="fas fa-database"></i></div>
                        <div class="cert-content">
                            <h4>Database Management</h4>
                            <p>SQL, normalization, transactions</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <div class="cert-icon"><i class="fas fa-network-wired"></i></div>
                        <div class="cert-content">
                            <h4>Computer Networks</h4>
                            <p>Protocols, networking fundamentals</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <div class="cert-icon"><i class="fas fa-cubes"></i></div>
                        <div class="cert-content">
                            <h4>Object Oriented Programming</h4>
                            <p>OOP principles & design patterns</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <div class="cert-icon"><i class="fas fa-cogs"></i></div>
                        <div class="cert-content">
                            <h4>Operating System</h4>
                            <p>Process management, memory, scheduling</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Achievements Section -->
    <section id="achievements" class="achievements section">
        <div class="container">
            <h2 class="section-title"><span class="title-number">05.</span>Leadership & Volunteering</h2>
            <div class="achievements-grid">
                <div class="achievement-card glass">
                    <div class="achievement-icon"><i class="fas fa-gavel"></i></div>
                    <div class="achievement-content">
                        <h3>Mock IPL Auction</h3>
                        <p>Organized auction with <span class="highlight">20+</span> teams; hosted the event.</p>
                    </div>
                </div>
                <div class="achievement-card glass">
                    <div class="achievement-icon"><i class="fas fa-hands-helping"></i></div>
                    <div class="achievement-content">
                        <h3>Disaster Management Team</h3>
                        <p>Volunteered for DMT activities.</p>
                    </div>
                </div>
            </div>
            <!-- Leadership -->
            <div class="leadership" style="display:none;">
            </div>
            <!-- Coding Profiles -->
            <div class="coding-profiles">
                <h3 class="subsection-title"><i class="fas fa-laptop-code"></i>Coding Profiles</h3>
                <div class="profiles-grid">
                    <a href="https://leetcode.com/" target="_blank" class="profile-card">
                        <div class="profile-icon leetcode"><i class="fas fa-code"></i></div>
                        <div class="profile-info">
                            <h4>LeetCode</h4>
                            <p>Problem Solving</p>
                        </div><i class="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://github.com/" target="_blank" class="profile-card">
                        <div class="profile-icon codeforces"><i class="fab fa-github"></i></div>
                        <div class="profile-info">
                            <h4>GitHub</h4>
                            <p>Open Source Projects</p>
                        </div><i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact section">
        <div class="container">
            <h2 class="section-title"><span class="title-number">06.</span>Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-text">
                    <h3>Let's Build Something Amazing Together</h3>
                    <p>I'm currently looking for new opportunities. Whether you have a question, a project idea, or just
                        want to say hi, I'll get back to you!</p>
                </div>
                <div class="contact-methods">
                    <a href="mailto:chanukya3036@gmail.com" class="contact-card">
                        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                        <div class="contact-info">
                            <h4>Email</h4>
                            <p>chanukya3036@gmail.com</p>
                        </div>
                    </a>
                    <a href="tel:+918712931759" class="contact-card">
                        <div class="contact-icon"><i class="fas fa-phone"></i></div>
                        <div class="contact-info">
                            <h4>Phone</h4>
                            <p>+91-8712931759</p>
                        </div>
                    </a>
                    <a href="https://linkedin.com/in/chanukya-paruchuri" target="_blank" class="contact-card">
                        <div class="contact-icon"><i class="fab fa-linkedin"></i></div>
                        <div class="contact-info">
                            <h4>LinkedIn</h4>
                            <p>Chanukya Paruchuri</p>
                        </div>
                    </a>
                    <a href="https://github.com/asura-3036" target="_blank" class="contact-card">
                        <div class="contact-icon"><i class="fab fa-github"></i></div>
                        <div class="contact-info">
                            <h4>GitHub</h4>
                            <p>Chanukya Paruchuri</p>
                        </div>
                    </a>
                </div>
                <a href="mailto:chanukya3036@gmail.com" class="btn btn-primary btn-large"><span>Say Hello</span><i
                        class="fas fa-paper-plane"></i></a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p class="footer-text">Designed & Built by <span class="highlight">Chanukya Paruchuri</span></p>
                <div class="footer-social">
                    <a href="https://github.com/asura-3036" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/chanukya-paruchuri" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="mailto:chanukya3036@gmail.com"><i class="fas fa-envelope"></i></a>
                </div>
                <p class="footer-copyright">© 2025 All Rights Reserved</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>

</html>
