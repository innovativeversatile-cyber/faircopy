const LANG_KEY = "faircopy.lang";
const CUR_KEY = "faircopy.currency";

export const LANGUAGES = [
  { id: "en", name: "English" },
  { id: "sw", name: "Kiswahili" },
  { id: "fr", name: "Français" },
  { id: "pt", name: "Português" },
  { id: "es", name: "Español" },
  { id: "pl", name: "Polski" },
  { id: "de", name: "Deutsch" }
];

export const CURRENCIES = [
  { id: "USD", label: "USD · $" },
  { id: "EUR", label: "EUR · €" },
  { id: "GBP", label: "GBP · £" },
  { id: "KES", label: "KES · KSh" },
  { id: "ZAR", label: "ZAR · R" },
  { id: "NGN", label: "NGN · ₦" },
  { id: "GHS", label: "GHS · GH₵" },
  { id: "UGX", label: "UGX · USh" },
  { id: "TZS", label: "TZS · TSh" },
  { id: "PLN", label: "PLN · zł" },
  { id: "INR", label: "INR · ₹" },
  { id: "BRL", label: "BRL · R$" },
  { id: "CAD", label: "CAD · CA$" },
  { id: "AUD", label: "AUD · A$" }
];

const REGION_CURRENCY = {
  US: "USD", GB: "GBP", KE: "KES", ZA: "ZAR", NG: "NGN", GH: "GHS",
  UG: "UGX", TZ: "TZS", PL: "PLN", IN: "INR", BR: "BRL", CA: "CAD",
  AU: "AUD", IE: "EUR", FR: "EUR", DE: "EUR", ES: "EUR", IT: "EUR",
  PT: "EUR", NL: "EUR", BE: "EUR", AT: "EUR", FI: "EUR", SK: "EUR"
};

const en = {
  "skip": "Skip to the desk",
  "nav.how": "How it works",
  "nav.privacy": "Privacy",
  "nav.label": "About",
  "look.group": "Look",
  "pref.lang": "Language",
  "pref.currency": "Currency",
  "kicker": "On this device only",
  "hero.title": "Your papers never leave this device.",
  "hero.lede": "Take a photo of a page. This site writes a PDF here, in the browser. There is no account, and nothing is sent to a server.",
  "btn.camera": "Take photo",
  "btn.files": "Choose photos",
  "hero.hint": "You can also drop images onto this page. After it has loaded, it still works if you go offline.",
  "ws.camera": "Take another",
  "ws.files": "Choose more",
  "btn.rotate": "Rotate",
  "btn.crop": "Crop",
  "btn.moveUp": "Move up",
  "btn.moveDown": "Move down",
  "btn.remove": "Remove",
  "look.original": "As shot",
  "look.paper": "Paper",
  "look.ink": "Ink",
  "crop.hint": "Drag the box. Corners resize it.",
  "crop.apply": "Crop",
  "crop.cancel": "Cancel",
  "btn.make": "Make PDF",
  "how.title": "How it works",
  "how.1.title": "Add the pages.",
  "how.1.body": "Use the camera or pick from your gallery. A letter, a form, an ID, a receipt — anything flat.",
  "how.2.title": "Tidy them if you need to.",
  "how.2.body": "Rotate, crop, and choose a look. Paper clears a yellow cast. Ink is for text.",
  "how.3.title": "Make the PDF.",
  "how.3.body": "The file is written on this device and saved here. We never receive it. There is no copy in an account, because there is no account.",
  "what.title": "What this is, and is not",
  "what.p1": "This is a copying tool. It is not a notary, a government office, or a place to store records. Do not use it to alter identity papers in order to deceive anyone.",
  "what.p2": "Four pages are free — enough for a letter, a form, or both sides of a card. A longer packet can be split into two PDFs, or unlocked with a pass.",
  "prices.title": "If you need more than four pages",
  "prices.hint": "A pass stays on this device. Prices are set in the currency you choose — they are not live bank rates. You can also split a long packet into two PDFs.",
  "plan.day": "One day",
  "plan.month": "Thirty days",
  "plan.year": "One year",
  "sent.title": "If you were sent this link",
  "sent.p1": "Someone used it and thought you might need the same job. You do not have to sign in. Add your photos, make the PDF, and keep the file. If it will not save inside WhatsApp or Messenger, open the page in your browser from the menu.",
  "foot.p1": "Fair Copy is a page in your browser. There is no file locker and no mailing list.",
  "foot.privacy": "Privacy",
  "foot.free": "Four pages free",
  "limit.title": "Four pages on the free copy",
  "limit.p": "That is enough for a letter or a short form. Remove a page, or make this PDF and start another.",
  "limit.paid": "For a long packet, a pass stays on this device only:",
  "limit.split": "Card payments are not connected for this currency yet. Split a long packet into two PDFs.",
  "limit.back": "Back to the pages",
  "done.title": "The PDF is on this device",
  "done.saved": "Saved as {name}. It was not uploaded.",
  "done.hint": "If the file did not appear, look in Downloads — or open this page in your browser, not inside a chat app.",
  "done.share": "Share this page",
  "done.copy": "Copy link",
  "done.copied": "Link copied",
  "done.another": "Start a new copy",
  "done.close": "Close",
  "pass.day": "A day pass is on this device ({hours}h left).",
  "pass.long": "A pass is on this device ({days} days left).",
  "err.notImage": "That did not look like a photo. Try a JPEG or PNG.",
  "err.heic": "This photo could not be opened. If it is from an iPhone, take it again, or set Camera to Most Compatible.",
  "err.pdf": "The PDF could not be written. Try fewer pages, or smaller photos.",
  "busy.writing": "Writing page {current} of {total}…",
  "count": "{n} of {limit} pages",
  "count.one": "{n} of {limit} page",
  "share.text": "Fair Copy — turn photos of papers into a PDF on this device. Nothing is uploaded.",
  "doc.title": "Fair Copy — photos to PDF on this device",
  "doc.desc": "Turn photos of papers into a PDF. Nothing is uploaded. The work happens on this phone or computer.",
  "page": "Page {n}",
  "privacy.kicker": "A short note",
  "privacy.title": "Nothing you photograph is sent to us.",
  "privacy.p1": "Fair Copy is a static page. The photos you add, the crop, and the PDF are handled in this browser. They are not uploaded to a server, stored in an account, or used to train a model.",
  "privacy.p2": "After the page has loaded, you can turn the network off and still finish the job. A small service worker keeps the page itself available. It does not keep your papers.",
  "privacy.p3": "This site does not use analytics, advertising, or sign-in. Fonts are the ones already on your phone or computer. There are no third-party scripts.",
  "privacy.p4": "If you buy a pass, the card processor sees the payment, not your documents. The pass, language, and currency are saved in this browser. Clearing the site data clears them.",
  "privacy.p5": "If this copy of Fair Copy is hosted by someone else, they can see that the page was requested — the same as any website. They still do not receive the files you drop onto the desk.",
  "privacy.back": "Back to the desk",
  "privacy.doc.title": "Privacy — Fair Copy",
  "privacy.doc.desc": "Fair Copy runs in your browser. Photos and PDFs are not uploaded.",
  "noscript": "Fair Copy needs JavaScript so the PDF can be written on this device. Nothing is uploaded either way."
};

const sw = {
  "skip": "Ruka hadi dawati",
  "nav.how": "Jinsi inavyofanya kazi",
  "nav.privacy": "Faragha",
  "nav.label": "Kuhusu",
  "look.group": "Muonekano",
  "pref.lang": "Lugha",
  "pref.currency": "Sarafu",
  "kicker": "Kwenye kifaa hiki tu",
  "hero.title": "Karatasi zako hazitoki kwenye kifaa hiki.",
  "hero.lede": "Piga picha ya ukurasa. Tovuti hii inaandika PDF hapa, kwenye kivinjari. Hakuna akaunti, na hakuna kinachotumwa kwenye seva.",
  "btn.camera": "Piga picha",
  "btn.files": "Chagua picha",
  "hero.hint": "Unaweza pia kudondosha picha kwenye ukurasa huu. Baada ya kupakiwa, bado inafanya kazi bila mtandao.",
  "ws.camera": "Piga nyingine",
  "ws.files": "Chagua zaidi",
  "btn.rotate": "Zungusha",
  "btn.crop": "Kata",
  "btn.moveUp": "Sogeza juu",
  "btn.moveDown": "Sogeza chini",
  "btn.remove": "Ondoa",
  "look.original": "Kama ilivyo",
  "look.paper": "Karatasi",
  "look.ink": "Wino",
  "crop.hint": "Buruta kisanduku. Pembe zinakubadilisha ukubwa.",
  "crop.apply": "Kata",
  "crop.cancel": "Ghairi",
  "btn.make": "Tengeneza PDF",
  "how.title": "Jinsi inavyofanya kazi",
  "how.1.title": "Ongeza kurasa.",
  "how.1.body": "Tumia kamera au chagua kutoka kwenye albamu. Barua, fomu, kitambulisho, risiti — chochote kilicho bapa.",
  "how.2.title": "Safisha ukihitaji.",
  "how.2.body": "Zungusha, kata, na chagua muonekano. Karatasi huondoa rangi ya manjano. Wino ni kwa maandishi.",
  "how.3.title": "Tengeneza PDF.",
  "how.3.body": "Faili inaandikwa kwenye kifaa hiki na kuhifadhiwa hapa. Hatupokei. Hakuna nakala katika akaunti, kwa sababu hakuna akaunti.",
  "what.title": "Hii ni nini, na si nini",
  "what.p1": "Hii ni zana ya kunakili. Si mthibitishaji, ofisi ya serikali, wala mahali pa kuhifadhi kumbukumbu. Usitumie kubadilisha nyaraka za utambulisho ili kudanganya mtu.",
  "what.p2": "Kurasa nne ni bure — zinatosha barua, fomu, au pande zote za kadi. Kifurushi kirefu kinaweza kugawanywa kuwa PDF mbili, au kufunguliwa kwa pasi.",
  "prices.title": "Ukhitaji zaidi ya kurasa nne",
  "prices.hint": "Pasi inakaa kwenye kifaa hiki. Bei zimewekwa kwa sarafu uliyochagua — si viwango vya benki vya moja kwa moja. Unaweza pia kugawanya kifurushi kirefu kuwa PDF mbili.",
  "plan.day": "Siku moja",
  "plan.month": "Siku thelathini",
  "plan.year": "Mwaka mmoja",
  "sent.title": "Ikiwa ulipewa kiungo hiki",
  "sent.p1": "Mtu alikitumia na akafikiri unaweza kuhitaji kazi ile ile. Huhitaji kuingia. Ongeza picha, tengeneza PDF, na hifadhi faili. Ikiwa haitahifadhi ndani ya WhatsApp au Messenger, fungua ukurasa kwenye kivinjari kutoka kwenye menyu.",
  "foot.p1": "Fair Copy ni ukurasa kwenye kivinjari chako. Hakuna kumbukumbu ya faili wala orodha ya barua pepe.",
  "foot.privacy": "Faragha",
  "foot.free": "Kurasa nne bure",
  "limit.title": "Kurasa nne kwenye nakala ya bure",
  "limit.p": "Zinatosha barua au fomu fupi. Ondoa ukurasa, au tengeneza PDF hii kisha anza nyingine.",
  "limit.paid": "Kwa kifurushi kirefu, pasi inakaa kwenye kifaa hiki tu:",
  "limit.split": "Malipo ya kadi bado hayajaunganishwa kwa sarafu hii. Gawanya kifurushi kirefu kuwa PDF mbili.",
  "limit.back": "Rudi kwenye kurasa",
  "done.title": "PDF iko kwenye kifaa hiki",
  "done.saved": "Imehifadhiwa kama {name}. Haikupakiwa.",
  "done.hint": "Ikiwa faili haikuonekana, angalia Downloads — au fungua ukurasa huu kwenye kivinjari, si ndani ya programu ya gumzo.",
  "done.share": "Shiriki ukurasa huu",
  "done.copy": "Nakili kiungo",
  "done.copied": "Kiungo kimenakiliwa",
  "done.another": "Anza nakala mpya",
  "done.close": "Funga",
  "pass.day": "Pasi ya siku iko kwenye kifaa hiki (saa {hours} zimesalia).",
  "pass.long": "Pasi iko kwenye kifaa hiki (siku {days} zimesalia).",
  "err.notImage": "Hiyo haikuonekana kama picha. Jaribu JPEG au PNG.",
  "err.heic": "Picha hii haikuweza kufunguliwa. Ikiwa ni kutoka iPhone, piga tena, au weka Kamera kuwa Most Compatible.",
  "err.pdf": "PDF haikuweza kuandikwa. Jaribu kurasa chache, au picha ndogo.",
  "busy.writing": "Inaandika ukurasa {current} kati ya {total}…",
  "count": "{n} kati ya kurasa {limit}",
  "count.one": "{n} kati ya ukurasa {limit}",
  "share.text": "Fair Copy — geuza picha za karatasi kuwa PDF kwenye kifaa hiki. Hakuna kinachopakiwa.",
  "doc.title": "Fair Copy — picha kuwa PDF kwenye kifaa hiki",
  "doc.desc": "Geuza picha za karatasi kuwa PDF. Hakuna kinachopakiwa. Kazi inafanyika kwenye simu au kompyuta hii.",
  "page": "Ukurasa {n}",
  "privacy.kicker": "Maelezo mafupi",
  "privacy.title": "Hakuna unachopiga picha kinachotumwa kwetu.",
  "privacy.p1": "Fair Copy ni ukurasa tuli. Picha unazoongeza, ukataji, na PDF vinashughulikiwa kwenye kivinjari hiki. Havipakiwi kwenye seva, kuhifadhiwa kwenye akaunti, wala kutumika kufundisha modeli.",
  "privacy.p2": "Baada ya ukurasa kupakiwa, unaweza kuzima mtandao na bado kumaliza kazi. Service worker ndogo inaweka ukurasa upatikanaji. Haihifadhi karatasi zako.",
  "privacy.p3": "Tovuti hii haitumii uchambuzi, matangazo, wala kuingia. Fonti ni zile zilizo kwenye simu au kompyuta yako. Hakuna skripti za nje.",
  "privacy.p4": "Ukinunua pasi, mchakato wa kadi unaona malipo, si nyaraka zako. Pasi, lugha, na sarafu zinahifadhiwa kwenye kivinjari hiki. Kufuta data ya tovuti kunazifuta.",
  "privacy.p5": "Ikiwa nakala hii ya Fair Copy inahifadhiwa na mtu mwingine, wanaweza kuona kuwa ukurasa uliombwa — kama tovuti yoyote. Bado hawapokei faili unazodondosha kwenye dawati.",
  "privacy.back": "Rudi kwenye dawati",
  "privacy.doc.title": "Faragha — Fair Copy",
  "privacy.doc.desc": "Fair Copy inafanya kazi kwenye kivinjari. Picha na PDF hazipakiwi.",
  "noscript": "Fair Copy inahitaji JavaScript ili PDF iandikwe kwenye kifaa hiki. Hakuna kinachopakiwa hata hivyo."
};

const fr = {
  "skip": "Aller au pupitre",
  "nav.how": "Comment ça marche",
  "nav.privacy": "Confidentialité",
  "nav.label": "À propos",
  "look.group": "Rendu",
  "pref.lang": "Langue",
  "pref.currency": "Devise",
  "kicker": "Sur cet appareil seulement",
  "hero.title": "Vos papiers ne quittent pas cet appareil.",
  "hero.lede": "Photographiez une page. Ce site écrit un PDF ici, dans le navigateur. Il n’y a pas de compte, et rien n’est envoyé à un serveur.",
  "btn.camera": "Prendre une photo",
  "btn.files": "Choisir des photos",
  "hero.hint": "Vous pouvez aussi déposer des images sur cette page. Une fois chargée, elle fonctionne hors ligne.",
  "ws.camera": "En prendre une autre",
  "ws.files": "En choisir d’autres",
  "btn.rotate": "Pivoter",
  "btn.crop": "Recadrer",
  "btn.moveUp": "Monter",
  "btn.moveDown": "Descendre",
  "btn.remove": "Retirer",
  "look.original": "Telle quelle",
  "look.paper": "Papier",
  "look.ink": "Encre",
  "crop.hint": "Faites glisser le cadre. Les coins le redimensionnent.",
  "crop.apply": "Recadrer",
  "crop.cancel": "Annuler",
  "btn.make": "Créer le PDF",
  "how.title": "Comment ça marche",
  "how.1.title": "Ajoutez les pages.",
  "how.1.body": "Utilisez l’appareil photo ou choisissez dans la galerie. Une lettre, un formulaire, une pièce d’identité, un reçu — tout ce qui est plat.",
  "how.2.title": "Rangez-les si besoin.",
  "how.2.body": "Pivotez, recadrez, choisissez un rendu. Papier ôte le jaune. Encre convient au texte.",
  "how.3.title": "Créez le PDF.",
  "how.3.body": "Le fichier est écrit sur cet appareil et enregistré ici. Nous ne le recevons jamais. Il n’y a pas de copie dans un compte, parce qu’il n’y a pas de compte.",
  "what.title": "Ce que c’est, et ce que ce n’est pas",
  "what.p1": "C’est un outil de copie. Ce n’est pas un notaire, un guichet, ni un coffre. Ne l’utilisez pas pour altérer des papiers d’identité afin de tromper quelqu’un.",
  "what.p2": "Quatre pages sont gratuites — assez pour une lettre, un formulaire, ou les deux faces d’une carte. Un dossier plus long peut être coupé en deux PDF, ou débloqué avec un laissez-passer.",
  "prices.title": "Si vous avez besoin de plus de quatre pages",
  "prices.hint": "Le laissez-passer reste sur cet appareil. Les prix sont fixés dans la devise choisie — ce ne sont pas des cours bancaires en direct. Vous pouvez aussi couper un long dossier en deux PDF.",
  "plan.day": "Un jour",
  "plan.month": "Trente jours",
  "plan.year": "Un an",
  "sent.title": "Si l’on vous a envoyé ce lien",
  "sent.p1": "Quelqu’un s’en est servi et a pensé que vous auriez le même besoin. Pas besoin de vous connecter. Ajoutez vos photos, créez le PDF, gardez le fichier. S’il ne s’enregistre pas dans WhatsApp ou Messenger, ouvrez la page dans le navigateur via le menu.",
  "foot.p1": "Fair Copy est une page dans votre navigateur. Pas de coffre à fichiers, pas de liste de diffusion.",
  "foot.privacy": "Confidentialité",
  "foot.free": "Quatre pages gratuites",
  "limit.title": "Quatre pages sur la copie gratuite",
  "limit.p": "C’est assez pour une lettre ou un court formulaire. Retirez une page, ou créez ce PDF puis recommencez.",
  "limit.paid": "Pour un long dossier, un laissez-passer reste sur cet appareil seulement :",
  "limit.split": "Les paiements par carte ne sont pas encore liés pour cette devise. Coupez un long dossier en deux PDF.",
  "limit.back": "Retour aux pages",
  "done.title": "Le PDF est sur cet appareil",
  "done.saved": "Enregistré sous {name}. Il n’a pas été envoyé.",
  "done.hint": "S’il n’apparaît pas, cherchez dans Téléchargements — ou ouvrez cette page dans le navigateur, pas dans une application de discussion.",
  "done.share": "Partager cette page",
  "done.copy": "Copier le lien",
  "done.copied": "Lien copié",
  "done.another": "Recommencer une copie",
  "done.close": "Fermer",
  "pass.day": "Un laissez-passer d’un jour est sur cet appareil ({hours} h restantes).",
  "pass.long": "Un laissez-passer est sur cet appareil ({days} jours restants).",
  "err.notImage": "Cela ne ressemblait pas à une photo. Essayez un JPEG ou un PNG.",
  "err.heic": "Cette photo n’a pas pu s’ouvrir. Si elle vient d’un iPhone, reprenez-la, ou réglez l’appareil photo sur Compatible.",
  "err.pdf": "Le PDF n’a pas pu être écrit. Essayez moins de pages, ou des photos plus petites.",
  "busy.writing": "Écriture de la page {current} sur {total}…",
  "count": "{n} sur {limit} pages",
  "count.one": "{n} sur {limit} page",
  "share.text": "Fair Copy — transformez des photos de papiers en PDF sur cet appareil. Rien n’est envoyé.",
  "doc.title": "Fair Copy — photos vers PDF sur cet appareil",
  "doc.desc": "Transformez des photos de papiers en PDF. Rien n’est envoyé. Le travail se fait sur ce téléphone ou cet ordinateur.",
  "page": "Page {n}",
  "privacy.kicker": "Une courte note",
  "privacy.title": "Rien de ce que vous photographiez ne nous est envoyé.",
  "privacy.p1": "Fair Copy est une page statique. Les photos, le recadrage et le PDF sont traités dans ce navigateur. Ils ne sont pas envoyés à un serveur, stockés dans un compte, ni utilisés pour entraîner un modèle.",
  "privacy.p2": "Une fois la page chargée, vous pouvez couper le réseau et finir le travail. Un petit service worker garde la page disponible. Il ne conserve pas vos papiers.",
  "privacy.p3": "Ce site n’utilise ni mesure d’audience, ni publicité, ni connexion. Les polices sont celles déjà sur votre appareil. Il n’y a pas de scripts tiers.",
  "privacy.p4": "Si vous achetez un laissez-passer, le prestataire de paiement voit le règlement, pas vos documents. Le laissez-passer, la langue et la devise sont enregistrés dans ce navigateur. Effacer les données du site les efface.",
  "privacy.p5": "Si cette copie de Fair Copy est hébergée par quelqu’un d’autre, il peut voir que la page a été demandée — comme tout site. Il ne reçoit toujours pas les fichiers déposés sur le pupitre.",
  "privacy.back": "Retour au pupitre",
  "privacy.doc.title": "Confidentialité — Fair Copy",
  "privacy.doc.desc": "Fair Copy s’exécute dans votre navigateur. Photos et PDF ne sont pas envoyés.",
  "noscript": "Fair Copy a besoin de JavaScript pour écrire le PDF sur cet appareil. Rien n’est envoyé de toute façon."
};

const pt = {
  "skip": "Saltar para a secretária",
  "nav.how": "Como funciona",
  "nav.privacy": "Privacidade",
  "nav.label": "Acerca",
  "look.group": "Aspeto",
  "pref.lang": "Língua",
  "pref.currency": "Moeda",
  "kicker": "Só neste aparelho",
  "hero.title": "Os seus papéis não saem deste aparelho.",
  "hero.lede": "Fotografe uma página. Este sítio escreve um PDF aqui, no navegador. Não há conta, e nada é enviado a um servidor.",
  "btn.camera": "Tirar foto",
  "btn.files": "Escolher fotos",
  "hero.hint": "Também pode largar imagens nesta página. Depois de carregar, continua a funcionar sem rede.",
  "ws.camera": "Tirar outra",
  "ws.files": "Escolher mais",
  "btn.rotate": "Rodar",
  "btn.crop": "Recortar",
  "btn.moveUp": "Subir",
  "btn.moveDown": "Descer",
  "btn.remove": "Remover",
  "look.original": "Como está",
  "look.paper": "Papel",
  "look.ink": "Tinta",
  "crop.hint": "Arraste a caixa. Os cantos mudam o tamanho.",
  "crop.apply": "Recortar",
  "crop.cancel": "Cancelar",
  "btn.make": "Fazer PDF",
  "how.title": "Como funciona",
  "how.1.title": "Adicione as páginas.",
  "how.1.body": "Use a câmara ou escolha da galeria. Uma carta, um formulário, um documento, um recibo — qualquer coisa plana.",
  "how.2.title": "Arranje-as se precisar.",
  "how.2.body": "Rode, recorte e escolha um aspeto. Papel tira o amarelo. Tinta serve para texto.",
  "how.3.title": "Faça o PDF.",
  "how.3.body": "O ficheiro é escrito neste aparelho e guardado aqui. Nunca o recebemos. Não há cópia numa conta, porque não há conta.",
  "what.title": "O que isto é, e o que não é",
  "what.p1": "Isto é uma ferramenta de cópia. Não é um notário, um balcão, nem um arquivo. Não a use para alterar papéis de identidade a fim de enganar alguém.",
  "what.p2": "Quatro páginas são grátis — chegam para uma carta, um formulário, ou os dois lados de um cartão. Um maço mais longo pode ser dividido em dois PDF, ou desbloqueado com um passe.",
  "prices.title": "Se precisar de mais de quatro páginas",
  "prices.hint": "O passe fica neste aparelho. Os preços estão na moeda que escolher — não são cotações bancárias ao vivo. Também pode dividir um maço longo em dois PDF.",
  "plan.day": "Um dia",
  "plan.month": "Trinta dias",
  "plan.year": "Um ano",
  "sent.title": "Se lhe enviaram esta ligação",
  "sent.p1": "Alguém usou e pensou que poderia precisar do mesmo. Não tem de entrar. Adicione as fotos, faça o PDF e fique com o ficheiro. Se não gravar dentro do WhatsApp ou Messenger, abra a página no navegador pelo menu.",
  "foot.p1": "Fair Copy é uma página no seu navegador. Não há arquivo de ficheiros nem lista de correio.",
  "foot.privacy": "Privacidade",
  "foot.free": "Quatro páginas grátis",
  "limit.title": "Quatro páginas na cópia grátis",
  "limit.p": "Chega para uma carta ou um formulário curto. Remova uma página, ou faça este PDF e comece outro.",
  "limit.paid": "Para um maço longo, um passe fica só neste aparelho:",
  "limit.split": "Pagamentos com cartão ainda não estão ligados nesta moeda. Divida um maço longo em dois PDF.",
  "limit.back": "Voltar às páginas",
  "done.title": "O PDF está neste aparelho",
  "done.saved": "Guardado como {name}. Não foi enviado.",
  "done.hint": "Se o ficheiro não apareceu, veja em Transferências — ou abra esta página no navegador, não numa aplicação de conversa.",
  "done.share": "Partilhar esta página",
  "done.copy": "Copiar ligação",
  "done.copied": "Ligação copiada",
  "done.another": "Começar outra cópia",
  "done.close": "Fechar",
  "pass.day": "Um passe de um dia está neste aparelho ({hours} h restantes).",
  "pass.long": "Um passe está neste aparelho ({days} dias restantes).",
  "err.notImage": "Isso não parecia uma foto. Tente JPEG ou PNG.",
  "err.heic": "Esta foto não pôde ser aberta. Se for de um iPhone, tire outra, ou ponha a Câmara em Mais compatível.",
  "err.pdf": "O PDF não pôde ser escrito. Tente menos páginas, ou fotos mais pequenas.",
  "busy.writing": "A escrever a página {current} de {total}…",
  "count": "{n} de {limit} páginas",
  "count.one": "{n} de {limit} página",
  "share.text": "Fair Copy — transforme fotos de papéis num PDF neste aparelho. Nada é enviado.",
  "doc.title": "Fair Copy — fotos para PDF neste aparelho",
  "doc.desc": "Transforme fotos de papéis num PDF. Nada é enviado. O trabalho acontece neste telemóvel ou computador.",
  "page": "Página {n}",
  "privacy.kicker": "Uma nota curta",
  "privacy.title": "Nada do que fotografar nos é enviado.",
  "privacy.p1": "Fair Copy é uma página estática. As fotos, o recorte e o PDF são tratados neste navegador. Não são enviados a um servidor, guardados numa conta, nem usados para treinar um modelo.",
  "privacy.p2": "Depois de a página carregar, pode desligar a rede e ainda acabar o trabalho. Um service worker pequeno mantém a página disponível. Não guarda os seus papéis.",
  "privacy.p3": "Este sítio não usa análise, publicidade nem início de sessão. As fontes são as que já estão no aparelho. Não há scripts de terceiros.",
  "privacy.p4": "Se comprar um passe, o processador do cartão vê o pagamento, não os documentos. O passe, a língua e a moeda ficam neste navegador. Limpar os dados do sítio apaga-os.",
  "privacy.p5": "Se esta cópia de Fair Copy for alojada por outra pessoa, essa pessoa pode ver que a página foi pedida — como qualquer sítio. Continua a não receber os ficheiros que largar na secretária.",
  "privacy.back": "Voltar à secretária",
  "privacy.doc.title": "Privacidade — Fair Copy",
  "privacy.doc.desc": "Fair Copy corre no navegador. Fotos e PDF não são enviados.",
  "noscript": "Fair Copy precisa de JavaScript para escrever o PDF neste aparelho. Nada é enviado de qualquer forma."
};

const es = {
  "skip": "Saltar al escritorio",
  "nav.how": "Cómo funciona",
  "nav.privacy": "Privacidad",
  "nav.label": "Acerca de",
  "look.group": "Aspecto",
  "pref.lang": "Idioma",
  "pref.currency": "Moneda",
  "kicker": "Solo en este aparato",
  "hero.title": "Tus papeles no salen de este aparato.",
  "hero.lede": "Fotografía una página. Este sitio escribe un PDF aquí, en el navegador. No hay cuenta, y no se envía nada a un servidor.",
  "btn.camera": "Hacer foto",
  "btn.files": "Elegir fotos",
  "hero.hint": "También puedes soltar imágenes en esta página. Cuando ha cargado, sigue funcionando sin red.",
  "ws.camera": "Hacer otra",
  "ws.files": "Elegir más",
  "btn.rotate": "Girar",
  "btn.crop": "Recortar",
  "btn.moveUp": "Subir",
  "btn.moveDown": "Bajar",
  "btn.remove": "Quitar",
  "look.original": "Tal cual",
  "look.paper": "Papel",
  "look.ink": "Tinta",
  "crop.hint": "Arrastra el recuadro. Las esquinas cambian el tamaño.",
  "crop.apply": "Recortar",
  "crop.cancel": "Cancelar",
  "btn.make": "Hacer PDF",
  "how.title": "Cómo funciona",
  "how.1.title": "Añade las páginas.",
  "how.1.body": "Usa la cámara o elige de la galería. Una carta, un formulario, un documento, un recibo — cualquier cosa plana.",
  "how.2.title": "Arréglalas si hace falta.",
  "how.2.body": "Gira, recorta y elige un aspecto. Papel quita el amarillo. Tinta vale para el texto.",
  "how.3.title": "Haz el PDF.",
  "how.3.body": "El archivo se escribe en este aparato y se guarda aquí. Nunca lo recibimos. No hay copia en una cuenta, porque no hay cuenta.",
  "what.title": "Qué es esto, y qué no es",
  "what.p1": "Esto es una herramienta de copia. No es un notario, una ventanilla ni un archivo. No la uses para alterar papeles de identidad con el fin de engañar a nadie.",
  "what.p2": "Cuatro páginas son gratis — basta para una carta, un formulario o las dos caras de una tarjeta. Un fajo más largo puede partirse en dos PDF, o desbloquearse con un pase.",
  "prices.title": "Si necesitas más de cuatro páginas",
  "prices.hint": "El pase se queda en este aparato. Los precios están en la moneda que elijas — no son tipos bancarios en vivo. También puedes partir un fajo largo en dos PDF.",
  "plan.day": "Un día",
  "plan.month": "Treinta días",
  "plan.year": "Un año",
  "sent.title": "Si te enviaron este enlace",
  "sent.p1": "Alguien lo usó y pensó que te haría falta lo mismo. No tienes que entrar. Añade tus fotos, haz el PDF y quédate el archivo. Si no se guarda dentro de WhatsApp o Messenger, abre la página en el navegador desde el menú.",
  "foot.p1": "Fair Copy es una página en tu navegador. No hay archivo de ficheros ni lista de correo.",
  "foot.privacy": "Privacidad",
  "foot.free": "Cuatro páginas gratis",
  "limit.title": "Cuatro páginas en la copia gratis",
  "limit.p": "Basta para una carta o un formulario corto. Quita una página, o haz este PDF y empieza otro.",
  "limit.paid": "Para un fajo largo, un pase se queda solo en este aparato:",
  "limit.split": "Los pagos con tarjeta aún no están conectados para esta moneda. Parte un fajo largo en dos PDF.",
  "limit.back": "Volver a las páginas",
  "done.title": "El PDF está en este aparato",
  "done.saved": "Guardado como {name}. No se subió.",
  "done.hint": "Si el archivo no aparece, mira en Descargas — o abre esta página en el navegador, no dentro de una aplicación de chat.",
  "done.share": "Compartir esta página",
  "done.copy": "Copiar enlace",
  "done.copied": "Enlace copiado",
  "done.another": "Empezar otra copia",
  "done.close": "Cerrar",
  "pass.day": "Un pase de un día está en este aparato ({hours} h restantes).",
  "pass.long": "Un pase está en este aparato ({days} días restantes).",
  "err.notImage": "Eso no parecía una foto. Prueba un JPEG o un PNG.",
  "err.heic": "Esta foto no se pudo abrir. Si es de un iPhone, hazla otra vez, o pon la Cámara en Más compatible.",
  "err.pdf": "No se pudo escribir el PDF. Prueba menos páginas, o fotos más pequeñas.",
  "busy.writing": "Escribiendo la página {current} de {total}…",
  "count": "{n} de {limit} páginas",
  "count.one": "{n} de {limit} página",
  "share.text": "Fair Copy — convierte fotos de papeles en un PDF en este aparato. No se sube nada.",
  "doc.title": "Fair Copy — fotos a PDF en este aparato",
  "doc.desc": "Convierte fotos de papeles en un PDF. No se sube nada. El trabajo ocurre en este teléfono u ordenador.",
  "page": "Página {n}",
  "privacy.kicker": "Una nota breve",
  "privacy.title": "Nada de lo que fotografíes se nos envía.",
  "privacy.p1": "Fair Copy es una página estática. Las fotos, el recorte y el PDF se tratan en este navegador. No se suben a un servidor, ni se guardan en una cuenta, ni se usan para entrenar un modelo.",
  "privacy.p2": "Cuando la página ha cargado, puedes apagar la red y terminar el trabajo. Un service worker pequeño mantiene la página disponible. No guarda tus papeles.",
  "privacy.p3": "Este sitio no usa analítica, publicidad ni inicio de sesión. Las fuentes son las que ya están en tu aparato. No hay scripts de terceros.",
  "privacy.p4": "Si compras un pase, el procesador de la tarjeta ve el pago, no tus documentos. El pase, el idioma y la moneda se guardan en este navegador. Borrar los datos del sitio los borra.",
  "privacy.p5": "Si esta copia de Fair Copy la aloja otra persona, puede ver que se pidió la página — como cualquier sitio. Sigue sin recibir los archivos que sueltas en el escritorio.",
  "privacy.back": "Volver al escritorio",
  "privacy.doc.title": "Privacidad — Fair Copy",
  "privacy.doc.desc": "Fair Copy funciona en el navegador. Las fotos y el PDF no se suben.",
  "noscript": "Fair Copy necesita JavaScript para escribir el PDF en este aparato. No se sube nada de todos modos."
};

const pl = {
  "skip": "Przejdź do biurka",
  "nav.how": "Jak to działa",
  "nav.privacy": "Prywatność",
  "nav.label": "O stronie",
  "look.group": "Wygląd",
  "pref.lang": "Język",
  "pref.currency": "Waluta",
  "kicker": "Tylko na tym urządzeniu",
  "hero.title": "Twoje papiery nie opuszczają tego urządzenia.",
  "hero.lede": "Zrób zdjęcie strony. Ta witryna zapisuje PDF tutaj, w przeglądarce. Nie ma konta i nic nie jest wysyłane na serwer.",
  "btn.camera": "Zrób zdjęcie",
  "btn.files": "Wybierz zdjęcia",
  "hero.hint": "Możesz też upuścić obrazy na tę stronę. Po załadowaniu działa bez sieci.",
  "ws.camera": "Zrób kolejne",
  "ws.files": "Wybierz więcej",
  "btn.rotate": "Obróć",
  "btn.crop": "Przytnij",
  "btn.moveUp": "Wyżej",
  "btn.moveDown": "Niżej",
  "btn.remove": "Usuń",
  "look.original": "Jak zrobione",
  "look.paper": "Papier",
  "look.ink": "Atrament",
  "crop.hint": "Przeciągnij ramkę. Narożniki zmieniają rozmiar.",
  "crop.apply": "Przytnij",
  "crop.cancel": "Anuluj",
  "btn.make": "Zrób PDF",
  "how.title": "Jak to działa",
  "how.1.title": "Dodaj strony.",
  "how.1.body": "Użyj aparatu albo wybierz z galerii. List, formularz, dokument, paragon — cokolwiek płaskiego.",
  "how.2.title": "Popraw, jeśli trzeba.",
  "how.2.body": "Obróć, przytnij i wybierz wygląd. Papier zbiera żółć. Atrament jest do tekstu.",
  "how.3.title": "Zrób PDF.",
  "how.3.body": "Plik powstaje na tym urządzeniu i zostaje tutaj. Nigdy go nie otrzymujemy. Nie ma kopii na koncie, bo nie ma konta.",
  "what.title": "Czym to jest, a czym nie",
  "what.p1": "To narzędzie do kopiowania. To nie notariusz, urząd ani archiwum. Nie używaj go do przerabiania dokumentów tożsamości, żeby kogoś oszukać.",
  "what.p2": "Cztery strony są darmowe — starczy na list, formularz albo obie strony karty. Dłuższy plik można podzielić na dwa PDF albo odblokować przepustką.",
  "prices.title": "Jeśli potrzebujesz więcej niż czterech stron",
  "prices.hint": "Przepustka zostaje na tym urządzeniu. Ceny są w wybranej walucie — to nie kursy bankowe na żywo. Dłuższy plik można też podzielić na dwa PDF.",
  "plan.day": "Jeden dzień",
  "plan.month": "Trzydzieści dni",
  "plan.year": "Jeden rok",
  "sent.title": "Jeśli ktoś przysłał ci ten odnośnik",
  "sent.p1": "Ktoś z tego skorzystał i pomyślał, że może ci się przydać to samo. Nie musisz się logować. Dodaj zdjęcia, zrób PDF i zachowaj plik. Jeśli nie zapisze się w WhatsAppie albo Messengerze, otwórz stronę w przeglądarce z menu.",
  "foot.p1": "Fair Copy to strona w przeglądarce. Nie ma szafki na pliki ani listy mailingowej.",
  "foot.privacy": "Prywatność",
  "foot.free": "Cztery strony za darmo",
  "limit.title": "Cztery strony w darmowej kopii",
  "limit.p": "Starczy na list albo krótki formularz. Usuń stronę albo zrób ten PDF i zacznij kolejny.",
  "limit.paid": "Przy dłuższym pliku przepustka zostaje tylko na tym urządzeniu:",
  "limit.split": "Płatności kartą nie są jeszcze podłączone dla tej waluty. Podziel dłuższy plik na dwa PDF.",
  "limit.back": "Wróć do stron",
  "done.title": "PDF jest na tym urządzeniu",
  "done.saved": "Zapisano jako {name}. Nie został wysłany.",
  "done.hint": "Jeśli pliku nie widać, sprawdź Pobrane — albo otwórz tę stronę w przeglądarce, nie w aplikacji do rozmów.",
  "done.share": "Udostępnij tę stronę",
  "done.copy": "Kopiuj odnośnik",
  "done.copied": "Odnośnik skopiowany",
  "done.another": "Zacznij nową kopię",
  "done.close": "Zamknij",
  "pass.day": "Przepustka na dzień jest na tym urządzeniu (zostało {hours} godz.).",
  "pass.long": "Przepustka jest na tym urządzeniu (zostało {days} dni).",
  "err.notImage": "To nie wyglądało na zdjęcie. Spróbuj JPEG albo PNG.",
  "err.heic": "Tego zdjęcia nie dało się otworzyć. Jeśli jest z iPhone’a, zrób je jeszcze raz albo ustaw Aparat na Najbardziej zgodny.",
  "err.pdf": "Nie udało się zapisać PDF. Spróbuj mniej stron albo mniejszych zdjęć.",
  "busy.writing": "Zapis strony {current} z {total}…",
  "count": "{n} z {limit} stron",
  "count.one": "{n} z {limit} strony",
  "share.text": "Fair Copy — zrób PDF ze zdjęć papierów na tym urządzeniu. Nic nie jest wysyłane.",
  "doc.title": "Fair Copy — zdjęcia do PDF na tym urządzeniu",
  "doc.desc": "Zrób PDF ze zdjęć papierów. Nic nie jest wysyłane. Praca odbywa się na tym telefonie albo komputerze.",
  "page": "Strona {n}",
  "privacy.kicker": "Krótka uwaga",
  "privacy.title": "Nic, co fotografujesz, nie jest do nas wysyłane.",
  "privacy.p1": "Fair Copy to statyczna strona. Zdjęcia, przycięcie i PDF są obsługiwane w tej przeglądarce. Nie są wysyłane na serwer, zapisywane na koncie ani używane do trenowania modelu.",
  "privacy.p2": "Po załadowaniu strony możesz wyłączyć sieć i dokończyć pracę. Mały service worker trzyma samą stronę. Nie trzyma twoich papierów.",
  "privacy.p3": "Ta witryna nie używa analityki, reklam ani logowania. Czcionki są tymi, które już są na urządzeniu. Nie ma skryptów stron trzecich.",
  "privacy.p4": "Jeśli kupisz przepustkę, operator karty widzi płatność, nie dokumenty. Przepustka, język i waluta zostają w tej przeglądarce. Wyczyszczenie danych witryny je usuwa.",
  "privacy.p5": "Jeśli tę kopię Fair Copy ktoś inny hostuje, może zobaczyć, że stronę pobrano — jak każdą witrynę. Nadal nie dostaje plików upuszczonych na biurko.",
  "privacy.back": "Wróć do biurka",
  "privacy.doc.title": "Prywatność — Fair Copy",
  "privacy.doc.desc": "Fair Copy działa w przeglądarce. Zdjęcia i PDF nie są wysyłane.",
  "noscript": "Fair Copy potrzebuje JavaScriptu, żeby zapisać PDF na tym urządzeniu. I tak nic nie jest wysyłane."
};

const de = {
  "skip": "Zum Pult springen",
  "nav.how": "So geht’s",
  "nav.privacy": "Datenschutz",
  "nav.label": "Über",
  "look.group": "Aussehen",
  "pref.lang": "Sprache",
  "pref.currency": "Währung",
  "kicker": "Nur auf diesem Gerät",
  "hero.title": "Ihre Papiere verlassen dieses Gerät nicht.",
  "hero.lede": "Fotografieren Sie eine Seite. Diese Seite schreibt hier, im Browser, ein PDF. Es gibt kein Konto, und nichts wird an einen Server geschickt.",
  "btn.camera": "Foto machen",
  "btn.files": "Fotos wählen",
  "hero.hint": "Sie können Bilder auch auf diese Seite ziehen. Nach dem Laden funktioniert sie ohne Netz.",
  "ws.camera": "Noch eines",
  "ws.files": "Weitere wählen",
  "btn.rotate": "Drehen",
  "btn.crop": "Zuschneiden",
  "btn.moveUp": "Nach oben",
  "btn.moveDown": "Nach unten",
  "btn.remove": "Entfernen",
  "look.original": "Wie aufgenommen",
  "look.paper": "Papier",
  "look.ink": "Tinte",
  "crop.hint": "Ziehen Sie den Rahmen. Die Ecken ändern die Größe.",
  "crop.apply": "Zuschneiden",
  "crop.cancel": "Abbrechen",
  "btn.make": "PDF erstellen",
  "how.title": "So geht’s",
  "how.1.title": "Seiten hinzufügen.",
  "how.1.body": "Kamera oder Galerie. Ein Brief, ein Formular, ein Ausweis, eine Quittung — alles Flache.",
  "how.2.title": "Aufräumen, wenn nötig.",
  "how.2.body": "Drehen, zuschneiden, ein Aussehen wählen. Papier nimmt Gelbstich. Tinte ist für Text.",
  "how.3.title": "PDF erstellen.",
  "how.3.body": "Die Datei wird auf diesem Gerät geschrieben und hier gespeichert. Wir empfangen sie nie. Es gibt keine Kopie in einem Konto, weil es kein Konto gibt.",
  "what.title": "Was das ist, und was nicht",
  "what.p1": "Das ist ein Kopierwerkzeug. Kein Notar, kein Amt, kein Archiv. Verwenden Sie es nicht, um Ausweispapiere zu verändern, um jemanden zu täuschen.",
  "what.p2": "Vier Seiten sind frei — genug für einen Brief, ein Formular oder beide Seiten einer Karte. Ein längeres Paket kann in zwei PDF geteilt oder mit einem Pass freigeschaltet werden.",
  "prices.title": "Wenn Sie mehr als vier Seiten brauchen",
  "prices.hint": "Der Pass bleibt auf diesem Gerät. Die Preise stehen in der gewählten Währung — das sind keine Live-Bankkurse. Sie können ein langes Paket auch in zwei PDF teilen.",
  "plan.day": "Ein Tag",
  "plan.month": "Dreißig Tage",
  "plan.year": "Ein Jahr",
  "sent.title": "Wenn Ihnen dieser Link geschickt wurde",
  "sent.p1": "Jemand hat es benutzt und dachte, Sie bräuchten dieselbe Arbeit. Sie müssen sich nicht anmelden. Fotos hinzufügen, PDF erstellen, Datei behalten. Speichert es in WhatsApp oder Messenger nicht, öffnen Sie die Seite im Browser über das Menü.",
  "foot.p1": "Fair Copy ist eine Seite in Ihrem Browser. Kein Dateitresor, keine Mailingliste.",
  "foot.privacy": "Datenschutz",
  "foot.free": "Vier Seiten frei",
  "limit.title": "Vier Seiten in der freien Kopie",
  "limit.p": "Das reicht für einen Brief oder ein kurzes Formular. Entfernen Sie eine Seite, oder erstellen Sie dieses PDF und beginnen Sie ein neues.",
  "limit.paid": "Für ein langes Paket bleibt ein Pass nur auf diesem Gerät:",
  "limit.split": "Kartenzahlungen sind für diese Währung noch nicht verbunden. Teilen Sie ein langes Paket in zwei PDF.",
  "limit.back": "Zurück zu den Seiten",
  "done.title": "Das PDF ist auf diesem Gerät",
  "done.saved": "Gespeichert als {name}. Es wurde nicht hochgeladen.",
  "done.hint": "Wenn die Datei nicht erscheint, schauen Sie in Downloads — oder öffnen Sie diese Seite im Browser, nicht in einer Chat-App.",
  "done.share": "Diese Seite teilen",
  "done.copy": "Link kopieren",
  "done.copied": "Link kopiert",
  "done.another": "Neue Kopie beginnen",
  "done.close": "Schließen",
  "pass.day": "Ein Tagespass ist auf diesem Gerät (noch {hours} Std.).",
  "pass.long": "Ein Pass ist auf diesem Gerät (noch {days} Tage).",
  "err.notImage": "Das sah nicht nach einem Foto aus. Versuchen Sie JPEG oder PNG.",
  "err.heic": "Dieses Foto ließ sich nicht öffnen. Wenn es vom iPhone kommt, nehmen Sie es neu auf, oder stellen Sie die Kamera auf Kompatibel.",
  "err.pdf": "Das PDF konnte nicht geschrieben werden. Versuchen Sie weniger Seiten oder kleinere Fotos.",
  "busy.writing": "Schreibe Seite {current} von {total}…",
  "count": "{n} von {limit} Seiten",
  "count.one": "{n} von {limit} Seite",
  "share.text": "Fair Copy — Fotos von Papieren auf diesem Gerät in ein PDF. Nichts wird hochgeladen.",
  "doc.title": "Fair Copy — Fotos zu PDF auf diesem Gerät",
  "doc.desc": "Machen Sie aus Fotos von Papieren ein PDF. Nichts wird hochgeladen. Die Arbeit geschieht auf diesem Telefon oder Rechner.",
  "page": "Seite {n}",
  "privacy.kicker": "Eine kurze Notiz",
  "privacy.title": "Nichts, was Sie fotografieren, wird an uns geschickt.",
  "privacy.p1": "Fair Copy ist eine statische Seite. Fotos, Zuschnitt und PDF werden in diesem Browser verarbeitet. Sie werden nicht auf einen Server geladen, in einem Konto gespeichert oder zum Trainieren eines Modells verwendet.",
  "privacy.p2": "Nach dem Laden können Sie das Netz abschalten und die Arbeit beenden. Ein kleiner Service Worker hält die Seite selbst bereit. Er behält Ihre Papiere nicht.",
  "privacy.p3": "Diese Seite nutzt keine Messung, Werbung oder Anmeldung. Die Schriften sind die, die schon auf dem Gerät sind. Es gibt keine Fremdskripte.",
  "privacy.p4": "Wenn Sie einen Pass kaufen, sieht der Kartenanbieter die Zahlung, nicht Ihre Unterlagen. Pass, Sprache und Währung bleiben in diesem Browser. Das Löschen der Seitendaten löscht sie.",
  "privacy.p5": "Wenn jemand anderes diese Kopie von Fair Copy hostet, kann er sehen, dass die Seite angefragt wurde — wie jede Website. Die Dateien, die Sie aufs Pult legen, erhält er trotzdem nicht.",
  "privacy.back": "Zurück zum Pult",
  "privacy.doc.title": "Datenschutz — Fair Copy",
  "privacy.doc.desc": "Fair Copy läuft im Browser. Fotos und PDF werden nicht hochgeladen.",
  "noscript": "Fair Copy braucht JavaScript, damit das PDF auf diesem Gerät geschrieben wird. Hochgeladen wird trotzdem nichts."
};

const DICT = { en, sw, fr, pt, es, pl, de };
const listeners = new Set();

function stored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function store(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode */
  }
}

function detectLang() {
  const raw = (navigator.language || "en").toLowerCase();
  const short = raw.slice(0, 2);
  if (DICT[short]) return short;
  return "en";
}

function detectCurrency() {
  const raw = navigator.language || "en-US";
  const region = raw.split("-")[1]?.toUpperCase();
  if (region && REGION_CURRENCY[region]) return REGION_CURRENCY[region];
  const short = raw.slice(0, 2).toLowerCase();
  if (short === "sw") return "KES";
  if (short === "pl") return "PLN";
  if (short === "pt") return "BRL";
  if (["fr", "de", "es", "it", "nl"].includes(short)) return "EUR";
  return "USD";
}

export function getLang() {
  const v = stored(LANG_KEY);
  return v && DICT[v] ? v : detectLang();
}

export function getCurrency() {
  const v = stored(CUR_KEY);
  return v && CURRENCIES.some((c) => c.id === v) ? v : detectCurrency();
}

export function setLang(id) {
  if (!DICT[id]) return;
  store(LANG_KEY, id);
  applyLocale();
  listeners.forEach((fn) => fn());
}

export function setCurrency(id) {
  if (!CURRENCIES.some((c) => c.id === id)) return;
  store(CUR_KEY, id);
  applyLocale();
  listeners.forEach((fn) => fn());
}

export function onLocaleChange(fn) {
  listeners.add(fn);
}

export function t(key, vars = {}) {
  const lang = getLang();
  let s = (DICT[lang] && DICT[lang][key]) || en[key] || key;
  for (const [k, v] of Object.entries(vars)) {
    s = s.split("{" + k + "}").join(String(v));
  }
  return s;
}

export function formatMoney(amount, currency = getCurrency()) {
  const n = Number(amount);
  const digits = Number.isInteger(n) ? 0 : 2;
  try {
    return new Intl.NumberFormat(getLang(), {
      style: "currency",
      currency,
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    }).format(n);
  } catch {
    return `${currency} ${n}`;
  }
}

export function passAmount(plan) {
  const cfg = window.FAIRCOPY_CONFIG || {};
  const cur = getCurrency();
  const table = cfg.amounts || {};
  const row = table[cur] || table.USD || {};
  return row[plan];
}

export function paymentUrl(plan) {
  const cfg = window.FAIRCOPY_CONFIG || {};
  const links = cfg.paymentLinks || {};
  const cur = getCurrency();
  if (links[cur] && links[cur][plan]) return links[cur][plan];
  if (typeof links[plan] === "string") return links[plan];
  return "";
}

export function hasAnyPayment() {
  return ["day", "month", "year"].some((plan) => paymentUrl(plan));
}

export function applyLocale() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const attr = el.getAttribute("data-i18n-attr");
    const text = t(key);
    if (attr) el.setAttribute(attr, text);
    else el.textContent = text;
  });
  fillPrefSelects();
}

function fillPrefSelects() {
  const langSel = document.getElementById("pref-lang");
  const curSel = document.getElementById("pref-currency");
  if (langSel && langSel.options.length === 0) {
    LANGUAGES.forEach((l) => {
      const opt = document.createElement("option");
      opt.value = l.id;
      opt.textContent = l.name;
      langSel.appendChild(opt);
    });
  }
  if (curSel && curSel.options.length === 0) {
    CURRENCIES.forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = c.label;
      curSel.appendChild(opt);
    });
  }
  if (langSel) langSel.value = getLang();
  if (curSel) curSel.value = getCurrency();
}

function bindPrefs() {
  const langSel = document.getElementById("pref-lang");
  const curSel = document.getElementById("pref-currency");
  if (langSel && !langSel.dataset.bound) {
    langSel.dataset.bound = "1";
    langSel.addEventListener("change", () => setLang(langSel.value));
  }
  if (curSel && !curSel.dataset.bound) {
    curSel.dataset.bound = "1";
    curSel.addEventListener("change", () => setCurrency(curSel.value));
  }
}

export function initLocale() {
  fillPrefSelects();
  bindPrefs();
  applyLocale();
}

initLocale();
