/** Palette secondaire de la charte */
export const palette = {
  tournesol: '#FFE552',
  menthe: '#21AB88',
  ecume: '#869ECE',
  tuile: '#FF9575',
  cumulus: '#7AB1E8',
  bourgeon: '#99C221',
  macaron: '#FFB7AE',
}

export const disciplines = [
  {
    slug: 'musique', color: palette.tournesol, icon: 'Music', page: '/musique',
    label: { fr: 'Musique', en: 'Music', lo: 'ດົນຕີ' },
    description: {
      fr: 'Concerts, créations croisées et scènes ouvertes entre khène, jazz et électro.',
      en: 'Concerts, cross-cultural creations and open stages from khaen to jazz and electro.',
      lo: 'ຄອນເສີດ, ຜົນງານສ້າງສັນຮ່ວມ ແລະ ເວທີເປີດ ແຕ່ແຄນ ຈົນເຖິງແຈັສ ແລະ ອີເລັກໂທຣ.',
    },
  },
  {
    slug: 'danse', color: palette.macaron, icon: 'Sparkles',
    label: { fr: 'Danse', en: 'Dance', lo: 'ການເຕັ້ນ' },
    description: {
      fr: 'Chorégraphies contemporaines et danses traditionnelles lao en dialogue.',
      en: 'Contemporary choreography in dialogue with traditional Lao dance.',
      lo: 'ການເຕັ້ນຮ່ວມສະໄໝ ພົບກັບນາດສິນພື້ນເມືອງລາວ.',
    },
  },
  {
    slug: 'cinema', color: palette.cumulus, icon: 'Clapperboard', page: '/cinema',
    label: { fr: 'Cinéma', en: 'Cinema', lo: 'ຮູບເງົາ' },
    description: {
      fr: 'Projections en plein air, avant-premières et rencontres avec les cinéastes.',
      en: 'Open-air screenings, premieres and meetings with filmmakers.',
      lo: 'ການສາຍຮູບເງົາກາງແຈ້ງ, ຮອບປະຖົມມະທັດ ແລະ ພົບປະຜູ້ກຳກັບ.',
    },
  },
  {
    slug: 'arts-visuels', color: palette.tuile, icon: 'Palette', page: '/expositions',
    label: { fr: 'Arts visuels', en: 'Visual arts', lo: 'ສິລະປະທັດສະນະ' },
    description: {
      fr: 'Expositions de photographie, peinture, installation et arts du papier.',
      en: 'Exhibitions of photography, painting, installation and paper art.',
      lo: 'ນິທັດສະການພາບຖ່າຍ, ຈິດຕະກຳ, ສິລະປະຕິດຕັ້ງ ແລະ ສິລະປະເຈ້ຍ.',
    },
  },
  {
    slug: 'litterature', color: palette.ecume, icon: 'BookOpen',
    label: { fr: 'Littérature', en: 'Literature', lo: 'ວັນນະຄະດີ' },
    description: {
      fr: 'Lectures bilingues, traduction et rencontres d’auteurs.',
      en: 'Bilingual readings, translation and author talks.',
      lo: 'ການອ່ານສອງພາສາ, ການແປ ແລະ ພົບປະນັກຂຽນ.',
    },
  },
  {
    slug: 'gastronomie', color: palette.tuile, icon: 'Utensils',
    label: { fr: 'Gastronomie', en: 'Gastronomy', lo: 'ອາຫານການກິນ' },
    description: {
      fr: 'Saveurs françaises et lao autour du marché gourmand du festival.',
      en: 'French and Lao flavours at the festival food market.',
      lo: 'ລົດຊາດຝຣັ່ງ ແລະ ລາວ ທີ່ຕະຫຼາດອາຫານຂອງເທດສະການ.',
    },
  },
  {
    slug: 'jeunesse', color: palette.tournesol, icon: 'Baby', page: '/jeunesse',
    label: { fr: 'Jeunesse', en: 'Young audiences', lo: 'ເຍົາວະຊົນ' },
    description: {
      fr: 'Spectacles, contes et ateliers pour les enfants, les ados et les familles.',
      en: 'Shows, storytelling and workshops for children, teens and families.',
      lo: 'ການສະແດງ, ນິທານ ແລະ ເວີກຊັອບ ສຳລັບເດັກ, ໄວລຸ້ນ ແລະ ຄອບຄົວ.',
    },
  },
  {
    slug: 'arts-numeriques', color: palette.cumulus, icon: 'Cpu',
    label: { fr: 'Arts numériques', en: 'Digital arts', lo: 'ສິລະປະດິຈິຕອນ' },
    description: {
      fr: 'Performances immersives, mapping vidéo et création sonore.',
      en: 'Immersive performances, video mapping and sound art.',
      lo: 'ການສະແດງແບບດື່ມດ່ຳ, ວິດີໂອແມັບປິງ ແລະ ການສ້າງສຽງ.',
    },
  },
  {
    slug: 'debat-idees', color: palette.menthe, icon: 'MessagesSquare', page: '/rencontres',
    label: { fr: 'Débat d’idées', en: 'Ideas & debates', lo: 'ເວທີແລກປ່ຽນຄວາມຄິດ' },
    description: {
      fr: 'Tables rondes, conférences et masterclasses ouvertes à tous.',
      en: 'Round tables, talks and masterclasses open to all.',
      lo: 'ໂຕະມົນ, ການບັນຍາຍ ແລະ ມາສເຕີຄລາສ ເປີດໃຫ້ທຸກຄົນ.',
    },
  },
]

export const eventTypes = [
  { slug: 'marche', label: { fr: 'Marché', en: 'Market', lo: 'ຕະຫຼາດ' } },
  { slug: 'concert', label: { fr: 'Concert', en: 'Concert', lo: 'ຄອນເສີດ' } },
  { slug: 'exposition', label: { fr: 'Exposition', en: 'Exhibition', lo: 'ນິທັດສະການ' } },
  { slug: 'cinema', label: { fr: 'Cinéma', en: 'Cinema', lo: 'ຮູບເງົາ' } },
  { slug: 'spectacle', label: { fr: 'Spectacle', en: 'Show', lo: 'ການສະແດງ' } },
  { slug: 'danse', label: { fr: 'Danse', en: 'Dance', lo: 'ການເຕັ້ນ' } },
  { slug: 'litterature', label: { fr: 'Littérature', en: 'Literature', lo: 'ວັນນະຄະດີ' } },
  { slug: 'conference', label: { fr: 'Conférence', en: 'Talk', lo: 'ການບັນຍາຍ' } },
  { slug: 'debat', label: { fr: 'Débat', en: 'Debate', lo: 'ການໂຕ້ວາທີ' } },
  { slug: 'atelier', label: { fr: 'Atelier', en: 'Workshop', lo: 'ເວີກຊັອບ' } },
  { slug: 'jeunesse', label: { fr: 'Jeunesse', en: 'Young audiences', lo: 'ເຍົາວະຊົນ' } },
  { slug: 'arts-numeriques', label: { fr: 'Arts numériques', en: 'Digital arts', lo: 'ສິລະປະດິຈິຕອນ' } },
  { slug: 'education', label: { fr: 'Éducation', en: 'Education', lo: 'ການສຶກສາ' } },
  { slug: 'rencontre-pro', label: { fr: 'Rencontre professionnelle', en: 'Professional meeting', lo: 'ການພົບປະມືອາຊີບ' } },
]

export const audiences = [
  { slug: 'tout-public', label: { fr: 'Tout public', en: 'All audiences', lo: 'ສຳລັບທຸກຄົນ' } },
  { slug: 'famille', label: { fr: 'Famille', en: 'Family', lo: 'ຄອບຄົວ' } },
  { slug: 'enfants', label: { fr: 'Enfants', en: 'Children', lo: 'ເດັກນ້ອຍ' } },
  { slug: 'adolescents', label: { fr: 'Adolescents', en: 'Teens', lo: 'ໄວລຸ້ນ' } },
  { slug: 'professionnels', label: { fr: 'Professionnels', en: 'Professionals', lo: 'ມືອາຊີບ' } },
]

export const roles = [
  { slug: 'musicien', label: { fr: 'Musicien·ne', en: 'Musician', lo: 'ນັກດົນຕີ' } },
  { slug: 'danseur', label: { fr: 'Danseur·se', en: 'Dancer', lo: 'ນັກເຕັ້ນ' } },
  { slug: 'photographe', label: { fr: 'Photographe', en: 'Photographer', lo: 'ຊ່າງພາບ' } },
  { slug: 'plasticien', label: { fr: 'Plasticien·ne', en: 'Visual artist', lo: 'ສິລະປິນທັດສະນະ' } },
  { slug: 'realisateur', label: { fr: 'Réalisateur·rice', en: 'Filmmaker', lo: 'ຜູ້ກຳກັບ' } },
  { slug: 'ecrivain', label: { fr: 'Écrivain·e', en: 'Writer', lo: 'ນັກຂຽນ' } },
  { slug: 'designer', label: { fr: 'Designer', en: 'Designer', lo: 'ນັກອອກແບບ' } },
  { slug: 'performer', label: { fr: 'Performer', en: 'Performer', lo: 'ນັກສະແດງ' } },
  { slug: 'chercheur', label: { fr: 'Chercheur·se', en: 'Researcher', lo: 'ນັກຄົ້ນຄວ້າ' } },
]

export const countries = {
  FR: { label: { fr: 'France', en: 'France', lo: 'ຝຣັ່ງ' } },
  LA: { label: { fr: 'Laos', en: 'Laos', lo: 'ລາວ' } },
  'FR-LA': { label: { fr: 'France × Laos', en: 'France × Laos', lo: 'ຝຣັ່ງ × ລາວ' } },
  SE: { label: { fr: 'Suède', en: 'Sweden', lo: 'ສະວີເດັນ' } },
  'SE-FR': { label: { fr: 'Suède × France', en: 'Sweden × France', lo: 'ສະວີເດັນ × ຝຣັ່ງ' } },
}

export const venueKinds = {
  institut: { fr: 'Institut', en: 'Institute', lo: 'ສະຖາບັນ' },
  musee: { fr: 'Musée', en: 'Museum', lo: 'ຫໍພິພິທະພັນ' },
  galerie: { fr: 'Galerie', en: 'Gallery', lo: 'ຫໍວາງສະແດງ' },
  salle: { fr: 'Salle de spectacle', en: 'Performance hall', lo: 'ຫໍສະແດງ' },
  cinema: { fr: 'Cinéma', en: 'Cinema', lo: 'ໂຮງຮູບເງົາ' },
  universite: { fr: 'Université', en: 'University', lo: 'ມະຫາວິທະຍາໄລ' },
  'espace-public': { fr: 'Espace public', en: 'Public space', lo: 'ພື້ນທີ່ສາທາລະນະ' },
  restaurant: { fr: 'Restaurant partenaire', en: 'Partner restaurant', lo: 'ຮ້ານອາຫານຄູ່ຮ່ວມ' },
}

export const cities = [
  {
    slug: 'luang-prabang',
    photo: '/images/lieux/institut-francais-luang-prabang.jpg',
    name: { fr: 'Luang Prabang', en: 'Luang Prabang', lo: 'ຫຼວງພະບາງ' },
    color: palette.tournesol,
    geo: [19.8856, 102.1347],
    from: '2026-11-03',
    to: '2026-11-21',
    heroColor: '#3558A2', // en-tête bleu uni, sans photo pour l'instant
    social: {
      org: { fr: 'Institut français de Luang Prabang', en: 'Institut français in Luang Prabang', lo: 'ສະຖາບັນຝຣັ່ງ ຫຼວງພະບາງ' },
      facebook: 'https://www.facebook.com/IFLLuangPrabang/',
      instagram: 'https://www.instagram.com/if_lpb/',
    },
    tagline: {
      fr: 'Le festival commence ici, le 3 novembre.',
      en: 'The festival begins here, on 3 November.',
      lo: 'ເທດສະການເລີ່ມຕົ້ນທີ່ນີ້ ໃນວັນທີ 3 ພະຈິກ.',
    },
    description: {
      fr: 'Ville classée au patrimoine mondial de l’UNESCO, au confluent du Mékong et de la Nam Khan, Luang Prabang accueille l’inauguration et le festival du 3 au 21 novembre : expositions, littérature, musique, cinéma et danse.',
      en: 'A UNESCO World Heritage town at the confluence of the Mekong and Nam Khan rivers, Luang Prabang hosts the opening night and the festival from 3 to 21 November: exhibitions, literature, music, film and dance.',
      lo: 'ເມືອງມໍລະດົກໂລກຂອງອົງການ UNESCO ຢູ່ບໍລິເວນແມ່ນ້ຳຂອງ ແລະ ນ້ຳຄານບັນຈົບກັນ, ຫຼວງພະບາງ ເປັນເຈົ້າພາບພິທີເປີດ ແລະ ເທດສະການ ແຕ່ວັນທີ 3 ຫາ 21 ພະຈິກ: ນິທັດສະການ, ວັນນະຄະດີ, ດົນຕີ, ຮູບເງົາ ແລະ ການເຕັ້ນ.',
    },
  },
  {
    slug: 'vientiane',
    photo: '/images/lieux/institut-francais-vientiane.jpg',
    name: { fr: 'Vientiane', en: 'Vientiane', lo: 'ວຽງຈັນ' },
    color: palette.cumulus,
    geo: [17.9667, 102.6],
    from: '2026-11-10',
    to: '2026-11-21',
    social: {
      org: { fr: 'Institut français du Laos', en: 'Institut français du Laos', lo: 'ສະຖາບັນຝຣັ່ງ ປະຈຳລາວ' },
      facebook: 'https://www.facebook.com/institut.francaisdulaos/',
      instagram: 'https://www.instagram.com/institutfrancais_laos/',
    },
    tagline: {
      fr: 'Douze jours de création dans la capitale, jusqu’au 21 novembre.',
      en: 'Twelve days of creation in the capital, until 21 November.',
      lo: 'ສິບສອງວັນແຫ່ງການສ້າງສັນ ໃນນະຄອນຫຼວງ ຈົນຮອດວັນທີ 21 ພະຈິກ.',
    },
    description: {
      fr: 'Dans la capitale, le festival investit l’Institut français, les musées, l’université et les berges du Mékong : concerts, cycle de cinéma, rencontres professionnelles, arts numériques et grande soirée de clôture.',
      en: 'In the capital, the festival takes over the Institut français, museums, the university and the Mekong riverside: concerts, a film season, professional meetings, digital arts and a closing night.',
      lo: 'ໃນນະຄອນຫຼວງ, ເທດສະການຈັດຂຶ້ນທີ່ສະຖາບັນຝຣັ່ງ, ຫໍພິພິທະພັນ, ມະຫາວິທະຍາໄລ ແລະ ແຄມແມ່ນ້ຳຂອງ: ຄອນເສີດ, ຮອບສາຍຮູບເງົາ, ການພົບປະມືອາຊີບ, ສິລະປະດິຈິຕອນ ແລະ ງານປິດອັນຍິ່ງໃຫຍ່.',
    },
  },
]
