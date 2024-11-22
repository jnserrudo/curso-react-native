// Función para obtener una lista de juegos (simulada)
export async function getLatestGames() {
  const LATEST_GAMES = "https://jsonplaceholder.typicode.com/posts";

  try {
    const rawData = await fetch(LATEST_GAMES);
    const items = await rawData.json();

    // Formateamos los datos para devolver la estructura esperada con imágenes dinámicas
    return items.map((item) => ({
      description: item.body, // Usamos el cuerpo de la publicación como descripción
      releaseDate: "2024-01-01", // Fecha de lanzamiento simulada
      score: Math.floor(Math.random() * 100), // Simulamos una puntuación aleatoria
      slug: item.id, // Usamos el ID de la publicación como slug
      title: item.title, // Título de la publicación
      image: `https://via.placeholder.com/600/${generateRandomColor()}?text=Game+${item.id}`, // Imagen simulada dinámica basada en el ID con color aleatorio
    }));
  } catch (error) {
    console.error("Error fetching latest games:", error);
    return []; // Devuelve un array vacío en caso de error
  }
}

// Función para obtener los detalles de un juego específico (simulada)
export async function getGameDetails(id) {
  const GAME_DETAILS = `https://jsonplaceholder.typicode.com/posts/${id}`;

  try {
    const rawData = await fetch(GAME_DETAILS);
    const item = await rawData.json();

    // Devuelve la estructura con imagen y detalles, usando una imagen dinámica con color aleatorio
    return {
      description: item.body, // Usamos el cuerpo de la publicación como descripción
      releaseDate: "2024-01-01", // Fecha de lanzamiento simulada
      score: Math.floor(Math.random() * 100), // Puntuación aleatoria
      slug: item.id, // ID como slug
      title: item.title, // Título de la publicación
      image: `https://via.placeholder.com/600/${generateRandomColor()}?text=Game+${item.id}`, // Imagen dinámica con color aleatorio
    };
  } catch (error) {
    console.error("Error fetching game details:", error);
    return null; // Devuelve null en caso de error
  }
}

// Función para generar un color hexadecimal aleatorio
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color.substring(1); // Devolvemos el color sin el '#'
}
