const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
  'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function stripPrefix(title) {
  return title.replace(/^(the |a |an )/i, '');
}

bands.sort((a, b) => stripPrefix(a).localeCompare(stripPrefix(b)));

const ul = document.getElementById("band");
bands.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
});
