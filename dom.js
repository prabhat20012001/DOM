var li=document.getElementsByTagName('li')
console.log(li)

li[2].textContent='Prabhat'
li[2].style.backgroundColor='green'
li[2].style.fontWeight='bold';


for(var i=0;i< li.length;i++)
{
    li[i].style.fontWeight="bold";
}