let question = prompt('어떤 일을 하시겠어요?');
const list = [];

while (question !== '종료') {
    if (question === '추가') {
        const add = prompt('물건을 추가하세요.');
        list.push(add);
        console.log (`${add}가 추가되었습니다.`);
    } else if (question === '목록') {
        console.log ('**********');
        for (let i = 0; i < list.length; i++) {
            console.log (`${i} : ${list[i]}`);
        }
        console.log ('**********');
    } else if (question === '삭제') {
        const deletedStr = parseInt(prompt('어떤 물건을 삭제하시겠어요? (숫자 입력)'));
        if (!Number.isNaN(deletedStr)) {
            const deleted = list.splice(deletedStr, 1);
            console.log (`${deleted}가 삭제되었습니다.`);
        } else {
            console.log ('잘못된 정보입니다.');
        }
    }
    question = prompt('어떤 일을 하시겠어요?');
}
console.log ('과정이 종료되었습니다.');