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

// Начинаем с первой сцены
window.onload = function() {
  loadScene("scenes/scene1.html");
};