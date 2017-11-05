let installPropmt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();

  installPropmt = e;

  return false;
});

function getInstallPrompt() {
  return installPropmt;
}

function resetInstallPrompt() {
  installPropmt = null;
}

export { getInstallPrompt, resetInstallPrompt };
