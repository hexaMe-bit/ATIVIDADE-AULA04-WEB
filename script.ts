import { readFile } from 'fs/promises';

interface Config{
      DataBaseURL: string,
      port: number,
      debugMode: bool
      
}


async function carregarConfig(): Promise<void> {
      try {
            const dados = await readFile('config.json', 'utf-8');
            const config: Config = JSON.parse(dados);

            console.log("Configuração carregada:");
            console.log(`Porta do servidor: ${config.port}`);
            console.log(`Modo Debug: ${config.debugMode}`);
      }
      catch (error) {
            console.error('Erro ao carregar o arquivo de configuração:', error);
      }
      
}

carregarConfig();



