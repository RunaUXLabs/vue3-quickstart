let base = 100;
const add = (x) => base + x;
const multiply = (x) => base * x;
const getBase = () => base;

export { add, multiply };
export default getBase;
// 이 모듈을 이용할 때 마다 매번 사용하는 함수라면 export default로 내보낸다
