import json

dados_gravados={
    "nomes":["Vicente","Kassuelo"],
    "curso":"Ciencia da Computacao",
    "professor":"Edson Padoin"

}

with open('../dados_gravados.json','w') as json_file:
        json.dump(dados_gravados,json_file,indent=4)