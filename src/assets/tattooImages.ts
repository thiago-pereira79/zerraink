export const tattooImages = {
  realism: [
    '/tatuagens/PRETO1.jpeg',
    '/tatuagens/PRETO2.jpeg',
    '/tatuagens/PRETO3.jpeg',
    '/tatuagens/PRETO4.jpeg',
    '/tatuagens/PRETO5.jpeg',
    '/tatuagens/PRETO6.jpeg',
    '/tatuagens/PRETO7.jpeg'
  ],
  fineline: [
    '/tatuagens/FINELINE1.jpeg',
    '/tatuagens/FINELINE2.jpeg',
    '/tatuagens/FINELINE3.jpeg',
    '/tatuagens/FINELINE4.jpeg',
    '/tatuagens/FINELINE5.jpeg',
    '/tatuagens/FINELINE6.jpeg',
    '/tatuagens/FINELINE7.jpeg',
    '/tatuagens/FINELINE8.jpeg',
    '/tatuagens/FINELINE9.jpeg',
    '/tatuagens/FINELINE10.jpeg',
    '/tatuagens/FINELINE11.jpeg',
    '/tatuagens/FINELINE12.jpeg',
    '/tatuagens/FINELINE13.jpeg',
    '/tatuagens/FINELINE14.jpeg',
    '/tatuagens/FINELINE15.jpeg',
    '/tatuagens/FINELINE16.jpeg',
    '/tatuagens/FINELINE18.jpeg',
    '/tatuagens/FINELINE19.jpeg',
    '/tatuagens/FINELINE20.jpeg',
    '/tatuagens/FINELINE21.jpeg',
    '/tatuagens/FINELINE22.jpeg',
    '/tatuagens/FINELINE23.jpeg',
    '/tatuagens/FINELINE24.jpeg',
    '/tatuagens/FINELINE25.jpeg',
    '/tatuagens/FINELINE26.jpeg',
    '/tatuagens/FINELINE27.jpeg',
    '/tatuagens/FINELINE28.jpeg',
    '/tatuagens/FINELINE29.jpeg',
    '/tatuagens/FINE22.jpeg'
  ],
  colorido: [
    '/tatuagens/COLORIDAS2.jpeg',
    '/tatuagens/COLORIDAS3.jpeg',
    '/tatuagens/COLORIDAS4.jpeg',
    '/tatuagens/COLORIDAS5.jpeg',
    '/tatuagens/COLORIDAS6.jpeg',
    '/tatuagens/COLORIDAS7.jpeg',
    '/tatuagens/COLORIDAS8.jpeg',
    '/tatuagens/COLORIDAS9.jpeg',
    '/tatuagens/COLORIDAS10.jpeg',
    '/tatuagens/COLORIDAS11.jpeg',
    '/tatuagens/COLORIDAS12.jpeg',
    '/tatuagens/COLORIDAS13.jpeg',
    '/tatuagens/COLORIDAS14.jpeg',
    '/tatuagens/COLORIDAS15.jpeg',
    '/tatuagens/COLORIDAS%2016.jpeg',
    '/tatuagens/COLORIDAS17.jpeg'
  ],
  coverup: [
    '/tatuagens/COVERUP1.jpeg',
    '/tatuagens/COVERUP2.jpeg',
    '/tatuagens/COVERUP3.jpeg',
    '/tatuagens/COVERUP4.jpeg'
  ],
  ornamental: [
    '/tatuagens/ORNAMENTAIS1.jpeg',
    '/tatuagens/ORNAMENTAIS2.jpeg',
    '/tatuagens/ORNAMENTAIS3.jpeg',
    '/tatuagens/ORNAMENTAIS4.jpeg',
    '/tatuagens/ORNAMENTAIS5.jpeg',
    '/tatuagens/ORNAMENTAIS6.jpeg',
    '/tatuagens/ORNAMENTAIS7.jpeg',
    '/tatuagens/ORNAMENTAIS8.jpeg',
    '/tatuagens/ORNAMENTAIS9.jpeg'
  ],
  oldschool: [
    '/tatuagens/OLD1.jpeg',
    '/tatuagens/OLD2.jpeg',
    '/tatuagens/OLD3.jpeg',
    '/tatuagens/OLD4.jpeg',
    '/tatuagens/OLD5.jpeg',
    '/tatuagens/OLD6.jpeg',
    '/tatuagens/OLD8.jpeg',
    '/tatuagens/OLD10.jpeg',
    '/tatuagens/OLD11.jpeg',
    '/tatuagens/OLD12.jpeg'
  ]
} as const;

export const styleCoverImages = {
  realism: tattooImages.realism[4],
  fineline: tattooImages.fineline[12],
  colorido: tattooImages.colorido[13],
  coverup: tattooImages.coverup[2],
  ornamental: tattooImages.ornamental[8],
  oldschool: tattooImages.oldschool[8]
} as const;

export const recentTattooImages = [
  tattooImages.ornamental[8],
  tattooImages.realism[4],
  tattooImages.fineline[12],
  tattooImages.colorido[13],
  tattooImages.coverup[2],
  tattooImages.oldschool[8]
] as const;
