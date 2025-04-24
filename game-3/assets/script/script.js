document.addEventListener('DOMContentLoaded', () => {
    const numberDisplay = document.getElementById('number-display');
    const spinButton = document.getElementById('spin-button');
    const problemText = document.getElementById('problem-text');
    const homeButton = document.getElementById('home-button');
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Настройки для градиента
    const gradientColors = [  '#2c3e50',  '#34495e',  '#4a6984',  '#628aaf']; // Пример набора цветов, можно заменить

    // Функция для установки размеров canvas
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Функция для рисования анимированного градиента
    function drawAnimatedGradient() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Создаем градиент
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < gradientColors.length; i++) {
            gradient.addColorStop(i / (gradientColors.length - 1), gradientColors[i]);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Запускаем анимацию
        animationFrameId = requestAnimationFrame(drawAnimatedGradient);
    }

    // Инициализация canvas и запуск анимации
    setCanvasSize();
    drawAnimatedGradient();

    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        setCanvasSize();
        cancelAnimationFrame(animationFrameId);
        drawAnimatedGradient();
    });


    const problems = [
        "3x + 5 > 14",
        "x^2 - 4x + 3 < 0",
        "|2x - 1| ≤ 5",
        "(x + 2)(x - 3) ≥ 0",
        "1/x > 2",
        "√(x + 1) < 3",
        "x^2 - 5x + 6 > 0",
        "|x - 4| > 2",
        "2x / (x - 1) < 1",
        "√(2x - 3) ≥ 5",
        "x^2 > 9",
        "|3x + 2| < 7",
        "(x - 1) / (x + 2) ≥ 0",
        "√(4 - x) > 2",
        "x^2 + 2x + 1 ≤ 0",
        "|5 - x| ≥ 3",
        "(2x + 1)(x - 4) < 0",
        "1/(x + 1) < 3",
        "√(3x + 4) ≤ 4",
        "x^2 - 6x + 9 ≥ 0",
        "|2x + 3| > 5",
        "(x + 3) / x < 2",
        "√(5 - 2x) ≥ 1",
        "x^2 + 4x + 4 > 0",
        "|x/2 - 1| < 2",
        "(3x - 2)(x + 1) ≤ 0",
        "1/(x - 2) > 4",
        "√(6x - 5) < 5",
        "x^2 - 8x + 16 ≤ 0",
        "|4x - 1| ≥ 7",
        "x^2 - 9 > 0",
         "|2x - 3| ≤ 7",
        "√(x + 5) < 4",
        "1/x > 3",
         "√(2x - 1) ≤ 5",
        "x^2 - 16 > 0",
         "|3x + 2| ≥ 4",
    ];

    spinButton.addEventListener('click', () => {
         // Добавляем класс для анимации вращения барабана
        numberDisplay.classList.add('spinning');

        // Задержка перед сменой номера и неравенства (чтобы анимация успела проиграться)
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 30) + 1;
            const randomProblemIndex = Math.floor(Math.random() * problems.length);

            numberDisplay.textContent = randomNumber;
            problemText.textContent = problems[randomProblemIndex];

            // Убираем класс spinning, чтобы подготовиться к следующему вращению
             numberDisplay.classList.remove('spinning');
        }, 500); // Задержка в 500мс (0.5 секунды)
    });

    homeButton.addEventListener('click', () => {
        //  Замените на адрес вашей главной страницы
        window.location.href = '../index.html'; // Переход на главную страницу
    });
});
