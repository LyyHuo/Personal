(function(){var p=document.querySelector('.mid p');if(!p)return;var ws=[];
function split(n0){Array.prototype.slice.call(n0.childNodes).forEach(function(n){if(n.nodeType===3){var f=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(function(s){if(!s)return;if(/^\s+$/.test(s)){f.appendChild(document.createTextNode(s))}else{var w=document.createElement('span');w.className='w';w.textContent=s;f.appendChild(w);ws.push(w)}});n.parentNode.replaceChild(f,n)}else if(n.nodeType===1){split(n)}})}
split(p);
if(matchMedia('(prefers-reduced-motion: reduce)').matches){ws.forEach(function(w){w.style.opacity=1});return}
function u(){var r=p.getBoundingClientRect(),vh=innerHeight,s=vh*.88,e=vh*.42,pr=Math.max(0,Math.min(1,(s-r.top)/Math.max(1,(s-e)+r.height*.6))),n=ws.length;
ws.forEach(function(w,i){var k=Math.max(0,Math.min(1,pr*(n+3)-i));w.style.opacity=(.16+.84*k).toFixed(3)})}
addEventListener('scroll',u,{passive:true});addEventListener('resize',u);u()})();

(function(){var b=document.getElementById('up');if(!b)return;
function t(){b.classList.toggle('show',window.scrollY>500)}
addEventListener('scroll',t,{passive:true});t();
b.addEventListener('click',function(){var r=matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:0,behavior:r?'auto':'smooth'})})})();

(function(){var hero=document.querySelector('.hero'),c=hero.querySelector('canvas'),W=96,H=54,x=c.getContext('2d'),img=x.createImageData(W,H),t=0,mx=.5,my=.5,tx=.5,ty=.5,hv=0,hd=0,still=matchMedia('(prefers-reduced-motion: reduce)').matches;c.width=W;c.height=H;
function pos(e){var b=hero.getBoundingClientRect();tx=(e.clientX-b.left)/b.width;ty=(e.clientY-b.top)/b.height}
['pointerdown','pointerup','pointercancel','pointerleave'].forEach(function(n){hero.addEventListener(n,function(e){hd=n==='pointerdown'?1:0;c.classList.toggle('hold',!!hd);if(hd)pos(e)})});
hero.addEventListener('pointermove',pos);
function draw(){mx+=(tx-mx)*.06;my+=(ty-my)*.06;hv+=(hd-hv)*.08;t+=.02+hv*.03;
for(var j=0;j<H;j++)for(var i=0;i<W;i++){var u=i/W*6,v=j/H*4,d=Math.hypot(i/W-mx,(j/H-my)*.56);
var q=Math.sin(u+t)+Math.sin(v*1.3-t*1.2)+Math.sin((u+v)*.9+t*.7)+Math.sin(d*(14+hv*8)-t*2.4)*(1.4-Math.min(d*2,1.2))*(1+hv*2.2),a=q*.5,k=(j*W+i)*4;
img.data[k]=40+40*Math.sin(a);img.data[k+1]=110+80*Math.sin(a+2);img.data[k+2]=210+45*Math.sin(a+4);img.data[k+3]=255}
x.putImageData(img,0,0);if(!still)requestAnimationFrame(draw)}draw()})();
(function(){var lb=document.createElement('div');lb.id='lb';var li=document.createElement('img');lb.appendChild(li);document.body.appendChild(lb);
function cl(){lb.classList.remove('open')}lb.addEventListener('click',cl);document.addEventListener('keydown',function(e){if(e.key==='Escape')cl()});
document.querySelectorAll('.shot').forEach(function(s){function o(){li.src=s.querySelector('img').src;lb.classList.add('open')}
s.addEventListener('click',o);s.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();o()}})})})();
(function(){var d=document.documentElement,still=matchMedia('(prefers-reduced-motion: reduce)').matches;if(still||!('IntersectionObserver' in window))return;d.classList.add('js');
var map=[['.story .l','fl'],['.jr div','fr'],['.cell','fz'],['.car','nb'],['.pad h2',''],['.pad .tag',''],['.msg .tag',''],['.msg h3',''],['.mf > *',''],['footer','nb']];
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;io.unobserve(el);el.classList.add('in');setTimeout(function(){el.classList.remove('rv','in','fl','fr','fz','nb');el.style.transitionDelay=''},1500)})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
map.forEach(function(m){document.querySelectorAll(m[0]).forEach(function(el){if(el.classList.contains('rv'))return;var n=Array.prototype.indexOf.call(el.parentNode.children,el);el.style.transitionDelay=Math.min(n,6)*90+'ms';el.classList.add('rv');if(m[1])el.classList.add(m[1]);io.observe(el)})});
var p=document.createElement('div');p.id='prog';document.body.appendChild(p);
var hero=document.getElementById('top'),beam=document.querySelector('.beam'),tile=document.querySelector('.tile'),tick=false;
function cl(v){return Math.max(0,Math.min(1,v))}
function fx(){tick=false;var y=scrollY,vh=innerHeight,h=d.scrollHeight-vh;p.style.transform='scaleX('+(h>0?cl(y/h):0)+')';
if(hero&&y<vh*1.4){var r=cl(y/Math.max(1,hero.offsetHeight));hero.style.setProperty('--hy',(y*.3).toFixed(1)+'px');hero.style.setProperty('--ho',(1-r*1.2<0?0:1-r*1.2).toFixed(3));hero.style.setProperty('--py',(y*.14).toFixed(1)+'px');hero.style.setProperty('--gy',(y*.08).toFixed(1)+'px')}
if(beam){beam.style.setProperty('--bp',cl((vh*.95-beam.getBoundingClientRect().top)/(vh*.5)).toFixed(3))}
if(tile){tile.style.setProperty('--tp',cl((vh*.98-tile.getBoundingClientRect().top)/(vh*.55)).toFixed(3))}}
function rq(){if(!tick){tick=true;requestAnimationFrame(fx)}}
addEventListener('scroll',rq,{passive:true});addEventListener('resize',rq);fx()})();
(function(){var n=document.getElementById('mn'),m=document.getElementById('mm'),b=document.getElementById('ms'),h=document.getElementById('mh');if(!n||!m||!b)return;
function txt(){var a=n.value.trim(),c=m.value.trim();return a&&c?'Hi Huo, it’s '+a+'. '+c:''}
function upd(){var t=txt();if(t){b.href='https://t.me/Ly_Huo?text='+encodeURIComponent(t);b.target='_blank';b.removeAttribute('aria-disabled');h.className='';h.textContent='Opens Telegram with your message ready to send.'}else{b.href='#message';b.removeAttribute('target');b.setAttribute('aria-disabled','true')}}
n.addEventListener('input',upd);m.addEventListener('input',upd);upd();
b.addEventListener('click',function(e){if(!txt()){e.preventDefault();h.className='err';var a=!n.value.trim();h.textContent=a?'Please enter your name first.':'Please write a message first.';(a?n:m).focus()}});})();
(function(){var t=document.getElementById('trk');if(!t)return;var cs=[].slice.call(t.children),dots=document.getElementById('dots'),red=matchMedia('(prefers-reduced-motion: reduce)').matches,cur=0,last=0,vis=false;
function go(i){i=(i+cs.length)%cs.length;var c=cs[i];t.scrollTo({left:c.offsetLeft-(t.clientWidth-c.offsetWidth)/2,behavior:red?'auto':'smooth'})}
cs.forEach(function(c,i){var d=document.createElement('button');d.type='button';d.setAttribute('aria-label','Photo '+(i+1));d.addEventListener('click',function(){last=Date.now();go(i)});dots.appendChild(d)});
function upd(){var m=t.scrollLeft+t.clientWidth/2,b=0,bd=1e9;cs.forEach(function(c,i){var d=Math.abs(c.offsetLeft+c.offsetWidth/2-m);if(d<bd){bd=d;b=i}});cur=b;cs.forEach(function(c,i){c.classList.toggle('on',i===b)});[].forEach.call(dots.children,function(d,i){d.classList.toggle('on',i===b)})}
t.addEventListener('scroll',function(){requestAnimationFrame(upd)},{passive:true});addEventListener('resize',upd);upd();
document.getElementById('cprev').addEventListener('click',function(){last=Date.now();go(cur-1)});
document.getElementById('cnext').addEventListener('click',function(){last=Date.now();go(cur+1)});
t.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();last=Date.now();go(cur+1)}else if(e.key==='ArrowLeft'){e.preventDefault();last=Date.now();go(cur-1)}});
['pointerdown','wheel','touchstart','focusin'].forEach(function(n){t.addEventListener(n,function(){last=Date.now()},{passive:true})});
if('IntersectionObserver' in window){new IntersectionObserver(function(e){vis=e[0].isIntersecting},{threshold:.4}).observe(t)}
if(!red)setInterval(function(){if(vis&&Date.now()-last>5000&&!document.hidden)go(cur+1)},3800);
})();
(function(){var s=document.getElementById('sd');if(!s)return;function t(){s.classList.toggle('gone',scrollY>80)}addEventListener('scroll',t,{passive:true});t()})();
(function(){var c=document.getElementById('wx');if(!c)return;var sp=c.querySelector('span'),id='HUO-8868',tm;
function fb(){var t=document.createElement('textarea');t.value=id;t.setAttribute('readonly','');t.style.cssText='position:fixed;opacity:0;top:0;left:0';document.body.appendChild(t);t.select();var ok=false;try{ok=document.execCommand('copy')}catch(e){}document.body.removeChild(t);return ok}
function say(m){sp.textContent=m;clearTimeout(tm);tm=setTimeout(function(){sp.textContent=id},2000)}
c.addEventListener('click',function(e){e.preventDefault();if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(id).then(function(){say('Copied!')},function(){say(fb()?'Copied!':id)})}else{say(fb()?'Copied!':id)}});
c.addEventListener('keydown',function(e){if(e.key===' '){e.preventDefault();c.click()}})})();
