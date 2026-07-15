const controls = {
  minimize: document.querySelector('#minimize'),
  maximize: document.querySelector('#maximize'),
  close: document.querySelector('#close'),
};

Object.entries(controls).forEach(([action, control]) => {
  control?.addEventListener('click', () => {
    window.electronAPI.windowControl(action);
  });
});
