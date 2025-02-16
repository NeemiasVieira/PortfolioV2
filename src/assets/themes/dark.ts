import { ThemeType } from './styled';

export const darkTheme: ThemeType = {
  colors: {
    primary: 'rgb(70, 170, 200)', // Cor principal
    text: '#ffffff', // Texto principal
    textSecondary: '#79878c', // Texto secundário (menos destaque)
    background: '#1b1b1b', // Fundo principal da aplicação
    element: '#222', // Elementos de fundo (cartões, botões, inputs)
    elementHover: '#333', // Hover para elementos de fundo
    border: '#000', // Borda para elementos contrastantes
    success: '#00C853', // Verde para sucesso/mensagens positivas
    error: '#ff3300', // Vermelho para erros/alertas
    toggleBackground: '#444', // Cor do fundo do switch quando desligado
    toggleCircle: '#fff', // Cor da bolinha do switch
  },
  shadows: {
    light: '3px 3px 10px 1px rgba(0, 0, 0, 0.3)', // Sombra leve para elementos
    default: '3px 3px 15px 1px rgba(0, 0, 0, 0.5)', // Sombra padrão
    strong: '3px 3px 20px 2px rgba(0,0,0,0.75)', // Sombra forte
  },
} as const;
