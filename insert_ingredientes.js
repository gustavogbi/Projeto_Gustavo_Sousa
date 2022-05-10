function generateSaz() {
    var saz = "'";
    for (var i = 1; i <= 12; i++) {
        if (Math.random() < 0.5) {
            saz += i + ",";
        }
    }
    return saz.slice(0, -1) + "'";
}

function generateDias() {
    var saz = "'";
    for (var i = 1; i <= 7; i++) {
        if (Math.random() < 0.5) {
            saz += i + ",";
        }
    }
    return saz.slice(0, -1) + "'";
}

function generateCategoria() {
    return Math.floor(Math.random() * 9 + 1);
}

function generateBool() {
    if (Math.random() < 0.5) return "1";
    return "0";
}

function generatePeriodo() {
    if (Math.floor(Math.random() * 3) === 0) {
        return '1';
    }
    if (Math.floor(Math.random() * 3) === 1) {
        return '2';
    }
    else {
        return '1,2';
    }
}

const proteicas = [
'Pernil em Cubos',
'carne em cubos ao molho',
'Torta de frango com brócolis e milho',
'Bobó de peixe',
'Quibe assado',
'Macarrão de forno com frango e milho',
'Rocambole de queijo ',
'Iscas de frango com ervilha',
'Iakssoba',
'Escondidinho de inhame com carne moída e azeitona',
'Hambúrguer à cavalo ',
'Rocambole suíno',
'Frango Desfiado',
'Coxa e sobrecoxa assada/frita',
'Carne com batata',
'Strogonoff de frango',
'Carne suína com legumes ',
'Carne moída ao creme',
'Fricassê de carne',
'Empadão de frango',
'Carne em iscas com batata fiúza e brócolis',
'Rocambole nutritivo',
'Bife à rolê de frango ao molho',
'Purê de abóbora de forno',
'Salpicão de frango',
'Torta de peixe',
'Carne moída com azeitona e ervilha',
'Cassoulet de frango',
'Escondidinho de mandioca com  charque',
'Lagarto ao molho de mostarda',
'Frango em cubos com brócolis e milho',
'Almôndega ao molho branco',
'Bife a rolê',
'Iscas de Carne com Ervilha',
'Cubos de pernil ',
'Frango da roça (coxa e sobrecoxa com quiabo e milho)',
'Carne louca',
'Panqueca de carne moída',
'Lasanha',
'Costelinha suína ',
'Bife de panela',
'Canjiquinha à moda da casa',
'Bobó de frango',
'Picadinho primavera (brócolis com milho e cenoura)',
'Bife à milanesa',
'Pernil em tiras',
'Frango crocante',
'Escondidinho de mandioca com carne moída e azeitona ',
'Strogonoff de carne',
'Fricassê de frango',
'Bife de panela com ervilha',
'Chili',
'Cubos bovinos com ervilha e linguiça',
'Frango xadrez',
'Cubos Bovinos   ',
'Bife de pernil ',
'Frango à milanesa',
'Lagarto ao molho madeira',
'Torta de carne moída com beterraba e escarola',
'Escondidinho de batata com brócolis e tilápia',
'Risoto de frango',
'Almôndega ao sugo',
'Galinhada',
'COSTELINHA Assada ao Molho de Abacaxi',
'Guisado de Frango',
'Vaca Atolada',
'Torta de Carne Inglesa',
'Carne em Cubos com Azeitona',
'Bife na Chapa',
'Panqueca de Frango Desfiado com Milho',
'Lingüiça ensopada com Molho de Ervilha',
'Isca de Peixe à Milanesa',
'Falso lombo',
'Pernil Assado',
'Lombo Assado',
]

for (var i = 1; i <= proteicas.length; i++) {
    console.log("INSERT INTO `gerauca`.`preparacao` (`idPREPARACAO`,`idCATEGORIA`, `NOME`, `TIPO`, `DIAS`, `SAZONALIDADE`, `DISPENSA_GUARNICAO`, `FRITURA`, `ALTO_CUSTO_PREPARO`, `VERDE`, `VEGANA`) VALUES (" + i + "," + generateCategoria() + ",'" + proteicas[i] + "', 'Proteica', " + generateDias() + "," + generateSaz() + "," + generateBool() + "," + generateBool() + "," + generateBool() + "," + generateBool() + "," + generateBool() + ");");
}

for (var i = 1; i <= 74; i++) {
    console.log("INSERT INTO `gerauca`.`preparacao_periodo` (`PREPARACAO_idPreparacao`, `PERIODO_idPERIODO`) VALUES (" + i + ", '" + generatePeriodo() + "');");
}