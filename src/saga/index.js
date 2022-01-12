import { put, takeLatest } from 'redux-saga/effects'

function * increase(value) {
    try {
        yield put({ type: "Increase_Action", value : value.value });
    } catch (e) { }
}
function* decrease(value){
    try{
        yield put ({ type: "Decrease_Action", value: value.value})
    } catch (e){}
}


function* mySaga() {
    yield takeLatest("Add", increase);
    yield takeLatest("Sub", decrease);
}

export default mySaga;
