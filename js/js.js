$(document).ready(function(){
   console.log('Started')

   // lin solve
   $('#lin_solve').on('click', function(e){
      let a = $('#lin_a').val()
      let b = $('#lin_b').val()
      let c = $('#lin_c').val()

      if($.isNumeric(a) && $.isNumeric(b) && $.isNumeric(c)){
         console.log(a, b, c)

         a = parseInt(a)
         b = parseInt(b)
         c = parseInt(c)

         console.log(a, b, c)
      
         $.ajax({
            type: "POST",
            url: "http://tzruby.herokuapp.com/api/v1/solutions/solve",
            data: {"a": a, "b": b, "c": c, "type": "lin"},
            //headers: { 'Authorization': 'Bearer 27dd7eeb5fca7cdebab581d461ed1b6b'},
            success: function(data) {
                alert("X = " + data.result);
            },
            error: function(data){
                alert(data.message);
            }
        });
      }else{
         alert('Неверные параметры')
      }
   });

   // sqr solve
   $('#sqr_solve').on('click', function(e){
      let a = $('#sqr_a').val()
      let b = $('#sqr_b').val()
      let c = $('#sqr_c').val()
      let d = $('#sqr_d').val()

      if($.isNumeric(a) && $.isNumeric(b) && $.isNumeric(c) && $.isNumeric(d)){
         console.log(a, b, c, d)

         a = parseInt(a)
         b = parseInt(b)
         c = parseInt(c)
         d = parseInt(d)

         console.log(a, b, c, d)
      
         $.ajax({
            type: "POST",
            url: "http://tzruby.herokuapp.com/api/v1/solutions/solve",
            data: {"a": a, "b": b, "c": c, "d": d, "type": "sqrt"},
            //headers: { 'Authorization': 'Bearer 27dd7eeb5fca7cdebab581d461ed1b6b'},
            success: function(data) {
                alert(data.result);
            },
            error: function(data){
                alert(data.message);
            }
        });
      }else{
         alert('Неверные параметры')
      }
   });
});