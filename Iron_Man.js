function load(){
    document.getElementById('irondiv').style.scale='1';
    document.getElementById('ironimg').style.scale='1';
    document.getElementById('tx').style.scale='1';
}


function hload(){
    setTimeout(hov1,2000);
    setTimeout(hov2,4000);
    setInterval(hload,6000)
    
}
function hov1(){
    document.getElementById('ihov').style.color='deeppink';
}
function hov2(){
    document.getElementById('ihov').style.color='white';
}



const sun=document.getElementById('sun')
sun.addEventListener('click',function(){
    document.getElementById('bd').style.backgroundColor='white';
    document.getElementById('lg').style.color='black';
    document.getElementById('pr').style.color='black';
    document.getElementById('co').style.color='black';
    document.getElementById('h3').style.color='black';
    document.getElementById('h4').style.color='black';
    document.getElementById('bt').style.color='black';
    document.getElementById('bt2').style.color='black';
    document.getElementById('asc').style.color='black';
    document.getElementById('asc1').style.color='black';
    document.getElementById('asc2').style.color='black';
    document.getElementById('moon').style.display='block';
    document.getElementById('moon').style.color='black';
    document.getElementById('ihov').style.color='black';
    document.getElementById('sun').style.display='none';
    document.getElementById('projects').style.color='black';
    document.getElementById('imcard').style.border='2px solid black';
    document.getElementById('imcard1').style.border='2px solid black';
    document.getElementById('imcard2').style.border='2px solid black';
    document.getElementById('imcard3').style.border='2px solid black';
    document.getElementById('imcard4').style.border='2px solid black';
    document.getElementById('imcard5').style.border='2px solid black';
}
)

const moon=document.getElementById('moon')
moon.addEventListener('click',function(){
    document.getElementById('bd').style.backgroundColor='#222';
    document.getElementById('lg').style.color='white';
    document.getElementById('pr').style.color='white';
    document.getElementById('co').style.color='white';
    document.getElementById('h3').style.color='white';
    document.getElementById('h4').style.color='white';
    document.getElementById('bt').style.color='white';
    document.getElementById('bt2').style.color='white';
    document.getElementById('asc').style.color='white';
    document.getElementById('asc1').style.color='white';
    document.getElementById('asc2').style.color='white';
    document.getElementById('moon').style.display='none';
    document.getElementById('moon').style.color='white';
    document.getElementById('ihov').style.color='white';
    document.getElementById('sun').style.display='block';
    document.getElementById('projects').style.color='white';
    document.getElementById('imcard').style.border='2px solid white';
    document.getElementById('imcard1').style.border='2px solid white';
    document.getElementById('imcard2').style.border='2px solid white';
    document.getElementById('imcard3').style.border='2px solid white';
    document.getElementById('imcard4').style.border='2px solid white';
    document.getElementById('imcard5').style.border='2px solid white';

}
)


const project=document.getElementById('pr')
project.addEventListener('click',function(){
    document.getElementById('hm').style.background='none';
    document.getElementById('co').style.background='none';
    document.getElementById('pr').style.backgroundColor='deeppink'
})
const home=document.getElementById('hm')
home.addEventListener('click',function(){
    document.getElementById('hm').style.backgroundColor='deeppink';
    document.getElementById('co').style.background='none';
    document.getElementById('pr').style.background='none';


})


const div=document.getElementById('imcard')
div.addEventListener('mouseenter',function(){
    document.getElementById('hcard').style.scale='1';
    document.getElementById('hcard').style.height='250px';
    document.getElementById('hcard').style.backgroundColor='rgba(155, 100, 75, 0.5)';
    document.getElementById('hcard').innerHTML='Movies Site';
    document.getElementById('hc').innerHTML='More Details';
})
const div1=document.getElementById('imcard')
div1.addEventListener('mouseleave',function(){
    document.getElementById('hcard').style.scale='1';
    document.getElementById('hcard').style.height='0px';
    document.getElementById('hcard').style.background='none';
    document.getElementById('hcard').innerHTML='';
    document.getElementById('hc').innerHTML='';

})




const div2=document.getElementById('imcard1')
div2.addEventListener('mouseenter',function(){
    document.getElementById('hcard1').style.scale='1';
    document.getElementById('hcard1').style.height='250px';
    document.getElementById('hcard1').style.backgroundColor='rgba(155, 100, 75, 0.5)';
    document.getElementById('hcard1').innerHTML='Fake Windows';
    document.getElementById('hc1').innerHTML='More Details';

})
const div3=document.getElementById('imcard1')
div3.addEventListener('mouseleave',function(){
    document.getElementById('hcard1').style.scale='1';
    document.getElementById('hcard1').style.height='0px';
    document.getElementById('hcard1').style.background='none';
    document.getElementById('hcard1').innerHTML='';
    document.getElementById('hc1').innerHTML='';
})



const div4=document.getElementById('imcard2')
div4.addEventListener('mouseenter',function(){
    document.getElementById('hcard2').style.scale='1';
    document.getElementById('hcard2').style.height='250px';
    document.getElementById('hcard2').style.backgroundColor='rgba(155, 100, 75, 0.5)';
    document.getElementById('hcard2').innerHTML='Shopping Site';
    document.getElementById('hc2').innerHTML='More Details';


})
const div5=document.getElementById('imcard2')
div5.addEventListener('mouseleave',function(){
    document.getElementById('hcard2').style.scale='1';
    document.getElementById('hcard2').style.height='0px';
    document.getElementById('hcard2').style.background='none';
    document.getElementById('hcard2').innerHTML='';
    document.getElementById('hc2').innerHTML='';
})



const div7=document.getElementById('imcard3')
div7.addEventListener('mouseenter',function(){
    document.getElementById('hcard3').style.scale='1';
    document.getElementById('hcard3').style.height='250px';
    document.getElementById('hcard3').style.backgroundColor='rgba(155, 100, 75, 0.5)';
    document.getElementById('hcard3').innerHTML='Jarvis';
    document.getElementById('hc3').innerHTML='More Details';

})
const div8=document.getElementById('imcard3')
div8.addEventListener('mouseleave',function(){
    document.getElementById('hcard3').style.scale='1';
    document.getElementById('hcard3').style.height='0px';
    document.getElementById('hcard3').style.background='none';
    document.getElementById('hcard3').innerHTML='';
    document.getElementById('hc3').innerHTML='';
})









const div9=document.getElementById('imcard4')
div9.addEventListener('mouseenter',function(){
    document.getElementById('hcard4').style.scale='1';
    document.getElementById('hcard4').style.height='250px';
    document.getElementById('hcard4').style.backgroundColor='rgba(155, 100, 75, 0.5)';
    document.getElementById('hcard4').innerHTML='Text to speech app';
    document.getElementById('hc4').innerHTML='More Details';

})
const div10=document.getElementById('imcard4')
div10.addEventListener('mouseleave',function(){
    document.getElementById('hcard4').style.scale='1';
    document.getElementById('hcard4').style.height='0px';
    document.getElementById('hcard4').style.background='none';
    document.getElementById('hcard4').innerHTML=''
    document.getElementById('hc4').innerHTML='';
})





const div11=document.getElementById('imcard5')
div11.addEventListener('mouseenter',function(){
    document.getElementById('hcard5').style.scale='1';
    document.getElementById('hcard5').style.height='250px';
    document.getElementById('hcard5').style.backgroundColor='rgba(155, 100, 75, 0.5)';
    document.getElementById('hcard5').innerHTML='Movies Site';
    document.getElementById('hc5').innerHTML='More Details';

})
const div12=document.getElementById('imcard5')
div12.addEventListener('mouseleave',function(){
    document.getElementById('hcard5').style.scale='1';
    document.getElementById('hcard5').style.height='0px';
    document.getElementById('hcard5').style.background='none';
    document.getElementById('hcard5').innerHTML='';
    document.getElementById('hc5').innerHTML='';

}) 







function imcardshov(){
    document.getElementById('imcard').style.scale='0.8';
    document.getElementById('imcard1').style.scale='0.8';
    document.getElementById('imcard2').style.scale='0.8';
    document.getElementById('imcard3').style.scale='0.8';
    document.getElementById('imcard4').style.scale='0.8';
    document.getElementById('imcard5').style.scale='0.8';
}






