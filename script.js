// Функция для загрузки сцены
function loadScene(scenePath) {
  fetch(scenePath)
    .then(response => {
      if (!response.ok) {
        throw new Error("Сцена не найдена");
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("scene-content").innerHTML = html;
    })
    .catch(error => {
      console.error("Ошибка:", error);
      document.getElementById("scene-content").innerHTML =
        `<p>Ошибка загрузки сцены. Попробуйте позже.</p>`;
    });
}

// Управление музыкой
document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('background-music');
  const toggleMusicButton = document.getElementById('toggle-music');

  // Восстанавливаем время воспроизведения из localStorage
  music.currentTime = localStorage.getItem('musicTime') || 0;

  // Пробуем воспроизвести музыку
  music.play().catch(error => {
    console.log("Музыка не воспроизводится автоматически. Нажмите на кнопку '▶ Играть'.");
  });

  // Кнопка включения/выключения музыки
  toggleMusicButton.addEventListener('click', function() {
    if (music.paused) {
      music.play();
      this.textContent = '⏸ Pause';
    } else {
      music.pause();
      this.textContent = '▶ Play';
    }
  });

  for (let i = 0; i < 100; i++) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel-rain';

  // Случайная горизонтальная позиция
  pixel.style.left = `${Math.random() * 100}%`;

  // Случайная задержка анимации
  pixel.style.animationDelay = `${Math.random() * 2}s`;

  // Случайная длительность анимации (от 1 до 3 секунд)
  pixel.style.animationDuration = `${1 + Math.random() * 2}s`;

  document.body.appendChild(pixel);
}
  // Сохраняем время воспроизведения при переходе на другую страницу
  window.addEventListener('beforeunload', function() {
    localStorage.setItem('musicTime', music.currentTime);
  });

  // Загружаем первую сцену
  loadScene("scenes/scene1.html");
});