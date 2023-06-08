# Teste de Personalidade para Adolescentes

Este é um projeto de um teste de personalidade divertido para adolescentes, no qual eles podem descobrir seu perfil respondendo a perguntas relacionadas à personalidade. O objetivo é oferecer uma experiência interativa e envolvente para os usuários, ao mesmo tempo em que fornece insights sobre diferentes perfis de personalidade.

## Funcionalidades

- O teste é composto por um conjunto de perguntas sobre preferências e comportamentos.
- Cada pergunta apresenta quatro opções de resposta.
- O usuário pode selecionar apenas uma opção de resposta por pergunta.
- Ao finalizar o teste, o sistema processa as respostas e calcula o perfil predominante do usuário.
- São quatro perfis possíveis: Aventureiro, Equilibrado, Conservador e Introvertido.
- O resultado do perfil predominante é exibido ao usuário.

## Como utilizar o projeto

1. Faça o download do projeto para o seu computador ou clone-o utilizando o comando:
   ```
   git clone <URL do repositório>
   ```

2. Navegue até a pasta do projeto e abra o arquivo `index.html` em um navegador da web.

3. Na página inicial, você encontrará a primeira pergunta do teste.

4. Leia atentamente as opções de resposta e selecione aquela que mais se aproxima da sua preferência.

5. Clique no botão "Próxima" para avançar para a próxima pergunta. Repita o processo para as perguntas restantes.

6. Ao concluir todas as perguntas, o sistema processará suas respostas e calculará o perfil predominante.

7. O resultado do perfil predominante será exibido na página, permitindo que você descubra qual perfil de personalidade você se enquadra.

## Personalização das perguntas

Se desejar personalizar as perguntas do teste, você pode modificar o arquivo `index.html` e adicionar ou alterar as perguntas existentes. Cada pergunta é composta por um conjunto de opções de resposta, que podem ser modificadas conforme necessário.

As perguntas estão estruturadas da seguinte forma:

```html
<h3>Pergunta 1</h3>
<label>
    <input type="radio" name="resposta1" value="a" data-perfil="aventureiro">
    Adoro estar no meio da agitação.
</label><br>
<label>
    <input type="radio" name="resposta1" value="b" data-perfil="equilibrado">
    Gosto de multidões, mas também preciso de momentos de tranquilidade.
</label><br>
<label>
    <input type="radio" name="resposta1" value="c" data-perfil="conservador">
    Prefiro evitar multidões e estar em ambientes mais calmos.
</label><br>
<label>
    <input type="radio" name="resposta1" value="d" data-perfil="introvertido">
    Multidões me deixam desconfortável, prefiro estar sozinho.
</label><br>
```

Você pode adicionar mais perguntas, duplicando a estrutura acima e incrementando o número de pergunta (`resposta1`, `resposta2`, etc.) e o texto da pergunta.

## Contribuindo

Se você deseja contribuir para este projeto, sinta-se à vontade para fazer um fork do repositório, fazer as alterações desejadas e enviar

 um pull request. Será um prazer revisar e incorporar suas contribuições.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
