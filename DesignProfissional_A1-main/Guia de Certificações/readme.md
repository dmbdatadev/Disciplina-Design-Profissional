# 📄 Guia de Certificações em TI 2025

Este projeto é um guia interativo simples (HTML, CSS e JavaScript puros) focado em ajudar profissionais de TI a escolherem as melhores trilhas de certificação em 2025, com foco em Cloud (AWS, Azure, GCP, OCI), Redes e Desenvolvimento.

---

## 🛠️ Estrutura do Projeto

O projeto é composto por apenas três arquivos que devem estar na mesma pasta para funcionar corretamente:

| Arquivo | Descrição |
| :--- | :--- |
| `index.html` | Estrutura principal do guia (o arquivo que você deve abrir). |
| `style.css` | Define o layout e o estilo visual, utilizando classes utilitárias do Tailwind CSS. |
| `script.js` | Contém o banco de dados das 15 certificações e a lógica para o carrossel, filtros e a tabela de comparação. |

---

## 🚀 Como Executar o Projeto

Como o projeto é estático (não requer servidor), ele pode ser aberto diretamente no seu navegador.

1.  **Descompacte o arquivo:** Se você recebeu um arquivo `.zip`, descompacte-o em uma pasta chamada `guia-certificacao/`.
2.  **Abra o arquivo:** Localize o arquivo `index.html` dentro da pasta `guia-certificacao/`.
3.  **Visualização:** Clique duas vezes em `index.html` (ou arraste-o para o seu navegador preferido).

---

## 💻 Como Montar o ZIP para Compartilhar (via Terminal)

Se você precisa recriar ou compartilhar a pasta completa em formato ZIP, o método mais rápido é utilizando o **Bash** (disponível no Linux, macOS e via Git Bash/WSL no Windows).

**Atenção:** Este comando assume que os arquivos `index.html`, `style.css` e `script.js` estão na pasta de onde você está executando.

1.  **Crie a Pasta e Compacte:**
    ```bash
    # Cria a pasta e copia os arquivos para dentro
    mkdir guia-certificacao
    cp index.html guia-certificacao/
    cp style.css guia-certificacao/
    cp script.js guia-certificacao/

    # Cria o arquivo ZIP da pasta completa
    zip -r guia-certificacao.zip guia-certificacao

    # Mensagem de confirmação
    echo "O arquivo 'guia-certificacao.zip' foi criado com sucesso!"
    ```

2.  **Resultado:** O arquivo **`guia-certificacao.zip`** estará pronto para ser compartilhado.

---

## 🧑‍💻 Como Abrir e Editar no VS Code

Para visualizar e editar os códigos, o **Visual Studio Code (VS Code)** é o editor recomendado.

1.  **Instale a Extensão Live Server:** Dentro do VS Code, vá para a aba de Extensões (Ctrl+Shift+X) e instale o **Live Server** (pelo autor Ritwick Dey). Isso permite que você visualize as alterações em tempo real.
2.  **Abra o Projeto:**
    * No VS Code, vá em **Arquivo > Abrir Pasta**.
    * Selecione a pasta **`guia-certificacao/`**.
3.  **Inicie o Live Server (Recomendado):**
    * Abra o arquivo `index.html`.
    * Clique com o botão direito no editor e selecione **Open with Live Server**.
    * O projeto será aberto no seu navegador, e qualquer alteração salva nos arquivos `index.html`, `style.css` ou `script.js` será atualizada automaticamente.
