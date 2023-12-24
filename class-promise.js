/**
 * 변수 handle은 특별한 객체인 Promise를 가져왔음 (참조)
 * console.log(handle)을 실행하면 Promise { <pending> }이 출력
 * Promise라는 이름에서 인스턴스로 객체가 출력된 것이고
 * <pending>은 Promise만의 특수한 상태 의미
 */
const handle = new Promise(function(resolve, reject){
  // 1. Promise가 생성되고, 첫번째 setTimeout이 설정
  // 이 시점에서 Promise의 상태는 pending
  setTimeout(function(){
    console.log('첫번째'); // 4. 3초 후 '첫번째' 출력
    resolve(); // 5. 첫 번째 Promise가 fulfilled(이행한) 상태가 됨
  }, 3000);
})
.then(function(){
  // 6. 첫 번째 Promise가 완료되고, 두 번째 Promise가 시작됨
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      console.log('두번째'); // 8. 추가 2초 후, '두번째'가 출력됨
      resolve(); // 9. 두 번째 Promise가 fulfilled 상태
    }, 2000);
  });
})
.then(function(){
  // 10. 두 번째 Promise가 완료되고, 세 번째 Promise가 시작됨
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('세번째') // 12
      resolve(); // 13
    }, 1000)
  });
});
// 2. 이 시점에서 모든 Promsie는 pending(대기) 상태
// 3. 3초의 대기가 시작됨
// 7. 첫 번째 Promise가 완료되었으며, 두번째 Promsie의 2초대기 시작
// 11. 두 번째 Promsie가 왼료되었으며, 세번째 Promise의 1초대기 시작
// 14. 모든 Promise가 순차적으로 완료됨