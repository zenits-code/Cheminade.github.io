# Cheminade.github.io

<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Swann Cheminade — Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
  <meta name="description" content="Portfolio de Swann Cheminade — CV, compétences, projets et contact">
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#">Swann Cheminade</a>
      <nav class="nav" id="nav">
        <a href="#about">A propos</a>
        <a href="#experience">Expérience</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
      <button id="menuToggle" class="menu-toggle" aria-label="Afficher menu">☰</button>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text">
            <h1>Swann Cheminade</h1>
            <p class="lead">Développeur / Designer — Portfolio basé sur le CV</p>
            <p class="intro">Bienvenue sur mon portfolio. Vous pouvez télécharger mon CV ou me contacter via la section contact.</p>
            <div class="actions">
              <a class="btn primary" href="CV_Cheminade_Swann.pdf" download="CV_Cheminade_Swann.pdf">Télécharger le CV (PDF)</a>
              <a class="btn" href="#contact">Me contacter</a>
            </div>
          </div>
          <aside class="hero-card">
            <div class="profile-wrap">
              <img class="profile-pic" src="Photo/scheminade.jpg" alt="Photo de Swann Cheminade">
            </div>
            <ul class="quick-info">
              <li><strong>Email :</strong> swanncheminade@gmail.com</li>
              <li><strong>Téléphone :</strong> 07 66 89 99 67</li>
              <li><strong>Localisation :</strong> 186 ROUTE DE CORBIERE 16100 Boutier Saint-trajant </li>
            </ul>
            <div class="social">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="GitHub">GitHub</a>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section id="about" class="section container">
      <h2>A propos</h2>
      <p>Résumé extrait du CV. Remplacez ce texte par l'accroche professionnelle du CV PDF. Exemple : développeur full-stack avec X années d'expérience, spécialisé en ...</p>
      <div class="skills-grid">
        <div>
          <h3>Spécialité — SISR</h3>
          <p><em>Compétences (en cours d'acquisition) :</em></p>
          <ul>
            <li>Gestion de parc : OCS Inventory, GLPI</li>
            <li>Support aux utilisateurs et gestion des tickets d’incident : GLPI</li>
            <li>Réseau : configuration de switch/commutateur et de routeur Cisco en ligne de commande (CLI)</li>
            <li>Système et réseau : installation et configuration de base d'OS (Windows, Debian, Ubuntu)</li>
            <li>Gestion des comptes et des groupes utilisateurs locaux : Windows 11, Debian, Ubuntu Desktop</li>
            <li>Gestion des comptes, des groupes et des GPO dans un domaine Active Directory</li>
            <li>Gestion de services d'impression et de sauvegarde : Microsoft Windows Server</li>
            <li>Installation du service Web : Apache2 (Debian)</li>
            <li>Installation de base de données : MariaDB (Debian)</li>
          </ul>
        </div>
        <div>
          <h3>Langues</h3>
          <ul>
            <li>Français — Natif</li>
            <li>Anglais — Professionnel</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="experience" class="section alt-bg">
      <div class="container">
        <h2>Expérience & Formation</h2>
        <div class="timeline">
          <div class="item">
            <h3>BTS SIO — Option SISR</h3>
            <span class="meta">2024 — 2025</span>
            <p>Formation en Services Informatiques aux Organisations, spécialité SISR (Solutions d'Infrastructure, Systèmes et Réseaux).</p>
            <ul>
              <li>Réalisations : travaux pratiques et projets de groupe axés sur la conception et la mise en place d'infrastructures réseau.</li>
              <li>Environnement lab : VMware — création et management de machines virtuelles (postes et serveurs), configuration de réseaux virtuels.</li>
              <li>Réseau et services : mise en place de serveurs DHCP pour attribuer des adresses IP aux VMs et configuration des routes pour permettre la communication inter-machines.</li>
              <li>Compétences développées : administration des systèmes (Windows, Debian/Ubuntu), services réseaux (DHCP, DNS basique), virtualisation (VMware), travail en équipe sur projets techniques.</li>
            </ul>
            <p>Exemple de projet en groupe : conception d'un petit parc réseau virtualisé avec serveurs de fichiers, services d'annuaire et clients configurés pour communiquer via DHCP et routage interne.</p>
          </div>
          <div class="item">
            <h3>Stages professionnels</h3>
            <div class="stage">
              <h4>Compagnie de Guyenne — Cognac</h4>
              <ul>
                <li>Stage de 1 mois : découverte des systèmes et réseaux.</li>
                <li>Participation à la configuration et au suivi d'infrastructures.</li>
              </ul>
            </div>
            <div class="stage">
              <h4>JDCG Informatique — Ruffec</h4>
              <ul>
                <li>Stage de 1 mois : .</li>
                <li>Stage de 1 mois : Participation à l’installation et configuration des systèmes d’OS.</li>
              </ul>
            </div>
          </div>
          <div class="item">
            <h3>Formations</h3>
            <ul>
              <li>École 42 - Angoulême (1 mois)</li>
              <li>BTS SIO (Services Informatiques aux Organisations) – Lycée Elie Vinet, Barbezieux (2024-2025)</li>
              <li>Bac STI2D – Lycée C.A. Coulomb, Angoulême (2022-2024)</li>
              <li>Seconde professionnelle système numérique – option A – Lycée Louise Michelle, Ruffec (2021-2022)</li>
              <li>Brevet des collèges – Collège Albert Micheneau, Villefagnan (2021)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section container">
      <h2>Projets</h2>
      <p>Choisissez 3 projets clés à présenter (liens, descriptions, technologies).</p>
      <div class="projects-grid">
        <article class="project">
          <h3>Nom du projet</h3>
          <p>Courte description. Technologies : ...</p>
        </article>
      </div>
    </section>

    <section id="contact" class="section alt-bg container">
      <h2>Contact</h2>
      <p>Remplissez le formulaire ou envoyez un email directement.</p>
        <!-- Formspree integration: replace the ACTION URL with your Formspree endpoint (see README) -->
    <form class="contact-form" action="https://formspree.io/f/mwpyldeg" method="POST">
          <input type="hidden" name="_next" value="thankyou.html">
          <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio">
          <label>Nom<input type="text" name="name" required></label>
          <label>Email<input type="email" name="email" required></label>
          <label>Sujet<input type="text" name="subject" required></label>
          <label>Message<textarea name="message" rows="6" required></textarea></label>
          <input type="hidden" name="_replyto" value="">
          <button class="btn primary" type="submit">Envoyer</button>
        </form>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© <span id="year"></span> Swann Cheminade — Portfolio .</p>
  <p><a href="CV_Cheminade_Swann.pdf" download="CV_Cheminade_Swann.pdf">Télécharger le CV (PDF)</a></p>
    </div>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
