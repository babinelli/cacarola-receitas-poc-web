// Variáveis globais
var repositoryUser, repositoryRecipe;
var errorNome = false;
var errorEmail = false;
var errorUser = false;

// Funções chamadas pelo HTML
function MakeLogin() { // Cria os elementos da página Login.html, onde o usuário pode escolher entre fazer o login, ou registar-se

    var divLogin = document.getElementById('divLogin');

    // Frases
    var p;
    var data =
        [
            ['p1', 'Já és registado? Entre com o seu login!'],
            ['p2', 'Ainda não se registou? Registe-se agora para acessar receitas exclusivas!']
        ];

    for (var i = 0; i < data.length; i++) {
        p = MakeParagraph(data[i][0], data[i][1]);

        divLogin.appendChild(p);
    }

    // Botões Login ou Registar
    var button;
    var buttons =
        // [id, type, value]
        [
            ['buttonLogin', 'button', 'Fazer Login'],
            ['buttonFazerRegisto', 'button', 'Registar-me']
        ];

    for (var i = 0; i < buttons.length; i++) {
        button = MakeInputButton(buttons[i][0], buttons[i][1], buttons[i][2]);

        divLogin.appendChild(button);
    }

    document.getElementById('buttonLogin').onclick = function () { location.href = "LoginUsuario.html" };
    document.getElementById('buttonFazerRegisto').onclick = function () { location.href = "RegistarUsuario.html" };
}

function MakeRegistar() { // Cria os elementos da página RegistarUsuario.html, criando um formulário para o efeito

    var divRegistoUtilizador = document.getElementById('divRegistoUtilizador');

    // Input box e textarea
    var label;
    var input;
    var data =
        // [id, type, label, required]
        [
            ['nome', 'text', 'Nome: ', true],
            ['apelido', 'text', 'Apelido: ', true],
            ['dataNasc', 'date', 'Data de Nascimento: ', true],
            ['email', 'text', 'E-mail: ', true],
            ['emailConfirmation', 'text', 'Confirme seu e-mail: ', true],
            ['usuario', 'text', 'Usuário: ', true],
            ['senha', 'text', 'Senha: ', true]
        ];

    for (var i = 0; i < data.length; i++) {

        label = MakeLabel(data[i][2], data[i][0]);
        input = MakeInputBox(data[i][1], data[i][0], data[i][3]);

        divRegistoUtilizador.appendChild(label);
        divRegistoUtilizador.appendChild(document.createElement('br'));
        divRegistoUtilizador.appendChild(input);
        divRegistoUtilizador.appendChild(document.createElement('br'));
    }

    // Botões de registar
    var button;
    var buttons =
        // [id, type, value]
        [
            ['buttonRegistar', 'button', 'Registar'],
            ['buttonLimparRegisto', 'button', 'Limpar']
        ];

    for (var j = 0; j < buttons.length; j++) {
        button = MakeInputButton(buttons[j][0], buttons[j][1], buttons[j][2]);

        divRegistoUtilizador.appendChild(button);
    }

    document.getElementById('buttonRegistar').onclick = function () { ValidateRegistration() };
    document.getElementById('buttonLimparRegisto').onclick = function () { RefreshPage() };
}

function MakeFazerLogin() { // Cria os elementos da página LoginUsuario.html, criando um forulário para o efeito

    var divFazerLogin = document.getElementById('divFazerLogin');

    // Input box
    var label;
    var input;
    var data =
        // id, type, label, required
        [
            ['usuario', 'text', 'Usuário: ', true],
            ['senha', 'text', 'Senha: ', true]
        ];

    for (var i = 0; i < data.length; i++) {

        label = MakeLabel(data[i][2], data[i][0]);
        input = MakeInputBox(data[i][1], data[i][0], data[i][3]);

        divFazerLogin.appendChild(label);
        divFazerLogin.appendChild(document.createElement('br'));
        divFazerLogin.appendChild(input);
        divFazerLogin.appendChild(document.createElement('br'));
    }

    // Botões
    var button;
    var buttons =
        // [id, type, value]
        [
            ['buttonFazerLogin', 'button', 'Login'],
            ['buttonLimparLogin', 'button', 'Limpar']
        ];

    for (var i = 0; i < buttons.length; i++) {
        button = MakeInputButton(buttons[i][0], buttons[i][1], buttons[i][2]);

        divFazerLogin.appendChild(button);
    }

    document.getElementById('buttonFazerLogin').onclick = function () { ValidateLoginFromLogin() };
    document.getElementById('buttonLimparLogin').onclick = function () { RefreshPage() };
}

function MakeSearchBar() { // Cria os elementos da SearchBar, presente na página Homepage.html. É apenas ilustrativo, pois a função de busca ainda não foi implementada

    var divSearchBar = document.getElementById('divSearchBar');

    // Input box
    var input;
    var data =
        // [type, placeholder, name, id] --> placeholder dispensa a necessidade de usar label, já que fica dentro da própria caixa de texto
        [
            ['text', 'Buscar...', 'search', 'searchbar']
        ];

    for (var i = 0; i < data.length; i++) {
        input = MakeInputSearch(data[i][0], data[i][1], data[i][2], data[i][3]);

        divSearchBar.appendChild(input);
    }

    // Botões
    var button;
    var buttons =
        // [id, type, value]
        [
            ['buttonSearch', 'button', 'Buscar'] // Inserir emoji da lupa em javascript
        ];

    for (var i = 0; i < buttons.length; i++) {
        button = MakeInputButton(buttons[i][0], buttons[i][1], buttons[i][2]);

        divSearchBar.appendChild(button);
    }

    //CONFIGURAR ONCLICK BUTTON --> Adicionar função para buscar receitas (Improvement apra futuras versões)
}

function MakeFormReceita() { // Cria os elementos da página EnviarReceitas.html, criando um formulário para o efeito.

    var divEnviarReceita = document.getElementById('divEnviarReceita');

    // Input box e textarea
    var input;
    var data =
        // [id, text, placeholder, required] --> MakeInputBoxPlaceholder(type, id, required, placeholder)
        // [id, textarea, placeholder, required, rows, cols] --> MakeTextarea(id, type, rows, cols, placeholder, required)
        [
            ['nomeReceita', 'text', 'Nome da receita:', true],
            ['ingredientes', 'textarea', 'Ingredientes: (Ex: 250g farinha de trigo)', true, 10, 100],
            ['modoDePreparo', 'textarea', 'Modo de Preparo:', true, 20, 100],
            ['tempoDePreparo', 'number', 'Tempo de Preparo (em minutos):', true]
        ];

    for (var i = 0; i < data.length; i++) {

        if (data[i][1] == 'text' || data[i][1] == 'number') {
            input = MakeInputBoxPlaceholder(data[i][1], data[i][0], data[i][3], data[i][2]);
        }
        else if (data[i][1] == 'textarea') {
            input = MakeTextarea(data[i][0], data[i][1], data[i][4], data[i][5], data[i][2], data[i][3]);
        }

        divEnviarReceita.appendChild(input);
        divEnviarReceita.appendChild(document.createElement('br'));
    }

    // Dropdown
    var selectionC = document.createElement('select');
    selectionC.name = 'categoria';
    selectionC.id = 'categorias';
    divEnviarReceita.appendChild(selectionC);

    var selectionCategoria;
    var categorias =
        // [value, content, disabled, selected, hidden]
        [
            ['Categoria', 'Categoria', true, true, true],
            ['Aperitivo', 'Aperitivo', false, false, false],
            ['Entrada', 'Entrada', false, false, false],
            ['Prato Principal', 'Prato Principal', false, false, false],
            ['Acompanhamento', 'Acompanhamento', false, false, false],
            ['Sobremesa', 'Sobremesa', false, false, false],
            ['Bebida', 'Bebida', false, false, false]
        ];

    for (var i = 0; i < categorias.length; i++) {
        selectionCategoria = MakeSelectionOption(categorias[i][0], categorias[i][1], categorias[i][2], categorias[i][3], categorias[i][4]);

        selectionC.appendChild(selectionCategoria);
    }

    divEnviarReceita.appendChild(document.createElement('br'));

    var selectionD = document.createElement('select');
    selectionD.name = 'dificuldade';
    selectionD.id = 'dificuldade';
    divEnviarReceita.appendChild(selectionD);

    var selectionDificuldade;
    var dificuldade =
        [
            ['Dificuldade', 'Dificuldade', true, true, true],
            ['Fácil', 'Fácil', false, false, false],
            ['Média', 'Média', false, false, false],
            ['Difícil', 'Difícil', false, false, false]
        ];

    for (var i = 0; i < dificuldade.length; i++) {
        selectionDificuldade = MakeSelectionOption(dificuldade[i][0], dificuldade[i][1], dificuldade[i][2], dificuldade[i][3], dificuldade[i][4]);

        selectionD.appendChild(selectionDificuldade);
    }

    divEnviarReceita.appendChild(document.createElement('br'));

    // Botões
    var button;
    var buttons =
        // [id, type, value]
        [
            ['buttonEnviarReceita', 'button', 'Enviar Receita'],
            ['buttonLimparReceita', 'button', 'Limpar']
        ];

    for (var i = 0; i < buttons.length; i++) {
        button = MakeInputButton(buttons[i][0], buttons[i][1], buttons[i][2]);

        divEnviarReceita.appendChild(button);
    }


    document.getElementById('buttonEnviarReceita').onclick = function () { GetRecipe() };
    document.getElementById('buttonLimparReceita').onclick = function () { RefreshPage() };

}
// Funções internas ao JS

function MakeLabel(content, id) { // Cria o elemento tipo label

    var label = document.createElement('label');

    label.id = id + "Label";
    label.textContent = content;

    return label;
}

function MakeInputBox(type, id, required) { // Cria o elemento tipo input box (text, number, date, etc), com necessidade de label

    var inputBox = document.createElement('input');

    inputBox.type = type;
    inputBox.id = id;
    if (required) {
        inputBox.required = required;
    }

    return inputBox;
}

function MakeTextarea(id, type, rows, cols, placeholder, required) { // Cria o elemento tipo textarea

    var textarea = document.createElement('textarea');

    textarea.type = type;
    textarea.id = id;
    textarea.rows = rows;
    textarea.cols = cols;
    textarea.placeholder = placeholder;
    if (required) {
        textarea.required = required;
    }

    return textarea;
}

function MakeInputBoxPlaceholder(type, id, required, placeholder) { // Cria o elemento tipo input box, com placeholder

    var inputBox = document.createElement('input');

    inputBox.type = type;
    inputBox.id = id;
    inputBox.placeholder = placeholder;
    if (required) {
        inputBox.required = required;
    }

    return inputBox;
}

function MakeInputButton(id, type, value) { // Cria o elemento button

    var inputButton = document.createElement('input');

    inputButton.id = id;
    inputButton.type = type;
    inputButton.value = value;

    return inputButton;
}

function MakeParagraph(id, content) { // Cria o elemento paragraph

    var p = document.createElement('p');

    p.id = id;
    p.textContent = content;

    return p;
}

function MakeSelectionOption(value, content, disabled, selected, hidden) { // Cria o elemento option de um dropdown (<select>)

    var option = document.createElement('option');

    option.value = value;
    option.textContent = content;
    option.disabled = disabled;
    option.selected = selected;
    option.hidden = hidden;


    return option;
}

function MakeInputSearch(type, placeholder, name, id) { // Usado apra criar a barra de busca

    var searchBar = document.createElement('input');

    searchBar.type = type;
    searchBar.placeholder = placeholder;
    searchBar.name = name;
    searchBar.id = id;

    return searchBar;
}

function ValidateRegistration() { // Valida dados inseridos pelo usuário quando do registo de novo usuário

    var fullName = GetFullName();
    var birthday = GetBirthday();
    var email = GetAndValidateEmail();
    var user = GetUser();
    var password = GetPassword();

    // Se não houverem erros e campos não estiverem vazios
    if (!errorNome && !errorEmail && fullName != "" && birthday != "" && email != "" && user != "" && password != "") {

        CreatUser(user, password, fullName, birthday, email);

        window.alert("Registo realizado com sucesso!");
    }
    // Se o nome de usuário já estiver registado no localStorage
    else if (errorUser) {
        window.alert("Nome de usuário já registado.");
    }
    // Se houverem campos vazios
    else {
        window.alert("Preencha corretamente todos os campos.");
    }

}

function CreatUser(user, password, fullName, birthday, email) { // Cria um novo usuário caso ele não exista no localStorage

    var utilizador = [user, password, fullName, birthday, email];

    if (typeof (Storage) !== "undefined") {

        // Se já exisir a Key "users" na localStorage, adiciona o novo user
        if (localStorage.getItem('users')) {
            var usuarios = localStorage.getItem('users'); // localStorage retorna String

            // Cada usuário está separado por |, e cada info de cada usuário está separado por ,
            // É preciso adaptar isso, pois o usuário pode inserir vírgulas nos campos, o que acarretaria erro na conversão de string para array (Improvment para versões futuras)
            usuarios += utilizador + "|";

            localStorage.setItem('users', usuarios);
        }
        // Caso não exista, cria e adiciona o novo user
        else {
            localStorage.setItem('users', utilizador + "|");
        }
    }
    else {
        window.alert("Não foi possível concluir seu registo :(\n\nTente novamente em outro browser.");
    }

}

function GetFullName() { // Pega o nome e apelido inserido pelo usuário e forma o nome completo

    var nome = document.getElementById('nome').value;
    var apelido = document.getElementById('apelido').value;
    var nameFormat = /[a-zA-Z]*/; // RegEx para validar nome

    // Se nome ou apelido estiverem vazios
    if (nome == "" || apelido == "") {
        errorNome = true;
        fullname = "";
    }
    // Se nome ou apelido não corresponderem ao nameFormat
    else if ((nome.match(nameFormat)[0]) == "" || (apelido.match(nameFormat)[0] == "")) {
        window.alert("Verifique o nome e apelido");
        errorNome = true;
        fullname = "";
    }
    else {
        var fullName = nome + " " + apelido;
        errorNome = false;
    }

    return fullName;
}

function GetBirthday() { // Pega a data de nascimento inserida pelo usuário

    var birthday = document.getElementById('dataNasc').value;

    // Se birthday não for undefined e estiver preenchido
    if (birthday && birthday != "") {
        return birthday;
    }
    else {
        return false;
    }
}

function GetAndValidateEmail() { // Pega o email inserido pelo usuário e valida comparando com o emailConfirmation e RegEx

    var email = document.getElementById('email').value;
    var emailConfirmation = document.getElementById('emailConfirmation').value;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // RegEx para validar e-mail (fonte: W3Resource)

    // Se email ou emailConfirmation estiverem vazios
    if (email == "" || emailConfirmation == "") {
        errorEmail = true;
    }
    // Se email estiver preenchido, mas nã corresponder ao emailFormat
    else if (email != "" && !(email.match(emailFormat))) {
        window.alert("Formato de e-mail inválido!");
        errorEmail = true;
        email = "";
    }
    // Se emailConfirmation for vazio, mas email estiver preenchido ou se emailConfirmation estiver preenchido mas não for igual ao email
    else if ((emailConfirmation == "" && email != "") || (emailConfirmation != "" && email != emailConfirmation)) {
        window.alert("Endereços de e-mail não são correspondentes!");
        errorEmail = true;
        email = "";
    }
    else {
        errorEmail = false;
    }

    return email;
}

function GetUser() { // Pega o nome de usuário inserido pelo usuário

    var user = document.getElementById('usuario').value;

    if (typeof (Storage) !== "undefined") {
        var usuariosString = localStorage.getItem('users');

        if (usuariosString == null) {
            return user;
        }
        // Separar por | --> por usuário
        var usuariosArray = usuariosString.split("|"); // Return: usuario = [A = "1, 2, 3", B = "4, 5, 6", C = "7, 8, 9"];

        var usuariosMatriz = [];

        //Separar por , --> informações
        for (var i = 0; i < usuariosArray.length; i++) {
            var usuario = usuariosArray[i].split(","); // Return: usuario = [A = [1, 2, 3], B = [4, 5, 6], C = [7, 8, 9]];

            usuariosMatriz.push(usuario);
        }

        // Verifica se o usuário já existe
        for (var i = 0; i < usuariosMatriz.length; i++) {
            if (user == usuariosMatriz[i][0]) {
                errorUser = true;
                user = "";
            }
        }
    }
    else {
        window.alert("Não foi possível concluir seu registo :(\n\nTente novamente em outro browser.");
    }

    return user;

}

function GetPassword() { // Pega a password inserida pelo usuário

    var password = document.getElementById('senha').value;
    var passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/; //RegEx para senha forte (fonte: https://www.regextester.com/112253)

    // Se password estiver preechida e não corresponder à passwordFormat
    if (password != "" && !(password.match(passwordFormat))) {
        window.alert("Senha deverá conter no mínimo uma letra minúscula, uma maiúscula, um número, um caractere especial e com o comprimento mínimo de oito caracteres. ");
        return false;
    }
    else {
        return password;
    }

}

function RefreshPage() { // Refresca a página, limpando os campos
    location.reload(); 
}

function ValidateLogin(user, password) { // Valida o login inserido pelo usuário, veriifcando se o usuário e a senha estão registados e são correspondentes na localStorage

    if (typeof (Storage) !== "undefined") {
        var usuariosString = localStorage.getItem('users');

        if (usuariosString == null) {
            localStorage.setItem("login", "false");
            window.alert("Não foi possível realizar login.");
            RefreshPage();
            return;
        }

        // Separar por | --> por usuário
        var usuariosArray = usuariosString.split("|"); // Return: usuario = [A = "1, 2, 3", B = "4, 5, 6", C = "7, 8, 9"];

        var usuariosMatriz = [];

        //Separar por , --> informações
        for (var i = 0; i < usuariosArray.length; i++) {
            var usuario = usuariosArray[i].split(","); // Return: usuario = [A = [1, 2, 3], B = [4, 5, 6], C = [7, 8, 9]];

            usuariosMatriz.push(usuario);
        }

        for (var i = 0; i < usuariosMatriz.length; i++) {
            // Verifica se usuário existe e corresnpode à senha
            // Caso positivo, mostra uma saudação e grava informação de login = true na localStorage
            // Caso negativo, grava informação de login = false na localStorage
            if (user == usuariosMatriz[i][0] && password == usuariosMatriz[i][1]) {
                localStorage.setItem("login", "true");
                window.alert("Olá, " + usuariosMatriz[i][2]);
                return;
            }
            else {
                localStorage.setItem("login", "false");
                window.alert("Não foi possível realizar login.");
                RefreshPage();
            }
        }
    }
    else {
        window.alert("Não foi possível fazer login:(\n\nTente novamente em outro browser.");
    }
}

function ValidateLoginFromHomepage() { // Chama função para validar login a partir dos dados de login da Homepage.html

    var user = document.getElementById('textUsuarioHP').value;
    var password = document.getElementById('textSenhaHP').value;

    ValidateLogin(user, password);
}

function ValidateLoginFromLogin() {// Chama função para validar login a partir dos dados de login da LoginUsuario.html
    var user = document.getElementById('usuario').value;
    var password = document.getElementById('senha').value;

    ValidateLogin(user, password);
}

function GetRecipe() { // Pega a receita inserida pelo usuário e valida

    var nomeReceita = GetRecipeName();
    var ingredientes = GetIngredients();
    var modoDePreparo = GetPreparationMode();
    var tempoDePreparo = GetPreparationTime();
    var categoria = GetCategory();
    var dificuldade = GetDifficulty();

    // Verifica se o usuário está logado antes de criar receita
    if (localStorage.getItem("login") == null || localStorage.getItem("login") == "false") {
        window.alert("Faça login para enviar receitas.");
    }
    else if (nomeReceita && ingredientes && modoDePreparo && tempoDePreparo && categoria && dificuldade) {
        CreatRecipe(nomeReceita, ingredientes, modoDePreparo, tempoDePreparo, categoria, dificuldade);

        window.alert("OBRIGADA POR ENVIAR SUA RECEITA!\n\nA receita foi enviada para aprovação dos administradores.");
        RefreshPage();
    }
    else {
        window.alert("Receita não enviada.");
    }
}

function CreatRecipe(nomeReceita, ingredientes, modoDePreparo, tempoDePreparo, categoria, dificuldade) { // Cria receita inserida pelo usuário e salva no localStorage

    var receita = [nomeReceita, ingredientes, modoDePreparo, tempoDePreparo, categoria, dificuldade];

    if (typeof (Storage) !== "undefined") {

        if (localStorage.getItem('receitas')) {
            var receitas = localStorage.getItem('receitas'); // localStorage retorna String

            // Cada usuário está separado por |, e cada info de cada usuário está separado por ,
            receitas += receita + "|";

            localStorage.setItem('receitas', receitas);
        }
        else {
            localStorage.setItem('receitas', receita + "|");
        }
    }
    else {
        window.alert("Não foi possível enviar receita:(\n\nTente novamente em outro browser.");
    }
}

function GetRecipeName() { // Pega o nome da receita inserida pelo usuário

    var nomeReceita = document.getElementById('nomeReceita').value;

    if (nomeReceita == "") {
        nomeReceita = false;
    }
    return nomeReceita;
}

function GetIngredients() { // Pega os ingredientes da receita inserida pelo usuário

    var ingredientes = document.getElementById('ingredientes').value;

    if (ingredientes == "") {
        ingredientes = false;
    }
    return ingredientes;
}

function GetPreparationMode() {  // Pega o modo de preparo da receita inserida pelo usuário

    var modoDePreparo = document.getElementById('modoDePreparo').value;

    if (modoDePreparo == "") {
        modoDePreparo = false;
    }
    return modoDePreparo;
}

function GetPreparationTime() {  // Pega o tempo de preparo da receita inserida pelo usuário

    var tempoDePreparo = document.getElementById('tempoDePreparo').value;

    if (isNaN(tempoDePreparo) || tempoDePreparo == "") {
        return false;
    }
    else {
        return tempoDePreparo;
    }

}

function GetCategory() {  // Pega a catgoria da receita inserida pelo usuário

    var selectedOption = document.getElementById('categorias');
    var categoria = selectedOption.options[selectedOption.selectedIndex].value;

    if (categoria == "") {
        categoria = false;
    }
    return categoria;
}

function GetDifficulty() {  // Pega a dificuldade da receita inserida pelo usuário

    var selectedOption = document.getElementById('dificuldade');
    var dificuldade = selectedOption.options[selectedOption.selectedIndex].value;

    if (dificuldade == "") {
        dificuldade = false;
    }
    return dificuldade;
}

function CreatRecipesDefault() { // Cria um repositório de receitas default e salva na localStorage

    //var receita = [nomeReceita, ingredientes, modoDePreparo, tempoDePreparo, categoria, dificuldade]

    var receita1 = ["Crostini de pimentão com alho", "Ingredientes","Modo de Preparo","15 minutos", "Aperitivo", "Fácil"];

    var receita2 = ["Sopa de legumes na pressão", "Ingredientes", "Modo de Preparo", "20 minutos", "Entrada", "Fácil"];

    var receita3 = ["Bife à milanesa", "Ingredientes", "Modo de Preparo", "60 minutos", "Prato Principal", "Média"];

    var receita4 = ["Salada de batatas", "Ingredientes", "Modo de Preparo", "45 minutos", "Acompanhamento", "Fácil"];

    var receita5 = ["Abacate com limão e açúcar", "Ingredientes", "Modo de Preparo", "15 minutos", "Sobremesa", "Fácil"];

    var receita6 = ["Sangria no copo", "Ingredientes", "Modo de Preparo", "15 minutos", "Bebida", "Fácil"];

    var receitasDefault = receita1 + "|" + receita2 + "|" + receita3 + "|" + receita4 + "|" + receita5 + "|" + receita6;

    localStorage.setItem("receitasDefault", receitasDefault);

}

function ListRecipes(filtroCategoria) { // Lista receitas conforme categoria da página

    if (typeof (Storage) !== "undefined") {
        var receitasDefault = localStorage.getItem("receitasDefault");
        // Separar por | --> por usuário
        var receitasArray = receitasDefault.split("|"); // Return: usuario = [A = "1, 2, 3", B = "4, 5, 6", C = "7, 8, 9"];

        var receitasMatriz = [];
        // Separar por , --> informações

        for (var i = 0; i < receitasArray.length; i++) {
            var receita = receitasArray[i].split(","); // Return: usuario = [A = [1, 2, 3], B = [4, 5, 6], C = [7, 8, 9]];

            receitasMatriz.push(receita);
        }

        var divListarReceitas = document.getElementById('divListarReceitas');

        for (var i = 0; i < receitasMatriz.length; i++) {

            if (receitasMatriz[i][4] == filtroCategoria || filtroCategoria == "todos") {
                var nomeReceita = receitasMatriz[i][0];
                var ingredientes = receitasMatriz[i][1];
                var modoDePreparo = receitasMatriz[i][2];
                var tempoDePreparo = receitasMatriz[i][3];
                var categoria = receitasMatriz[i][4];
                var dificuldade = receitasMatriz[i][5];

                divListarReceitas.innerHTML += "<br><br>" + nomeReceita.toUpperCase() + "<br><br>INGREDIENTES: <br>" + ingredientes + "<br>MODO DE PREPARO: <br>" + modoDePreparo + "<br>TEMPO DE PREPARO: <br>" + tempoDePreparo + "<br>CATEGORIA: <br>" + categoria + "<br>DIFICULDADE: <br>" + dificuldade;

            }
           
        }

    }
    else {
        window.alert("Não foi possível exibir receitas:(\n\nTente novamente em outro browser.");
    }

   



}