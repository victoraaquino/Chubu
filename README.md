# Chubu ♫

> Seu cantinho musical em formato de aplicativo desktop. Abra, dê play e deixe a playlist cuidar do resto, senpai~ ✨

O **Chubu** é uma aplicação pessoal feita com [Electron](https://www.electronjs.org/) que carrega o [YouTube Music](https://music.youtube.com/) em uma janela própria, redimensionável.

## O que você precisa

- [Node.js](https://nodejs.org/) 20 ou superior (a versão LTS é recomendada)
- npm, instalado junto com o Node.js
- Conexão com a internet para acessar o YouTube Music

Para conferir se Node e npm estão disponíveis, execute:

```bash
node --version
npm --version
```

## Instalação

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/victoraaquino/Chubu.git
   cd Chubu
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

Prontinho. O Electron e as ferramentas de empacotamento serão baixados para `node_modules/` — essa pasta não deve ser enviada ao Git. 🌸

## Executar em desenvolvimento

Inicie o aplicativo com:

```bash
npm start
```

Uma janela do Chubu abrirá carregando o YouTube Music. Você pode redimensioná-la como quiser; a página acompanha o tamanho da janela automaticamente.

Para encerrar, feche a janela ou use `Alt + F4` no Windows/Linux.

## Gerar versões distribuíveis

Os arquivos de build são criados na pasta `dist/`.

### Linux — AppImage

```bash
npm run build:linux
```

Esse comando gera um arquivo `.AppImage`, que pode ser executado na maioria das distribuições Linux. Caso necessário, dê permissão de execução e abra-o:

```bash
chmod +x dist/*.AppImage
./dist/*.AppImage
```

### Windows — instalador `.exe`

```bash
npm run build:win
```

O resultado é um instalador `.exe` baseado em NSIS, salvo em `dist/`.

> Para maior compatibilidade, gere o instalador Windows a partir do Windows. É possível tentar o build no Linux, mas algumas etapas podem exigir o Wine instalado.

### Linux e Windows de uma vez

```bash
npm run build
```

### Build descompactado para testes

```bash
npm run build:dir
```

Essa opção não gera instalador: ela cria uma versão executável descompactada, útil para testar o pacote antes de distribuí-lo.

## Estrutura do projeto

```text
.
├── src/
│   ├── main.js       # Cria a janela e carrega o YouTube Music
│   ├── preload.js    # Ponte segura para futuras APIs do aplicativo
│   └── index.html    # Página local de apoio
├── package.json      # Scripts, dependências e configuração de build
└── dist/             # Arquivos gerados (após executar um build)
```

## Comandos rápidos

| Comando | Para que serve |
| --- | --- |
| `npm install` | Instala ou atualiza as dependências |
| `npm start` | Abre o Chubu em modo de desenvolvimento |
| `npm run build:linux` | Gera o AppImage para Linux |
| `npm run build:win` | Gera o instalador `.exe` para Windows |
| `npm run build` | Gera as versões Linux e Windows |
| `npm run build:dir` | Gera uma versão descompactada para teste |

## Observações

- O Chubu é um projeto pessoal e não é afiliado ao YouTube ou ao YouTube Music.
- É preciso fazer login na sua conta Google dentro da janela do aplicativo para acessar suas playlists e recomendações.
- Como o conteúdo vem do YouTube Music, uma conexão ativa é necessária durante o uso.

Divirta-se com suas músicas. Que nunca falte uma boa trilha sonora para suas aventuras! 🎧
