const suits = ['♠', '♥', '♣', '♦']
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

const cards: Array<string> = []

for (const suit of suits) {
  for (const number of numbers) {
    cards.push(`${suit}${number}`)
  }
}

// 모든 카드 목록은 아래의 작업이 완료된 것.
const fnCard =
  // 아래의 작업을 모든 무늬에 적용
  suits.flatMap((suit) =>
    // 아래의 작업을 모든 숫자에 적용
    numbers.map(
      (number) =>
        // 카드는 무늬와 숫자를 연결 한 문자열
        suit + number
    )
  )
// 무늬별로 나누어진 카드를 하나로 합친다.
//Array<Array<T>> => Array<T>

function init() {
  console.log(fnCard)
}

export default init
