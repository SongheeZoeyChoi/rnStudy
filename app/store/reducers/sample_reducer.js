// 리듀서 함수 작성 
export default function(state={}, action) { // state, action 받아오고 
    switch(action.type){ // action TYPE에 따라 분기 
        case 'SAMPLE':
            return state
        default: 
            return state 
    }
}