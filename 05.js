const city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung']

duplicateRemover(city)

function duplicateRemover(array) {
    console.log([...new Set(array)])
}
