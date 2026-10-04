/**
 * Artistes et collectifs.
 * ⚠️ Profils de démonstration (noms et biographies fictifs) à remplacer par les
 * artistes réellement programmés. Photos d’illustration Unsplash (crédits dans
 * public/images/CREDITS.json) : remplacer `photo` par une vraie photographie,
 * ou le supprimer pour revenir au visuel génératif.
 */
const t = (fr, en, lo) => ({ fr, en, lo });

export const artists = [
  {
    slug: "charlotte-andraca-tosseri",
    photo: "/images/artistes/charlotte.jpg",
    name: "Charlotte Andraca Tosseri",
    kind: "artist",
    country: "FR",
    roles: ["photographe"],
    disciplines: ["arts-visuels"],
    tagline: t("Photographe", "Photographer", "ຊ່າງພາບ"),
    bio: t(
      "Charlotte Andraca Tosseri est photographe et vit à Vientiane depuis cinq ans. Elle parcourt l’Asie du Sud-Est depuis près de vingt ans. Elle s’intéresse aux gens et aux histoires qu’ils portent, qu’elle cherche à raconter en images. Derrière l’objectif, elle souhaite mettre en lumière la rencontre d’une personne, gardienne d’un savoir, d’un geste, d’une mémoire. Pour « Les mains du maître – L’expression d’un geste », elle a pris le temps de s’immerger dans l’atelier d’Oudonsak, d’observer en silence son travail, ses outils et les détails de la fabrication du khène. Ici, les mots ont laissé place à un autre langage : les regards, l’écoute, l’observation et le souffle. Cette série met en lumière celui qui se tient derrière l’instrument et raconte ce qui précède les premières notes : son histoire, son geste et ce qu’il transmet à travers son savoir. Présentée à Vientiane, l’exposition est aujourd’hui accueillie à l’Institut français de Luang Prabang, dans le cadre du Festival France-Laos 2026-2027.",
      "Charlotte Andraca Tosseri is a photographer based in Vientiane, where she has lived for five years. She has travelled throughout Southeast Asia for nearly twenty years. She is drawn to people and the stories they carry, which she seeks to tell through images. Behind the lens, she seeks to bring to light the encounter with a person who is the guardian of a knowledge, a gesture, a memory. For “The Master’s Hands – The Expression of a Gesture,” she spent time immersed in Oudonsak’s workshop, quietly observing his work, his tools and the details of khène making. Here, words gave way to another language: looks, listening, observation and breath. This series brings to light the man behind the instrument and tells what comes before the first notes: his story, his craft and what he passes on through his knowledge. Previously presented in Vientiane, the exhibition is now hosted by the Institut français de Luang Prabang, as part of the France-Laos Festival 2026–2027.",
      "ຊາລັອດ ອັນດຣາກາ ໂຕສເຊຣີ (Charlotte Andraca Tosseri) ເປັນຊ່າງພາບທີ່ອາໄສຢູ່ນະຄອນຫຼວງວຽງຈັນ ແລະໄດ້ອາໄສຢູ່ທີ່ນີ້ມາເປັນເວລາ 5 ປີແລ້ວ. ຕະຫຼອດເກືອບ 20 ປີຜ່ານມາ, ນາງໄດ້ເດີນທາງໄປທົ່ວພາກພື້ນອາຊີຕາເວັນອອກສຽງໃຕ້. ນາງສົນໃຈຜູ້ຄົນ ແລະເລື່ອງລາວທີ່ພວກເຂົາແບກພາຍໃນຕົນເອງ ເຊິ່ງນາງພະຍາຍາມຖ່າຍທອດອອກມາຜ່ານຮູບພາບ. ຢູ່ຫຼັງເລນກ້ອງ, ນາງມຸ່ງໝາຍທີ່ຈະເຮັດໃຫ້ “ການພົບພາ” ກັບບຸກຄົນຜູ້ໜຶ່ງປາກົດຊັດຂຶ້ນ — ບຸກຄົນຜູ້ເປັນຜູ້ສືບທອດ ແລະຜູ້ຮັກສາຄວາມຮູ້, ທ່າທາງ ແລະຄວາມຊົງຈຳ. ສຳລັບຜົນງານ « ມືຂອງຄູຊ່າງ – ການສະແດງອອກຂອງທ່າທາງ », ນາງໄດ້ໃຊ້ເວລາຢູ່ໃນຮ້ານຊ່າງຂອງອຸດອນສັກ (Oudonsak), ຄ່ອຍໆສັງເກດເບິ່ງວຽກງານ, ເຄື່ອງມື ແລະລາຍລະອຽດຕ່າງໆໃນການເຮັດແຄນ. ຢູ່ທີ່ນີ້, ຄຳເວົ້າໄດ້ຫຼີກທາງໃຫ້ກັບພາສາອີກຮູບແບບໜຶ່ງ: ສາຍຕາ, ການຟັງ, ການສັງເກດ ແລະລົມຫາຍໃຈ. ຊຸດຮູບພາບນີ້ເຮັດໃຫ້ເຮົາເຫັນ “ຄົນ” ທີ່ຢູ່ເບື້ອງຫຼັງເຄື່ອງດົນຕີ ແລະບອກເລື່ອງລາວຂອງສິ່ງທີ່ເກີດຂຶ້ນກ່ອນສຽງເພງທຳອິດຈະດັງຂຶ້ນ: ເລື່ອງລາວຂອງລາວ, ຝີມືຂອງລາວ ແລະສິ່ງທີ່ລາວສືບຕໍ່ຖ່າຍທອດຜ່ານຄວາມຮູ້ຂອງຕົນ. ຫຼັງຈາກໄດ້ຈັດສະແດງກ່ອນໜ້ານີ້ທີ່ວຽງຈັນ, ນິທັດສະການແຫ່ງນີ້ກຳລັງຈັດສະແດງຢູ່ທີ່ສະຖາບັນຝຣັ່ງຫຼວງພະບາງ (Institut français de Luang Prabang), ເຊິ່ງເປັນສ່ວນໜຶ່ງຂອງ France-Laos Festival 2026–2027.",
    ),
    practice: t(
      "Une photographie attentive aux personnes, aux gestes, aux savoirs et aux mémoires qu’ils portent.",
      "Photography attentive to people, gestures, knowledge and the memories they carry.",
      "ການຖ່າຍຮູບທີ່ໃສ່ໃຈຕໍ່ຜູ້ຄົນ, ທ່າທາງ, ຄວາມຮູ້ ແລະ ຄວາມຊົງຈຳທີ່ພວກເຂົາຖືຄອງ.",
    ),
    timeline: [
      {
        year: 2026,
        text: t(
          "Festival France–Laos — exposition « Les mains du maître – L’expression d’un geste » à l’Institut français de Luang Prabang",
          "France–Laos Festival — exhibition “The Master’s Hands – The Expression of a Gesture” at the Institut français de Luang Prabang",
          "ເທດສະການ ຝຣັ່ງ–ລາວ — ນິທັດສະການ « ມືຂອງຄູຊ່າງ – ການສະແດງອອກຂອງທ່າທາງ » ທີ່ສະຖາບັນຝຣັ່ງຫຼວງພະບາງ",
        ),
      },
      {
        year: 2026,
        text: t(
          "Présentation de l’exposition à Vientiane",
          "Exhibition presented in Vientiane",
          "ຈັດສະແດງນິທັດສະການທີ່ວຽງຈັນ",
        ),
      },
      {
        year: 2026,
        text: t(
          "Immersion dans l’atelier d’Oudonsak autour de la fabrication du khène",
          "Immersion in Oudonsak’s workshop, exploring the making of the khène",
          "ເຂົ້າໄປສຳຜັດ ແລະ ສັງເກດຢູ່ໃນຮ້ານຊ່າງຂອງອຸດອນສັກ ກ່ຽວກັບການເຮັດແຄນ",
        ),
      },
    ],
    works: [
      {
        title: t(
          "Les mains du maître – L’expression d’un geste",
          "The Master’s Hands – The Expression of a Gesture",
          "ມືຂອງຄູຊ່າງ – ການສະແດງອອກຂອງທ່າທາງ",
        ),
        year: 2026,
      },
    ],
    inFrance: t(
      "Exposition présentée dans le cadre du Festival France-Laos 2026-2027 à l’Institut français de Luang Prabang.",
      "Exhibition presented as part of the France-Laos Festival 2026-2027 at the Institut français de Luang Prabang.",
      "ນິທັດສະການຈັດຂຶ້ນໃນຂອບເຂດເທດສະການ ຝຣັ່ງ–ລາວ 2026-2027 ທີ່ສະຖາບັນຝຣັ່ງຫຼວງພະບາງ.",
    ),
    inLaos: t(
      "Photographe basée à Vientiane depuis cinq ans, elle parcourt l’Asie du Sud-Est depuis près de vingt ans et s’intéresse aux personnes et aux histoires qu’elles portent.",
      "A photographer based in Vientiane for five years, she has travelled throughout Southeast Asia for nearly twenty years, focusing on people and the stories they carry.",
      "ເປັນຊ່າງພາບທີ່ອາໄສຢູ່ວຽງຈັນມາໄດ້ 5 ປີ ແລະ ໄດ້ເດີນທາງທົ່ວອາຊີຕາເວັນອອກສຽງໃຕ້ມາເກືອບ 20 ປີ, ໂດຍສົນໃຈຜູ້ຄົນ ແລະ ເລື່ອງລາວທີ່ພວກເຂົາຖືຄອງ.",
    ),
  },
  {
    slug: "compagnie-entite",
    name: "Compagnie Entité",
    kind: "collective",
    photo: "/images/artistes/cop.jpg",
    country: "FR",
    roles: ["danseur"],
    disciplines: ["danse"],
    tagline: t(
      "Danse hip hop — direction artistique Simon Dimouro",
      "Hip hop dance — artistic direction by Simon Dimouro",
      "ການເຕັ້ນຮິບຮັອບ — ກຳກັບສິລະປະໂດຍ ຊີມົງ ດີມູໂຣ",
    ),
    bio: t(
      "C’est en août 2015 que Simon Dimouro crée les bases de la Compagnie Entité, une compagnie de danse œuvrant pour le développement de la création chorégraphique sur le territoire tourangeau et en région Centre-Val de Loire. La compagnie développe une écriture hybride qui s’épanouit dans la transdisciplinarité. Elle puise son essence créative dans l’instinctivité et la fulgurance de la danse hip hop.\n\n" +
        "La Compagnie Entité bénéficie depuis 2016 du soutien du conservatoire Francis Poulenc, Conservatoire à Rayonnement Régional de Tours, de la ville de Tours et du département d’Indre-et-Loire. Son objectif central est de promouvoir l’art chorégraphique sous toutes ses formes.\n\n" +
        "Les créations amateurs ont une place importante dans la compagnie, qui mène de nombreuses interventions, diverses et variées, avec les écoles maternelles et primaires, le conservatoire ainsi que les prisons.\n\n" +
        "La Compagnie Entité est conventionnée par la DRAC Centre-Val de Loire pour les années 2022 et 2023.",
      "Simon Dimouro laid the foundations of Compagnie Entité in August 2015: a dance company working to develop choreographic creation in the Tours area and the Centre-Val de Loire region. The company has developed a hybrid language that thrives on cross-disciplinary work. It draws its creative essence from the instinct and brilliance of hip hop dance.\n\n" +
        "Since 2016, Compagnie Entité has been supported by the Conservatoire Francis Poulenc, the regional conservatoire of Tours, the city of Tours and the Indre-et-Loire department. Its central aim is to promote choreographic art in all its forms.\n\n" +
        "Amateur creation plays an important role in the company, which runs many diverse projects with nursery and primary schools, the conservatoire and prisons.\n\n" +
        "Compagnie Entité was supported under agreement by the DRAC Centre-Val de Loire in 2022 and 2023.",
      "ຊີມົງ ດີມູໂຣ (Simon Dimouro) ໄດ້ວາງພື້ນຖານຂອງຄະນະ Compagnie Entité ໃນເດືອນສິງຫາ 2015: ຄະນະເຕັ້ນລຳທີ່ເຮັດວຽກເພື່ອພັດທະນາການສ້າງສັນທ່າເຕັ້ນ ໃນເຂດເມືອງຕູ (Tours) ແລະ ແຂວງ Centre-Val de Loire. ຄະນະໄດ້ພັດທະນາພາສາການເຕັ້ນແບບປະສົມ ທີ່ເຕີບໃຫຍ່ຜ່ານການເຮັດວຽກຂ້າມສາຂາສິລະປະ ແລະ ໄດ້ແຮງບັນດານໃຈຈາກສັນຊາດຕະຍານ ແລະ ຄວາມວ່ອງໄວຂອງການເຕັ້ນຮິບຮັອບ.\n\n" +
        "ຕັ້ງແຕ່ປີ 2016, ຄະນະ Compagnie Entité ໄດ້ຮັບການສະໜັບສະໜູນຈາກໂຮງຮຽນດົນຕີ Francis Poulenc ເມືອງຕູ, ເມືອງຕູ ແລະ ແຂວງ Indre-et-Loire. ເປົ້າໝາຍຫຼັກຂອງຄະນະແມ່ນການສົ່ງເສີມສິລະປະການເຕັ້ນໃນທຸກຮູບແບບ.\n\n" +
        "ການສ້າງສັນກັບນັກເຕັ້ນສະໝັກຫຼິ້ນມີບົດບາດສຳຄັນໃນຄະນະ ເຊິ່ງໄດ້ດຳເນີນໂຄງການຫຼາກຫຼາຍກັບໂຮງຮຽນອະນຸບານ, ໂຮງຮຽນປະຖົມ, ໂຮງຮຽນດົນຕີ ແລະ ເຮືອນຈຳ.\n\n" +
        "ຄະນະ Compagnie Entité ໄດ້ຮັບການສະໜັບສະໜູນຕາມສັນຍາຈາກ DRAC Centre-Val de Loire ໃນປີ 2022 ແລະ 2023.",
    ),
    practice: t(
      "Une écriture hybride qui s’épanouit dans la transdisciplinarité et puise dans l’instinctivité et la fulgurance de la danse hip hop.",
      "A hybrid language that thrives on cross-disciplinary work, drawing on the instinct and brilliance of hip hop.",
      "ພາສາການເຕັ້ນແບບປະສົມ ທີ່ເຕີບໃຫຍ່ຜ່ານການເຮັດວຽກຂ້າມສາຂາ ແລະ ໄດ້ແຮງບັນດານໃຈຈາກການເຕັ້ນຮິບຮັອບ.",
    ),
    timeline: [
      {
        year: 2022,
        text: t(
          "Conventionnement par la DRAC Centre-Val de Loire (2022-2023)",
          "Supported under agreement by the DRAC Centre-Val de Loire (2022–2023)",
          "ໄດ້ຮັບການສະໜັບສະໜູນຕາມສັນຍາຈາກ DRAC Centre-Val de Loire (2022–2023)",
        ),
      },
      {
        year: 2016,
        text: t(
          "Soutien du conservatoire de Tours, de la ville de Tours et du département d’Indre-et-Loire",
          "Support from the Tours conservatoire, the city of Tours and the Indre-et-Loire department",
          "ໄດ້ຮັບການສະໜັບສະໜູນຈາກໂຮງຮຽນດົນຕີເມືອງຕູ, ເມືອງຕູ ແລະ ແຂວງ Indre-et-Loire",
        ),
      },
      {
        year: 2015,
        text: t(
          "Création de la compagnie par Simon Dimouro, à Tours",
          "Company founded in Tours by Simon Dimouro",
          "ຊີມົງ ດີມູໂຣ ກໍ່ຕັ້ງຄະນະທີ່ເມືອງຕູ",
        ),
      },
    ],
    works: [],
    inFrance: t(
      "Compagnie basée à Tours, soutenue par le conservatoire Francis Poulenc, la ville de Tours et le département d’Indre-et-Loire.",
      "Company based in Tours, supported by the Conservatoire Francis Poulenc, the city of Tours and the Indre-et-Loire department.",
      "ຄະນະຕັ້ງຢູ່ເມືອງຕູ, ໄດ້ຮັບການສະໜັບສະໜູນຈາກໂຮງຮຽນດົນຕີ Francis Poulenc, ເມືອງຕູ ແລະ ແຂວງ Indre-et-Loire.",
    ),
    inLaos: t(
      "Invitée du Festival France–Laos 2026-2027.",
      "Guest of the France–Laos Festival 2026–2027.",
      "ແຂກຮັບເຊີນຂອງເທດສະການ ຝຣັ່ງ–ລາວ 2026–2027.",
    ),
  },
  {
    slug: "simon-dimouro",
    name: "Simon Dimouro",
    kind: "artist",
    photo: "/images/artistes/simon.jpg",
    country: "FR",
    roles: ["danseur"],
    disciplines: ["danse"],
    tagline: t(
      "Danseur et chorégraphe hip hop, fondateur de la Compagnie Entité",
      "Hip hop dancer and choreographer, founder of Compagnie Entité",
      "ນັກເຕັ້ນ ແລະ ນັກອອກແບບທ່າເຕັ້ນຮິບຮັອບ, ຜູ້ກໍ່ຕັ້ງຄະນະ Compagnie Entité",
    ),
    bio: t(
      "Simon Dimouro est né en 1990 à Tours. Il commence la danse hip hop à l’âge de 10 ans. Désireux de consolider ses acquis techniques et de développer de nouvelles compétences artistiques, il intègre à 21 ans, à Bordeaux, la formation professionnelle de la compagnie Rêvolution, premier centre de formation pour interprètes hip hop en France. Dès sa première année, il est repéré par Anthony Egea, directeur artistique de la compagnie, qui l’engage comme interprète pour une tournée internationale avec le spectacle « Urban Ballet ».\n\n" +
        "Empreint d’une curiosité grandissante, il participe à partir de 2013 à des créations aussi atypiques qu’éclectiques, en intégrant la compagnie X-press, la Ridzcie, la compagnie Faizal Zeghoudi, la compagnie Karine Saporta, la compagnie Next Zone (Copenhague), le projet « Répertoire » de Mourad Merzouki et plusieurs autres compagnies.\n\n" +
        "Habité par un besoin de créer, il signe à 22 ans le premier volet d’un solo, « Rencontre ». Il affirme sa singularité grâce à un univers chorégraphique hybride, sensible, musical et instinctif.\n\n" +
        "Parallèlement à son activité d’interprète, il fonde la Compagnie Entité en 2015 et devient artiste associé au conservatoire Francis Poulenc, Conservatoire à Rayonnement Régional de Tours, de 2015 à 2017. Il en rejoint l’équipe pédagogique à partir de 2024.\n\n" +
        "Depuis 2019, il intervient pour le Centre Chorégraphique National de Tours (direction Thomas Lebrun) ainsi que pour le Centre Chorégraphique National d’Orléans (direction Maud Le Pladec et collectif ES), dans différents projets et en milieu scolaire. Il est le premier danseur à faire entrer la danse hip hop au conservatoire Francis Poulenc de Tours et au Conservatoire à Rayonnement Départemental d’Orléans.\n\n" +
        "Origine de l’engagement artistique — La danse hip hop a influencé sa vision du monde : une philosophie du mouvement comme forme de liberté, comme manière d’exister. Née dans les quartiers populaires, elle a été créée pour tous·tes, sans distinction d’âge, de genre, d’origine sociale ou culturelle. Dans cet espace de liberté, chacun est libre d’être soi-même, d’exprimer ses émotions et ses vécus à travers le mouvement. Il n’y a pas de règles, pas de codes à suivre, seulement l’impulsion du corps et la créativité.\n\n" +
        "Vision démocratique de l’art — Pour Simon, la danse n’est pas un art des galeries, mais un langage universel. Il souhaite abattre les frontières entre l’art et le public, car pour lui la danse doit être un moyen d’expression ouvert à tous, sans distinction de culture ou de milieu social. L’art, selon lui, doit servir ceux qui en ont besoin et aller à la rencontre des gens là où ils vivent, dans leurs rues, leurs quartiers. C’est un art pour et par le peuple, qui se veut vivant, ancré dans le quotidien, et capable de créer des ponts entre les différentes communautés. Simon insiste sur le fait que l’art ne doit pas être réservé à une élite intellectuelle ou sociale, mais doit être un vecteur de rassemblement, d’épanouissement et de liberté d’expression pour tous. Cette approche inclusive résonne avec des valeurs profondes de partage, de solidarité et de représentation.",
      "Simon Dimouro was born in Tours in 1990 and started hip hop dance at the age of 10. Eager to strengthen his technique and develop new artistic skills, at 21 he joined the professional training programme of Compagnie Rêvolution in Bordeaux, the first training centre for hip hop performers in France. In his very first year he was spotted by Anthony Egea, the company’s artistic director, who cast him as a performer for an international tour of “Urban Ballet”.\n\n" +
        "Driven by a growing curiosity, from 2013 he took part in productions as unusual as they were eclectic, joining Compagnie X-press, the Ridzcie, Compagnie Faizal Zeghoudi, Compagnie Karine Saporta, Next Zone (Copenhagen), Mourad Merzouki’s “Répertoire” project and several other companies.\n\n" +
        "Compelled by a need to create, at 22 he signed the first part of a solo, “Rencontre”. He asserts his singularity through a hybrid, sensitive, musical and instinctive choreographic world.\n\n" +
        "Alongside his work as a performer, he founded Compagnie Entité in 2015 and became associate artist at the Conservatoire Francis Poulenc, the regional conservatoire of Tours, from 2015 to 2017. He joined its teaching staff in 2024.\n\n" +
        "Since 2019 he has worked with the Centre Chorégraphique National de Tours (directed by Thomas Lebrun) and the Centre Chorégraphique National d’Orléans (directed by Maud Le Pladec and collectif ES) on various projects and in schools. He is the first dancer to bring hip hop into the Conservatoire Francis Poulenc in Tours and the departmental conservatoire of Orléans.\n\n" +
        "Roots of his artistic commitment — Hip hop shaped his view of the world: a philosophy of movement as a form of freedom, a way of existing. Born in working-class neighbourhoods, it was created for everyone, regardless of age, gender, social or cultural background. In this space of freedom, everyone is free to be themselves and to express their emotions and experiences through movement. There are no rules, no codes to follow, only the impulse of the body and creativity.\n\n" +
        "A democratic vision of art — For Simon, dance is not a gallery art but a universal language. He wants to break down the barriers between art and audiences, because for him dance must be a means of expression open to all, regardless of culture or social background. Art, he believes, should serve those who need it and meet people where they live, in their streets and neighbourhoods. It is an art for and by the people, alive, rooted in everyday life and able to build bridges between communities. Simon insists that art should not be reserved for an intellectual or social elite, but should bring people together and offer everyone fulfilment and freedom of expression. This inclusive approach resonates with deep values of sharing, solidarity and representation.",
      "ຊີມົງ ດີມູໂຣ (Simon Dimouro) ເກີດໃນປີ 1990 ທີ່ເມືອງຕູ (Tours) ແລະ ເລີ່ມເຕັ້ນຮິບຮັອບຕັ້ງແຕ່ອາຍຸ 10 ປີ. ດ້ວຍຄວາມຕັ້ງໃຈທີ່ຈະເສີມສ້າງເຕັກນິກ ແລະ ພັດທະນາທັກສະສິລະປະໃໝ່, ເມື່ອອາຍຸ 21 ປີ ລາວໄດ້ເຂົ້າຮຽນຫຼັກສູດວິຊາຊີບຂອງຄະນະ Rêvolution ທີ່ເມືອງບອກໂດ (Bordeaux) ເຊິ່ງເປັນສູນຝຶກອົບຮົມນັກເຕັ້ນຮິບຮັອບແຫ່ງທຳອິດຂອງຝຣັ່ງ. ໃນປີທຳອິດ, ອັງໂຕນີ ເອເກອາ (Anthony Egea) ຜູ້ກຳກັບສິລະປະຂອງຄະນະ ໄດ້ເລືອກລາວເປັນນັກສະແດງໃນການທົວລະດັບສາກົນຂອງການສະແດງ « Urban Ballet ».\n\n" +
        "ດ້ວຍຄວາມຢາກຮູ້ຢາກເຫັນທີ່ເພີ່ມຂຶ້ນ, ຕັ້ງແຕ່ປີ 2013 ລາວໄດ້ຮ່ວມສ້າງຜົນງານທີ່ແປກໃໝ່ ແລະ ຫຼາກຫຼາຍກັບຄະນະ X-press, Ridzcie, Faizal Zeghoudi, Karine Saporta, Next Zone (ໂກເປນເຮເກນ), ໂຄງການ « Répertoire » ຂອງ Mourad Merzouki ແລະ ອີກຫຼາຍຄະນະ.\n\n" +
        "ດ້ວຍຄວາມຕ້ອງການສ້າງສັນ, ເມື່ອອາຍຸ 22 ປີ ລາວໄດ້ສ້າງພາກທຳອິດຂອງການເຕັ້ນດ່ຽວ « Rencontre ». ລາວສະແດງເອກະລັກຂອງຕົນຜ່ານໂລກແຫ່ງທ່າເຕັ້ນທີ່ປະສົມ, ອ່ອນໄຫວ, ມີດົນຕີ ແລະ ເປັນສັນຊາດຕະຍານ.\n\n" +
        "ຄຽງຄູ່ກັບການເປັນນັກສະແດງ, ລາວໄດ້ກໍ່ຕັ້ງຄະນະ Compagnie Entité ໃນປີ 2015 ແລະ ເປັນສິລະປິນຮ່ວມຂອງໂຮງຮຽນດົນຕີ Francis Poulenc ເມືອງຕູ ແຕ່ປີ 2015 ຫາ 2017. ລາວໄດ້ເຂົ້າຮ່ວມທີມຄູສອນຂອງໂຮງຮຽນແຫ່ງນີ້ຕັ້ງແຕ່ປີ 2024.\n\n" +
        "ຕັ້ງແຕ່ປີ 2019, ລາວເຮັດວຽກກັບສູນການເຕັ້ນແຫ່ງຊາດເມືອງຕູ (ກຳກັບໂດຍ Thomas Lebrun) ແລະ ສູນການເຕັ້ນແຫ່ງຊາດເມືອງອໍເລອັງ (ກຳກັບໂດຍ Maud Le Pladec ແລະ collectif ES) ໃນຫຼາຍໂຄງການ ແລະ ໃນໂຮງຮຽນ. ລາວເປັນນັກເຕັ້ນຄົນທຳອິດທີ່ນຳການເຕັ້ນຮິບຮັອບເຂົ້າສູ່ໂຮງຮຽນດົນຕີ Francis Poulenc ເມືອງຕູ ແລະ ໂຮງຮຽນດົນຕີປະຈຳແຂວງເມືອງອໍເລອັງ.\n\n" +
        "ຕົ້ນກຳເນີດຂອງຄວາມມຸ່ງໝັ້ນທາງສິລະປະ — ການເຕັ້ນຮິບຮັອບໄດ້ຫຼໍ່ຫຼອມທັດສະນະຂອງລາວຕໍ່ໂລກ: ປັດຊະຍາຂອງການເຄື່ອນໄຫວເປັນຮູບແບບໜຶ່ງຂອງອິດສະລະພາບ ແລະ ວິທີການມີຊີວິດ. ເກີດຂຶ້ນໃນຊຸມຊົນທົ່ວໄປ, ມັນຖືກສ້າງຂຶ້ນເພື່ອທຸກຄົນ ໂດຍບໍ່ຈຳແນກອາຍຸ, ເພດ, ພື້ນຖານສັງຄົມ ຫຼື ວັດທະນະທຳ. ໃນພື້ນທີ່ແຫ່ງອິດສະລະພາບນີ້, ທຸກຄົນມີອິດສະລະທີ່ຈະເປັນຕົວຂອງຕົວເອງ ແລະ ສະແດງອອກເຖິງອາລົມ ແລະ ປະສົບການຂອງຕົນຜ່ານການເຄື່ອນໄຫວ. ບໍ່ມີກົດລະບຽບ, ບໍ່ມີແບບແຜນທີ່ຕ້ອງປະຕິບັດຕາມ, ມີພຽງແຕ່ແຮງກະຕຸ້ນຂອງຮ່າງກາຍ ແລະ ຄວາມຄິດສ້າງສັນ.\n\n" +
        "ວິໄສທັດປະຊາທິປະໄຕຂອງສິລະປະ — ສຳລັບຊີມົງ, ການເຕັ້ນບໍ່ແມ່ນສິລະປະຂອງຫໍວາງສະແດງ ແຕ່ເປັນພາສາສາກົນ. ລາວຕ້ອງການທຳລາຍກຳແພງລະຫວ່າງສິລະປະ ແລະ ຜູ້ຊົມ, ເພາະສຳລັບລາວ ການເຕັ້ນຕ້ອງເປັນວິທີການສະແດງອອກທີ່ເປີດກວ້າງສຳລັບທຸກຄົນ ໂດຍບໍ່ຈຳແນກວັດທະນະທຳ ຫຼື ພື້ນຖານສັງຄົມ. ສິລະປະຕ້ອງຮັບໃຊ້ຜູ້ທີ່ຕ້ອງການມັນ ແລະ ໄປພົບປະຜູ້ຄົນໃນບ່ອນທີ່ເຂົາເຈົ້າອາໄສຢູ່, ໃນຖະໜົນ ແລະ ຊຸມຊົນຂອງເຂົາເຈົ້າ. ມັນເປັນສິລະປະເພື່ອປະຊາຊົນ ແລະ ໂດຍປະຊາຊົນ, ມີຊີວິດຊີວາ, ຝັງຮາກຢູ່ໃນຊີວິດປະຈຳວັນ ແລະ ສາມາດສ້າງຂົວເຊື່ອມລະຫວ່າງຊຸມຊົນຕ່າງໆ. ຊີມົງຢືນຢັນວ່າສິລະປະບໍ່ຄວນສະຫງວນໄວ້ສຳລັບຄົນຊັ້ນສູງທາງປັນຍາ ຫຼື ສັງຄົມ, ແຕ່ຕ້ອງເປັນສື່ກາງແຫ່ງການເຕົ້າໂຮມ, ການເຕີບໃຫຍ່ ແລະ ອິດສະລະພາບໃນການສະແດງອອກສຳລັບທຸກຄົນ. ແນວທາງທີ່ເປີດກວ້າງນີ້ສອດຄ່ອງກັບຄຸນຄ່າອັນເລິກເຊິ່ງຂອງການແບ່ງປັນ, ຄວາມສາມັກຄີ ແລະ ການເປັນຕົວແທນ.",
    ),
    practice: t(
      "Un univers chorégraphique hybride, sensible, musical et instinctif, où le mouvement est une forme de liberté ouverte à tous.",
      "A hybrid, sensitive, musical and instinctive choreographic world, where movement is a form of freedom open to all.",
      "ໂລກແຫ່ງທ່າເຕັ້ນທີ່ປະສົມ, ອ່ອນໄຫວ, ມີດົນຕີ ແລະ ເປັນສັນຊາດຕະຍານ, ບ່ອນທີ່ການເຄື່ອນໄຫວເປັນອິດສະລະພາບສຳລັບທຸກຄົນ.",
    ),
    timeline: [
      {
        year: 2024,
        text: t(
          "Rejoint l’équipe pédagogique du conservatoire Francis Poulenc de Tours",
          "Joins the teaching staff of the Conservatoire Francis Poulenc in Tours",
          "ເຂົ້າຮ່ວມທີມຄູສອນຂອງໂຮງຮຽນດົນຕີ Francis Poulenc ເມືອງຕູ",
        ),
      },
      {
        year: 2019,
        text: t(
          "Interventions pour les CCN de Tours et d’Orléans",
          "Projects with the national choreographic centres of Tours and Orléans",
          "ໂຄງການກັບສູນການເຕັ້ນແຫ່ງຊາດເມືອງຕູ ແລະ ອໍເລອັງ",
        ),
      },
      {
        year: 2015,
        text: t(
          "Fonde la Compagnie Entité ; artiste associé au conservatoire de Tours (2015-2017)",
          "Founds Compagnie Entité; associate artist at the Tours conservatoire (2015–2017)",
          "ກໍ່ຕັ້ງຄະນະ Compagnie Entité; ສິລະປິນຮ່ວມຂອງໂຮງຮຽນດົນຕີເມືອງຕູ (2015–2017)",
        ),
      },
      {
        year: 2013,
        text: t(
          "Interprète pour X-press, la Ridzcie, Faizal Zeghoudi, Karine Saporta, Next Zone et « Répertoire » de Mourad Merzouki",
          "Performer for X-press, the Ridzcie, Faizal Zeghoudi, Karine Saporta, Next Zone and Mourad Merzouki’s “Répertoire”",
          "ນັກສະແດງໃຫ້ X-press, Ridzcie, Faizal Zeghoudi, Karine Saporta, Next Zone ແລະ « Répertoire » ຂອງ Mourad Merzouki",
        ),
      },
      {
        year: 2012,
        text: t(
          "Premier volet du solo « Rencontre »",
          "First part of the solo “Rencontre”",
          "ພາກທຳອິດຂອງການເຕັ້ນດ່ຽວ « Rencontre »",
        ),
      },
      {
        year: 2011,
        text: t(
          "Formation professionnelle de la compagnie Rêvolution et tournée internationale d’« Urban Ballet »",
          "Professional training with Compagnie Rêvolution and international tour of “Urban Ballet”",
          "ຫຼັກສູດວິຊາຊີບກັບຄະນະ Rêvolution ແລະ ການທົວລະດັບສາກົນຂອງ « Urban Ballet »",
        ),
      },
    ],
    works: [
      {
        title: t("Rencontre (solo)", "Rencontre (solo)", "Rencontre (ເຕັ້ນດ່ຽວ)"),
        year: 2012,
      },
    ],
    inFrance: t(
      "Basé à Tours, il enseigne au conservatoire Francis Poulenc et intervient pour les CCN de Tours et d’Orléans.",
      "Based in Tours, he teaches at the Conservatoire Francis Poulenc and works with the national choreographic centres of Tours and Orléans.",
      "ອາໄສຢູ່ເມືອງຕູ, ລາວສອນຢູ່ໂຮງຮຽນດົນຕີ Francis Poulenc ແລະ ເຮັດວຽກກັບສູນການເຕັ້ນແຫ່ງຊາດເມືອງຕູ ແລະ ອໍເລອັງ.",
    ),
    inLaos: t(
      "Invité du Festival France–Laos 2026-2027 avec la Compagnie Entité.",
      "Guest of the France–Laos Festival 2026–2027 with Compagnie Entité.",
      "ແຂກຮັບເຊີນຂອງເທດສະການ ຝຣັ່ງ–ລາວ 2026–2027 ພ້ອມກັບຄະນະ Compagnie Entité.",
    ),
  },
  {
    slug: "magda-korotynska",
    name: "Magda Korotynska",
    photo: "/images/artistes/mag.jpg",
    kind: "artist",
    country: "SE-FR",
    roles: ["plasticien"],
    disciplines: ["arts-visuels"],
    tagline: t(
      "Artiste et illustratrice",
      "Artist and illustrator",
      "ສິລະປິນ ແລະ ນັກແຕ້ມພາບປະກອບ",
    ),
    bio: t(
      "Magda Korotynska est artiste et illustratrice, diplômée d’un master de l’Académie des beaux-arts de Varsovie, en Pologne. Installée en Suède depuis 1982, elle a travaillé sur de nombreux projets : livres pour enfants, supports pédagogiques, magazines et publicité. Elle a exposé en Suède, en Pologne, en Allemagne et au Laos. Pendant de nombreuses années, elle a réalisé des illustrations botaniques pour la Nationalnyckeln (National Key), qui recense la flore et la faune de Suède.\n\n" +
        "Depuis 2015, elle passe chaque année plusieurs mois au Laos. Elle y a illustré deux livres pour enfants écrits par Melody Kemp, « Big T’s Song » et « Surfing the Hills », et peint les bâtiments patrimoniaux de Luang Prabang et de Vientiane. En 2017, elle a travaillé à Luang Prabang sur des planches botaniques du jardin botanique de Pha Tad Ke, où elle a exposé en décembre de la même année.\n\n" +
        "Son travail à Luang Prabang a donné naissance au livre « Luang Prabang, Trésors du patrimoine architectural du Laos », réalisé avec l’écrivain Francis Engelmann.",
      "Magda Korotynska is an artist and illustrator with a Master’s degree from the Academy of Fine Arts in Warsaw, Poland. After moving to Sweden in 1982, she worked on numerous projects, including children’s books, educational materials, magazines and advertising. She has taken part in exhibitions in Sweden, Poland, Germany and Laos. For many years, she created botanical illustrations for the National Key, documenting Sweden’s flora and fauna.\n\n" +
        "Since 2015, Magda has spent several months each year in Laos, illustrating two children’s books written by Melody Kemp, “Big T’s Song” and “Surfing the Hills”, and painting heritage buildings in Luang Prabang and Vientiane. In 2017 she worked in Luang Prabang on botanical pictures from Pha Tad Ke Botanical Garden, where she held an exhibition in December 2017.\n\n" +
        "Her work in Luang Prabang has now resulted in the book “Luang Prabang, Trésors du patrimoine architectural du Laos”, created together with writer Francis Engelmann.",
      "ມັກດາ ໂກໂຣຕີນສກາ (Magda Korotynska) ເປັນສິລະປິນ ແລະ ນັກແຕ້ມພາບປະກອບ, ຈົບປະລິນຍາໂທຈາກສະຖາບັນວິຈິດສິລະປະເມືອງວໍຊໍ (Warsaw) ປະເທດໂປແລນ. ຫຼັງຈາກຍ້າຍໄປຢູ່ປະເທດສະວີເດັນໃນປີ 1982, ນາງໄດ້ເຮັດວຽກໃນຫຼາຍໂຄງການ ເຊັ່ນ: ປຶ້ມສຳລັບເດັກ, ສື່ການສຶກສາ, ວາລະສານ ແລະ ການໂຄສະນາ. ນາງໄດ້ຮ່ວມວາງສະແດງຜົນງານໃນປະເທດສະວີເດັນ, ໂປແລນ, ເຢຍລະມັນ ແລະ ລາວ. ເປັນເວລາຫຼາຍປີ, ນາງໄດ້ແຕ້ມພາບພືດສາດໃຫ້ແກ່ National Key ເຊິ່ງບັນທຶກພືດ ແລະ ສັດຂອງປະເທດສະວີເດັນ.\n\n" +
        "ຕັ້ງແຕ່ປີ 2015, ມັກດາ ໃຊ້ເວລາຫຼາຍເດືອນໃນແຕ່ລະປີຢູ່ລາວ, ແຕ້ມພາບປະກອບໃຫ້ປຶ້ມເດັກສອງຫົວທີ່ຂຽນໂດຍ Melody Kemp ຄື « Big T’s Song » ແລະ « Surfing the Hills », ພ້ອມທັງແຕ້ມອາຄານມໍລະດົກໃນຫຼວງພະບາງ ແລະ ວຽງຈັນ. ໃນປີ 2017, ນາງໄດ້ເຮັດວຽກຢູ່ຫຼວງພະບາງ ກັບພາບພືດສາດຈາກສວນພືດສາດຜາແດດແກ (Pha Tad Ke) ແລະ ໄດ້ວາງສະແດງຜົນງານຢູ່ທີ່ນັ້ນໃນເດືອນທັນວາ 2017.\n\n" +
        "ຜົນງານຂອງນາງຢູ່ຫຼວງພະບາງ ໄດ້ກາຍເປັນປຶ້ມ « Luang Prabang, Trésors du patrimoine architectural du Laos » ທີ່ສ້າງຂຶ້ນຮ່ວມກັບນັກຂຽນ Francis Engelmann.",
    ),
    practice: t(
      "Une illustration minutieuse, de la planche botanique au portrait des bâtiments patrimoniaux.",
      "Meticulous illustration, from botanical plates to portraits of heritage buildings.",
      "ການແຕ້ມພາບປະກອບທີ່ລະອຽດອ່ອນ, ຈາກພາບພືດສາດ ຈົນເຖິງພາບອາຄານມໍລະດົກ.",
    ),
    timeline: [
      {
        year: 2017,
        text: t(
          "Planches botaniques et exposition au jardin botanique de Pha Tad Ke, Luang Prabang",
          "Botanical pictures and exhibition at Pha Tad Ke Botanical Garden, Luang Prabang",
          "ພາບພືດສາດ ແລະ ການວາງສະແດງທີ່ສວນພືດສາດຜາແດດແກ, ຫຼວງພະບາງ",
        ),
      },
      {
        year: 2015,
        text: t(
          "Premiers séjours annuels au Laos",
          "First annual stays in Laos",
          "ເລີ່ມມາພັກຢູ່ລາວເປັນປະຈຳທຸກປີ",
        ),
      },
      {
        year: 1982,
        text: t(
          "Installation en Suède",
          "Moves to Sweden",
          "ຍ້າຍໄປຢູ່ປະເທດສະວີເດັນ",
        ),
      },
    ],
    works: [
      {
        title: t(
          "Luang Prabang, Trésors du patrimoine architectural du Laos (avec Francis Engelmann)",
          "Luang Prabang, Trésors du patrimoine architectural du Laos (with Francis Engelmann)",
          "Luang Prabang, Trésors du patrimoine architectural du Laos (ຮ່ວມກັບ Francis Engelmann)",
        ),
      },
      {
        title: t(
          "Big T’s Song (texte de Melody Kemp)",
          "Big T’s Song (text by Melody Kemp)",
          "Big T’s Song (ຂຽນໂດຍ Melody Kemp)",
        ),
      },
      {
        title: t(
          "Surfing the Hills (texte de Melody Kemp)",
          "Surfing the Hills (text by Melody Kemp)",
          "Surfing the Hills (ຂຽນໂດຍ Melody Kemp)",
        ),
      },
    ],
    inFrance: t(
      "Livre « Luang Prabang, Trésors du patrimoine architectural du Laos », coécrit avec l’écrivain français Francis Engelmann.",
      "The book “Luang Prabang, Trésors du patrimoine architectural du Laos”, created with French writer Francis Engelmann.",
      "ປຶ້ມ « Luang Prabang, Trésors du patrimoine architectural du Laos » ສ້າງຮ່ວມກັບນັກຂຽນຝຣັ່ງ Francis Engelmann.",
    ),
    inLaos: t(
      "Depuis 2015, plusieurs mois par an au Laos à peindre le patrimoine de Luang Prabang et de Vientiane.",
      "Since 2015, several months a year in Laos painting the heritage of Luang Prabang and Vientiane.",
      "ຕັ້ງແຕ່ປີ 2015, ໃຊ້ເວລາຫຼາຍເດືອນຕໍ່ປີຢູ່ລາວ ເພື່ອແຕ້ມມໍລະດົກຂອງຫຼວງພະບາງ ແລະ ວຽງຈັນ.",
    ),
  },
  {
    slug: "sengchanh-soukhaseum",
    photo: "/images/artistes/sengchanh-soukhaseum.jpg",
    name: "Sengchanh Soukhaseum",
    kind: "artist",
    country: "LA",
    roles: ["ecrivain"],
    disciplines: ["litterature"],
    tagline: t(
      "Écrivaine, ancienne ambassadrice et peintre",
      "Writer, former ambassador and painter",
      "ນັກຂຽນ, ອະດີດເອກອັກຄະລັດຖະທູດ ແລະ ນັກແຕ້ມ",
    ),
    bio: t(
      "Née en 1946 à Ban Paphay, à Luang Prabang, Sengchanh Soukhaseum (née Upravarn) fait ses études primaires et secondaires à Luang Prabang, avant de partir étudier à Moscou en 1962, puis en France, où elle s’inscrit à l’Université de Toulouse-Le Mirail. De 1970 à 1977, elle vit et travaille en France.\n\n" +
        "De retour au Laos en 1977, elle entre au ministère des Affaires étrangères de la RDP lao et y mène toute sa carrière : première secrétaire à l’ambassade à Moscou (1983-1986), directrice du Département des organisations internationales (1986-1991 puis 1994-1997), ministre conseillère à l’ambassade du Laos à Paris (1991-1994), ambassadrice du Laos aux Philippines (1997-2001), puis directrice de l’Institut des affaires étrangères jusqu’à sa retraite en 2005.\n\n" +
        "Peintre autodidacte, nourrie d’un parcours entre le Laos, la France, la Russie et les Philippines, elle présente au festival, à Luang Prabang, son livre « Les Filles de la Nam Khan — Une enfance à Luang Prabang », paru aux éditions Voix du Mékong.",
      "Born in 1946 in Ban Paphay, Luang Prabang, Sengchanh Soukhaseum (née Upravarn) attended primary and secondary school in Luang Prabang before going to study in Moscow in 1962, then in France, where she enrolled at the University of Toulouse-Le Mirail. From 1970 to 1977 she lived and worked in France.\n\n" +
        "Returning to Laos in 1977, she joined the Ministry of Foreign Affairs of the Lao PDR, where she spent her entire career: First Secretary at the embassy in Moscow (1983–1986), Director of the Department of International Organisations (1986–1991 and 1994–1997), Minister-Counsellor at the Lao embassy in Paris (1991–1994), Ambassador of Laos to the Philippines (1997–2001), then Director of the Institute of Foreign Affairs until her retirement in 2005.\n\n" +
        "A self-taught painter shaped by a life between Laos, France, Russia and the Philippines, she presents her book “Les Filles de la Nam Khan — A childhood in Luang Prabang” (Voix du Mékong) at the festival in Luang Prabang.",
      "Sengchanh Soukhaseum (ນາມສະກຸນເດີມ Upravarn) ເກີດໃນປີ 1946 ທີ່ບ້ານປາໄຜ່, ຫຼວງພະບາງ. ນາງຮຽນຊັ້ນປະຖົມ ແລະ ມັດທະຍົມຢູ່ຫຼວງພະບາງ, ກ່ອນຈະໄປສຶກສາຕໍ່ທີ່ມົສກູ ໃນປີ 1962, ແລ້ວຈຶ່ງໄປປະເທດຝຣັ່ງ ເຊິ່ງນາງໄດ້ລົງທະບຽນຮຽນຢູ່ມະຫາວິທະຍາໄລຕູລູສ (Toulouse-Le Mirail). ແຕ່ປີ 1970 ຫາ 1977, ນາງໄດ້ອາໄສ ແລະ ເຮັດວຽກຢູ່ປະເທດຝຣັ່ງ.\n\n" +
        "ເມື່ອກັບຄືນລາວໃນປີ 1977, ນາງໄດ້ເຂົ້າເຮັດວຽກຢູ່ກະຊວງການຕ່າງປະເທດ ສປປ ລາວ ຕະຫຼອດອາຊີບຂອງນາງ: ເລຂາທີໜຶ່ງ ສະຖານທູດລາວປະຈຳມົສກູ (1983–1986), ຫົວໜ້າກົມອົງການຈັດຕັ້ງສາກົນ (1986–1991 ແລະ 1994–1997), ທີ່ປຶກສາລັດຖະມົນຕີ ສະຖານທູດລາວປະຈຳປາຣີ (1991–1994), ເອກອັກຄະລັດຖະທູດລາວປະຈຳຟີລິບປິນ (1997–2001), ແລະ ຫົວໜ້າສະຖາບັນການຕ່າງປະເທດ ຈົນຮອດການພັກຜ່ອນໃນປີ 2005.\n\n" +
        "ເປັນນັກແຕ້ມທີ່ຮຽນຮູ້ດ້ວຍຕົນເອງ ແລະ ມີປະສົບການຊີວິດລະຫວ່າງລາວ, ຝຣັ່ງ, ຣັດເຊຍ ແລະ ຟີລິບປິນ, ນາງຈະນຳສະເໜີປຶ້ມ « Les Filles de la Nam Khan » (ສຳນັກພິມ Voix du Mékong) ໃນເທດສະການ ທີ່ຫຼວງພະບາງ.",
    ),
    practice: t(
      "Une écriture nourrie d’une vie entre Luang Prabang et le monde.",
      "Writing shaped by a life between Luang Prabang and the world.",
      "ການຂຽນທີ່ຫຼໍ່ຫຼອມມາຈາກຊີວິດລະຫວ່າງຫຼວງພະບາງ ແລະ ໂລກກວ້າງ.",
    ),
    timeline: [
      {
        year: 2026,
        text: t(
          "Festival France–Laos — présentation du livre « Les Filles de la Nam Khan » à Luang Prabang, dans le cadre de Carte blanche",
          "France–Laos Festival — presentation of the book “Les Filles de la Nam Khan” in Luang Prabang, as part of Carte blanche",
          "ເທດສະການ ຝຣັ່ງ–ລາວ — ນຳສະເໜີປຶ້ມ « Les Filles de la Nam Khan » ທີ່ຫຼວງພະບາງ ໃນໂຄງການ Carte blanche",
        ),
      },
      {
        year: 2001,
        text: t(
          "Directrice de l’Institut des affaires étrangères (2001-2005)",
          "Director of the Institute of Foreign Affairs (2001–2005)",
          "ຫົວໜ້າສະຖາບັນການຕ່າງປະເທດ (2001–2005)",
        ),
      },
      {
        year: 1997,
        text: t(
          "Ambassadrice du Laos aux Philippines (1997-2001)",
          "Ambassador of Laos to the Philippines (1997–2001)",
          "ເອກອັກຄະລັດຖະທູດລາວປະຈຳຟີລິບປິນ (1997–2001)",
        ),
      },
      {
        year: 1991,
        text: t(
          "Ministre conseillère à l’ambassade du Laos à Paris (1991-1994)",
          "Minister-Counsellor at the Lao embassy in Paris (1991–1994)",
          "ທີ່ປຶກສາລັດຖະມົນຕີ ສະຖານທູດລາວປະຈຳປາຣີ (1991–1994)",
        ),
      },
      {
        year: 1983,
        text: t(
          "Première secrétaire à l’ambassade de la RDP lao à Moscou (1983-1986)",
          "First Secretary at the Lao PDR embassy in Moscow (1983–1986)",
          "ເລຂາທີໜຶ່ງ ສະຖານທູດ ສປປ ລາວ ປະຈຳມົສກູ (1983–1986)",
        ),
      },
      {
        year: 1977,
        text: t(
          "Retour au Laos et entrée au ministère des Affaires étrangères",
          "Returns to Laos and joins the Ministry of Foreign Affairs",
          "ກັບຄືນລາວ ແລະ ເຂົ້າເຮັດວຽກຢູ່ກະຊວງການຕ່າງປະເທດ",
        ),
      },
      {
        year: 1962,
        text: t(
          "Départ pour Moscou, puis pour la France",
          "Leaves for Moscow, then France",
          "ໄປສຶກສາຢູ່ມົສກູ, ແລ້ວໄປປະເທດຝຣັ່ງ",
        ),
      },
    ],
    works: [
      {
        title: t(
          "Les Filles de la Nam Khan — Une enfance à Luang Prabang (Voix du Mékong)",
          "Les Filles de la Nam Khan — A childhood in Luang Prabang (Voix du Mékong)",
          "Les Filles de la Nam Khan — ໄວເດັກທີ່ຫຼວງພະບາງ (Voix du Mékong)",
        ),
      },
    ],
    inFrance: t(
      "A vécu en France de 1964 à 1977, puis y est revenue comme ministre conseillère à l’ambassade du Laos à Paris (1991-1994).",
      "Lived in France from 1964 to 1977, then returned as Minister-Counsellor at the Lao embassy in Paris (1991–1994).",
      "ເຄີຍອາໄສຢູ່ຝຣັ່ງແຕ່ປີ 1964 ຫາ 1977, ແລ້ວກັບໄປອີກຄັ້ງໃນຖານະທີ່ປຶກສາລັດຖະມົນຕີ ສະຖານທູດລາວປະຈຳປາຣີ (1991–1994).",
    ),
    inLaos: t(
      "Née à Luang Prabang, elle a mené toute sa carrière diplomatique au ministère des Affaires étrangères de la RDP lao.",
      "Born in Luang Prabang, she spent her entire diplomatic career at the Ministry of Foreign Affairs of the Lao PDR.",
      "ເກີດທີ່ຫຼວງພະບາງ, ນາງໄດ້ເຮັດວຽກການທູດຕະຫຼອດອາຊີບຢູ່ກະຊວງການຕ່າງປະເທດ ສປປ ລາວ.",
    ),
  },
  {
    slug: "veronique-de-lavenere",
    photo: "/images/artistes/vero.jpg",
    bannerPhoto: "/images/artistes/veronique-de-lavenere-banniere.jpg", // bandeau de la fiche (photo de groupe)
    name: "Véronique de Lavenère",
    kind: "artist",
    country: "FR",
    roles: ["chercheur", "musicien"],
    disciplines: ["musique", "debat-idees"],
    tagline: t(
      "Ethnomusicologue, flûtiste et joueuse de khène",
      "Ethnomusicologist, flautist and khaen player",
      "ນັກມານຸດສາດດົນຕີ, ນັກເປົ່າຂຸ່ຍ ແລະ ນັກເປົ່າແຄນ",
    ),
    bio: t(
      "Véronique de Lavenère est maîtresse de conférences en ethnomusicologie à Sorbonne Université, chercheuse à l’IReMus (Institut de recherche en musicologie) et au CASE (Centre Asie du Sud-Est). Elle a été membre du bureau de la Société française d’ethnomusicologie.\n\n" +
        "Ses recherches au Laos et en Asie du Sud-Est portent sur la pluriethnicité et la diversité des patrimoines musicaux, dont la diversité des khènes (orgues à bouche). Elle interroge également les pratiques musicales au cœur des arts de la scène traditionnels et contemporains. Menées à travers tout le Laos depuis près de trente ans, ses recherches ont donné lieu à de nombreuses rencontres musicales.\n\n" +
        "Cette double approche, scientifique et artistique — elle est flûtiste et joueuse de khène —, enrichit ses publications comme ses disques, récompensés par l’Académie Charles Cros, et a contribué à la patrimonialisation du khène, inscrit au patrimoine culturel immatériel de l’humanité par l’UNESCO.",
      "Véronique de Lavenère is a senior lecturer in ethnomusicology at Sorbonne Université and a researcher at IReMus (Institut de recherche en musicologie) and CASE (Centre Asie du Sud-Est). She has served on the board of the Société française d’ethnomusicologie.\n\n" +
        "Her research in Laos and Southeast Asia focuses on multi-ethnicity and the diversity of musical heritage, including the many forms of the khaen (mouth organ). She also explores musical practice at the heart of traditional and contemporary performing arts. Carried out across Laos for nearly thirty years, her research has led to many musical encounters.\n\n" +
        "This dual approach, both scholarly and artistic — she is a flautist and khaen player — enriches her publications and her recordings, which have received awards from the Académie Charles Cros, and has contributed to the recognition of the khaen as UNESCO Intangible Cultural Heritage of Humanity.",
      "Véronique de Lavenère ເປັນອາຈານສອນດ້ານມານຸດສາດດົນຕີ ທີ່ Sorbonne Université ແລະ ນັກຄົ້ນຄວ້າຂອງ IReMus (ສະຖາບັນຄົ້ນຄວ້າດົນຕີວິທະຍາ) ແລະ CASE (ສູນອາຊີຕາເວັນອອກສຽງໃຕ້). ນາງເຄີຍເປັນກຳມະການຂອງສະມາຄົມມານຸດສາດດົນຕີຝຣັ່ງ.\n\n" +
        "ການຄົ້ນຄວ້າຂອງນາງ ຢູ່ລາວ ແລະ ອາຊີຕາເວັນອອກສຽງໃຕ້ ເນັ້ນໃສ່ຄວາມຫຼາກຫຼາຍຂອງຊົນເຜົ່າ ແລະ ມໍລະດົກດົນຕີ ລວມທັງຄວາມຫຼາກຫຼາຍຂອງແຄນ. ນາງຍັງສຶກສາການປະຕິບັດດົນຕີ ໃນສິລະປະການສະແດງທັງແບບພື້ນເມືອງ ແລະ ຮ່ວມສະໄໝ. ການຄົ້ນຄວ້າທົ່ວປະເທດລາວ ມາເກືອບສາມສິບປີ ໄດ້ນຳໄປສູ່ການພົບປະທາງດົນຕີຫຼາຍຄັ້ງ.\n\n" +
        "ວິທີການທັງດ້ານວິທະຍາສາດ ແລະ ສິລະປະ — ນາງເປັນນັກເປົ່າຂຸ່ຍ ແລະ ນັກເປົ່າແຄນ — ເຮັດໃຫ້ຜົນງານຕີພິມ ແລະ ແຜ່ນສຽງຂອງນາງ ທີ່ໄດ້ຮັບລາງວັນຈາກ Académie Charles Cros ມີຄຸນຄ່າ ແລະ ໄດ້ປະກອບສ່ວນໃຫ້ແຄນ ໄດ້ຮັບການຂຶ້ນທະບຽນເປັນມໍລະດົກວັດທະນະທຳທີ່ບໍ່ແມ່ນວັດຖຸຂອງມະນຸດຊາດ ໂດຍ UNESCO.",
    ),
    practice: t(
      "La recherche et la scène, le savoir et le souffle : faire entendre la diversité des khènes du Laos.",
      "Research and the stage, knowledge and breath: bringing out the diversity of Laos’s khaens.",
      "ການຄົ້ນຄວ້າ ແລະ ເວທີ, ຄວາມຮູ້ ແລະ ລົມຫາຍໃຈ: ເຮັດໃຫ້ໄດ້ຍິນຄວາມຫຼາກຫຼາຍຂອງແຄນລາວ.",
    ),
    timeline: [
      {
        year: 2026,
        text: t(
          "Festival France–Laos — soirée d’ouverture à l’Institut français de Luang Prabang",
          "France–Laos Festival — opening night at the Institut français in Luang Prabang",
          "ເທດສະການ ຝຣັ່ງ–ລາວ — ຄ່ຳຄືນເປີດງານ ທີ່ສະຖາບັນຝຣັ່ງ ຫຼວງພະບາງ",
        ),
      },
    ],
    works: [],
    inFrance: t(
      "Maîtresse de conférences en ethnomusicologie à Sorbonne Université, chercheuse à l’IReMus et au CASE.",
      "Senior lecturer in ethnomusicology at Sorbonne Université, researcher at IReMus and CASE.",
      "ອາຈານສອນດ້ານມານຸດສາດດົນຕີ ທີ່ Sorbonne Université, ນັກຄົ້ນຄວ້າຂອງ IReMus ແລະ CASE.",
    ),
    inLaos: t(
      "Près de trente ans de recherches à travers tout le Laos ; a contribué à l’inscription du khène au patrimoine culturel immatériel de l’UNESCO.",
      "Nearly thirty years of research across Laos; contributed to the khaen’s inscription as UNESCO Intangible Cultural Heritage.",
      "ເກືອບສາມສິບປີຂອງການຄົ້ນຄວ້າທົ່ວປະເທດລາວ; ໄດ້ປະກອບສ່ວນໃຫ້ແຄນ ຂຶ້ນທະບຽນເປັນມໍລະດົກວັດທະນະທຳທີ່ບໍ່ແມ່ນວັດຖຸຂອງ UNESCO.",
    ),
  },
  {
    slug: "francis-engelmann",
    photo: "/images/artistes/francis-engelmann.jpg",
    photoPosition: "40% 58%", // cadrage du bandeau sur le visage
    name: "Francis Engelmann",
    kind: "artist",
    country: "FR",
    roles: ["ecrivain"],
    disciplines: ["litterature", "arts-visuels"],
    tagline: t("Écrivain", "Writer", "ນັກຂຽນ"),
    bio: t(
      "Écrivain, Francis Engelmann est le coauteur, avec l’illustratrice Magda Korotynska, du livre « Luang Prabang, Trésors du patrimoine architectural du Laos », consacré aux maisons traditionnelles, coloniales et lao-françaises de la ville.\n\n" +
        "Au Festival France–Laos, il accompagne l’exposition « Old Houses of Luang Prabang », présente le livre et ses aquarelles lors d’une soirée avec Magda Korotynska, et guide une déambulation dans les rues de Luang Prabang.",
      "A writer, Francis Engelmann is the co-author, with illustrator Magda Korotynska, of the book “Luang Prabang, Trésors du patrimoine architectural du Laos”, devoted to the town’s traditional, colonial and Lao-French houses.\n\n" +
        "At the France–Laos Festival he accompanies the exhibition “Old Houses of Luang Prabang”, presents the book and its watercolours at an evening with Magda Korotynska, and leads a walking tour through the streets of Luang Prabang.",
      "Francis Engelmann ນັກຂຽນ ເປັນຜູ້ຮ່ວມຂຽນປຶ້ມ « Luang Prabang, Trésors du patrimoine architectural du Laos » ກັບນັກແຕ້ມພາບ Magda Korotynska ກ່ຽວກັບເຮືອນພື້ນເມືອງ, ເຮືອນສະໄໝອານານິຄົມ ແລະ ເຮືອນແບບລາວ-ຝຣັ່ງ ຂອງເມືອງ.\n\n" +
        "ໃນເທດສະການ ຝຣັ່ງ–ລາວ, ລາວຮ່ວມນຳສະເໜີນິທັດສະການ « Old Houses of Luang Prabang », ນຳສະເໜີປຶ້ມ ແລະ ພາບສີນ້ຳ ໃນຄ່ຳຄືນກັບ Magda Korotynska ແລະ ນຳພາຍ່າງຊົມຕາມຖະໜົນຂອງຫຼວງພະບາງ.",
    ),
    practice: t(
      "Raconter une ville à travers ses maisons et les histoires qu’elles portent.",
      "Telling the story of a town through its houses and the stories they hold.",
      "ເລົ່າເລື່ອງເມືອງ ຜ່ານເຮືອນ ແລະ ເລື່ອງລາວທີ່ມັນເກັບໄວ້.",
    ),
    timeline: [
      {
        year: 2026,
        text: t(
          "Festival France–Laos — exposition « Old Houses of Luang Prabang », soirée livre et aquarelles, déambulation",
          "France–Laos Festival — “Old Houses of Luang Prabang” exhibition, book and watercolour evening, walking tour",
          "ເທດສະການ ຝຣັ່ງ–ລາວ — ນິທັດສະການ « Old Houses of Luang Prabang », ຄ່ຳຄືນປຶ້ມ ແລະ ພາບສີນ້ຳ, ຍ່າງຊົມເມືອງ",
        ),
      },
    ],
    works: [
      {
        title: t(
          "Luang Prabang, Trésors du patrimoine architectural du Laos (avec Magda Korotynska)",
          "Luang Prabang, Trésors du patrimoine architectural du Laos (with Magda Korotynska)",
          "Luang Prabang, Trésors du patrimoine architectural du Laos (ຮ່ວມກັບ Magda Korotynska)",
        ),
      },
    ],
    inFrance: t(
      "Auteur français du livre « Luang Prabang, Trésors du patrimoine architectural du Laos ».",
      "French author of the book “Luang Prabang, Trésors du patrimoine architectural du Laos”.",
      "ນັກຂຽນຝຣັ່ງ ຜູ້ຂຽນປຶ້ມ « Luang Prabang, Trésors du patrimoine architectural du Laos ».",
    ),
    inLaos: t(
      "Fait découvrir au public le patrimoine architectural de Luang Prabang.",
      "Introduces audiences to the architectural heritage of Luang Prabang.",
      "ນຳສະເໜີມໍລະດົກສະຖາປັດຕະຍະກຳຂອງຫຼວງພະບາງ ໃຫ້ຜູ້ຊົມ.",
    ),
  },
  {
    slug: "iris-munos",
    photo: "/images/artistes/iris-munos.jpg",
    name: "Iris Munos",
    kind: "artist",
    country: "FR",
    roles: ["musicien"],
    disciplines: ["musique"],
    tagline: t(
      "Chanteuse, directrice artistique et productrice",
      "Singer, artistic director and producer",
      "ນັກຮ້ອງ, ຜູ້ກຳກັບສິລະປະ ແລະ ຜູ້ຜະລິດ",
    ),
    bio: t(
      "Chanteuse, directrice artistique et productrice franco-allemande, Iris Munos porte depuis 2016 le projet « Et si Brel était une femme ? » : une relecture du répertoire de Jacques Brel, réinventée à chaque étape avec des musiciens du pays qui l’accueille.\n\n" +
        "Après la Pologne puis le continent africain, le projet a fait son entrée en Asie. En 2024, lors d’un mois de résidence à Rangoun avec l’Institut français de Birmanie, elle a arrangé une dizaine de chansons de Brel avec deux formations birmanes : le groupe Inappropriate Thoughts (iATs), dans un style électronique, industriel, ambient, bebop et pop mêlé à la harpe birmane, et le Myanmar Jazz Club, en jazz moderne avec des instruments traditionnels comme le pat waing et le hne. Deux titres, « Vesoul » et « Jojo », ont été enregistrés en studio et ont fait l’objet de clips.\n\n" +
        "Au Festival France–Laos, elle présente « Et si Brel était une femme ? » à Luang Prabang et à Vientiane.",
      "A Franco-German singer, artistic director and producer, Iris Munos has led the project “Et si Brel était une femme ?” (What if Brel were a woman?) since 2016: a new take on Jacques Brel’s songs, reinvented at each stop with musicians from the host country.\n\n" +
        "After Poland and then Africa, the project came to Asia. In 2024, during a month-long residency in Yangon with the Institut français in Myanmar, she arranged some ten Brel songs with two Burmese ensembles: Inappropriate Thoughts (iATs), in an electronic, industrial, ambient, bebop and pop style blended with the Burmese harp, and the Myanmar Jazz Club, in modern jazz with traditional instruments such as the pat waing and the hne. Two songs, “Vesoul” and “Jojo”, were recorded in the studio and released as music videos.\n\n" +
        "At the France–Laos Festival she performs “Et si Brel était une femme ?” in Luang Prabang and Vientiane.",
      "Iris Munos ນັກຮ້ອງ, ຜູ້ກຳກັບສິລະປະ ແລະ ຜູ້ຜະລິດ ຝຣັ່ງ-ເຢຍລະມັນ, ດຳເນີນໂຄງການ « Et si Brel était une femme ? » (ຖ້າ Brel ເປັນຜູ້ຍິງ?) ມາຕັ້ງແຕ່ປີ 2016: ການຕີຄວາມໃໝ່ຂອງບົດເພງ Jacques Brel ທີ່ຖືກສ້າງສັນໃໝ່ໃນແຕ່ລະປະເທດ ຮ່ວມກັບນັກດົນຕີທ້ອງຖິ່ນ.\n\n" +
        "ຫຼັງຈາກໂປແລນ ແລະ ທະວີບອາຟຣິກາ, ໂຄງການໄດ້ມາຮອດອາຊີ. ໃນປີ 2024, ລະຫວ່າງການພັກສ້າງສັນໜຶ່ງເດືອນທີ່ຢາງກຸ້ງ ກັບສະຖາບັນຝຣັ່ງປະຈຳມຽນມາ, ນາງໄດ້ຮຽບຮຽງບົດເພງຂອງ Brel ປະມານສິບເພງ ຮ່ວມກັບສອງວົງດົນຕີມຽນມາ: Inappropriate Thoughts (iATs) ແລະ Myanmar Jazz Club, ໂດຍປະສົມກັບເຄື່ອງດົນຕີພື້ນເມືອງມຽນມາ. ສອງເພງ « Vesoul » ແລະ « Jojo » ໄດ້ຖືກບັນທຶກສຽງ ແລະ ເຮັດເປັນມິວສິກວິດີໂອ.\n\n" +
        "ໃນເທດສະການ ຝຣັ່ງ–ລາວ, ນາງນຳສະເໜີ « Et si Brel était une femme ? » ທີ່ຫຼວງພະບາງ ແລະ ວຽງຈັນ.",
    ),
    practice: t(
      "Faire voyager la chanson française en la confiant à d’autres oreilles, d’autres instruments, d’autres langues musicales.",
      "Taking French chanson on a journey by entrusting it to other ears, other instruments and other musical languages.",
      "ນຳເພງຝຣັ່ງໄປທ່ອງທ່ຽວ ໂດຍມອບໃຫ້ຫູ, ເຄື່ອງດົນຕີ ແລະ ພາສາດົນຕີອື່ນໆ.",
    ),
    timeline: [
      {
        year: 2026,
        text: t(
          "Festival France–Laos — concerts à Luang Prabang et à Vientiane",
          "France–Laos Festival — concerts in Luang Prabang and Vientiane",
          "ເທດສະການ ຝຣັ່ງ–ລາວ — ຄອນເສີດທີ່ຫຼວງພະບາງ ແລະ ວຽງຈັນ",
        ),
      },
      {
        year: 2024,
        text: t(
          "Résidence à Rangoun (Birmanie), concert de sortie de résidence et clips « Vesoul » et « Jojo »",
          "Residency in Yangon (Myanmar), closing concert and music videos for “Vesoul” and “Jojo”",
          "ພັກສ້າງສັນທີ່ຢາງກຸ້ງ (ມຽນມາ), ຄອນເສີດປິດ ແລະ ມິວສິກວິດີໂອ « Vesoul » ແລະ « Jojo »",
        ),
      },
      {
        year: 2016,
        text: t(
          "Lancement du projet « Et si Brel était une femme ? »",
          "Launch of the project “Et si Brel était une femme ?”",
          "ເລີ່ມໂຄງການ « Et si Brel était une femme ? »",
        ),
      },
    ],
    works: [
      { title: t("Vesoul (clip)", "Vesoul (music video)", "Vesoul (ມິວສິກວິດີໂອ)"), year: 2024 },
      { title: t("Jojo (clip)", "Jojo (music video)", "Jojo (ມິວສິກວິດີໂອ)"), year: 2024 },
    ],
    inFrance: t(
      "Porte le répertoire de Jacques Brel, l’un des grands noms de la chanson francophone, depuis 2016.",
      "Has carried the songs of Jacques Brel, one of the great names of French-language chanson, since 2016.",
      "ນຳສະເໜີບົດເພງຂອງ Jacques Brel ໜຶ່ງໃນນັກຮ້ອງພາສາຝຣັ່ງທີ່ຍິ່ງໃຫຍ່ ມາຕັ້ງແຕ່ປີ 2016.",
    ),
    inLaos: t(
      "Première étape lao du projet, à l’Institut français de Luang Prabang et de Vientiane.",
      "The project’s first stop in Laos, at the Institut français in Luang Prabang and Vientiane.",
      "ການມາລາວຄັ້ງທຳອິດຂອງໂຄງການ ທີ່ສະຖາບັນຝຣັ່ງ ຫຼວງພະບາງ ແລະ ວຽງຈັນ.",
    ),
  },
  {
    slug: "julie-stephen-chheng",
    photo: "/images/artistes/julie-stephen-chheng.jpg",
    name: "Julie Stephen Chheng",
    kind: "artist",
    country: "FR",
    roles: ["plasticien"],
    disciplines: ["arts-numeriques", "jeunesse"],
    tagline: t(
      "Autrice et artiste numérique",
      "Author and digital artist",
      "ນັກຂຽນ ແລະ ສິລະປິນດິຈິຕອນ",
    ),
    bio: t(
      "Diplômée des Arts Décoratifs de Paris, Julie Stephen Chheng travaille les qualités du papier et du numérique dans le domaine du livre, du design et de la scénographie. Elle est l’autrice de plusieurs livres, applications et expositions, dont Uramado, présenté dans plus de 300 lieux et 18 pays.\n\n" +
        "Depuis 2014, elle a mené plusieurs résidences d’artiste à Hong Kong, à la Villa Kujoyama à Kyoto et à Auckland, en Nouvelle-Zélande.\n\n" +
        "Au festival, elle présente « Fortune Teller », une projection interactive où le public fait face à des Esprits de la Nature, inspirée du Yi Jing, le Livre des Métamorphoses.",
      "A graduate of the Arts Décoratifs in Paris, Julie Stephen Chheng explores the qualities of paper and digital media in books, design and scenography. She is the author of several books, apps and exhibitions, including Uramado, shown in more than 300 venues across 18 countries.\n\n" +
        "Since 2014 she has completed several artist residencies, in Hong Kong, at Villa Kujoyama in Kyoto and in Auckland, New Zealand.\n\n" +
        "At the festival she presents “Fortune Teller”, an interactive projection in which visitors come face to face with Spirits of Nature, inspired by the I Ching, the Book of Changes.",
      "ຈົບການສຶກສາຈາກໂຮງຮຽນ Arts Décoratifs ປາຣີ, Julie Stephen Chheng ສ້າງສັນຜົນງານທີ່ປະສົມປະສານເຈ້ຍ ແລະ ດິຈິຕອນ ໃນດ້ານປຶ້ມ, ການອອກແບບ ແລະ ການຈັດສະແດງ. ນາງເປັນຜູ້ສ້າງປຶ້ມ, ແອັບພລິເຄຊັນ ແລະ ນິທັດສະການຫຼາຍຢ່າງ ລວມທັງ Uramado ທີ່ໄດ້ວາງສະແດງໃນຫຼາຍກວ່າ 300 ສະຖານທີ່ ໃນ 18 ປະເທດ.\n\n" +
        "ຕັ້ງແຕ່ປີ 2014, ນາງໄດ້ເຂົ້າຮ່ວມໂຄງການພັກສ້າງສັນຫຼາຍແຫ່ງ ທີ່ຮົງກົງ, Villa Kujoyama ເມືອງກຽວໂຕ ແລະ ເມືອງໂອກແລນ ປະເທດນິວຊີແລນ.\n\n" +
        "ໃນເທດສະການ, ນາງນຳສະເໜີ « Fortune Teller » ການສາຍພາບແບບໂຕ້ຕອບ ທີ່ຜູ້ຊົມໄດ້ພົບກັບວິນຍານແຫ່ງທຳມະຊາດ, ໂດຍໄດ້ແຮງບັນດານໃຈຈາກຄຳພີອີ້ຈິງ (Yi Jing).",
    ),
    practice: t(
      "Entre papier et numérique, des mondes à explorer où le public devient acteur du récit.",
      "Between paper and digital, worlds to explore where audiences become part of the story.",
      "ລະຫວ່າງເຈ້ຍ ແລະ ດິຈິຕອນ, ໂລກທີ່ໃຫ້ຄົ້ນຫາ ບ່ອນທີ່ຜູ້ຊົມກາຍເປັນສ່ວນໜຶ່ງຂອງເລື່ອງ.",
    ),
    timeline: [
      {
        year: 2026,
        text: t(
          "Festival France–Laos — « Fortune Teller » à l’Institut français de Vientiane",
          "France–Laos Festival — “Fortune Teller” at the Institut français in Vientiane",
          "ເທດສະການ ຝຣັ່ງ–ລາວ — « Fortune Teller » ທີ່ສະຖາບັນຝຣັ່ງ ວຽງຈັນ",
        ),
      },
      {
        year: 2025,
        text: t(
          "« Fortune Teller » à Berlin (galerie Alice Guy), Belfort (espace Gantner) et Cergy (Visages du Monde)",
          "“Fortune Teller” in Berlin (Alice Guy gallery), Belfort (Espace Gantner) and Cergy (Visages du Monde)",
          "« Fortune Teller » ທີ່ເບີລິນ (ຫໍວາງສະແດງ Alice Guy), ແບລຟໍ (Espace Gantner) ແລະ ແຊກີ (Visages du Monde)",
        ),
      },
      {
        year: 2024,
        text: t(
          "Résidence à la Villa Antipode (Te Ataata) à Auckland ; Art Nature Festival à Pohang (Corée) et les Capucins à Brest",
          "Residency at Villa Antipode (Te Ataata) in Auckland; Art Nature Festival in Pohang (Korea) and Les Capucins in Brest",
          "ພັກສ້າງສັນທີ່ Villa Antipode (Te Ataata) ເມືອງໂອກແລນ; Art Nature Festival ທີ່ໂພຮັງ (ເກົາຫຼີ) ແລະ Les Capucins ທີ່ເບຣສ",
        ),
      },
      {
        year: 2023,
        text: t(
          "Début de « Fortune Teller » en résidence au Lablab avec AADN Lyon, avec le soutien du CNC (création immersive)",
          "“Fortune Teller” begins in residency at Lablab with AADN Lyon, supported by the CNC (immersive creation)",
          "« Fortune Teller » ເລີ່ມຕົ້ນໃນການພັກສ້າງສັນທີ່ Lablab ກັບ AADN Lyon ດ້ວຍການສະໜັບສະໜູນຈາກ CNC",
        ),
      },
      {
        year: 2014,
        text: t(
          "Premières résidences d’artiste à l’étranger : Hong Kong, Villa Kujoyama (Kyoto)",
          "First artist residencies abroad: Hong Kong, Villa Kujoyama (Kyoto)",
          "ການພັກສ້າງສັນຄັ້ງທຳອິດໃນຕ່າງປະເທດ: ຮົງກົງ, Villa Kujoyama (ກຽວໂຕ)",
        ),
      },
    ],
    works: [
      {
        title: t(
          "Fortune Teller (projection interactive)",
          "Fortune Teller (interactive projection)",
          "Fortune Teller (ການສາຍພາບແບບໂຕ້ຕອບ)",
        ),
        year: 2024,
      },
      {
        title: t("Uramado", "Uramado", "Uramado"),
      },
    ],
    inFrance: t(
      "Diplômée des Arts Décoratifs de Paris ; « Fortune Teller » a été soutenu par le CNC et présenté à Belfort, Cergy, Brest et dans les Micro-Folies.",
      "Graduate of the Arts Décoratifs in Paris; “Fortune Teller” was supported by the CNC and shown in Belfort, Cergy, Brest and the Micro-Folies network.",
      "ຈົບຈາກ Arts Décoratifs ປາຣີ; « Fortune Teller » ໄດ້ຮັບການສະໜັບສະໜູນຈາກ CNC ແລະ ວາງສະແດງທີ່ແບລຟໍ, ແຊກີ, ເບຣສ ແລະ Micro-Folies.",
    ),
    inLaos: t(
      "Première présentation de « Fortune Teller » au Laos, à l’Institut français de Vientiane.",
      "First showing of “Fortune Teller” in Laos, at the Institut français in Vientiane.",
      "ການວາງສະແດງ « Fortune Teller » ຄັ້ງທຳອິດໃນລາວ ທີ່ສະຖາບັນຝຣັ່ງ ວຽງຈັນ.",
    ),
  },
];
