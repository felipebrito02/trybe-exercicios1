const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const expectedResult = 'Stephen King';
const authorBornIn1947 = books.find((livro) => livro.author.birthYear === 1947).author.name;

const expectedResult2 = 'Duna';
const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((livro) => {
    if (!nameBook || livro.name.length < nameBook.length) {
      nameBook = livro.name;
    };
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => {
  // escreva seu código aqui
  return books.find( (livro) => livro.name.length === 26)
}

const expectedResult4 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((livro) => {
    livro.author.birthYear >= 1901 && livro.author.birthYear <= 2000
  });
};

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
  return books.some((livro) => {
    livro.releaseYear >= 1980 && livro.releaseYear <= 1989;
  })
}

const authorUnique = () => {
  // escreva seu código aqui
  return books.every((livro) => {
    !books.some((livro2) => {
      (livro2.author.birthYear === livro.author.birthYear) && (livro2.author.name !== livro.author.name)
    })
  })
}
  
