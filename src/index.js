export function healthSort(character) {
    return character.sort((a, b) => b.health - a.health)
}