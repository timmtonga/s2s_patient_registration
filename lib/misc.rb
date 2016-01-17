module Misc

  def getLocalizedAbbvMonth(month)
    monthNames = {
        "Jan"=> 1,
        "Ene"=> 1,
        "Feb"=> 2,
        "Mar"=> 3,
        "Apr"=> 4,
        "Abr"=> 4,
        "May"=> 5,
        "Jun"=> 6,
        "Jul"=> 7,
        "Aug"=> 8,
        "Ago"=> 8,
        "Sep"=> 9,
        "Oct"=> 10,
        "Nov"=> 11,
        "Dec"=> 12,
        "Dic"=> 12
    }

    return monthNames[month] rescue 0
  end

  def getLocalizedMonth(month)
    monthNames = {
        "January" => 1 ,
        "February"=> 2 ,
        "March"=> 3 ,
        "April"=> 4 ,
        "May"=> 5 ,
        "June"=> 6 ,
        "July"=> 7 ,
        "August"=> 8 ,
        "September"=> 9 ,
        "October"=> 10 ,
        "November"=> 11,
        "December"=> 12,
        "Enero"=> 1,
        "Febrero"=> 2,
        "Marzo"=> 3,
        "Abril"=> 4,
        "Mayo"=> 5,
        "Junio"=> 6,
        "Julio"=> 7,
        "Agosto"=> 8,
        "Septiembre"=> 9,
        "Octubre"=> 10,
        "Noviembre"=> 11,
        "Diciembre"=> 12
    }

    return monthNames[month] rescue 0
  end
end
