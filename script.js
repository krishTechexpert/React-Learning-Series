const root = document.getElementById('root');

function tick() {
  const time = new Date().toLocaleTimeString();
  const element = (
    <div>
      <div>hello world</div>
      <input type="text" value={time} />
      <br></br>
      <input type="text" value={time} />
      <span>${time}</span>
    </div>
  );
  ReactDOM.render(element, root);
  //root.innerHTML = element;
}

tick();

setInterval(tick, 1000);
