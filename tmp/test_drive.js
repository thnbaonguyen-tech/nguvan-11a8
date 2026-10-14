async function testDrive() {
  const folderId = "1uCcmbA4onUSvMlFnyFya3f_B6OjFI1ni";
  const endpoints = [
    `https://drive.google.com/embeddedfolderview?id=${folderId}`,
    `https://drive.google.com/drive/folders/${folderId}`,
  ];
  for (const ep of endpoints) {
    try {
      const res = await fetch(ep, { redirect: "follow" });
      const txt = await res.text();
      const titleMatch = txt.match(/<title>([^<]+)<\/title>/);
      console.log(ep, "Status:", res.status, "Title:", titleMatch ? titleMatch[1] : "none");
    } catch (e) {
      console.log(ep, "Error:", e.message);
    }
  }
}
testDrive();
