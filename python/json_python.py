import json
import os



dados_gravados={
    "nomes":["Vicente","Kassuelo"],
    "curso":"Ciencia da Computacao",
    "professor":"Edson Padoin"

}

with open('../dados_gravados.json','w') as json_file:
        json.dump(dados_gravados,json_file,indent=4)

if os.path.exists('../dados_gravados.json'):
    print("Json gerado com sucesso")
else:
    print("Json não gerado")