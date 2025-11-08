// Helper function to get the correct image path for both local and production
export const getImagePath = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};
