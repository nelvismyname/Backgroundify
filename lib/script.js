const zone = document.getElementById("zone");
const iconImg = document.querySelector(".icon img");
let isOn = false;

const picker = new window.ColorPicker(zone, {
  headless: true,
  color: '#000000',
  submitMode: 'instant',
  dialogPlacement: 'bottom-start',
  dialogOffset: 12
});

picker.on('pick', (color) => {
  if (color) {
    document.body.style.background = color.string('hex');
  }
});

picker.on('opened', () => {
  isOn = true;
  iconImg.style.opacity = '0';
  iconImg.src = 'lib/icons/palette.svg';
  requestAnimationFrame(() => {
    iconImg.style.opacity = '1';
  });
});

picker.on('closed', () => {
  isOn = false;
  iconImg.src = 'lib/icons/palette-outline.svg';
});

zone.onclick = (e) => {
  e.stopPropagation();
  isOn ? picker.close() : picker.open();
};

document.addEventListener("click", (e) => {
  const pickerDialog = document.querySelector('.jcp-container');
  if (pickerDialog && !e.target.closest(".zone") && !e.target.closest(".jcp-container")) {
    picker.close();
  }
});

document.body.style.background = '#000000';
iconImg.src = 'lib/icons/palette-outline.svg';