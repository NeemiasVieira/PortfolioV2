import { ThemeType } from './styled';

export const lightTheme: ThemeType = {
  colors: {
    primary: 'rgb(50, 130, 160)', // Um tom mais suave para combinar melhor com fundo claro
    text: '#222222', // Texto escuro para contraste
    textSecondary: '#5e6b70', // Texto secundário
    background: '#f5f5f5', // Fundo principal da aplicação
    element: '#e5e5e5', // Elementos de fundo (cartões, botões, inputs)
    elementHover: '#e6e6e6', // Hover para elementos de fundo
    border: '#d1d1d1', // Bordas suaves
    success: '#00A043', // Verde um pouco mais escuro para manter o contraste
    error: '#cc2900', // Vermelho mais fechado para melhor legibilidade
    toggleBackground: '#ddd', // Cor do fundo do switch quando desligado
    toggleCircle: '#fff', // Cor da bolinha do switch
  },
  shadows: {
    light: '3px 3px 10px 1px rgba(150, 150, 150, 0.3)', // Sombra leve para elementos
    default: '3px 3px 15px 1px rgba(150, 150, 150, 0.5)', // Sombra padrão
    strong: '3px 3px 20px 2px rgba(150,150,150,0.75)', // Sombra forte
  },
} as const;
