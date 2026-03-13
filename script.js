// --- DONNÉES DE COURS (Inchangé) ---
const coursData = [
    { titre: "Algorithmique", category: "dev", description: "Logique, algorithmes et structures de données.", path: "Ecole/Ecole/Algo/", files: [] },
    { titre: "AP", category: "dev", description: "Ateliers de Professionnalisation.", path: "Ecole/Ecole/AP/", files: ["Création et Mise en Forme de Docume.txt"] },
    { titre: "Bloc 1 ", category: "bloc", description: "Support et mise à disposition de services informatiques.", path: "Ecole/Ecole/B1/", files: [""] },
    { titre: "Bloc 2 ", category: "bloc", description: "Conception et développement d'applications (Spécialité).", path: "Ecole/Ecole/B2/", files: [] },
    { titre: "Bloc 3 ", category: "bloc", description: "Cybersécurité des services informatiques.", path: "Ecole/Ecole/B3/", files: ["Mission.1-reglementation-RGPD.docx", "Sécurité des terminaux.docx", "TD- DONNEES-PERSONNELLES.docx", "TD-hameconnage.docx", "TD-PIA.docx", "TP3-exemple-charte-informatique.pdf", "TPB3.pdf"] },
    { titre: "CEJM", category: "general", description: "Culture Économique, Juridique et Managériale.", path: "Ecole/Ecole/CEJM/", files: ["Analyse des fluctuations économiques de 1991 à 2022.docx", "Entre 1996 et 2022Chomage.docx", "La-Domotique-Chez-Vous-Cest-Chou.pptx"] },
    { titre: "CEJMA", category: "general", description: "CEJM Appliquée (Études de cas).", path: "Ecole/Ecole/CEJMA/", files: ["12SLAM.docx", "Le BYOD.docx", "Le nomadisme dans une organisation.docx"] },
    { titre: "CGE", category: "general", description: "Culture Générale et Expression.", path: "Ecole/Ecole/CGE/", files: ["Castro Nathan Questions 1,3.docx"] },
    { titre: "Anglais", category: "general", description: "Anglais technique et communication.", path: "Ecole/Ecole/Anglais/", files: [] },
    { titre: "Mathématique", category: "dev", description: "Maths pour l'informatique & Calculatrice.", path: "Ecole/Ecole/Math/", files: ["CONVERS.8xp", "Diviseur.8xp", "NOMBREPR.8xp", "Nombre premiers fonctionne a moitié.txt"] },
    { titre: "JAVA", category: "dev", description: "Programmation Orientée Objet Java.", path: "Ecole/Ecole/JAVA/", files: ["JAVA.jar", "TP3-Exo1 et Exo2.zip"] },
    { titre: "PYTHON", category: "dev", description: "Scripts et algorithmes Python.", path: "Ecole/Ecole/Python/", files: ["2nombres et max.py", "chaine_triee.py", "de 1 a 10 boucle for.py", "Distance.py", "Exercices Algorithme Python - 21 - 47.docx", "Intérêts.py", "mystèrelenombre.py", "nombre str.py", "PAIR IMPAIRE.py", "palindrome.py"] },
    { titre: "Certification", category: "general", description: "Diplômes et attestations.", path: "Ecole/Ecole/Certification/", files: ["Attestation_de_suivi.pdf", "Certificat_Module1.pdf"] },
];

const grid = document.getElementById('grid-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('fileModal');
const modalTitle = document.getElementById('modalTitle');
const fileList = document.getElementById('fileList');
const closeBtn = document.querySelector('.close-btn');

function afficherCours(filter = 'all') {
    grid.innerHTML = ''; 
    const coursFiltres = filter === 'all' ? coursData : coursData.filter(c => c.category === filter);

    coursFiltres.forEach(cours => {
        const card = document.createElement('div');
        card.classList.add('card');
        const nbFiles = cours.files.length;
        const fileText = nbFiles > 0 ? `${nbFiles} fichiers` : "Aucun fichier";
        
        card.innerHTML = `
            <div>
                <span class="category">${cours.category.toUpperCase()}</span>
                <h4>${cours.titre}</h4>
                <p>${cours.description}</p>
            </div>
            <div class="card-footer">
                <span class="folder-icon">📂 ${fileText}</span>
                <span>Voir ➜</span>
            </div>
        `;
        card.addEventListener('click', () => openModal(cours));
        grid.appendChild(card);
    });
}

function openModal(cours) {
    modalTitle.textContent = cours.titre;
    fileList.innerHTML = ''; 
    if (cours.files.length === 0) {
        fileList.innerHTML = '<li style="color:#666; font-style:italic;">Aucun fichier disponible pour le moment.</li>';
    } else {
        cours.files.forEach(file => {
            const li = document.createElement('li');
            const fullPath = cours.path + file;
            const extension = file.split('.').pop().toUpperCase();
            li.innerHTML = `<a href="${fullPath}" target="_blank"><span>📄 ${file}</span><span class="file-ext">${extension}</span></a>`;
            fileList.appendChild(li);
        });
    }
    modal.style.display = 'block';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; }

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        afficherCours(btn.dataset.filter);
    });
});

afficherCours();


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2 // L'animation se lance quand 20% de l'élément est visible
});

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// --- GESTION DU FLUX RSS (VEILLE TECH MULTI-SOURCES) ---
const rssContainer = document.getElementById('rss-container');

// Liste de tes sources RSS (Tu peux en ajouter/retirer ici)
const rssSources = [
    'https://www.cert.ssi.gouv.fr/feed/',  
    'https://www.zataz.com/feed/',         
    'https://www.actuia.com/feed/',        
    'https://www.lebigdata.fr/feed'        
];

// Clé API rss2json (Optionnel : si tu as des erreurs, tu devras peut-être créer une clé gratuite sur rss2json.com)
// Pour l'instant, on utilise l'accès public limité.
const apiKey = '0000000000000000000000000000000000000000'; // Laisser vide ou mettre sa clé

async function chargerVeille() {
    rssContainer.innerHTML = '<p style="text-align:center; color:#666;">Chargement de la veille...</p>';
    
    try {
        // On prépare toutes les requêtes en parallèle
        const promises = rssSources.map(url => 
            fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`)
            .then(response => response.json())
        );

        // On attend que tout soit chargé
        const results = await Promise.all(promises);
        
        // On fusionne tous les articles dans une seule liste
        let tousLesArticles = [];
        results.forEach(data => {
            if (data.status === 'ok') {
                // On ajoute le nom de la source à chaque article pour l'affichage
                const articlesAvecSource = data.items.map(item => ({
                    ...item,
                    sourceName: data.feed.title // ex: "ZATAZ", "CERT-FR"
                }));
                tousLesArticles = tousLesArticles.concat(articlesAvecSource);
            }
        });

        // TRI : On classe du plus récent au plus ancien
        tousLesArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        // AFFICHAGE : On garde les 9 plus récents (pour ne pas surcharger la page)
        rssContainer.innerHTML = '';
        tousLesArticles.slice(0, 9).forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            // Formatage de la date
            const datePub = new Date(item.pubDate).toLocaleDateString('fr-FR', {
                day: 'numeric', month: 'short', year: 'numeric'
            });

            // On définit une couleur différente si c'est de l'IA ou de la Cyber (basique)
            let tagColor = '#e74c3c'; // Rouge par défaut
            if (item.sourceName.toLowerCase().includes('actuia') || item.sourceName.toLowerCase().includes('data')) {
                tagColor = '#3498db'; // Bleu pour l'IA
            }

            // On nettoie un peu le titre si besoin
            const titre = item.title.length > 80 ? item.title.substring(0, 80) + '...' : item.title;

            card.innerHTML = `
                <div>
                    <span class="category" style="color:${tagColor}; font-weight:bold;">${item.sourceName}</span>
                    <h4 style="margin-top:10px; font-size:1.1rem;">${titre}</h4>
                    <p style="font-size: 0.85rem; margin-top:10px; color:#888;">${datePub}</p>
                </div>
                <div class="card-footer">
                    <span>📰 Article</span>
                    <a href="${item.link}" target="_blank" style="color:inherit; text-decoration:none; border-bottom:1px dotted #555;">Lire la suite ➜</a>
                </div>
            `;
            rssContainer.appendChild(card);
        });

        if (tousLesArticles.length === 0) {
            rssContainer.innerHTML = '<p>Aucun article trouvé.</p>';
        }

    } catch (error) {
        console.error('Erreur RSS:', error);
        rssContainer.innerHTML = '<p>Erreur de chargement. Vérifiez votre connexion.</p>';
    }
}

chargerVeille();