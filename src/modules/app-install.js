let installPropmt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt Event fired');

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
