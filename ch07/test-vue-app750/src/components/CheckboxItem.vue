<template>
    <li>
        <input type="checkbox" :checked="checked" /> {{ id }} - {{ name }}
    </li>
    <!-- props의 checked키에 해당하는 값을 전달받아오는것을 v-bind를 생략하여
        :checked="checked"라 표현함 -->
</template>

<script>
export default {
    name: "CheckboxItem",
    // data(){} 렌더링 함수와는 다르게 props:{}는 연동된 데이터를 변경할 수 없다. 읽기전용으로 설정하는 값에 주로 사용한다.
    // 팁-초급아님)객체형으로 들어오는 props:{}는 엄격한 유효성 검사에 유리하다. 데이터이외에 각 키에 할당하는 값들이 데이터 형태로 써놓으면 유효성검사의 틀을 만들어 놓을 수 있다. 
    props: {
        id: [Number, String],
        // name: String,
        // p.194 더 정밀한 유효성 검증을 위한 함수
        name: {
            validator(v) {
                return typeof (v) !== "string" ? // 1차검증
                    // 삼항연산자 질문이 부정문으로 물었음, 문자열이 아닌게 맞지?
                    false : // true일때
                    v.trim().length >= 4 ? true : false; // flase일때, 2차검증부분
                // 2차 질문 다시해서 4글자 이상인지 다시 삼항연산자로 묻고, true/false반환
            }
        },
        checked: {
            type: Boolean,
            required: false,
            default: false
        }
        // 폼에서 사용하는 속성값의 이름과 동일하게 props의 키값으로 설정하면 축약해서 표현하는데 도움을 준다.
    },
    // created(){
    //     this.checked = true
    // }
    // props를 통해 자식요소가 데이터를 전달받기만 하는데 스스로 변경이 되는 내용을 추가하면 오류가 발생하다. props가 읽기 전용으로 부모->자식방향으로 전달해주는 개념임을 정확히 인지하자.
};
</script>