/**
 * Contenus éditoriaux : actualités, partenaires, galerie, vidéos, FAQ, presse.
 * ⚠️ Contenus de démonstration à remplacer.
 */
import { palette } from './taxonomies'

const t = (fr, en, lo) => ({ fr, en, lo })

export const news = [
  {
    slug: 'programme-complet-disponible',
    date: '2026-09-29',
    author: t('Équipe du festival', 'Festival team', 'ທີມງານເທດສະການ'),
    title: t('Le programme complet est en ligne', 'The full programme is online', 'ກຳນົດການເຕັມ ເຜີຍແຜ່ແລ້ວ'),
    excerpt: t(
      '25 rendez-vous, 22 artistes, 2 lieux : découvrez toute la programmation et composez votre festival.',
      '25 events, 22 artists, 2 venues: explore the full line-up and build your own festival.',
      '25 ກິດຈະກຳ, 22 ສິລະປິນ, 2 ສະຖານທີ່: ຄົ້ນພົບກຳນົດການທັງໝົດ ແລະ ສ້າງເທດສະການຂອງທ່ານ.',
    ),
    body: [
      t('La programmation du Festival France–Laos 2026 est désormais disponible dans son intégralité. Du 3 au 21 novembre, le festival relie Luang Prabang et Vientiane autour de la musique, de la danse, du cinéma, des arts visuels, de la littérature et des arts numériques.', 'The full Franco-Lao Festival 2026 programme is now available. From 3 to 21 November, the festival links Luang Prabang and Vientiane through music, dance, film, visual arts, literature and digital arts.', 'ກຳນົດການທັງໝົດຂອງເທດສະການ ຝຣັ່ງ–ລາວ 2026 ພ້ອມແລ້ວ. ແຕ່ວັນທີ 3 ຫາ 21 ພະຈິກ, ເທດສະການເຊື່ອມໂຍງຫຼວງພະບາງ ແລະ ວຽງຈັນ ຜ່ານດົນຕີ, ການເຕັ້ນ, ຮູບເງົາ, ສິລະປະ, ວັນນະຄະດີ ແລະ ສິລະປະດິຈິຕອນ.'),
      t('Nouveauté cette année : la fonction « Mon festival ». Ajoutez les événements qui vous intéressent d’un clic, puis exportez votre programme personnel vers Google Agenda, Apple Calendrier ou Outlook.', 'New this year: “My festival”. Add the events you like in one click, then export your personal programme to Google Calendar, Apple Calendar or Outlook.', 'ໃໝ່ປີນີ້: « ເທດສະການຂອງຂ້ອຍ ». ເພີ່ມກິດຈະກຳທີ່ທ່ານສົນໃຈໃນຄລິກດຽວ ແລ້ວສົ່ງອອກໄປປະຕິທິນ Google, Apple ຫຼື Outlook.'),
      t('La majorité des événements est gratuite. Certains ateliers et spectacles nécessitent une inscription : pensez à réserver tôt.', 'Most events are free. Some workshops and shows require registration, so book early.', 'ກິດຈະກຳສ່ວນໃຫຍ່ບໍ່ເສຍຄ່າ. ບາງເວີກຊັອບ ແລະ ການສະແດງ ຕ້ອງລົງທະບຽນ, ກະລຸນາຈອງແຕ່ເນີ້ນໆ.'),
    ],
    eventSlugs: ['soiree-veronique-de-lavenere'],
    artistSlugs: [],
    photo: '/images/galerie/public-bn-D2bCvpik.jpg',
    photos: ['/images/evenements/inauguration-festival-france-laos-2026.jpg', '/images/evenements/concert-de-cloture.jpg', '/images/evenements/film-le-fleuve-et-la-memoire.jpg'],
    color: palette.tournesol,
  },
  {
    slug: 'decouvrez-les-lieux-du-festival',
    date: '2026-09-22',
    author: t('Équipe du festival', 'Festival team', 'ທີມງານເທດສະການ'),
    title: t('Découvrez les lieux du festival', 'Discover the festival venues', 'ຄົ້ນພົບສະຖານທີ່ຂອງເທດສະການ'),
    excerpt: t('De Luang Prabang à Vientiane, les deux sites de l’Institut français du Laos accueillent le festival.', 'From Luang Prabang to Vientiane, the two sites of the Institut français du Laos host the festival.', 'ແຕ່ຫຼວງພະບາງ ເຖິງວຽງຈັນ, ສອງສາຂາຂອງສະຖາບັນຝຣັ່ງ ປະຈຳລາວ ຕ້ອນຮັບເທດສະການ.'),
    body: [
      t('Salles de spectacle, galeries, médiathèques et jardins : le festival investit les deux Instituts français, à Luang Prabang et à Vientiane.', 'Performance halls, galleries, media libraries and gardens: the festival takes over both Instituts français, in Luang Prabang and Vientiane.', 'ຫໍສະແດງ, ຫໍວາງສະແດງ, ຫ້ອງສະໝຸດ ແລະ ສວນ: ເທດສະການຈັດຂຶ້ນທີ່ສະຖາບັນຝຣັ່ງທັງສອງແຫ່ງ ທີ່ຫຼວງພະບາງ ແລະ ວຽງຈັນ.'),
      t('Retrouvez tous les lieux sur la carte interactive, avec adresses, accès et accessibilité.', 'Find every venue on the interactive map, with addresses, access and accessibility.', 'ເບິ່ງສະຖານທີ່ທັງໝົດເທິງແຜນທີ່ ພ້ອມທີ່ຢູ່, ການເດີນທາງ ແລະ ການເຂົ້າເຖິງ.'),
    ],
    eventSlugs: [],
    artistSlugs: [],
    photo: '/images/galerie/vientiane-DmG3yNfEd5Q.jpg',
    photos: ['/images/galerie/vientiane-gg-owke2lz0.jpg', '/images/galerie/luang-prabang-GviEypkuHVA.jpg', '/images/villes/luang-prabang.jpg'],
    color: palette.menthe,
  },
  {
    slug: 'premiers-artistes-annonces',
    date: '2026-09-15',
    author: t('Équipe du festival', 'Festival team', 'ທີມງານເທດສະການ'),
    title: t('Les premiers artistes annoncés', 'First artists announced', 'ປະກາດລາຍຊື່ສິລະປິນຊຸດທຳອິດ'),
    excerpt: t('Clémence Arnaud, Vongsa Keomany, Léa Marchand et Noy Phetsavanh rejoignent l’affiche.', 'Clémence Arnaud, Vongsa Keomany, Léa Marchand and Noy Phetsavanh join the line-up.', 'ເຄລມັງສ໌ ອາໂນ, ວົງສາ ແກ້ວມະນີ, ເລອາ ມາຊັງ ແລະ ນ້ອຍ ເພັດສະຫວັນ ເຂົ້າຮ່ວມ.'),
    body: [
      t('Musique et danse ouvrent le bal : la création « Mékong Suite » sera présentée le soir de l’inauguration, et le duo « Deux rives » dans les deux villes.', 'Music and dance lead the way: “Mekong Suite” premieres on opening night and the duet “Two Banks” tours both cities.', 'ດົນຕີ ແລະ ການເຕັ້ນ ນຳໜ້າ: « Mékong Suite » ສະແດງຄັ້ງທຳອິດໃນຄືນເປີດ ແລະ « ສອງຝັ່ງ » ສະແດງທັງສອງເມືອງ.'),
    ],
    eventSlugs: [],
    artistSlugs: ['clemence-arnaud', 'vongsa-keomany', 'lea-marchand', 'noy-phetsavanh'],
    photo: '/images/galerie/public-eXVd7gDPO9A.jpg',
    photos: ['/images/artistes/clemence-arnaud.jpg', '/images/artistes/vongsa-keomany.jpg', '/images/artistes/noy-phetsavanh.jpg'],
    color: palette.macaron,
  },
  {
    slug: 'dates-du-festival-2026',
    date: '2026-09-02',
    author: t('Institut français du Laos', 'Institut français du Laos', 'ສະຖາບັນຝຣັ່ງ ປະຈຳລາວ'),
    title: t('Rendez-vous du 3 au 21 novembre 2026', 'See you from 3 to 21 November 2026', 'ພົບກັນ 3 – 21 ພະຈິກ 2026'),
    excerpt: t('Le Festival France–Laos revient, pour la première fois entre Luang Prabang et Vientiane.', 'The France–Laos Festival returns, for the first time across Luang Prabang and Vientiane.', 'ເທດສະການ ຝຣັ່ງ–ລາວ ກັບມາ ເປັນຄັ້ງທຳອິດ ລະຫວ່າງຫຼວງພະບາງ ແລະ ວຽງຈັນ.'),
    body: [
      t('Dix-neuf jours, deux villes, un fleuve : l’édition 2026 s’ouvre à Luang Prabang le 3 novembre avant de rejoindre Vientiane jusqu’au 21 novembre.', 'Nineteen days, two cities, one river: the 2026 edition opens in Luang Prabang on 3 November before moving to Vientiane until 21 November.', 'ສິບເກົ້າວັນ, ສອງເມືອງ, ແມ່ນ້ຳສາຍດຽວ: ເປີດທີ່ຫຼວງພະບາງ ວັນທີ 3 ພະຈິກ ກ່ອນຍ້າຍໄປວຽງຈັນ ຈົນຮອດ 21 ພະຈິກ.'),
    ],
    eventSlugs: ['soiree-veronique-de-lavenere'],
    artistSlugs: [],
    photo: '/images/villes/luang-prabang.jpg',
    photos: ['/images/galerie/inauguration-X6qU8SnDjro.jpg', '/images/galerie/luang-prabang-_rcrgZMeEAU.jpg', '/images/galerie/vientiane-p7Yg8z5r7mI.jpg'],
    color: palette.cumulus,
  },
]

export const partnerGroups = [
  {
    slug: 'institutionnels',
    label: t('Partenaires institutionnels', 'Institutional partners', 'ຄູ່ຮ່ວມສະຖາບັນ'),
    items: [
      { name: 'Ambassade de France au Laos', logo: '/images/partenaires/ambassade-de-france.png' },
      { name: 'Institut français du Laos', logo: '/images/partenaires/institut-francais-laos.jpg' },
      { name: 'Agence universitaire de la Francophonie', logo: '/images/partenaires/auf.jpg' },
      { name: 'Lettres Sorbonne Université', logo: '/images/partenaires/lettres-sorbonne-universite.png' },
      { name: 'École française d’Extrême-Orient', logo: '/images/partenaires/efeo.jpg' },
    ],
  },
  {
    slug: 'culturels',
    label: t('Partenaires culturels', 'Cultural partners', 'ຄູ່ຮ່ວມດ້ານວັດທະນະທຳ'),
    items: [{ name: 'Bluechair', logo: '/images/partenaires/bluechair.png' }],
  },
]

const gp = [palette.tournesol, palette.menthe, palette.ecume, palette.tuile, palette.cumulus, palette.bourgeon, palette.macaron]
export const galleryFilters = [
  { slug: '2026', label: t('2026', '2026', '2026') },
  { slug: 'luang-prabang', label: t('Luang Prabang', 'Luang Prabang', 'ຫຼວງພະບາງ') },
  { slug: 'vientiane', label: t('Vientiane', 'Vientiane', 'ວຽງຈັນ') },
  { slug: 'artistes', label: t('Artistes', 'Artists', 'ສິລະປິນ') },
  { slug: 'public', label: t('Public', 'Audience', 'ຜູ້ຊົມ') },
  { slug: 'coulisses', label: t('Coulisses', 'Backstage', 'ເບື້ອງຫຼັງ') },
  { slug: 'inauguration', label: t('Inauguration', 'Opening', 'ພິທີເປີດ') },
]
/** Photos d’illustration Unsplash (crédits dans public/images/CREDITS.json) : [fichier, ratio, tags, légende]. */
const galleryPhotos = [
  ['luang-prabang-Wy9yEJcxAbw', 1.5, ['luang-prabang'], t('Le Haw Pha Bang à la tombée de la nuit', 'Haw Pha Bang at nightfall', 'ຫໍພະບາງ ຍາມຄ່ຳ')],
  ['public-hzgs56Ze49s', 1.5, ['public'], t('Le public au premier rang', 'The front row', 'ຜູ້ຊົມແຖວໜ້າ')],
  ['inauguration-X6qU8SnDjro', 2 / 3, ['inauguration'], t('Coucher de soleil sur le Mékong', 'Sunset over the Mekong', 'ຕາເວັນຕົກແມ່ນ້ຳຂອງ')],
  ['coulisses-OVEWbIgffDk', 1.5, ['coulisses'], t('Balance son', 'Sound check', 'ທົດສອບສຽງ')],
  ['vientiane-gg-owke2lz0', 1.5, ['vientiane'], t('Le That Luang', 'That Luang stupa', 'ພະທາດຫຼວງ')],
  ['artistes-Tso31gjjIHY', 1.5, ['artistes'], t('Costumes traditionnels hmong', 'Traditional Hmong costumes', 'ຊຸດມົ້ງພື້ນເມືອງ')],
  ['luang-prabang-_rcrgZMeEAU', 1.5, ['luang-prabang', 'public'], t('L’aumône du matin', 'Morning alms giving', 'ການຕັກບາດຕອນເຊົ້າ')],
  ['artistes-MDXwphHlpww', 2 / 3, ['artistes'], t('Atelier textile : le métier à tisser', 'Textile workshop: the loom', 'ເວີກຊັອບຜ້າ: ກີ່ທໍຜ້າ')],
  ['public-bn-D2bCvpik', 1.5, ['public'], t('Concert en plein air', 'Open-air concert', 'ຄອນເສີດກາງແຈ້ງ')],
  ['vientiane-DmG3yNfEd5Q', 16 / 9, ['vientiane'], t('L’avenue Lane Xang et le Palais présidentiel', 'Lane Xang Avenue and the Presidential Palace', 'ຖະໜົນລ້ານຊ້າງ ແລະ ທຳນຽບປະທານປະເທດ')],
  ['coulisses-dyJq7vzPeU8', 5 / 3, ['coulisses'], t('Réglage des lumières', 'Lighting set-up', 'ຕິດຕັ້ງແສງໄຟ')],
  ['artistes-sf78w_E13js', 1.5, ['artistes'], t('Musique traditionnelle', 'Traditional music', 'ດົນຕີພື້ນເມືອງ')],
  ['public-btkAWlS5Hrg', 1.5, ['public', 'inauguration'], t('Jour de fête en costumes', 'A festive day in costume', 'ມື້ບຸນໃນຊຸດພື້ນເມືອງ')],
  ['luang-prabang-GviEypkuHVA', 1.4, ['luang-prabang'], t('Le Haw Pha Bang, au cœur de Luang Prabang', 'Haw Pha Bang, in the heart of Luang Prabang', 'ຫໍພະບາງ ໃຈກາງຫຼວງພະບາງ')],
  ['coulisses-F2h_WbKnX4o', 1.6, ['coulisses'], t('Console de mixage', 'Mixing desk', 'ໂຕະປັບສຽງ')],
  ['public-eXVd7gDPO9A', 4 / 3, ['public'], t('Face à la scène', 'Facing the stage', 'ຕໍ່ໜ້າເວທີ')],
  ['vientiane-p7Yg8z5r7mI', 1.5, ['vientiane'], t('Le Haw Phra Kèo', 'Haw Phra Kaew', 'ຫໍພະແກ້ວ')],
  ['artistes-phS37wg8cQg', 1.5, ['artistes', 'coulisses'], t('Guitare en coulisses', 'Guitar backstage', 'ກີຕາຢູ່ເບື້ອງຫຼັງ')],
]
export const gallery = galleryPhotos.map(([file, ratio, tags, caption], i) => ({
  id: `g${i + 1}`,
  seed: `gallery-${i + 1}`,
  photo: `/images/galerie/${file}.jpg`,
  color: gp[i % gp.length],
  ratio,
  tags: ['2026', ...tags],
  caption,
}))

export const videoCategories = [
  { slug: 'teasers', label: t('Teasers', 'Teasers', 'ຕົວຢ່າງ') },
  { slug: 'interviews', label: t('Interviews', 'Interviews', 'ສຳພາດ') },
  { slug: 'portraits', label: t('Portraits d’artistes', 'Artist portraits', 'ສິລະປິນ') },
  { slug: 'making-of', label: t('Making-of', 'Making-of', 'ເບື້ອງຫຼັງ') },
  { slug: 'archives', label: t('Archives', 'Archives', 'ຄັງເອກະສານ') },
  { slug: 'aftermovies', label: t('Aftermovies', 'Aftermovies', 'ວິດີໂອສະຫຼຸບ') },
]
/** Ajouter `youtubeId` pour activer la lecture. */
export const videos = [
  { slug: 'teaser-2026', category: 'teasers', duration: '1:12', color: palette.tournesol, title: t('Teaser officiel 2026', 'Official 2026 teaser', 'ຕົວຢ່າງທາງການ 2026') },
  { slug: 'interview-clemence-arnaud', category: 'interviews', duration: '4:30', color: palette.cumulus, title: t('Rencontre avec Clémence Arnaud', 'Meet Clémence Arnaud', 'ພົບກັບ ເຄລມັງສ໌ ອາໂນ') },
  { slug: 'portrait-noy-phetsavanh', category: 'portraits', duration: '3:05', color: palette.macaron, title: t('Portrait : Noy Phetsavanh', 'Portrait: Noy Phetsavanh', 'ນ້ອຍ ເພັດສະຫວັນ') },
  { slug: 'making-of-deux-rives', category: 'making-of', duration: '6:48', color: palette.menthe, title: t('Making-of « Deux rives »', 'Making of “Two Banks”', 'ເບື້ອງຫຼັງ « ສອງຝັ່ງ »') },
  { slug: 'portrait-khamla-inthavong', category: 'portraits', duration: '2:50', color: palette.tuile, title: t('Portrait : Khamla Inthavong', 'Portrait: Khamla Inthavong', 'ຄຳຫຼ້າ ອິນທະວົງ') },
  { slug: 'archives-institut', category: 'archives', duration: '8:12', color: palette.ecume, title: t('Archives : 30 ans de coopération culturelle', 'Archives: 30 years of cultural cooperation', 'ຄັງເອກະສານ: 30 ປີແຫ່ງການຮ່ວມມື') },
  { slug: 'aftermovie-2026', category: 'aftermovies', duration: '—', color: palette.bourgeon, title: t('Aftermovie 2026 (après le festival)', '2026 aftermovie (after the festival)', 'ວິດີໂອສະຫຼຸບ 2026') },
]

export const faq = [
  {
    q: t('Le festival est-il gratuit ?', 'Is the festival free?', 'ເທດສະການບໍ່ເສຍຄ່າບໍ?'),
    a: t('La grande majorité des événements est gratuite. Les quelques événements payants indiquent leur tarif sur leur fiche.', 'Most events are free. The few paid events show their price on their event page.', 'ກິດຈະກຳສ່ວນໃຫຍ່ບໍ່ເສຍຄ່າ. ກິດຈະກຳທີ່ມີຄ່າທຳນຽມ ຈະລະບຸລາຄາໄວ້ໃນໜ້າກິດຈະກຳ.'),
  },
  {
    q: t('Faut-il réserver ?', 'Do I need to book?', 'ຕ້ອງຈອງບໍ?'),
    a: t('Les ateliers, les rencontres professionnelles et les événements payants nécessitent une inscription. Les concerts et projections en plein air sont en accès libre, dans la limite des places disponibles.', 'Workshops, professional meetings and paid events require registration. Open-air concerts and screenings are free entry, subject to capacity.', 'ເວີກຊັອບ, ການພົບປະມືອາຊີບ ແລະ ກິດຈະກຳທີ່ເສຍຄ່າ ຕ້ອງລົງທະບຽນ. ຄອນເສີດ ແລະ ການສາຍຮູບເງົາກາງແຈ້ງ ເຂົ້າຊົມໄດ້ຟຣີ ຕາມຈຳນວນບ່ອນນັ່ງ.'),
  },
  {
    q: t('Comment ajouter un événement à mon agenda ?', 'How do I add an event to my calendar?', 'ຈະເພີ່ມກິດຈະກຳໃສ່ປະຕິທິນແນວໃດ?'),
    a: t('Chaque événement propose un bouton « Agenda » : Google Agenda, Outlook ou fichier .ics (Apple Calendrier). Vous pouvez aussi ajouter des événements à « Mon festival » puis tout exporter d’un coup.', 'Each event has a “Calendar” button: Google Calendar, Outlook or an .ics file (Apple Calendar). You can also add events to “My festival” and export them all at once.', 'ທຸກກິດຈະກຳມີປຸ່ມ « ປະຕິທິນ »: Google, Outlook ຫຼື ໄຟລ໌ .ics. ທ່ານຍັງສາມາດເພີ່ມໃສ່ « ເທດສະການຂອງຂ້ອຍ » ແລ້ວສົ່ງອອກທັງໝົດພ້ອມກັນ.'),
  },
  {
    q: t('Où se déroulent les événements ?', 'Where do the events take place?', 'ກິດຈະກຳຈັດຢູ່ໃສ?'),
    a: t('À Luang Prabang du 3 au 9 novembre, puis à Vientiane du 10 au 21 novembre, à l’Institut français de chaque ville, présenté sur la carte interactive.', 'In Luang Prabang from 3 to 9 November, then in Vientiane from 10 to 21 November, at the Institut français in each city, shown on the interactive map.', 'ທີ່ຫຼວງພະບາງ 3–9 ພະຈິກ, ແລ້ວທີ່ວຽງຈັນ 10–21 ພະຈິກ, ທີ່ສະຖາບັນຝຣັ່ງຂອງແຕ່ລະເມືອງ ທີ່ສະແດງເທິງແຜນທີ່.'),
  },
  {
    q: t('Puis-je participer à plusieurs événements ?', 'Can I attend several events?', 'ເຂົ້າຮ່ວມຫຼາຍກິດຈະກຳໄດ້ບໍ?'),
    a: t('Bien sûr ! Composez votre parcours avec « Mon festival » : les événements se succèdent sans se chevaucher dans chaque ville.', 'Of course! Plan your route with “My festival”.', 'ແນ່ນອນ! ວາງແຜນເສັ້ນທາງຂອງທ່ານດ້ວຍ « ເທດສະການຂອງຂ້ອຍ ».'),
  },
  {
    q: t('Les événements sont-ils en français ?', 'Are events in French?', 'ກິດຈະກຳເປັນພາສາຝຣັ່ງບໍ?'),
    a: t('La plupart des rencontres sont bilingues français–lao, souvent avec interprétation. Les films sont sous-titrés et de nombreux spectacles sont sans paroles.', 'Most talks are bilingual French–Lao, often with interpretation. Films are subtitled and many shows are wordless.', 'ການພົບປະສ່ວນໃຫຍ່ເປັນສອງພາສາ ຝຣັ່ງ–ລາວ ມັກມີການແປ. ຮູບເງົາມີຄຳບັນຍາຍ ແລະ ຫຼາຍການສະແດງບໍ່ມີຄຳເວົ້າ.'),
  },
  {
    q: t('Y a-t-il des événements en lao ?', 'Are there events in Lao?', 'ມີກິດຈະກຳເປັນພາສາລາວບໍ?'),
    a: t('Oui : lectures, contes, projections de films lao et conférences avec traduction simultanée. La langue est indiquée sur chaque fiche.', 'Yes: readings, storytelling, Lao films and talks with simultaneous interpretation. The language is shown on each event page.', 'ມີ: ການອ່ານ, ນິທານ, ຮູບເງົາລາວ ແລະ ການບັນຍາຍທີ່ມີການແປ. ພາສາລະບຸໄວ້ໃນແຕ່ລະໜ້າ.'),
  },
]

/** Fichiers presse : `file` = chemin dans /public ; absent = bientôt disponible */
export const pressKit = [
  { slug: 'logo-svg', kind: 'logos', file: '/medias/logo-festival-france-laos-2026.svg', format: 'SVG', title: t('Logo du festival (couleur)', 'Festival logo (colour)', 'ໂລໂກ້ເທດສະການ (ສີ)') },
  { slug: 'logo-blanc', kind: 'logos', file: '/medias/logo-festival-france-laos-2026-blanc.svg', format: 'SVG', title: t('Logo du festival (blanc)', 'Festival logo (white)', 'ໂລໂກ້ເທດສະການ (ຂາວ)') },
  { slug: 'programme-ics', kind: 'programme', file: '/fr/programme.ics', format: 'ICS', title: t('Programme complet (agenda .ics)', 'Full programme (.ics calendar)', 'ກຳນົດການທັງໝົດ (.ics)') },
  { slug: 'dossier-presse', kind: 'dossier', format: 'PDF', title: t('Dossier de presse', 'Press kit', 'ເອກະສານສື່ມວນຊົນ') },
  { slug: 'communique', kind: 'dossier', format: 'PDF', title: t('Communiqué de presse', 'Press release', 'ຖະແຫຼງການ') },
  { slug: 'affiche', kind: 'affiches', format: 'PDF', title: t('Affiche officielle', 'Official poster', 'ໂປສເຕີທາງການ') },
  { slug: 'photos-hd', kind: 'photos', format: 'ZIP', title: t('Photos HD des artistes', 'Artist HD photos', 'ຮູບພາບ HD ຂອງສິລະປິນ') },
  { slug: 'biographies', kind: 'dossier', format: 'PDF', title: t('Biographies des artistes', 'Artist biographies', 'ຊີວະປະຫວັດສິລະປິນ') },
  { slug: 'programme-pdf', kind: 'programme', format: 'PDF', title: t('Programme imprimable', 'Printable programme', 'ກຳນົດການສຳລັບພິມ') },
  { slug: 'teaser-video', kind: 'videos', format: 'MP4', title: t('Teaser vidéo HD', 'HD video teaser', 'ວິດີໂອຕົວຢ່າງ HD') },
]
