// Araç çubuğundaki ikona tıklayınca uygulamayı tam sekmede aç
chrome.action.onClicked.addListener(async () => {
  const url = chrome.runtime.getURL("app.html");
  // Zaten açıksa ona geç, değilse yeni sekmede aç
  const tabs = await chrome.tabs.query({});
  const existing = tabs.find(t => t.url && t.url.startsWith(url));
  if (existing) { chrome.tabs.update(existing.id, { active: true }); chrome.windows.update(existing.windowId, { focused: true }); }
  else { chrome.tabs.create({ url }); }
});
