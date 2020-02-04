window.onload=function(){
	iniciar();
}

function iniciar(){
    $('.titulo').append(
        $('<h1>',{
            'text': 'Sorteo FIFA ',
            'data-aos': 'fade-left'
        }).append(
            $('<i>',{
                'class': 'fab fa-playstation fa-1x'
            }),
            $('<span>',{
                'text': ' <v.1.0>'
            })
        ));
}

function volver(){

    $('.row-1').empty();
    $('.row-2').empty();
    $('.row-3').empty();
    $('.row-4').empty();
    $('.row-5').empty();
    $('.row-1').removeClass('justify-content-between').addClass('justify-content-center');
    $('.row-2').removeClass('justify-content-between').addClass('justify-content-center');

    $('.row-1').append(
        $('<div>',{
            'class': 'col-3',
            'data-aos': 'fade-up',
        }).append(
            $('<div>',{
                'class': 'form-group'
            }).append(
                $('<label>',{
                    'text': 'Número de Jugadores'
                }),
                $('<input>',{
                    'id': 'jugadores',
                    'class': 'form-control',
                    'type': 'number',
                    'placeholder': 'número de jugadores'
                })
            ),
            $('<div>',{
                'class': 'form-group'
            }).append(
                $('<label>',{
                    'text': 'Formato'
                }),
                $('<select>',{
                    'id': 'formato',
                    'class': 'form-control'
                }).append(
                    $('<option>',{
                        'value': '8',
                        'text': 'Octavos de final'
                    }),
                    $('<option>',{
                        'value': '4',
                        'text': 'Cuartos de final'
                    })
                )
            )
        )
    );

    $('.row-2').append(
        $('<div>',{
            'class': 'col-3',
            'data-aos': 'fade-up',
        }).append(
            $('<button>',{
                'class': 'btn btn-secondary form-control',
                'onclick': 'datos()',
                'text': 'Siguiente'
            })
        )
    );
}

function datos(){
    var jugadores=parseInt(document.getElementById('jugadores').value);
    
    if (jugadores > 3 && jugadores <= 8) {

        $('.row-1').empty();
        $('.row-2').empty();
        
        for (var i = 0; i < jugadores ; i++) {

            $('.row-1').append(
                $('<div>',{
                    'class': 'col-2 m-2',
                    'data-aos': 'fade-up'
                }).append(
                    $('<label>',{
                        'text': 'Jugador:'
                    }),
                    $('<input>',{
                        'type': 'text',
                        'class': 'form-control',
                        'placeholder': 'Nombre',
                        'id': 'jugador'+(i+1)
                    }),
                    $('<label>',{
                        'text': 'Equipos:'
                    }),
                    $('<select>',{
                        'class': 'form-control',
                        'id': 'numEquipos'+(i+1)
                    }).append(
                        $('<option>',{
                            'text': '1'
                        }),
                        $('<option>',{
                            'text': '2'
                        })
                    )
                )
            );
            
        }

        $('.row-2').append(
            $('<div>',{
                'class': 'col-2 m-2',
                'data-aos': 'fade-up'
            }).append(
                $('<button>',{
                    'text': 'Volver',
                    'class': 'btn btn-danger form-control',
                    'onclick': 'volver()'
                })
                
            ),
            $('<div>',{
                'class': 'col-2 m-2',
                'data-aos': 'fade-up'
            }).append(
                $('<button>',{
                    'text': 'Siguiente',
                    'class': 'btn btn-success form-control',
                    'onclick': 'sortear('+jugadores+')'
                })
            )    
        );

    }else{
    
        alert("Minimo 4 y maximo 8 jugadores.");
    
    }
}

function sortear(jugadores) {
    
    var cont=0;
    
    for (var i = 0; i < jugadores ; i++) {
        cont+=parseInt(document.getElementById('numEquipos'+(i+1)).value);
    }

    if(cont!=8){
        alert("Son 8 equipos para los "+jugadores+" jugadores");
    }else{
        
        //----------sorteo-------------//

        var num=0;
        var leftKey = new Array(4);
        var rightKey = new Array(4);        

        for (var i = 0; i < jugadores ; i++) {
            
            if(document.getElementById('numEquipos'+(i+1)).value == 2){
                
                do{
                    num=Math.round(Math.random()*(3-0)+0);
                }while(leftKey[num]!=null);

                leftKey[num]=document.getElementById('jugador'+(i+1)).value;
            
                do{
                    num=Math.round(Math.random()*(3-0)+0);
                }while(rightKey[num]!=null);

                rightKey[num]=document.getElementById('jugador'+(i+1)).value;
            }
        }
        
        for (var i = 0; i < jugadores ; i++) {
            
            if(document.getElementById('numEquipos'+(i+1)).value == 1){
                
                do{
                    num=Math.round(Math.random()*(7-0)+0);
                    
                    if(num>=0 && num<4 && leftKey[num]==null){
                        leftKey[num]=document.getElementById('jugador'+(i+1)).value;
                        num=-1;
                    }
                    if(num>=4 && num<=7 && rightKey[num-4]==null){
                        rightKey[num-4]=document.getElementById('jugador'+(i+1)).value;
                        num=-1;
                    }
                }while(num!=-1);

            }
        }

        $('.row-1').empty();
        $('.row-2').empty();

        $('.row-1').append(
            $('<div>',{
                'class': 'col-2',
                'data-aos': 'fade-right'
            }).append(
                $('<h4>',{
                    'class': 'equipo',
                    'text': leftKey[0].toUpperCase()
                })
            ),
            $('<div>',{
                'class': 'col-2',
                'data-aos': 'fade-left'
            }).append(
                $('<h4>',{
                    'class': 'equipo',
                    'text': rightKey[0].toUpperCase()
                })
            )
        );
        
        $('.row-2').append(
            $('<div>',{
                'class': 'col-2 quarter',
                'data-aos': 'fade-right'
            }).append(
                $('<h4>',{
                    'class': 'equipo',
                    'text': leftKey[1].toUpperCase()
                })
            ),
            $('<div>',{
                'class': 'col-2',
                'data-aos': 'fade-right'
            }).append(
                $('<input>',{
                    'class': 'equipo',
                    'text': '-'
                })
            ),
            $('<div>',{
                'class': 'col-2 final',
                'data-aos': 'fade-down'
            }).append(
                $('<input>',{
                    'class': 'equipo',
                    'text': '-'
                })
            ),
            $('<div>',{
                'class': 'col-2 final',
                'data-aos': 'fade-up'
            }).append(
                $('<input>',{
                    'class': 'equipo',
                    'text': '-'
                })
            ),
            $('<div>',{
                'class': 'col-2',
                'data-aos': 'fade-left'
            }).append(
                $('<input>',{
                    'class': 'equipo',
                    'text': '-'
                })
            ),
            $('<div>',{
                'class': 'col-2 quarter',
                'data-aos': 'fade-left'
            }).append(
                $('<h4>',{
                    'class': 'equipo',
                    'text': rightKey[1].toUpperCase()
                })
            )
        );

        $('.row-3').append(
            $('<div>',{
                'class': 'col-2',
                'data-aos': 'fade-right'
            }).append(
                $('<h4>',{
                    'class': 'equipo',
                    'text': leftKey[2].toUpperCase()
                })
            ),
            $('<div>',{
                'class': 'col-2 quarter',
                'data-aos': 'fade-right'
            }).append(
                $('<input>',{
                    'class': 'equipo',
                    'text': '-'
                })
            ),
            $('<div>',{
                'class': 'col-2 hid',
                'data-aos': 'fade-left'
            }).append(
                $('<input>',{
                    'class': 'equipo',
                    'text': '-'
                })
            ),
            $('<div>',{
                'class': 'col-2 hid',
                'data-aos': 'fade-left'
            }).append(
                $('<input>',{
                    'class': 'equipo',
                    'text': '-'
                })
            ),
            $('<div>',{
                'class': 'col-2 quarter',
                'data-aos': 'fade-left'
            }).append(
                $('<input>',{
                    'class': 'equipo',
                    'text': '-'
                })
            ),
            $('<div>',{
                'class': 'col-2',
                'data-aos': 'fade-left'
            }).append(
                $('<h4>',{
                    'class': 'equipo',
                    'text': rightKey[2].toUpperCase()
                })
            )
        );

        $('.row-4').append(
            $('<div>',{
                'class': 'col-2',
                'data-aos': 'fade-right'
            }).append(
                $('<h4>',{
                    'class': 'equipo',
                    'text': leftKey[3].toUpperCase()
                })
            ),
            $('<div>',{
                'class': 'col-2',
                'data-aos': 'fade-left'
            }).append(
                $('<h4>',{
                    'class': 'equipo',
                    'text': rightKey[3].toUpperCase()
                })
            )
        );
        
        $('.row-5').append(
            $('<div>',{
                'class': 'col-2',
                'data-aos': 'fade-down'
            }).append(
                $('<button>',{
                    'class': 'form-control btn btn-dark',
                    'onclick': 'volver()'
                }).append(
                    $('<i>',{
                        'class': 'fas fa-power-off fa-1x'
                    })
                )
            )
        );
        
        $('.row-1').removeClass('justify-content-center').addClass('justify-content-between');
        $('.row-2').removeClass('justify-content-center').addClass('justify-content-between');
        $('.row-3').removeClass('justify-content-center').addClass('justify-content-between');
        $('.row-4').removeClass('justify-content-center').addClass('justify-content-between');
    }
}










