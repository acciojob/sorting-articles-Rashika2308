const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
  'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function stripPrefix(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sorted = bands.sort((a, b) => stripPrefix(a).localeCompare(stripPrefix(b)));

const ul = document.getElementById('bands'); // 🔧 ID should match HTML
sorted.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
