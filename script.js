
var jason = [
    {
        "nome": "Mario",
        "cpf": "98845561054",
        "endereco": {
            "logradouro": "Rua Delta",
            "número": 75,
            "bairro": "Umuarama",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    },
    {
        "nome": "Alexandre",
        "cpf": "43367217000",
        "endereco": {
            "logradouro": "Rua Gama",
            "número": 15,
            "bairro": "Umuarama",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    },
    {
        "nome": "Mariana",
        "cpf": "54411146061",
        "endereco": {
            "logradouro": "Rua Beta",
            "número": 10,
            "bairro": "Umuarama",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    },
    {
        "nome": "Rafael",
        "cpf": "26943954067",
        "endereco": {
            "logradouro": "Rua Delta",
            "número": 85,
            "bairro": "Umuarama",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    },
    {
        "nome": "Izabela",
        "cpf": "07713704078",
        "endereco": {
            "logradouro": "Rua Delta",
            "número": 85,
            "bairro": "Umuarama",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    },
    {
        "nome": "Matheus",
        "cpf": "62623295018",
        "endereco": {
            "logradouro": "Rua Alfa",
            "número": 40,
            "bairro": "Umuarama",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    },
    {
        "nome": "Don Juan",
        "cpf": "90170862038",
        "endereco": {
            "logradouro": "Rua Alfredo de Faria",
            "número": 5,
            "bairro": "Olinda",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    },
    {
        "nome": "Leticia",
        "cpf": "07713704078",
        "endereco": {
            "logradouro": "Av L. de Oliveira",
            "número": 1885,
            "bairro": "Centro",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    },
    {
        "nome": "Aline",
        "cpf": "72940061050",
        "endereco": {
            "logradouro": "Rua Joaquim B. Garcia",
            "número": 212,
            "bairro": "Olinda",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    },
    {
        "nome": "Irene",
        "cpf": "10777848058",
        "endereco": {
            "logradouro": "Rua Centro Sul",
            "número": 102,
            "bairro": "Santa Marta",
            "cidade": "Uberaba",
            "estado": "Minas Gerais"
        }
    }
]

var t = document.getElementById("tabela");


for (let i = 0; i < 10; i++) {

	var tr = document.createElement("tr");

	var linha = "<td>" + jason[i].nome + "</td>" +
		"<td>" + jason[i].cpf + "</td>" +
		"<td>" + jason[i].endereco.logradouro + "</td>" +
		"<td>" + jason[i].endereco.número + "</td>" +
		"<td>" + jason[i].endereco.bairro + "</td>" +
		"<td>" + jason[i].endereco.cidade + "</td>" +
		"<td>" + jason[i].endereco.estado + "</td>";

		tr.innerHTML = linha;
		t.appendChild(tr); //adicionar elemento na lista
}