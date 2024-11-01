const modalContentRU = {
    "item-1": "Никто не выбирает быть зависимым. Это как клетка, которая находит птицу сама. Вы – человек, и пока Вы здесь у Вас есть выбор.",
    "item-2": "Верю в то, что при обоюдном желании если не все отношения, то многие можно починить. Готовы?",
    "item-3": "Никогда не поздно себе устроить счастливое детство. Долюбить. Добаюкать. И жить по своим правилам. Хотите?",
    "item-4": "Не нравится? Не клеится? Всё достало? Не успешный не успех? А как вкусно именно Вам?",
    "item-5": "Самое лучшее время для себя – сейчас.",
    "item-6": "Цена vs ценность, говорить и быть услышанным, сказать: «Да» себе.",
    "item-7": "Любая боль конечна. И только Вам решать, что будет определять Вашу дальнейшую жизнь."
};

const modalContentEN = {
    "item-1": "Who or what controls your life?",
    "item-2": "Find joy in relationships you choose. It’s your responsibility to love it or to change it.",
    "item-3": "The most important thing in the world is family and love. If something is broken let’s try to fix it.",
    "item-4": "If something is no longer working for you, you may change it.",
    "item-5": "The better you feel about yourself, the less you feel the need to show off.",
    "item-6": "Inhale confidence, exhale doubt.",
    "item-7": "It’s not stress but your reaction on it is important.",
    "item-8": "Your trauma is not your fault, but healing is your responsibility."
};

function isEnglishPage() {
    if (window.location.pathname.includes("en")) {
        return window.location.pathname.includes('en');
    } else if (window.location.pathname.includes("en.html")) {
        return window.location.pathname.includes('en.html');
    }
}

function openModal(itemId) {
    const modal = document.getElementById('servicesModal');
    const modalText = document.querySelector('.modal-text');

    if (isEnglishPage()) {
        modalText.textContent = modalContentEN[itemId];
    } else {
        modalText.textContent = modalContentRU[itemId];
    }

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById('servicesModal');
    modal.style.display = "none";
    document.body.removeAttribute("overflow");
}

document.querySelectorAll('.services-list-item').forEach(item => {
    item.addEventListener('click', function() {
        openModal(this.id);
    });
});

document.querySelector('.close').addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    const modal = document.getElementById('servicesModal');
    if (event.target === modal) {
        closeModal();
    }
});