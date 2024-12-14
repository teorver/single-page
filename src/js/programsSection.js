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

        "program-item-3": "Rehab (англ.) – реабилитация, восстановление.<br>" +
            "Программа-восстановление. Восстановление себя, своей физической и эмоциональной жизни. Отстройка собственных смыслов и ценностей.<br>" +
            "Зависимость – это болезнь, которую там и тогда Вы себе не выбирали. Здесь и сейчас выбор за Вами.<br>" +
            "Трезвость нужна, чтобы чувствовать радость, счастье и свободу в своей жизни.<br>" +
            "Свобода для меня – это быть живой, чувствовать дыхание ветра и ароматный шелест листьев под ногами, слышать, как мурлыкает кот и расплываться в улыбке, видя дорогих мне людей, зная при этом, что видят и слышат меня без пелены зависимости, которая когда-то крала все это у меня…<br>" +
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
            "Онлайн консультации* 2 раза в неделю (8 + 1 вводная консультация) + поддержка в чате.<br>" +
            "*Длительность индивидуальной консультации 50 минут.<br>" +
            "*Длительность группы – 120 минут.",

        "program-item-4": "Где есть созависимость – там нет меня. Есть вещество или эмоция/состояние, которое управляет мной через другого. Ощущение «липучести», без тебя меня нет. И я правда не знаю ни своих желаний, ни чувств. <br>" +
            "- Какой твой любимый цвет?\n" +
            "- Не знаю…<br>" +
            "- Что тебе хочется на ужин?\n" +
            "- То же, что и ты…<br>" +
            "- Я же для него/нее все…, а он/она…<br>" +
            "- Я так старалась/старался…<br>" + "- Что я могу еще для тебя сделать?..<br>" +
            "Пришло время сделать что-то для себя: подарить себе себя, вернуть себе свои чувства, мысли, желания и ценности.<br>" +
            "<strong>Эта программа для того, чтобы:</strong>" +
            "√ обрести себя, свои опоры и смыслы<br>" +
            "√ уйти из токсичных, зависимых, разрушающих отношений<br>" +
            "√ жить свою жизнь<br>" + "√ говорить о себе своим голосом<br>" + "√ выбирать себя и свои ценности<br>" + "√следовать своим правилам.<br>" +
            "<strong>Что будет:</strong>" +
            "- совместная работа 28 дней\n" +
            "- элементы арт-терапии\n" +
            "- работа с чувствами\n" +
            "- учимся говорить «Да» себе (здоровая агрессия и границы – психологические, физические, эмоциональные)<br>" +
            "<strong>Преимущества:</strong>" +
            "- Программа вписывается в Ваш привычный график жизни и работы\n" +
            "- В работу включаетесь с первого дня программы\n" +
            "- Анонимно, конфиденциально.<br>" +
            "<strong>В работе использованы:</strong>" +
            "Минессотская модель выздоровления (12 шагов+психология)<br>" +
            "Комплекс физиологического восстановления<br>" +
            "28 дней медитативных практик, направленных визуализаций<br>" +
            "Видео материалы без нудных лекций<br>" +
            "Стабилизационный комплекс день-ночь<br>" +
            "<strong>Формат онлайн работы:</strong>" +
            "Ежедневно утро и вечер.<br>" +
            "Выходные – время формировать новые здоровые привычки.<br>" +
            "Онлайн консультации* 2 раза в неделю (8 + 1 вводная консультация) + поддержка в чате.<br>" +
            "*Длительность индивидуальной консультации 50 минут.<br>" +
            "*Длительность группы – 120 минут.",
    };

    function adjustRehabProgramModalStyles() {
        const width = window.innerWidth;
        const devicePixelRatio = window.devicePixelRatio;

        // if (width <= 480) {
        //     programsModalText.style.fontSize = "11px";
        //     programsModalContent.style.gap = "5px";
        //     programsModalContent.style.padding = "6px 20px";
        // } else if (width <= 640) {
        //     programsModalText.style.fontSize = "14px";
        // } else if (width <= 1390) {
        //     programsModalContent.style.width = "70%";
        //     programsModalText.style.fontSize = "16px";
        // }
        if (width <= 480) {
            programsModalText.style.fontSize = devicePixelRatio === 1.25 ? "9" : "11px";
            programsModalContent.style.gap = devicePixelRatio === 1.25 ? "2" : "5px"
            programsModalContent.style.padding = "6px 20px";
            programsModalContent.style.gap = devicePixelRatio === 1.25 ? "1px" : "5px";
        } else if (width <= 640) {
            programsModalText.style.fontSize = devicePixelRatio === 1.25 ? "11px" : "14px";
        } else if (width <= 1390) {
            programsModalContent.style.width = "70%";
            programsModalText.style.fontSize = devicePixelRatio === 1.25 ? "14px" : "16px";
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
            const devicePixelRatio = window.devicePixelRatio;

            if (programId === "program-item-3" || programId === "program-item-4") {
                programsModalContent.style.gap = devicePixelRatio === 1.25 ? "2px" : "10px";
                programsModalContent.style.padding = "6px 15px";
                programsModalText.style.fontSize = devicePixelRatio === 1.25 ? "13.75px" : "18px";
                programsModalText.style.flexDirection = "column";

                adjustRehabProgramModalStyles();
                window.addEventListener("resize", adjustRehabProgramModalStyles);
            } else {
                programsModalContent.style.gap = "45px";
                programsModalContent.style.padding = "20px 40px";
                programsModalText.style.fontSize = "25px";

                adjustDefaultModalStyles();
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
