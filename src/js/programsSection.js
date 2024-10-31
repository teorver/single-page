document.addEventListener("DOMContentLoaded", () => {
    const programsModal = document.getElementById("programsModal");
    const modalContent = programsModal.querySelector(".programs-modal-text");
    const closeModal = programsModal.querySelector(".close");

    const programDescriptions = {
        "program-item-1": "Иногда лучшее, что может сделать человек для тебя – уйти из твоей жизни. \n" +
            "Больно. Горько. Гадко. По-разному бывает. \n" +
            "Хорош уже раскладывать таро! \n" +
            "Можно помочь себе и вытащить себя из боли и горечи обид, прожить чувство разочарования и отпустить несбывшиеся ожидания, чтобы жить, а не выживать, дышать, а не задыхаться и выбирать себя. \n" +
            "Куср «Пережить расставание» может Вам в этом помочь.\n" +
            "Что будет?\n" +
            " Эффективные психологические способы завершения отношений. \n" +
            "Материалы в аудио формате + рабочая тетрадь.",
        "program-item-2": "Работаем как с эмоциональной зависимостью и синдромом отмены\n" +
            "Даже если кажется, что «никогда не смогу» и «лучше не найду».\n" +
            "Пусть лучше болят мышцы, чем болит душа) \n" +
            "Формат работы – утро/вечер ежедневно + поддержка в чате. \n" +
            "Рабочая тетрадь + практики медитации.\n" +
            "Первая неделя. Отпускаю тебя.\n" +
            "Вторая неделя. Очищаю себя.\n" +
            "Третья неделя. Наполняю свою жизнь. ",
        "program-item-3": "Это программа физического, эмоционального, духовного и социального восстановления (Rehab (англ.) – реабилитация, восстановление).\n" +
            "Зависимость/созависимость – это болезнь, которую там и тогда Вы себе не выбирали.\n" +
            "Здесь и сейчас выбор за Вами.\n" +
            "Трезвость нужна, чтобы чувствовать радость, счастье и свободу в своей жизни.\n" +
            "Свобода для меня – это быть живой, чувствовать дыхание ветра и ароматный шелест листьев под ногами, слышать, как мурлыкает кот и расплываться в улыбке видя дорогих мне людей зная при этом, что видят и слышат меня без пелены со/зависимости, которая когда-то крала все это у меня…\n" +
            "Преимущества:\n" +
            "- Программа вписывается в Ваш привычный график жизни и работы\n" +
            "- В работу включаетесь с первого дня программы\n" +
            "- Анонимно, конфиденциально\n" +
            "Что внутри:\n" +
            "- Понимание причины и следствия употребления/созависимого поведения\n" +
            "- Разгребаем историю употребления и его последствий\n" +
            "- Восстанавливаем сон, эмоциональную стабильность\n" +
            "- Повышаем социальную активность\n" +
            "- Заменяем деструктивные привычки на здоровые\n" +
            "- На выходе Ваша физическая сила, выносливость и активность вырастут\n" +
            "В работе использованы:\n" +
            "Минессотская модель выздоровления (12 шагов+психология)\n" +
            "Комплекс физиологического восстановления\n" +
            "28 дней медитативных практик, направленных визуализаций\n" +
            "Видео материалы без нудных лекций\n" +
            "Стабилизационный комплекс день-ночь\n" +
            "Формат онлайн работы: \n" +
            "Ежедневно утро и вечер. \n" +
            "Выходные – время формировать новые здоровые привычки. \n" +
            " Онлайн консультации* 2 раза в неделю (всего 8 + 1 вводная консультация) + поддержка в чате.\n" +
            "*Длительность консультации 50 минут.",
    };

    document.querySelectorAll(".product-item-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const programId = button.closest(".program-item").id;

            modalContent.textContent = programDescriptions[programId] || "Program description not available.";

            programsModal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        programsModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === programsModal) {
            programsModal.style.display = "none";
        }
    });
});
