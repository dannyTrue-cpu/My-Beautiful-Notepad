const date = new Date();
//colors for the cat
const colors = [
  '#0078d7',
  '#e81123',
  '#00cc6a',
  '#ffb900'
];

const categoriesNames = [
  'office',
  'Task',
  'Log',
  'Personal'
]

//Element
const noteTopic = document.querySelector('#note-topic');
const notepad = document.querySelector('#notepad');
const cancelBtn = document.querySelector('.cancel');
const saveBtn = document.querySelector('.save');
const FtIconLink = document.querySelectorAll('.cat');

const cat = {}
//colors
  FtIconLink.forEach(function(link,index) {
   link.addEventListener('click',function() {
     
    cat.catName = categoriesNames[index];
    cat.colorName = colors[index];
    alert(`${categoriesNames[index]} Category Labeled`)
    // console.log(cat)
   })
  })

//Events
loadEvents()

function loadEvents() {
  //add focus and blur effect
  noteTopic.addEventListener('focus',focusChange);
  noteTopic.addEventListener('blur',blurChange);
  //add focus and blur effect to notepad
  notepad.addEventListener('focus',focusChange2);
  notepad.addEventListener('blur',blurChange2);
  //add to save box
  saveBtn.addEventListener('click',addlogToLS)
}
//Function

//CHANGE FOCUS ON TOPIC EVENTS INPUT
//CHANGE FOCUS ON TOPIC EVENTS INPUT
const topicPlaceHolder = "What's Your Topic";
noteTopic.setAttribute('placeholder',topicPlaceHolder);
//CHANGE FOCUS ON TOPIC EVENTS
function focusChange() {  
  if (noteTopic.getAttribute('placeholder') !== null) {
    noteTopic.removeAttribute('placeholder')
  }
}

function blurChange () {
  if (noteTopic.getAttribute('placeholder') === null) {
    noteTopic.setAttribute('placeholder',topicPlaceHolder)
  }
}

const notepadText = 'Add Your log';
notepad.setAttribute('placeholder',notepadText);

function focusChange2 () {
  if (notepad.getAttribute('placeholder') !== null) {
    notepad.removeAttribute('placeholder')
  }
}

function blurChange2 () {
  if (notepad.getAttribute('placeholder') === null) {
    notepad.setAttribute('placeholder',notepadText)
  }
}
//CHANGE FOCUS ON TOPIC EVENTS INPUT
//CHANGE FOCUS ON TOPIC EVENTS INPUT

//add to Local Storage

function addlogToLS() {
  if (noteTopic.value === '' || notepad.value === '') {
    alert('Please Check Your Topic NotePad! ')
  } else {
//LOGOBJECT
    let _topic = '';
    let _cat = '';
    let _date = `${date.getDate() + 1}/${date.getMonth()}/${date.getFullYear()}`;
    let _color = '';
    let _note = '';
//add to object
    _topic = noteTopic.value;
    _note = notepad.value

//LOGOBJECT
  const logObject = {
    topic: _topic,
    category: cat.catName,
    date: _date,
    color: cat.colorName,
    note: _note
  }
    //cleARvalue
    notepad.value = '';
    noteTopic.value = '';
  //add object to local storage
    const log = getLocal();
    log.push(logObject);
    localStorage.setItem('logs',JSON.stringify(log))
  //alert saved work
    alert('Note Saved! ');

  }
}
//DATA with structure
function getNo (start = 0, end = Infinity, step = 1) {
  let nextIndex = 0;
  let count = 0;

  return {
    next: function () {
      if (nextIndex < end) {
        count += step
        count++
      }
      return count
    }
  }
}

const id = getNo().next();

//get from local storage
function getLocal () {
  let log;

  if (localStorage.getItem('logs') === null) {
    log = [];
  } else {
    log = JSON.parse(localStorage.getItem('logs'))
  }

  return log;
}

//change back to cancel and cancel to back

function changeInterface() {
  if (noteTopic.value === '' || notepad.value === '') {
    cancelBtn.textContent = 'Back';
    cancelBtn.setAttribute('href','log-list.html');
  }
}
changeInterface()