const picker = new window.ColorPicker('#button', {
  swatches: ['#ffffff', '#000000', '#ff0000', '#00ff1e', '#0048ff'],
  defaultFormat: 'hex',
  enableAlpha: false,
  submitMode: 'instant',
  dismissOnOutsideClick: true,
})

picker.on('pick', (color) => {
  if (color) {
    document.body.style.background = color.string('hex');
  }
})