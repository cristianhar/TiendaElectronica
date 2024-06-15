const efectoScroll = () => {
  if(scrollY>0){
    nav2.style.position="fixed";
  }else{
    nav2.style.position = "static";
  }
}
const verifyVisibility1 = (entradas) => {
  //Verificar visibilidad
  const entrada = entradas[0];
  // console.log(entrada.isIntersecting); //Propiedades de entrada, si es intersectada devuelve true, si no false
  if (entrada.isIntersecting) {
    cuadro.style.position = "fixed";
  } else {
    cuadro.style.position = "static";
  }
};
const verifyVisibility2 = (entradas) => {
  const entrada = entradas[0];
  if (entrada.isIntersecting) {
    take.style.position = "fixed";
  } else {
    take.style.position = "static";
  }
};


const nav2 = document.getElementById("nav2");
const img1 = document.getElementById("img1");
const cuadro = document.getElementById("cuadroX2");
const take = document.getElementById("takeContent");

const observar1 = new IntersectionObserver(verifyVisibility1);
const observar2 = new IntersectionObserver(verifyVisibility2);

observar1.observe(img1); //objeto en observacion
observar2.observe(cuadro);

window.addEventListener("scroll",efectoScroll)