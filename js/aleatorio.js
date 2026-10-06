const nomes = ["Alyssa", "Lia", "Luiza", "Julio", "Sandra", "Roger", "Luis"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);