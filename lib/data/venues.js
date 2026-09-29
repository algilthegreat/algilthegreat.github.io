/**
 * Lieux du festival.
 * ⚠️ Adresses, coordonnées GPS et horaires à valider par l'équipe de l'Institut français
 * avant publication (valeurs indicatives de maquette).
 */
const acc = {
  full: { fr: 'Accès de plain-pied, accueil adapté sur demande.', en: 'Step-free access, assistance on request.', lo: 'ທາງເຂົ້າບໍ່ມີຂັ້ນໄດ, ມີການຊ່ວຍເຫຼືອຕາມການຮ້ອງຂໍ.' },
  partial: { fr: 'Accès partiel, contactez-nous pour organiser votre venue.', en: 'Partial access, contact us to plan your visit.', lo: 'ເຂົ້າເຖິງໄດ້ບາງສ່ວນ, ກະລຸນາຕິດຕໍ່ພວກເຮົາເພື່ອກະກຽມການມາຮ່ວມ.' },
  outdoor: { fr: 'Site en plein air accessible, sol en partie non stabilisé.', en: 'Accessible open-air site, partly uneven ground.', lo: 'ສະຖານທີ່ກາງແຈ້ງ ເຂົ້າເຖິງໄດ້, ພື້ນບາງສ່ວນບໍ່ສະເໝີ.' },
}

const hours = {
  institut: { fr: 'Lun.–sam. 9h–18h, et les soirs d’événement.', en: 'Mon–Sat 9am–6pm, and on event evenings.', lo: 'ຈັນ–ເສົາ 9:00–18:00 ແລະ ຕອນແລງທີ່ມີກິດຈະກຳ.' },
  musee: { fr: 'Mar.–dim. 9h–17h.', en: 'Tue–Sun 9am–5pm.', lo: 'ອັງຄານ–ອາທິດ 9:00–17:00.' },
  event: { fr: 'Ouverture 30 minutes avant chaque événement.', en: 'Doors open 30 minutes before each event.', lo: 'ເປີດປະຕູ 30 ນາທີ ກ່ອນແຕ່ລະກິດຈະກຳ.' },
}

export const venues = [
  /* ------------------------------ LUANG PRABANG ------------------------------ */
  {
    slug: 'institut-francais-luang-prabang',
    name: { fr: 'Institut français du Laos — Luang Prabang', en: 'Institut français du Laos — Luang Prabang', lo: 'ສະຖາບັນຝຣັ່ງ ປະຈຳລາວ — ຫຼວງພະບາງ' },
    shortName: { fr: 'Institut français — Luang Prabang', en: 'Institut français — Luang Prabang', lo: 'ສະຖາບັນຝຣັ່ງ — ຫຼວງພະບາງ' },
    kind: 'institut', citySlug: 'luang-prabang', featured: true,
    address: 'Centre-ville, Luang Prabang',
    geo: [19.889, 102.136],
    description: {
      fr: 'L’antenne de l’Institut français à Luang Prabang propose tout au long de l’année cours de langue, médiathèque et programmation culturelle. Pendant le festival, elle devient le cœur battant de la semaine d’ouverture.',
      en: 'The Institut français branch in Luang Prabang offers language courses, a media library and cultural events all year round. During the festival it becomes the beating heart of the opening week.',
      lo: 'ສາຂາສະຖາບັນຝຣັ່ງ ທີ່ຫຼວງພະບາງ ມີຫ້ອງຮຽນພາສາ, ຫ້ອງສະໝຸດ ແລະ ກິດຈະກຳວັດທະນະທຳຕະຫຼອດປີ. ໃນຊ່ວງເທດສະການ ມັນກາຍເປັນຫົວໃຈຂອງອາທິດເປີດງານ.',
    },
    hours: hours.institut, accessibility: acc.full,
    access: { fr: 'À pied depuis le centre historique, tuk-tuk et vélo.', en: 'Walking distance from the old town; tuk-tuk or bicycle.', lo: 'ຍ່າງໄປໄດ້ຈາກເຂດເມືອງເກົ່າ, ລົດຕຸກຕຸກ ຫຼື ລົດຖີບ.' },
  },
  {
    slug: 'berges-du-mekong-luang-prabang',
    name: { fr: 'Berges du Mékong', en: 'Mekong Riverside', lo: 'ແຄມແມ່ນ້ຳຂອງ' },
    kind: 'espace-public', citySlug: 'luang-prabang',
    address: 'Route Manthatourath, Luang Prabang',
    geo: [19.8925, 102.1372],
    description: {
      fr: 'Face au fleuve, une grande scène en plein air accueille l’inauguration du festival et les projections sous les étoiles.',
      en: 'Facing the river, a large open-air stage hosts the opening night and screenings under the stars.',
      lo: 'ເວທີກາງແຈ້ງຂະໜາດໃຫຍ່ ຫັນໜ້າສູ່ແມ່ນ້ຳ ເປັນສະຖານທີ່ພິທີເປີດ ແລະ ການສາຍຮູບເງົາໃຕ້ແສງດາວ.',
    },
    hours: hours.event, accessibility: acc.outdoor,
    access: { fr: 'Au bord du fleuve, à 5 minutes à pied du marché de nuit.', en: 'On the riverbank, 5 minutes’ walk from the night market.', lo: 'ຢູ່ແຄມນ້ຳ, ຍ່າງ 5 ນາທີ ຈາກຕະຫຼາດກາງຄືນ.' },
  },
  {
    slug: 'musee-du-patrimoine-luang-prabang',
    name: { fr: 'Musée du patrimoine', en: 'Heritage Museum', lo: 'ຫໍພິພິທະພັນມໍລະດົກ' },
    kind: 'musee', citySlug: 'luang-prabang',
    address: 'Route Sisavangvong, Luang Prabang',
    geo: [19.8908, 102.1358],
    description: {
      fr: 'Dans une maison traditionnelle restaurée, le musée accueille l’exposition photographique du festival et les conférences patrimoine.',
      en: 'Set in a restored traditional house, the museum hosts the festival’s photography exhibition and heritage talks.',
      lo: 'ໃນເຮືອນພື້ນເມືອງທີ່ໄດ້ຮັບການບູລະນະ, ຫໍພິພິທະພັນເປັນບ່ອນວາງສະແດງພາບຖ່າຍ ແລະ ການບັນຍາຍກ່ຽວກັບມໍລະດົກ.',
    },
    hours: hours.musee, accessibility: acc.partial,
    access: { fr: 'Rue principale du centre historique.', en: 'Main street of the old town.', lo: 'ຖະໜົນສາຍຫຼັກ ໃນເຂດເມືອງເກົ່າ.' },
  },
  {
    slug: 'galerie-sisavangvong',
    name: { fr: 'Galerie Sisavangvong', en: 'Sisavangvong Gallery', lo: 'ຫໍວາງສະແດງ ສີສະຫວ່າງວົງ' },
    kind: 'galerie', citySlug: 'luang-prabang',
    address: 'Route Sisavangvong, Luang Prabang',
    geo: [19.8893, 102.1349],
    description: {
      fr: 'Galerie d’art contemporain et atelier ouvert, lieu des expositions et des ateliers textile.',
      en: 'Contemporary art gallery and open studio, home to exhibitions and textile workshops.',
      lo: 'ຫໍວາງສະແດງສິລະປະຮ່ວມສະໄໝ ແລະ ຫ້ອງເຮັດວຽກເປີດ, ບ່ອນຈັດນິທັດສະການ ແລະ ເວີກຊັອບຜ້າ.',
    },
    hours: hours.musee, accessibility: acc.full,
    access: { fr: 'Centre historique, à côté du marché de nuit.', en: 'Old town, next to the night market.', lo: 'ເຂດເມືອງເກົ່າ, ໃກ້ຕະຫຼາດກາງຄືນ.' },
  },
  {
    slug: 'jardin-des-saveurs-luang-prabang',
    name: { fr: 'Jardin des Saveurs', en: 'Garden of Flavours', lo: 'ສວນແຫ່ງລົດຊາດ' },
    kind: 'restaurant', citySlug: 'luang-prabang',
    address: 'Ban Wat That, Luang Prabang',
    geo: [19.8876, 102.1338],
    description: {
      fr: 'Restaurant-jardin partenaire, cadre du dîner à quatre mains franco-lao.',
      en: 'Partner garden restaurant, setting for the Franco-Lao four-hands dinner.',
      lo: 'ຮ້ານອາຫານສວນຄູ່ຮ່ວມ, ສະຖານທີ່ຈັດອາຫານຄ່ຳສີ່ມື ຝຣັ່ງ-ລາວ.',
    },
    hours: hours.event, accessibility: acc.partial,
    access: { fr: 'Sur réservation uniquement.', en: 'Booking required.', lo: 'ຕ້ອງຈອງລ່ວງໜ້າເທົ່ານັ້ນ.' },
  },
  /* -------------------------------- VIENTIANE -------------------------------- */
  {
    slug: 'institut-francais-vientiane',
    name: { fr: 'Institut français du Laos — Vientiane', en: 'Institut français du Laos — Vientiane', lo: 'ສະຖາບັນຝຣັ່ງ ປະຈຳລາວ — ວຽງຈັນ' },
    shortName: { fr: 'Institut français — Vientiane', en: 'Institut français — Vientiane', lo: 'ສະຖາບັນຝຣັ່ງ — ວຽງຈັນ' },
    kind: 'institut', citySlug: 'vientiane', featured: true,
    address: 'Avenue Lang Xang, Vientiane',
    geo: [17.966, 102.613],
    description: {
      fr: 'Siège de l’Institut français du Laos : salle de spectacle, galerie, médiathèque et centre de langue. Il accueille concerts, rencontres professionnelles et ateliers pendant toute la seconde partie du festival.',
      en: 'Headquarters of the Institut français du Laos: theatre, gallery, media library and language centre. It hosts concerts, professional meetings and workshops throughout the second half of the festival.',
      lo: 'ສຳນັກງານໃຫຍ່ຂອງສະຖາບັນຝຣັ່ງ ປະຈຳລາວ: ຫໍສະແດງ, ຫໍວາງສະແດງ, ຫ້ອງສະໝຸດ ແລະ ສູນພາສາ. ເປັນບ່ອນຈັດຄອນເສີດ, ການພົບປະມືອາຊີບ ແລະ ເວີກຊັອບ ຕະຫຼອດພາກທີສອງຂອງເທດສະການ.',
    },
    hours: hours.institut, accessibility: acc.full,
    access: { fr: 'Centre-ville, à proximité du Patuxai.', en: 'City centre, close to Patuxai.', lo: 'ໃຈກາງເມືອງ, ໃກ້ປະຕູໄຊ.' },
  },
  {
    slug: 'salle-nationale-de-la-culture',
    name: { fr: 'Salle nationale de la culture', en: 'National Culture Hall', lo: 'ຫໍວັດທະນະທຳແຫ່ງຊາດ' },
    kind: 'salle', citySlug: 'vientiane',
    address: 'Centre-ville, Vientiane',
    geo: [17.9648, 102.6088],
    description: {
      fr: 'La grande salle de Vientiane accueille les spectacles de danse et de théâtre jeune public du festival.',
      en: 'Vientiane’s main hall hosts the festival’s dance performances and young-audience theatre.',
      lo: 'ຫໍສະແດງໃຫຍ່ຂອງວຽງຈັນ ເປັນບ່ອນຈັດການສະແດງການເຕັ້ນ ແລະ ລະຄອນສຳລັບເດັກ.',
    },
    hours: hours.event, accessibility: acc.full,
    access: { fr: 'Centre-ville, parking à proximité.', en: 'City centre, parking nearby.', lo: 'ໃຈກາງເມືອງ, ມີບ່ອນຈອດລົດໃກ້ຄຽງ.' },
  },
  {
    slug: 'musee-national-du-laos',
    name: { fr: 'Musée national du Laos', en: 'Lao National Museum', lo: 'ຫໍພິພິທະພັນແຫ່ງຊາດລາວ' },
    kind: 'musee', citySlug: 'vientiane',
    address: 'Vientiane',
    geo: [17.9752, 102.6305],
    description: {
      fr: 'Après Luang Prabang, l’exposition « Lumières du Mékong » descend le fleuve et s’installe au Musée national.',
      en: 'After Luang Prabang, the “Mekong Lights” exhibition travels down the river to the National Museum.',
      lo: 'ຫຼັງຈາກຫຼວງພະບາງ, ນິທັດສະການ « ແສງແຫ່ງແມ່ນ້ຳຂອງ » ລ່ອງລົງມາຕາມແມ່ນ້ຳ ສູ່ຫໍພິພິທະພັນແຫ່ງຊາດ.',
    },
    hours: hours.musee, accessibility: acc.full,
    access: { fr: 'Taxi ou tuk-tuk depuis le centre (15 min).', en: 'Taxi or tuk-tuk from the centre (15 min).', lo: 'ແທັກຊີ ຫຼື ຕຸກຕຸກ ຈາກໃຈກາງເມືອງ (15 ນາທີ).' },
  },
  {
    slug: 'cine-club-des-berges',
    name: { fr: 'Ciné-club des Berges', en: 'Riverside Film Club', lo: 'ສະໂມສອນຮູບເງົາແຄມນ້ຳ' },
    kind: 'cinema', citySlug: 'vientiane',
    address: 'Quai Fa Ngum, Vientiane',
    geo: [17.9632, 102.6052],
    description: {
      fr: 'Salle de 120 places au bord du Mékong, lieu du cycle cinéma du festival.',
      en: 'A 120-seat cinema on the Mekong, home to the festival’s film season.',
      lo: 'ໂຮງຮູບເງົາ 120 ບ່ອນນັ່ງ ແຄມແມ່ນ້ຳຂອງ, ບ່ອນສາຍຮູບເງົາຂອງເທດສະການ.',
    },
    hours: hours.event, accessibility: acc.full,
    access: { fr: 'Quai Fa Ngum, près du parc Chao Anouvong.', en: 'Fa Ngum Quay, near Chao Anouvong Park.', lo: 'ຖະໜົນຟ້າງຸ່ມ, ໃກ້ສວນເຈົ້າອານຸວົງ.' },
  },
  {
    slug: 'universite-nationale-du-laos',
    name: { fr: 'Université nationale du Laos', en: 'National University of Laos', lo: 'ມະຫາວິທະຍາໄລແຫ່ງຊາດລາວ' },
    kind: 'universite', citySlug: 'vientiane',
    address: 'Campus de Dongdok, Vientiane',
    geo: [18.038, 102.644],
    description: {
      fr: 'Le campus de Dongdok accueille tables rondes, conférences et rencontres autour de la langue française et de la traduction.',
      en: 'The Dongdok campus hosts round tables, talks and meetings on the French language and translation.',
      lo: 'ວິທະຍາເຂດດົງໂດກ ເປັນບ່ອນຈັດໂຕະມົນ, ການບັນຍາຍ ແລະ ການພົບປະກ່ຽວກັບພາສາຝຣັ່ງ ແລະ ການແປ.',
    },
    hours: hours.event, accessibility: acc.partial,
    access: { fr: 'Navette gratuite depuis l’Institut français (sur inscription).', en: 'Free shuttle from the Institut français (registration required).', lo: 'ລົດຮັບສົ່ງຟຣີ ຈາກສະຖາບັນຝຣັ່ງ (ຕ້ອງລົງທະບຽນ).' },
  },
  {
    slug: 'parc-chao-anouvong',
    name: { fr: 'Parc Chao Anouvong', en: 'Chao Anouvong Park', lo: 'ສວນເຈົ້າອານຸວົງ' },
    kind: 'espace-public', citySlug: 'vientiane',
    address: 'Quai Fa Ngum, Vientiane',
    geo: [17.9617, 102.6038],
    description: {
      fr: 'Le grand parc au bord du Mékong accueille la soirée d’ouverture à Vientiane, la performance numérique et le concert de clôture.',
      en: 'The large riverside park hosts the Vientiane opening night, the digital performance and the closing concert.',
      lo: 'ສວນໃຫຍ່ແຄມແມ່ນ້ຳຂອງ ເປັນບ່ອນຈັດງານເປີດທີ່ວຽງຈັນ, ການສະແດງດິຈິຕອນ ແລະ ຄອນເສີດປິດງານ.',
    },
    hours: hours.event, accessibility: acc.outdoor,
    access: { fr: 'Bord du fleuve, centre-ville.', en: 'Riverside, city centre.', lo: 'ແຄມນ້ຳ, ໃຈກາງເມືອງ.' },
  },
  {
    slug: 'galerie-lang-xang',
    name: { fr: 'Galerie Lang Xang', en: 'Lang Xang Gallery', lo: 'ຫໍວາງສະແດງ ລ້ານຊ້າງ' },
    kind: 'galerie', citySlug: 'vientiane',
    address: 'Avenue Lang Xang, Vientiane',
    geo: [17.9702, 102.6152],
    description: {
      fr: 'Galerie de design et d’arts appliqués, lieu de l’exposition « Tisser demain ».',
      en: 'Design and applied-arts gallery, home to the “Weaving Tomorrow” exhibition.',
      lo: 'ຫໍວາງສະແດງການອອກແບບ ແລະ ສິລະປະປະຍຸກ, ບ່ອນຈັດນິທັດສະການ « ຖັກທໍອະນາຄົດ ».',
    },
    hours: hours.musee, accessibility: acc.full,
    access: { fr: 'Avenue Lang Xang, à 5 minutes de l’Institut français.', en: 'Lang Xang Avenue, 5 minutes from the Institut français.', lo: 'ຖະໜົນລ້ານຊ້າງ, 5 ນາທີ ຈາກສະຖາບັນຝຣັ່ງ.' },
  },
  {
    slug: 'maison-des-saveurs-vientiane',
    name: { fr: 'Maison des Saveurs', en: 'House of Flavours', lo: 'ເຮືອນແຫ່ງລົດຊາດ' },
    kind: 'restaurant', citySlug: 'vientiane',
    address: 'Rue Setthathirath, Vientiane',
    geo: [17.9641, 102.6079],
    description: {
      fr: 'École de cuisine et restaurant partenaire, lieu des ateliers culinaires franco-lao.',
      en: 'Cooking school and partner restaurant, home to the Franco-Lao cooking workshops.',
      lo: 'ໂຮງຮຽນສອນປຸງແຕ່ງອາຫານ ແລະ ຮ້ານອາຫານຄູ່ຮ່ວມ, ບ່ອນຈັດເວີກຊັອບອາຫານ ຝຣັ່ງ-ລາວ.',
    },
    hours: hours.event, accessibility: acc.partial,
    access: { fr: 'Centre-ville, rue Setthathirath.', en: 'City centre, Setthathirath Road.', lo: 'ໃຈກາງເມືອງ, ຖະໜົນເສດຖາທິລາດ.' },
  },
]
