const Industries = require('./industries')

module.exports = [{
  name: 'Bäcker Baier',
  description: 'Dank unseren engagierten Mitarbeitenden haben wir die Warenverfügbarkeit sichergestellt und alle Läden geöffnet.',
  phone: '07032/9109172',
  image: 'assets/img/baier.jpg',
  shopLink: 'https://shop.baecker-baier.de/',
  tags: ['bäcker', 'brot', 'online'],
  industries: [Industries.BAKERY, Industries.FOOD]
}, {
  name: 'Barista',
  description: 'Wir bieten unsere Getränke und Speisen täglich von 11 bis 20 Uhr zur Abholung oder ab einem Mindestbestellwert von 25€ bis 10km zur Lieferung frei Haus an und eine Rolle Toilettenpapier gratis dazu.',
  phone: '07032/914923',
  url: 'https://www.barista-cafe.com/',
  image: 'assets/img/barista.jpg',
  tags: ['cafe', 'getränke', 'trinken', 'liefern'],
  industries: [Industries.COFFEE]
}, {
  name: 'Fromagerie Holzapfel',
  description: 'Wir haben von Dienstag bis Freitag von 9 bis 14 Uhr und Samstag von 7.30 bis 13 Uhr für Sie geöffnet. Gerne nehmen wir Ihre Bestellung bereits vorab entgegen.',
  phone: '07032/930950',
  mail: 'info@fromagerie-holzapfel.de',
  url: 'http://www.fromagerie-holzapfel.de/fromagerie-holzapfel/',
  image: 'assets/img/holzapfel.jpg',
  tags: ['käse', 'wein'],
  industries: [Industries.FOOD]
}, {
  name: 'Gerullis',
  description: 'Für die kommenden Wochen bieten wir Ihnen einen Lieferservice an 7 Tagen in der Woche für Ihr Mittagessen an. Die tägliche Speiseauswahl erfahren Sie telefonisch. Ihre Bestellung nehmen wir gerne bis 10 Uhr entgegen.',
  phone: '07032/5342',
  url: 'https://www.partyservice-gerullis.de/kontakt/',
  image: 'assets/img/gerullis.png',
  tags: ['party', 'liefern', 'fleisch', 'mittag'],
  industries: [Industries.FOOD]
}]