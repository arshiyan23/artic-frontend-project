// plugins/detectSafari.js
export default ({ app }) => {
  if (process.client) {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      document.documentElement.classList.add('is-safari');
    }
  }
}
