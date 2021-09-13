alert('Welcome to f1 Website');
//document.getElementById("intro").innerHTML="Hello World";
const element=document.getElementById("demo")
//document.getElementById("intro").innerHTML="THis is a sample"+element.innerHTML;
console.log(document.title);
console.log(document.head);
console.log(document.all[7]);
//document.all[7].textContent='Nikhith';
var list =document.getElementsByTagName('li');
// list[0].style.fontWeight='bold';
// for(var i=0;i<list.length;i++)
// {
//     list[i].style.fontWeight='bold';
    
    
// }
console.log(document.getElementsByTagName("li"));
var submit=document.querySelector('input[type="submit"]');
// submit.value='done';
var firstitem=document.querySelector('.team-name-item');
// firstitem.style.color='red';


// for(var i=0;i<even.length;i++)
// {
//   even[i].style.fontWeight='bold';
    
// }
var itemList=document.querySelector('#items');
//  itemList.parentNode.parentNode.style.backgroundColor='black';
//  itemList.parentNode.style.backgroundColor='black';

 var newNode =document.createElement('div');
 newNode.className='hello';
 newNode.id='hi';
// var newNodeText=document.createTextNode('Hello World');
//newNode.appendChild(newNodeText);
//console.log(newNode);
var container = document.querySelector('header .container');
var h1 =document.querySelector('header h1');
container.insertBefore(newNode,h1);
var button=document.getElementById('button').addEventListener('click',buttonClicked);
function buttonClicked(e)
{
  var odd=document.querySelector("ul.team-name");
//var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++)
{
  if(i%2 !=0)

  odd[i].style.backgroundColor='#f4f4f4';
    

}
console.log(odd);
var even=document.querySelectorAll('li');
for(var i=0;i<even.length;i++)
{
  if(i%2 ==0)

  even[i].style.backgroundColor='#ccc';
    

}
  //document.getElementById('header-title').textContent='Changed';
}
var box=document.getElementById('box');
var output=document.getElementById('output');
//box.addEventListener('mousemove',runEvent);
function runEvent(e){
console.log('Event:'+e.type);

// output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY:'+e.offsetY+'</h3>';
box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+", 40)"  ;

}
var form =document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter =document.getElementById('filter');
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItem);
// console.log(comment);
// console.log(itemList);

function addItem(e)
{
  e.preventDefault();
var newItem =document.getElementById('item').value;

var li = document.createElement('li');
li.className='comment-group-item';
li.appendChild(document.createTextNode(newItem));
 itemList.appendChild(li);
// console.log(itemList);
var deleteBtn=document.createElement('button');
deleteBtn.className='btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);
itemList.appendChild(li);

}
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
      if(confirm('Are You Sure'))
      {
        var li=e.target.parentElement;
        itemList.removeChild(li);
      }
    }

}
function filterItem(e)
{
  var text=e.target.value.toLowerCase();
  var itemSearch=itemList.getElementsByTagName('li');
  Array.from(itemSearch).forEach(function(item)
  {
    var itemName=item.firstChild.textContent ;
    if(itemName.toLowerCase().indexOf(text)!=-1)
    {
      item.style.display='block';
    } 
    else{
      item.style.display='none';
    }
  })
}
