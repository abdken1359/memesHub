export function isRedditImage404(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      // Reddit's 404 image is often 130x60 (can vary)
      if (img.naturalWidth === 130 && img.naturalHeight === 60) {
        resolve(true); // probably a deleted image
      } else {
        resolve(false); // image looks legit
      }
    };
    img.onerror = () => resolve(true); // totally broken image
  });
}
