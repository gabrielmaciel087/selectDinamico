function adicionarPaises(valor){
    var option = new Option(valor);
    var pais = document.getElementById("paises");
    pais.add(option);
}

function gerar(){
    var op = document.querySelector("input[name='continentes']:checked").value;
    var pais = document.getElementById("paises");
    pais.options.length = 0;

    switch(op){
        case 'af':
            var paises = ['Africa do Sul','Angola','Argelia','Benin','Botsuana','Burquina Faso','Burundi','Camaroes','Chade','Costa do Marfim','Djibouti','Egito','Eritreia','Etiopia','Gabao','Gambia','Gana','Guine','Guine-Bissau','Guine Equatorial','Ilhas de Madagascar','Ilhas de Cabo Verde','Ilhas de Comores','Ilhas de São Tomé e Principe','Ilhas Seychelles','Lesoto','Liberia','Libia','Malaui','Mali','Marrocos','Mauritania','Mocambique','Namibia','Niger','Nigeria','Quenia','Republica Centro Africana','Republica Democrática do Congo','Republica do Congo','Republica de Maurício','Ruanda','Senegal','Serra Leoa','Somalia','Essuatini','Sudao','Sudao do Sul','Tanzania','Togo','Tunisia','Uganda','Zambia','Zimbabue'];
        paises.forEach(function(elemento){
            adicionarPaises(elemento);
        });
        break;
        case 'am':
            var paises = ['Estados Unidos', 'Canada', 'Mexico', 'Brasil', 'Argentina', 'Colombia', 'Cuba', 'Costa Rica', 'Peru', 'Chile', 'Porto Rico', 'Panama', 'Republica Dominicana', 'Venezuela', 'Equador', 'Guatemala', 'El Salvador', 'Nicaragua', 'Haiti', 'Bolivia', 'Honduras', 'Belize', 'Uruguai', 'Paraguai', 'Jamaica', 'Guiana', 'Bahamas', 'Turks e Caicos', 'Trindade e Tobago', 'Aruba', 'Curacao', 'Sint Maarten', 'Barbados', 'Suriname', 'Antigua e Barbuda', 'Guiana Francesa', 'Dominica', 'Sao Vicente e Granadinas', 'Ilhas Malvinas', 'Santa Lucia', 'Ilhas Cayman', 'Ilhas Virgens Americanas', 'Granada', 'Paises Baixos Caribenhos', 'Guadalupe', 'Martinica', 'Sao Cristovao e Nevis', 'Ilhas Virgens Britanicas'];
        paises.forEach(function(elemento){
            adicionarPaises(elemento);
        });
        break;
        case 'as':
            var paises = ['Afeganistao', 'Arabia Saudita', 'Armenia', 'Azerbaijao', 'Bahrein','Bangladesh', 'Brunei', 'Butao', 'Camboja', 'Cazaquistao', 'Catar', '|China', 'Chipre', 'Cingapura', 'Coreia do Norte', 'Coreia do Sul', 'Egito', 'Emirados Arabes', 'Filipinas', 'Georgia', 'Lemen', 'India', 'Indonesia', 'Ira', 'Iraque', 'Israel', 'Japao', 'Jordania', 'Kuwait', 'Laos', 'Libano', 'Malasia', 'Maldivas', 'Mianmar', 'Mongolia', 'Nepal', 'Oma', 'Paquistao', 'Quirguistao', 'Russia', 'Siria', 'Sri Lanka', 'Tajiquistao', 'Tailandia', 'Timor-Leste', 'Turcomenistao', 'Turquia', 'Uzbequistao', 'Vietna'];
        paises.forEach(function(elemento){
            adicionarPaises(elemento);
        });
        break;
        case 'eu':
            var paises = ['Albania', 'Alemanha', 'Andorra', 'Armenia', 'Austria', 'Azerbaijao', 'Belgica', 'Bielorrussia', 'Bosnia_Herzegovina', 'Bulgaria', 'Cazaquistao', 'Chipre', 'Croacia', 'Dinamarca', 'Eslovaquia', 'Eslovenia', 'Espanha', 'Estonia', 'Finlandia', 'Franca', 'Georgia', 'Grecia', 'Hungria', 'Irlanda', 'Islandia', 'Italia', 'Letonia', 'Lituania', 'Liechtenstein', 'Luxemburgo', 'Macedonia do Norte', 'Malta', 'Moldavia', 'Monaco', 'Montenegro', 'Noruega', 'Paises Baixos', 'Polonia', 'Portugal', 'Reino Unido', 'Romenia', 'Russia', 'Sao Marino', 'Servia', 'Suecia', 'Suica', 'Tchequia', 'Turquia', 'Ucrania', 'Vaticano'];
        paises.forEach(function(elemento){
            adicionarPaises(elemento);
        });
        break;
        case 'oc':
            var paises = ['Australia', 'Papua-Nova Guine', 'Nova Zelandia', 'Fiji', 'Ilhas Salomao', 'Vanuatu', 'Samoa', 'Kiribati', 'Estados Federados da Micronesia', 'Tonga', 'Ilhas Marshall', 'Palau', 'Tuvalu', 'Nauru'];
        paises.forEach(function(elemento){
            adicionarPaises(elemento);
        });
        break;
    }
}
