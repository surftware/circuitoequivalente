var pi
pi=Math.PI

function freal(mod,cis){ 
 ang=cis*(pi/180)
 coseno=Math.cos(ang)
 real=mod*coseno
 
 return real
}

function fimaginario(mod,cis){    
 ang=cis*(pi/180)
 seno=Math.sin(ang) 
 imaginario=mod*seno 
 return imaginario
}

function imprimeComplex(real,imaginario){ 
 alert(real.toFixed(3)+" + "+imaginario.toFixed(3)+"j")
}

function fmodulo(re,im){
 mod=Math.sqrt(Math.pow(re,2)+Math.pow(im,2))
 return mod
}

function fangulo(re,im){ 
 angulo=Math.atan(im/re)*(180/pi)
 return angulo
}

function imprimePol(mod,ang){ 
 alert(mod.toFixed(3)+" ʟ "+ang.toFixed(3)+"°")
}


function fRc(voc,ioc,poc){

 modYe=ioc/voc
 teta=-1*-1*Math.acos(poc/(voc*ioc))*(180/pi)//debe convertirse a grad pues la funcion lo convierte en rad 
 modZe=1/modYe
 
 rc=real(modZe,teta)
 
 return rc

}

function fjXm(voc,ioc,poc){
 
 modYe=ioc/voc
 teta=-1*-1*Math.acos(poc/(voc*ioc))*(180/pi)//debe convertirse a grad pues la funcion lo convierte en rad 
 modZe=1/modYe
 
 jxm=imaginario(modZe,teta)
 
 return jxm
}

function fReq(vsc,isc,psc){

 modZeq=vsc/isc
 angZeq=Math.acos(psc/(vsc*isc))*(180/pi)
 
 req=real(modZeq,angZeq)
 
 return req 
}


function fjXeq(vsc,isc,psc){

 modZeq=vsc/isc
 angZeq=Math.acos(psc/(vsc*isc))*(180/pi)
 
 jxeq=imaginario(modZeq,angZeq)
 
 return jxeq


}
