function upperFirst(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function read_json() {
            $.getJSON("jugadors2.json", function(dades) {
                $.each(dades["results"], function(idx,jugador) {
					
                    //Definim variables
                    var diners = jugador["diners"];
					var nom = jugador["jugador"]["text"];
                    var href = jugador["jugador"]["href"];
                    
                    //Tractem les dades
                    if (href != "") 
                    {
						if ((href.indexOf('equipos/') > 0) && (diners.indexOf('millones') > 0))
						{
							diners = diners.replace("millones", "million");
							href = href.split("equipos/");

							var href2 = href[1].split("/");
							var equip = href2[0];
							var team = upperFirst(equip.toLowerCase());
														
						
							if($('#mySelectplayer').val() == "0")
							{
								$('#mySelectplayer').append($("<option/>", {
									value: nom,
									text: nom
								}));
							}
							else
							{
								if (nom == $('#mySelectplayer').val())
								{ 
									$('#player_data').removeClass("hide");
									$('#euros').html(diners);
									$('#team').html(team);
									var firstName = nom.split(" ");
									$('#image').html("<img src='http://estaticos04.marca.com/deporte/futbol/primera-division/mercado-fichajes/"+equip+"/img/"+firstName[0].toLowerCase()+"50x50.jpg'>");
									
								}
							}		
						}
					}
                });
            });
            
            
            
            
            $.getJSON("paisos.json", function(dades) {
                $.each(dades["collection1"], function(idx,pais) {
					var nom_pais = pais["pais"];
                    var euros_rebuts = pais["euros_rebuts"];
                    
                    if($('#mySelectcountry').val() == "0")
					{
						$('#mySelectcountry').append($("<option/>", {
							value: nom_pais,
							text: nom_pais
						}));
					}
					else
					{
						if (nom_pais == $('#mySelectcountry').val())
						{ 
							$('#country_data').removeClass("hide");
							$('#country').html(nom_pais);
							$('#received').html(euros_rebuts);
						}
					}
                    
                    
                });
            });
            
            
            
        }
        
