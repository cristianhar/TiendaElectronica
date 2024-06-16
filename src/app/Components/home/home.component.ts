import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagenes:string = "https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg?auto=compress&cs=tinysrgb&w=600";
  numero:number = 1

  incrementar (){
    this.numero += 1
    if(this.numero == 11){
      this.numero = 1;
      }
    this.Imagenes()
    }
    decrementar (){
      this.numero --
      if (this.numero == 0){
        this.numero = 10;
      };
    this.Imagenes()
    }
    
    Imagenes (){
      if (this.numero==1){
        this.imagenes = "https://www.solbyte.com/blog/wp-content/uploads/tienda-online-1.jpg"
      }
      if (this.numero==2){
        this.imagenes = "https://gulupadigital.com/wp-content/uploads/elementor/thumbs/fondo-banner-tienda-virtual-1-q4v8tju0dwd1gqeecwrh4spuxsv95xxlhqbqs1tf1m.png"
      }
      if (this.numero==3){
        this.imagenes = "https://miro.medium.com/v2/resize:fit:1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg"
      }
      if (this.numero==4){
        this.imagenes = "https://8117711.fs1.hubspotusercontent-na1.net/hub/8117711/hubfs/custom-video-thumbnails/15-thumb.jpeg?length=1920"
      }
      if (this.numero==5){
        this.imagenes = "https://www.wradio.com.co/resizer/v2/BMUFVBCMYFDVNPN5XO5UGSD3BY.jpg?auth=97c18b329fd672e4c8646f83af4e10fe349e96c586bdd3a84c2259b6355c034e&width=650&height=488&quality=70&smart=true"
      }
      if (this.numero==6){
        this.imagenes = "https://phantom-elmundo.unidadeditorial.es/8840c055308123e53a75acc608a571bd/crop/135x68/1095x708/f/jpg/assets/multimedia/imagenes/2023/09/19/16951200748372.jpg"
      }
      if (this.numero==7){
        this.imagenes = "https://www.portafolio.co/files/article_content/uploads/2023/10/06/6520247fb5aa5.jpeg"
      }
      if (this.numero==8){
        this.imagenes = "https://latecla-repos-dw6.aplinews.com/archivos/noticias/fotografias/148725_3.jpg"
      }
      if (this.numero==9){
        this.imagenes = "https://www.dondeir.com/wp-content/uploads/2022/10/nuevos-lanzamientos-apple-.jpg"
      }
      if (this.numero==10){
        this.imagenes = "https://i0.wp.com/mediatrend.mediamarkt.com.tr/wp-content/uploads/2021/04/apple-tv-4k-ve-ipad-pro-ile-ilgili-yeni-gelisme.jpg?fit=1280%2C720&ssl=1"
      }

    }
}

