# 🔐 Decodificador de Criptografia Digital (Cyberpunk Theme)

> Projeto desenvolvido como **exercício da DIO** — estilo cyberpunk, com visual neon e lógica algorítmica para decodificar sequências numéricas em texto legível.

---

## ✨ Descrição
Um sistema interativo que converte sequências numéricas em palavras usando o mapeamento A=1, B=2, …, Z=26. O projeto usa um algoritmo de **backtracking recursivo** com otimizações de programação dinâmica para encontrar todas as combinações válidas e escolher a melhor decodificação com base em um sistema de pontuação inteligente.

**Tecnologias:** HTML5 / CSS3 / JavaScript  
**Tema visual:** Inspirado no universo Cyberpunk (neon, vidro fosco, animações).

---

## 📋 Funcionalidades Principais
- Interface com estilo **cyberpunk** (neon, bordas luminosas e vídeo de fundo)
- Algoritmo de **backtracking** e **programação dinâmica** (memoization)
- Exibição **passo a passo** do processo de decodificação
- Lista de **todas as possibilidades** encontradas
- **Sistema de pontuação** para selecionar a melhor palavra
- Responsivo (desktop, tablet e mobile)
- Acessibilidade mínima: navegação por teclado e foco visível

---

## 📁 Estrutura do Desafio:
```
desafio_295/
├── index.html # Página principal
├── styles.css # Estilos cyberpunk
├── script.js # Lógica de decodificação
├── assets/
│ └── background.mp4 # Vídeo de fundo (opcional)
└── LICENSE # Licença MIT

```

---

## 🚀 Como Usar (rápido)
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/decodificador-criptografia.git
```
2. Entre na pasta:
```
cd decodificador-criptografia
```
3. Abra ``index.html`` no navegador (duplo clique) ou use a extensão Live Server do VS Code.

## 💡 Exemplos de Uso

Entrada: ``85121215``
Resultado: ``HELLO``
Explicação: ``8→H, 5→E, 12→L, 12→L, 15→O``
### 🏆 Pontuação: 100.300 pontos (exemplo ilustrativo)

Entrada: ``231518124``
Resultado: ``WORLD``
Explicação: ``23→W, 15→O, 18→R, 12→L, 4→D``
### 🏆 Pontuação: 100.300 pontos (exemplo ilustrativo)

Entrada: ``1221926624522``
Resultado: ``LUIZFXEV (exemplo demonstrativo)``
Explicação: ``12→L, 21→U, 9→I, 26→Z, 6→F, 24→X, 5→E, 22→V``
### 🏆 Pontuação: variável conforme complexidade

Observação: o sistema mostra todas as combinações válidas e destaca a que obteve a melhor pontuação segundo as regras.

## 🧠 Como Funciona o Algoritmo (resumo técnico)

O sistema percorre a sequência de forma recursiva (backtracking).

Em cada posição, tenta consumir 1 dígito (1–9) ou 2 dígitos (10–26) quando válido.

Usa memoization (programação dinâmica) para evitar recalcular resultados para o mesmo sufixo.

Ao gerar uma palavra válida, aplica o sistema de pontuação para eleger a melhor decodificação entre as opções.

### 🧾 Sistema de Pontuação (exemplo)

+100.000 pontos para palavras encontradas no dicionário (lista interna)

+200 pontos para palavras "especiais" (HELLO, WORLD, etc.)

+100 pontos por número de 2 dígitos usado (prioriza combinações menos fragmentadas)

+10 pontos por menor fragmentação (menor quantidade de segmentos)

A regra exata pode ser ajustada no ``script.js`` conforme a sua preferência.

## 🔤 Mapeamento Alfabético

| Letra | Número | Letra | Número |
|-------|--------|-------|--------|
| A     | 1      | N     | 14     |
| B     | 2      | O     | 15     |
| C     | 3      | P     | 16     |
| D     | 4      | Q     | 17     |
| E     | 5      | R     | 18     |
| F     | 6      | S     | 19     |
| G     | 7      | T     | 20     |
| H     | 8      | U     | 21     |
| I     | 9      | V     | 22     |
| J     | 10     | W     | 23     |
| K     | 11     | X     | 24     |
| L     | 12     | Y     | 25     |
| M     | 13     | Z     | 26     |

## 🎨 Personalização Visual

Trocar vídeo de fundo: adicione assets/background.mp4 (recomendado 1920×1080)

Alterar cor neon: em styles.css modifique:
```
:root {
  --clr: #fc0fc0; /* cor neon (padrão) */
}
```
## 🤝 Contribuições

Contribuições são bem-vindas!

Faça um fork do projeto.

Crie uma branch: ``git checkout -b feature/sua-feature``

Commit: git commit -m "Add: sua feature"

Push: git push origin feature/sua-feature

Abra um Pull Request.

## 📝 Licença

Este projeto está sob a Licença MIT. Veja o arquivo LICENSE para os termos completos.

## 🧑🏾‍💻 Autor: [Luizfxdev](https://www.linkedin.com/in/luizfxdev)

<br/>
<br/>
<br/>

**🔐 Decodifique o futuro, uma mensagem por vez! 🔐**
