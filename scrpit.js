const cards = [
    {
        titulo: "Sono Renovador",
        texto: "Dormir de 7 a 8 horas por noite é essencial para consolidar a memória, melhorar o foco nas aulas e manter a imunidade alta.",
        imagem: "./imgs/img1.png",
        alt: "Ícone de lua e estrelas representando uma boa noite de sono."
    },
    {
        titulo: "Energia e Foco",
        texto: "Alimente o seu cérebro com refeições equilibradas e beba água ao longo do dia para evitar a fadiga mental e a perda de concentração.",
        imagem: "./imgs/img2.png",
        alt: "Ícone de garrafa de água e frutas saudáveis."
    },
    {
        titulo: "Técnica de Pausas",
        texto: "Estudar sem parar reduz a retenção do conteúdo. Faça pausas curtas a cada 45 ou 50 minutos para alongar o corpo e descansar a mente.",
        imagem: "./imgs/img3.png",
        alt: "Ícone de cronômetro simbolizando pausas curtas de descanso."
    },
    {
        titulo: "Higiene do Sono",
        texto: "Evite o uso de celulares e computadores pelo menos 30 minutos antes de dormir. A luz azul prejudica a produção de melatonina.",
        imagem: "./imgs/img4.png",
        alt: "Ícone de celular desligado para descanso visual."
    }
];

function renderizar() {
    const container = document.getElementById('section-cards');
    if (!container) return;

    container.innerHTML = cards.map(card => `
        <div class="card">
            <h3>${card.titulo}</h3>
            <img src="${card.imagem}" alt="${card.alt}">
            <p><strong>Descrição:</strong> ${card.texto}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderizar);

dicas = [
    {texto : "Beba pelo menos 2 litros de água ao longo do dia para manter a mente alerta."},
    {texto : "Faça um descanso de 10 minutos a cada 50 minutos de estudo focado."},
    {texto : "Desligue as telas do celular e TV 30 minutos antes de se deitar."},
    {texto : "Organize sua mesa de estudos antes de começar para evitar distrações."},
    {texto : "Pratique ao menos 15 minutos de caminhada ou alongamento todos os dias."},
    {texto : "Revise os tópicos mais difíceis nos horários em que você se sente mais desperto."}
]

function dicas_gerador(){
    botao = document.querySelector("button");
    dica = dicas[Math.floor(Math.random() * dicas.length)];
    document.getElementById("gerador").innerHTML = dica.texto;
}
function formulario(){
    form = document.getElementById("formulario");
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    input3 = document.getElementById("input3").value;
    input4 = document.getElementById("input4").value;
    resultado = document.getElementById("resultado");

    if(input1 === "sim" && input2 === "sim" && input3 === "sim" && input4 === "sim"){
        resultado.innerHTML = "Parabéns! Você está mantendo hábitos saudáveis para estudar de forma eficiente.";
    }else if(input1 === "não" || input2 === "não" || input3 === "não" || input4 === "não"){
        resultado.innerHTML = "Você pode melhorar seus hábitos de estudo. Tente dormir mais, fazer pausas, praticar atividades físicas e evitar o uso de celular antes de dormir.";
    }  
}
function converter() {
    input = document.getElementById("input5").value.toUpperCase();
    resultado2 = document.getElementById("resultado2");
    switch (input) {
        case "I":
            resultado2.value = "1";
            break;
        case "V":
            resultado2.value = "5";
            break;
        case "X":
            resultado2.value = "10";
            break;
        case "L":
            resultado2.value = "50";
            break;
        case "C":
            resultado2.value = "100";
            break;
        case "D":
            resultado2.value = "500";
            break;
        case "M":
            resultado2.value = "1000";
            break;
        default:
            resultado2.value = "Número romano inválido.";
    }
}
