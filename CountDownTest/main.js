const start = new Date()  // 更新時点の時間
const startY = start.getFullYear()
const startM = start.getMonth()
const startD = start.getDate()
const startH = start.getHours()
const startMin = start.getMinutes() + 5  // ← 更新時間+5分
const startS = start.getSeconds()
console.log( "startY" +  startY)
console.log( "startM" +  startM)
console.log( "startD" +  startD)
console.log( "startH" +  startH)
console.log( "startMin" + startMin )
console.log( "startS" + startS )

if ( startMin >= 60 ){
    startH+1
    startMin -= 60
}
////////////////////////////
// ↑ 関数内だとターゲット時間が更新されちゃうので外に出しました。
////////////////////////////

let countdown = setInterval(function(){
    const now = new Date() //今の日時
    const target = new Date(startY, startM  , startD, startH, startMin, startS) // ターゲット日時を取得
    ////////////////////////////
    // ↑ 秒を合わせるの忘れてました。
    ////////////////////////////
    const remainTime = target - now  //差分を取る（ミリ秒で返ってくる
    console.log( "now        " + now )
    console.log( "target     " + target )
    console.log( "remainTime " + remainTime )

    //指定の日時を過ぎていたら処理をしない
    if(remainTime < 0) return false 

    //差分の日・時・分・秒を取得
    //const difDay  = Math.floor(remainTime / 1000 / 60 / 60 / 24)
    //const difHour = Math.floor(remainTime / 1000 / 60 / 60 ) % 24
    const difMin  = Math.floor(remainTime / 1000 / 60) % 60
    const difSec  = Math.floor(remainTime / 1000) % 60

    //残りの日時を上書き
    //document.getElementById("countdown-day").textContent  = difDay
    //document.getElementById("countdown-hour").textContent = difHour
    document.getElementById("countdown-min").textContent  = difMin
    document.getElementById("countdown-sec").textContent  = difSec

    //指定の日時になればカウントを止める
    if(remainTime < 0) clearInterval(countdown)

}, 1000)    //1秒間に1度処理