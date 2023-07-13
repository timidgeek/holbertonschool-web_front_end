function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.append(paragraph);

  let spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  document.body.append(spookyButton);
  spookyButton.addEventListener('click', spooky);

  let darkButton = document.createElement('button');
  darkButton.textContent = 'Dark mode';
  document.body.append(darkButton);
  darkButton.addEventListener('click', darkMode);

  let screamButton = document.createElement('button');
  screamButton.textContent = 'Scream mode';
  document.body.append(screamButton);
  screamButton.addEventListener('click', screamMode);
}

main();
