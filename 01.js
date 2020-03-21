grade(90)

function grade(point) {
    let word
    if (point >= 90) {
        word = 'A'
    } else if (point >= 80 && point <= 80) {
        word = 'B'
    } else if (point >= 70 && point <= 79) {
        word = 'C'
    } else if (point >= 60 && point <= 69) {
        word = 'D'
    } else if (point <= 59) {
        word = 'E'
    }

    console.log(word)
}
