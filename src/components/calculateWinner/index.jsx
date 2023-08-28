// calculateWinner.js
export function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Linhas verticais
    [0, 4, 8], [2, 4, 6] // Diagonais
  ];

  for (const line of winningLines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
