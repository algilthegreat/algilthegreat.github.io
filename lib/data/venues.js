/**
 * Lieux du festival : les deux sites de l’Institut français du Laos.
 * ⚠️ Adresses et coordonnées GPS à valider par l’équipe de l’Institut français.
 */
const acc = {
  full: { fr: 'Accès de plain-pied, accueil adapté sur demande.', en: 'Step-free access, assistance on request.', lo: 'ທາງເຂົ້າບໍ່ມີຂັ້ນໄດ, ມີການຊ່ວຍເຫຼືອຕາມການຮ້ອງຂໍ.' },
}

const hours = {
  institut: { fr: 'Lun.–sam. 9h–18h, et les soirs d’événement.', en: 'Mon–Sat 9am–6pm, and on event evenings.', lo: 'ຈັນ–ເສົາ 9:00–18:00 ແລະ ຕອນແລງທີ່ມີກິດຈະກຳ.' },
}

export const venues = [
  /* ------------------------------ LUANG PRABANG ------------------------------ */
  {
    slug: 'institut-francais-luang-prabang',
    photo: '/images/lieux/institut-francais-luang-prabang.jpg',
    name: { fr: 'Institut français du Laos — Luang Prabang', en: 'Institut français du Laos — Luang Prabang', lo: 'ສະຖາບັນຝຣັ່ງ ປະຈຳລາວ — ຫຼວງພະບາງ' },
    shortName: { fr: 'Institut français — Luang Prabang', en: 'Institut français — Luang Prabang', lo: 'ສະຖາບັນຝຣັ່ງ — ຫຼວງພະບາງ' },
    kind: 'institut', citySlug: 'luang-prabang', featured: true,
    address: 'Ban Vat Nong, Sisavangvatthana Road, Luang Prabang',
    postalAddress: ['Ban Vat Nong', 'Sisavangvatthana Road', 'BP 874', 'Luang Prabang', 'Luang Prabang Province, Laos'].join('\n'),
    geo: [19.889, 102.136],
    description: {
      fr: 'L’antenne de l’Institut français à Luang Prabang propose tout au long de l’année cours de langue, médiathèque et programmation culturelle. Pendant le festival, elle devient le cœur battant de la semaine d’ouverture.',
      en: 'The Institut français branch in Luang Prabang offers language courses, a media library and cultural events all year round. During the festival it becomes the beating heart of the opening week.',
      lo: 'ສາຂາສະຖາບັນຝຣັ່ງ ທີ່ຫຼວງພະບາງ ມີຫ້ອງຮຽນພາສາ, ຫ້ອງສະໝຸດ ແລະ ກິດຈະກຳວັດທະນະທຳຕະຫຼອດປີ. ໃນຊ່ວງເທດສະການ ມັນກາຍເປັນຫົວໃຈຂອງອາທິດເປີດງານ.',
    },
    hours: hours.institut, accessibility: acc.full,
    access: { fr: 'À pied depuis le centre historique, tuk-tuk et vélo.', en: 'Walking distance from the old town; tuk-tuk or bicycle.', lo: 'ຍ່າງໄປໄດ້ຈາກເຂດເມືອງເກົ່າ, ລົດຕຸກຕຸກ ຫຼື ລົດຖີບ.' },
  },
  /* -------------------------------- VIENTIANE -------------------------------- */
  {
    slug: 'institut-francais-vientiane',
    photo: '/images/lieux/institut-francais-vientiane.jpg',
    name: { fr: 'Institut français du Laos — Vientiane', en: 'Institut français du Laos — Vientiane', lo: 'ສະຖາບັນຝຣັ່ງ ປະຈຳລາວ — ວຽງຈັນ' },
    shortName: { fr: 'Institut français — Vientiane', en: 'Institut français — Vientiane', lo: 'ສະຖາບັນຝຣັ່ງ — ວຽງຈັນ' },
    kind: 'institut', citySlug: 'vientiane', featured: true,
    address: 'Avenue Lane Xang, Vientiane',
    postalAddress: ['Avenue Lane Xang', 'BP 6572', 'Vientiane Capital, Laos'].join('\n'),
    geo: [17.966, 102.613],
    description: {
      fr: 'Siège de l’Institut français du Laos : salle de spectacle, galerie, médiathèque et centre de langue. Il accueille concerts, rencontres professionnelles et ateliers pendant toute la seconde partie du festival.',
      en: 'Headquarters of the Institut français du Laos: theatre, gallery, media library and language centre. It hosts concerts, professional meetings and workshops throughout the second half of the festival.',
      lo: 'ສຳນັກງານໃຫຍ່ຂອງສະຖາບັນຝຣັ່ງ ປະຈຳລາວ: ຫໍສະແດງ, ຫໍວາງສະແດງ, ຫ້ອງສະໝຸດ ແລະ ສູນພາສາ. ເປັນບ່ອນຈັດຄອນເສີດ, ການພົບປະມືອາຊີບ ແລະ ເວີກຊັອບ ຕະຫຼອດພາກທີສອງຂອງເທດສະການ.',
    },
    hours: hours.institut, accessibility: acc.full,
    access: { fr: 'Centre-ville, à proximité du Patuxai.', en: 'City centre, close to Patuxai.', lo: 'ໃຈກາງເມືອງ, ໃກ້ປະຕູໄຊ.' },
  },
]
