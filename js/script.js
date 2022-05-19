function calcular()
{
  var cantidad=parseInt(document.getElementById('cantidad').value);
  var categoria=document.getElementById('categoria').value;
  console.log(cantidad)
  console.log(categoria)


   switch(categoria)
       {
             case 'Estudiante':
                 document.getElementById('result').value=("Total a pagar: $ "+((200*0.5)*cantidad))
                 break;
             case 'Trainee':
                 document.getElementById('result').value=("Total a pagar: $ "+((200*0.5)*cantidad))
                 break;
             case 'Junior':
                 document.getElementById('result').value=("Total a pagar: $ "+((200*0.5)*cantidad))
                 break;
       }
}