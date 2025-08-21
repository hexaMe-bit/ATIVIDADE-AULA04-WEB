import { readFile } from 'fs/promises';




async function carregarConfig() {
      try {
            const dados = await readFile('config.json', 'utf-8');
            const config = JSON.parse(dados);

            console.log("Configuração carregada:");
            console.log(`Porta do servidor: ${config.port}`);
            console.log(`Modo Debug: ${config.debugMode}`);
      }
      catch (error) {
            console.error('Erro ao carregar o arquivo de configuração:', error);
      }
      
}

carregarConfig();



