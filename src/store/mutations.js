const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMBER_ANSWER = 'REMBER_ANSWER';
const REMBER_TIME = 'REMBER_TIME';
const INIT_DATA = 'INIT_DATA';

export default {
  //进入下一题
  'ADD_ITEMNUM'(state,num) {
    // state.itemNum += 1;
    state.itemNum+=num;
  },
  //保存答案
  'REMBER_ANSWER'(state, payload) {
    state.answerid[state.itemNum] = payload.id;
  },
  //记时
  'REMBER_TIME'(state) {
    state.timer = setInterval(() => {
      state.allTime++;
    }, 1000);
  },
  //初始化
  'INIT_DATA'(state) {
    state.itemNum = 1;
    state.answerid = 0;
    state.answerid = [];
  }
}