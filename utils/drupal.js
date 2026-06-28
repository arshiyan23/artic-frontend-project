export function withDrupalIndexPrefix(url) {
  if (!url) return url;
  try {
    const parsed = new URL(url);
    if (parsed.pathname.startsWith('/sites/default/files/styles/')) {
      parsed.pathname = `/index.php${parsed.pathname}`;
    }
    return parsed.toString();
  } catch {
    return url;
  }
}
