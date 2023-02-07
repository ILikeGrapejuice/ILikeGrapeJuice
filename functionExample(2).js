// 유데미 함수예제 중 내게 어려웠던 문제 (2) 

// 인수를 입력하면 인수의 모음이 배열로 나오고, 배열 안의 숫자들이 모두 더해지는 함수를 만드는 예제이다.

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101

// 합계가 나올 total 변수를 만들고 초기값은 0으로 세팅했다.

// 그 이후 for 반복문으로 num의 숫자들을 배열로 만들고 모든 숫자들의 합계를 total에 반환하도록 했다.

// 코드 :
function sumArray (num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total;
}