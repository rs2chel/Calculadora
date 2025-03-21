# Calculadora com Teclado Virtual

Este projeto implementa uma calculadora simples com suporte para operações matemáticas básicas e um teclado virtual que pode ser ativado ou desativado conforme a necessidade do usuário. A calculadora permite entrada de dados através do teclado físico ou do teclado virtual, com validações de entradas e operações matemáticas.

## Funcionalidades

1. **Entrada de Dados**:
   - O usuário pode digitar números e operadores diretamente no campo de entrada utilizando o teclado físico.
   - A calculadora também oferece um teclado virtual que pode ser ativado ao clicar em um botão, funcionando de maneira semelhante ao teclado físico.

2. **Operações Matemáticas**:
   - Suporte para operações de adição (`+`), subtração (`-`), multiplicação (`*`) e divisão (`/`).
   - O código trata erros como divisão por zero e exibirá "Error!" caso uma operação inválida seja tentada.
   - Se o resultado for infinito, a tela exibirá "Infinity".

3. **Botões de Controle**:
   - **C**: Limpa o visor da calculadora.
   - **←**: Apaga o último caractere inserido.
   - **=**: Realiza a operação matemática e exibe o resultado.

4. **Teclado Virtual**:
   - O teclado virtual pode ser ativado ou desativado através de uma checkbox.
   - Quando o teclado virtual está ativado, ele permite que o usuário insira números e operadores ao clicar nos botões, como uma calculadora tradicional.

5. **Validação de Entrada**:
   - O código impede entradas inválidas, como múltiplos operadores consecutivos ou pontos decimais repetidos em um número.
   - Ele também garante que, se o visor exibir um erro, a tela será limpa antes que o usuário insira novos dados.

6. **Eventos de Teclado**:
   - O usuário pode interagir com a calculadora utilizando o teclado físico.
   - Teclas como números, operadores e `Enter` são suportadas, com a operação sendo realizada ao pressionar `Enter` ou o botão `=`.
   - A tecla `Backspace` é usada para apagar o último caractere da entrada.

## Descrição das Funções

### `screenInput(inputUser)`
Adiciona o valor digitado pelo usuário ao visor da calculadora (campo de entrada com o ID `showResult`).

### `checkInput(inputUser)`
Valida a entrada do usuário. Garante que operadores não sejam repetidos consecutivamente, que um número não tenha múltiplos pontos decimais e que os dados sejam inseridos corretamente. Caso a entrada seja válida, o valor é exibido no visor.

### `deletelast()`
Remove o último caractere inserido no visor. Se o visor exibir "Error!" ou "Infinity", a tela será completamente limpa.

### `clean()`
Limpa o visor, apagando todos os dados digitados pelo usuário.

### `operation()`
Tenta calcular a expressão matemática exibida no visor. Se a expressão for válida, o resultado será mostrado. Caso contrário, "Error!" será exibido.

### `operationControl(userClick)`
Controla as operações com base nos cliques do usuário. A função lida com os botões `C`, `←`, `=`, e outros operadores/números.

### `UserInput(userInput)`
Valida a entrada do usuário ao usar o teclado físico, chamando a função `checkInput` para processar a entrada e adicionar ao visor.

### Teclado Virtual
O teclado virtual só aparece quando o usuário ativa a checkbox correspondente. Quando ativado, ele permite que o usuário insira números e operadores, como faria em um teclado físico.

## Fluxo de Uso

1. O usuário pode começar a digitar números e operadores diretamente usando o teclado físico.
2. O teclado virtual pode ser ativado marcando a checkbox (ID `openKeybord`), exibindo o teclado para interações via clique.
3. Após inserir dados, o usuário pode pressionar o botão `=` ou a tecla `Enter` para calcular o resultado da expressão.
4. O visor também permite limpar os dados (botão `C`) ou apagar o último caractere (botão `←`).
5. O teclado virtual funciona de maneira semelhante ao teclado físico, com entradas feitas ao clicar nos botões.

## Tecnologias Usadas

- **HTML**: Estrutura básica da calculadora, incluindo os botões e o visor.
- **CSS**: Estilização e layout da interface (não incluído no código fornecido).
- **JavaScript**: Implementação da lógica da calculadora, controle de entradas, e manipulação de eventos para o teclado físico e virtual.

## Como Usar

1. Abra o arquivo HTML em um navegador web.
2. Interaja com a calculadora usando os botões físicos ou, se preferir, ative o teclado virtual clicando na checkbox.
3. Digite números e operadores, clique em `=` ou pressione `Enter` para calcular o resultado.
4. Utilize os botões `C` para limpar o visor e `←` para apagar o último caractere digitado.

## Licença

Este projeto é de código aberto, sinta-se à vontade para usar, modificar ou contribuir.

---

Esse `README.md` oferece uma visão detalhada e clara de como a calculadora funciona, descrevendo as funcionalidades, as funções do código e como o usuário pode interagir com a aplicação. Ele também fornece orientações para os desenvolvedores ou usuários que quiserem usar ou modificar o projeto.
