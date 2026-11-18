const editorialSource = new URLSearchParams(location.search).get('utm_source');
const editorialListings = new Map([['paintnews', 'hBHxg'], ['cabinetpainting', 'B3e9H']]);
if (editorialListings.has(editorialSource)) {
  document.querySelector('a[href="https://payhip.com/b/ivx8O"]').href =
    'https://payhip.com/b/' + editorialListings.get(editorialSource);
  for (const link of document.querySelectorAll('a[href="benchquote.html"],a[href="change-order-calculator.html"]')) {
    link.search = '?utm_source=' + editorialSource;
  }
}
