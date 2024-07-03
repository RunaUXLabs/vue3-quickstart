import { defineStore } from "pinia";
import { reactive, computed } from 'vue';

// defineStore(스토어이름, 옵션값)
// 옵션 API 방식의 todoList1 스토어, 두번째 파라미터가 객체로 들어옴
// vue2에서 넘어오는 경우 옵션 API 방식을 유지해서 사용한다.
export const useTodoList1Store = defineStore("todoList1", {
    // state 초기렌더링 될 데이터값이 모이는 곳
    state: () => ({
        todoList: [
            { id: 1, todo: "ES6학습", done: false },
            { id: 2, todo: "React학습", done: false },
            { id: 3, todo: "ContextAPI 학습", done: true },
            { id: 4, todo: "야구경기 관람", done: false },
        ]
    }),
    // getters 계산된 속성값들이 적히는곳, 일반 소스의 computed()
    getters: {
        doneCount: (state) => {
            return state.todoList
                .filter((todoItem) => todoItem.done === true).length;
            // 할일완료된 값(todoItem.done 여부 체크)만 찾아서 숫자 세라
        }
    },
    // actions 이벤트들이 적히는곳, 일반 소스의 methods()
    actions: {
        addTodo(todo) {
            this.todoList.push({ id: new Date().getTime(), todo, done: false });
        },
        deleteTodo(id) {
            let index = this.todoList.findIndex((todo) => todo.id === id);
            this.todoList.splice(index, 1);
        },
        toggleDone(id) {
            let index = this.todoList.findIndex((todo) => todo.id === id);
            this.todoList[index].done = !this.todoList[index].done;
        }
    }
});

// 컴포지션 API 방식의 todoList2 스토어, 두번째 파라미터가 함수형으로 들어옴 
// 신규인 경우 함수, 변수 자유롭게 선언해서 쓰는것이 유연하므로 컴포지션 API 방식을 위주로 사용한다.
export const useTodoList2Store = defineStore("todoList2", () => {
    const state = reactive({
        todoList: [
            { id: 1, todo: "ES6학습", done: false },
            { id: 2, todo: "React학습", done: false },
            { id: 3, todo: "ContextAPI 학습", done: true },
            { id: 4, todo: "야구경기 관람", done: false },
        ]
    });

    const addTodo = (todo) => {
        state.todoList.push({ id: new Date().getTime(), todo, done: false });
    };

    const deleteTodo = (id) => {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList.splice(index, 1);
    };

    const toggleDone = (id) => {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList[index].done = !state.todoList[index].done;
    };

    const doneCount = computed(() => {
        return state.todoList.filter((todoItem) => todoItem.done === true).length;
    });

    const todoList = computed(() => state.todoList);

    // 이 아래 return은  defineStore()함수의 콜백함수가 반환하는 값이다.
    return { todoList, doneCount, addTodo, deleteTodo, toggleDone };
});