let currentPosition = null;

navigator.geolocation.getCurrentPosition((pos) => {
  currentPosition = {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude
  };
}, () => {
  alert("位置情報が取得できませんでした");
});

function searchLastTrain() {
  const destination = document.getElementById('destination').value;
  if (!destination || !currentPosition) {
    alert("目的地と現在地が必要です");
    return;
  }

  // 疑似表示（実際の終電APIは未接続）
  const result = `
    <h3>疑似終電情報</h3>
    <p>現在地：(${currentPosition.lat.toFixed(3)}, ${currentPosition.lng.toFixed(3)})</p>
    <p>目的地：${destination}</p>
    <p>発車：23:45 ｜ 到着：00:32</p>
  `;
  document.getElementById("result").innerHTML = result;
}