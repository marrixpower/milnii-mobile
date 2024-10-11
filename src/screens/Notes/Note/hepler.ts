export const formattingText = (text: string | undefined) => {
  let part1 = ''
  let part2 = ''
  if (!text) {
    return { part1, part2 }
  }
  const index = text.indexOf('\n')

  if (index !== -1) {
    part1 = text.slice(0, index) // Текст до первого \n
    part2 = text.slice(index + 1) // Текст после первого \n
  } else {
    part1 = text // Если \n нет, вся строка будет первой частью
    part2 = '' // Вторая часть пустая
  }

  return { part1, part2 }
}
