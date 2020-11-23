//elemect
const logList = document.querySelector('.log-list');
//events
document.addEventListener('DOMContentLoaded',addItem);
const clearBtn = document.querySelector('.buttonclear > a');
//function

function addItem() {
  const logs = getLocal();

  //for each on log
  logs.forEach(function(log) {
       //create div
      const div = document.createElement('div');
      //create class
      div.className = 'log-item';
      //create a
      const aTag = document.createElement('a');
      //create tag element
      aTag.setAttribute('href','#');
      //append to div
      div.appendChild(aTag);
      //create li
      const li = document.createElement('li');
      //add classname
      li.className = 'logs';
      //appedn to a
      aTag.appendChild(li);
      //write span
      const spanCat = document.createElement('span');
      //add class
      spanCat.className = 'categories';
      //add text
      spanCat.style.backgroundColor = log.color;
      //append to li
      li.appendChild(spanCat);
      //creaate para tag
      const topic = document.createElement('p');
      //add class
      topic.className = 'text-log';
      //add text
      topic.textContent = log.topic;
      //append to div
      li.appendChild(topic);
      //create cat text
      const spanCatName = document.createElement('span');
      //add class
      spanCatName.className = 'category-text';
      //add text
      if (!log.category) {
        spanCatName.textContent = 'uncategorize';
      } else {
        spanCatName.textContent = log.category;
      }
      //add color
      spanCatName.style.color = log.color;
      //append to div
      li.appendChild(spanCatName);
      //crearte span log date
      const CatDate = document.createElement('span');
      //craete class
      CatDate.className = 'log-date';
      //add text
      CatDate.textContent = log.date;
      //append
      li.appendChild(CatDate);

    //append all to log list 
    logList.appendChild(div)
  })

}


// getLocal
function getLocal() {
  let log;

  if (localStorage.getItem('logs') === null) {
    log = []
  } else {
    log = JSON.parse(localStorage.getItem('logs'))
  }

  return log;
}


//clear all the log
clearBtn.addEventListener('click',function () {
  while (logList.firstElementChild) {
    logList.removeChild(logList.firstElementChild)
  }

  localStorage.removeItem('logs');
})