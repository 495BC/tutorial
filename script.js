function updateConnections() {
  const svg = document.getElementById('connections');
  svg.innerHTML = '';                                         // Clear old lines

  document.querySelectorAll('.node').forEach(a => {
    const from = a.getBoundingClientRect();
    (a.connections || []).forEach(toId => {
      const b = document.querySelector(`[data-id="${toId}"]`)
                   .getBoundingClientRect();
      const line = document.createElementNS(
        'http://www.w3.org/2000/svg','line'
      );
      line.setAttribute('x1', from.left + from.width/2);
      line.setAttribute('y1', from.top  + from.height/2);
      line.setAttribute('x2', b.left + b.width/2);
      line.setAttribute('y2', b.top  + b.height/2);
      line.setAttribute('stroke', 'rgba(0,150,0,0.5)');
      line.setAttribute('stroke-width', '2');
      svg.appendChild(line);                                  // SVG lines per connection :contentReference[oaicite:11]{index=11}
    });
  });
}
