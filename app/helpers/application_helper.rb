module ApplicationHelper

  def marital_status_options
    options = [['', ''], ['Single', 'single'],['Cohabiting','cohabiting'],['Married', 'married'],["Windowed", "widowed"],
               ['Seperated', 'seperated'],["Divorced", "divorced"] ]

    return options
  end

  def occupation_options
    options = [['',''],["Contador/Contable","contador/contable"],["Administrador","administrador"],["Artista","artista"],
               ["Pandero", "panadero"],["Barbero","barbero"],["Masero", "mesero"],["Esteticista","esteticista"],
               ["Hombre/Mujer de negocios, Empresario","hombre/mujer de negocios, empresario"],
               ["Carnicero","carnicero"],["Carpintero","carpintero"],["Oficinista","oficinista"],
               ["Dependiente","dependiente"],["Cocinero","cocinero"],["Conductor","conductor"],["Electricista","electricista"],
               ["Ingeniero","ingeniero"],["Granjero","granjero"],["Bombero","bombero"],["Florista","florista"],
               ["Guardia","guardia"],["Hotelero","hotelero"],["Cartero","cartero"],["Mecánico""mecánico"],
               ["Comadrona","comadrona"],["Pastor","pastor"],["Músico","músico"],["Enfermero","enfermero"],
               ["Pintor","pintor"],["Vendedor","vendedor"],["Secretario","secretario"],["Criado","criado"],
               ["Asistente social","asistente social"],["Estudiante","estudiante"],["Maestro","maestro"],
               ["Mesero","mesero"]]
     return options.sort
  end

  def roles
    options = [['',''], [t('forms.options.clerk'),'clerk'],[t('forms.options.administrator'),'administrator']]
  end
end
