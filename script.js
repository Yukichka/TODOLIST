var dataSet = []

$( document ).ready(function () {
    render();
});

function initialDataSet (){
  return [ 
    { id: 'm1', text: 'message1', timeStamp: new Date(), urgence:0 },
    { id: 'm2', text: 'message2', timeStamp: new Date(), urgence:1 },
    { id: 'm3', text: 'message3', timeStamp: new Date(), urgence:0 },
    { id: 'm4', text: 'message4', timeStamp: new Date(), urgence:1 },
  ];
}

dataSet = initialDataSet()

function render (){
  $('ul.message').text('');
  dataSet.forEach(function(element){
    var urgence = 'NOT AT ALL'
    if (element.urgence ==0) urgence = 'NOT AT ALL'
    if (element.urgence ==1) urgence = 'NORMAL'
    if (element.urgence ==2) urgence = 'URGENT'
      
    $('ul.message').append(
          '<li id="'+element.id+'"><p><span class="context">'+element.text
         +'</span><b> '+urgence+'</b></p>'
         +'<span>' 
         + new Date().toLocaleDateString("en-GB",options)
         +' '
         + new Date().toLocaleTimeString("en-GB")
         +' '
         +'</span>'
         +'<button onclick="changeMessage(\''+element.id+'\')" class="btn btn-outline-warning btn-sm">CHANGE</button>'
         +' <button onclick="removeMessage(\''+element.id+'\')" class="btn btn-outline-danger btn-sm">REMOVE</button>' 
         +'</li>');
  })
}

     

    $(document).keypress(function (e) {
        if (e.which == 13) {
            addMessage();
        }
    });

        
      var options = { 
          weekday: "long", year: "numeric", month: "short", day: "numeric" }; 

var n = 4     

function addMessage(element) {
  var text = $('input#message').val(); 

  var selectedOption = $('#urgence option:selected').val();

  $('input').val('');
  
  if (text.length===0)
  return alert('Ooops! Please type somthing!');
  
  n++
  dataSet.push( { id:'m'+n, text: text, timeStamp: new Date(), urgence: selectedOption })
  render();
}  

function removeMessage(element){
  $('li#'+element.id).remove();
}

      
        

function changeMessage(todoId){
  console.log("changeMessage: for todoId: ", todoId) 

  var toDo = dataSet.find(function (element){return element.id == todoId})
  console.log("changeMessage: foundtoDo: ", toDo) 

  console.log (toDo.text)         
  var newValue = prompt('How would you like to change?', toDo.text);

  if (newValue.length ===0) 
    return alert('Ooops! Please type somthing!');
  toDo.text = newValue
  render();
}
        