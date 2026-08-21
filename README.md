# Chubu 🌸

> Seu cantinho musical em formato de aplicativo desktop. Abra, dê play e deixe a playlist cuidar do resto, senpai~ ✨

O **Chubu** é uma aplicação pessoal em [Electron](https://www.electronjs.org/) que abre o [YouTube Music](https://music.youtube.com/) em uma janela própria. Ela inclui uma barra de título personalizada e controles de reprodução na miniatura da barra de tarefas do Windows.

## Instalar o aplicativo

Quer apenas usar o Chubu? Você não precisa instalar Node.js, npm ou baixar o código-fonte.

1. Acesse a [página de releases](https://github.com/victoraaquino/Chubu/releases) e abra a versão mais recente.
2. Baixe o arquivo correspondente ao seu sistema operacional.
3. Instale ou execute o aplicativo conforme as instruções abaixo.

### Windows

1. Baixe o arquivo `.exe` disponível na release.
2. Abra o arquivo baixado e siga as etapas do instalador.
3. Ao terminar, abra **Chubu** pelo Menu Iniciar ou pelo atalho criado pelo instalador.

### Linux

1. Baixe o arquivo `.AppImage` disponível na release.
2. Dê permissão de execução ao arquivo:

   ```bash
   chmod +x Chubu-*.AppImage
   ```

3. Execute-o:

   ```bash
   ./Chubu-*.AppImage
   ```

Na primeira utilização, faça login na sua conta Google para acessar playlists, recomendações e sua biblioteca do YouTube Music.

## Requisitos

- [Node.js](https://nodejs.org/) 24 (conforme definido no projeto)
- npm, instalado junto com o Node.js
- Conexão com a internet para acessar o YouTube Music

Confira a instalação com:

```bash
node --version
npm --version
```

## Instalação

```bash
git clone https://github.com/victoraaquino/Chubu.git
cd Chubu
npm install
```

## Executar em desenvolvimento

```bash
npm start
```

O Electron cria uma janela sem a moldura nativa. A barra superior é uma página local e o YouTube Music é carregado em uma `BrowserView` logo abaixo dela.

## Como a aplicação funciona

```text
src/main.js
  ├─ cria a BrowserWindow sem frame
  ├─ carrega src/app/index.html (barra de título local)
  ├─ cria uma BrowserView abaixo da barra
  └─ abre https://music.youtube.com/ na BrowserView

src/app/index.html
  └─ envia ações dos botões de janela → src/preload.js → src/main.js
```

Os botões de minimizar, maximizar/restaurar e fechar enviam mensagens IPC pela ponte segura exposta pelo preload. No Windows, os botões da miniatura da barra de tarefas acionam os controles anterior, play/pausa e próxima faixa no YouTube Music.

## Estrutura do projeto

```text
.
├── .github/
│   └── workflows/
│       └── build.yml                         # Build e releases no GitHub Actions
├── src/
│   ├── main.js                               # Processo principal e janela do Electron
│   ├── preload.js                            # Ponte IPC segura para a interface local
│   ├── app/
│   │   ├── index.html                        # Estrutura da barra de título
│   │   └── styles/
│   │       └── global.css                    # Estilos globais da página local
│   ├── features/
│   │   └── window-controls/
│   │       └── model/
│   │           └── bind-window-controls.js  # Eventos dos botões da janela
│   ├── widgets/
│   │   └── titlebar/
│   │       └── ui/
│   │           └── titlebar.css              # Estilos da barra de título
│   ├── assets/                               # Ícones dos controles de mídia
│   └── resources/                            # Ícones e recursos do aplicativo
├── package.json                              # Scripts e configuração do electron-builder
└── dist/                                     # Artefatos gerados pelos builds
```

## Gerar versões distribuíveis

Os artefatos são salvos em `dist/`.

| Comando | Resultado |
| --- | --- |
| `npm run build:linux` | Gera o AppImage para Linux |
| `npm run build:win` | Gera o instalador NSIS para Windows |
| `npm run build` | Gera as versões Linux e Windows |
| `npm run build:dir` | Gera uma versão descompactada para testes |

O workflow em `.github/workflows/build.yml` executa os builds em pull requests para `main` e, ao receber uma tag no formato `v*`, cria uma release no GitHub com os instaladores gerados.

## Observações

- O Chubu é um projeto pessoal e não é afiliado ao YouTube ou ao YouTube Music.
- É necessário fazer login na sua conta Google na janela do aplicativo para acessar playlists e recomendações.
- O uso requer conexão ativa com a internet.
