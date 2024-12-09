document.addEventListener("DOMContentLoaded", () => {
    const programsModal = document.getElementById("programsModal");
    const programsModalContent = document.getElementById("programsModalContent");
    const programsModalText = document.getElementById("programsModalText");
    const modalContent = programsModal.querySelector(".programs-modal-text");
    const closeModal = programsModal.querySelector(".close");

    const programDescriptions = {
        "program-item-1": "Иногда лучшее, что может сделать человек для тебя – уйти из твоей жизни. <br>" +
        "Больно. Горько. Гадко. По-разному бывает. <br>" +
        "Хорош уже раскладывать таро! <br>" +
        "Можно помочь себе и вытащить себя из боли и горечи обид, прожить чувство разочарования и отпустить несбывшиеся ожидания, чтобы жить, а не выживать, дышать, а не задыхаться и выбирать себя. <br>" +
        "Курс «Пережить расставание» может Вам в этом помочь.<br>" +
        "Что будет?<br>" +
        "Эффективные психологические способы завершения отношений. <br>" +
        "Материалы в аудио формате + рабочая тетрадь.",

        "program-item-2": "Работаем как с эмоциональной зависимостью и синдромом отмены<br>" +
            "Даже если кажется, что «никогда не смогу» и «лучше не найду».<br>" +
            "Пусть лучше болят мышцы, чем болит душа) <br>" +
            "Формат работы – утро/вечер ежедневно + поддержка в чате. <br>" +
            "Рабочая тетрадь + практики медитации.<br>" +
            "Первая неделя. Отпускаю тебя.<br>" +
            "Вторая неделя. Очищаю себя.<br>" +
            "Третья неделя. Наполняю свою жизнь. ",

        "program-item-3": "Это программа физического, эмоционального, духовного и социального восстановления (Rehab (англ.) – реабилитация, восстановление).<br>" +
            "Зависимость/созависимость – это болезнь, которую там и тогда Вы себе не выбирали. Здесь и сейчас выбор за Вами.<br>" +
            "Трезвость нужна, чтобы чувствовать радость, счастье и свободу в своей жизни.<br>" +
            "Свобода для меня – это быть живой, чувствовать дыхание ветра и ароматный шелест листьев под ногами, слышать, как мурлыкает кот и расплываться в улыбке, видя дорогих мне людей, зная при этом, что видят и слышат меня без пелены со/зависимости, которая когда-то крала все это у меня…<br>" +
            "<strong>Преимущества:</strong>" +
            "- Программа вписывается в Ваш привычный график жизни и работы<br>" +
            "- В работу включаетесь с первого дня программы<br>" +
            "- Анонимно, конфиденциально<br>" +
            "<strong>Что внутри:</strong>" +
            "- Понимание причины и следствия употребления/созависимого поведения<br>" +
            "- Разгребаем историю употребления и его последствий<br>" +
            "- Восстанавливаем сон, эмоциональную стабильность<br>" +
            "- Повышаем социальную активность<br>" +
            "- Заменяем деструктивные привычки на здоровые<br>" +
            "- На выходе Ваша физическая сила, выносливость и активность вырастут<br>" +
            "<strong>В работе использованы:</strong>" +
            "Минессотская модель выздоровления (12 шагов+психология)<br>" +
            "Комплекс физиологического восстановления<br>" +
            "28 дней медитативных практик, направленных визуализаций<br>" +
            "Видео материалы без нудных лекций<br>" +
            "Стабилизационный комплекс день-ночь<br>" +
            "<strong>Формат онлайн работы:</strong>" +
            "Ежедневно утро и вечер.<br>" +
            "Выходные – время формировать новые здоровые привычки.<br>" +
            "Онлайн консультации* 2 раза в неделю (всего 8 + 1 вводная консультация) + поддержка в чате.<br>" +
            "*Длительность консультации 50 минут.<br>",
    };

    function adjustRehabProgramModalStyles() {
        const width = window.innerWidth;

        if (width <= 480) {
            programsModalText.style.fontSize = "12px";
            programsModalContent.style.gap = "5px";
            programsModalContent.style.padding = "6px 20px";
        } else if (width <= 640) {
            programsModalText.style.fontSize = "15px";
        } else if (width <= 1390) {
            programsModalContent.style.width = "70%";
            programsModalText.style.fontSize = "17px";
        }
    }

    function adjustDefaultModalStyles() {
        const width = window.innerWidth;

        if (width <= 580) {
            programsModalContent.style.gap = "5px";
            programsModalContent.style.width = "95%";
            programsModalContent.style.padding = "6px 20px";
            programsModalText.style.fontSize = "20px";
        } else if (width <= 900) {
            programsModalContent.style.width = "90%";
        } else if (width <= 1100) {
            programsModalText.style.fontSize = "20px";
        } else if (width <= 1390) {
            programsModalContent.style.width = "50%";
        }
    }

    document.querySelectorAll(".product-item-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const programId = button.closest(".program-item").id;

            modalContent.innerHTML = programDescriptions[programId] || "Program description not available.";
            programsModal.style.display = "flex";
            document.body.style.overflow = "hidden";

            if (programId === "program-item-3") {
                programsModalContent.style.gap = "10px";
                programsModalContent.style.padding = "6px 15px";
                programsModalText.style.fontSize = "20px";
                programsModalText.style.flexDirection = "column";

                adjustRehabProgramModalStyles();
                window.addEventListener("resize", adjustRehabProgramModalStyles);
            } else {
                programsModalContent.style.gap = "45px";
                programsModalContent.style.padding = "20px 40px";
                programsModalText.style.fontSize = "25px";

                adjustDefaultModalStyles();
                // window.addEventListener("resize", adjustDefaultModalStyles);
            }
        });
    });

    closeModal.addEventListener("click", () => {
        programsModal.style.display = "none";
        document.body.style.overflow = "";
    });

    window.addEventListener("click", (event) => {
        if (event.target === programsModal) {
            programsModal.style.display = "none";
            document.body.style.overflow = "";
        }
    });
});
