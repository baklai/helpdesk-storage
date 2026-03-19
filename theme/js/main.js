document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('file-list-container');
  const pre = container.querySelector('pre');
  if (!pre) return;

  const lines = pre.innerHTML.split('\n');

  let html = '';
  let count = 0;

  const months = {
    Jan: 'Jan',
    Feb: 'Feb',
    Mar: 'Mar',
    Apr: 'Apr',
    May: 'May',
    Jun: 'Jun',
    Jul: 'Jul',
    Aug: 'Aug',
    Sep: 'Sep',
    Oct: 'Oct',
    Nov: 'Nov',
    Dec: 'Dec'
  };

  lines.forEach(line => {
    const match = line.match(
      /<a href="([^"]+)">([^<]+)<\/a>\s+(\d{2})-([A-Za-z]{3})-(\d{4})\s+(\d{2}:\d{2})\s+(.+)/
    );

    if (!match) return;

    const [, href, name, day, month, year, time, size] = match;

    if (href === '../') return;

    count++;

    let icon = 'fa-file';

    if (href.endsWith('/')) icon = 'fa-folder';
    else if (name.match(/\.(png|jpg|jpeg|gif|webp)$/i)) icon = 'fa-image';
    else if (name.match(/\.pdf$/i)) icon = 'fa-file-pdf';
    else if (name.match(/\.(zip|rar|7z|tar)$/i)) icon = 'fa-file-archive';

    html += `
      <a href="${href}" class="file-link">
        <div class="file-row">

          <div class="file-name">
            <i class="fas ${icon} file-icon"></i>
            <span>${name}</span>
          </div>

          <div class="file-date">
            ${day} ${month} ${year} ${time}
          </div>

          <div class="file-size">
            ${size}
          </div>

        </div>
      </a>
    `;
  });

  container.innerHTML = html;

  document.getElementById('file-counter').innerText = `Файлов: ${count}`;
});
