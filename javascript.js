const calculomedia = document.getElementById("calculomedia");

calculomedia.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const divResultado = document.getElementById('resultado');

    if (!nome || isNaN(nota1) || isNaN(nota2)) {
        divResultado.innerHTML = '<p style="color: red;">Por favor, preencha todos os campos!</p>';
        return;
    }

    // Cálculo da média
    const media = (nota1 + nota2) / 2;
    let situacao = '';

    if (media >= 6) {
        situacao = 'Aluno aprovado!';
    } else {
        situacao = 'Aluno reprovado!';
    }

    divResultado.innerHTML = `
        <p><strong>Aluno:</strong> ${nome}</p>
        <p><strong>Média:</strong> ${media.toFixed(1)}</p>
        <p><strong>Situação:</strong> ${situacao}</p>
    `;
});