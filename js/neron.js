var actual = 0;
			function mino(n){
				var ptn = document.getElementsByClassName("tauro");
				for(i = 0; i<ptn.length; i++){
					if(ptn[i].className.includes("activo")){
						ptn[i].className = ptn[i].className.replace("activo", "");
						break;
					}     
				}
				ptn[n].className += " activo";
			}
			function mostrar(n){
				var css = document.getElementsByClassName("clio");
				for(i = 0; i< css.length; i++){//tamaño del array//
					if(css[i].className.includes("actual")){//si contiene la palabra actual//
						css[i].className = css[i].className.replace("actual", "");
						break;
					}
				}
				actual = n;
				css[n].className += " actual";
				mino(n);
			}
			
			function anterior(){
				actual--;
				if(actual < 0){
					actual = 6;
				}
				mostrar(actual);
			}
			
			function siguiente(){
				actual++;
				if(actual > 6){
					actual = 0;
				}
				mostrar(actual);
			}
			
			
			var velocidad = 3100;
			var play = setInterval("siguiente()", velocidad);

			
			//SLIDER//
			
			$(document).ready(function(){				   	
			$('.slider')._TMS({
				show:0,
				pauseOnHover:true,
				prevBu:'.prev',
				nextBu:'.next',
				playBu:false,
				duration:10000,
				preset:'zoomer',
				pagination:true,
				pagNums:false,
				slideshow:7000,
				numStatus:false,
				banners:false,
				waitBannerAnimation:false,
				progressBar:false
			})
		});