const fieldnoteListings = new Map([
  ['facilitiesnet', '7HA6w'],
  ['landscapemanagement', 'MK9jv'],
  ['moderncontractor', '8Pb01'],
]);
const fieldnoteSource = new URLSearchParams(location.search).get('utm_source');
if (fieldnoteListings.has(fieldnoteSource)) {
  document.querySelector('a[href="https://payhip.com/b/cpfM8"]').href =
    'https://payhip.com/b/' + fieldnoteListings.get(fieldnoteSource);
}
