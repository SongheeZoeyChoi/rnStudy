import { combineReducers } from "redux"; // 여러 Reducer를 사용할 수 있기 때문에 하나로 묶어주는 combineReducers가 필요함 
import Sample from './sample_reducer';

const rootReducer = combineReducers ({
    Sample // 앞으로 만들 리듀서들은 여기서 한꺼번에 묶어 줌 
});

export default rootReducer;