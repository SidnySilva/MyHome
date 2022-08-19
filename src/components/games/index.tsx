import { Container } from "./styles";

export const Games = () => {
  return (
    <Container>
      <h1>Games</h1>
      <div className='info'>
        <p className='text'>
          Meu primeiro contato com a programação foi em 2019 iniciando com
          programação de jogos digitais. Nesta fase, iniciei codando em C# e foi
          nesse momento onde aprendi sobre .NET e programação orientada a
          objetos, isso, utilizando a engine Unity.
        </p>
        <p>
          No botão abaixo você poderá visualizar e jogar alguns jogos que criei.
        </p>
      </div>
      <button>
        <a href='https://sodyy.itch.io/' target='blank'>
          Itch.io
        </a>
      </button>
    </Container>
  );
};
