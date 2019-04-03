/*
LISTA PARA FAZER:
botar sons
https://phaser.io/examples/v2/audio/play-music#download

*/
var tamanhotela = screen.width;
var alturatela = screen.height * 0.86;
var game = new Phaser.Game(1366, 662, Phaser.CANVAS, null,
    { preload: preload, create: create, update: update });

var testando = false;
var direcperso = 'DWN';
var direcanter = 'NONE';
var andando = false;
var perso;
var posxPerso = 1200;
var posyPerso = 600;
var virou = false;
var viragemver = false;

var jogando = true;

var fase = 0;
var fase0carregada = false;
var fase1carregada = false;
var fase2carregada = false;
var fase3carregada = false;
var fase4carregada = false;
var fase5carregada = false;

var estilotexto = { font: '18px Arial', fill: '#0095DD' };
var estilotexto2 = { font: '30px Arial', fill: 'black' };
var estilotexto3 = { font: '30px Arial', fill: 'white' };
var estilotexto4 = { font: '20px Arial', fill: 'black' };
var estilotexto5 = { font: '18px Arial', fill: 'black' };

//MENU
var menuMain;
var menuopcoes;
var menuconquistas;
var menuestatisticas;
var menuinstrucoes;
var menuitens;
var menuPjogo;
var creditos;

var btnopcoes;
var btnsair;
var btnitens;
var btnconquistas;
var btnestatisticas;
var btninstrucoes;
var btniniciar;
var btncreditos;
var tempoCreditos = 3300;
var rodandocreditos = false;
var posycreditos = 0;

var opSelected = -1;

var tempoanimaMenuOpcoes = 100;
var animar = false;

var abadomenu;
var btnabadomenu;
var animacaobarradomenu = false;
var abadomenuativada = false;
var tempoanimacaobarradomenu = 150;

var btnabadomenuSIM;
var btnabadomenuNAO;

//BARRAS

var vida = 10;
var mana = 5;
var barravida;
var barramana;
//barra de itens
var barraitens;
var selecao;
var slotselecionado = 1;
var slot1 = 0;
var slot2 = 0;
var slot3 = 0;
var slot4 = 0;

var slot1img;
var slot2img;
var slot3img;
var slot4img;

var teclaE;
var TeclaI;
//itens
var BRACELETE_PLASMATICO;
var CONVERSOR_DE_MANA;
var COLETE;
var bufcolete;
var buf = false;
var buftempo = 20;
var POCAO_HP;
var POCAO_MANA;

var tocandobracelete = false;
var tocandoconversor = false;
var tocandocolete = false;
var tocandopohp = false;
var tocandopomana = false;

var tomoudano = false;
var tomoudanotime = 1;
//dano dos inimigos
var dano = 2;

var tirodeplasma;
var tiroX = 0;
var tiroY = 0;
var atirou = false;
var directiro = 'NULL'

var bau;
var tocandobau = false;
var bauaberto = false;
//inimigo
var inimigo1;
var barradevidainimigo;
var vidainimigo1 = 0;
var podeatacar = true;
var coldownataque = 10;
var posxinimigo = 5000;
var posyinimigo = 5000;
var direcinimigo = 'F';
var inimigoandando = false;
var quadradodemovimento = 'OOO.OXO.OOO';
var tempoandar = 20;
var tempodanoinimigo = 50;
var inimigotomoudano = false;
var atacando = false;
var maisproximoPatacar = 'NULL'
var posxinicialdoataque = 0;
var posyinicialdoataque = 0;

var podeIRcima = true;
var podeIRdaixo = true;
var podeIRdireita = true;
var podeIResquerda = true;

var atacou = false;
var preparandoataque = false;
//GAMEOVER
var logogameover;
var tempogameover = 500;
var gameoverativo = false;
//fases
var pc;
var tocandoalv1 = false;
var tocandoalv2 = false;
var tocandoalv3 = false;
var tocandoalv4 = false;
var tocandoalv5 = false;
var tocandoapc = false;
var telapcbase;
var pcativo = false;
var btnsairtelapc;
var linksimg;
//fase1
var btnalv1;
var btnporta1;
var fundofase1;
var parede01f1;
var alv01f1;
var alv01f1ativada = false;
var portaf1;
var f1concluida = false;
var f1link1 = "0-0";
var tutorial = true;
var tutorialimg;
var btntutorial;
//fase2
var fundof2;
var portafinalf2;
var f2btn1;
var f2btn2;
var f2btn3;
var f2btnporta;
var f2btnfixo;
var f2btnportafinal;
var f2linkbtn1 = "1-0";
var f2linkbtn2 = "2-0";
var f2linkbtn3 = "3-0";
var f2btn1linkimg;
var f2btn2linkimg;
var f2btn3linkimg;
var btnselec = 0;
var portaalvf2aberta = false;
var f2concluida = false;
var alv01f2;
var alv01f2ativada = false;
var alv02f2;
var alv02f2ativada = false;
var alv03f2;
var alv03f2ativada = false;
var alv04f2;
var alv04f2ativada = false;
//fase 3
var fundof3;
var reator;

var btnreator;
var expreator;
var btnalavanca1f3;
var btnalavanca2f3;
var btnporta2f3;

var portaalv1f3;
var portaalv2f3;
var telapciconsf3;
var portaalv1f3aberta = false;
var portaalv2f3aberta = false;
var portafinalf3;
var f3concluida = false;
var f3btn1link = "";
var f3btn2link = "";
var f3btnclicado = "";
var linksbtn1;
var linksbtn2;
var temporeator = 1500;
var reatorativado = false;
var explodiureator = false;
//fase4
var fundof4;
var f4concluida = false;
var codigo = "";
var codigoenter = "";
var portaf4;
var negocioparacobrirsegredo;
var pcf401;
var pcf402;
var pcf403;
var pcf404;
var telapc1;
var telapc2;
var telapc3;
var telapc4;
var tocandopc01f4 = false;
var tocandopc02f4 = false;
var tocandopc03f4 = false;
var tocandopc04f4 = false;
var eastereggdescoberto = false;
var f4btn0;
var f4btn1;
var f4btn2;
var f4btn3;
var f4btn4;
var f4btn5;
var f4btn6;
var f4btn7;
var f4btn8;
var f4btn9;
var f4btncancelar;
var f4btnenter;
var codeinsert;
var inputcodigo;
var codecoreto;
var codeerrado;
var tempomensagem = 200;
var mensagem = false;
var estilotexto = { font: '30px Arial', fill: '#388e3c' };
//fase5
var fundof5;
var carta;
var cofre;
var cartavista = false;
var tempocarta = 500;
var tocandocadaver = false;
var tocandocofre = false;
var abriucofre = false;
//CREDITOS FINAIS
var pontuacao;
var txtpontuacaofinal;
var txtpontuacaoinimigos;
var txtpontuacaotempo;
var txtpontuacaoconclusao;
var txtpontuacaoconquistas;
var txtpontuacaomods;

var tempodejogo = 0;

var pontuacaofinal = 0;
var pontuacaoinimigos = 0;
var pontuacaotempo = 0;
var pontuacaoconclusao = 2000;
var pontuacaoconquistas = 0;
var pontuacaomods = 0;
var pontosnow1 = 0;
var pontosnow2 = 0;
var pontosnow3 = 0;
var pontosnow4 = 0;
var pontosnow5 = 0;
var pontosnow6 = 0;
var creditoscarregados = false;
var pontuacaoexibida = false;
var posypontos;
//mods
var dobrodanodobropontos = false;
var starterpack = false;
var pocaomanainicial = false;
var pocaovidainicial = false;
var coleteinicial = false;
var secondchance = false;
//imagens dos mods
var modsecondchance;
var modsecondchanceDESATIVADO;
var modstarterpack;
var modstarterpackDESATIVADO;
var moddobropontos;
var moddobropontosDESATIVADO;
var modcoleteinicial;
var modcoleteinicialDESATIVADO;
var modpocadomanainicial;
var modpocadomanainicialDESATIVADO;
var modpocaohpinicial;
var modpocaohpinicialDESATIVADO;

var modsecondchanceQUANTIA;

var modstarterpackQUANTIA;

var moddobropontosQUANTIA;

var modcoleteinicialQUANTIA;

var modpocadomanainicialQUANTIA;

var modpocaohpinicialQUANTIA;
//...............
var modsecondchanceQUANTIAnum = 0;

var modstarterpackQUANTIAnum = 0;

var moddobropontosQUANTIAnum = 0;

var modcoleteinicialQUANTIAnum = 0;

var modpocadomanainicialQUANTIAnum = 0;

var modpocaohpinicialQUANTIAnum = 0;
//..........
var modcoleteinicialicone;
var moddobrodanoicone;
var modpocaohpinicialicone;
var modpocaomanainicialicone;
var modstarterpackicone;
var modsecondchanceicone;
// pontuacao in game
var pontuacaoingame;
var pontuacaoingametxt;
// tutorial btn menu
var btntutorialativo;
var btntutorialinativo;
//conquistas
var conquista1 = false;
var conquista2 = false;
var conquista3 = false;
var conquista4 = false;
var conquista5 = false;
var conquista6 = false;
var conquista7 = false;
var conquista1imgativacao;
var conquista2imgativacao;
var conquista3imgativacao;
var conquista4imgativacao;
var conquista5imgativacao;
var conquista6imgativacao;
var conquista7imgativacao;
var conquistascarregadas = false;
var conquistasquantidade = 0;
var contouconquistas = false;
//conquistas in game
var spriteconquista1;
var spriteconquista2;
var spriteconquista3;
var spriteconquista4;
var spriteconquista5;
var spriteconquista6;
var spriteconquista7;
var tempoconquista = 2000;
var conquistaativada = false;
//folhas de ajuda
var folhasecretsprite;
var folhasecret;
var btnfolha;
// taperro
var tapaerro;
//musicas
var musicamenu;
var musicacreditos;
var loopmusicaprincipal;
var loopiniciomusicaprincipal;
var somporta;
var ativousomporta = false;
var somtiro;

var inicioumusica = false;
var tempoiniciomusica = 6420;
var tempodelay = 400;
var delayativado = false;

var gifcarregamento;

var pontosatuais = 0;
var nomejogador = "null";

var idmods = 0;
var idconquistas = 0;
var idusuarios = 0;
var colocacao = 99;

var salvouconquistas = false;
var salvoupontos = false;

var txtposicao1;
var txtposicao2;
var txtposicao3;
var txtposicao4;
var txtposicao5;
var txtposicao6;
var txtposicao7;
var txtposicao8;
var txtposicao9;
var txtposicao10;
var txtpontuacaopessoal;
var txtcolocacaopesoal;
var txtnomepontuacao;

var pontuacao1 = "";
var pontuacao2 = "";
var pontuacao3 = "";
var pontuacao4= "";
var pontuacao5 = "";
var pontuacao6 = "";
var pontuacao7 = "";
var pontuacao8 = "";
var pontuacao9 = "";
var pontuacao10 = "";

var pontoscolocacaojogador = "";
var pontospessoais = "";
var colocacaopessoal = "";
var carregouplacar = false;

function preload() {
    //muda o tamanho da tela do jogo de acordo com o tamanho da tela do jogo
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    //troca a cor do fundo do jogo
    game.stage.backgroundColor = '#eee';

    //carrega um sprite e o terceiro e quarto parametro são como
    //o programa ira cortar a imagem para formar a animação
    game.load.spritesheet('PERSO', 'img/SPRITE PERSONAGEM FINAL.png', 60, 100);
    game.load.spritesheet('PERSOblyat', 'img/SPRITE PERSONAGEM FINAL russian edition.png', 60, 100);
    game.load.spritesheet('HP', 'img/HP FINAL.png', 361, 30);
    game.load.spritesheet('MANA', 'img/MANA FINAL.png', 361, 30);
    game.load.spritesheet('Etitle', 'img/E.png', 40, 43);
    game.load.spritesheet('ititle', 'img/i.png', 40, 43);
    game.load.spritesheet('BaraditensITENS', 'img/BARRA DE ITENS itens.png', 100, 70);

    game.load.spritesheet('BRACELETE_PLASMATICO', 'img/itens/BRACELETE DE PLASMA VERDE.png', 21, 26);
    game.load.spritesheet('CONVERSOR_DE_MANA', 'img/itens/ITEM CONVERTE MANA PRA VIDA.png', 14, 36);
    game.load.spritesheet('COLETE', 'img/itens/COLETAO.png', 22, 52);
    game.load.spritesheet('POCAO_HP', 'img/itens/hp POTION.png', 16, 52);
    game.load.spritesheet('POCAO_MANA', 'img/itens/MANA.png', 11, 42);
    game.load.spritesheet('BUFCOLETE', 'img/itens/Buf colete.png', 30, 42);
    game.load.spritesheet('tiro', 'img/Anomacao tiro.png', 50, 50);
    game.load.spritesheet('bau', 'img/Bau.png', 85, 59);
    game.load.spritesheet('inimigo', 'img/SPRITE ARANHA FINAL.png', 60, 70);
    game.load.spritesheet('barradevidainimigo', 'img/Sprite barra de vida inimigo.png', 60, 12);

    game.load.image('BARRAITENS', 'img/BARRA DE ITENS.png');
    game.load.image('selecao', 'img/Barra de itens selecao.png');

    game.load.spritesheet('MENU', 'img/menu/MENUinicial.png', 1366, 768);
    game.load.spritesheet('opcoes', 'img/menu/MENUopcoes.png', 1366, 768);
    game.load.spritesheet('conquistas', 'img/menu/MENUopcoesCONQUISTAS.png', 1366, 768);
    game.load.spritesheet('estatisticas', 'img/menu/MENUopcoesESTATISTICAS.png', 1366, 768);
    game.load.spritesheet('instrucoes', 'img/menu/MENUopcoesINSTRUCOES.png', 1366, 768);
    game.load.spritesheet('itens', 'img/menu/MENUopcoesITENS.png', 1366, 768);
    game.load.spritesheet('entrarnojogo', 'img/menu/MENUentrandojogo.png', 1366, 768);
    game.load.image('btnopcoes', 'img/menu/BTNopcoes.png');
    game.load.image('btnsair', 'img/menu/BTNsair.png');
    game.load.image('btnitens', 'img/menu/BTNitens.png');
    game.load.image('btninstrucoes', 'img/menu/BTNintrucoes.png');
    game.load.image('btnestatisticas', 'img/menu/BTNestatisticas.png');
    game.load.image('btnconquistas', 'img/menu/BTNconquistas.png');
    game.load.image('btncreditos', 'img/menu/BTNcreditos.png');
    game.load.image('btniniciar', 'img/menu/BTNiniciar.png');
    game.load.image('creditos', 'img/menu/Creditos.jpg');
    game.load.image('btnbarradomenu', 'img/BTNabadomenu.png');
    game.load.image('btnabadomenuNAO', 'img/BTNabadomenuNAO.png');
    game.load.image('btnabadomenuSIM', 'img/BTNabadomenuSIM.png');
    game.load.spritesheet('menubar', 'img/abaDoMenu.png', 355, 548);
    game.load.spritesheet('GameOver', 'img/GameOver.png', 887, 391);

    //fases
    game.load.spritesheet('pc', 'img/fases/Sprite PC.png', 121, 200);
    game.load.spritesheet('alv', 'img/fases/Sprite ALAV.png', 92, 116);
    game.load.spritesheet('alv', 'img/fases/Sprite ALAV.png', 92, 116);
    game.load.spritesheet('linksimg', 'img/fases/Spritelinks.png', 107, 140);
    game.load.image('btnsairtelapc', 'img/fases/BTNsairtelapc.png');
    //fase1
    game.load.image('fundof1', 'img/fases/fase1/fundoF1.png');
    game.load.image('btnalv1', 'img/fases/fase1/btnalv1.png');
    game.load.image('btnporta1', 'img/fases/fase1/btnporta1.png');
    game.load.image('parede01f1', 'img/fases/fase1/paredeesquerda.png');
    game.load.spritesheet('porta', 'img/fases/fase1/SpritePorta.png', 1366, 768);
    game.load.spritesheet('telapcbase', 'img/fases/TelaPc.png', 1366, 768);

    //fase2
    game.load.image('fundof2', 'img/fases/fase2/fundoF2.png');
    game.load.spritesheet('portaalvf2', 'img/fases/fase2/portaalvf2.png', 1366, 768);
    game.load.spritesheet('portafinalf2', 'img/fases/fase2/portafinalf2.png', 1366, 768);
    game.load.image('f2btn1', 'img/fases/fase2/btnalavanca1.png');
    game.load.image('f2btn2', 'img/fases/fase2/btnalavanca2.png');
    game.load.image('f2btn3', 'img/fases/fase2/btnalavanca3.png');
    game.load.image('f2btnporta', 'img/fases/fase2/btnporta.png');
    game.load.image('f2btnfixo', 'img/fases/fase2/btntelafixof2.png');
    game.load.image('f2btnportafinal', 'img/fases/fase2/btnportafinal.png');
    game.load.spritesheet('f2btn1linkimg', 'img/fases/fase2/btn1linkimg.png', 1366, 634);
    game.load.spritesheet('f2btn2linkimg', 'img/fases/fase2/btn2linkimg.png', 1366, 634);
    game.load.spritesheet('f2btn3linkimg', 'img/fases/fase2/btn3linkimg.png', 1366, 634);
    //fase3
    game.load.image('fundof3', 'img/fases/fase3/fundoF3.png');
    game.load.spritesheet('reator', 'img/fases/fase3/SpriteReator.png', 300, 289);
    game.load.spritesheet('portaalv1f3', 'img/fases/fase3/portaalv1f3.png', 1366, 768);
    game.load.spritesheet('portaalv2f3', 'img/fases/fase3/portaalv2f3.png', 1366, 768);
    game.load.spritesheet('portafinalf3', 'img/fases/fase3/portafinalf3.png', 1366, 768);
    game.load.image('telapciconsf3', 'img/fases/fase3/telapciconsf3.png');

    game.load.image('btnporta2', 'img/fases/fase3/btnporta2.png');
    game.load.image('btnreator', 'img/fases/fase3/btnreator.png');
    game.load.spritesheet('linksbtn1', 'img/fases/fase3/linksbtn1.png', 1366, 768);
    game.load.spritesheet('linksbtn2', 'img/fases/fase3/linksbtn2.png', 1366, 768);
    game.load.spritesheet('expreator', 'img/fases/fase3/explosaoreatorsprite.png', 1366, 768);

    //fase4
    game.load.image('fundof4', 'img/fases/fase4/fundoF4.jpg');
    game.load.spritesheet('negocioparacobrirsegredo', 'img/fases/fase4/negocioparacobrirsegredo.png', 1366, 768);
    game.load.spritesheet('pcf4', 'img/fases/fase4/pcf4.png', 223, 120);
    game.load.spritesheet('portaf4', 'img/fases/fase4/portaf4.png', 1366, 768);
    game.load.image('f4btncancelar', 'img/fases/fase4/btncancelar.png');
    game.load.image('f4btnenter', 'img/fases/fase4/btnenter.png');
    game.load.image('f4btn0', 'img/fases/fase4/f4btn0.png');
    game.load.image('f4btn1', 'img/fases/fase4/f4btn1.png');
    game.load.image('f4btn2', 'img/fases/fase4/f4btn2.png');
    game.load.image('f4btn3', 'img/fases/fase4/f4btn3.png');
    game.load.image('f4btn4', 'img/fases/fase4/f4btn4.png');
    game.load.image('f4btn5', 'img/fases/fase4/f4btn5.png');
    game.load.image('f4btn6', 'img/fases/fase4/f4btn6.png');
    game.load.image('f4btn7', 'img/fases/fase4/f4btn7.png');
    game.load.image('f4btn8', 'img/fases/fase4/f4btn8.png');
    game.load.image('f4btn9', 'img/fases/fase4/f4btn9.png');
    game.load.image('codeinsert', 'img/fases/fase4/codeinsert.png');
    game.load.image('CORRECT', 'img/fases/fase4/CORRECT.png');
    game.load.image('ERROR', 'img/fases/fase4/ERROR.png');

    game.load.spritesheet('telapc1', 'img/fases/fase4/TelaPc1.png', 1366, 768);
    game.load.spritesheet('telapc2', 'img/fases/fase4/TelaPc2.png', 1366, 768);
    game.load.spritesheet('telapc3', 'img/fases/fase4/TelaPc3.png', 1366, 768);
    game.load.spritesheet('telapc4', 'img/fases/fase4/TelaPc4.png', 1366, 768);
    //fase5
    game.load.image('fundof5', 'img/fases/fase5/fundocinco.png');
    game.load.spritesheet('cofre', 'img/fases/fase5/spriteCOFRE.png', 1366, 768);
    game.load.spritesheet('carta', 'img/fases/fase5/mensagem.png', 957, 530);
    //pontuacao
    game.load.image('pontuacao', 'img/fases/fase5/Pontuacao.png');
    //mods
    game.load.image('modcoleteinicial', 'img/fases/modcoleteinicial.png');
    game.load.image('modcoleteinicialDESATIVADO', 'img/fases/modcoleteinicialDESATIVADO.png');

    game.load.image('moddobropontos', 'img/fases/modsdobrodanopontos.png');
    game.load.image('moddobropontosDESATIVADO', 'img/fases/modsdobrodanopontosDESATIVADO.png');

    game.load.image('modpocadomanainicial', 'img/fases/modpocaomanainicial.png');
    game.load.image('modpocadomanainicialDESATIVADO', 'img/fases/modpocaomanainicialDESATIVADO.png');

    game.load.image('modpocaohpinicial', 'img/fases/modpocaohpinicial.png');
    game.load.image('modpocaohpinicialDESATIVADO', 'img/fases/modpocaohpinicialDESATIVADO.png');

    game.load.image('modstarterpack', 'img/fases/modstarterpack.png');
    game.load.image('modstarterpackDESATIVADO', 'img/fases/modstarterpackDESATIVADO.png');

    game.load.image('modsecondchance', 'img/fases/modsegundachance.png');
    game.load.image('modsecondchanceDESATIVADO', 'img/fases/modsegundachanceDESATIVADO.png');
    //iconesmods
    game.load.image('modcoleteinicialicone', 'img/fases/modicones/modcoleteinicialicone.png');
    game.load.image('moddobrodanoicone', 'img/fases/modicones/moddobrodanoicone.png');
    game.load.image('modpocaohpinicialicone', 'img/fases/modicones/modpocaohpinicialicone.png');
    game.load.image('modpocaomanainicialicone', 'img/fases/modicones/modpocaomanainicialicone.png');
    game.load.image('modsecondchanceicone', 'img/fases/modicones/modsecondchanceicone.png');
    game.load.image('modstarterpackicone', 'img/fases/modicones/modstarterpackicone.png');
    //pontuacao ingame
    game.load.image('pontuacaoingame', 'img/fases/pontuacaoingame.png');
    //tutoriais
    game.load.image('tutorial', 'img/fases/fase1/tutorial.png');
    game.load.image('btntutorial', 'img/fases/fase1/btntutorial.png');
    // tutorial btn menu
    game.load.image('btntutorialativo', 'img/menu/tutorialbtnativo.png');
    game.load.image('btntutorialinativo', 'img/menu/tutorialbtninativo.png');
    //ajuda codigo f4
    game.load.image('folhasecret', 'img/fases/folha secret.png');
    game.load.spritesheet('folhasecretsprite', 'img/fases/folha secret sprite.png', 1366, 768);
    // conquistas
    game.load.spritesheet('conquistasativadooun', 'img/menu/conquistasativadooun.png', 109, 34);

    game.load.spritesheet('spriteconquista1', 'img/menu/conquistassprite/spriteconquista1.png', 264, 52);
    game.load.spritesheet('spriteconquista2', 'img/menu/conquistassprite/spriteconquista2.png', 264, 52);
    game.load.spritesheet('spriteconquista3', 'img/menu/conquistassprite/spriteconquista3.png', 264, 52);
    game.load.spritesheet('spriteconquista4', 'img/menu/conquistassprite/spriteconquista4.png', 264, 52);
    game.load.spritesheet('spriteconquista5', 'img/menu/conquistassprite/spriteconquista5.png', 264, 52);
    game.load.spritesheet('spriteconquista6', 'img/menu/conquistassprite/spriteconquista6.png', 264, 52);
    game.load.spritesheet('spriteconquista7', 'img/menu/conquistassprite/spriteconquista7.png', 264, 52);
    //tapaerro
    game.load.image('tapaerro', 'img/fases/fase2/tapaerro.png');
    //musicas
    //        game.load.audio('nome', ['musica/.mp3', 'musica/.ogg']);

    game.load.audio('inicioloopmusicaprincipal', ['musica/iniciosoundtrack.mp3', 'iniciosoundtrack.ogg']);
    game.load.audio('loopmusicaprincipal', ['musica/loopsoundtrack.mp3', 'loopsoundtrack.ogg']);
    game.load.audio('musicacreditos', ['musica/musicacreditos.mp3', 'musica/musicacreditos.ogg']);
    game.load.audio('musicamenu', ['musica/musicamenu.mp3', 'musica/musicamenu.ogg']);
    game.load.audio('somporta', ['musica/porta.mp3', 'musica/porta.ogg']);
    game.load.audio('somtiro', ['musica/tiro.mp3', 'musica/tiro.ogg']);
}
function create() {
    //adiciona as fisicas ao jogo
    game.physics.startSystem(Phaser.Physics.ARCADE);
    document.getElementById("carregamentojogo").style.left = "1000%";
    var app = new Vue({
        el: '#botoesredessoc',
        data: {
            mods: {},
            usuarios: {}
        }, methods: {
            colocanomeponto: function () {
                if (window.sessionStorage.getItem('pf') != null) {
                    pontosatuais = window.sessionStorage.getItem('pf');
                    var p = document.getElementById("twiter");
                    p.setAttribute('href', "https://twitter.com/intent/tweet/?text=Aluno%20do%20Senai%20de%20Santa%20catarina%20desenvolve%20jogo%20viciante%20e%20dific%C3%ADlimo!!%20ENTER%20THE%20CODE.%20Ultima%20pontuação%20obtida%20por:%20" + nomejogador + "%20foi%20de:%20" + pontosatuais + "%20Venha%20jogar%20também.&amp;url=http://35.239.206.173/enterthecode/index.html");
                    var p = document.getElementById("pontosh1").innerHTML = "O jogador " + nomejogador +
                        " fez um total de " + pontosatuais + " Pontos na ultma vez que jogou!";
                }
            },
            buscarpessoal: function (id) {
                const token = window.sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `${token}`;
                axios.get('api/modificador/' + id)
                    .then(response => {
                    this.mods = response.data
                        modsecondchanceQUANTIAnum = this.mods.quantidadesegundachance;
                        modstarterpackQUANTIAnum = this.mods.quantidadestarterpack;
                        moddobropontosQUANTIAnum = this.mods.quantidadedobrodano;
                        modcoleteinicialQUANTIAnum = this.mods.quantidadecoleteinicial;
                        modpocadomanainicialQUANTIAnum = this.mods.quantidadepocaomana;
                        modpocaohpinicialQUANTIAnum = this.mods.quantidadepocaohp;
                        idusuarios = this.mods.idusuario;
                        idmods = this.mods.id;
                    })
                    .catch(function (error) {
                        console.log(`Ocorreu um erro ao buscar: ${error}`);
                    });
            },
            buscar: function () {
                const token = window.sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `${token}`;
                var ids = window.sessionStorage.getItem('id');
                axios.get('api/usuario/' + ids)
                    .then(response => {
                        nomejogador = response.data.nome
                    })
                    .catch(function (error) {
                        console.log(`Ocorreu um erro ao buscar: ${error}`);
                    });
            },
            buscarconquistas: function () {
                const token = window.sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `${token}`;
                var ids = window.sessionStorage.getItem('id');
                axios.get('api/conquista/' + ids)
                    .then(response => {
                        conquista1 = response.data.segredosstalin;
                        conquista2 = response.data.foramaquinas;
                        conquista3 = response.data.easteregg;
                        conquista4 = response.data.entremelhores;
                        conquista5 = response.data.mestrepontos;
                        conquista6 = response.data.empresario;
                        conquista7 = response.data.conquistador;
                        idconquistas = response.data.id;
                    })
                    .catch(function (error) {
                        console.log(`Ocorreu um erro ao buscar: ${error}`);
                    });
            },
            buscarcolocacao: function (id) {
                const token = window.sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `${token}`;
                axios.get('api/pontos/' + id + "/0")
                    .then(response => {
                        colocacao = response.data;
                    })
                    .catch(function (error) {
                        console.log(`Ocorreu um erro ao buscar: ${error}`);
                    });
            }
        }, mounted() {
            var ids = window.sessionStorage.getItem('id');
            this.buscar();
            this.buscarpessoal(ids);
            this.buscarconquistas(ids);
            this.buscarcolocacao(ids);
        }
    })
}
function update() {
    if (jogando) {
        if (fase == 0) {
            if (!fase0carregada) {
                carregamenu();
                document.getElementById("botoesredessoc").style.left = "83%";
                document.getElementById("botaovoltar").style.left = "5px";
                fase0carregada = true;
                fase1carregada = false;
            }
            if (modcoleteinicialQUANTIAnum >= 1 && moddobropontosQUANTIAnum >= 1 && modpocadomanainicialQUANTIAnum >= 1
                && modpocaohpinicialQUANTIAnum >= 1 && modsecondchanceQUANTIAnum >= 1 && modstarterpackQUANTIAnum >= 1 &&
                !conquista6) {
                rodaconquista6();
            }
            if(colocacao<=10 && !conquistaativada && !conquista4){
                rodaconquista4();
            }
            verificaopcoes();
            checanummods();
        }
        if (conquista1 && conquista2 && conquista3 && conquista4 && conquista5 && conquista6
            && !conquista7 && !conquistaativada) {
            rodaconquista7();
        }
        if (testando == true) {
            vida = 10;
            mana = 10;
        }
        if (fase != 0 && (fase1carregada || fase2carregada || fase3carregada || fase4carregada || fase5carregada) && fase != 6) {
            loopinicio();
            diminuivolume();
            verificabordas();
            checacolisõesfases();
            versecondchance();
            atualizapontuacaoingametxt();
            if (pontuacaoinimigos == 1500 && !conquista2) {
                rodaconquista2();
            }
            tempodejogo += 1;
        }
        if (fase == 1 && !animar) {
            if (!fase1carregada) {
                // zera as variaveis
                fase0carregada = false;
                alv01f1ativada = false;
                f1concluida = false;
                f1link1 = "0-0";
                if (dobrodanodobropontos) {
                    dano = 4;
                }
                tempodejogo = 0;
                temporeator = 1500;
                reatorativado = false;
                slot1 = 0;
                slot2 = 0;
                slot3 = 0;
                slot4 = 0;
                if (starterpack) {
                    pocaomanainicial = false;
                    pocaovidainicial = false;
                    coleteinicial = false;
                }
                if (pocaomanainicial || pocaovidainicial || coleteinicial) {
                    starterpack = false;
                }
                if (starterpack) {
                    slot1 = 3;
                    slot2 = 5;
                    slot3 = 2;
                }
                if (pocaovidainicial) {
                    slot1 = 3;
                }
                if (pocaomanainicial) {
                    slot2 = 5;
                }
                if (coleteinicial) {
                    slot3 = 2;
                }
                //
                pontuacaoinimigos = 0;
                pontuacaotempo = 0;
                pontuacaoconclusao = 2000;
                pontuacaoconquistas = 0;
                pontuacaomods = 0;
                musicamenu.volume = 0;
                musicamenu = null;
                somtiro = game.add.audio('somtiro');
                somporta = game.add.audio('somporta');
                apagamenu();
                carregafase1();
                folhasecret = game.add.button(500, 50, 'folhasecret', clicoufolha, this);
                botaPc(632, 290);
                botaalavanca1(380, 230);
                criainimigo();
                posxPerso = 1200;
                posyPerso = 600;
                carregaJogabilidade();
                vida = 10;
                mana = 5;
                slotselecionado = 1;
                botainimigo(700, 600);
                botabracelete(900, 200);
                botaBau(1110, 200);
                carregatelspc1();
                if (tutorial) {
                    tutorialimg = game.add.sprite(5, -90, 'tutorial');
                    btntutorial = game.add.button(5, -90, 'btntutorial', clicoubtntutorailf1, this);
                }
                fase1carregada = true;
            }
            if (fase1carregada && vida > 0 && !tutorial && !abadomenuativada) {
                vertecla();
                movimenta();
                anima();
                checaVM();
                animaitens();
                detectaalavanca1();
                detectapc();
                testacolisao();
                botaitensinabarra();
                verslotselected();
                verificamorteperso();
                verportaf1();
                verlinkf1();
                passafase1();
            } else {
                checaVM();
                verificamorteperso();
            }
            if (fase1carregada && vida > 0 && tutorial) {
                botaitensinabarra();

            }
        }
        if (fase == 2) {
            if (!fase2carregada) {
                fase1carregada = false;
                carregafase2();
                folhasecret = game.add.button(1200, 575, 'folhasecret', clicoufolha, this);
                botaPc(760, 290);
                botaalavanca1(445, 295);
                botaalavanca2(430, 40);
                botaalavanca3(625, 40);
                botaalavanca4(1180, 190);
                posxPerso = 715;
                posyPerso = 570;
                carregaJogabilidade();
                botaBau(1180, 420);
                criainimigo();
                botainimigo(1100, 300);
                tapaerro = game.add.sprite(0, 0, 'tapaerro');
                carregatelspc2();
                fase2carregada = true;
                pcativo = false;
            }
            if (fase2carregada && vida > 0) {
                vertecla();
                movimenta();
                anima();
                checaVM();
                animaitens();
                detectaalavanca1();
                detectapc();
                testacolisao();
                botaitensinabarra();
                verslotselected();
                verificamorteperso();
                verificaativacoesf2();
                f2verificalinks();
                fase2checaportaalvaberta();
                checaconclusaof2();
                passafase2();
            } else {
                checaVM();
                verificamorteperso();
            }
        }
        if (fase == 3) {
            if (!fase3carregada) {
                fase2carregada = false;
                temporeator = 1500;
                f3btn1link = "";
                f3btn2link = "";
                f3btnclicado = "";
                reatorativado = false;
                carregafase3();
                folhasecret = game.add.button(860, 50, 'folhasecret', clicoufolha, this);
                botaPc(983, 290);
                botaalavanca1(1150, 310);
                botaalavanca2(410, 450);
                botaalavanca3(235, 280);
                posxPerso = 1100;
                posyPerso = 600;
                carregaJogabilidade();
                criainimigo();
                botainimigo(700, 500);
                carregatelspc3();
                //special
                expreator = game.add.sprite(3000, 0, 'expreator', 0);
                expreator.animations.add('explosao', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 17);
                logogameover = game.add.sprite(game.world.width * 0.5, game.world.height * 0.5, 'GameOver', 1);
                logogameover.anchor.set(0.5);
                logogameover.animations.add('aparecego', [0], 24);
                logogameover.animations.add('somego', [1], 24);
                //.........
                fase3carregada = true;
                pcativo = false;
            }
            if (fase3carregada && vida > 0) {
                vertecla();
                movimenta();
                anima();
                checaVM();
                animaitens();
                detectaalavanca1();
                detectapc();
                testacolisao();
                botaitensinabarra();
                verslotselected();
                verificareator();
                verificamorteperso();
                verificaativacoesf3();
                verlinksf3();
                verificaportasabertasf3();
                checaconclusaof3();
                passafase3();
            } else {
                checaVM();
                verificamorteperso();
            }
        }
        if (fase == 4) {
            if (!fase4carregada) {
                fase3carregada = false;
                temporeator = 1500;
                reatorativado = false;
                carregafase4();
                folhasecret = game.add.button(250, 85, 'folhasecret', clicoufolha, this);
                botaPc(620, 41);
                posxPerso = 548;
                posyPerso = 600;
                carregaJogabilidade();
                carregatelspc4();
                try {
                    inimigo1 = null;
                } catch{ }
                fase4carregada = true;
                pcativo = false;
            }
            if (fase4carregada && vida > 0) {
                vertecla();
                movimenta();
                anima();
                checaVM();
                animaitens();
                detectaalavanca1();
                detectapc();
                verificatocandopcsf4();
                testacolisao();
                botaitensinabarra();
                verslotselected();
                verificamorteperso();
                verificaportaf4();
                verificaeastreegg();
                if (!conquista3 && eastereggdescoberto) {
                    rodaconquista3();
                }
                checaconclusaof4();
                passafase4();
            } else {
                checaVM();
                verificamorteperso();
            }
        }
        if (fase == 5) {
            if (!fase5carregada) {
                fase4carregada = false;

                carregafase5();
                posxPerso = 548;
                posyPerso = 600;
                carregaJogabilidade();
                try {
                    inimigo1 = null;
                } catch{ }
                fase5carregada = true;
                pcativo = false;
            }
            if (fase5carregada && vida > 0) {
                if (tempocarta == 500 || tempocarta <= 0) {
                    vertecla();
                    movimenta();
                }
                if (cartavista && tempocarta >= 0) {
                    tempocarta -= 1;
                }
                if (tempocarta <= 0) {
                    carta.x = 5000;
                }
                anima();
                checaVM();
                animaitens();
                detectaalavanca1();
                detectapc();

                testacolisao();
                botaitensinabarra();
                verslotselected();
                verificamorteperso();
                checaconclusaof5();

            } else {
                checaVM();
                verificamorteperso();
            }
        }
        if (fase == 6) {
            if (!creditoscarregados) {
                slot1 = 0;
                slot2 = 0;
                slot3 = 0;
                slot4 = 0;
                try {
                    loopmusicaprincipal.volume = 0;
                } catch{ }
                loopmusicaprincipal = null;
                musicacreditos = game.add.audio('musicacreditos');
                musicacreditos.loop = true;
                musicacreditos.play();
                pontuacao = game.add.sprite(0, 0, 'pontuacao');
                creditos = game.add.sprite(0, 767, 'creditos');
                tempoCreditos = 4050;
                if (tempodejogo < 10600000) {
                    pontuacaotempo = 10600000 / (tempodejogo);
                } else {
                    pontuacaotempo = 0;
                }
                if (!contouconquistas) {
                    if (conquista1) {
                        conquistasquantidade += 1;
                    }
                    if (conquista2) {
                        conquistasquantidade += 1;
                    }
                    if (conquista3) {
                        conquistasquantidade += 1;
                    }
                    if (conquista4) {
                        conquistasquantidade += 1;
                    }
                    if (conquista5) {
                        conquistasquantidade += 1;
                    }
                    if (conquista6) {
                        conquistasquantidade += 1;
                    }
                    if (conquista7) {
                        conquistasquantidade += 1;
                    }
                    contouconquistas = true;
                    pontuacaoconquistas = (pontuacaoconclusao + pontuacaoinimigos) * ((conquistasquantidade / 10) + 1);
                }
                posypontos = pontuacao.y;
                txtpontuacaoinimigos = game.add.text(550, 260, '0', estilotexto2);
                txtpontuacaoconclusao = game.add.text(550, 320, '0', estilotexto2);
                txtpontuacaotempo = game.add.text(550, 380, '0', estilotexto2);
                txtpontuacaoconquistas = game.add.text(550, 433, '0', estilotexto2);
                txtpontuacaomods = game.add.text(550, 490, '0', estilotexto2);
                txtpontuacaofinal = game.add.text(550, 615, '0', estilotexto2);
                pontuacaofinal = pontuacaoconclusao + pontuacaoconquistas + pontuacaoexibida +
                    pontuacaoinimigos + pontuacaomods + pontuacaotempo;
                if (dobrodanodobropontos) {
                    pontuacaomods = pontuacaofinal;
                    pontuacaofinal = pontuacaofinal * 2;
                }
                pontosatuais = pontuacaofinal.toFixed(0);
                window.sessionStorage.setItem('pf', pontosatuais);
                creditoscarregados = true;
                //inputcodigo = game.add.text(3000, 210, '', estilotexto2); 
                //inputcodigo.setText(`${codigo}`);               
            }
            if (!conquista1) {
                rodaconquista1();
            }
            if (!conquista5 && pontuacaofinal >= 10000 && !conquistaativada) {
                rodaconquista5();
            }
            if(!salvouconquistas){
                salvaconquistasobtidas();
                salvouconquistas = true;
            }
            if (!pontuacaoexibida) {
                if (pontosnow1 < pontuacaoinimigos) {
                    pontosnow1 += 10;
                    txtpontuacaoinimigos.setText(`${pontosnow1}`);
                }
                if (pontosnow2 < pontuacaoconclusao) {
                    pontosnow2 += 10;
                    txtpontuacaoconclusao.setText(`${pontosnow2}`);
                }
                if (pontosnow3 < pontuacaotempo) {
                    pontosnow3 += 10;
                    txtpontuacaotempo.setText(`${pontosnow3}`);
                }
                if (pontosnow4 < pontuacaoconquistas) {
                    pontosnow4 += 10;
                    txtpontuacaoconquistas.setText(`${pontosnow4}`);
                }
                if (pontosnow5 < pontuacaomods) {
                    pontosnow5 += 10;
                    txtpontuacaomods.setText(`${pontosnow5}`);
                }
                if (pontosnow6 < pontuacaofinal) {
                    pontosnow6 += 10;
                    txtpontuacaofinal.setText(`${pontosnow6}`);
                }
                if (pontosnow1 >= pontuacaoinimigos && pontosnow2 >= pontuacaoconclusao &&
                    pontosnow3 >= pontuacaotempo && pontosnow4 >= pontuacaoconquistas &&
                    pontosnow5 >= pontuacaomods && pontosnow6 >= pontuacaofinal) {
                    pontuacaoexibida = true;
                }
            }
            if (pontuacaoexibida && tempoCreditos > 0) {
                txtpontuacaoconclusao.y = txtpontuacaoconclusao.y - 1;
                txtpontuacaoconquistas.y = txtpontuacaoconquistas.y - 1;
                txtpontuacaofinal.y = txtpontuacaofinal.y - 1;
                txtpontuacaoinimigos.y = txtpontuacaoinimigos.y - 1;
                txtpontuacaomods.y = txtpontuacaomods.y - 1;
                txtpontuacaotempo.y = txtpontuacaotempo.y - 1;
                tempoCreditos -= 1;
                posycreditos -= 1;
                posypontos -= 1;
                pontuacao.y = posypontos;
                creditos.y = posycreditos;
            } else {
                if (tempoCreditos > 0) {
                    rodandocreditos = false;
                    posycreditos = 767;
                    posypontos = 0;
                    tempoCreditos = 4050;
                    pontuacaoexibida = false;
                    creditos.x = 0;
                    creditos.y = 767;
                    pontuacao.y = 0;
                }
            }
            if (tempoCreditos <= 0) {
                rodandocreditos = false;
                pontuacaoexibida = false;
                pontuacaoinimigos = 0;
                pontuacaotempo = 0;
                pontuacaoconclusao = 2000;
                pontuacaoconquistas = 0;
                pontuacaomods = 0;
                pontosnow1 = 0;
                pontosnow2 = 0;
                pontosnow3 = 0;
                pontosnow4 = 0;
                pontosnow5 = 0;
                pontosnow6 = 0;
                creditoscarregados = false;
                creditos = null;
                pontuacao = null;
                txtpontuacaoinimigos = null;
                txtpontuacaoconclusao = null;
                txtpontuacaotempo = null;
                txtpontuacaoconquistas = null;
                txtpontuacaomods = null;
                txtpontuacaofinal = null;
                tempoCreditos = 3300;
                contouconquistas = false;
                fase = 9;
                document.getElementById("carregamentojogo").style.left = "14%";
            }
        }
        if(fase == 9){
            if(salvouconquistas && salvoupontos){
                window.sessionStorage.setItem('pf', pontosatuais);
                window.location.href = "paginajogo.html";
            }
        }
    }
}
function salvaconquistasobtidas() {
    var ppa = new Vue({
        el: '#botoesredessoc',
        data: {
            id: "",
            idusuario: "",
            segredosstalin: "",
            foramaquinas: "",
            easteregg: "",
            entremelhores: "",
            mestrepontos: "",
            empresario: "",
            conquistador: ""
        }, methods: {
            salvarconquis: function () {
                const token = window.sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `${token}`;
                axios.post('api/conquista', {
                    segredosstalin: conquista1,
                    foramaquinas: conquista2,
                    easteregg: conquista3,
                    entremelhores: conquista4,
                    mestrepontos: conquista5,
                    empresario: conquista6,
                    conquistador: conquista7,
                    id: idconquistas,
                    idusuario: idusuarios
                }).then(Response=>{
                    let salvarjogador2 = async () => {
                        try {
                            var ponts = await this.salvarpontos();
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    salvarjogador2();
                }).catch(function (error) {
                    console.log(`Ocorreu um erro ao salvar: ${error}`);
                });
            },
            salvarpontos: function () {
                axios.post('api/pontos', {
                    id: 1,
                    idusuario: idusuarios,
                    pontos: pontosatuais
                }).then(Response => {                    
                    if(fase==6 && tempoCreditos>0){
                        salvoupontos = true;
                    }else{
                        window.sessionStorage.setItem('pf', pontosatuais);
                        window.location.href = "paginajogo.html";
                    }
                }).catch(function (error) {
                    console.log(`Ocorreu um erro ao salvar: ${error}`);
                });
            }
        }, mounted() {
            this.salvarconquis()
        }
    })
}
function carregaplacar(){

    napp = new Vue({
        el: '#botoesredessoc',
        data: {
            pontuacoes: [],
            pontuac: {},
            colocacao: ""
        }, methods: {
            buscar: function () {
                const token = window.sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `${token}`;
                axios.get('api/pontos')
                    .then(response =>{ this.pontuacoes = response.data
                        try {
                            pontuacao1 = this.pontuacoes[0].pontos + " | " + this.pontuacoes[0].nomeusuario;               
                        } catch (error) {}
                        try {
                            pontuacao2 = this.pontuacoes[1].pontos + " | " + this.pontuacoes[1].nomeusuario;
                        
                        } catch (error) {}
                        try {
                            pontuacao3 = this.pontuacoes[2].pontos + " | " + this.pontuacoes[2].nomeusuario;
                        
                        } catch (error) {}
                        try {
                            pontuacao4 = this.pontuacoes[3].pontos + " | " + this.pontuacoes[3].nomeusuario;
                        
                        } catch (error) {}
                        try {
                            pontuacao5 = this.pontuacoes[4].pontos + " | " + this.pontuacoes[4].nomeusuario;
                        
                        } catch (error) {}
                        try {
                            pontuacao6 = this.pontuacoes[5].pontos + " | " + this.pontuacoes[5].nomeusuario;
                        
                        } catch (error) {}
                        try {
                            pontuacao7 = this.pontuacoes[6].pontos + " | " + this.pontuacoes[6].nomeusuario;
                        
                        } catch (error) {}
                        try {
                            pontuacao8 = this.pontuacoes[7].pontos + " | " + this.pontuacoes[7].nomeusuario;
                        
                        } catch (error) {}
                        try {
                            pontuacao9 = this.pontuacoes[8].pontos + " | " + this.pontuacoes[8].nomeusuario;
                        
                        } catch (error) {}
                        try {
                            pontuacao10 = this.pontuacoes[9].pontos + " | " + this.pontuacoes[9].nomeusuario;
                        } catch (error) {}
                        colocaplacar();
                    })
                    .catch(function (error) {
                        console.log(`Ocorreu um erro ao buscar: ${error}`);
                    });
            },
            buscarpessoal: function (id) {
                const token = window.sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `${token}`;
                axios.get('api/pontos/' + id)
                    .then(response => {this.pontuac = response.data
                        pontoscolocacaojogador = this.pontuac.nomeusuario;
                        pontospessoais = this.pontuac.pontos;
                        colocanomejogador();
                        colocapontospessoais();
                    })
                    .catch(function (error) {
                        console.log(`Ocorreu um erro ao buscar: ${error}`);
                    });
            },
            buscarcolocacao: function (id) {
                const token = window.sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `${token}`;
                axios.get('api/pontos/' + id + "/0")
                    .then(response => {this.colocacao = response.data
                        colocacaopessoal = this.colocacao;
                        colocacolocacao();
                    })
                    .catch(function (error) {
                        console.log(`Ocorreu um erro ao buscar: ${error}`);
                    });
            }
        }, mounted() {
            var ids = window.sessionStorage.getItem('id');
            this.buscar();
            this.buscarpessoal(ids);
            this.buscarcolocacao(ids);
        }
    })
}
function colocaplacar(){
    var a = 865;
    var b = 130;
    var c = 39.6;
    txtposicao1 = game.add.text(a, b+(c*1), pontuacao1, estilotexto4);
    txtposicao2 = game.add.text(a, b+(c*2), pontuacao2, estilotexto4);
    txtposicao3 = game.add.text(a, b+(c*3), pontuacao3, estilotexto4);
    txtposicao4 = game.add.text(a, b+(c*4), pontuacao4, estilotexto4);
    txtposicao5 = game.add.text(a, b+(c*5), pontuacao5, estilotexto4);
    txtposicao6 = game.add.text(a, b+(c*6), pontuacao6, estilotexto4);
    txtposicao7 = game.add.text(a, b+(c*7), pontuacao7, estilotexto4);
    txtposicao8 = game.add.text(a, b+(c*8), pontuacao8, estilotexto4);
    txtposicao9 = game.add.text(a, b+(c*9), pontuacao9, estilotexto4);
    txtposicao10 = game.add.text(a, b+(c*10), pontuacao10, estilotexto4);
}
function colocanomejogador(){
    txtnomepontuacao = game.add.text(490, 320, pontoscolocacaojogador, estilotexto5);
}
function colocapontospessoais(){
    txtpontuacaopessoal = game.add.text(490, 395, pontospessoais, estilotexto5);
}
function colocacolocacao(){
    txtcolocacaopesoal = game.add.text(490, 470, colocacaopessoal, estilotexto5);
}
function loopinicio() {
    if (loopiniciomusicaprincipal.currentTime >= 32514 && !inicioumusica) {
        loopmusicaprincipal = game.add.audio('loopmusicaprincipal');
        loopmusicaprincipal.loop = true;
        loopmusicaprincipal.play();
        inicioumusica = true;
    }
}
function clicoufolha() {
    if (fase == 1) {
        folhasecretsprite = game.add.sprite(0, 0, 'folhasecretsprite', 0);
        btnfolha = game.add.button(5, -90, 'btntutorial', clicoufolhasprite, this);
    }
    if (fase == 2) {
        folhasecretsprite = game.add.sprite(0, 0, 'folhasecretsprite', 2);
        btnfolha = game.add.button(5, -90, 'btntutorial', clicoufolhasprite, this);
    }
    if (fase == 3) {
        folhasecretsprite = game.add.sprite(0, 0, 'folhasecretsprite', 3);
        btnfolha = game.add.button(5, -90, 'btntutorial', clicoufolhasprite, this);
    }
    if (fase == 4) {
        folhasecretsprite = game.add.sprite(0, 0, 'folhasecretsprite', 1);
        btnfolha = game.add.button(5, -90, 'btntutorial', clicoufolhasprite, this);
    }
}
function clicoufolhasprite() {
    folhasecretsprite.x = 5000;
    btnfolha.x = 5000;
}
function rodaconquista1() {
    spriteconquista1 = game.add.sprite((game.world.width / 2) - 130, game.world.height * 0.1, 'spriteconquista1', 4);
    spriteconquista1.animations.add('aparece', [4, 3, 2, 1, 0], 5);
    spriteconquista1.animations.play('aparece');
    conquista1 = true;
    conquistaativada = true;
}
function rodaconquista2() {
    spriteconquista2 = game.add.sprite((game.world.width / 2) - 130, game.world.height * 0.1, 'spriteconquista2', 4);
    spriteconquista2.animations.add('aparece', [4, 3, 2, 1, 0], 5);
    spriteconquista2.animations.play('aparece');
    conquista2 = true;
    conquistaativada = true;
}
function rodaconquista3() {
    spriteconquista3 = game.add.sprite((game.world.width / 2) - 130, game.world.height * 0.1, 'spriteconquista3', 4);
    spriteconquista3.animations.add('aparece', [4, 3, 2, 1, 0], 5);
    spriteconquista3.animations.play('aparece');
    conquista3 = true;
    conquistaativada = true;
}
function rodaconquista4() {
    spriteconquista4 = game.add.sprite((game.world.width / 2) - 130, game.world.height * 0.1, 'spriteconquista4', 4);
    spriteconquista4.animations.add('aparece', [4, 3, 2, 1, 0], 5);
    spriteconquista4.animations.play('aparece');
    conquista4 = true;
    conquistaativada = true;
}
function rodaconquista5() {
    spriteconquista5 = game.add.sprite((game.world.width / 2) - 130, game.world.height * 0.1, 'spriteconquista5', 4);
    spriteconquista5.animations.add('aparece', [4, 3, 2, 1, 0], 5);
    spriteconquista5.animations.play('aparece');
    conquista5 = true;
    conquistaativada = true;
}
function rodaconquista6() {
    spriteconquista6 = game.add.sprite((game.world.width / 2) - 130, game.world.height * 0.1, 'spriteconquista6', 4);
    spriteconquista6.animations.add('aparece', [4, 3, 2, 1, 0], 5);
    spriteconquista6.animations.play('aparece');
    conquista6 = true;
    conquistaativada = true;
}
function rodaconquista7() {
    spriteconquista7 = game.add.sprite((game.world.width / 2) - 130, game.world.height * 0.1, 'spriteconquista7', 4);
    spriteconquista7.animations.add('aparece', [4, 3, 2, 1, 0], 5);
    spriteconquista7.animations.play('aparece');
    conquista7 = true;
    conquistaativada = true;
}
setInterval(function () {
    if (conquistaativada && tempoconquista > 0) {
        tempoconquista -= 1;
    } else {
        conquistaativada = false;
        tempoconquista = 2000;
        try {
            spriteconquista1.x = 5000;
        } catch{ }
        try {
            spriteconquista2.x = 5000;
        } catch{ }
        try {
            spriteconquista3.x = 5000;
        } catch{ }
        try {
            spriteconquista4.x = 5000;
        } catch{ }
        try {
            spriteconquista5.x = 5000;
        } catch{ }
        try {
            spriteconquista6.x = 5000;
        } catch{ }
        try {
            spriteconquista7.x = 5000;
        } catch{ }
    }
}, 1)
function clicoubtntutorailf1() {
    tutorial = false;
    btntutorial.x = 5000;
    tutorialimg.x = 5000;
}
function diminuivolume() {
    try {
        if (delayativado && tempodelay > 0) {
            tempodelay -= 1;
            loopmusicaprincipal.volume = 0.5;
            try {
                loopiniciomusicaprincipal.volume = 0.5;
            } catch (error) { }
        }
        if (tempodelay <= 0) {
            tempodelay = 400;
            delayativado = false;
            loopmusicaprincipal.volume = 1;
            try {
                loopiniciomusicaprincipal.volume = 1;
            } catch (error) { }
        }
    } catch (error) { }
}
function rodasomtiro() {
    delayativado = true;
    somtiro.play();
}
function rodasomporta() {
    delayativado = true;
    if (!ativousomporta) {
        somporta.currentTime = 0;
        somporta.play();
        ativousomporta = true;
    }
}
function checaconclusaof4() {
    if (codigoenter == "11440940") {
        f4concluida = true;
    }
}
function checanummods() {
    modcoleteinicialQUANTIA.setText(`${modcoleteinicialQUANTIAnum}`);
    moddobropontosQUANTIA.setText(`${moddobropontosQUANTIAnum}`);
    modpocadomanainicialQUANTIA.setText(`${modpocadomanainicialQUANTIAnum}`);
    modpocaohpinicialQUANTIA.setText(`${modpocaohpinicialQUANTIAnum}`);
    modsecondchanceQUANTIA.setText(`${modsecondchanceQUANTIAnum}`);
    modstarterpackQUANTIA.setText(`${modstarterpackQUANTIAnum}`);
}
function checaconclusaof2() {
    if (f2concluida) {
        portafinalf2.animations.play('abreportafinalf2');
        rodasomporta();
    } else {
        portafinalf2.animations.play('fechaportafinalf2');
        ativousomporta = false;
    }
}
function checaconclusaof3() {
    if (alv02f2ativada) {
        f3concluida = true;
        portafinalf3.animations.play('portafinalf3aberta');
        rodasomporta();
    } else {
        portafinalf3.animations.play('portafinalf3fechada');
        f3concluida = false;
        ativousomporta = false;
    }
}
function checaconclusaof5() {
    if (perso.y < 290 && abriucofre) {
        abadomenu = null;
        btnabadomenuNAO = null;
        btnabadomenuSIM = null;
        btnabadomenu = null;
        fase = 6;
        fundof5 = null;
        cartavista = false;
        carta = null;
        cofre = null;
        tempocarta = 500;
        pontuacaoingame = null;
        pontuacaoingametxt = null;
        abriucofre = false;
        tocandocadaver = false;
        tocandocofre = false;
    }
}
function passafase4() {
    if (f4concluida && posxPerso > 490 && posxPerso < 608 && posyPerso < 125) {
        fase = 5;
        fundof4 = null;
        negocioparacobrirsegredo = null;
        pcf401 = null;
        pcf402 = null;
        pcf403 = null;
        pcf404 = null;
        portaf4 = null;
        codigo = "";
        codigoenter = "";
        pcativo = false;
        f4concluida = false;
        eastereggdescoberto = false;
        tempomensagem = 200;
        f4btn0 = null;
        f4btn2 = null;
        f4btn3 = null;
        f4btn4 = null;
        f4btn5 = null;
        f4btn6 = null;
        f4btn7 = null;
        f4btn8 = null;
        f4btn9 = null;
        f4btn1 = null;
        f4btnenter = null;
        f4btncancelar = null;
        inputcodigo = null;
        codeinsert = null;
        codecoreto = null;
        codeerrado = null;
        telapc1 = null;
        telapc2 = null;
        telapc3 = null;
        telapc4 = null;
        try {
            inimigo1 = null;
        } catch{ }
        try {
            BRACELETE_PLASMATICO = null;
        } catch{ }
        try {
            COLETE = null;
        } catch{ }
        try {
            POCAO_HP = null;
        } catch{ }
        try {
            POCAO_MANA = null;
        } catch{ }
        try {
            CONVERSOR_DE_MANA = null;
        } catch{ }
    }
}
function passafase3() {
    if (f3concluida && posxPerso > 680 && posxPerso < 800 && posyPerso < 125) {
        fase = 4;
        fundof3 = null;
        portafinalf3 = null;
        reator = null;
        portaalv1f3 = null;
        portaalv2f3 = null;
        telapcbase = null;
        btnsairtelapc = null;
        telapciconsf3 = null;
        btnalavanca1f3 = null;
        btnalavanca2f3 = null;
        btnreator = null;
        btnporta2f3 = null;
        linksbtn1 = null;
        linksbtn2 = null;
        posxPerso = 1200;
        posyPerso = 600;
        perso = null;
        portaalvf2aberta = false;
        alv01f1ativada = false;
        alv01f2ativada = false;
        alv02f2ativada = false;
        alv03f2ativada = false;
        alv04f2ativada = false;
        alv01f1 = null;
        alv01f2 = null;
        alv02f2 = null;
        pcativo = false;
        abadomenuativada = false;
        pc = null;
        bau = null;
        try {
            inimigo1 = null;
        } catch{ }
        try {
            BRACELETE_PLASMATICO = null;
        } catch{ }
        try {
            COLETE = null;
        } catch{ }
        try {
            POCAO_HP = null;
        } catch{ }
        try {
            POCAO_MANA = null;
        } catch{ }
        try {
            CONVERSOR_DE_MANA = null;
        } catch{ }
    }
}
function passafase2() {
    if (f2concluida && posxPerso > 220 && posxPerso < 335 && posyPerso < 125) {
        fase = 3;
        fundofase1 = null;
        portaalvf2 = null;
        portafinalf2 = null;
        alv01f1 = null;
        alv01f2 = null;
        alv02f2 = null;
        alv03f2 = null;
        f2linkbtn1 = "1-0";
        f2linkbtn2 = "2-0";
        f2linkbtn3 = "3-0";
        btnselec = 0;
        posxPerso = 1200;
        posyPerso = 600;
        perso = null;
        portaalvf2aberta = false;
        alv01f2ativada = false;
        alv02f2ativada = false;
        alv03f2ativada = false;
        alv04f2ativada = false;
        tapaerro = null;
        pcativo = false;
        abadomenuativada = false;
        pc = null;
        bau = null;
        try {
            inimigo1 = null;
        } catch{ }
        try {
            BRACELETE_PLASMATICO = null;
        } catch{ }
        try {
            COLETE = null;
        } catch{ }
        try {
            POCAO_HP = null;
        } catch{ }
        try {
            POCAO_MANA = null;
        } catch{ }
        try {
            CONVERSOR_DE_MANA = null;
        } catch{ }
    }
}
function passafase1() {
    if (f1concluida && posxPerso > 575 && posxPerso < 680 && posyPerso < 125) {
        fase = 2;
        fundofase1 = null;
        parede01f1 = null;
        portaf1 = null;
        telapcbase = null;
        btnsairtelapc = null;
        btnalv1 = null;
        btnporta1 = null;
        linksimg = null;
        posxPerso = null;
        posyPerso = null;
        perso = null;
        bau = null;
        pc = null;
        alv01f1 = null;
        inimigo1 = null;
        posxinimigo = null;
        try {
            inimigo1 = null;
        } catch{ }
        try {
            BRACELETE_PLASMATICO = null;
        } catch{ }
        try {
            COLETE = null;
        } catch{ }
        try {
            POCAO_HP = null;
        } catch{ }
        try {
            POCAO_MANA = null;
        } catch{ }
        try {
            CONVERSOR_DE_MANA = null;
        } catch{ }

    }
}
function checacolisõesfases() {
    if (fase == 1) {
        if (posxinimigo <= 1035 && posxinimigo >= 1000) {
            if (posyinimigo - 30 <= 460 && posyinimigo - 30 >= 90) {
                if (atacando) {
                    posxinimigo += 20;
                } else {
                    posxinimigo += 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 990 && posxinimigo >= 965) {
            if (posyinimigo - 30 <= 460 && posyinimigo - 30 >= 90) {
                if (atacando) {
                    posxinimigo -= 20;
                } else {
                    posxinimigo -= 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 1001 && posxinimigo >= 989) {
            if (posyinimigo - 30 <= 460 && posyinimigo - 30 >= 90) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 580 && posxinimigo >= 575) {
            if (posyinimigo - 30 <= 470 && posyinimigo - 30 >= 130) {
                if (atacando) {
                    posxinimigo += 20;
                } else {
                    posxinimigo += 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 530 && posxinimigo >= 515) {
            if (posyinimigo - 30 <= 470 && posyinimigo - 30 >= 150) {
                if (atacando) {
                    posxinimigo -= 20;
                } else {
                    posxinimigo -= 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 575 && posxinimigo >= 530) {
            if (posyinimigo - 30 <= 460 && posyinimigo - 30 >= 90) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 515 && posxinimigo >= 220) {
            if (posyinimigo - 30 <= 290 && posyinimigo - 30 >= 280) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 580 && posxinimigo >= 220) {
            if (posyinimigo - 30 <= 140 && posyinimigo - 30 >= 130) {
                if (atacando) {
                    posyinimigo -= 20;
                } else {
                    posyinimigo -= 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 770 && posxinimigo >= 660) {
            if (posyinimigo - 30 <= 405 && posyinimigo - 30 >= 395) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 770 && posxinimigo >= 660) {
            if (posyinimigo - 30 <= 265 && posyinimigo - 30 >= 255) {
                if (atacando) {
                    posyinimigo -= 20;
                } else {
                    posyinimigo -= 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 770 && posxinimigo >= 760) {
            if (posyinimigo - 30 <= 405 && posyinimigo - 30 >= 255) {
                if (atacando) {
                    posxinimigo += 20;
                } else {
                    posxinimigo += 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 670 && posxinimigo >= 660) {
            if (posyinimigo - 30 <= 405 && posyinimigo - 30 >= 255) {
                if (atacando) {
                    posxinimigo -= 20;
                } else {
                    posxinimigo -= 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        //tiro
        if (tiroX <= 1035 && tiroX >= 1000) {
            if (tiroY - 30 <= 460 && tiroY - 30 >= 90) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 990 && tiroX >= 965) {
            if (tiroY - 30 <= 460 && tiroY - 30 >= 90) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 1001 && tiroX >= 989) {
            if (tiroY - 30 <= 460 && tiroY - 30 >= 90) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 580 && tiroX >= 575) {
            if (tiroY - 30 <= 470 && tiroY - 30 >= 130) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 530 && tiroX >= 515) {
            if (tiroY - 30 <= 470 && tiroY - 30 >= 150) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 575 && tiroX >= 530) {
            if (tiroY - 30 <= 460 && tiroY - 30 >= 90) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 515 && tiroX >= 220) {
            if (tiroY - 30 <= 290 && tiroY - 30 >= 280) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 580 && tiroX >= 220) {
            if (tiroY - 30 <= 140 && tiroY - 30 >= 130) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 770 && tiroX >= 660) {
            if (tiroY - 30 <= 405 && tiroY - 30 >= 395) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 770 && tiroX >= 660) {
            if (tiroY - 30 <= 265 && tiroY - 30 >= 255) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 770 && tiroX >= 760) {
            if (tiroY - 30 <= 405 && tiroY - 30 >= 255) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 670 && tiroX >= 660) {
            if (tiroY - 30 <= 405 && tiroY - 30 >= 255) {
                tirosaiudatela();
            }
        }
        //personagem
        if (posxPerso <= 1035 && posxPerso >= 1000) {
            if (posyPerso <= 460 && posyPerso >= 90) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 990 && posxPerso >= 965) {
            if (posyPerso <= 460 && posyPerso >= 90) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 1001 && posxPerso >= 989) {
            if (posyPerso <= 460 && posyPerso >= 90) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 580 && posxPerso >= 575) {
            if (posyPerso <= 470 && posyPerso >= 130) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 530 && posxPerso >= 515) {
            if (posyPerso <= 470 && posyPerso >= 150) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 575 && posxPerso >= 530) {
            if (posyPerso <= 460 && posyPerso >= 140) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 515 && posxPerso >= 220) {
            if (posyPerso <= 290 && posyPerso >= 280) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 580 && posxPerso >= 220) {
            if (posyPerso <= 140 && posyPerso >= 130) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 770 && posxPerso >= 660) {
            if (posyPerso <= 405 && posyPerso >= 395) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 770 && posxPerso >= 660) {
            if (posyPerso <= 265 && posyPerso >= 255) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 770 && posxPerso >= 760) {
            if (posyPerso <= 405 && posyPerso >= 255) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 670 && posxPerso >= 660) {
            if (posyPerso <= 405 && posyPerso >= 255) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        //props tiro
        if (tiroX <= 1300 && tiroX >= 1020) {
            if (tiroY <= 145 && tiroY >= 0) {
                tirosaiudatela();
            }
        }
        //props perso
        if (posxPerso <= 1300 && posxPerso >= 1020) {
            if (posyPerso <= 145 && posyPerso >= 0) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 585 && posxPerso >= 500) {
            if (posyPerso <= 130 && posyPerso >= 50) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 400 && posxPerso >= 380) {
            if (posyPerso <= 380 && posyPerso >= 200) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 400 && posxPerso >= 300) {
            if (posyPerso <= 380 && posyPerso >= 200) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 310 && posxPerso >= 290) {
            if (posyPerso <= 430 && posyPerso >= 200) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 310 && posxPerso >= 100) {
            if (posyPerso <= 430 && posyPerso >= 200) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        // props inimigo
        if (posxinimigo <= 1300 && posxinimigo >= 1020) {
            if (posyinimigo <= 145 && posyinimigo >= 0) {
                posyinimigo += 5;
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 585 && posxinimigo >= 500) {
            if (posyinimigo <= 130 && posyinimigo >= 50) {
                posxinimigo += 5;
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 400 && posxinimigo >= 380) {
            if (posyinimigo <= 380 && posyinimigo >= 200) {
                posxinimigo += 5;
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 400 && posxinimigo >= 300) {
            if (posyinimigo <= 380 && posyinimigo >= 200) {
                posyinimigo += 5;
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 310 && posxinimigo >= 290) {
            if (posyinimigo <= 430 && posyinimigo >= 200) {
                posxinimigo += 5;
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 310 && posxinimigo >= 100) {
            if (posyinimigo <= 430 && posyinimigo >= 200) {
                posyinimigo += 5;
                inimigo1.y = posyinimigo;
            }
        }
    }
    if (fase == 2) {
        //tiro
        if (tiroX <= 890 && tiroX >= 770) {
            if (tiroY <= 410 && tiroY >= 400) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 890 && tiroX >= 770) {
            if (tiroY <= 250 && tiroY >= 240) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 780 && tiroX >= 770) {
            if (tiroY <= 410 && tiroY >= 240) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 640 && tiroX >= 620) {
            if (tiroY <= 345 && tiroY >= 185) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 400 && tiroX >= 380) {
            if (tiroY <= 345 && tiroY >= 185) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 640 && tiroX >= 380) {
            if (tiroY <= 345 && tiroY >= 325) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 640 && tiroX >= 380) {
            if (tiroY <= 205 && tiroY >= 185) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 900 && tiroX >= 885) {
            if (tiroY <= 410 && tiroY >= 80) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 900 && tiroX >= 885) {
            if (tiroY <= 650 && tiroY >= 485) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 1300 && tiroX >= 910) {
            if (tiroY <= 520 && tiroY >= 455) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 1300 && tiroX >= 955) {
            if (tiroY <= 245 && tiroY >= 200) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 955 && tiroX >= 945) {
            if (tiroY <= 410 && tiroY >= 200) {
                tirosaiudatela();
            }
        }
        if (!portaalvf2aberta) {
            if (tiroX <= 905 && tiroX >= 885) {
                if (tiroY <= 490 && tiroY >= 405) {
                    tirosaiudatela();
                }
            }
            if (tiroX <= 955 && tiroX >= 925) {
                if (tiroY <= 490 && tiroY >= 405) {
                    tirosaiudatela();
                }
            }
        }
        //props perso
        if (posxPerso <= 470 && posxPerso >= 450) {
            if (posyPerso <= 660 && posyPerso >= 465) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 470 && posxPerso >= 100) {
            if (posyPerso <= 485 && posyPerso >= 465) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        //props inimigo
        if (posxinimigo <= 470 && posxinimigo >= 450) {
            if (posyinimigo <= 660 && posyinimigo >= 465) {
                posxinimigo += 5;
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 470 && posxinimigo >= 100) {
            if (posyinimigo <= 485 && posyinimigo >= 465) {
                posyinimigo -= 5;
                inimigo1.y = posyinimigo;
            }
        }
        //perso
        if (posxPerso <= 945 && posxPerso >= 770) {
            if (posyPerso <= 410 && posyPerso >= 400) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 890 && posxPerso >= 770) {
            if (posyPerso <= 250 && posyPerso >= 240) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 780 && posxPerso >= 770) {
            if (posyPerso <= 410 && posyPerso >= 240) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 640 && posxPerso >= 620) {
            if (posyPerso <= 345 && posyPerso >= 185) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 400 && posxPerso >= 380) {
            if (posyPerso <= 345 && posyPerso >= 185) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 640 && posxPerso >= 380) {
            if (posyPerso <= 345 && posyPerso >= 325) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 640 && posxPerso >= 380) {
            if (posyPerso <= 205 && posyPerso >= 185) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 900 && posxPerso >= 885) {
            if (posyPerso <= 410 && posyPerso >= 80) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 900 && posxPerso >= 885) {
            if (posyPerso <= 650 && posyPerso >= 485) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 1300 && posxPerso >= 910) {
            if (posyPerso <= 520 && posyPerso >= 455) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 1300 && posxPerso >= 955) {
            if (posyPerso <= 245 && posyPerso >= 200) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 955 && posxPerso >= 945) {
            if (posyPerso <= 410 && posyPerso >= 200) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (!portaalvf2aberta) {
            if (posxPerso <= 905 && posxPerso >= 885) {
                if (posyPerso <= 490 && posyPerso >= 405) {
                    posxPerso -= 5;
                    perso.x = posxPerso;
                }
            }
            if (posxPerso <= 955 && posxPerso >= 925) {
                if (posyPerso <= 490 && posyPerso >= 405) {
                    posxPerso += 5;
                    perso.x = posxPerso;
                }
            }
        }
        //inimigo

        if (posxinimigo <= 885 && posxinimigo >= 770) {
            if (posyinimigo <= 410 && posyinimigo >= 250) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 890 && posxinimigo >= 770) {
            if (posyinimigo <= 250 && posyinimigo >= 240) {
                if (atacando) {
                    posyinimigo -= 20;
                } else {
                    posyinimigo -= 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 780 && posxinimigo >= 770) {
            if (posyinimigo <= 410 && posyinimigo >= 240) {
                if (atacando) {
                    posxPerso -= 20;
                } else {
                    posxPerso -= 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 640 && posxinimigo >= 620) {
            if (posyinimigo <= 345 && posyinimigo >= 185) {
                if (atacando) {
                    posxinimigo += 20;
                } else {
                    posxinimigo += 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 400 && posxinimigo >= 380) {
            if (posyinimigo <= 345 && posyinimigo >= 185) {
                if (atacando) {
                    posxinimigo -= 20;
                } else {
                    posxinimigo -= 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 640 && posxinimigo >= 380) {
            if (posyinimigo <= 345 && posyinimigo >= 325) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 640 && posxinimigo >= 380) {
            if (posyinimigo <= 205 && posyinimigo >= 185) {
                if (atacando) {
                    posyinimigo -= 20;
                } else {
                    posyinimigo -= 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 900 && posxinimigo >= 885) {
            if (posyinimigo <= 410 && posyinimigo >= 80) {
                if (atacando) {
                    posxinimigo -= 20;
                } else {
                    posxinimigo -= 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 900 && posxinimigo >= 885) {
            if (posyinimigo <= 650 && posyinimigo >= 485) {
                if (atacando) {
                    posxinimigo -= 20;
                } else {
                    posxinimigo -= 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 1300 && posxinimigo >= 910) {
            if (posyinimigo <= 520 && posyinimigo >= 455) {
                if (atacando) {
                    posyinimigo -= 20;
                } else {
                    posyinimigo -= 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 1300 && posxinimigo >= 955) {
            if (posyinimigo <= 245 && posyinimigo >= 200) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 965 && posxinimigo >= 925) {
            if (posyinimigo <= 410 && posyinimigo >= 200) {
                if (atacando) {
                    posxinimigo += 20;
                } else {
                    posxinimigo += 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (!portaalvf2aberta) {
            if (posxinimigo <= 905 && posxinimigo >= 885) {
                if (posyinimigo <= 490 && posyinimigo >= 405) {
                    if (atacando) {
                        posxinimigo -= 20;
                    } else {
                        posxinimigo -= 5;
                    }
                    inimigo1.x = posxinimigo;
                }
            }
            if (posxinimigo <= 965 && posxinimigo >= 925) {
                if (posyinimigo <= 490 && posyinimigo >= 405) {
                    if (atacando) {
                        posxinimigo += 20;
                    } else {
                        posxinimigo += 5;
                    }
                    inimigo1.x = posxinimigo;
                }
            }
        }
    }
    if (fase == 3) {
        //perso
        if (posxPerso <= 1300 && posxPerso >= 980) {
            if (posyPerso <= 405 && posyPerso >= 300) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 985 && posxPerso >= 960) {
            if (posyPerso <= 530 && posyPerso >= 300) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (portaalv1f3aberta == false) {
            if (posxPerso <= 985 && posxPerso >= 960) {
                if (posyPerso <= 1500 && posyPerso >= 530) {
                    posxPerso += 5;
                    perso.x = posxPerso;
                }
            }
            if (posxPerso <= 965 && posxPerso >= 950) {
                if (posyPerso <= 1500 && posyPerso >= 530) {
                    posxPerso -= 5;
                    perso.x = posxPerso;
                }
            }
        }
        if (posxPerso <= 965 && posxPerso >= 900) {
            if (posyPerso <= 530 && posyPerso >= 10) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 605 && posxPerso >= 580) {
            if (posyPerso <= 510 && posyPerso >= 10) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 605 && posxPerso >= 370) {
            if (posyPerso <= 510 && posyPerso >= 480) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (portaalv2f3aberta == false) {
            if (posxPerso <= 310 && posxPerso >= 10) {
                if (posyPerso <= 510 && posyPerso >= 480) {
                    posyPerso += 5;
                    perso.y = posyPerso;
                }
            }
            if (posxPerso <= 310 && posxPerso >= 10) {
                if (posyPerso <= 495 && posyPerso >= 341) {
                    posyPerso -= 5;
                    perso.y = posyPerso;
                }
            }
        }
        if (posxPerso <= 400 && posxPerso >= 10) {
            if (posyPerso <= 355 && posyPerso >= 300) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 390 && posxPerso >= 370) {
            if (posyPerso <= 510 && posyPerso >= 300) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        //tiro
        if (tiroX <= 1300 && tiroX >= 980) {
            if (tiroY <= 405 && tiroY >= 300) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 985 && tiroX >= 960) {
            if (tiroY <= 530 && tiroY >= 300) {
                tirosaiudatela();
            }
        }
        if (portaalv1f3aberta == false) {
            if (tiroX <= 985 && tiroX >= 960) {
                if (tiroY <= 1500 && tiroY >= 530) {
                    tirosaiudatela();
                }
            }
            if (tiroX <= 965 && tiroX >= 950) {
                if (tiroY <= 1500 && tiroY >= 530) {
                    tirosaiudatela();
                }
            }
        }
        if (tiroX <= 965 && tiroX >= 900) {
            if (tiroY <= 530 && tiroY >= 10) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 605 && tiroX >= 580) {
            if (tiroY <= 510 && tiroY >= 10) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 605 && tiroX >= 370) {
            if (tiroY <= 510 && tiroY >= 480) {
                tirosaiudatela();
            }
        }
        if (portaalv2f3aberta == false) {
            if (tiroX <= 310 && tiroX >= 10) {
                if (tiroY <= 510 && tiroY >= 480) {
                    tirosaiudatela();
                }
            }
            if (tiroX <= 310 && tiroX >= 10) {
                if (tiroY <= 495 && tiroY >= 341) {
                    tirosaiudatela();
                }
            }
        }
        if (tiroX <= 400 && tiroX >= 10) {
            if (tiroY <= 355 && tiroY >= 300) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 390 && tiroX >= 370) {
            if (tiroY <= 510 && tiroY >= 300) {
                tirosaiudatela();
            }
        }
        //inimigo
        if (posxinimigo <= 1300 && posxinimigo >= 980) {
            if (posyinimigo <= 405 && posyinimigo >= 300) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 985 && posxinimigo >= 960) {
            if (posyinimigo <= 530 && posyinimigo >= 300) {
                if (atacando) {
                    posxinimigo += 20;
                } else {
                    posxinimigo += 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (portaalv1f3aberta == false) {
            if (posxinimigo <= 985 && posxinimigo >= 960) {
                if (posyinimigo <= 2000 && posyinimigo >= 530) {
                    if (atacando) {
                        posxinimigo += 20;
                    } else {
                        posxinimigo += 5;
                    }
                    inimigo1.x = posxinimigo;
                }
            }
            if (posxinimigo <= 975 && posxinimigo >= 900) {
                if (posyinimigo <= 2000 && posyinimigo >= 530) {
                    if (atacando) {
                        posxinimigo -= 20;
                    } else {
                        posxinimigo -= 5;
                    }
                    inimigo1.x = posxinimigo;
                }
            }
        }
        if (posxinimigo <= 965 && posxinimigo >= 900) {
            if (posyinimigo <= 530 && posyinimigo >= 10) {
                if (atacando) {
                    posxinimigo -= 20;
                } else {
                    posxinimigo -= 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 605 && posxinimigo >= 580) {
            if (posyinimigo <= 510 && posyinimigo >= 10) {
                if (atacando) {
                    posxinimigo += 20;
                } else {
                    posxinimigo += 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
        if (posxinimigo <= 605 && posxinimigo >= 370) {
            if (posyinimigo <= 510 && posyinimigo >= 480) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (portaalv2f3aberta == false) {
            if (posxinimigo <= 310 && posxinimigo >= 10) {
                if (posyinimigo <= 510 && posyinimigo >= 480) {
                    if (atacando) {
                        posyinimigo += 20;
                    } else {
                        posyinimigo += 5;
                    }
                    inimigo1.y = posyinimigo;
                }
            }
            if (posxinimigo <= 310 && posxinimigo >= 10) {
                if (posyinimigo <= 495 && posyinimigo >= 341) {
                    if (atacando) {
                        posyinimigo -= 20;
                    } else {
                        posyinimigo -= 5;
                    }
                    inimigo1.y = posyinimigo;
                }
            }
        }
        if (posxinimigo <= 400 && posxinimigo >= 10) {
            if (posyinimigo <= 355 && posyinimigo >= 300) {
                if (atacando) {
                    posyinimigo += 20;
                } else {
                    posyinimigo += 5;
                }
                inimigo1.y = posyinimigo;
            }
        }
        if (posxinimigo <= 390 && posxinimigo >= 370) {
            if (posyinimigo <= 510 && posyinimigo >= 300) {
                if (atacando) {
                    posxinimigo -= 20;
                } else {
                    posxinimigo -= 5;
                }
                inimigo1.x = posxinimigo;
            }
        }
    }
    if (fase == 4) {
        if (!eastereggdescoberto) {
            if (posxPerso >= 868) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        } else {
            if (posxPerso <= 900 && posxPerso >= 868) {
                if (posyPerso <= 575 && posyPerso >= 10) {
                    posxPerso -= 5;
                    perso.x = posxPerso;
                }
            }
        }
        if (posxPerso <= 1028 && posxPerso >= 888) {
            if (posyPerso <= 575 && posyPerso >= 500) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 1300 && posxPerso >= 1028) {
            if (posyPerso <= 160 && posyPerso >= 100) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 1028 && posxPerso >= 900) {
            if (posyPerso <= 575 && posyPerso >= 100) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        //pc1
        if (posxPerso <= 900 && posxPerso >= 658) {
            if (posyPerso <= 535 && posyPerso >= 500) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 900 && posxPerso >= 658) {
            if (posyPerso <= 420 && posyPerso >= 395) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 670 && posxPerso >= 658) {
            if (posyPerso <= 535 && posyPerso >= 395) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        //pc2
        if (posxPerso <= 448 && posxPerso >= 200) {
            if (posyPerso <= 535 && posyPerso >= 500) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 448 && posxPerso >= 200) {
            if (posyPerso <= 410 && posyPerso >= 395) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 448 && posxPerso >= 430) {
            if (posyPerso <= 535 && posyPerso >= 395) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        //pc3
        if (posxPerso <= 448 && posxPerso >= 200) {
            if (posyPerso <= 335 && posyPerso >= 315) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 448 && posxPerso >= 200) {
            if (posyPerso <= 215 && posyPerso >= 195) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 448 && posxPerso >= 430) {
            if (posyPerso <= 335 && posyPerso >= 195) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        //pc4
        if (posxPerso <= 900 && posxPerso >= 658) {
            if (posyPerso <= 335 && posyPerso >= 315) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 900 && posxPerso >= 658) {
            if (posyPerso <= 215 && posyPerso >= 195) {
                posyPerso -= 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 670 && posxPerso >= 658) {
            if (posyPerso <= 335 && posyPerso >= 195) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        //pcconsole
        if (posxPerso <= 758 && posxPerso >= 633) {
            if (posyPerso <= 165 && posyPerso >= 145) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (posxPerso <= 758 && posxPerso >= 738) {
            if (posyPerso <= 165 && posyPerso >= 80) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 655 && posxPerso >= 633) {
            if (posyPerso <= 165 && posyPerso >= 80) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }


        //tiro

        if (!eastereggdescoberto) {
            if (tiroX >= 868) {
                tirosaiudatela();
            }
        } else {
            if (tiroX <= 900 && tiroX >= 868) {
                if (tiroY <= 575 && tiroY >= 10) {
                    tirosaiudatela();
                }
            }
        }
        if (tiroX <= 1028 && tiroX >= 888) {
            if (tiroY <= 575 && tiroY >= 500) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 1300 && tiroX >= 1028) {
            if (tiroY <= 160 && tiroY >= 100) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 1028 && tiroX >= 900) {
            if (tiroY <= 575 && tiroY >= 100) {
                tirosaiudatela();
            }
        }
        //pc1
        if (tiroX <= 900 && tiroX >= 658) {
            if (tiroY <= 535 && tiroY >= 500) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 900 && tiroX >= 658) {
            if (tiroY <= 420 && tiroY >= 395) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 670 && tiroX >= 658) {
            if (tiroY <= 535 && tiroY >= 395) {
                tirosaiudatela();
            }
        }
        //pc2
        if (tiroX <= 448 && tiroX >= 200) {
            if (tiroY <= 535 && tiroY >= 500) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 448 && tiroX >= 200) {
            if (tiroY <= 410 && tiroY >= 395) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 448 && tiroX >= 430) {
            if (tiroY <= 535 && tiroY >= 395) {
                tirosaiudatela();
            }
        }
        //pc3
        if (tiroX <= 448 && tiroX >= 200) {
            if (tiroY <= 335 && tiroY >= 315) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 448 && tiroX >= 200) {
            if (tiroY <= 215 && tiroY >= 195) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 448 && tiroX >= 430) {
            if (tiroY <= 335 && tiroY >= 195) {
                tirosaiudatela();
            }
        }
        //pc4
        if (tiroX <= 900 && tiroX >= 658) {
            if (tiroY <= 335 && tiroY >= 315) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 900 && tiroX >= 658) {
            if (tiroY <= 215 && tiroY >= 195) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 670 && tiroX >= 658) {
            if (tiroY <= 335 && tiroY >= 195) {
                tirosaiudatela();
            }
        }
        //pcconsole
        if (tiroX <= 758 && tiroX >= 633) {
            if (tiroY <= 165 && tiroY >= 145) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 758 && tiroX >= 738) {
            if (tiroY <= 165 && tiroY >= 80) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 655 && tiroX >= 633) {
            if (tiroY <= 165 && tiroY >= 80) {
                tirosaiudatela();
            }
        }
    }
    if (fase == 5) {
        if (posxPerso <= 2000 && posxPerso >= 1000) {
            if (posyPerso <= 2000 && posyPerso >= 1) {
                posxPerso -= 5;
                perso.x = posxPerso;
            }
        }
        if (posxPerso <= 2000 && posxPerso >= 650) {
            if (posyPerso <= 300 && posyPerso >= 1) {
                posyPerso += 5;
                perso.y = posyPerso;
            }
        }
        if (!abriucofre) {
            if (posxPerso <= 2000 && posxPerso >= 1) {
                if (posyPerso <= 300 && posyPerso >= 1) {
                    posyPerso += 5;
                    perso.y = posyPerso;
                }
            }
        } else {
            if (posxPerso <= 480 && posxPerso >= 1) {
                if (posyPerso <= 500 && posyPerso >= 1) {
                    posxPerso += 5;
                    perso.x = posxPerso;
                }
            }
            if (posxPerso <= 480 && posxPerso >= 1) {
                if (posyPerso <= 500 && posyPerso >= 480) {
                    posyPerso += 5;
                    perso.y = posyPerso;
                }
            }
        }
        if (posxPerso <= 350 && posxPerso >= 1) {
            if (posyPerso <= 2000 && posyPerso >= 1) {
                posxPerso += 5;
                perso.x = posxPerso;
            }
        }
        //tiro
        if (tiroX <= 2000 && tiroX >= 1000) {
            if (tiroY <= 2000 && tiroY >= 1) {
                tirosaiudatela();
            }
        }
        if (tiroX <= 2000 && tiroX >= 650) {
            if (tiroY <= 300 && tiroY >= 1) {
                tirosaiudatela();
            }
        }
        if (!abriucofre) {
            if (tiroX <= 2000 && tiroX >= 1) {
                if (tiroY <= 300 && tiroY >= 1) {
                    tirosaiudatela();
                }
            }
        } else {
            if (tiroX <= 480 && tiroX >= 1) {
                if (tiroY <= 500 && tiroY >= 1) {
                    tirosaiudatela();
                }
            }
            if (tiroX <= 480 && tiroX >= 1) {
                if (tiroY <= 500 && tiroY >= 480) {
                    tirosaiudatela();
                }
            }
        }
        if (tiroX <= 350 && tiroX >= 1) {
            if (tiroY <= 2000 && tiroY >= 1) {
                tirosaiudatela();
            }
        }
    }
}
function detectapc() {
    try {
        if (perso.x < pc.x + 100 && perso.x > pc.x - 5) {
            if (perso.y < pc.y + 150 && perso.y > pc.y - 40) {
                apareceE();
                tocandoapc = true;
            } else {
                tocandoapc = false;
            }
        } else {
            tocandoapc = false;
        }
    } catch{ }
}
function detectaalavanca1() {
    try {
        if (perso.x < alv01f1.x + 100 && perso.x > alv01f1.x - 5) {
            if (perso.y < alv01f1.y + 120 && perso.y > alv01f1.y - 40) {
                apareceE();
                tocandoalv1 = true;
            } else {
                tocandoalv1 = false;
            }
        } else {
            tocandoalv1 = false;
        }
    } catch{ }

    try {
        if (perso.x < alv01f2.x + 100 && perso.x > alv01f2.x - 5) {
            if (perso.y < alv01f2.y + 120 && perso.y > alv01f2.y - 40) {
                apareceE();
                tocandoalv2 = true;
            } else {
                tocandoalv2 = false;
            }
        } else {
            tocandoalv2 = false;
        }
    } catch{ }
    try {
        if (perso.x < alv02f2.x + 100 && perso.x > alv02f2.x - 5) {
            if (perso.y < alv02f2.y + 120 && perso.y > alv02f2.y - 40) {
                apareceE();
                tocandoalv3 = true;
            } else {
                tocandoalv3 = false;
            }
        } else {
            tocandoalv3 = false;
        }
    } catch{ }
    try {
        if (perso.x < alv03f2.x + 100 && perso.x > alv03f2.x - 5) {
            if (perso.y < alv03f2.y + 120 && perso.y > alv03f2.y - 40) {
                apareceE();
                tocandoalv4 = true;
            } else {
                tocandoalv4 = false;
            }
        } else {
            tocandoalv4 = false;
        }
    } catch{ }
    try {
        if (perso.x < alv04f2.x + 100 && perso.x > alv04f2.x - 5) {
            if (perso.y < alv04f2.y + 120 && perso.y > alv04f2.y - 40) {
                apareceE();
                tocandoalv5 = true;
            } else {
                tocandoalv5 = false;
            }
        } else {
            tocandoalv5 = false;
        }
    } catch{ }
}
function verportaf1() {
    if (alv01f1ativada && f1link1 == "1-1") {
        f1concluida = true;
    } else {
        f1concluida = false;
    }
    if (f1concluida) {
        portaf1.animations.play('abrepf1');
        rodasomporta();
    } else {
        portaf1.animations.play('fechaf1');
        ativousomporta = false;
    }
}
function apagamenu() {
    menuMain.x = 7000;
    menuopcoes.x = 7000;
    menuconquistas.x = 7000;
    menuestatisticas.x = 7000;
    menuinstrucoes.x = 7000;
    menuitens.x = 7000;
}
function clicoumodsegundachance() {
    if (modsecondchanceQUANTIAnum >= 1) {
        if (secondchance) {
            modsecondchance.x = 3000;
            modsecondchanceDESATIVADO.x = 87;
            secondchance = false;
        } else {
            modsecondchance.x = 87;
            modsecondchanceDESATIVADO.x = 3000;
            secondchance = true;
        }
    } else {
        window.alert("! COMPRE MAIS MODIFICADORES NA LOJA DO SITE !");
    }
}
function clicoumodstarterpack() {
    if (modstarterpackQUANTIAnum >= 1) {
        if (starterpack) {
            modstarterpack.x = 3000;
            modstarterpackDESATIVADO.x = 187;
            starterpack = false;
        } else {
            modstarterpack.x = 187;
            modstarterpackDESATIVADO.x = 3000;
            starterpack = true;

            coleteinicial = false;
            modcoleteinicial.x = 3000;
            modcoleteinicialDESATIVADO.x = 87;

            pocaomanainicial = false;
            modpocadomanainicial.x = 3000;
            modpocadomanainicialDESATIVADO.x = 287;

            pocaovidainicial = false;
            modpocaohpinicial.x = 3000;
            modpocaohpinicialDESATIVADO.x = 187;
        }
    } else {
        window.alert("! COMPRE MAIS MODIFICADORES NA LOJA DO SITE !");
    }
}
function clicoumoddobropontos() {
    if (moddobropontosQUANTIAnum >= 1) {
        if (dobrodanodobropontos) {
            moddobropontos.x = 3000;
            moddobropontosDESATIVADO.x = 287;
            dobrodanodobropontos = false;
        } else {
            moddobropontos.x = 287;
            moddobropontosDESATIVADO.x = 3000;
            dobrodanodobropontos = true;
        }
    } else {
        window.alert("! COMPRE MAIS MODIFICADORES NA LOJA DO SITE !");
    }
}
function clicoumodcoleteinicial() {
    if (modcoleteinicialQUANTIAnum >= 1) {
        if (coleteinicial) {
            modcoleteinicial.x = 3000;
            modcoleteinicialDESATIVADO.x = 87;
            coleteinicial = false;
        } else {
            modcoleteinicial.x = 87;
            modcoleteinicialDESATIVADO.x = 3000;
            coleteinicial = true;
            starterpack = false;
            modstarterpack.x = 3000;
            modstarterpackDESATIVADO.x = 187;
        }
    } else {
        window.alert("! COMPRE MAIS MODIFICADORES NA LOJA DO SITE !");
    }
}
function clicoumodpocaohpinicial() {
    if (modpocaohpinicialQUANTIAnum >= 1) {
        if (pocaovidainicial) {
            modpocaohpinicial.x = 3000;
            modpocaohpinicialDESATIVADO.x = 187;
            pocaovidainicial = false;
        } else {
            modpocaohpinicial.x = 187;
            modpocaohpinicialDESATIVADO.x = 3000;
            pocaovidainicial = true;

            starterpack = false;
            modstarterpack.x = 3000;
            modstarterpackDESATIVADO.x = 187;
        }
    } else {
        window.alert("! COMPRE MAIS MODIFICADORES NA LOJA DO SITE !");
    }
}
function clicoumodpocaomanaincial() {
    if (modpocadomanainicialQUANTIAnum >= 1) {
        if (pocaomanainicial) {
            modpocadomanainicial.x = 3000;
            modpocadomanainicialDESATIVADO.x = 287;
            pocaomanainicial = false;
        } else {
            modpocadomanainicial.x = 287;
            modpocadomanainicialDESATIVADO.x = 3000;
            pocaomanainicial = true;

            starterpack = false;
            modstarterpack.x = 3000;
            modstarterpackDESATIVADO.x = 187;
        }
    } else {
        window.alert("! COMPRE MAIS MODIFICADORES NA LOJA DO SITE !");
    }
}
function carregamenu() {
    musicamenu = game.add.audio('musicamenu');
    musicamenu.loop = true;
    musicamenu.play();

    menuMain = game.add.sprite(0, 0, 'MENU', 0);

    modsecondchance = game.add.button(3000, 50, 'modsecondchance', clicoumodsegundachance, this);
    modsecondchanceDESATIVADO = game.add.button(87, 50, 'modsecondchanceDESATIVADO', clicoumodsegundachance, this);
    modstarterpack = game.add.button(3000, 50, 'modstarterpack', clicoumodstarterpack, this);
    modstarterpackDESATIVADO = game.add.button(187, 50, 'modstarterpackDESATIVADO', clicoumodstarterpack, this);
    moddobropontos = game.add.button(3000, 50, 'moddobropontos', clicoumoddobropontos, this);
    moddobropontosDESATIVADO = game.add.button(287, 50, 'moddobropontosDESATIVADO', clicoumoddobropontos, this);

    modcoleteinicial = game.add.button(3000, 145, 'modcoleteinicial', clicoumodcoleteinicial, this);
    modcoleteinicialDESATIVADO = game.add.button(87, 145, 'modcoleteinicialDESATIVADO', clicoumodcoleteinicial, this);
    modpocaohpinicial = game.add.button(3000, 145, 'modpocaohpinicial', clicoumodpocaohpinicial, this);
    modpocaohpinicialDESATIVADO = game.add.button(187, 145, 'modpocaohpinicialDESATIVADO', clicoumodpocaohpinicial, this);
    modpocadomanainicial = game.add.button(3000, 145, 'modpocadomanainicial', clicoumodpocaomanaincial, this);
    modpocadomanainicialDESATIVADO = game.add.button(287, 145, 'modpocadomanainicialDESATIVADO', clicoumodpocaomanaincial, this);

    if (modsecondchanceQUANTIAnum <= 9) {
        modsecondchanceQUANTIA = game.add.text(170, 110, `${modsecondchanceQUANTIAnum}`, estilotexto3);
    } else {
        modsecondchanceQUANTIA = game.add.text(153, 110, `${modsecondchanceQUANTIAnum}`, estilotexto3);
    }
    if (modcoleteinicialQUANTIAnum <= 9) {
        modcoleteinicialQUANTIA = game.add.text(170, 210, `${modcoleteinicialQUANTIAnum}`, estilotexto3);
    } else {
        modcoleteinicialQUANTIA = game.add.text(153, 210, `${modcoleteinicialQUANTIAnum}`, estilotexto3);
    }
    if (moddobropontosQUANTIAnum <= 9) {
        moddobropontosQUANTIA = game.add.text(370, 110, `${moddobropontosQUANTIAnum}`, estilotexto3);
    } else {
        moddobropontosQUANTIA = game.add.text(353, 110, `${moddobropontosQUANTIAnum}`, estilotexto3);
    }
    if (modpocadomanainicialQUANTIAnum <= 9) {
        modpocadomanainicialQUANTIA = game.add.text(370, 210, `${modpocadomanainicialQUANTIAnum}`, estilotexto3);
    } else {
        modpocadomanainicialQUANTIA = game.add.text(353, 210, `${modpocadomanainicialQUANTIAnum}`, estilotexto3);
    }
    if (modpocaohpinicialQUANTIAnum <= 9) {
        modpocaohpinicialQUANTIA = game.add.text(270, 210, `${modpocaohpinicialQUANTIAnum}`, estilotexto3);
    } else {
        modpocaohpinicialQUANTIA = game.add.text(253, 210, `${modpocaohpinicialQUANTIAnum}`, estilotexto3);
    }
    if (modstarterpackQUANTIAnum <= 9) {
        modstarterpackQUANTIA = game.add.text(270, 110, `${modstarterpackQUANTIAnum}`, estilotexto3);
    } else {
        modstarterpackQUANTIA = game.add.text(253, 110, `${modstarterpackQUANTIAnum}`, estilotexto3);
    }

    menuopcoes = game.add.sprite(0, 0, 'opcoes', 1);
    menuconquistas = game.add.sprite(0, 0, 'conquistas', 1);
    menuestatisticas = game.add.sprite(0, 0, 'estatisticas', 1);
    menuinstrucoes = game.add.sprite(0, 0, 'instrucoes', 1);
    menuitens = game.add.sprite(0, 0, 'itens', 1);

    btnopcoes = game.add.button(1087, 193, 'btnopcoes', abriropcoes, this);
    btnsair = game.add.button(3000, 613, 'btnsair', sair, this);
    btnitens = game.add.button(3000, 227, 'btnitens', acessaritens, this);
    btnestatisticas = game.add.button(3000, 293, 'btnestatisticas', acessarestatisticas, this);
    btnconquistas = game.add.button(3000, 360, 'btnconquistas', acessarconquistas, this);
    btniniciar = game.add.button(3000, 340, 'btniniciar', entraparaojogo, this);
    btninstrucoes = game.add.button(3000, 489, 'btninstrucoes', acessarinstrucoes, this);
    menuPjogo = game.add.sprite(0, 0, 'entrarnojogo', 6);
    creditos = game.add.sprite(5000, 0, 'creditos');
    btncreditos = game.add.button(3000, 427, 'btncreditos', acessarcreditos, this);

    if (tutorial) {
        btntutorialativo = game.add.button(1000, 600, 'btntutorialativo', clicoubtntutorialmenu, this);
        btntutorialinativo = game.add.button(3000, 600, 'btntutorialinativo', clicoubtntutorialmenu, this);
    } else {
        btntutorialativo = game.add.button(3000, 600, 'btntutorialativo', clicoubtntutorialmenu, this);
        btntutorialinativo = game.add.button(1000, 600, 'btntutorialinativo', clicoubtntutorialmenu, this);
    }

    menuPjogo.animations.add('entranojogo', [0, 1, 2, 3, 4, 5, 6], 15);

    menuinstrucoes.animations.add('abreinstrucoes', [0], 24);
    menuinstrucoes.animations.add('someinstrucoes', [1], 24);

    menuconquistas.animations.add('abreconquistas', [0], 24);
    menuconquistas.animations.add('someconquistas', [1], 24);

    menuestatisticas.animations.add('abreestatisticas', [0], 24);
    menuestatisticas.animations.add('someestatisticas', [1], 24);

    menuitens.animations.add('abreMenuitens', [0], 24);
    menuitens.animations.add('someMenuitens', [1], 24)

    menuMain.animations.add('abreOpcoes', [0, 1, 2, 3, 4], 10);
    menuMain.animations.add('fechaOpcoes', [4, 3, 2, 1, 0], 10);

    menuopcoes.animations.add('exibeopcoes', [0], 24);
    menuopcoes.animations.add('someopcoes', [1], 24);
}
function clicoubtntutorialmenu() {
    if (tutorial) {
        tutorial = false;
        btntutorialativo.x = 3000;
        btntutorialinativo.x = 1000;
    } else {
        tutorial = true;
        btntutorialinativo.x = 3000;
        btntutorialativo.x = 1000;
    }
}
function acessarcreditos() {
    opSelected = 4;
}
function entraparaojogo() {
    document.getElementById("botoesredessoc").style.left = "1000%";
    document.getElementById("botaovoltar").style.left = "1000%";
    menuPjogo.animations.play('entranojogo');
    animar = true;
    btniniciar.x = 3000;
    btntutorialativo.x = 3000;
    btntutorialinativo.x = 3000;
    btnopcoes.x = 3000;
    modcoleteinicial.x = 3000;
    modcoleteinicialDESATIVADO.x = 3000;
    moddobropontos.x = 3000;
    moddobropontosDESATIVADO.x = 3000;
    modpocadomanainicial.x = 3000;
    modpocadomanainicialDESATIVADO.x = 3000;
    modpocaohpinicial.x = 3000;
    modpocaohpinicialDESATIVADO.x = 3000;
    modsecondchance.x = 3000;
    modsecondchanceDESATIVADO.x = 3000;
    modstarterpack.x = 3000;
    modstarterpackDESATIVADO.x = 3000;

    modcoleteinicialQUANTIA.x = 3000;

    moddobropontosQUANTIA.x = 3000;

    modpocadomanainicialQUANTIA.x = 3000;

    modpocaohpinicialQUANTIA.x = 3000;

    modsecondchanceQUANTIA.x = 3000;

    modstarterpackQUANTIA.x = 3000;
    //......
    if (secondchance) {
        modsecondchanceQUANTIAnum -= 1;
    }
    if (dobrodanodobropontos) {
        moddobropontosQUANTIAnum -= 1;
    }
    if (starterpack) {
        modstarterpackQUANTIAnum -= 1;
    }
    if (coleteinicial) {
        modcoleteinicialQUANTIAnum -= 1;
    }
    if (pocaomanainicial) {
        modpocadomanainicialQUANTIAnum -= 1;
    }
    if (pocaovidainicial) {
        modpocaohpinicialQUANTIAnum -= 1;
    }
    var zap = new Vue({
        el: '#botoesredessoc',
        data: {
            id: "",
            idusuario: "",
            quantidadesegundachance: "",
            quantidadestarterpack: "",
            quantidadedobrodano: "",
            quantidadecoleteinicial: "",
            quantidadepocaomana: "",
            quantidadepocaohp: ""
        }, methods: {
            salvarusado: function () {
                const token = window.sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `${token}`;
                axios.post('api/modificador/0/0', {
                    quantidadesegundachance: modsecondchanceQUANTIAnum,
                    quantidadestarterpack: modstarterpackQUANTIAnum,
                    quantidadedobrodano: moddobropontosQUANTIAnum,
                    quantidadecoleteinicial: modcoleteinicialQUANTIAnum,
                    quantidadepocaomana: modpocadomanainicialQUANTIAnum,
                    quantidadepocaohp: modpocaohpinicialQUANTIAnum,
                    id: idmods,
                    idusuario: idusuarios
                }).then({
                }).catch(function (error) {
                    console.log(`Ocorreu um erro ao salvar: ${error}`);
                });
            }
        }, mounted() {
            this.salvarusado()
        }
    })
    fase = 1;
}
function acessarinstrucoes() {
    opSelected = 5;
}
function acessarconquistas() {
    opSelected = 3;
}
function acessarestatisticas() {
    opSelected = 2;
}
function acessaritens() {
    opSelected = 1;
}
function sair() {
    if (opSelected == 0) {
        opSelected = -1;
        menuMain.animations.play('fechaOpcoes');
        animar = true;
    } else {
        opSelected = 0;
    }
}
function abriropcoes() {
    opSelected = 0;
    document.getElementById("botoesredessoc").style.left = "1000%";
    document.getElementById("botaovoltar").style.left = "1000%";
    menuMain.animations.play('abreOpcoes');
    btnopcoes.x = 2000;
    btntutorialativo.x = 3000;
    btntutorialinativo.x = 3000;
    btniniciar.x = 3000;
    modcoleteinicial.x = 3000;
    modcoleteinicialDESATIVADO.x = 3000;
    moddobropontos.x = 3000;
    moddobropontosDESATIVADO.x = 3000;
    modpocadomanainicial.x = 3000;
    modpocadomanainicialDESATIVADO.x = 3000;
    modpocaohpinicial.x = 3000;
    modpocaohpinicialDESATIVADO.x = 3000;
    modsecondchance.x = 3000;
    modsecondchanceDESATIVADO.x = 3000;
    modstarterpack.x = 3000;
    modstarterpackDESATIVADO.x = 3000;
    modstarterpackDESATIVADO.x = 3000;

    modcoleteinicialQUANTIA.x = 3000;

    moddobropontosQUANTIA.x = 3000;

    modpocadomanainicialQUANTIA.x = 3000;

    modpocaohpinicialQUANTIA.x = 3000;

    modsecondchanceQUANTIA.x = 3000;

    modstarterpackQUANTIA.x = 3000;
    animar = true;
}
setInterval(function () {
    if (tempoanimaMenuOpcoes > 0 && animar) {
        tempoanimaMenuOpcoes -= 1;
    } else {
        animar = false;
        tempoanimaMenuOpcoes = 100;
    }
}, 1)
function subircreditos() {
    if (opSelected == 4 && tempoCreditos > 0 && rodandocreditos) {
        tempoCreditos -= 1;
        posycreditos -= 1;
        creditos.y = posycreditos;
    } else {
        rodandocreditos = false;
        posycreditos = 0;
        tempoCreditos = 3300;
        creditos.x = 3000;
        creditos.y = 0;
    }
}
function verificaopcoes() {
    if (opSelected == 0 && !animar) {
        menuopcoes.animations.play('exibeopcoes');
        btnsair.x = 1150;
        btnitens.x = 854;
        btnestatisticas.x = 854;
        btnconquistas.x = 854;
        btninstrucoes.x = 854;
        btncreditos.x = 854;
    }
    if (opSelected == -1) {
        menuopcoes.animations.play('someopcoes');
    }
    if (opSelected == -1 && !animar) {
        document.getElementById("botoesredessoc").style.left = "83%";
        document.getElementById("botaovoltar").style.left = "5px";
        btnopcoes.x = 1087;
        btniniciar.x = 109;
        if (tutorial) {
            btntutorialativo.x = 1000;
        } else {
            btntutorialinativo.x = 1000;
        }
        if (coleteinicial) {
            modcoleteinicial.x = 87;
            modcoleteinicialDESATIVADO.x = 3000;
        } else {
            modcoleteinicial.x = 3000;
            modcoleteinicialDESATIVADO.x = 87;
        }

        if (dobrodanodobropontos) {
            moddobropontos.x = 287;
            moddobropontosDESATIVADO.x = 3000;
        } else {
            moddobropontos.x = 3000;
            moddobropontosDESATIVADO.x = 287;
        }

        if (pocaomanainicial) {
            modpocadomanainicial.x = 287;
            modpocadomanainicialDESATIVADO.x = 3000;
        } else {
            modpocadomanainicial.x = 3000;
            modpocadomanainicialDESATIVADO.x = 287;
        }

        if (pocaovidainicial) {
            modpocaohpinicial.x = 187;
            modpocaohpinicialDESATIVADO.x = 3000;
        } else {
            modpocaohpinicial.x = 3000;
            modpocaohpinicialDESATIVADO.x = 187;
        }

        if (secondchance) {
            modsecondchance.x = 87;
            modsecondchanceDESATIVADO.x = 3000;
        } else {
            modsecondchance.x = 3000;
            modsecondchanceDESATIVADO.x = 87;
        }

        if (starterpack) {
            modstarterpack.x = 187;
            modstarterpackDESATIVADO.x = 3000;
        } else {
            modstarterpack.x = 3000;
            modstarterpackDESATIVADO.x = 187;
        }
        if (modsecondchanceQUANTIAnum <= 9) {
            modsecondchanceQUANTIA.x = 170;
        } else {
            modsecondchanceQUANTIA.x = 153;
        }
        if (modcoleteinicialQUANTIAnum <= 9) {
            modcoleteinicialQUANTIA.x = 170;
        } else {
            modcoleteinicialQUANTIA.x = 153;
        }
        if (moddobropontosQUANTIAnum <= 9) {
            moddobropontosQUANTIA.x = 370;
        } else {
            moddobropontosQUANTIA.x = 353;
        }
        if (modpocadomanainicialQUANTIAnum <= 9) {
            modpocadomanainicialQUANTIA.x = 370;
        } else {
            modpocadomanainicialQUANTIA.x = 353;
        }
        if (modpocaohpinicialQUANTIAnum <= 9) {
            modpocaohpinicialQUANTIA.x = 270;
        } else {
            modpocaohpinicialQUANTIA.x = 253;
        }
        if (modstarterpackQUANTIAnum <= 9) {
            modstarterpackQUANTIA.x = 270;
        } else {
            modstarterpackQUANTIA.x = 253;
        }
    }
    if (opSelected == -1 && animar) {
        btnsair.x = 3000;
        btnitens.x = 3000;
        btnestatisticas.x = 3000;
        btnconquistas.x = 3000;
        btninstrucoes.x = 3000;
        btncreditos.x = 3000;
    }
    if (opSelected == 1) {
        menuitens.animations.play('abreMenuitens');
        btnitens.x = 3000;
        btnestatisticas.x = 3000;
        btnconquistas.x = 3000;
        btninstrucoes.x = 3000;
        btncreditos.x = 3000;
    } else {
        menuitens.animations.play('someMenuitens');
    }
    if (opSelected == 2) {
        menuestatisticas.animations.play('abreestatisticas');
        btnitens.x = 3000;
        btnestatisticas.x = 3000;
        btnconquistas.x = 3000;
        btninstrucoes.x = 3000;
        btncreditos.x = 3000;
        if(!carregouplacar){
            carregaplacar();
            carregouplacar = true;
        }
    } else {
        try {
            txtposicao1.x=5000;
            txtposicao2.x=5000;
            txtposicao3.x=5000;
            txtposicao4.x=5000;
            txtposicao5.x=5000;
            txtposicao6.x=5000;
            txtposicao7.x=5000;
            txtposicao8.x=5000;
            txtposicao9.x=5000;
            txtposicao10.x=5000;
            txtpontuacaopessoal.x=5000;
            txtcolocacaopesoal.x=5000;
            txtnomepontuacao.x=5000;
        } catch (error) {}
        txtposicao1=null;
        txtposicao2=null;
        txtposicao3=null;
        txtposicao4=null;
        txtposicao5=null;
        txtposicao6=null;
        txtposicao7=null;
        txtposicao8=null;
        txtposicao9=null;
        txtposicao10=null;
        txtpontuacaopessoal=null;
        txtcolocacaopesoal=null;
        txtnomepontuacao=null;
        carregouplacar = false;
        menuestatisticas.animations.play('someestatisticas');
    }
    if (opSelected == 3) {
        menuconquistas.animations.play('abreconquistas');
        btnitens.x = 3000;
        btnestatisticas.x = 3000;
        btnconquistas.x = 3000;
        btninstrucoes.x = 3000;
        btncreditos.x = 3000;
        //.....
        if (!conquistascarregadas) {
            if (conquista1) {
                conquista1imgativacao = game.add.sprite(630, 167, 'conquistasativadooun', 1);
            } else {
                conquista1imgativacao = game.add.sprite(630, 167, 'conquistasativadooun', 0);
            }

            if (conquista2) {
                conquista2imgativacao = game.add.sprite(630, 227 - 2, 'conquistasativadooun', 1);
            } else {
                conquista2imgativacao = game.add.sprite(630, 227 - 2, 'conquistasativadooun', 0);
            }

            if (conquista3) {
                conquista3imgativacao = game.add.sprite(630, 287 - 4, 'conquistasativadooun', 1);
            } else {
                conquista3imgativacao = game.add.sprite(630, 287 - 4, 'conquistasativadooun', 0);
            }

            if (conquista4) {
                conquista4imgativacao = game.add.sprite(630, 347 - 8, 'conquistasativadooun', 1);
            } else {
                conquista4imgativacao = game.add.sprite(630, 347 - 8, 'conquistasativadooun', 0);
            }

            if (conquista5) {
                conquista5imgativacao = game.add.sprite(630, 407 - 11, 'conquistasativadooun', 1);
            } else {
                conquista5imgativacao = game.add.sprite(630, 407 - 11, 'conquistasativadooun', 0);
            }

            if (conquista6) {
                conquista6imgativacao = game.add.sprite(630, 467 - 16, 'conquistasativadooun', 1);
            } else {
                conquista6imgativacao = game.add.sprite(630, 467 - 16, 'conquistasativadooun', 0);
            }

            if (conquista7) {
                conquista7imgativacao = game.add.sprite(630, 527 - 20, 'conquistasativadooun', 1);
            } else {
                conquista7imgativacao = game.add.sprite(630, 527 - 20, 'conquistasativadooun', 0);
            }
            conquistascarregadas = true;
        }
    } else {
        menuconquistas.animations.play('someconquistas');
        try {
            conquista1imgativacao.x = 5000;
            conquista2imgativacao.x = 5000;
            conquista3imgativacao.x = 5000;
            conquista4imgativacao.x = 5000;
            conquista5imgativacao.x = 5000;
            conquista6imgativacao.x = 5000;
            conquista7imgativacao.x = 5000;
            conquistascarregadas = false;
        } catch{ }
    }
    if (opSelected == 4) {
        if (!rodandocreditos) {
            posycreditos = 0;
        }
        rodandocreditos = true;
        if (rodandocreditos) {
            creditos.x = 0
        }
        subircreditos();
        btnitens.x = 3000;
        btnestatisticas.x = 3000;
        btnconquistas.x = 3000;
        btninstrucoes.x = 3000;
        btnsair.x = 3000;
        btncreditos.x = 3000;
        if (!rodandocreditos) {
            opSelected = 0;
        }
    } else {
        tempoCreditos = 3300;
        creditos.x = 3000;
    }
    if (opSelected == 5) {
        menuinstrucoes.animations.play('abreinstrucoes');
        btnitens.x = 3000;
        btnestatisticas.x = 3000;
        btnconquistas.x = 3000;
        btninstrucoes.x = 3000;
        btncreditos.x = 3000;
    } else {
        menuinstrucoes.animations.play('someinstrucoes');
    }
}
function verlinkf1() {
    if (f1link1 == "0-0") {
        linksimg.animations.play('somelink');
    }
    if (f1link1 == "1-1") {
        linksimg.animations.play('linkreto');
    }
}
function sairtelapc() {
    pcativo = false;
    telapcbase.animations.play('sometela');
    btnsairtelapc.x = 3000;
    if (fase == 1) {
        btnalv1.x = 3000;
        btnporta1.x = 3000;
        linksimg.x = 3000;
    }
    if (fase == 2) {
        f2btn1.x = 3000;
        f2btn2.x = 3000;
        f2btn3.x = 3000;
        f2btnfixo.x = 3000;
        f2btnporta.x = 3000;
        f2btnportafinal.x = 3000;
    }
    if (fase == 3) {
        telapciconsf3.x = 3000;
        btnalavanca1f3.x = 3000;
        btnalavanca2f3.x = 3000;
        btnreator.x = 3000;
        btnporta2f3.x = 3000;
    }
    if (fase == 4) {
        f4btn0.x = 3000;
        f4btn1.x = 3000;
        f4btn2.x = 3000;
        f4btn3.x = 3000;
        f4btn4.x = 3000;
        f4btn5.x = 3000;
        f4btn6.x = 3000;
        f4btn7.x = 3000;
        f4btn8.x = 3000;
        f4btn9.x = 3000;
        f4btnenter.x = 3000;
        f4btncancelar.x = 3000;
        codeinsert.x = 3000;
        inputcodigo.x = 3000;
        telapc1.animations.play('sometela');
        telapc2.animations.play('sometela');
        telapc3.animations.play('sometela');
        telapc4.animations.play('sometela');
    }
}
function verificaportasabertasf3() {
    if (portaalv1f3aberta == true) {
        portaalv1f3.animations.play('portaalv1f3aberta');
    } else {
        portaalv1f3.animations.play('portaalv1f3fechada');
    }
    if (portaalv2f3aberta == true) {
        portaalv2f3.animations.play('portaalv2f3aberta');
    } else {
        portaalv2f3.animations.play('portaalv2f3fechada');
    }
}
function verificareator() {
    if (temporeator >= 1500) {
        reator.animations.play('reator1');
    }
    if (temporeator < 1300 && temporeator >= 900) {
        reator.animations.play('reator2');
    }
    if (temporeator < 900 && temporeator >= 500) {
        reator.animations.play('reator3');
    }
    if (temporeator < 500 && temporeator > 0) {
        reator.animations.play('reator4');
    }
    if (temporeator <= 0 && !explodiureator) {
        reator.animations.play('reator5');
        explodiureator = true;
        expreator.x = 0;
        expreator.animations.play('explosao');
        vida = 0;
        try {
            vidainimigo1 = 0;
        } catch{ }
    }
}
setInterval(function () {
    if (portaalv1f3aberta) {
        reatorativado = true;
    }
    if (reatorativado && !alv02f2ativada && !abadomenuativada) {
        temporeator -= 1;
    }
    if (alv02f2ativada && temporeator > 0) {
        temporeator += 1;
        reatorativado = false;
    }
    if (temporeator > 1500) {
        temporeator = 1500;
    }
    if (temporeator < 0) {
        temporeator = 0;
    }
}, 10)
function verificaeastreegg() {
    if (codigoenter == "83764837") {
        eastereggdescoberto = true;
    }
    if (eastereggdescoberto) {
        negocioparacobrirsegredo.animations.play('abre');
        pontuacaoingame.x = 5000;
        pontuacaoingametxt.x = 5000;
    }
}
function carregafase5() {
    fundof5 = game.add.sprite(0, 0, 'fundof5');
    cofre = game.add.sprite(0, 0, 'cofre', 0);
    cofre.animations.add('abre', [0, 1, 2], 3);
    carta = game.add.sprite(300, 100, 'carta', 1);
    carta.animations.add('abre', [0], 24);
}
function carregafase4() {
    fundof4 = game.add.sprite(0, 0, 'fundof4'); botaitensinabarra
    if (slot1 == 3 || slot2 == 3 || slot2 == 3 || slot2 == 3) {

    } else {
        botaPOCAO_HP(1063, 245);
    }
    if (slot1 == 5 || slot2 == 5 || slot2 == 5 || slot2 == 5) {

    } else {
        botaPOCAO_MANA(1140, 245);
    }
    if (slot1 == 4 || slot2 == 4 || slot2 == 4 || slot2 == 4) {

    } else {
        botaCONVERSOR(1193, 245);
    }
    negocioparacobrirsegredo = game.add.sprite(0, 0, 'negocioparacobrirsegredo', 0);
    negocioparacobrirsegredo.animations.add('abre', [1], 24);
    pcf401 = game.add.sprite(210, 250, 'pcf4', 0);
    pcf401.animations.add('animapc', [0, 1, 2, 3, 4], 7);

    pcf402 = game.add.sprite(210, 450, 'pcf4', 3);
    pcf402.animations.add('animapc', [3, 4, 0, 1, 2], 7);

    pcf403 = game.add.sprite(663, 250, 'pcf4', 1);
    pcf403.animations.add('animapc', [1, 2, 3, 4, 0], 7);

    pcf404 = game.add.sprite(663, 450, 'pcf4', 0);
    pcf404.animations.add('animapc', [0, 1, 2, 3, 4], 7);

    portaf4 = game.add.sprite(0, 0, 'portaf4', 0);
    portaf4.animations.add('abreporta', [1], 24);
    portaf4.animations.add('fechaporta', [0], 24);
}
function verificaportaf4() {
    if (f4concluida) {
        portaf4.animations.play('abreporta');
        rodasomporta();
    } else {
        portaf4.animations.play('fechaporta');
        ativousomporta = false;
    }
}
setInterval(function () {
    if (fase == 4 && fase4carregada) {
        try {
            pcf401.animations.play('animapc');
        } catch{ }
        try {
            pcf402.animations.play('animapc');
        } catch{ }
        try {
            pcf403.animations.play('animapc');
        } catch{ }
        try {
            pcf404.animations.play('animapc');
        } catch{ }
    }
}, 10)
function verificatocandopcsf4() {
    try {
        if (perso.x < pcf401.x + 235 && perso.x > pcf401.x) {
            if (perso.y < pcf401.y + 140 && perso.y > pcf401.y) {
                apareceE();
                tocandopc01f4 = true;
            } else {
                tocandopc01f4 = false;
            }
        } else {
            tocandopc01f4 = false;
        }
    } catch{ }
    try {
        if (perso.x < pcf402.x + 235 && perso.x > pcf402.x) {
            if (perso.y < pcf402.y + 140 && perso.y > pcf402.y) {
                apareceE();
                tocandopc02f4 = true;
            } else {
                tocandopc02f4 = false;
            }
        } else {
            tocandopc02f4 = false;
        }
    } catch{ }
    try {
        if (perso.x < pcf403.x + 235 && perso.x > pcf403.x) {
            if (perso.y < pcf403.y + 140 && perso.y > pcf403.y) {
                apareceE();
                tocandopc03f4 = true;
            } else {
                tocandopc03f4 = false;
            }
        } else {
            tocandopc03f4 = false;
        }
    } catch{ }
    try {
        if (perso.x < pcf404.x + 235 && perso.x > pcf404.x) {
            if (perso.y < pcf404.y + 140 && perso.y > pcf404.y) {
                apareceE();
                tocandopc04f4 = true;
            } else {
                tocandopc04f4 = false;
            }
        } else {
            tocandopc04f4 = false;
        }
    } catch{ }
}
function carregatelspc4() {
    telapcbase = game.add.sprite(0, 0, 'telapcbase', 1);
    telapcbase.animations.add('sometela', [1], 4);
    telapcbase.animations.add('aparecetela', [1, 0], 4);

    telapc1 = game.add.sprite(0, 0, 'telapc1', 1);
    telapc1.animations.add('sometela', [1], 4);
    telapc1.animations.add('aparecetela', [1, 0], 4);

    telapc2 = game.add.sprite(0, 0, 'telapc2', 1);
    telapc2.animations.add('sometela', [1], 4);
    telapc2.animations.add('aparecetela', [1, 0], 4);

    telapc3 = game.add.sprite(0, 0, 'telapc3', 1);
    telapc3.animations.add('sometela', [1], 4);
    telapc3.animations.add('aparecetela', [1, 0], 4);

    telapc4 = game.add.sprite(0, 0, 'telapc4', 1);
    telapc4.animations.add('sometela', [1], 4);
    telapc4.animations.add('aparecetela', [1, 0], 4);

    btnsairtelapc = game.add.button(3000, 614, 'btnsairtelapc', sairtelapc, this);
    f4btn0 = game.add.button(3000, 500, 'f4btn0', clicouf4btn0, this);
    f4btn2 = game.add.button(3000, 400, 'f4btn2', clicouf4btn2, this);
    f4btn3 = game.add.button(3000, 400, 'f4btn3', clicouf4btn3, this);
    f4btn4 = game.add.button(3000, 300, 'f4btn4', clicouf4btn4, this);
    f4btn5 = game.add.button(3000, 300, 'f4btn5', clicouf4btn5, this);
    f4btn6 = game.add.button(3000, 300, 'f4btn6', clicouf4btn6, this);
    f4btn7 = game.add.button(3000, 200, 'f4btn7', clicouf4btn7, this);
    f4btn8 = game.add.button(3000, 200, 'f4btn8', clicouf4btn8, this);
    f4btn9 = game.add.button(3000, 200, 'f4btn9', clicouf4btn9, this);
    f4btn1 = game.add.button(3000, 400, 'f4btn1', clicouf4btn1, this);
    f4btnenter = game.add.button(3000, 400, 'f4btnenter', clicouf4btnenter, this);
    f4btncancelar = game.add.button(3000, 300, 'f4btncancelar', clicouf4btncancelar, this);
    inputcodigo = game.add.text(3000, 210, '', estilotexto);
    codeinsert = game.add.sprite(3000, 200, 'codeinsert');
    codecoreto = game.add.sprite(3000, 0, 'CORRECT');
    codeerrado = game.add.sprite(3000, 0, 'ERROR');
}
function clicouf4btn0() {
    if (codigo.length < 10) {
        codigo = codigo + "0";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btn1() {
    if (codigo.length < 10) {
        codigo = codigo + "1";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btn2() {
    if (codigo.length < 10) {
        codigo = codigo + "2";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btn3() {
    if (codigo.length < 10) {
        codigo = codigo + "3";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btn4() {
    if (codigo.length < 10) {
        codigo = codigo + "4";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btn5() {
    if (codigo.length < 10) {
        codigo = codigo + "5";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btn6() {
    if (codigo.length < 10) {
        codigo = codigo + "6";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btn7() {
    if (codigo.length < 10) {
        codigo = codigo + "7";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btn8() {
    if (codigo.length < 10) {
        codigo = codigo + "8";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btn9() {
    if (codigo.length < 10) {
        codigo = codigo + "9";
        inputcodigo.setText(`${codigo}`);
    }
}
function clicouf4btncancelar() {
    codigo = "";
    inputcodigo.setText(`${codigo}`);
}
function clicouf4btnenter() {
    codigoenter = codigo;
    codigo = "";
    inputcodigo.setText(`${codigo}`);
    checaconclusaof4();
    verificaeastreegg();
    if ((codigoenter != "11440940" && codigoenter != "83764837") && tempomensagem >= 0) {
        codeerrado.x = 0;
        mensagem = true;
    } else {
        codeerrado.x = 3000;
    }
    if ((codigoenter == "11440940" || codigoenter == "83764837") && tempomensagem >= 0) {
        codecoreto.x = 0;
        mensagem = true;
    } else {
        codecoreto.x = 3000;
    }
}
setInterval(function () {
    if (fase == 4) {
        if (mensagem && tempomensagem >= 0) {
            tempomensagem -= 1;
        } else {
            codecoreto.x = 3000;
            codeerrado.x = 3000;
            tempomensagem = 200;
            mensagem = false;
        }
    }
}, 1)
function carregafase3() {
    fundof3 = game.add.sprite(0, 0, 'fundof3');
    portafinalf3 = game.add.sprite(0, 0, 'portafinalf3', 0);
    reator = game.add.sprite(983, 15, 'reator', 0);
    reator.animations.add('reator1', [0], 24);
    reator.animations.add('reator2', [1], 24);
    reator.animations.add('reator3', [2], 24);
    reator.animations.add('reator4', [3], 24);
    reator.animations.add('reator5', [4], 24);

    portafinalf3.animations.add('portafinalf3aberta', [1], 24);
    portafinalf3.animations.add('portafinalf3fechada', [0], 24);

    portaalv1f3 = game.add.sprite(0, 0, 'portaalv1f3', 0);
    portaalv1f3.animations.add('portaalv1f3aberta', [1], 24);
    portaalv1f3.animations.add('portaalv1f3fechada', [0], 24);
    portaalv2f3 = game.add.sprite(0, 0, 'portaalv2f3', 0);
    portaalv2f3.animations.add('portaalv2f3aberta', [1], 24);
    portaalv2f3.animations.add('portaalv2f3fechada', [0], 24);
}
function carregafase2() {
    fundofase1 = game.add.sprite(0, 0, 'fundof2');
    portaalvf2 = game.add.sprite(0, 0, 'portaalvf2', 0);
    portaalvf2.animations.add('abrepalvf2', [1], 24);
    portaalvf2.animations.add('fechapalvf2', [0], 24);
    portafinalf2 = game.add.sprite(0, 0, 'portafinalf2', 1);
    portafinalf2.animations.add('abreportafinalf2', [0], 24);
    portafinalf2.animations.add('fechaportafinalf2', [1], 24);
}
function fase2checaportaalvaberta() {
    if (portaalvf2aberta) {
        portaalvf2.animations.play('abrepalvf2');
    }
    if (!portaalvf2aberta) {
        portaalvf2.animations.play('fechapalvf2');
    }
}
function carregafase1() {
    loopiniciomusicaprincipal = game.add.audio('inicioloopmusicaprincipal');
    loopiniciomusicaprincipal.totalDuration = 32;
    loopiniciomusicaprincipal.play();
    inicioumusica = false;
    fundofase1 = game.add.sprite(0, 0, 'fundof1');
    parede01f1 = game.add.sprite(0, 0, 'parede01f1');
    portaf1 = game.add.sprite(0, 0, 'porta', 1);
    portaf1.animations.add('abrepf1', [0], 4);
    portaf1.animations.add('fechaf1', [1], 4);
}
function carregatelspc3() {
    telapcbase = game.add.sprite(0, 0, 'telapcbase', 1);
    telapcbase.animations.add('sometela', [0, 1], 4);
    telapcbase.animations.add('aparecetela', [1, 0], 4);
    btnsairtelapc = game.add.button(3000, 614, 'btnsairtelapc', sairtelapc, this);
    telapciconsf3 = game.add.sprite(3000, 370, 'telapciconsf3');
    btnalavanca1f3 = game.add.button(3000, 254, 'f2btn1', f3btn1clicado, this);
    btnalavanca2f3 = game.add.button(3000, 314, 'f2btn2', f3btn2clicado, this);
    btnreator = game.add.button(3000, 254, 'btnreator', f3btnreatorclicado, this);
    btnporta2f3 = game.add.button(3000, 314, 'btnporta2', f3btnportaclicado, this);
    linksbtn1 = game.add.sprite(3000, -80, 'linksbtn1', 0);
    linksbtn1.animations.add('1-2', [0], 24);
    linksbtn1.animations.add('1-1', [1], 24);
    linksbtn2 = game.add.sprite(3000, -80, 'linksbtn2', 0);
    linksbtn2.animations.add('2-2', [1], 24);
    linksbtn2.animations.add('2-1', [0], 24);
}
function verlinksf3() {
    if (pcativo) {
        if (f3btn1link == "1-2") {
            linksbtn1.x = 4;
            linksbtn1.animations.play('1-2');
        }
        if (f3btn1link == "1-1") {
            linksbtn1.x = 4;
            linksbtn1.animations.play('1-1');
        }
        if (f3btn1link == "") {
            linksbtn1.x = 3000;
        }

        if (f3btn2link == "2-2") {
            linksbtn2.x = 4;
            linksbtn2.animations.play('2-2');
        }
        if (f3btn2link == "2-1") {
            linksbtn2.x = 4;
            linksbtn2.animations.play('2-1');
        }
        if (f3btn2link == "") {
            linksbtn2.x = 3000;
        }
    } else {
        linksbtn1.x = 3000;
        linksbtn2.x = 3000;
    }
}
function f3btnreatorclicado() {
    if (f3btnclicado == "1") {
        f3btn1link = "1-2";
    }
    if (f3btnclicado == "2") {
        f3btn2link = "2-2";
    }
}
function f3btnportaclicado() {
    if (f3btnclicado == "1") {
        f3btn1link = "1-1";
    }
    if (f3btnclicado == "2") {
        f3btn2link = "2-1";
    }
}
function f3btn1clicado() {
    f3btnclicado = "1";
}
function f3btn2clicado() {
    f3btnclicado = "2";
}
function carregatelspc2() {
    telapcbase = game.add.sprite(0, 0, 'telapcbase', 1);
    telapcbase.animations.add('sometela', [0, 1], 4);
    telapcbase.animations.add('aparecetela', [1, 0], 4);
    btnsairtelapc = game.add.button(3000, 614, 'btnsairtelapc', sairtelapc, this);
    f2btn1 = game.add.button(3000, 214, 'f2btn1', f2btn1clicado, this);
    f2btn2 = game.add.button(3000, 274, 'f2btn2', f2btn2clicado, this);
    f2btn3 = game.add.button(3000, 334, 'f2btn3', f2btn3clicado, this);
    f2btnporta = game.add.button(3000, 334, 'f2btnporta', f2btnportaclicado, this);
    f2btnfixo = game.add.sprite(3000, 394, 'f2btnfixo');
    f2btnportafinal = game.add.button(3000, 402, 'f2btnportafinal', f2btnportafinalclicado, this);
    f2btn1linkimg = game.add.sprite(3000, 0, 'f2btn1linkimg', 0);
    f2btn1linkimg.animations.add('lig1', [0], 1);
    f2btn1linkimg.animations.add('lig2', [1], 1);
    f2btn2linkimg = game.add.sprite(3000, 0, 'f2btn2linkimg', 0);
    f2btn2linkimg.animations.add('lig1', [0], 1);
    f2btn2linkimg.animations.add('lig2', [1], 1);
    f2btn3linkimg = game.add.sprite(3000, 0, 'f2btn3linkimg', 0);
    f2btn3linkimg.animations.add('lig1', [0], 1);
    f2btn3linkimg.animations.add('lig2', [1], 1);
}
function verificaativacoesf3() {
    if (alv01f1ativada) {
        if (f3btn1link == "1-2") {
            portaalv1f3aberta = true;
        } else {
            if (alv01f2ativada) {
                if (f3btn2link == "2-2") {
                    portaalv1f3aberta = true;
                } else {
                    portaalv1f3aberta = false;
                }
            } else {
                portaalv1f3aberta = false;
            }
        }
    } else {
        if (alv01f2ativada) {
            if (f3btn2link == "2-2") {
                portaalv1f3aberta = true;
            } else {
                portaalv1f3aberta = false;
            }
        } else {
            portaalv1f3aberta = false;
        }
    }
    if (alv01f2ativada) {
        if (f3btn2link == "2-1") {
            portaalv2f3aberta = true;
        } else {
            if (alv01f1ativada) {
                if (f3btn1link == "1-1") {
                    portaalv2f3aberta = true;
                } else {
                    portaalv2f3aberta = false;
                }
            } else {
                portaalv2f3aberta = false;
            }
        }
    } else {
        if (alv01f1ativada) {
            if (f3btn1link == "1-1") {
                portaalv2f3aberta = true;
            } else {
                portaalv2f3aberta = false;
            }
        } else {
            portaalv2f3aberta = false;
        }
    }
}
function verificaativacoesf2() {
    if (alv01f1ativada && alv01f2ativada && alv02f2ativada) {
        if (f2linkbtn1 == "1-1" && f2linkbtn2 == "2-1" && f2linkbtn3 == "3-1") {
            portaalvf2aberta = true;
        } else {
            portaalvf2aberta = false;
        }
    } else {
        portaalvf2aberta = false;
    }
    if (alv01f1ativada && alv01f2ativada && alv02f2ativada && alv03f2ativada) {
        if (f2linkbtn1 == "1-2" && f2linkbtn2 == "2-2" && f2linkbtn3 == "3-2") {
            f2concluida = true;
        } else {
            f2concluida = false;
        }
    } else {
        f2concluida = false;
    }
}
function f2btn1clicado() {
    btnselec = 1;
}
function f2btn2clicado() {
    btnselec = 2;
}
function f2btn3clicado() {
    btnselec = 3;
}
function f2btnportaclicado() {
    if (btnselec == 1) {
        f2linkbtn1 = "1-1";
    }
    if (btnselec == 2) {
        f2linkbtn2 = "2-1";
    }
    if (btnselec == 3) {
        f2linkbtn3 = "3-1";
    }
}
function f2btnportafinalclicado() {
    if (btnselec == 1) {
        f2linkbtn1 = "1-2";
    }
    if (btnselec == 2) {
        f2linkbtn2 = "2-2";
    }
    if (btnselec == 3) {
        f2linkbtn3 = "3-2";
    }
}
function f2verificalinks() {
    if (pcativo) {
        if (f2linkbtn1 == "1-0") {
            f2btn1linkimg.x = 3000;
        }
        if (f2linkbtn1 == "1-1") {
            f2btn1linkimg.animations.play('lig1');
            f2btn1linkimg.x = 0;
        }
        if (f2linkbtn1 == "1-2") {
            f2btn1linkimg.animations.play('lig2');
            f2btn1linkimg.x = 0;
        }

        if (f2linkbtn2 == "2-0") {
            f2btn2linkimg.x = 3000;
        }
        if (f2linkbtn2 == "2-1") {
            f2btn2linkimg.animations.play('lig1');
            f2btn2linkimg.x = 0;
        }
        if (f2linkbtn2 == "2-2") {
            f2btn2linkimg.animations.play('lig2');
            f2btn2linkimg.x = 0;
        }

        if (f2linkbtn3 == "3-0") {
            f2btn3linkimg.x = 3000;
        }
        if (f2linkbtn3 == "3-1") {
            f2btn3linkimg.animations.play('lig1');
            f2btn3linkimg.x = 0;
        }
        if (f2linkbtn3 == "3-2") {
            f2btn3linkimg.animations.play('lig2');
            f2btn3linkimg.x = 0;
        }
    } else {
        f2btn1linkimg.x = 3000;
        f2btn2linkimg.x = 3000;
        f2btn3linkimg.x = 3000;
    }
}
function carregatelspc1() {
    telapcbase = game.add.sprite(0, 0, 'telapcbase', 1);
    telapcbase.animations.add('sometela', [0, 1], 4);
    telapcbase.animations.add('aparecetela', [1, 0], 4);
    btnsairtelapc = game.add.button(3000, 614, 'btnsairtelapc', sairtelapc, this);
    btnalv1 = game.add.button(3000, 300, 'btnalv1', f1btnalv1click, this);
    btnporta1 = game.add.button(3000, 300, 'btnporta1', f1btnporta1click, this);
    linksimg = game.add.sprite(3000, 260, 'linksimg', 0);
    linksimg.animations.add('somelink', [3], 24);
    linksimg.animations.add('linkreto', [0], 24);
    linksimg.animations.add('linkcima', [1], 24);
    linksimg.animations.add('linkbaixo', [2], 24);
}
function f1btnalv1click() {
    if (f1link1 == "0-0") {
        f1link1 = "1-0";
    }
    if (f1link1 == "1-0") {
        f1link1 = "1-0";
    }
    if (f1link1 == "0-1") {
        f1link1 = "1-1";
    }
}
function f1btnporta1click() {
    if (f1link1 == "0-0") {
        f1link1 = "0-1";
    }
    if (f1link1 == "0-1") {
        f1link1 = "0-1";
    }
    if (f1link1 == "1-0") {
        f1link1 = "1-1";
    }
}
function botaPc(x, y) {
    pc = game.add.sprite(x, y, 'pc', 0);
    pc.animations.add('rodapc', [0, 1, 2, 3, 4], 7);
}
//alavancas
function botaalavanca1(x, y) {
    alv01f1 = game.add.sprite(x, y, 'alv', 0);
    alv01f1.animations.add('acionaalv', [0, 1, 2], 5);
    alv01f1.animations.add('desacionaalv', [2, 1, 0], 5);
    alv01f1ativada = false;
}
function botaalavanca2(x, y) {
    alv01f2 = game.add.sprite(x, y, 'alv', 0);
    alv01f2.animations.add('acionaalv', [0, 1, 2], 5);
    alv01f2.animations.add('desacionaalv', [2, 1, 0], 5);
    alv01f2ativada = false;
}
function botaalavanca3(x, y) {
    alv02f2 = game.add.sprite(x, y, 'alv', 0);
    alv02f2.animations.add('acionaalv', [0, 1, 2], 5);
    alv02f2.animations.add('desacionaalv', [2, 1, 0], 5);
    alv02f2ativada = false;
}
function botaalavanca4(x, y) {
    alv03f2 = game.add.sprite(x, y, 'alv', 0);
    alv03f2.animations.add('acionaalv', [0, 1, 2], 5);
    alv03f2.animations.add('desacionaalv', [2, 1, 0], 5);
    alv03f2ativada = false;
}
function botaalavanca5(x, y) {
    alv04f2 = game.add.sprite(x, y, 'alv', 0);
    alv04f2.animations.add('acionaalv', [0, 1, 2], 5);
    alv04f2.animations.add('desacionaalv', [2, 1, 0], 5);
    alv04f2ativada = false;
}
//.....
setInterval(function () {
    if (fase != 0) {
        try {
            pc.animations.play('rodapc');
        } catch{ }
    }
}, 10)
function verificabordas() {
    if (posxPerso < 230) {
        posxPerso += 5;
    }
    if (posxPerso > 1280) {
        posxPerso -= 5;
    }
    if (posyPerso < 100) {
        posyPerso += 5;
    }
    if (posyPerso > 600) {
        posyPerso -= 5;
    }

    if (posxinimigo < 240) {
        inimigoandando = false;
        posxinimigo += 5;
    }
    if (posxinimigo > 1270) {
        inimigoandando = false;
        posxinimigo -= 5;
    }
    if (posyinimigo < 130) {
        inimigoandando = false;
        posyinimigo += 5;
    }
    if (posyinimigo > 620) {
        inimigoandando = false;
        posyinimigo -= 5;
    }
}
function versecondchance() {
    if (!secondchance) {
        modsecondchanceicone.x = 5000;
    }
}
function atualizapontuacaoingametxt() {
    if (fase == 1) {
        pontuacaoconclusao = 0;
    }
    if (fase == 2) {
        pontuacaoconclusao = 500;
    }
    if (fase == 3) {
        pontuacaoconclusao = 1000;
    }
    if (fase == 4) {
        pontuacaoconclusao = 1500;
    }
    if (fase == 5) {
        pontuacaoconclusao = 2000;
    }
    if (dobrodanodobropontos) {
        try {
            pontuacaoingametxt.setText(`${(pontuacaoinimigos + pontuacaoconclusao) * 2}`);
            pontosatuais = (pontuacaoinimigos + pontuacaoconclusao) * 2;
        } catch{ }
    } else {
        try {
            pontuacaoingametxt.setText(`${pontuacaoinimigos + pontuacaoconclusao}`);
            pontosatuais = pontuacaoinimigos + pontuacaoconclusao;
        } catch{ }
    }
}
function carregaJogabilidade() {
    bau = game.add.sprite(-100, -100, 'bau', 0);
    if (conquista3) {
        perso = game.add.sprite(posxPerso, posyPerso, 'PERSOblyat', 1);
    } else {
        perso = game.add.sprite(posxPerso, posyPerso, 'PERSO', 1);
    }
    game.physics.enable(perso, Phaser.Physics.ARCADE);
    perso.body.collideWorldBounds = true;
    teclaE = game.add.sprite(perso.x, perso.x - 50, 'Etitle', 1);
    teclaE.anchor.set(0.5);
    TeclaI = game.add.sprite(perso.x, perso.x - 50, 'ititle', 1);
    TeclaI.anchor.set(0.5);
    tirodeplasma = game.add.sprite(perso.x, perso.y, 'tiro', 12);
    barramana = game.add.sprite(game.world.width * 0.05, game.world.height * 0.06, 'MANA', 0);
    barravida = game.add.sprite(game.world.width * 0.05, game.world.height * 0.01, 'HP', 10);
    barraitens = game.add.sprite(97, game.world.height * 0.46, 'BARRAITENS');
    barraitens.anchor.set(0.5);
    selecao = game.add.sprite(25, 145, 'selecao');
    slot1img = game.add.sprite(30, 130, 'BaraditensITENS', 2);
    slot2img = game.add.sprite(30, 215, 'BaraditensITENS', 2);
    slot3img = game.add.sprite(30, 300, 'BaraditensITENS', 2);
    slot4img = game.add.sprite(30, 390, 'BaraditensITENS', 2);

    //icone mods
    if (coleteinicial) {
        modcoleteinicialicone = game.add.sprite(20, 600, 'modcoleteinicialicone');
    }
    if (dobrodanodobropontos) {
        moddobrodanoicone = game.add.sprite(120, 550, 'moddobrodanoicone');
    }
    if (pocaovidainicial) {
        modpocaohpinicialicone = game.add.sprite(70, 600, 'modpocaohpinicialicone');
    }
    if (pocaomanainicial) {
        modpocaomanainicialicone = game.add.sprite(120, 600, 'modpocaomanainicialicone');
    }
    if (secondchance) {
        modsecondchanceicone = game.add.sprite(20, 550, 'modsecondchanceicone');
    } else {
        modsecondchanceicone = game.add.sprite(3000, 550, 'modsecondchanceicone');
    }
    if (starterpack) {
        modstarterpackicone = game.add.sprite(70, 550, 'modstarterpackicone');
    }
    versecondchance();
    pontuacaoingame = game.add.sprite(0, -40, 'pontuacaoingame');
    pontuacaoingametxt = game.add.text(1165, 43, '0', estilotexto2);
    bufcolete = game.add.sprite(game.world.width * 0.33, game.world.height * 0.03, 'BUFCOLETE', 2);
    abadomenu = game.add.sprite(1012, 65, 'menubar', 4);
    btnabadomenuNAO = game.add.button(5000, 421, 'btnabadomenuNAO', aparecebarradomenu, this);
    btnabadomenuSIM = game.add.button(5000, 339, 'btnabadomenuSIM', voltaParaomenu, this);
    btnabadomenu = game.add.button(1295, 72, 'btnbarradomenu', aparecebarradomenu, this);
    abadomenu.animations.add('apareceAbadomenu', [4, 0, 1, 2, 3], 10);
    abadomenu.animations.add('someAbadomenu', [3, 2, 1, 0, 4], 10);
    logogameover = game.add.sprite(game.world.width * 0.5, game.world.height * 0.5, 'GameOver', 1);
    logogameover.anchor.set(0.5);

    logogameover.animations.add('aparecego', [0], 24);
    logogameover.animations.add('somego', [1], 24);

    teclaE.animations.add('aparece', [0], 24);
    teclaE.animations.add('some', [1], 24);

    TeclaI.animations.add('aparecei', [0], 24);
    TeclaI.animations.add('someI', [1], 24);

    bufcolete.animations.add('ativo', [0, 1], 4);
    bufcolete.animations.add('desativado', [2], 24);
    //animacao tiro 
    tirodeplasma.animations.add('TiroUP', [0, 1, 2, 1, 0], 15);
    tirodeplasma.animations.add('TiroDWN', [3, 4, 5, 4, 3], 15);
    tirodeplasma.animations.add('TiroL', [6, 7, 8, 7, 6], 15);
    tirodeplasma.animations.add('TiroR', [9, 10, 11, 10, 9], 15);
    tirodeplasma.animations.add('TiroSome', [12], 24);

    slot1img.animations.add('slot1img0', [0], 24);
    slot1img.animations.add('slot1img1', [1], 24);
    slot1img.animations.add('slot1img2', [2], 24);
    slot1img.animations.add('slot1img3', [3], 24);
    slot1img.animations.add('slot1img4', [4], 24);
    slot1img.animations.add('slot1img5', [5], 24);

    slot2img.animations.add('slot2img0', [0], 24);
    slot2img.animations.add('slot2img1', [1], 24);
    slot2img.animations.add('slot2img2', [2], 24);
    slot2img.animations.add('slot2img3', [3], 24);
    slot2img.animations.add('slot2img4', [4], 24);
    slot2img.animations.add('slot2img5', [5], 24);

    slot3img.animations.add('slot3img0', [0], 24);
    slot3img.animations.add('slot3img1', [1], 24);
    slot3img.animations.add('slot3img2', [2], 24);
    slot3img.animations.add('slot3img3', [3], 24);
    slot3img.animations.add('slot3img4', [4], 24);
    slot3img.animations.add('slot3img5', [5], 24);

    slot4img.animations.add('slot4img0', [0], 24);
    slot4img.animations.add('slot4img1', [1], 24);
    slot4img.animations.add('slot4img2', [2], 24);
    slot4img.animations.add('slot4img3', [3], 24);
    slot4img.animations.add('slot4img4', [4], 24);
    slot4img.animations.add('slot4img5', [5], 24);

    barravida.animations.add('V0', [0], 24);
    barravida.animations.add('V1', [1], 24);
    barravida.animations.add('V2', [2], 24);
    barravida.animations.add('V3', [3], 24);
    barravida.animations.add('V4', [4], 24);
    barravida.animations.add('V5', [5], 24);
    barravida.animations.add('V6', [6], 24);
    barravida.animations.add('V7', [7], 24);
    barravida.animations.add('V8', [8], 24);
    barravida.animations.add('V9', [9], 24);
    barravida.animations.add('V10', [10], 24);

    barramana.animations.add('M0', [0], 24);
    barramana.animations.add('M1', [1], 24);
    barramana.animations.add('M2', [2], 24);
    barramana.animations.add('M3', [3], 24);
    barramana.animations.add('M4', [4], 24);
    barramana.animations.add('M5', [5], 24);
    barramana.animations.add('M6', [6], 24);
    barramana.animations.add('M7', [7], 24);
    barramana.animations.add('M8', [8], 24);
    barramana.animations.add('M9', [9], 24);
    barramana.animations.add('M10', [10], 24);

    perso.animations.add('ParadoF', [0, 1], 3);
    perso.animations.add('ParadoT', [2, 3], 3);
    perso.animations.add('ParadoE', [4, 5], 3);
    perso.animations.add('ParadoD', [6, 7], 3);

    perso.animations.add('AndaF', [8, 9], 4);
    perso.animations.add('AndaT', [10, 11], 4);
    perso.animations.add('AndaE', [12, 13, 14, 15], 4);
    perso.animations.add('AndaD', [19, 18, 17, 16], 4);

    //animações para virar
    perso.animations.add('L.UP', [5, 20, 3], 5);
    perso.animations.add('R.UP', [6, 21, 3], 5);
    perso.animations.add('DWN.UP', [1, 23, 5, 20, 3], 5);

    perso.animations.add('UP.L', [3, 20, 5], 5);
    perso.animations.add('DWN.L', [1, 23, 5], 5);
    perso.animations.add('R.L', [6, 22, 1, 23, 5], 5);

    perso.animations.add('L.DWN', [5, 23, 1], 5);
    perso.animations.add('R.DWN', [6, 22, 1], 5);
    perso.animations.add('UP.DWN', [3, 20, 5, 23, 1], 5);

    perso.animations.add('UP.R', [3, 21, 6], 5);
    perso.animations.add('DWN.R', [1, 22, 6], 5);
    perso.animations.add('L.R', [5, 23, 1, 22, 6], 5);
    //..................................
    perso.animations.add('danoF', [24, 1], 3);
    perso.animations.add('danoT', [25, 3], 3);
    perso.animations.add('danoE', [26, 5], 3);
    perso.animations.add('danoD', [27, 6], 3);

    //faz com que o x e y do objeto esteja no centro do mesmo
    perso.anchor.set(0.5);

    //adiciona fisica a bola
    game.physics.enable(perso, Phaser.Physics.ARCADE);

    //faz que quando a bola bater nas paredes ela "quique"
    perso.body.collideWorldBounds = true;
    perso.body.bounce.set(1);

    //verifica se a bola saiu da tela
    perso.checkWorldBounds = true;
    tirodeplasma.checkWorldBounds = true;
    tirodeplasma.events.onOutOfBounds.add(tirosaiudatela, this);
}
function verificamorteperso() {
    if (vida <= 0) {
        logogameover.animations.play('aparecego');
        gameoverativo = true;
    }
}
function voltaParaomenu() {
    salvaconquistasobtidas();
    if (fase == 1) {
        portaf1 = null;
        btnalv1 = null;
        btnporta1 = null;
        try {
            link = null;
        } catch{ }
        f1link1 = "0-0";
    }
    if (fase == 2) {
        fundofase1 = null;
        portaalvf2 = null;
        portafinalf2 = null;
        alv01f1 = null;
        alv01f2 = null;
        alv02f2 = null;
        alv03f2 = null;
        f2linkbtn1 = "1-0";
        f2linkbtn2 = "2-0";
        f2linkbtn3 = "3-0";
        btnselec = 0;
        portaalvf2aberta = false;
        alv01f2ativada = false;
        alv02f2ativada = false;
        alv03f2ativada = false;
        alv04f2ativada = false;
        fase2carregada = false;
        tapaerro = null;
    }
    if (fase == 3) {
        expreator = null;
        fundof3 = null;
        portafinalf3 = null;
        reator = null;
        portaalv1f3 = null;
        portaalv2f3 = null;
        telapcbase = null;
        btnsairtelapc = null;
        telapciconsf3 = null;
        btnalavanca1f3 = null;
        btnalavanca2f3 = null;
        btnreator = null;
        btnporta2f3 = null;
        linksbtn1 = null;
        linksbtn2 = null;
        posxPerso = 1200;
        posyPerso = 600;
        portaalv1f3aberta = false;
        portaalv2f3aberta = false;
        f3concluida = false;
        f3btn1link = "";
        f3btn2link = "";
        f3btnclicado = "";
        temporeator = 1500;
        reatorativado = false;
        explodiureator = false;
        perso = null;
        portaalvf2aberta = false;
        alv01f2ativada = false;
        alv02f2ativada = false;
        alv03f2ativada = false;
        alv04f2ativada = false;
    }
    if (fase == 4) {
        fundof4 = null;
        negocioparacobrirsegredo = null;
        pcf401 = null;
        pcf402 = null;
        pcf403 = null;
        pcf404 = null;
        portaf4 = null;
        codigo = "";
        codigoenter = "";
        pcativo = false;
        f4concluida = false;
        eastereggdescoberto = false;
        tempomensagem = 200;
        f4btn0 = null;
        f4btn2 = null;
        f4btn3 = null;
        f4btn4 = null;
        f4btn5 = null;
        f4btn6 = null;
        f4btn7 = null;
        f4btn8 = null;
        f4btn9 = null;
        f4btn1 = null;
        f4btnenter = null;
        f4btncancelar = null;
        inputcodigo = null;
        codeinsert = null;
        codecoreto = null;
        codeerrado = null;
        telapc1 = null;
        telapc2 = null;
        telapc3 = null;
        telapc4 = null;
        try {
            POCAO_MANA = null;
        } catch{ }
        try {
            POCAO_HP = null;
        } catch{ }
        try {
            CONVERSOR_DE_MANA = null;
        } catch{ }
    }
    if (fase == 5) {
        fundof5.x = 5000;
        cartavista = false;
        carta = null;
        cofre = null;
        tempocarta = 2000;
        abriucofre = false;
        tocandocadaver = false;
        tocandocofre = false;
    }
    slot1 = 0;
    slot2 = 0;
    slot3 = 0;
    slot4 = 0;
    fase = 10;
    fase0carregada = false;
    fase1carregada = false;
    fase2carregada = false;
    fase3carregada = false;
    fase4carregada = false;
    fase5carregada = false;
    pcativo = false;
    abadomenuativada = false;
    bau = null;
    perso = null;
    teclaE = null;
    TeclaI = null;
    tirodeplasma = null;
    barramana = null;
    barravida = null;
    barraitens = null;
    selecao = null;
    slot1img = null;
    slot2img = null;
    slot3img = null;
    slot4img = null;
    bufcolete = null;
    abadomenu = null;
    btnabadomenuNAO = null;
    btnabadomenuSIM = null;
    btnabadomenu = null;
    secondchance = false;
    dobrodanodobropontos = false;
    starterpack = false;
    coleteinicial = false;
    pocaomanainicial = false;
    pocaovidainicial = false;
    try {
        btnsairtelapc = null;
        telapcbase = null;
        pc = null;
    } catch{ }
    try {
        alv01f1 = null;
    } catch{ }
    try {
        vidainimigo1 = 0;
        inimigo1 = null;
    } catch{ }
    try {
        BRACELETE_PLASMATICO = null;
    } catch{ }
    try {
        COLETE = null;
    } catch{ }
    try {
        POCAO_HP = null;
    } catch{ }
    try {
        POCAO_MANA = null;
    } catch{ }
    try {
        CONVERSOR_DE_MANA = null;
    } catch{ }
    fase = 0;
    try {
        loopmusicaprincipal.volume = 0;
    } catch{ }
    try {
        musicacreditos.volume = 0;
    } catch{ }
    try {
        loopiniciomusicaprincipal.volume = 0;
    } catch (error) { }
    musicacreditos = null;
    loopmusicaprincipal = null;
    inicioumusica = false;
    document.getElementById("carregamentojogo").style.left = "14%";
}
function aparecebarradomenu() {
    if (abadomenuativada) {
        abadomenuativada = false;
        abadomenu.animations.play('someAbadomenu');
        btnabadomenuNAO.x = 5000;
        btnabadomenuSIM.x = 5000;
    } else {
        abadomenu.animations.play('apareceAbadomenu');
        abadomenuativada = true;
    }
    btnabadomenu.x = 5000;
    animacaobarradomenu = true;
}
setInterval(function () {
    try {
        if (!animacaobarradomenu && abadomenuativada) {
            btnabadomenu.x = 1020;
            btnabadomenuNAO.x = 1141;
            btnabadomenuSIM.x = 1141;
        }
        if (!animacaobarradomenu && !abadomenuativada) {
            btnabadomenu.x = 1295;
        }
        if (animacaobarradomenu && tempoanimacaobarradomenu > 0) {
            tempoanimacaobarradomenu -= 1;
        } else {
            tempoanimacaobarradomenu = 150;
            animacaobarradomenu = false;
        }
    } catch{ }
    try {
        if (gameoverativo && tempogameover > 0) {
            tempogameover -= 1;
        } else {
            gameoverativo = false;
        }
        if (!gameoverativo && tempogameover <= 0) {
            vida = 10;
            tempogameover = 500;
            logogameover.animations.play('somego');
            logogameover.x = 5000;
            voltaParaomenu();
        }
    } catch{ }
}, 1)
function verificaproximidadeINIMIGO() {
    try {
        var n1 = (inimigo1.x - perso.x);
        var n2 = (inimigo1.y - perso.y);
        n1 = n1 * n1;
        n2 = n2 * n2;
        var n3 = n2 + n1;
        var result = Math.sqrt(n3);
        if (result <= 300) {
            atacando = true;
        } else {
            atacando = false;
        }
    } catch{ }
}
function vermaisproxPatacar() {
    var n1 = (inimigo1.x - perso.x);
    var n2 = (inimigo1.y - perso.y);
    n1 = n1 * n1;
    n2 = n2 * n2;
    n1 = Math.sqrt(n1);
    n2 = Math.sqrt(n2);
    if (n1 < n2) {
        maisproximoPatacar = 'x';
    } else {
        maisproximoPatacar = 'y';
    }
}
setInterval(function () {
    if (fase != 0 && !inimigotomoudano && !tutorial && !abadomenuativada && fase != 4 && fase != 5 && fase != 6) {
        verificaproximidadeINIMIGO();
        if (atacando) {
            vermaisproxPatacar();
            if (maisproximoPatacar == 'x' && podeatacar) {
                if (inimigo1.x < perso.x + 40 && inimigo1.x > perso.x - 40) {
                    if (!atacou) {
                        posyinicialdoataque = inimigo1.y;
                    }
                    atacou = true;
                    var n3 = (inimigo1.y - perso.y);
                    if (n3 > 0) {
                        direcinimigo = 'T';
                    } else {
                        direcinimigo = 'F';
                    }
                    if (direcinimigo == 'T') {
                        posyinimigo -= 2;
                        inimigo1.y = posyinimigo;
                        inimigo1.animations.play('inimAtacaT');
                    }
                    if (direcinimigo == 'F') {
                        posyinimigo += 2;
                        inimigo1.y = posyinimigo;
                        inimigo1.animations.play('inimAtacaF');
                    }
                } else {
                    var n1 = (inimigo1.x - perso.x);
                    if (n1 > 0) {
                        direcinimigo = 'E';
                    } else {
                        direcinimigo = 'D';
                    }
                    if (direcinimigo == 'E') {
                        posxinimigo -= 1;
                        inimigo1.x = posxinimigo;
                        inimigo1.animations.play('inimandaE');
                    }
                    if (direcinimigo == 'D') {
                        posxinimigo += 1;
                        inimigo1.x = posxinimigo;
                        inimigo1.animations.play('inimandaD');
                    }
                }
            }
            if (maisproximoPatacar == 'y' && podeatacar) {
                if (inimigo1.y < perso.y + 40 && inimigo1.y > perso.y - 40) {
                    if (!atacou) {
                        posxinicialdoataque = inimigo1.x;
                    }
                    atacou = true;
                    var n4 = (inimigo1.x - perso.x);
                    if (n4 > 0) {
                        direcinimigo = 'E';
                    } else {
                        direcinimigo = 'D';
                    }
                    if (direcinimigo == 'E') {
                        posxinimigo -= 2;
                        inimigo1.x = posxinimigo;
                        inimigo1.animations.play('inimAtacaE');
                    }
                    if (direcinimigo == 'D') {
                        posxinimigo += 2;
                        inimigo1.x = posxinimigo;
                        inimigo1.animations.play('inimAtacaD');
                    }
                } else {
                    var n1 = (inimigo1.y - perso.y);
                    if (n1 > 0) {
                        direcinimigo = 'T';
                    } else {
                        direcinimigo = 'F';
                    }
                    if (direcinimigo == 'T') {
                        posyinimigo -= 1;
                        inimigo1.y = posyinimigo;
                        inimigo1.animations.play('inimandaT');
                    }
                    if (direcinimigo == 'F') {
                        posyinimigo += 1;
                        inimigo1.y = posyinimigo;
                        inimigo1.animations.play('inimandaF');
                    }
                }
            }
            if (inimigo1.x < perso.x + 30 && inimigo1.x > perso.x - 30) {
                if (inimigo1.y < perso.y + 40 && inimigo1.y > perso.y - 40) {
                    if (!tomoudano) {
                        danoperso();
                    }
                    podeatacar = false;
                }
            }
            if (!podeatacar) {
                preparandoataque = true;
                if (posxinicialdoataque != 0 && inimigo1.x != posxinicialdoataque) {
                    var n10 = (inimigo1.x - perso.x);
                    if (n10 > 0) {
                        direcinimigo = 'D';
                    } else {
                        direcinimigo = 'E';
                    }
                    if (direcinimigo == 'E') {
                        posxinimigo -= 1;
                        inimigo1.x = posxinimigo;
                        inimigo1.animations.play('inimandaE');
                    }
                    if (direcinimigo == 'D') {
                        posxinimigo += 1;
                        inimigo1.x = posxinimigo;
                        inimigo1.animations.play('inimandaD');
                    }
                }
                if (posyinicialdoataque != 0 && inimigo1.y != posyinicialdoataque) {
                    var n11 = (inimigo1.y - perso.y);
                    if (n11 > 0) {
                        direcinimigo = 'F';
                    } else {
                        direcinimigo = 'T';
                    }
                    if (direcinimigo == 'T') {
                        posyinimigo -= 1;
                        inimigo1.y = posyinimigo;
                        inimigo1.animations.play('inimandaT');
                    }
                    if (direcinimigo == 'F') {
                        posyinimigo += 1;
                        inimigo1.y = posyinimigo;
                        inimigo1.animations.play('inimandaF');
                    }
                }
            }
            if (!podeatacar) {
                atacou = false;
                if (inimigo1.y < posyinicialdoataque + 40 && inimigo1.y > posyinicialdoataque - 40) {
                    try {
                        if (direcinimigo == 'T') {
                            inimigo1.animations.play('inimparadoT');
                        }
                    } catch{ }
                    try {
                        if (direcinimigo == 'F') {
                            inimigo1.animations.play('inimparadoF');
                        }
                    } catch{ }
                }
                if (inimigo1.x < posxinicialdoataque + 40 && inimigo1.x > posxinicialdoataque - 40) {
                    try {
                        if (direcinimigo == 'E') {
                            inimigo1.animations.play('inimparadoE');
                        }
                    } catch{ }
                    try {
                        if (direcinimigo == 'D') {
                            inimigo1.animations.play('inimparadoD');
                        }
                    } catch{ }
                }
            }
        }
    }
}, 1)
setInterval(function () {
    if (fase != 0) {
        if (!podeatacar && coldownataque > 0) {
            coldownataque -= 1;
        } else {
            podeatacar = true;
            preparandoataque = false;
            coldownataque = 10;
        }
    }
}, 500)
function danoperso() {
    tomoudano = true;
    vida -= dano;
    if (vida <= 0 && secondchance) {
        vida = 1;
        secondchance = false;
    }
    if (direcperso == 'UP') {
        perso.animations.play('danoT');
    }
    if (direcperso == 'DWN') {
        perso.animations.play('danoF');
    }
    if (direcperso == 'L') {
        perso.animations.play('danoE');
    }
    if (direcperso == 'R') {
        perso.animations.play('danoD');
    }
}
setInterval(function () {
    if (fase != 0) {
        if (tomoudano && tomoudanotime <= 0) {
            tomoudano = false;
            tomoudanotime = 1;
        }
        if (tomoudano && tomoudanotime > 0) {
            tomoudanotime -= 1;
        }
    }
}, 1000)
function criainimigo() {
    inimigo1 = game.add.sprite(5000, 5000, 'inimigo', 0);
    barradevidainimigo = game.add.sprite(5000, 4990, 'barradevidainimigo', 1);
    inimigo1.anchor.set(0.5);
    barradevidainimigo.anchor.set(0.5);

    barradevidainimigo.animations.add('2devida', [1], 24);
    barradevidainimigo.animations.add('1devida', [0], 24);
    barradevidainimigo.animations.add('0devida', [2], 24);

    inimigo1.animations.add('inimparadoF', [0, 1, 2, 1], 4);
    inimigo1.animations.add('inimparadoT', [4, 5, 6, 5], 4);
    inimigo1.animations.add('inimparadoD', [8, 9, 10, 9], 4);
    inimigo1.animations.add('inimparadoE', [12, 13, 14, 13], 4);

    inimigo1.animations.add('inimandaF', [16, 17, 18, 19], 6);
    inimigo1.animations.add('inimandaT', [20, 21, 22, 23], 6);
    inimigo1.animations.add('inimandaD', [24, 25], 3);
    inimigo1.animations.add('inimandaE', [26, 27], 3);

    inimigo1.animations.add('inimDanoF', [3, 0], 3);
    inimigo1.animations.add('inimDanoT', [7, 4], 3);
    inimigo1.animations.add('inimDanoD', [11, 8], 3);
    inimigo1.animations.add('inimDanoE', [15, 12], 3);

    inimigo1.animations.add('inimAtacaF', [28, 29], 7);
    inimigo1.animations.add('inimAtacaT', [30, 31], 7);
    inimigo1.animations.add('inimAtacaD', [32, 33], 7);
    inimigo1.animations.add('inimAtacaE', [34, 35], 7);
}
function botainimigo(x, y) {
    inimigo1.x = x;
    inimigo1.y = y;
    posxinimigo = x;
    posyinimigo = y;
    vidainimigo1 = 2;
}
setInterval(function () {
    if (fase != 0 && vida >= 0 && !tutorial && !abadomenuativada) {
        if (quadradodemovimento == 'OOO.OXO.OOO') {
            podeIRcima = true;
            podeIRdaixo = true;
            podeIRdireita = true;
            podeIResquerda = true;
        }
        if (quadradodemovimento == 'XOO.OOO.OOO') {
            podeIRcima = false;
            podeIRdaixo = true;
            podeIRdireita = true;
            podeIResquerda = false;
        }
        if (quadradodemovimento == 'OXO.OOO.OOO') {
            podeIRcima = true;
            podeIRdaixo = true;
            podeIRdireita = true;
            podeIResquerda = false;
        }
        if (quadradodemovimento == 'OOX.OOO.OOO') {
            podeIRcima = true;
            podeIRdaixo = false;
            podeIRdireita = true;
            podeIResquerda = false;
        }
        if (quadradodemovimento == 'OOO.XOO.OOO') {
            podeIRcima = false;
            podeIRdaixo = true;
            podeIRdireita = true;
            podeIResquerda = true;
        }
        if (quadradodemovimento == 'OOO.OOX.OOO') {
            podeIRcima = true;
            podeIRdaixo = false;
            podeIRdireita = true;
            podeIResquerda = true;
        }
        if (quadradodemovimento == 'OOO.OOO.XOO') {
            podeIRcima = false;
            podeIRdaixo = true;
            podeIRdireita = false;
            podeIResquerda = true;
        }
        if (quadradodemovimento == 'OOO.OOO.OXO') {
            podeIRcima = true;
            podeIRdaixo = true;
            podeIRdireita = false;
            podeIResquerda = true;
        }
        if (quadradodemovimento == 'OOO.OOO.OOX') {
            podeIRcima = true;
            podeIRdaixo = false;
            podeIRdireita = false;
            podeIResquerda = true;
        }
    }
}, 1)
setInterval(function () {
    if (fase != 0 && vida >= 0) {
        if (vidainimigo1 > 0) {
            andainimigo();
        } else {
            try {
                inimigo1.x = 5000;
                inimigo1.y = 5000;
                posxinimigo = 5000;
                posyinimigo = 5000;
            } catch{ }
        }
    }
}, 1000)
setInterval(function () {
    if (fase != 0 && vida >= 0) {
        try {
            if (tiroX < inimigo1.x + 40 && tiroX > inimigo1.x - 40) {
                if (tiroY < inimigo1.y + 40 && tiroY > inimigo1.y - 40) {
                    inimigoTomaDano();
                    tiroX = 5000;
                    tirosaiudatela();
                }
            }
        } catch{ }
    }
}, 1)
function inimigoTomaDano() {
    vidainimigo1 -= 1;
    inimigotomoudano = true;
    if (vidainimigo1 <= 0) {
        pontuacaoinimigos += 500;
    }
}
setInterval(function () {
    if (fase != 0 && vida >= 0) {
        if (inimigotomoudano) {
            atacando = false;
        }
        if (inimigotomoudano && tempodanoinimigo > 0 && (!atacando || preparandoataque)) {
            inimigoandando = false;
            if (direcinimigo == 'F') {
                inimigo1.animations.play('inimDanoF');
            }
            if (direcinimigo == 'T') {
                inimigo1.animations.play('inimDanoT');
            }
            if (direcinimigo == 'E') {
                inimigo1.animations.play('inimDanoE');
            }
            if (direcinimigo == 'D') {
                inimigo1.animations.play('inimDanoD');
            }
            tempodanoinimigo -= 1;
        } else {
            inimigotomoudano = false;
            tempodanoinimigo = 50;
        }
    }
}, 10)
function andainimigo() {
    if (!inimigoandando && !atacando && !inimigotomoudano && !tutorial && !abadomenuativada) {
        var n = Math.random();
        inimigoandando = true;

        if (n >= 0 && n <= 0.25 && podeIRdaixo) {
            direcinimigo = 'F';
            if (quadradodemovimento == 'OOO.OXO.OOO') {
                quadradodemovimento = 'OOO.OOX.OOO';
            }
            if (quadradodemovimento == 'OXO.OOO.OOO') {
                quadradodemovimento = 'OOX.OOO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOO.OXO') {
                quadradodemovimento = 'OOO.OOO.OOX';
            }
            if (quadradodemovimento == 'XOO.OOO.OOO') {
                quadradodemovimento = 'OXO.OOO.OOO';
            }
            if (quadradodemovimento == 'OOO.XOO.OOO') {
                quadradodemovimento = 'OOO.OXO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOO.XOO') {
                quadradodemovimento = 'OOO.OOO.OXO';
            }
        }
        if (n > 0.26 && n <= 0.5 && podeIRcima) {
            direcinimigo = 'T';
            if (quadradodemovimento == 'OOO.OXO.OOO') {
                quadradodemovimento = 'OOO.XOO.OOO';
            }
            if (quadradodemovimento == 'OXO.OOO.OOO') {
                quadradodemovimento = 'XOO.OOO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOO.OXO') {
                quadradodemovimento = 'OOO.OOO.XOO';
            }
            if (quadradodemovimento == 'OOX.OOO.OOO') {
                quadradodemovimento = 'OXO.OOO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOX.OOO') {
                quadradodemovimento = 'OOO.OXO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOO.OOX') {
                quadradodemovimento = 'OOO.OOO.OXO';
            }
        }
        if (n > 0.51 && n <= 0.75 && podeIResquerda) {
            direcinimigo = 'E';
            if (quadradodemovimento == 'OOO.OXO.OOO') {
                quadradodemovimento = 'OXO.OOO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOO.OXO') {
                quadradodemovimento = 'OOO.OXO.OOO';
            }
            if (quadradodemovimento == 'OOO.XOO.OOO') {
                quadradodemovimento = 'XOO.OOO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOO.XOO') {
                quadradodemovimento = 'OOO.XOO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOX.OOO') {
                quadradodemovimento = 'OOX.OOO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOO.OOX') {
                quadradodemovimento = 'OOO.OOX.OOO';
            }
        }
        if (n > 0.76 && n <= 1 && podeIRdireita) {
            direcinimigo = 'D';
            if (quadradodemovimento == 'OOO.OXO.OOO') {
                quadradodemovimento = 'OOO.OOO.OXO';
            }
            if (quadradodemovimento == 'OXO.OOO.OOO') {
                quadradodemovimento = 'OOO.OXO.OOO';
            }
            if (quadradodemovimento == 'OOO.XOO.OOO') {
                quadradodemovimento = 'OOO.OOO.XOO';
            }
            if (quadradodemovimento == 'XOO.OOO.OOO') {
                quadradodemovimento = 'OOO.XOO.OOO';
            }
            if (quadradodemovimento == 'OOO.OOX.OOO') {
                quadradodemovimento = 'OOO.OOO.OOX';
            }
            if (quadradodemovimento == 'OOX.OOO.OOO') {
                quadradodemovimento = 'OOO.OOX.OOO';
            }
        }
    }
}
setInterval(function () {
    if (fase != 0) {
        if (tempoandar > 0 && !inimigotomoudano && fase != 4 && fase != 5 && fase != 6) {
            if (inimigoandando && direcinimigo == 'F') {
                posyinimigo += 3;
                inimigo1.y = posyinimigo;
                inimigo1.animations.play('inimandaF');
            }
            if (inimigoandando && direcinimigo == 'T') {
                posyinimigo -= 3;
                inimigo1.y = posyinimigo;
                inimigo1.animations.play('inimandaT');
            }
            if (inimigoandando && direcinimigo == 'E') {
                posxinimigo -= 3;
                inimigo1.x = posxinimigo;
                inimigo1.animations.play('inimandaE');
            }
            if (inimigoandando && direcinimigo == 'D') {
                posxinimigo += 3;
                inimigo1.x = posxinimigo;
                inimigo1.animations.play('inimandaD');
            }
            tempoandar -= 1;
        } else {
            inimigoandando = false;
            tempoandar = 20;
        }
    }
}, 10)
function verificavidainimigo() {
    if (vidainimigo1 == 1) {
        barradevidainimigo.animations.play('1devida');
    }
    if (vidainimigo1 == 2) {
        barradevidainimigo.animations.play('2devida');
    }
    if (vidainimigo1 <= 0) {
        barradevidainimigo.animations.play('0devida');
    }
}
setInterval(function () {
    if (fase != 0 && vida >= 0) {
        try {
            barradevidainimigo.x = posxinimigo;
            barradevidainimigo.y = posyinimigo - 30;
            verificavidainimigo();
        } catch{ }
        try {
            if (direcinimigo == 'T' && !inimigoandando && !atacando) {
                inimigo1.animations.play('inimparadoT');
            }
        } catch{ }
        try {
            if (direcinimigo == 'E' && !inimigoandando && !atacando) {
                inimigo1.animations.play('inimparadoE');
            }
        } catch{ }
        try {
            if (direcinimigo == 'F' && !inimigoandando && !atacando) {
                inimigo1.animations.play('inimparadoF');
            }
        } catch{ }
        try {
            if (direcinimigo == 'D' && !inimigoandando && !atacando) {
                inimigo1.animations.play('inimparadoD');
            }
        } catch{ }
    }
}, 1)
function botaitensinabarra() {
    if (slot1 == 0) {
        slot1img.animations.play('slot1img0');
    }
    if (slot1 == 1) {
        slot1img.animations.play('slot1img1');
    }
    if (slot1 == 2) {
        slot1img.animations.play('slot1img2');
    }
    if (slot1 == 3) {
        slot1img.animations.play('slot1img3');
    }
    if (slot1 == 4) {
        slot1img.animations.play('slot1img4');
    }
    if (slot1 == 5) {
        slot1img.animations.play('slot1img5');
    }

    if (slot2 == 0) {
        slot2img.animations.play('slot2img0');
    }
    if (slot2 == 1) {
        slot2img.animations.play('slot2img1');
    }
    if (slot2 == 2) {
        slot2img.animations.play('slot2img2');
    }
    if (slot2 == 3) {
        slot2img.animations.play('slot2img3');
    }
    if (slot2 == 4) {
        slot2img.animations.play('slot2img4');
    }
    if (slot2 == 5) {
        slot2img.animations.play('slot2img5');
    }

    if (slot3 == 0) {
        slot3img.animations.play('slot3img0');
    }
    if (slot3 == 1) {
        slot3img.animations.play('slot3img1');
    }
    if (slot3 == 2) {
        slot3img.animations.play('slot3img2');
    }
    if (slot3 == 3) {
        slot3img.animations.play('slot3img3');
    }
    if (slot3 == 4) {
        slot3img.animations.play('slot3img4');
    }
    if (slot3 == 5) {
        slot3img.animations.play('slot3img5');
    }

    if (slot4 == 0) {
        slot4img.animations.play('slot4img0');
    }
    if (slot4 == 1) {
        slot4img.animations.play('slot4img1');
    }
    if (slot4 == 2) {
        slot4img.animations.play('slot4img2');
    }
    if (slot4 == 3) {
        slot4img.animations.play('slot4img3');
    }
    if (slot4 == 4) {
        slot4img.animations.play('slot4img4');
    }
    if (slot4 == 5) {
        slot4img.animations.play('slot4img5');
    }
}
function animaitens() {
    try { POCAO_MANAanimtion(); } catch{ }
    try { BRACELETE_PLASMATICOanimtion(); } catch{ }
    try { POCAO_HPanimtion(); } catch{ }
    try { COLETEanimtion(); } catch{ }
    try { CONVERSOR_DE_MANAanimtion(); } catch{ }
}
function testacolisao() {
    try {
        if (fase == 5) {
            if (cartavista && !abriucofre) {
                if (perso.x < 950 && perso.x > 850) {
                    if (perso.y < 350 && perso.y > 1 && !abriucofre) {
                        apareceE();
                        tocandocofre = true;
                    } else {
                        tocandocofre = false;
                    }
                } else {
                    tocandocofre = false;
                }
            } else {
                tocandocofre = false;
            }
        }
    } catch{ }
    try {
        if (fase == 5) {
            if (perso.x < 2000 && perso.x > 900) {
                if (perso.y < 2000 && perso.y > 500 && !cartavista) {
                    apareceE();
                    tocandocadaver = true;
                } else {
                    tocandocadaver = false;
                }
            } else {
                tocandocadaver = false;
            }
        }
    } catch{ }
    try {
        if (perso.x < bau.x + 110 && perso.x > bau.x - 20) {
            if (perso.y < bau.y + 60 && perso.y > bau.y - 30 && !bauaberto) {
                aparecei();
                tocandobau = true;
            } else {
                somei();
                tocandobau = false;
            }
        } else {
            somei();
            tocandobau = false;
        }
    } catch{ }
    try {
        if (perso.x < POCAO_HP.x + 30 && perso.x > POCAO_HP.x - 30) {
            if (perso.y < POCAO_HP.y + 50 && perso.y > POCAO_HP.y - 30) {
                apareceE();
                tocandopohp = true;
            } else {
                tocandopohp = false;
            }
        } else {
            tocandopohp = false;
        }
    } catch{ }
    try {
        if (perso.x < BRACELETE_PLASMATICO.x + 30 && perso.x > BRACELETE_PLASMATICO.x - 30) {
            if (perso.y < BRACELETE_PLASMATICO.y + 50 && perso.y > BRACELETE_PLASMATICO.y - 30) {
                apareceE();
                tocandobracelete = true;
            } else {
                tocandobracelete = false;
            }
        } else {
            tocandobracelete = false;
        }
    } catch{ }
    try {
        if (perso.x < COLETE.x + 30 && perso.x > COLETE.x - 30) {
            if (perso.y < COLETE.y + 50 && perso.y > COLETE.y - 30) {
                apareceE();
                tocandocolete = true;
            } else {
                tocandocolete = false;
            }
        } else {
            tocandocolete = false;
        }
    } catch{ }
    try {
        if (perso.x < POCAO_MANA.x + 30 && perso.x > POCAO_MANA.x - 30) {
            if (perso.y < POCAO_MANA.y + 50 && perso.y > POCAO_MANA.y - 30) {
                apareceE();
                tocandopomana = true;
            } else {
                tocandopomana = false;
            }
        } else {
            tocandopomana = false;
        }
    } catch{ }
    try {
        if (perso.x < CONVERSOR_DE_MANA.x + 30 && perso.x > CONVERSOR_DE_MANA.x - 30) {
            if (perso.y < CONVERSOR_DE_MANA.y + 50 && perso.y > CONVERSOR_DE_MANA.y - 30) {
                apareceE();
                tocandoconversor = true;
            } else {
                tocandoconversor = false;
            }
        } else {
            tocandoconversor = false;
        }
    } catch{ }
    try {
        if (!tocandopohp && !tocandobracelete && !tocandocolete &&
            !tocandopomana && !tocandoconversor && !tocandoalv1 && !tocandoapc
            && !tocandoalv2 && !tocandoalv3 && !tocandoalv4 && !tocandoalv5 && !tocandopc01f4
            && !tocandopc02f4 && !tocandopc03f4 && !tocandopc04f4 && !tocandocadaver && !tocandocofre) {
            someE();
        }
    } catch{ }
}
function apareceE() {
    teclaE.x = perso.x;
    teclaE.y = perso.y - 50;
    teclaE.animations.play('aparece');
}
function someE() {
    teclaE.x = perso.x;
    teclaE.y = perso.y - 50;
    teclaE.animations.play('some');
}
function aparecei() {
    TeclaI.x = perso.x;
    TeclaI.y = perso.y - 50;
    TeclaI.animations.play('aparecei');
}
function somei() {
    TeclaI.x = perso.x;
    TeclaI.y = perso.y - 50;
    TeclaI.animations.play('someI');
}
setInterval(function animabuf() {
    if (fase != 0) {
        if (buf && buftempo > 0) {
            bufcolete.animations.play('ativo');
            if (dobrodanodobropontos) {
                dano = 2;
            } else {
                dano = 1;
            }
            buftempo -= 1;
        } else {
            buf = false;
            buftempo = 10;
            if (dobrodanodobropontos) {
                dano = 4;
            } else {
                dano = 2;
            }
            try {
                bufcolete.animations.play('desativado');
            } catch{ }
        }
    }
}, 1000)
function tirosaiudatela() {
    atirou = false;
    tirodeplasma.animations.play('TiroSome');
    tirodeplasma.x = 20;
    tirodeplasma.y = 20;
}
setInterval(function () {
    if (fase != 0) {
        if (atirou && directiro == 'UP') {
            tirodeplasma.animations.play('TiroUP');
            tiroY -= 3;
            tirodeplasma.y = tiroY;
        }
        if (atirou && directiro == 'DWN') {
            tirodeplasma.animations.play('TiroDWN');
            tiroY += 3;
            tirodeplasma.y = tiroY;
        }
        if (atirou && directiro == 'L') {
            tirodeplasma.animations.play('TiroL');
            tiroX -= 3;
            tirodeplasma.x = tiroX;
        }
        if (atirou && directiro == 'R') {
            tirodeplasma.animations.play('TiroR');
            tiroX += 3;
            tirodeplasma.x = tiroX;
        }
    }
}, 10)
function atira() {
    rodasomtiro();
    tirodeplasma.x = perso.x - 25;
    tirodeplasma.y = perso.y;
    tiroX = perso.x - 25;
    tiroY = perso.y;
    if (direcperso == 'UP' && !atirou) {
        directiro = 'UP';
        atirou = true;
    }
    if (direcperso == 'DWN' && !atirou) {
        directiro = 'DWN';
        atirou = true;
    }
    if (direcperso == 'L' && !atirou) {
        directiro = 'L';
        atirou = true;
    }
    if (direcperso == 'R' && !atirou) {
        directiro = 'R';
        atirou = true;
    }
}
function vertecla() {
    document.onkeypress = function (e) {
        /*
        if(direcperso=='UP' && e.charCode == 101){
            perso.animations.play('PegaT');
        }
        if(direcperso=='DWN' && e.charCode == 101){
            perso.animations.play('PegaF');
        }
        if(direcperso=='L' && e.charCode == 101){
            perso.animations.play('PegaE');
        }
        if(direcperso=='R' && e.charCode == 101){
            perso.animations.play('PegaD');
        }
        */
        if (e.charCode == 32 && slotselecionado == 1) {
            if (testando) {
                console.log(`x = (${posxPerso}) / y = (${posyPerso})`);
            }
            if (slot1 == 1) {
                if (mana > 0 && !atirou) {
                    mana -= 1;
                    atira();
                }
            }
            if (slot1 == 2 && !buf) {
                slot1 = 0;
                buf = true;
            }
            if (slot1 == 3) {
                slot1 = 0;
                vida += 5;
                if (vida > 10) {
                    vida = 10;
                }
            }
            if (slot1 == 4) {
                if (mana >= 2) {
                    vida += 1;
                    mana -= 2;
                    if (vida > 10) {
                        vida = 10;
                    }
                }
            }
            if (slot1 == 5) {
                slot1 = 0;
                mana += 5;
                if (mana > 10) {
                    mana = 10;
                }
            }
        }
        if (e.charCode == 32 && slotselecionado == 2) {
            if (slot2 == 1) {
                if (mana > 0 && !atirou) {
                    mana -= 1;
                    atira();
                }
            }
            if (slot2 == 2 && !buf) {
                slot2 = 0;
                buf = true;
            }
            if (slot2 == 3) {
                slot2 = 0;
                vida += 5;
                if (vida > 10) {
                    vida = 10;
                }
            }
            if (slot2 == 4) {
                if (mana >= 2) {
                    vida += 1;
                    mana -= 2;
                    if (vida > 10) {
                        vida = 10;
                    }
                }
            }
            if (slot2 == 5) {
                slot2 = 0;
                mana += 5;
                if (mana > 10) {
                    mana = 10;
                }
            }
        }
        if (e.charCode == 32 && slotselecionado == 3) {
            if (slot3 == 1) {
                if (mana > 0 && !atirou) {
                    mana -= 1;
                    atira();
                }
            }
            if (slot3 == 2 && !buf) {
                slot3 = 0;
                buf = true;
            }
            if (slot3 == 3) {
                slot3 = 0;
                vida += 5;
                if (vida > 10) {
                    vida = 10;
                }
            }
            if (slot3 == 4) {
                if (mana >= 2) {
                    vida += 1;
                    mana -= 2;
                    if (vida > 10) {
                        vida = 10;
                    }
                }
            }
            if (slot3 == 5) {
                slot3 = 0;
                mana += 5;
                if (mana > 10) {
                    mana = 10;
                }
            }
        }
        if (e.charCode == 32 && slotselecionado == 4) {
            if (slot4 == 1) {
                if (mana > 0 && !atirou) {
                    mana -= 1;
                    atira();
                }
            }
            if (slot4 == 2 && !buf) {
                slot4 = 0;
                buf = true;
            }
            if (slot4 == 3) {
                slot3 = 0;
                vida += 5;
                if (vida > 10) {
                    vida = 10;
                }
            }
            if (slot4 == 4) {
                if (mana >= 2) {
                    vida += 1;
                    mana -= 2;
                    if (vida > 10) {
                        vida = 10;
                    }
                }
            }
            if (slot4 == 5) {
                slot3 = 0;
                mana += 5;
                if (mana > 10) {
                    mana = 10;
                }
            }
        }
        if (e.charCode == 49) {
            slotselecionado = 1;
        }
        if (e.charCode == 50) {
            slotselecionado = 2;
        }
        if (e.charCode == 51) {
            slotselecionado = 3;
        }
        if (e.charCode == 52) {
            slotselecionado = 4;
        }
        // alavancas
        if (e.charCode == 101 || e.charCode == 69) {
            if (tocandoalv1) {
                if (alv01f1ativada) {
                    alv01f1ativada = false;
                    alv01f1.animations.play('desacionaalv');
                } else {
                    alv01f1ativada = true;
                    alv01f1.animations.play('acionaalv');
                }
            }
        }
        if (e.charCode == 101 || e.charCode == 69) {
            if (tocandoalv2) {
                if (alv01f2ativada) {
                    alv01f2ativada = false;
                    alv01f2.animations.play('desacionaalv');
                } else {
                    alv01f2ativada = true;
                    alv01f2.animations.play('acionaalv');
                }
            }
        }
        if (e.charCode == 101 || e.charCode == 69) {
            if (tocandoalv3) {
                if (alv02f2ativada) {
                    alv02f2ativada = false;
                    alv02f2.animations.play('desacionaalv');
                } else {
                    alv02f2ativada = true;
                    alv02f2.animations.play('acionaalv');
                }
            }
        }
        if (e.charCode == 101 || e.charCode == 69) {
            if (tocandoalv4) {
                if (alv03f2ativada) {
                    alv03f2ativada = false;
                    alv03f2.animations.play('desacionaalv');
                } else {
                    alv03f2ativada = true;
                    alv03f2.animations.play('acionaalv');
                }
            }
        }
        if (e.charCode == 101 || e.charCode == 69) {
            if (tocandoalv5) {
                if (alv04f2ativada) {
                    alv04f2ativada = false;
                    alv04f2.animations.play('desacionaalv');
                } else {
                    alv04f2ativada = true;
                    alv04f2.animations.play('acionaalv');
                }
            }
        }
        //...........................
        if (e.charCode == 101 || e.charCode == 69) {
            if (fase == 5) {
                if (tocandocadaver) {
                    carta.animations.play('abre');
                    cartavista = true;
                }
                if (tocandocofre) {
                    cofre.animations.play('abre');
                    abriucofre = true;
                }
            }
        }
        if (e.charCode == 101 || e.charCode == 69) {
            if (tocandopc01f4) {
                if (!pcativo) {
                    pcativo = true;
                }
            }
            if (tocandopc02f4) {
                if (!pcativo) {
                    pcativo = true;
                }
            }
            if (tocandopc03f4) {
                if (!pcativo) {
                    pcativo = true;
                }
            }
            if (tocandopc04f4) {
                if (!pcativo) {
                    pcativo = true;
                }
            }
        }
        if (e.charCode == 101 || e.charCode == 69) {
            if (fase == 4) {
                if (tocandopc01f4) {
                    telapc1.animations.play('aparecetela');
                    btnsairtelapc.x = 1152;
                }
                if (tocandopc02f4) {
                    telapc2.animations.play('aparecetela');
                    btnsairtelapc.x = 1152;
                }
                if (tocandopc03f4) {
                    telapc3.animations.play('aparecetela');
                    btnsairtelapc.x = 1152;
                }
                if (tocandopc04f4) {
                    telapc4.animations.play('aparecetela');
                    btnsairtelapc.x = 1152;
                }
            }
        }
        if (e.charCode == 101 || e.charCode == 69) {
            if (tocandoapc) {
                if (!pcativo) {
                    pcativo = true;
                    if (fase == 1) {
                        telapcbase.animations.play('aparecetela');
                        btnsairtelapc.x = 1152;
                        btnalv1.x = 700;
                        btnporta1.x = 1000;
                        linksimg.x = 880;
                    }
                    if (fase == 2) {
                        telapcbase.animations.play('aparecetela');
                        btnsairtelapc.x = 1152;
                        f2btn1.x = 685;
                        f2btn2.x = 685;
                        f2btn3.x = 685;
                        f2btnporta.x = 1042;
                        f2btnfixo.x = 680;
                        f2btnportafinal.x = 1042;
                    }
                    if (fase == 3) {
                        telapcbase.animations.play('aparecetela');
                        btnsairtelapc.x = 1152;
                        telapciconsf3.x = 600;
                        btnalavanca1f3.x = 600;
                        btnalavanca2f3.x = 600;
                        btnreator.x = 960;
                        btnporta2f3.x = 960;
                    }
                    if (fase == 4) {
                        telapcbase.animations.play('aparecetela');
                        btnsairtelapc.x = 1152;
                        f4btn0.x = 800;
                        f4btn1.x = 700;
                        f4btn2.x = 800;
                        f4btn3.x = 900;
                        f4btn4.x = 700;
                        f4btn5.x = 800;
                        f4btn6.x = 900;
                        f4btn7.x = 700;
                        f4btn8.x = 800;
                        f4btn9.x = 900;
                        f4btnenter.x = 1000;
                        f4btncancelar.x = 1000;
                        codeinsert.x = 1000;
                        inputcodigo.x = 1010;
                    }
                }
            }
        }
        if (e.charCode == 101 || e.charCode == 69) {
            if (tocandopohp) {
                POCAO_HP.kill();
                POCAO_HP.x = 0;
                POCAO_HP.y = 0;
                if (slot1 == 0) {
                    slot1 = 3;
                } else {
                    if (slot2 == 0) {
                        slot2 = 3;
                    } else {
                        if (slot3 == 0) {
                            slot3 = 3;
                        } else {
                            if (slot4 == 0) {
                                slot4 = 3;
                            } else {
                                if (slotselecionado == 1) {
                                    if (slot1 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot1 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot1 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot1 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot1 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot1 = 3;
                                }
                                if (slotselecionado == 2) {
                                    if (slot2 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot2 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot2 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot2 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot2 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot2 = 3;
                                }
                                if (slotselecionado == 3) {
                                    if (slot3 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot3 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot3 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot3 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot3 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot3 = 3;
                                }
                                if (slotselecionado == 4) {
                                    if (slot4 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot4 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot4 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot4 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot4 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot4 = 3;
                                }
                            }
                        }
                    }
                }
            }
            if (tocandopomana) {
                POCAO_MANA.kill();
                POCAO_MANA.x = 0;
                POCAO_MANA.y = 0;
                if (slot1 == 0) {
                    slot1 = 5;
                } else {
                    if (slot2 == 0) {
                        slot2 = 5;
                    } else {
                        if (slot3 == 0) {
                            slot3 = 5;
                        } else {
                            if (slot4 == 0) {
                                slot4 = 5;
                            } else {
                                if (slotselecionado == 1) {
                                    if (slot1 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot1 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot1 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot1 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot1 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot1 = 5;
                                }
                                if (slotselecionado == 2) {
                                    if (slot2 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot2 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot2 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot2 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot2 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot2 = 5;
                                }
                                if (slotselecionado == 3) {
                                    if (slot3 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot3 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot3 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot3 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot3 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot3 = 5;
                                }
                                if (slotselecionado == 4) {
                                    if (slot4 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot4 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot4 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot4 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot4 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot4 = 5;
                                }
                            }
                        }
                    }
                }
            }
            if (tocandoconversor) {
                CONVERSOR_DE_MANA.kill();
                CONVERSOR_DE_MANA.x = 0;
                CONVERSOR_DE_MANA.y = 0;
                if (slot1 == 0) {
                    slot1 = 4;
                } else {
                    if (slot2 == 0) {
                        slot2 = 4;
                    } else {
                        if (slot3 == 0) {
                            slot3 = 4;
                        } else {
                            if (slot4 == 0) {
                                slot4 = 4;
                            } else {
                                if (slotselecionado == 1) {
                                    if (slot1 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot1 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot1 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot1 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot1 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot1 = 4;
                                }
                                if (slotselecionado == 2) {
                                    if (slot2 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot2 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot2 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot2 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot2 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot2 = 4;
                                }
                                if (slotselecionado == 3) {
                                    if (slot3 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot3 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot3 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot3 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot3 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot3 = 4;
                                }
                                if (slotselecionado == 4) {
                                    if (slot4 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot4 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot4 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot4 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot4 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot4 = 4;
                                }
                            }
                        }
                    }
                }
            }
            if (tocandocolete) {
                COLETE.kill();
                COLETE.x = 0;
                COLETE.y = 0;
                if (slot1 == 0) {
                    slot1 = 2;
                } else {
                    if (slot2 == 0) {
                        slot2 = 2;
                    } else {
                        if (slot3 == 0) {
                            slot3 = 2;
                        } else {
                            if (slot4 == 0) {
                                slot4 = 2;
                            } else {
                                if (slotselecionado == 1) {
                                    if (slot1 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot1 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot1 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot1 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot1 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot1 = 2;
                                }
                                if (slotselecionado == 2) {
                                    if (slot2 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot2 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot2 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot2 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot2 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot2 = 2;
                                }
                                if (slotselecionado == 3) {
                                    if (slot3 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot3 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot3 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot3 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot3 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot3 = 2;
                                }
                                if (slotselecionado == 4) {
                                    if (slot4 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot4 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot4 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot4 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot4 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot4 = 2;
                                }
                            }
                        }
                    }
                }
            }
            if (tocandobracelete) {
                BRACELETE_PLASMATICO.kill();
                BRACELETE_PLASMATICO.x = 0;
                BRACELETE_PLASMATICO.y = 0;
                if (slot1 == 0) {
                    slot1 = 1;
                } else {
                    if (slot2 == 0) {
                        slot2 = 1;
                    } else {
                        if (slot3 == 0) {
                            slot3 = 1;
                        } else {
                            if (slot4 == 0) {
                                slot4 = 1;
                            } else {
                                if (slotselecionado == 1) {
                                    if (slot1 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot1 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot1 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot1 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot1 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot1 = 1;
                                }
                                if (slotselecionado == 2) {
                                    if (slot2 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot2 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot2 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot2 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot2 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot2 = 1;
                                }
                                if (slotselecionado == 3) {
                                    if (slot3 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot3 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot3 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot3 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot3 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot3 = 1;
                                }
                                if (slotselecionado == 4) {
                                    if (slot4 == 1) {
                                        botabracelete(perso.x, perso.y);
                                    }
                                    if (slot4 == 2) {
                                        botaCOLETE(perso.x, perso.y);
                                    }
                                    if (slot4 == 3) {
                                        botaPOCAO_HP(perso.x, perso.y);
                                    }
                                    if (slot4 == 4) {
                                        botaCONVERSOR(perso.x, perso.y);
                                    }
                                    if (slot4 == 5) {
                                        botaPOCAO_MANA(perso.x, perso.y);
                                    }
                                    slot4 = 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (e.charCode == 119 || e.charCode==87) {
            if (!viragemver) {
                if (direcperso == 'UP') {
                    virou = true;
                } else {
                    virou = false;
                }
                viragemver = true;
            }
            direcanter = direcperso;
            direcperso = 'UP'
            //W
            andando = true;
        }
        if ((e.charCode == 105 ||e.charCode ==73) && tocandobau && !bauaberto) {
            abreBau(bau.x + 30, bau.y + 30);
            bauaberto = true;
        }
        if (e.charCode == 97 || e.charCode==65) {
            if (!viragemver) {
                if (direcperso == 'L') {
                    virou = true;
                } else {
                    virou = false;
                }
                viragemver = true;
            }
            direcanter = direcperso;
            direcperso = 'L'
            //A
            andando = true;
        }

        if (e.charCode == 115 || e.charCode==83) {
            if (!viragemver) {
                if (direcperso == 'DWN') {
                    virou = true;
                } else {
                    virou = false;
                }
                viragemver = true;
            }
            direcanter = direcperso;
            direcperso = 'DWN'
            //S
            andando = true;
        }

        if (e.charCode == 100 || e.charCode==68) {
            if (!viragemver) {
                if (direcperso == 'R') {
                    virou = true;
                } else {
                    virou = false;
                }
                viragemver = true;
            }
            direcanter = direcperso;
            direcperso = 'R'
            //D
            andando = true;
        }
    }
    document.onkeyup = function () {
        andando = false;
        viragemver = false;
    }
}
function verslotselected() {
    if (slotselecionado == 1) {
        selecao.y = 145;
    }
    if (slotselecionado == 2) {
        selecao.y = 235;
    }
    if (slotselecionado == 3) {
        selecao.y = 320;
    }
    if (slotselecionado == 4) {
        selecao.y = 410;
    }
}
setInterval(function () {
    if (fase != 0) {
        virou = true;
        /*
    if(!virou){
        if(direcperso == 'UP' && direcanter == 'R' && !virou){
            perso.animations.play('R.UP');                          
        }
        if(direcperso == 'UP' && direcanter == 'L' && !virou){
            perso.animations.play('L.UP');                
        }
        if(direcperso == 'UP' && direcanter == 'DWN' && !virou){
            perso.animations.play('DWN.UP');               
        }
        
        if(direcperso == 'L' && direcanter == 'UP' && !virou){
            perso.animations.play('UP.L');                
        }
        if(direcperso == 'L' && direcanter == 'R' && !virou){
            perso.animations.play('R.L');                
        }
        if(direcperso == 'L' && direcanter == 'DWN' && !virou){
            perso.animations.play('DWN.L');               
        }

        if(direcperso == 'R' && direcanter == 'L' && !virou){
            perso.animations.play('L.R');                
        }
        if(direcperso == 'R' && direcanter == 'UP' && !virou){
            perso.animations.play('UP.R');                
        }
        if(direcperso == 'R' && direcanter == 'DWN' && !virou){
            perso.animations.play('DWN.R');               
        }

        if(direcperso == 'DWN' && direcanter == 'L' && !virou){
            perso.animations.play('L.DWN');
        }
        if(direcperso == 'DWN' && direcanter == 'R' && !virou){
            perso.animations.play('R.DWN');                
        }
        if(direcperso == 'DWN' && direcanter == 'UP' && !virou){
            perso.animations.play('UP.DWN');               
        }
    }
    */
    }
}, 1)
function anima() {
    if (virou) {
        if (direcperso == 'UP' && andando == true) {
            perso.animations.play('AndaT');
        }
        if (direcperso == 'L' && andando == true) {
            perso.animations.play('AndaE');
        }
        if (direcperso == 'DWN' && andando == true) {
            perso.animations.play('AndaF');
        }
        if (direcperso == 'R' && andando == true) {
            perso.animations.play('AndaD');
        }
    }

}
setInterval(function () {
    if (fase != 0) {
        if (direcperso == 'UP' && andando == false && tomoudano == false) {
            perso.animations.play('ParadoT');
        }
        if (direcperso == 'L' && andando == false && tomoudano == false) {
            perso.animations.play('ParadoE');
        }
        if (direcperso == 'DWN' && andando == false && tomoudano == false) {
            try {
                perso.animations.play('ParadoF');
            } catch{ }
        }
        if (direcperso == 'R' && andando == false && tomoudano == false) {
            perso.animations.play('ParadoD');
        }
    }
}, 1)

function movimenta() {
    if (virou) {
        if (direcperso == 'UP' && andando == true) {
            posyPerso -= 5;
            perso.y = posyPerso;
        }
        if (direcperso == 'L' && andando == true) {
            posxPerso -= 5;
            perso.x = posxPerso;
        }
        if (direcperso == 'DWN' && andando == true) {
            posyPerso += 5;
            perso.y = posyPerso;
        }
        if (direcperso == 'R' && andando == true) {
            posxPerso += 5;
            perso.x = posxPerso;
        }
    }
}
function checaVM() {
    if (mana < 0) {
        mana = 0;
    }
    if (mana > 10) {
        mana = 10;
    }
    if (mana == 0) {
        barramana.animations.play('M0');
    }
    if (mana == 1) {
        barramana.animations.play('M1');
    }
    if (mana == 2) {
        barramana.animations.play('M2');
    }
    if (mana == 3) {
        barramana.animations.play('M3');
    }
    if (mana == 4) {
        barramana.animations.play('M4');
    }
    if (mana == 5) {
        barramana.animations.play('M5');
    }
    if (mana == 6) {
        barramana.animations.play('M6');
    }
    if (mana == 7) {
        barramana.animations.play('M7');
    }
    if (mana == 8) {
        barramana.animations.play('M8');
    }
    if (mana == 9) {
        barramana.animations.play('M9');
    }
    if (mana == 10) {
        barramana.animations.play('M10');
    }
    if (vida < 0) {
        vida = 0;
    }
    if (vida > 10) {
        vida = 10;
    }
    if (vida == 0) {
        barravida.animations.play('V0');
    }
    if (vida == 1) {
        barravida.animations.play('V1');
    }
    if (vida == 2) {
        barravida.animations.play('V2');
    }
    if (vida == 3) {
        barravida.animations.play('V3');
    }
    if (vida == 4) {
        barravida.animations.play('V4');
    }
    if (vida == 5) {
        barravida.animations.play('V5');
    }
    if (vida == 6) {
        barravida.animations.play('V6');
    }
    if (vida == 7) {
        barravida.animations.play('V7');
    }
    if (vida == 8) {
        barravida.animations.play('V8');
    }
    if (vida == 9) {
        barravida.animations.play('V9');
    }
    if (vida == 10) {
        barravida.animations.play('V10');
    }
}
/*
function iniciar() {
    btnjogar.destroy();
    ball.body.velocity.set(150, -150);
    jogando = true;
}
*/
function botabracelete(x, y) {
    BRACELETE_PLASMATICO = game.add.sprite(x, y, 'BRACELETE_PLASMATICO', 0);
    BRACELETE_PLASMATICO.animations.add('PulaBrace', [0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0], 5);
}
function BRACELETE_PLASMATICOanimtion() {
    BRACELETE_PLASMATICO.animations.play('PulaBrace');
}

function botaCONVERSOR(x, y) {
    CONVERSOR_DE_MANA = game.add.sprite(x, y, 'CONVERSOR_DE_MANA', 0);
    CONVERSOR_DE_MANA.animations.add('PulaConversor', [0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0], 5);
}
function CONVERSOR_DE_MANAanimtion() {
    CONVERSOR_DE_MANA.animations.play('PulaConversor');
}

function botaCOLETE(x, y) {
    COLETE = game.add.sprite(x, y, 'COLETE', 0);
    COLETE.animations.add('PulaCOLETE', [0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0], 5);
}
function COLETEanimtion() {
    COLETE.animations.play('PulaCOLETE');
}

function botaPOCAO_HP(x, y) {
    POCAO_HP = game.add.sprite(x, y, 'POCAO_HP', 0);
    POCAO_HP.animations.add('PulaPOCAO_HP', [0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0], 5);
}
function POCAO_HPanimtion() {
    POCAO_HP.animations.play('PulaPOCAO_HP');
}

function botaPOCAO_MANA(x, y) {
    POCAO_MANA = game.add.sprite(x, y, 'POCAO_MANA', 0);
    POCAO_MANA.animations.add('PulaPOCAO_MANA', [0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0], 5);
}
function POCAO_MANAanimtion() {
    POCAO_MANA.animations.play('PulaPOCAO_MANA');
}

function botaBau(x, y) {
    bau.x = x;
    bau.y = y;
    bau.animations.add('abre', [0, 1, 2], 2);
    bauaberto = false;
}
function abreBau(x, y) {
    var n = Math.random();
    bau.animations.play('abre');
    if (n >= 0 && n <= 0.1) {
        botaPOCAO_HP(x, y);
    }
    if (n > 0.1 && n <= 0.6) {
        botaPOCAO_MANA(x, y);
    }
    if (n > 0.6 && n <= 0.8) {
        botaCONVERSOR(x, y);
    }
    if (n > 0.8 && n <= 1) {
        botaCOLETE(x, y);
    }
}