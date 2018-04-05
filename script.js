      var n = 4

      $(document).keypress(function (e) {
        if (e.which == 13) {
            addMessage();
        }
    });

        
      var options = { 
          weekday: "long", year: "numeric", month: "short", day: "numeric" }; 
        
function addMessage() {
      var text = $('input#message').val(); 

      var selectedOption = $('#urgence option:selected').text();

      $('input').val('');
      n ++
      if (text.length===0)
      return alert('Ooops! Please type somthing!');
      $('ul.message').append(
            '<li id="m'+n+'"><p><span class="context">'+text
           +'</span><b> '+selectedOption+'</b></p>'
           +'<span>' 
           + new Date().toLocaleDateString("en-GB",options)
           +' '
           + new Date().toLocaleTimeString("en-GB")
           +' '
           +'</span>'
           +'<button onclick="changeMessage(\'m'+n+'\')" class="btn btn-outline-warning btn-sm">CHANGE</button>'
           +' <button onclick="removeMessage(\'m'+n+'\')" class="btn btn-outline-danger btn-sm">REMOVE</button>' 
           +'</li>');

  };  

function removeMessage(id){
      $('li#'+id).remove();
    };

      
        

function changeMessage(id){ 
    var currentValue = $('li#'+id+' .context').text(); 
    console.log ($('li#'+id+' .context'))         
    var newValue = prompt('How would you like to change?', currentValue);

    if (newValue.length ===0) 
    return alert('Ooops! Please type somthing!');
    $('li#'+id+' .context').text(newValue);
     };
          