// 수박수박수박수박수박수?

// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

// ToDo
// 1. 빈 배열에서부터 한 글자씩 추가
function solution1(n) {
  const waterMellon = "수박"
  let res = ""
  for (let i = 0; i < n; i++) {
    res += waterMellon[i % 2]
  }
  return res
}

// 2. 글자 길이가 짝수일 때랑 홀수일 때 나눠서 양쪽에서 추가
function solution2(n) {
  const waterMellon = "수박"
  let res = ""
  if (n % 2 === 0) {
    for (let i = 0; i < n/2; i++) {
      res = waterMellon[(i + n/2 + 1) % 2] + res + waterMellon[(i + n/2) % 2]
    }
  }
  else {
    res += waterMellon[((n + 1)/2 + 1) % 2]
    for (let i = 0; i < (n-1)/2; i++) {
      res = waterMellon[(i + (n+1)/2) % 2] + res + waterMellon[(i + (n+1)/2) % 2]
    }
  }
  return res
}

// 3. 글자 길이가 짝수일 때랑 홀수일 때 앞에서부터 추가
function solution3(n) {
  let res = ""
  if (n % 2 === 0) {
    for (let i = 0; i < n/2; i++) {
      res += "수박"
    }
  }
  else {
    for (let i = 0; i < (n-1)/2; i++) {
      res += "수박"
    }
    res += "수"
  }
  return res
}


// Testing!
// 어느 소가 일을 잘하나
const n = 10
console.time("calculatingTime1");
console.log(solution1(n));
console.timeEnd("calculatingTime1");
console.time("calculatingTime2");
console.log(solution2(n));
console.timeEnd("calculatingTime2");
console.time("calculatingTime3");
console.log(solution3(n));
console.timeEnd("calculatingTime3");