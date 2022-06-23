const descricoes = [
  {
    id: 1,
    nivel: 1,
    descricao: (
      <div>
        <div className="m-2">
          Você recebeu um convite para encontrar algumas informações sobre os transportes de uma determinada cidade. Para isso, 
          precisa fazer as consultas certas no banco de dados que foi disponibilizado para você. Não se esqueça de consultar a 
          estrutura do banco em "Ver Diagrama", em cada nível. Considere que o sisterma gerenciador é o MySQL. Boa sorte!
        </div>
        <h4 className="ms-2">Nível 1</h4>
        <div className="m-2">
          O seu ponto de partida é retornar o nome de todos os bairros da nossa cidade. Lembre-se que queremos somente o nome do 
          bairro!
        </div>
      </div>
    ),
  },
  {
    id: 2,
    nivel: 2,
    descricao: (
      <div>
        <h4 className="ms-2">Nível 2</h4>
        <div className="m-2">
          Agora, o que você precisa fazer é retornar o nome dos bairros que possuem pontos de ônibus.
        </div>
      </div>
    ),
  },
  {
    id: 3,
    nivel: 3,
    descricao: (
      <div>
        <h4 className="ms-2">Nível 3</h4>
        <div className="m-2">
          Retorne o nome do bairro que tem o ponto de ônibus mais movimentado, ou seja, com o maior número de passagens
          diárias.
        </div>
      </div>
    ),
  },
  {
    id: 4,
    nivel: 4,
    descricao: (
      <div>
        <h4 className="ms-2">Nível 4</h4>
        <div className="m-2">
          Ao descobrir o bairro com ponto de ônibus mais movimentado, selecione a estação desse bairro que tem
          a menor quantidade de passageiros por dia. Lembre-se, somando todas as linhas que passam nessa estação!
        </div>
      </div>
    ),
  },
  {
    id: 5,
    nivel: 5,
    descricao: (
      <div>
        <h4 className="ms-2">Nível 5</h4>
        <div className="m-2">
          Por fim, na estação encontrada no nível anterior, entre as linhas que passam por ela, retorne o número da linha 
          que tem origem no bairro encontrado no nível 3 e destino que possui a maior quantidade de passageiros por dia entre
          as linhas que passam nessa estação.
        </div>
      </div>
    ),
  },
];

export default descricoes;
