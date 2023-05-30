import { calculateAge } from "./utils/age";
import ModuleDetails from "./moduledetails";

function HelloWorld() {
  const nome = 'Felipe Brito';
  const dataNascimento = '11/08/2002';
  const idade = calculateAge(dataNascimento);

  return (
    <>
    <h1>Eu sou o {nome}, nasci no dia {dataNascimento} e tenho {idade} anos. </h1>
  <ModuleDetails />
  </>
  )
}

export default HelloWorld;