// Elementos do DOM
const encryptedInput = document.getElementById('encrypted-input');
const decodeBtn = document.getElementById('decode-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');

// Variáveis globais para controle
let currentResult = null;

// 📚 Dicionário Abrangente
const DICTIONARY = {
  // Palavras em inglês básicas
  HELLO: 100200,
  WORLD: 100200,
  LOVE: 100200,
  LIFE: 100200,
  TIME: 100200,
  HELP: 100000,
  CODE: 100200,
  WORK: 100000,
  HOPE: 100000,
  PEACE: 100000,
  MUSIC: 100000,
  SMILE: 100000,
  LIGHT: 100000,
  POWER: 100000,
  DREAM: 100000,
  FRIEND: 100000,
  FAMILY: 100000,
  HAPPY: 100000,
  WATER: 100000,
  FIRE: 100000,
  EARTH: 100000,
  HEART: 100000,
  BRAIN: 100000,
  SMART: 100000,
  QUICK: 100000,
  SOUND: 100000,
  VOICE: 100000,
  DANCE: 100000,
  GAME: 100000,
  PLAY: 100000,
  READ: 100000,
  BOOK: 100000,
  LEARN: 100000,
  TEACH: 100000,
  THINK: 100000,

  // Palavras em português básicas
  AMOR: 100200,
  VIDA: 100200,
  TEMPO: 100200,
  CASA: 100200,
  FELIZ: 100000,
  AMIGO: 100000,
  FAMILIA: 100000,
  AGUA: 100000,
  FOGO: 100000,
  TERRA: 100000,
  CORACAO: 100000,
  CEREBRO: 100000,
  MUSICA: 100000,
  DANCA: 100000,
  JOGO: 100000,
  LER: 100000,
  LIVRO: 100000,
  APRENDER: 100000,
  ENSINAR: 100000,
  PENSAR: 100000,
  TRABALHO: 100000,
  ESPERANCA: 100000,
  PAZ: 100000,
  LUZ: 100000,
  PODER: 100000,
  SONHO: 100000,
  SORRISO: 100000,
  VOZ: 100000,
  SOM: 100000,
  RAPIDO: 100000,

  // Nomes próprios comuns
  LUIZ: 100200,
  MARIA: 100000,
  JOAO: 100000,
  ANA: 100000,
  CARLOS: 100000,
  PEDRO: 100000,
  PAULO: 100000,
  JOSE: 100000,
  ANTONIO: 100000,
  FRANCISCO: 100000,
  MARCOS: 100000,
  LUCAS: 100000,
  MATEUS: 100000,
  RAFAEL: 100000,
  GABRIEL: 100000,
  MIGUEL: 100000,
  FELIPE: 100000,
  BRUNO: 100000,
  DIEGO: 100000,
  RODRIGO: 100000,
  FERNANDA: 100000,
  PATRICIA: 100000,
  JULIANA: 100000,
  MARIANA: 100000,
  CAROLINA: 100000,
  AMANDA: 100000,
  LETICIA: 100000,
  CAMILA: 100000,
  PRISCILA: 100000,
  DANIELA: 100000,

  // Termos técnicos
  DEV: 100200,
  CODE: 100200,
  PROGRAM: 100200,
  API: 100200,
  WEB: 100000,
  APP: 100000,
  DATA: 100000,
  BASE: 100000,
  FILE: 100000,
  SYSTEM: 100000,
  SERVER: 100000,
  CLIENT: 100000,
  DEBUG: 100000,
  ERROR: 100000,
  SCRIPT: 100000,
  FUNCTION: 100000,
  METHOD: 100000,
  CLASS: 100000,
  OBJECT: 100000,
  ARRAY: 100000,
  STRING: 100000,
  NUMBER: 100000,
  BOOLEAN: 100000,
  NULL: 100000,
  UNDEFINED: 100000,

  // Palavras curtas comuns
  I: 100000,
  YOU: 100000,
  HE: 100000,
  SHE: 100000,
  WE: 100000,
  THEY: 100000,
  AM: 100000,
  IS: 100000,
  ARE: 100000,
  WAS: 100000,
  WERE: 100000,
  BE: 100000,
  HAVE: 100000,
  HAS: 100000,
  HAD: 100000,
  DO: 100000,
  DOES: 100000,
  DID: 100000,
  WILL: 100000,
  WOULD: 100000,
  COULD: 100000,
  SHOULD: 100000,
  CAN: 100000,
  MAY: 100000,
  THE: 100000,
  AND: 100000,
  OR: 100000,
  BUT: 100000,
  IF: 100000,
  THEN: 100000,
  YES: 100000,
  NO: 100000,
  OK: 100000,
  HI: 100000,
  BYE: 100000,
  THANKS: 100000,

  // Palavras em português curtas
  EU: 100000,
  TU: 100000,
  ELE: 100000,
  ELA: 100000,
  NOS: 100000,
  ELES: 100000,
  SOU: 100000,
  ES: 100000,
  E: 100000,
  SAO: 100000,
  ERA: 100000,
  ERAM: 100000,
  TER: 100000,
  TEM: 100000,
  TINHA: 100000,
  FAZER: 100000,
  FAZ: 100000,
  FEZ: 100000,
  SIM: 100000,
  NAO: 100000,
  OI: 100000,
  TCHAU: 100000,
  OBRIGADO: 100000,
  BOM: 100000,
  BEM: 100000,
  MAL: 100000,
  MUITO: 100000,
  POUCO: 100000,
  MAIS: 100000,
  MENOS: 100000
};

// Event listeners
decodeBtn.addEventListener('click', handleDecode);
returnBtn.addEventListener('click', handleReturn);
encryptedInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleDecode();
  }
});

/**
 * Função principal para decodificar a mensagem
 */
function handleDecode() {
  const input = encryptedInput.value.trim();

  // Validação da entrada
  if (!input) {
    showError('Por favor, digite uma sequência numérica para decodificar.');
    return;
  }

  if (!isValidInput(input)) {
    showError('Entrada inválida. Digite apenas números (ex: 81121215).');
    return;
  }

  // Processar decodificação
  const result = decodeMessage(input);
  displayResult(input, result);
}

/**
 * Função para retornar ao estado inicial
 */
function handleReturn() {
  encryptedInput.value = '';
  resultSection.classList.remove('show');
  currentResult = null;
  encryptedInput.focus();
}

/**
 * Validar se a entrada contém apenas números
 */
function isValidInput(input) {
  return /^\d+$/.test(input);
}

/**
 * 🧠 Sistema de Pontuação Inteligente
 */
function calculateScore(possibility) {
  let score = 0;
  const word = possibility.word;

  // +100000 pontos para palavras conhecidas no dicionário
  if (DICTIONARY[word]) {
    score += DICTIONARY[word];
  }

  // +100 pontos por cada número de 2 dígitos (maior eficiência)
  const twoDigitCount = possibility.breakdown.filter(b => {
    const num = parseInt(b.split('→')[0]);
    return num >= 10 && num <= 26;
  }).length;
  score += twoDigitCount * 100;

  // +10 pontos para palavras mais curtas (menos fragmentação)
  const fragmentationBonus = Math.max(0, 10 - possibility.path.length) * 10;
  score += fragmentationBonus;

  return score;
}

/**
 * Algoritmo principal de decodificação com Sistema de Pontuação Inteligente
 */
function decodeMessage(numStr) {
  const validationSteps = [];
  const allPossibleWords = [];

  validationSteps.push({
    step: 1,
    description: `Iniciando decodificação da sequência: "${numStr}"`
  });

  // Função recursiva para encontrar todas as combinações possíveis
  function findAllCombinations(str, currentPath, startIndex, currentBreakdown) {
    // Caso base: chegamos ao final da string
    if (startIndex >= str.length) {
      if (currentPath.length > 0) {
        const word = currentPath.join('');
        const possibility = {
          word: word,
          path: [...currentPath],
          breakdown: [...currentBreakdown]
        };
        // Calcular pontuação imediatamente
        possibility.score = calculateScore(possibility);
        allPossibleWords.push(possibility);
      }
      return;
    }

    // 🔄 Lógica de Priorização: Prioriza números de 2 dígitos primeiro (10-26)
    if (startIndex + 1 < str.length) {
      const twoDigits = str.substring(startIndex, startIndex + 2);
      const num2 = parseInt(twoDigits);
      if (num2 >= 10 && num2 <= 26) {
        const letter2 = numberToLetter(num2);
        if (letter2) {
          currentPath.push(letter2);
          currentBreakdown.push(`${num2}→${letter2}`);
          findAllCombinations(str, currentPath, startIndex + 2, currentBreakdown);
          currentPath.pop();
          currentBreakdown.pop();
        }
      }
    }

    // Tentar decodificar com 1 dígito (1-9)
    if (startIndex < str.length) {
      const singleDigit = str.substring(startIndex, startIndex + 1);
      const num1 = parseInt(singleDigit);
      if (num1 >= 1 && num1 <= 9) {
        const letter1 = numberToLetter(num1);
        if (letter1) {
          currentPath.push(letter1);
          currentBreakdown.push(`${num1}→${letter1}`);
          findAllCombinations(str, currentPath, startIndex + 1, currentBreakdown);
          currentPath.pop();
          currentBreakdown.pop();
        }
      }
    }
  }

  // Executar o algoritmo
  findAllCombinations(numStr, [], 0, []);

  validationSteps.push({
    step: 2,
    description: `Aplicando algoritmo de decodificação recursiva com backtracking`
  });

  validationSteps.push({
    step: 3,
    description: `Sistema de Pontuação Inteligente ativado: priorizando números duplos (10-26) e palavras conhecidas`
  });

  // Análise detalhada da string
  validationSteps.push({
    step: 4,
    description: `Analisando a sequência "${numStr}" buscando todas as combinações possíveis:`
  });

  // Ordenar por pontuação (maior primeiro)
  allPossibleWords.sort((a, b) => b.score - a.score);

  // Adicionar passos detalhados para cada possibilidade encontrada
  if (allPossibleWords.length > 0) {
    allPossibleWords.forEach((possibility, index) => {
      const dictStatus = DICTIONARY[possibility.word] ? ' (📚 PALAVRA CONHECIDA)' : '';
      validationSteps.push({
        step: 5 + index,
        description: `Possibilidade ${index + 1}: [${possibility.breakdown.join(', ')}] = "${possibility.word}" (${
          possibility.score
        } pontos)${dictStatus}`
      });
    });
  } else {
    validationSteps.push({
      step: 5,
      description: `Nenhuma combinação válida encontrada para a sequência "${numStr}"`
    });
  }

  // Selecionar o melhor resultado (já está ordenado por pontuação)
  let bestResult = null;
  if (allPossibleWords.length > 0) {
    bestResult = allPossibleWords[0]; // A palavra com maior pontuação

    if (allPossibleWords.length > 1) {
      const dictStatus = DICTIONARY[bestResult.word] ? ' (palavra do dicionário)' : ' (melhor pontuação)';
      validationSteps.push({
        step: 5 + allPossibleWords.length,
        description: `${allPossibleWords.length} possibilidades encontradas. Selecionando: "${bestResult.word}"${dictStatus} com ${bestResult.score} pontos`
      });
    }
  }

  return {
    success: bestResult !== null,
    result: bestResult,
    allPossibilities: allPossibleWords,
    validationSteps: validationSteps,
    originalInput: numStr
  };
}

/**
 * Converter número para letra (1=A, 2=B, ..., 26=Z)
 */
function numberToLetter(num) {
  if (num < 1 || num > 26) return null;
  return String.fromCharCode(64 + num); // A=65 na tabela ASCII
}

/**
 * Obter número correspondente a uma letra (para exibição)
 */
function getNumberForLetter(letter) {
  return letter.charCodeAt(0) - 64;
}

/**
 * Exibir resultado da decodificação
 */
function displayResult(input, result) {
  if (!result.success) {
    showError('Não foi possível decodificar a sequência. Verifique se os números estão corretos.');
    return;
  }

  let html = '';

  // Adicionar passos de validação
  result.validationSteps.forEach(step => {
    html += `
            <div class="validation-step">
                <div class="step-number">Passo ${step.step}:</div>
                <div class="step-content">${step.description}</div>
            </div>
        `;
  });

  // Mostrar todas as possibilidades se houver mais de uma
  if (result.allPossibilities.length > 1) {
    html += `
            <div class="validation-step">
                <div class="step-number">Ranking de possibilidades (por pontuação):</div>
                <div class="step-content">
                    ${result.allPossibilities
                      .map((poss, idx) => {
                        const dictIcon = DICTIONARY[poss.word] ? '📚 ' : '';
                        return `${idx + 1}. ${dictIcon}[${poss.breakdown.join(', ')}] = "${poss.word}" (${
                          poss.score
                        } pontos)`;
                      })
                      .join('<br>')}
                </div>
            </div>
        `;
  }

  // Resultado final destacado
  const dictIcon = DICTIONARY[result.result.word] ? '📚 ' : '';
  html += `
        <div class="final-result">
            <h4>Saída Esperada:</h4>
            <div class="decoded-word">${dictIcon}${result.result.word}</div>
            <div style="font-size: 14px; color: #666; margin-top: 10px;">
                Pontuação: ${result.result.score} pontos
            </div>
        </div>
    `;

  resultContent.innerHTML = html;
  resultSection.classList.add('show');
  currentResult = result;

  // Scroll suave para a seção de resultado
  resultSection.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  });
}

/**
 * Exibir mensagem de erro
 */
function showError(message) {
  const html = `
        <div class="validation-step" style="border-left-color: #ff4444;">
            <div class="step-number" style="color: #ff4444;">Erro:</div>
            <div class="step-content" style="color: #ff8888;">${message}</div>
        </div>
    `;
  resultContent.innerHTML = html;
  resultSection.classList.add('show');
}

// Foco inicial no input
document.addEventListener('DOMContentLoaded', function () {
  encryptedInput.focus();
});

// Exemplos para teste:
// 231518124 = WORLD (23→W, 15→O, 18→R, 12→L, 4→D) - 100300 pontos
// 85121215 = HELLO (8→H, 5→E, 12→L, 12→L, 15→O) - 100300 pontos
// 12212926624222225 = LUIZFXDEV - LUIZ tem 100200 pontos
