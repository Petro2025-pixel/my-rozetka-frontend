const API_BASE =
  import.meta.env.VITE_API_URL?.replace('/api', '') || 'https://mindgold.top/rozetka-api';

export const getImageUrl = imagePath => {
  if (!imagePath) return `${API_BASE}/images/laptop-common.jpg`;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;

  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  if (!cleanPath.startsWith('images/')) {
    return `${API_BASE}/images/${cleanPath}`;
  }
  return `${API_BASE}/${cleanPath}`;
};
