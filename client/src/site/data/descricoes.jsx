const descricoes = [
  {
    id: 1,
    nivel: 1,
    descricao: (
      <div>
        <div className="m-2">
          Você perdeu uma mala em uma estação de trem e tem a chance de
          encontrá-la. Para isso, foram disponibilizadas informações em um banco
          de dados que vão te ajudar a achá-la. Tudo o que precisa fazer, são as
          pesquisas corretas. Não se esqueça de verificar o diagrama com a
          estrutura das tabelas em cada nível!
        </div>
        <h4 className="ms-2">Nível 1</h4>
        <div className="m-2">
          Nosso ponto de partida é a Cidade da Mobilidade, onde existem diversos
          pontos de ônibus por onde os ônibus passam. O seu objetivo é retornar o nome do bairro onde está o ponto de ônibus
          menos movimentado, isto é, onde há a menor quantidade de passagens de ônibus por
          dia!
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
          Ao chegar na parada de ônibus menos movimentada, você encontra
          instruções que te levam à estação de metrô mais próxima, a estação F4.
          Agora, é preciso encontrar a estação com o maior volume de passageiros
          por dia.
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
          Agora que você descobriu a estação mais movimentada, é preciso
          descobrir qual o horário em que mais passageiros têm essa estação como
          destino final.
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
          Ao descobrir qual o horário que mais passageiros desembarcam nesta
          estação, agora é necessário descobrir quantos deles têm como origem a
          estação onde iniciamos as nossas buscas, a estação F4.
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
          Por fim, ao descobrir quantos passageiros têm a mesma origem e
          destino, descubra quantos têm a mesma origem, mas destino diferente e
          o mesmo destino, mas origem diferente. Dentre esses passageiros,
          descubra qual a estação que todos eles passaram no meio do caminho,
          entre suas origens e destinos. Lá estará guardada a sua mala!
        </div>
      </div>
    ),
  },
];

export default descricoes;
