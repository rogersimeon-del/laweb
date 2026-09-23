// Centralització de cadenes de text CA / EN per a tota la interfície.
// Les pàgines de contingut (biografia, obres, etc.) consumeixen aquestes
// cadenes; el llenguatge de les obres mateixes va a dins de les dades.

export const t = {
  ca: {
    // Brand
    brand: 'Roger Simeon',
    brandRole: 'Dramatúrgia',

    // Navigation
    nav: {
      home: 'Inici',
      about: 'Sobre l\u2019autor',
      works: 'Obres estrenades',
      projects: 'Projectes en curs',
      publications: 'Publicacions',
      awards: 'Premis',
      downloads: 'Descarregar textos',
      news: 'Notícies',
      contact: 'Contacte',
      privacy: 'Privacitat',
      legal: 'Avís legal',
      search: 'Cerca',
      skipToContent: 'Saltar al contingut',
    },

    // Common UI
    ui: {
      read: 'Llegir més',
      viewWork: 'Veure fitxa',
      viewAll: 'Veure-ho tot',
      backTo: 'Tornar a',
      back: 'Tornar',
      download: 'Descarregar',
      downloadRequest: 'Sol·licitar PDF',
      send: 'Enviar',
      sending: 'Enviant…',
      openEmail: 'Obrir el correu',
      yes: 'Sí',
      no: 'No',
      filter: 'Filtrar',
      sortBy: 'Ordenar per',
      reset: 'Restablir',
      apply: 'Aplicar',
      close: 'Tancar',
      share: 'Compartir',
      from: 'De',
      to: 'a',
      published: 'Publicat',
      updated: 'Actualitzat',
      available: 'Disponible per a estrena',
      unavailable: 'No disponible en aquest moment',
      language: 'Llengua',
      translatedBy: 'Traducció de',
      placeholder: 'Detalls pendents',
    },

    // Filters
    filters: {
      title: 'Filtres',
      year: 'Any d\u2019estrena',
      yearFrom: 'Des de',
      yearTo: 'Fins a',
      genre: 'Gènere / forma',
      cast: 'Mida de repartiment',
      originLang: 'Llengua d\u2019origen',
      availability: 'Disponibilitat',
      any: 'Qualsevol',
      solo: '1 persona',
      small: '2–4',
      medium: '5–9',
      large: '10 o més',
      available: 'Disponible',
      unavailable: 'No disponible',
    },

    genres: {
      teatre: 'Teatre',
      breu: 'Peça breu',
      adaptacio: 'Adaptació',
      infantil: 'Teatre infantil',
      documental: 'Teatre documental',
      monoleg: 'Monòleg',
      musical: 'Teatre musical',
    },

    sortOptions: {
      recent: 'Més recents',
      older: 'Més antigues',
      titleAsc: 'Títol A–Z',
      titleDesc: 'Títol Z–A',
    },

    // Home
    home: {
      eyebrow: 'Dramatúrgia contemporània en català, castellà i anglès',
      headline1: 'Roger Simeon',
      headline2: 'Escriu a cavall de llengües i de ciutats.',
      heroLead:
        'Dramaturg i autor català amb obres estrenades a Barcelona, Madrid, Nova York, Xangai i Londres.',
      heroQuote: 'Conviure és un malentès',
      intro:
        'Dramaturg català amb estrenes a Barcelona, Badalona, Madrid, Nova York, Xangai i Londres. Treballa en català, castellà i anglès, i col·labora regularment amb la IATI Theatre (Nova York) i la Sala Beckett (Barcelona).',
      ctaWorks: 'Veure obres',
      ctaDownloads: 'Descarregar textos',
      ctaContact: 'Contactar',
      prelude: 'Sobre el seu teatre',
    },

    // Featured cards labels (home)
    featured: {
      latestPremiere: 'Darrera estrena',
      latestAward: 'Darrer premi',
      featuredDownload: 'Text a descarregar',
    },

    // About
    about: {
      eyebrow: 'Sobre l\u2019autor',
      title: 'Trajectòria, llengua i ofici',
      portraitAlt: 'Retrat editorial de Roger Simeon',
      downloadCV: 'Descarregar CV (PDF)',
      timelineTitle: 'Trajectòria professional',
      training: 'Formació',
      trajectory: 'Trajectòria',
      themes: 'Temàtica',
      approach: 'L\u2019ofici d\u2019escriure',
    },

    // Works catalogue
    works: {
      title: 'Obres estrenades',
      subtitle:
        'Catàleg complet de peces estrenades, ordenable i filtrable per any, gènere, mida de repartiment i disponibilitat.',
      count: 'peces',
      filtersTitle: 'Filtrar el catàleg',
      sortTitle: 'Ordenar',
      emptyTitle: 'Cap resultat',
      emptyText: 'Cap obra coincideix amb els filtres escollits. Restableix per tornar al catàleg complet.',
      detailBadge: 'Fitxa',
      premiere: 'Estrena',
      directedBy: 'Direcció',
      venue: 'Espai',
      duration: 'Durada',
      characters: 'Personatges',
      collaborationsTitle: 'Altres projectes',
      collaborationsSubtitle:
        'Peces en què l\u2019autor ha participat però de les quals no n\u2019és titular — dramatúrgia o guió per encàrrec, ajundantia de direcció, documentals i col·laboracions.',
      collaborationsRole: 'Paper',
      synopsis: 'Sinopsi',
      synopsisPending: 'Sinopsi pendent de redacció per l\u2019autor.',
      synopsisPendingHowto:
        'Per afegir-la: edita el registre "synopsis.ca" i "synopsis.en" dins de src/data/portfolio.js, buscant l\'entrada pel seu slug.',
      synopsisPendingNote:
        'El text següent és un resum tècnic de l\u2019obra — derivat de les dades del registre. La sinopsi completa vindrà de l\u2019autor.',
      productionHistory: 'Historial d\u2019escenes',
      technicalHeading: 'Dades tècniques',
      gallery: 'Galeria de producció',
      noGallery: 'Sense imatges de producció disponibles.',
      downloadAvailable: 'Descarregar text',
      notAvailable: 'Text no disponible en aquest moment',
    },

    // Projects
    projects: {
      title: 'Projectes en curs',
      subtitle:
        'Peces en diferents fases d\u2019escriptura —encara no estrenades— amb col·laboracions i finestres d\u2019estrena previstes.',
      stage: 'Estat',
      collaborators: 'Col·laboracions',
      window: 'Finestra d\u2019estrena',
      updates: 'Actualitzacions',
      stageLabels: {
        draft: 'Primera versió',
        revision: 'Segona versió',
        residency: 'En residència',
        production: 'En producció',
        reading: 'Lectura dramatitzada',
      },
    },

    // Publications
    publications: {
      title: 'Publicacions',
      subtitle:
        'Articles, crítiques literàries i teatrals, relats i obres publicades, en ordre cronològic invers.',
      filterTitle: 'Filtrar per categoria',
      all: 'Totes',
      categories: {
        story: 'Relats',
        play: 'Teatre publicat',
        collection: 'Reculls',
        'review-literary': 'Crítica literària',
        'review-theatre': 'Crítica teatral',
        review: 'Ressenya',
        interview: 'Entrevista',
        feature: 'Reportatge / Crònica',
      },
      open: 'Obrir',
      permalink: 'Enllaç extern',
      noLink: 'Sense enllaç disponible',
    },

    // Awards
    awards: {
      title: 'Premis i reconeixements',
      subtitle:
        'Guardons, nominacions, beques, residències i seleccions en festivals, en ordre invers.',
      awardName: 'Premi',
      body: 'Entitat convocant',
      year: 'Any',
      work: 'Obra reconeguda',
      seeWork: 'Veure l\u2019obra',
      type: 'Tipus',
      typeLabels: {
        prize: 'Premi',
        nomination: 'Nominació',
        grant: 'Beca',
        residency: 'Residència',
        selection: 'Selecció',
        finalist: 'Finalista',
        mention: 'Menció / Accèssit',
      },
      unproducedTitle: 'Obres premiades, no estrenades',
      unproducedSubtitle: 'Textos guardonats que encara no han portat a escena.',
    },

    // Downloads
    downloads: {
      title: 'Descarregar textos',
      subtitle:
        'L\u2019autor comparteix determinats textos per a lectura personal i estudi. Per a drets d\u2019escena, poseu-vos en contacte directament.',
      format: 'Format',
      size: 'Mida',
      langs: 'Llengües',
      licenseNoteTitle: 'Condicions d\u2019ús',
      licenseBody:
        'Aquests textos es posen a disposició per a lectura personal, estudi acadèmic i lectura dramatitzada sense públic. Per a qualsevol muntatge professional, adaptació o traducció amb vista a estrena pública, cal un contracte per escrit amb l\u2019autor o la seva representació.',
      requestButton: 'Sol·licitar PDF',
      downloadButton: 'Descarregar PDF',
      freeBadge: 'Descàrrega gratuïta',
      onRequestBadge: 'Per petició',
      requestNote:
        'El formulari envia una petició per correu — encara no hi ha descàrrega automàtica per a tots els textos.',
    },

    // News
    news: {
      title: 'Notícies',
      subtitle: 'Estrenes, festivals, residències, publicacions i premsa, en ordre cronològic invers.',
      readMore: 'Llegir la nota',
      relatedWork: 'Obra relacionada',
      external: 'Enllaç extern',
    },

    // Contact
    contact: {
      title: 'Contacte',
      subtitle:
        'Per a propostes de producció, premsa, lectura o qualsevol altra qüestió, escriu directament.',
      directEmail: 'Correu directe',
      phone: 'Telèfon',
      agency: 'Representació',
      social: 'Xarxes professionals',
      name: 'Nom',
      email: 'Correu electrònic',
      subject: 'Motiu',
      message: 'Missatge',
      subjects: {
        production: 'Producció / estrena',
        press: 'Premsa',
        reading: 'Lectura / estudi',
        other: 'Altres',
      },
      messagePlaceholder:
        'Explica breument la teva consulta…',
      consent: 'Accepto la política de privacitat',
      send: 'Enviar missatge',
      sending: 'Enviant…',
      successNote:
        'S\u2019obrirà el teu client de correu. Si no es mostra res, escriu directament a l\u2019adreça de baix.',
    },

    // Privacy / Legal
    privacy: {
      title: 'Política de privacitat',
      lastUpdated: 'Darrera revisió',
    },
    legal: {
      title: 'Avís legal',
    },

    // Search
    search: {
      title: 'Cerca al lloc',
      placeholder: 'Cerca obres, notícies, projectes…',
      noResults: 'Cap coincidència per a',
      closeSearch: 'Tancar la cerca',
      hint: 'Escriu per cercar a tot el lloc. Prem / per accelerar.',
    },

    // Footer
    footer: {
      tagline:
        'Dramatúrgia contemporània en català, castellà i anglès. Lectures, residències i estrenes.',
      rights: 'Tots els drets reservats.',
      privacy: 'Privacitat',
      legal: 'Avís legal',
      contact: 'Contacte',
      backToTop: 'Tornar a dalt',
    },
  },

  en: {
    brand: 'Roger Simeon',
    brandRole: 'Playwright',

    nav: {
      home: 'Home',
      about: 'About',
      works: 'Premiered works',
      projects: 'Current projects',
      publications: 'Publications',
      awards: 'Awards',
      downloads: 'Download texts',
      news: 'News',
      contact: 'Contact',
      privacy: 'Privacy',
      legal: 'Legal notice',
      search: 'Search',
      skipToContent: 'Skip to content',
    },

    ui: {
      read: 'Read more',
      viewWork: 'View entry',
      viewAll: 'View all',
      backTo: 'Back to',
      back: 'Back',
      download: 'Download',
      downloadRequest: 'Request PDF',
      send: 'Send',
      sending: 'Sending…',
      openEmail: 'Open email',
      yes: 'Yes',
      no: 'No',
      filter: 'Filter',
      sortBy: 'Sort by',
      reset: 'Reset',
      apply: 'Apply',
      close: 'Close',
      share: 'Share',
      from: 'From',
      to: 'to',
      published: 'Published',
      updated: 'Updated',
      available: 'Available for production',
      unavailable: 'Not currently available',
      language: 'Language',
      translatedBy: 'Translation by',
      placeholder: 'Detalls pendents',
    },

    filters: {
      title: 'Filters',
      year: 'Premiere year',
      yearFrom: 'From',
      yearTo: 'To',
      genre: 'Genre / form',
      cast: 'Cast size',
      originLang: 'Language of origin',
      availability: 'Availability',
      any: 'Any',
      solo: 'Solo',
      small: '2–4',
      medium: '5–9',
      large: '10 or more',
      available: 'Available',
      unavailable: 'Not available',
    },

    genres: {
      teatre: 'Play',
      breu: 'Short piece',
      adaptacio: 'Adaptation',
      infantil: 'Children\u2019s theatre',
      documental: 'Documentary theatre',
      monoleg: 'Monologue',
      musical: 'Musical theatre',
    },

    sortOptions: {
      recent: 'Newest first',
      older: 'Oldest first',
      titleAsc: 'Title A–Z',
      titleDesc: 'Title Z–A',
    },

    home: {
      eyebrow: 'Contemporary playwriting in Catalan, Spanish and English',
      headline1: 'Roger Simeon',
      headline2: 'Writes between languages and cities.',
      heroLead:
        'Catalan playwright and author with premieres in Barcelona, Madrid, New York, Shanghai and London.',
      heroQuote: 'Living together is a misunderstanding',
      intro:
        'Catalan playwright with premieres in Barcelona, Badalona, Madrid, New York, Shanghai and London. Writes in Catalan, Spanish and English, and collaborates regularly with IATI Theatre (New York) and Sala Beckett (Barcelona).',
      ctaWorks: 'View works',
      ctaDownloads: 'Download texts',
      ctaContact: 'Get in touch',
      prelude: 'On his theatre',
    },

    featured: {
      latestPremiere: 'Latest premiere',
      latestAward: 'Latest award',
      featuredDownload: 'Featured text',
    },

    about: {
      eyebrow: 'About the author',
      title: 'Trajectory, language, craft',
      portraitAlt: 'Editorial portrait of Roger Simeon',
      downloadCV: 'Download CV (PDF)',
      timelineTitle: 'Professional trajectory',
      training: 'Training',
      trajectory: 'Trajectory',
      themes: 'Themes',
      approach: 'On writing',
    },

    works: {
      title: 'Premiered works',
      subtitle:
        'Complete catalogue of premiered pieces, sortable and filterable by year, genre, cast size and availability.',
      count: 'pieces',
      filtersTitle: 'Filter the catalogue',
      sortTitle: 'Sort',
      emptyTitle: 'No results',
      emptyText: 'No works match the selected filters. Reset to return to the full catalogue.',
      detailBadge: 'Entry',
      premiere: 'Premiere',
      directedBy: 'Direction',
      venue: 'Venue',
      duration: 'Duration',
      characters: 'Characters',
      collaborationsTitle: 'Other projects',
      collaborationsSubtitle:
        'Plays and pieces where the author participated but was not the lead artist — commissioned scripts, assistant direction, documentaries and collaborations.',
      collaborationsRole: 'Role',
      synopsis: 'Synopsis',
      synopsisPending: 'Synopsis awaiting the author\u2019s text.',
      synopsisPendingHowto:
        'To add it: edit the "synopsis.ca" and "synopsis.en" fields in src/data/portfolio.js, looking up the entry by its slug.',
      synopsisPendingNote:
        'The text below is a technical summary of the work — derived from the record data. The full synopsis will come from the author.',
      productionHistory: 'Production history',
      technicalHeading: 'Technical details',
      gallery: 'Production gallery',
      noGallery: 'No production images available.',
      downloadAvailable: 'Download text',
      notAvailable: 'Text not currently available',
    },

    projects: {
      title: 'Current projects',
      subtitle:
        'Pieces in different stages of writing — not yet premiered — with collaborators and expected premiere windows.',
      stage: 'Stage',
      collaborators: 'Collaborators',
      window: 'Premiere window',
      updates: 'Updates',
      stageLabels: {
        draft: 'First draft',
        revision: 'Second draft',
        residency: 'In residency',
        production: 'In production',
        reading: 'Staged reading',
      },
    },

    publications: {
      title: 'Publications',
      subtitle:
        'Articles, literary and theatre reviews, stories and published plays, in reverse chronological order.',
      filterTitle: 'Filter by category',
      all: 'All',
      categories: {
        story: 'Short stories',
        play: 'Published plays',
        collection: 'Collections',
        'review-literary': 'Literary reviews',
        'review-theatre': 'Theatre reviews',
        review: 'Review',
        interview: 'Interview',
        feature: 'Feature / Chronicle',
      },
      open: 'Open',
      permalink: 'External link',
      noLink: 'No external link available',
    },

    awards: {
      title: 'Awards & recognition',
      subtitle: 'Prizes, nominations, grants, residencies and festival selections, in reverse order.',
      awardName: 'Award',
      body: 'Awarding body',
      year: 'Year',
      work: 'Recognised work',
      seeWork: 'See work',
      type: 'Type',
      typeLabels: {
        prize: 'Prize',
        nomination: 'Nomination',
        grant: 'Grant',
        residency: 'Residency',
        selection: 'Selection',
        finalist: 'Finalist',
        mention: 'Mention / Honourable',
      },
      unproducedTitle: 'Awarded, not yet premiered',
      unproducedSubtitle: 'Award-winning texts that have not yet been staged.',
    },

    downloads: {
      title: 'Download texts',
      subtitle:
        'The author shares selected texts for personal reading and study. For stage rights, please contact directly.',
      format: 'Format',
      size: 'Size',
      langs: 'Languages',
      licenseNoteTitle: 'Terms of use',
      licenseBody:
        'These texts are made available for personal reading, academic study and unstaged public readings. Any professional production, adaptation or translation intended for public performance requires a written contract with the author or his representation.',
      requestButton: 'Request PDF',
      downloadButton: 'Download PDF',
      freeBadge: 'Free download',
      onRequestBadge: 'By request',
      requestNote:
        'The form sends a request by email — automatic downloads are not yet available for every text.',
    },

    news: {
      title: 'News',
      subtitle: 'Premieres, festivals, residencies, publications and press coverage, reverse chronological.',
      readMore: 'Read the note',
      relatedWork: 'Related work',
      external: 'External link',
    },

    contact: {
      title: 'Contact',
      subtitle:
        'For production proposals, press, study or any other matter, please write directly.',
      directEmail: 'Direct email',
      phone: 'Phone',
      agency: 'Representation',
      social: 'Professional networks',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      subjects: {
        production: 'Production / premiere',
        press: 'Press',
        reading: 'Reading / study',
        other: 'Other',
      },
      messagePlaceholder: 'Briefly explain your enquiry…',
      consent: 'I accept the privacy policy',
      send: 'Send message',
      sending: 'Sending…',
      successNote:
        'Your email client will open. If nothing happens, write directly to the address below.',
    },

    privacy: {
      title: 'Privacy policy',
      lastUpdated: 'Last reviewed',
    },
    legal: {
      title: 'Legal notice',
    },

    search: {
      title: 'Search the site',
      placeholder: 'Search works, news, projects…',
      noResults: 'No matches for',
      closeSearch: 'Close search',
      hint: 'Type to search the whole site. Press / for quick access.',
    },

    footer: {
      tagline: 'Contemporary playwriting in Catalan, Spanish and English. Readings, residencies, premieres.',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      legal: 'Legal notice',
      contact: 'Contact',
      backToTop: 'Back to top',
    },
  },
}
