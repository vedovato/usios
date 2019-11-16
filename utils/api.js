const API = async ({acao, operacao, dados, id}) => {
  const SENHA = 'senha=Usios*BioBox@2019';
  const BASE = 'http://www.biobox.net.br/sistema/api';
  let URI = `${BASE}/gerenciador.php?${SENHA}&acao=${acao}`;

  operacao ? (URI = `${URI}&operacao=${operacao}`) : null;
  dados ? (URI = `${URI}&dados=${dados}`) : null;
  id ? (URI = `${URI}&id=${id}`) : null;

  // console.warn('URL', URI);
  const raw = await fetch(URI);
  return raw.json();
};

export default API;
