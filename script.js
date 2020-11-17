/*    
    var num = Number(document.querySelector('input#num').value)
    var lista = document.querySelector('select#lista')
    var res = document.querySelector('div#res')
    var valores = []
function adicionar()
{
    num = Number(document.querySelector('input#num').value)
    lista = document.querySelector('select#lista')
    res = document.querySelector('div#res')
    valores = []
    if (num < 1 || num > 100 || num.length == 0 || valores.indexOf(num) != -1)
    {
        alert("valor invalido ou ja encontrado na lista")
        num.value = ``
        num.focus()
    }else
    {
        valores.push(num) 
        let item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
        num.value = ``
        num.focus()
    }
}
function finalizar()
{
    let total = valores.length
    let maior = valores[valores.length -1]
    let menor = valores[0]
    let soma = 0
    for(var pos in valores)
    {
        soma += valores[pos]
    }
    let media = soma / total
    if(valores.length === 0)
    {
        alert('adicione valores antes de finalizar')
    }else
    {
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos, temos ${total} elementos</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A mediaa dos valores digitados e ${media.toFixed(2)}</p>`
    }
}
//
HTML >
// add o onkeydown="myFunction(event)"
            Número(entre 1 e 100): <input type="number" onkeydown="myFunction(event)" name="txtn" id="txtn" />
// add o id="myBtn" 
            <input id="myBtn" type="submit" value="Adicionar" onclick="adicionar()" />

*JS*>
// habilitar a tecla Enter do teclado pro botão
function myFunction(event) {
    var x = event.keyCode
    if (x === 13) { // 13 é a key Enter
        document.getElementById("myBtn").click(); // força o click da input submit
    }
}

//
num.addEventListener("keypress", function (event) 
{
    if (event.key === 'Enter') 
    {
        event.preventDefault();
        addNum()
    }
});
num.value = ' '
num.focus( )    
function isNumero(n)//Validando o número.
{
    return (Number(n) >= 1 && Number(n) <= 100)
}
function inlista(n, l)//Verificando se o número está na lista.
{
    return l.indexOf(Number(n)) !== -1;// O numero ja está na lista
}
//
function tabuada()
{
    var num = Number(document.querySelector('input#num').value)
    var res = document.getElementById('tab')
    if(num.length == 0)
    {
        alert("por favor, digite um numero!")
    }else
    {
        var c = 1
        while(c <= 10)
        {
            res.innerHTML += `<option>${c} X ${num} = ${c * num}\n</option>`
            c++
        }
    }
}
//
function contador()
{
    var inicio = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.querySelector('input#passo').value)
    var res = document.querySelector('div#res')
    if(inicio.length == 0 || fim.length == 0 || passo.length)
    {
        res.innerHTML='Impossível contar!'
    }else if (passo <= 0) 
    {
        res.innerHTML = 'Opa... o passo não pode ser igual ou menor a 0. Tente novamente.'
    }else
    {
        res.innerHTML = 'Contando: </br>'
        if(inicio < fim) 
        {
            // Contagem Crescente
            for (inicio; inicio <= fim; inicio += passo) 
            {
                res.innerHTML += ` ${inicio} \u{1F449} `
            }
        } else 
        {
            // Contagem Regressiva
            for(inicio; inicio >= fim; inicio -= passo) 
            {
                 res.innerHTML += ` ${inicio} \u{1F449} `
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML += ' \u{1F3C1} '
    }
}
//
function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('An')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano )
    {
        alert("erro...Verifique os dados e tente novamente!")
    }else
    {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sex[0].checked)
        {
            genero = 'Homem'
            if(idade >= 0 && idade < 13)
            {
                img.setAttribute('src','imagens/foto-bebe-m.png')
            }else if(idade >=13 && idade < 18)
            {
                img.setAttribute('src','imagens/foto-jovem-m.png')
            }else if(idade >= 18 && idade < 60)
            {
                img.setAttribute('src','imagens/foto-adulto-m.png')
            }else 
            {
                img.setAttribute('src','imagens/foto-idoso-m.png')
            }
        }else if(sex[1].checked)
        {
            genero = 'Mulher'
            if(idade >= 0 && idade < 13)
            {
                img.setAttribute('src','imagens/foto-bebe-f.png')
            }else if(idade >=13 && idade < 18)
            {
                img.setAttribute('src','imagens/foto-jovem-f.png')
            }else if(idade >=18 && idade < 60)
            {
                img.setAttribute('src','imagens/foto-adulto-f.png')
            }else 
            {
                img.setAttribute('src','imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}
//
function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    // Função para formatar 1 em 01
    const zeroFill = n =>
    {
		return ('0' + n).slice(-2)
    }
    //cria intervalo
    const interval = setInterval(() => 
    {
        //pega a hora atual
        var now = new Date()
        var ano = now.getFullYear()
        var mes = now.getMonth()
        var dia = now.getDate()
        var hora = now.getHours()
        var minuto = now.getMinutes()
        var segundo = now.getSeconds()
        //formata a data e hora
        const dataHora = `hoje é ${zeroFill(dia)}/${zeroFill(mes + 1)}/${ano} às ${zeroFill(hora)}:${zeroFill(minuto)}:${zeroFill(segundo)}`
        //exibe na tela usando div
        msg.innerHTML = dataHora
        if(hora > 24 && hora < 13)
        {
            img.src = 'imagens/manha.jpg'
        }else if(hora >= 13 && hora < 19)
        {
            img.src = 'imagens/tarde.jpg'
        }else if(hora >= 19 && hora <= 24)
        {
            img.src = 'imagens/noite.jpg'
        }
    }, 1000); 
}
//
document.body.style.background = 'black';
//
// Função para formatar 1 em 01
    const zeroFill = n =>
    {
		return ('0' + n).slice(-2);
    }
    //cria intervalo
    const interval = setInterval(() => 
    {
        //pega a hora atual
        var now = new Date()
        //formata a data e hora
        const dataHora = 'hoje é '+ zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' às ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
        //exibe na tela usando div
        msg.innerHTML = dataHora
    }, 1000);    
}
//
//objetos
let amigo =
{
nome:'jose',
sexo:'masculino',
peso:64,
engordar(p=0)
{
    console.log('engordar')
    this.peso += p
}
}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
typeof amigo = objeto
//ESTUDAR
//
funcao 
objetos
modularizacao
regulares-regEx
JSON
AJAX
NodeJS
//
function fatorial(n = 0)
{
    let fat = 1;
    for(let i = n; i > 1; i--)
    {
        fat *= i
    }
    return fat
}
n = prompt();
console.log(fatorial(n))
let y = function(x)
{
    return x*3
}
console.log(y(4))
alert("escolha quatro numeros")
for(let i ; i < 4 ; i++)
{
    i = prompt()
}
function soma(res)
{
    return res = num[i] + num[i] + num[i] + num[i]
}
console.log(soma())
alert("conseguiu comprar o leite")
let comprar = prompt();
function chamarFilho(comprar)
{
    if(comprar == 'sim' )
    {
       return 'parabens'
    }else
    {
        return 'errado'
    }
}
console.log(chamarFilho(comprar))
let i = [10,9,8,7,6,5,4,3,2,1]
for(let pos in i)
{
    console.log(i[pos])
}
let pos = i.indexOf(10)
console.log(pos)
let i = [10,9,8,7,6,5,4,3,2,1]
for(let pos = 0; pos < i.length; pos++)
{
console.log(i[pos])
}
let a = ['btta',6544,3]
a[3] = 7
a.push(9)
a.length
a.sort()
console.log(a)
for(var i = 0; i < 8; i++)
{
    console.log("batata")
}
var c = 0
while(c <= 6)
{
    console.log("oi")
    c++
}
do 
{
    console.log("e ai")
}while(c <= 3)
var agora = new Date()
var hora = agora.getSeconds()
while(hora > 60){
console.log(`agora e ${hora}`)
}
switch(hora)
{
    case 1:
    console.log("1")
    break;
    default:
    break;
}
function calcular()
{
    var veiculo = document.querySelector("input#vel")
    var resultado = document.querySelector("div#resultado")
    var velocidade = Number(veiculo.value)
    resultado.innerHTML = `<p>Sua velocidade e de <strong>${velocidade}Km/h</strong></p>`
    if(velocidade >= 80)
    {
        resultado.innerHTML += `<p>nao passe da velocidade permitida</p>`
    }else if(velocidade <= 0)
    {
        resultado.innerHTML += `<p>erro... esta velocidade nao existe</p>`
    }else
        resultado.innerHTML += `<p>PARABENS voce esta sendo um otimo cidadao</p>`
    resultado.innerHTML += `<p>Dirija sempre com cinto de seguranca!</p>`
}
alert("qual e a velocidade que o cidadao andou ")
var vel1 = prompt();
if(vel1 >= 80)
{
    console.log("voce ultrapassou a velocidade permitida, voce esta MULTADO")
}else if(vel1 <= 0)
{
    console.log("erro...esta velocidade nao existe")
}else
{
    console.log("PARABENS voce andou na velocidade permitida")
    console.log("sempre use cinto de seguranca")
}
console.log("oi")
function somar()
{
     n1 = Number(document.getElementById('tn1').value)
     n2 = Number(document.getElementById('tn2').value)
     res = document.getElementById('res')
     soma = n1+n2
     res.innerText=`A soma entre ${n1} e ${n2} é igual a ${soma}`
}
var a = document.getElementById('area');
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)
function clicar()
{
    a.innerText = 'clicou!';
    a.style.background = "red";
}
function entrar()
{
    a.innerText = 'entrou!';
    a.style.background = "rgb(42, 139, 42)";
}
function sair()
{
    a.innerText = 'saiu!';
    a.style.background = "green";
}
var corpo = document.body
var p1 = document.getElementsByTagName('p')[1]
var d = document.querySelector('div.msg')
d.style.background = 'blue'
innerText
getElementsByTagName()
getElementById()
getDate()
getDay()
getFullyear()
getHours()
getMilliseconds()
getMinutes()
getMonth()
getSeconds()
getTime()
getYear()
getTimeIoneOffset()
getUTCDate()
getUTCDay()
getElementsByClassName()
querySelector()
querySelectorAll()
var nome = window.prompt("qual e seu nome")
document.write(`seu nome tem ${nome.length} letra`)
window.alert(`um grande prazer te conhecer ${nome}`)
   Number.parseInt(n)
   Number.parseFloat(n)
   Number(n)//inteiro e float
   String(n)//nome
   n.toString()
   ${n}//chamar
   n.length//quantos caracteres
   n.toUpperCase()//letra maiuscula
   n.toLowerCase()//letra miuscula
   n.toFixed(x)//x=quantidade de casas decimais
   n.replace('x','y')trocar isto por isto
   n.toLocaleString('pt-BR'(style: 'currency', currency: 'BRL'))//real dolar 
   +//soma
   -//menos
   * //multiplicacao
   / //divisao
   % //resto da divisao
   ** //potenciacao
   ordem = 1º:(),2º:**,3º:*,/,%,4º:+,-,
   receber ele mesmo: += -=*= /= **= %=
   ++ -- 
   < > >= <= == != ===//indentico
    conjuncao,pelo menos um ! //falso e verdadeiro e verdadeiro e falso && //disjuncao, todo
    n e verdadeiro ou falso ? <true>aprovado : <false>reprovado */