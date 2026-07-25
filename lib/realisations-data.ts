export interface Realisation {
  id: number;
  url: string;
  title: string;
  category: "Entreprises" | "Particuliers" | "Bébé" | "Accessoires";
  desc: string;
}

export const REALISATIONS: Realisation[] = [
  {
    id: 1,
    url: "/images/realisations/sac-personnalise-brode-octavia.webp",
    title: "Sac à Dos Octavia",
    category: "Bébé",
    desc: "Petit sac à dos en velours côtelé rose avec rabat fleuri et prénom brodé.",
  },
  {
    id: 2,
    url: "/images/realisations/poules-decoratives-brodees.webp",
    title: "Poules Décoratives",
    category: "Accessoires",
    desc: "Série de poules en tissu aux motifs variés pour une décoration artisanale.",
  },
  {
    id: 3,
    url: "/images/realisations/petit-sac-motif-brode.webp",
    title: "Sac à Langer Motifs",
    category: "Bébé",
    desc: "Grand sac de voyage ou à langer avec motifs animaux et coeurs.",
  },
  {
    id: 4,
    url: "/images/realisations/serviette-personnalisee-lea-velo.webp",
    title: "Serviette Léa",
    category: "Particuliers",
    desc: "Serviette éponge avec broderie détaillée d'un vélo fleuri et prénom.",
  },
  {
    id: 5,
    url: "/images/realisations/paniers-brodes-personnalises-pio.webp",
    title: "Panier de Rangement Pio",
    category: "Bébé",
    desc: "Paniers en tissu coordonnés avec lingettes lavables et prénom brodé.",
  },
  {
    id: 6,
    url: "/images/realisations/serviette-brodee-happy-cats.webp",
    title: "Serviette Happy Cats",
    category: "Particuliers",
    desc: "Broderie ludique d'une rangée de chats colorés sur serviette beige.",
  },
  {
    id: 7,
    url: "/images/realisations/trousse-velours-rose-brodee.webp",
    title: "Trousse Velours",
    category: "Accessoires",
    desc: "Trousse de toilette en velours côtelé rose avec doublure fleurie.",
  },
  {
    id: 8,
    url: "/images/realisations/protege-carnet-sante-animaux.webp",
    title: "Protège Carnet Santé",
    category: "Bébé",
    desc: "Housse de protection personnalisée avec motifs renard, élan et raton laveur.",
  },
  {
    id: 9,
    url: "/images/realisations/banane-brodee-je-roule-ma-bosse.webp",
    title: "Sac Banane Message",
    category: "Accessoires",
    desc: "Banane XL grise avec texte humoristique brodé en doré.",
  },
  {
    id: 10,
    url: "/images/realisations/ourson-brode-serviette-naissance.webp",
    title: "Serviette Ourson",
    category: "Bébé",
    desc: "Broderie douce d'un ours en peluche avec nœud vert sur éponge blanche.",
  },
  {
    id: 11,
    url: "/images/realisations/chien-broderie-serviette-detail.webp",
    title: "Portraits Chiens",
    category: "Particuliers",
    desc: "Portrait double de chiens (Orphée & Nala) réalisé en broderie haute précision.",
  },
  {
    id: 12,
    url: "/images/realisations/serviette-brodee-chien-clyne.webp",
    title: "Portrait Clyne",
    category: "Particuliers",
    desc: "Broderie réaliste d'un Border Collie avec le nom de l'animal.",
  },
  {
    id: 13,
    url: "/images/realisations/petit-sac-motif-brode.webp",
    title: "Trousse de Toilette Fleur Cuir",
    category: "Accessoires",
    desc: "Trousse de toilette avec poche intérieure et fleur en cuir rouge brodée.",
  },
  {
    id: 14,
    url: "/images/realisations/grenouille-rigolote-brodee.webp",
    title: "Souris de Noël",
    category: "Particuliers",
    desc: "Petite souris brodée avec son cadeau, idéale pour les fêtes.",
  },
  {
    id: 15,
    url: "/images/realisations/cheval-brode-serviette-blanche.webp",
    title: "Cheval Majestueux",
    category: "Particuliers",
    desc: "Broderie complexe d'une tête de cheval avec détails de crinière.",
  },
  {
    id: 16,
    url: "/images/realisations/trousse-toilette-transparente-personnalisee.webp",
    title: "Trousse Transparente",
    category: "Accessoires",
    desc: "Pochette de voyage avec fenêtres transparentes et détails à pois bleus.",
  },
  {
    id: 17,
    url: "/images/realisations/pochette-brodee-motif-moto.webp",
    title: "Étui Moto",
    category: "Accessoires",
    desc: "Housse de protection bleue avec broderie dynamique de motocross.",
  },
  {
    id: 18,
    url: "/images/realisations/pochette-personnalisee-marylou.webp",
    title: "Pochette Marylou",
    category: "Accessoires",
    desc: "Housse coordonnée avec prénom brodé en bleu profond.",
  },
  {
    id: 19,
    url: "/images/realisations/trousse-toilette-eponge-brodee.webp",
    title: "Trousse Nid d'Abeille",
    category: "Accessoires",
    desc: "Grande trousse en tissu gaufre marron avec étiquette simili-cuir.",
  },
  {
    id: 20,
    url: "/images/realisations/bavoir-poissons-j-peux-pas-j-ai-biberon.webp",
    title: "Serviette Léo Mer",
    category: "Bébé",
    desc: "Thème marin avec baleine, tortue et crabe pour le petit Léo.",
  },
  {
    id: 21,
    url: "/images/realisations/sac-dos-lion-flove.webp",
    title: "Sac à Dos Lion",
    category: "Bébé",
    desc: "Sac enfant vert sapin avec broderie Simba et prénom Flove.",
  },
  {
    id: 22,
    url: "/images/realisations/bavoir-bebe-mon-premier-noel.webp",
    title: "Bavoir Premier Noël",
    category: "Bébé",
    desc: "Bavoir éponge beige et tissu rennes, brodage festif.",
  },
  {
    id: 23,
    url: "/images/realisations/bavoir-mickey-j-peux-pas-j-ai-biberon.webp",
    title: "Bavoir Mickey",
    category: "Bébé",
    desc: "Humour et finesse avec ce bavoir Mickey Mouse rouge et blanc.",
  },
  {
    id: 24,
    url: "/images/realisations/bavoir-souris-mini-mais-costaud.webp",
    title: "Bavoir Mini Costaud",
    category: "Bébé",
    desc: "Bavoir vert olive avec souris florale et texte brodé.",
  },
  {
    id: 25,
    url: "/images/realisations/bavoir-noel-vert-rennes.webp",
    title: "Bavoir Noël Vert",
    category: "Bébé",
    desc: "Modèle spécial fêtes avec tissu imprimé forêt et rennes.",
  },
  {
    id: 26,
    url: "/images/realisations/bavoir-peppa-pig-mini-mais-costaud.webp",
    title: "Bavoir Peppa Pig",
    category: "Bébé",
    desc: "Personnage favori avec texte personnalisé sur éponge rose.",
  },
  {
    id: 27,
    url: "/images/realisations/bavoir-lion-j-peux-pas-j-ai-biberon.webp",
    title: "Bavoir Lion Mint",
    category: "Bébé",
    desc: "Tissu bulles menthe à l'eau et broderie lionne.",
  },
  {
    id: 28,
    url: "/images/realisations/bavoir-stitch-rose-c-est-mon-ami.webp",
    title: "Bavoir Stitch",
    category: "Bébé",
    desc: "Douceur rose avec le personnage de Stitch brodé.",
  },
  {
    id: 29,
    url: "/images/realisations/bavoir-poissons-j-peux-pas-j-ai-biberon.webp",
    title: "Bavoir Poissons",
    category: "Bébé",
    desc: "Éponge marine et tissu à motifs poissons bleus.",
  },
  {
    id: 30,
    url: "/images/realisations/bavoir-noel-jaune-rennes.webp",
    title: "Bavoir Noël Jaune",
    category: "Bébé",
    desc: "Variante lumineuse en jaune moutarde pour les fêtes.",
  },
  {
    id: 31,
    url: "/images/realisations/sac-main-lin-broderie-discrete.webp",
    title: "Sac à Main Lin",
    category: "Accessoires",
    desc: "Petit sac élégant en lin beige with bandoulière à motifs ethniques.",
  },
  {
    id: 32,
    url: "/images/realisations/trousse-final-rotated.webp",
    title: "Banane Velours Violet",
    category: "Accessoires",
    desc: "Accessoire tendance avec bandoulière large travaillée.",
  },
  {
    id: 33,
    url: "/images/realisations/doudou-bavoir-mae-graffiti.webp",
    title: "Doudou Mae",
    category: "Bébé",
    desc: "Style urbain graffiti brodé sur doudou plat vert.",
  },
  {
    id: 34,
    url: "/images/realisations/chien-broderie-serviette-detail.webp",
    title: "Détail Chien",
    category: "Particuliers",
    desc: "Gros plan sur une broderie haute fidélité de portrait canin.",
  },
  {
    id: 35,
    url: "/images/realisations/serviette-brodee-chien-marie.webp",
    title: "Serviette Marie",
    category: "Particuliers",
    desc: "Chien blanc (Samoyède) brodé sur éponge marron foncé.",
  },
  {
    id: 36,
    url: "/images/realisations/serviette-brodee-audi-axel.webp",
    title: "Serviette Audi Axel",
    category: "Particuliers",
    desc: "Set de toilette bleu canard with voiture Audi brodée.",
  },
  {
    id: 37,
    url: "/images/realisations/pandas-brodes-bambou.webp",
    title: "Duo Pandans",
    category: "Bébé",
    desc: "Broderie de deux pandas jouant with du bambou sur serviette.",
  },
  {
    id: 38,
    url: "/images/realisations/monstre-rigolo-brode.webp",
    title: "Monstre Rigolo",
    category: "Bébé",
    desc: "Gros yeux et sourire pour cette broderie originale sur éponge verte.",
  },
  {
    id: 39,
    url: "/images/realisations/serviette-brodee-tendre-moment.webp",
    title: "Serviette Tendre Moment",
    category: "Particuliers",
    desc: "Calligraphie élégante brodée sur éponge grise à pointillés.",
  },
  {
    id: 40,
    url: "/images/realisations/chat-orange-brode-serviette.webp",
    title: "Petit Chat Orange",
    category: "Particuliers",
    desc: "Silhouette de chaton réalisée en remplissage de fil orange.",
  },
  {
    id: 41,
    url: "/images/realisations/fleur-noire-stylisee-broderie.webp",
    title: "Fleur Stylisée",
    category: "Particuliers",
    desc: "Design minimaliste d'une fleur noire sur support blanc.",
  },
  {
    id: 42,
    url: "/images/realisations/serviette-happy-cats-multicouleurs.webp",
    title: "Happy Cats Multi",
    category: "Particuliers",
    desc: "Version colorée de la broderie chats sur serviette éponge.",
  },
  {
    id: 44,
    url: "/images/realisations/canard-lunettes-whatever-brode.webp",
    title: "Canard Whatever",
    category: "Particuliers",
    desc: "Côté décalé with ce canard à lunettes de soleil.",
  },
  {
    id: 45,
    url: "/images/realisations/pere-noel-brode-traditionnel.webp",
    title: "Père Noël",
    category: "Particuliers",
    desc: "Grande broderie de Noël colorée with sac de cadeaux.",
  },
  {
    id: 46,
    url: "/images/realisations/bavoir-bebe-noel-rouge.webp",
    title: "Bavoir Noël Rouge",
    category: "Bébé",
    desc: "Éponge rouge intense with message de Noël brodé.",
  },
  {
    id: 47,
    url: "/images/realisations/licorne-brodee-trousse-serviette.webp",
    title: "Ensemble Licorne",
    category: "Bébé",
    desc: "Duo trousse et serviette rose with licorne arc-en-ciel.",
  },
  {
    id: 48,
    url: "/images/realisations/grenouille-rigolote-brodee.webp",
    title: "Grenouille",
    category: "Bébé",
    desc: "Sourire vert brodé sur serviette de toilette pour enfant.",
  },
  {
    id: 49,
    url: "/images/realisations/cheval-brode-serviette-blanche.webp",
    title: "Serviette Pauline",
    category: "Particuliers",
    desc: "Cheval au galop brodé with précision.",
  },
  {
    id: 50,
    url: "/images/realisations/serviette-brodee-tendre-moment.webp",
    title: "Serviette Christelle",
    category: "Particuliers",
    desc: "Motif floral brun et prénom sur éponge écrue.",
  },
  {
    id: 51,
    url: "/images/realisations/serviette-theo.webp",
    title: "Serviette Theo",
    category: "Bébé",
    desc: "Serviettes grises with broderies dorées du prénom 'THEO' - motifs patte de chat et chiots.",
  },
  {
    id: 52,
    url: "/images/realisations/serviette-brodee-van-surf.webp",
    title: "Van Surf",
    category: "Particuliers",
    desc: "Thème évasion with van vintage, planches et fleurs d'hibiscus.",
  },
  {
    id: 53,
    url: "/images/realisations/banane-moumoute-blanche-moderne.webp",
    title: "Banane Moumoute",
    category: "Accessoires",
    desc: "Sac banane en tissu polaire blanc, ultra doux et moderne.",
  },
  {
    id: 54,
    url: "/images/realisations/2b-couverture-collection-1.webp",
    title: "2B Couverture - Collection T-shirts",
    category: "Entreprises",
    desc: "Collection de t-shirts professionnels with logo brodé 2B Couverture en noir, camel et gris.",
  },
  {
    id: 55,
    url: "/images/realisations/2b-couverture-collection-2.webp",
    title: "2B Couverture - Uniformes Complets",
    category: "Entreprises",
    desc: "Ensemble complet d'uniformes d'équipe : t-shirts, polos et hoodies with logo brodé.",
  },
  {
    id: 56,
    url: "/images/realisations/2b-couverture-hoodie.webp",
    title: "2B Couverture - Hoodie Professionnel",
    category: "Entreprises",
    desc: "Hoodie noir with logo brodé 2B Couverture, idéal pour les équipes professionnelles.",
  },
  {
    id: 57,
    url: "/images/realisations/bebe-doudou.webp",
    title: "Gigoteuse Bientôt Bébé",
    category: "Bébé",
    desc: "Gigoteuse verte with broderie 'BIENTÔT BÉBÉ' et tissu blanc aux motifs animaux tendres.",
  },
  {
    id: 58,
    url: "/images/realisations/elyo-alt.webp",
    title: "Serviette Elyo",
    category: "Particuliers",
    desc: "Serviette de toilette with motif poissons bleus et broderie du prénom 'ELYO' en bleu ciel.",
  },
  {
    id: 59,
    url: "/images/realisations/sac-dessin.webp",
    title: "Sac Manga",
    category: "Accessoires",
    desc: "Sac with motif manga/anime et broderies colorées, design urbain et tendance.",
  },
  {
    id: 60,
    url: "/images/realisations/trousse-toilette-personnalisee-broderie-prenom-louna-sandrine-couture-normandie.webp",
    title: "Trousse Louna",
    category: "Accessoires",
    desc: "Trousse de toilette personnalisée with broderie du prénom Louna, rouge.",
  },
  {
    id: 61,
    url: "/images/realisations/interieur-trousse-personnalisee-motif-chien-creation-artisanale-normandie.webp",
    title: "Intérieur Trousse Chiens",
    category: "Accessoires",
    desc: "Intérieur doublé with de jolis motifs de chiens pour cette création artisanale.",
  },
  {
    id: 62,
    url: "/images/realisations/pochette-velours-cotele-bleu-marine-brodee-simon-couture-france.webp",
    title: "Pochette Simon",
    category: "Accessoires",
    desc: "Pochette en velours côtelé bleu marine élégante with prénom Simon brodé en jaune.",
  },
  {
    id: 63,
    url: "/images/realisations/interieur-pochette-velours-personnalisee-motif-mickey-sandrine-couture.webp",
    title: "Intérieur Mickey",
    category: "Accessoires",
    desc: "Doublure amusante with motifs Mickey Mouse pour cette pochette en velours.",
  },
  {
    id: 64,
    url: "/images/realisations/trousse-couture-artisanale-motif-pattes-chien-normandie.webp",
    title: "Trousse Pattes de Chien",
    category: "Accessoires",
    desc: "Trousse pratique de couleur claire ornée de discrets motifs de pattes de chien.",
  },
  {
    id: 65,
    url: "/images/realisations/trousse-maquillage-fille-brodee-aimee-creation-sur-mesure-normandie.webp",
    title: "Trousse Aimée",
    category: "Accessoires",
    desc: "Petite trousse de maquillage rose pastel et blanc with broderie du prénom Aimée.",
  },
  {
    id: 66,
    url: "/images/realisations/trousse-toilette-homme-velours-cotes-brodee-mika-artisanat-france.webp",
    title: "Trousse Mika",
    category: "Accessoires",
    desc: "Trousse de toilette pour homme noire en velours à côtes, brodée Mika.",
  },
  {
    id: 67,
    url: "/images/realisations/serviette-bain-brodee-personnalisee-medieval-fantastique-robertot-normandie.webp",
    title: "Serviette Médiéval",
    category: "Particuliers",
    desc: "Serviette de bain with élégante broderie dorée sur le thème fantastique.",
  },
  {
    id: 68,
    url: "/images/realisations/sac-linge-enfant-motif-dinosaure-personnalise-mae-sandrine-couture-normandie.webp",
    title: "Sac à Linge Maé",
    category: "Bébé",
    desc: "Sac en tissu imprimé dinosaures, idéal pour le linge des plus petits.",
  },
  {
    id: 69,
    url: "/images/realisations/drap-bain-personnalise-julian-logo-psg-broderie-sur-mesure-france.webp",
    title: "Serviette Julian PSG",
    category: "Particuliers",
    desc: "Drap de bain personnalisé with l'écusson du PSG et le prénom Julian brodé.",
  },
  {
    id: 70,
    url: "/images/realisations/couverture-plaid-vert-brode-smiley-peace-love-creation-normandie.webp",
    title: "Plaid Peace & Love",
    category: "Particuliers",
    desc: "Un grand plaid vert original with le symbole Peace & Love brodé.",
  },
  {
    id: 71,
    url: "/images/realisations/plaid-vert-personnalise-smiley-yeux-coeurs-couture-artisanale-france.webp",
    title: "Plaid Smiley Coeurs",
    category: "Particuliers",
    desc: "Couverture douillette verte with un grand motif de smiley amoureux.",
  },
  {
    id: 72,
    url: "/images/realisations/serviette-eponge-grise-brodee-couvreur-adrien-idee-cadeau-normandie.webp",
    title: "Serviette Adrien Couvreur",
    category: "Particuliers",
    desc: "Cadeau humoristique et personnalisé pour le couvreur Adrien sur serviette grise.",
  },
  {
    id: 73,
    url: "/images/realisations/canevas-serviette-enfant-broderie-ourson-prenom-luka-sandrine-couture.webp",
    title: "Serviette Ourson Luka",
    category: "Bébé",
    desc: "Mignonne serviette pour bébé with un bébé ourson sortant de sa cachette pour Luka.",
  },
  {
    id: 74,
    url: "/images/realisations/serviette-toilette-fille-broderie-raiponce-juliette-creation-normandie.webp",
    title: "Serviette Raiponce",
    category: "Bébé",
    desc: "Broderie de la princesse Raiponce pleine de détails colorés pour Juliette.",
  },
  {
    id: 75,
    url: "/images/realisations/drap-bain-garcon-broderie-spiderman-personnalise-noe-couturiere-france.webp",
    title: "Serviette Spider-Man Noé",
    category: "Bébé",
    desc: "Le super-héros Spider-Man en pleine action brodé sur ce drap de bain pour Noé.",
  },
  {
    id: 76,
    url: "/images/realisations/serviette-blanche-brodee-je-t-aime-maman-palmiers-cadeau-sandrine-couture.webp",
    title: "Serviette Cadeau Maman",
    category: "Particuliers",
    desc: "Une belle pensée ensoleillée pour la Fête des Mères ou pour faire plaisir.",
  },
  {
    id: 77,
    url: "/images/realisations/serviette-eponge-personnalisee-notre-mamie-adoree-broderie-coeur-normandie.webp",
    title: "Serviette Mamie Adorée",
    category: "Particuliers",
    desc: "Un message affectueux au cœur brodé pour notre mamie adorée.",
  },
  {
    id: 78,
    url: "/images/realisations/broderie-vetement-professionnel-entreprise-duha-loc-sandrine-couture-normandie.webp",
    title: "Broderie DUHA-LOC",
    category: "Entreprises",
    desc: "Personnalisation brodée pour vêtements d'entreprise with logo et numéro de contact.",
  },
  {
    id: 79,
    url: "/images/realisations/pochette-velours-cotele-personnalisee-prenom-marylou-creation-artisanale-normandie.webp",
    title: "Pochette Marylou",
    category: "Accessoires",
    desc: "Belle pochette en velours côtelé beige, personnalisée with le prénom Marylou.",
  },
  {
    id: 80,
    url: "/images/realisations/trousse-velours-motif-voiture-4x4-brodee-sandrine-couture-france.webp",
    title: "Trousse 4x4",
    category: "Accessoires",
    desc: "Trousse en velours with une superbe broderie d'un 4x4 tout-terrain.",
  },
  {
    id: 81,
    url: "/images/realisations/serviette-brodee-humoristique-poule-couteau-creation-originale-normandie.webp",
    title: "Serviette Poule Originale",
    category: "Particuliers",
    desc: "Broderie humoristique d'une poule très apprêtée sur une serviette blanche.",
  },
  {
    id: 82,
    url: "/images/realisations/serviette-bain-broderie-poule-chef-cuisinier-artisanat-francais.webp",
    title: "Serviette Poule Chef",
    category: "Particuliers",
    desc: "Poule cheffe cuistot en pleine préparation, broderie de qualité amusante.",
  },
  {
    id: 83,
    url: "/images/realisations/peluche-lapin-personnalisee-brodee-prenom-mae-cadeau-bebe-normandie.webp",
    title: "Peluche Lapin Maé",
    category: "Bébé",
    desc: "Très mignonne peluche lapin aux longues oreilles brodées au prénom de Maé.",
  },
  {
    id: 84,
    url: "/images/realisations/ensemble-naissance-hugo-protege-carnet-sante-dinosaure-doudou-ours.webp",
    title: "Ensemble Naissance Hugo",
    category: "Bébé",
    desc: "Ensemble naissance Hugo : Protège-carnet de santé motifs dinosaures et doudou/couverture polaire oursons avec prénom brodé en doré.",
  },
  {
    id: 85,
    url: "/images/realisations/ensemble-bebe-sac-a-langer-protege-carnet-sante-elephant-vert.webp",
    title: "Ensemble Éléphants Vert",
    category: "Bébé",
    desc: "Duo coordonné comprenant un sac à langer (vanity) matelassé et son protège-carnet de santé assorti, aux motifs éléphants sur fond vert sauge.",
  },
  {
    id: 86,
    url: "/images/realisations/gilet-berger-enfant-moumoute-sherpa-blanc-biais-fleuri.webp",
    title: "Gilet de Berger Sherpa",
    category: "Bébé",
    desc: "Petit gilet sans manche en moumoute sherpa blanche ultra-douce, avec finitions en biais fleuri pour une touche de délicatesse.",
  },
  {
    id: 87,
    url: "/images/realisations/essuie-main-suspendu-douce-france-fleur-papillon-rose.webp",
    title: "Essuie-main Douce France",
    category: "Accessoires",
    desc: "Essuie-main suspendu pratique et décoratif. Tissu papillons et fleurs avec broderie 'DOUCE FRANCE' sur éponge fuchsia.",
  },
  {
    id: 88,
    url: "/images/realisations/essuie-main-suspendu-sucre-sale-motif-rouge-vert.webp",
    title: "Essuie-main Sucré Salé",
    category: "Accessoires",
    desc: "Essuie-main suspendu aux couleurs automnales. Tissu rouge géométrique et broderie 'Sucré Salé' sur éponge vert forêt.",
  },
  {
    id: 89,
    url: "/images/realisations/ensemble-naissance-protege-carnet-sante-lingettes-lavables-safari-vert.webp",
    title: "Ensemble Naissance Safari",
    category: "Bébé",
    desc: "Kit naissance comprenant un protège-carnet de santé brodé et ses lingettes lavables assorties en éponge et coton motifs animaux de la savane.",
  },
  {
    id: 90,
    url: "/images/realisations/gigoteuse-bebe-personnalisee-mon-petit-ecureuil-tissu-automnal.webp",
    title: "Gigoteuse Écureuil",
    category: "Bébé",
    desc: "Gigoteuse bébé personnalisée 'Mon petit Écureuil'. Tissu avec motifs écureuils automnaux et haut en polaire douce crème.",
  },
  {
    id: 91,
    url: "/images/realisations/ensemble-bain-bebe-cape-pochette-broderie-ourson-vert-rose.webp",
    title: "Ensemble Bain Ourson",
    category: "Bébé",
    desc: "Ensemble bain bébé : Cape de bain et pochette assorties en éponge vert forêt avec broderie oursons roses et biais à pois roses.",
  },
  {
    id: 92,
    url: "/images/realisations/veste-noire-broderie-blanche-dragonfly-doudeville-club-sport.webp",
    title: "Veste Club Dragonfly",
    category: "Entreprises",
    desc: "Veste polaire noire personnalisée avec la broderie blanche du club Dragonfly Doudeville (majjorettes/twirling).",
  },
  {
    id: 93,
    url: "/images/realisations/serie-vestes-polaires-brodees-club-dragonfly-doudeville.webp",
    title: "Série Vestes Club",
    category: "Entreprises",
    desc: "Production en série de vestes polaires brodées pour le club Dragonfly Doudeville. Travail de précision pour associations et entreprises.",
  },
  {
    id: 94,
    url: "/images/realisations/2b-couverture-team.webp",
    title: "Équipe 2B Couverture",
    category: "Entreprises",
    desc: "Photo d'équipe avec les uniformes brodés pour 2B Couverture Normandie.",
  },
  {
    id: 95,
    url: "/images/realisations/2b-couverture-logo.webp",
    title: "Logo 2B Couverture",
    category: "Entreprises",
    desc: "Zoom sur la broderie haute précision du logo 2B Couverture sur textile.",
  },
  {
    id: 96,
    url: "/images/realisations/2b-normandie-logo.webp",
    title: "2B Normandie",
    category: "Entreprises",
    desc: "Détail de personnalisation pour l'entreprise 2B Normandie.",
  },
  {
    id: 97,
    url: "/images/realisations/dragon-fly-normandie.webp",
    title: "Dragon Fly Normandie",
    category: "Entreprises",
    desc: "Broderie personnalisée pour l'enseigne Dragon Fly Normandie.",
  },
  {
    id: 98,
    url: "/images/realisations/ensemble-naissance-koala-baby-love.webp",
    title: "Ensemble Naissance Koala",
    category: "Bébé",
    desc: "Ensemble fait main avec amour comprenant carnet de santé, bavoirs et couverture aux motifs koalas 'Baby Love'."
  },
  {
    id: 99,
    url: "/images/realisations/gilet-bebe-reversible-moumoute-sherpa.webp",
    title: "Gilets Réversibles Bébé",
    category: "Bébé",
    desc: "Petits gilets de bébé réversibles en moumoute sherpa, confortables et doux pour les petits explorateurs."
  },
  {
    id: 100,
    url: "/images/realisations/serviettes-bain-brodees-personnalisees-walid-ines.webp",
    title: "Serviettes Brodées Personnalisées",
    category: "Particuliers",
    desc: "Ensemble de serviettes de bain vertes avec broderie personnalisée des prénoms Walid et Ines pour des moments qui comptent."
  },
  {
    id: 101,
    url: "/images/realisations/lange-bapteme-personnalise-giulia.webp",
    title: "Lange de Baptême Giulia",
    category: "Bébé",
    desc: "Lange blanc brodé en fil doré pour le baptême de Giulia, un souvenir inoubliable."
  },
  {
    id: 102,
    url: "/images/realisations/doudou-lapin-rose-personnalise-inaya.webp",
    title: "Doudou Lapin Inaya",
    category: "Bébé",
    desc: "Doudous plats lapins roses personnalisés avec le prénom Inaya, d'une grande douceur."
  },
  {
    id: 103,
    url: "/images/realisations/housse-coussin-brodee-van-soleil-levant.webp",
    title: "Housses de Coussin VanLife",
    category: "Particuliers",
    desc: "Housses de coussin brodées pour van avec le motif élégant du soleil levant. Création unique et artisanale pour un confort nomade."
  },
  {
    id: 104,
    url: "/images/realisations/protege-carnet-sante-vert-brode.webp",
    title: "Protège Carnet de Santé & Sac Vert",
    category: "Bébé",
    desc: "Ensemble comprenant un protège-carnet de santé brodé et son petit sac assorti à motifs."
  },
  {
    id: 105,
    url: "/images/realisations/tapis-selle-equitation-charlie.webp",
    title: "Tapis de Selle Charlie",
    category: "Particuliers",
    desc: "Tapis de selle d'équitation bleu marine personnalisé avec broderie du prénom Charlie."
  },
  {
    id: 106,
    url: "/images/realisations/paniers-tissu-rangement-fleurs.webp",
    title: "Paniers de Rangement Fleuris",
    category: "Accessoires",
    desc: "Paniers gigognes en tissu avec revers motifs floraux pour décoration."
  },
  {
    id: 107,
    url: "/images/realisations/coeur-tissu-brode-mamie-chouchou.webp",
    title: "Cœur Suspendu Mamie Chouchou",
    category: "Particuliers",
    desc: "Cœur décoratif en tissu jaune avec message brodé 'Mamie Chouchou'."
  },
  {
    id: 108,
    url: "/images/realisations/gigoteuse-bebe-fleurs-bleues.webp",
    title: "Gigoteuse Fleurs Bleues",
    category: "Bébé",
    desc: "Gigoteuse molletonnée blanche avec motifs de petites fleurs bleues pour bébé."
  },
  {
    id: 109,
    url: "/images/realisations/coeur-tissu-brode-meilleure-maman.webp",
    title: "Cœur Suspendu Meilleure Maman",
    category: "Particuliers",
    desc: "Cœur en tissu bleu à pois blancs avec broderie 'La meilleure Maman'."
  },
  {
    id: 110,
    url: "/images/realisations/bavoir-bebe-petit-bonheur.webp",
    title: "Bavoir Petit Bonheur",
    category: "Bébé",
    desc: "Bavoir blanc en éponge avec message brodé 'Petit Bonheur'."
  },
  {
    id: 111,
    url: "/images/realisations/sac-a-langer-rose-matelasse.webp",
    title: "Sac à Langer Rose",
    category: "Bébé",
    desc: "Sac à langer matelassé rose poudré avec grand espace de rangement."
  },
  {
    id: 112,
    url: "/images/realisations/serviettes-brodees-eden-noam.webp",
    title: "Serviettes Brodées Eden & Noam",
    category: "Particuliers",
    desc: "Duo de serviettes personnalisées avec prénom et motif brodé pour enfants."
  },
  {
    id: 113,
    url: "/images/realisations/coeur-tissu-brode-boheme.webp",
    title: "Cœur Suspendu Bohème",
    category: "Particuliers",
    desc: "Cœur décoratif en tissu vert avec message brodé 'Bohème' et motifs fleuris."
  },
  {
    id: 114,
    url: "/images/realisations/serviette-brodee-coeurs-entrelaces.webp",
    title: "Serviette Cœurs Entrelacés",
    category: "Particuliers",
    desc: "Serviette éponge grise avec deux cœurs roses entrelacés en broderie fine."
  },
  {
    id: 115,
    url: "/images/realisations/serviette-noam-broderie-hibou.webp",
    title: "Serviette Hibou Noam",
    category: "Bébé",
    desc: "Serviette éponge beige avec un joli hibou coloré et le prénom Noam brodés."
  },
  {
    id: 116,
    url: "/images/realisations/serviette-enzo-broderie-renard.webp",
    title: "Serviette Renard Enzo",
    category: "Bébé",
    desc: "Serviette éponge orange avec motif renard et prénom Enzo brodés."
  },
  {
    id: 117,
    url: "/images/realisations/panier-gout-de-l-amour.webp",
    title: "Panier Le Goût de l'Amour",
    category: "Particuliers",
    desc: "Panier de rangement en tissu avec broderie personnalisée 'Le Goût de l'Amour'."
  },
  {
    id: 118,
    url: "/images/realisations/bavoir-bebe-rose-personnalise.webp",
    title: "Bavoir Bébé Rose",
    category: "Bébé",
    desc: "Bavoir rose personnalisé pour bébé avec doublure imprimée fleurs."
  },
  {
    id: 119,
    url: "/images/realisations/serviette-eloise-broderie-or.webp",
    title: "Serviette Éloïse Dorée",
    category: "Particuliers",
    desc: "Serviette éponge blanche avec broderie du prénom Éloïse en fil d'or."
  },
  {
    id: 120,
    url: "/images/realisations/trousse-toilette-fleurs-orange.webp",
    title: "Trousse Fleurs Orange",
    category: "Accessoires",
    desc: "Trousse de toilette en tissu avec fermeture éclair et motifs floraux vifs."
  },
  {
    id: 121,
    url: "/images/realisations/coeur-tissu-pois-verts.webp",
    title: "Cœur Suspendu Pois Verts",
    category: "Particuliers",
    desc: "Cœur en tissu vert avec motifs de pois et de fleurs brodées."
  },
  {
    id: 122,
    url: "/images/realisations/bavoir-bebe-rose-mila.webp",
    title: "Bavoir Mila Rose",
    category: "Bébé",
    desc: "Bavoir bébé rose poudré avec broderie du prénom Mila et motifs fleuris."
  },
  {
    id: 123,
    url: "/images/realisations/tablier-cuisine-fleurs-rouges.webp",
    title: "Tablier Fleurs Rouges",
    category: "Accessoires",
    desc: "Tablier de cuisine croisé avec tissu fleuri rouge et noir, confection artisanale."
  },
  {
    id: 124,
    url: "/images/realisations/coffret-naissance-sortie-bain.webp",
    title: "Coffret Sortie de Bain",
    category: "Bébé",
    desc: "Coffret de naissance comprenant une cape de bain brodée et son doudou lapin."
  },
  {
    id: 125,
    url: "/images/realisations/vanity-tissu-fleurs-bleues.webp",
    title: "Vanity Fleurs Bleues",
    category: "Accessoires",
    desc: "Trousse de toilette de type vanity matelassée avec fermeture et motifs fleuris bleus."
  },
  {
    id: 126,
    url: "/images/realisations/housse-robertot-beige.webp",
    title: "Housse La Horde de Robertot",
    category: "Particuliers",
    desc: "Housse personnalisée en lin ou coton beige avec broderie 'LA HORDE DE ROBERTOT'."
  },
  {
    id: 127,
    url: "/images/realisations/coeur-tissu-brode-elegance.webp",
    title: "Cœur Suspendu Élégance",
    category: "Particuliers",
    desc: "Cœur décoratif en tissu orange avec message brodé 'Élégance'."
  },
  {
    id: 128,
    url: "/images/realisations/protege-carnet-sante-coeur.webp",
    title: "Protège Carnet de Santé Cœur",
    category: "Bébé",
    desc: "Housse de protection pour carnet de santé avec motifs de cœurs rouges."
  },
  {
    id: 129,
    url: "/images/realisations/presentation-naissance-mila.webp",
    title: "Ensemble Naissance Mila",
    category: "Bébé",
    desc: "Présentation de coffret cadeau pour bébé avec doudou, lingettes et broderies."
  },
  {
    id: 130,
    url: "/images/realisations/tablier-cuisine-rouge-mannequin.webp",
    title: "Tablier Croisé Rouge",
    category: "Accessoires",
    desc: "Tablier de cuisine croisé rouge et blanc en situation sur un mannequin."
  },
  {
    id: 131,
    url: "/images/realisations/coeur-tissu-fleurs-bleues.webp",
    title: "Cœur Suspendu Fleurs Bleues",
    category: "Particuliers",
    desc: "Cœur décoratif en tissu imprimé de motifs floraux bleus et blancs."
  },
  {
    id: 132,
    url: "/images/realisations/cape-bain-leo-moutarde.webp",
    title: "Cape de Bain Léo",
    category: "Bébé",
    desc: "Sortie de bain à capuche beige avec liseré moutarde et prénom Léo brodé."
  },
  {
    id: 133,
    url: "/images/realisations/coussins-amenagement-vanlife.webp",
    title: "Aménagement VanLife Coussins",
    category: "Particuliers",
    desc: "Ensemble de banquettes et coussins en velours côtelé orange pour aménagement de van."
  },
  {
    id: 134,
    url: "/images/realisations/bavoir-bebe-petite-bouille.webp",
    title: "Bavoir Petite Bouille",
    category: "Bébé",
    desc: "Bavoir bleu ciel brodé 'Petite Bouille' pour les repas de bébé."
  },
  {
    id: 135,
    url: "/images/realisations/serviette-psg-papi-philippe.webp",
    title: "Serviette PSG Papi Philippe",
    category: "Particuliers",
    desc: "Serviette verte brodée avec l'écusson du PSG et l'inscription 'Papi Philippe'."
  },
  {
    id: 136,
    url: "/images/realisations/lingettes-lavables-lingerie.webp",
    title: "Kit Lingettes Lavables",
    category: "Accessoires",
    desc: "Collection de lingettes de maquillage réutilisables assorties avec leur étui."
  },
  {
    id: 137,
    url: "/images/realisations/coeur-tissu-brode-craneuse.webp",
    title: "Cœur Suspendu Crâneuse",
    category: "Particuliers",
    desc: "Cœur en tissu rouge vif brodé avec l'inscription 'Crâneuse'."
  },
  {
    id: 138,
    url: "/images/realisations/tablier-cuisine-retro-fleurs.webp",
    title: "Tablier Rétro Fleuri",
    category: "Accessoires",
    desc: "Tablier croisé rétro de cuisine en coton imprimé de motifs floraux."
  },
  {
    id: 139,
    url: "/images/realisations/bavoir-enzo-kiss.webp",
    title: "Bavoir Enzo Kiss",
    category: "Bébé",
    desc: "Bavoir blanc et bleu pour bébé avec inscription 'kiss' et prénom Enzo."
  },
  {
    id: 140,
    url: "/images/realisations/cape-bain-garcon-oreilles.webp",
    title: "Cape de Bain Capuche Oreilles",
    category: "Bébé",
    desc: "Sortie de bain à capuche avec oreilles d'ours et prénom brodé."
  },
  {
    id: 141,
    url: "/images/realisations/banniere-campement-robertot.webp",
    title: "Bannière de Campement Robertot",
    category: "Particuliers",
    desc: "Bannière en tissu suspendue avec logo 'LA HORDE DE ROBERTOT' devant un van."
  },
  {
    id: 142,
    url: "/images/realisations/serviette-louay-broderie.webp",
    title: "Serviette Louay",
    category: "Bébé",
    desc: "Serviette éponge verte avec broderie du prénom Louay."
  },
  {
    id: 143,
    url: "/images/realisations/serviette-cadeau-pour-toi-maman.webp",
    title: "Serviette Pour Toi Maman",
    category: "Particuliers",
    desc: "Serviette éponge noire brodée avec l'inscription 'Pour Toi, Maman' et cœurs."
  },
  {
    id: 144,
    url: "/images/realisations/trousse-toilette-motifs-bleus.webp",
    title: "Trousse de Toilette Graphique Bleue",
    category: "Accessoires",
    desc: "Trousse de toilette avec tissu graphique bleu et fermeture éclair."
  },
  {
    id: 145,
    url: "/images/realisations/poncho-bain-enfant-donald-duck-orange-brode.jpg",
    title: "Poncho de Bain Enfant Donald Duck Orange",
    category: "Bébé",
    desc: "Poncho de bain enfant en éponge orange avec capuche, bord rouge à motifs et broderie personnalisée du personnage Disney Donald Duck."
  },
  {
    id: 146,
    url: "/images/realisations/poncho-bain-enfant-donald-duck-zoom-broderie.jpg",
    title: "Zoom Broderie Donald Duck sur Éponge Orange",
    category: "Bébé",
    desc: "Zoom sur la broderie haute précision du personnage Donald Duck réalisée sur éponge orange – point couleurs vives, détail chapeau et costume."
  }
];
