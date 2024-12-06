// Mapeamento de nomes das cores (Português -> Inglês)
const colorMap = {
    "Azul Alice": "AliceBlue",
    "Branco Antigo": "AntiqueWhite",
    "Água": "Aqua",
    "Água Marinha": "Aquamarine",
    "Azul Céu": "Azure",
    "Bege": "Beige",
    "Creme": "Bisque",
    "Preto": "Black",
    "Amêndoa": "BlanchedAlmond",
    "Azul": "Blue",
    "Azul Violeta": "BlueViolet",
    "Marrom": "Brown",
    "Madeira": "BurlyWood",
    "Cinza": "Gray",
    "Vermelho": "Red",
    "Verde": "Green",
    "Amarelo": "Yellow",
    "Roxo": "Purple",
    "Rosa": "Pink",
    "Laranja": "Orange",
    "Ciano": "Cyan",
    "Magenta": "Magenta",
    "Dourado": "Gold"
};

// Gera uma lista de cores em português
const colorNamesPt = Object.keys(colorMap);

// Seleciona 10 cores aleatórias
const randomColorsPt = colorNamesPt.sort(() => Math.random() - 0.5).slice(0, 10);

// Escolhe uma cor secreta
const secretColorPt = randomColorsPt[Math.floor(Math.random() * randomColorsPt.length)];

// Exibe as cores para o jogador
document.getElementById("color-list").textContent = randomColorsPt.join(", ");

// Lógica do jogo
document.getElementById("submit").addEventListener("click", () => {
    const guessPt = document.getElementById("guess").value.trim();
    const feedback = document.getElementById("feedback");

    if (!randomColorsPt.includes(guessPt)) {
        feedback.textContent = "Por favor, escolha uma cor da lista!";
        feedback.style.color = "red";
        return;
    }

    if (guessPt === secretColorPt) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";
        document.body.style.backgroundColor = colorMap[guessPt];
    } else {
        feedback.textContent = `Errou! A cor correta vem ${guessPt < secretColorPt ? "depois" : "antes"
            } na ordem alfabética.`;
        feedback.style.color = "orange";
    }
});
