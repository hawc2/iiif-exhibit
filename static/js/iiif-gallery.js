const manifestCache = new Map();const manifestCache = new Map();const manifestCache = new Map();




















































































}  initIiifGallery();} else {  document.addEventListener('DOMContentLoaded', initIiifGallery);if (document.readyState === 'loading') {};  });    setImageFromManifest(img);  images.forEach((img) => {  const images = document.querySelectorAll('img[data-iiif-manifest]');const initIiifGallery = () => {};  }    }      status.textContent = 'Image unavailable';    if (status) {    }      frame.classList.remove('is-loading');      frame.classList.add('is-error');    if (frame) {  } catch (error) {    }      status.textContent = 'Loaded from IIIF';    if (status) {    }      frame.classList.remove('is-loading');      frame.classList.add('is-loaded');    if (frame) {    img.alt = title;    img.sizes = '(max-width: 900px) 100vw, 33vw';    img.srcset = `${thumb} 700w, ${large} 1200w`;    img.src = thumb;    const large = `${serviceId}/full/1200,/0/default.jpg`;    const thumb = `${serviceId}/full/700,/0/default.jpg`;    }      throw new Error('No IIIF image service found');    if (!serviceId) {    const serviceId = resolveImageService(manifest);    const manifest = await getManifest(manifestUrl);  try {  const status = frame?.querySelector('.image-status');  const frame = img.closest('.image-frame');  const title = img.dataset.iiifTitle || img.alt || 'Poster image';  const manifestUrl = img.dataset.iiifManifest;const setImageFromManifest = async (img) => {};  return service['@id'] || service.id || null;  const service = resource.service || {};  const resource = images[0]?.resource || {};  const images = canvas.images || [];  }    return null;  if (!canvas) {  const canvas = canvases[0];  const canvases = sequences[0]?.canvases || [];  const sequences = manifest.sequences || [];const resolveImageService = (manifest) => {};  return data;  manifestCache.set(url, data);  const data = await response.json();  }    throw new Error(`Manifest request failed: ${response.status}`);  if (!response.ok) {  const response = await fetch(url);  }    return manifestCache.get(url);  if (manifestCache.has(url)) {const getManifest = async (url) => {



















































































}  initIiifGallery();} else {  document.addEventListener('DOMContentLoaded', initIiifGallery);if (document.readyState === 'loading') {};  });    setImageFromManifest(img);  images.forEach((img) => {  const images = document.querySelectorAll('img[data-iiif-manifest]');const initIiifGallery = () => {};  }    }      status.textContent = 'Image unavailable';    if (status) {    }      frame.classList.remove('is-loading');      frame.classList.add('is-error');    if (frame) {  } catch (error) {    }      status.textContent = 'Loaded from IIIF';    if (status) {    }      frame.classList.remove('is-loading');      frame.classList.add('is-loaded');    if (frame) {    img.alt = title;    img.sizes = '(max-width: 900px) 100vw, 33vw';    img.srcset = `${thumb} 700w, ${large} 1200w`;    img.src = thumb;    const large = `${serviceId}/full/1200,/0/default.jpg`;    const thumb = `${serviceId}/full/700,/0/default.jpg`;    }      throw new Error('No IIIF image service found');    if (!serviceId) {    const serviceId = resolveImageService(manifest);    const manifest = await getManifest(manifestUrl);  try {  const status = frame?.querySelector('.image-status');  const frame = img.closest('.image-frame');  const title = img.dataset.iiifTitle || img.alt || 'Poster image';  const manifestUrl = img.dataset.iiifManifest;const setImageFromManifest = async (img) => {};  return service['@id'] || service.id || null;  const service = resource.service || {};  const resource = images[0]?.resource || {};  const images = canvas.images || [];  }    return null;  if (!canvas) {  const canvas = canvases[0];  const canvases = sequences[0]?.canvases || [];  const sequences = manifest.sequences || [];const resolveImageService = (manifest) => {};  return data;  manifestCache.set(url, data);  const data = await response.json();  }    throw new Error(`Manifest request failed: ${response.status}`);  if (!response.ok) {  const response = await fetch(url);  }    return manifestCache.get(url);  if (manifestCache.has(url)) {const getManifest = async (url) => {
const getManifest = async (url) => {
  if (manifestCache.has(url)) {
    return manifestCache.get(url);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Manifest request failed: ${response.status}`);
  }

  const data = await response.json();
  manifestCache.set(url, data);
  return data;
};

const resolveImageService = (manifest) => {
  const sequences = manifest.sequences || [];
  const canvases = sequences[0]?.canvases || [];
  const canvas = canvases[0];
  if (!canvas) {
    return null;
  }

  const images = canvas.images || [];
  const resource = images[0]?.resource || {};
  const service = resource.service || {};
  return service['@id'] || service.id || null;
};

const setImageFromManifest = async (img) => {
  const manifestUrl = img.dataset.iiifManifest;
  const title = img.dataset.iiifTitle || img.alt || 'Poster image';
  const frame = img.closest('.image-frame');
  const status = frame?.querySelector('.image-status');

  try {
    const manifest = await getManifest(manifestUrl);
    const serviceId = resolveImageService(manifest);
    if (!serviceId) {
      throw new Error('No IIIF image service found');
    }

    const thumb = `${serviceId}/full/700,/0/default.jpg`;
    const large = `${serviceId}/full/1200,/0/default.jpg`;

    img.src = thumb;
    img.srcset = `${thumb} 700w, ${large} 1200w`;
    img.sizes = '(max-width: 900px) 100vw, 33vw';
    img.alt = title;

    if (frame) {
      frame.classList.add('is-loaded');
      frame.classList.remove('is-loading');
    }

    if (status) {
      status.textContent = 'Loaded from IIIF';
    }
  } catch (error) {
    if (frame) {
      frame.classList.add('is-error');
      frame.classList.remove('is-loading');
    }

    if (status) {
      status.textContent = 'Image unavailable';
    }
  }
};

const initIiifGallery = () => {
  const images = document.querySelectorAll('img[data-iiif-manifest]');
  images.forEach((img) => {
    setImageFromManifest(img);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIiifGallery);
} else {
  initIiifGallery();
}
