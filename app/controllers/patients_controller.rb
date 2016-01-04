class PatientsController < ApplicationController

  def index

  end

  def new
    render :layout => "touch"
  end

  def create
    @patient = Patient.new(patient_params)

    @patient.birthdate = @patient.format_birthdate(params[:patient][:birthdate])
    @patient.birthdate_estimated = params[:patient][:birthdate].include? "?"

    if @patient.save
      print_and_redirect("/print_barcode?patient_id=#{@patient.id}", "/patients/#{@patient.id}")
    else
      render "new", :layout => "touch"
    end
  end

  def edit
    @patient = Patient.find(params[:id])
    @targeturl = "/patients/#{params[:id]}"
    render :layout => "touch"
  end

  def show
    @patient = Patient.find(params[:id])
    if @patient.blank?
      flash[:message] = "Patient Not Found"
      redirect_to root_path
    end
  end

  def update_patient
    @patient = Patient.find(params[:id])

    case params[:section]

      when 'name'
        @patient.update_attributes(:first_name => params[:patient][:first_name],:middle_name => params[:patient][:middle_name],
                                   :fathers_name => params[:patient][:fathers_name], :mothers_name => params[:patient][:mothers_name])
      when 'gender'
        @patient.update_attributes(:gender => params[:patient][:gender])

      when 'national_id'
        @patient.update_attributes(:national_id => params[:patient][:national_id])
      when 'birthdate'
        @patient.birthdate = @patient.format_birthdate(params[:patient][:birthdate])
        @patient.birthdate_estimated = params[:patient][:birthdate].include? "?"
        @patient.save
      when 'marital_status'
        @patient.update_attributes(:marital_status => params[:patient][:marital_status])
      when 'place_of_birth'
        @patient.update_attributes(:region_of_birth => params[:patient][:region_of_birth],
                                   :province_of_birth => params[:patient][:province_of_birth])
      when 'current_residence'
        @patient.update_attributes(:province_of_residence => params[:patient][:province_of_residence],
                                   :region_of_residence => params[:patient][:region_of_residence],
                                   :barrio_of_residence => params[:patient][:barrio_of_residence])
      when 'occupation'
        @patient.update_attributes(:occupation => params[:patient][:occupation])
    end

    redirect_to @patient
  end

  def destroy

  end

  def first_names

    data = Patient.get_similar_first_names(params["search"])

    if data.present?
      render :text => data.collect(&:first_name).uniq.join("\n")
    else
      render :text => ""
    end
  end

  def last_names
    data = Patient.get_similar_last_names(params["search"])

    if data.present?
      render :text => (data.collect(&:fathers_name) + data.collect(&:mothers_name)).uniq.join("\n")
    else
      render :text => ""
    end
  end


  def region
    data = JSON.parse(File.open("#{Rails.root}/app/assets/data/locations.json").read).keys.sort rescue []
    data << ["Unknown"]
    render :text => data.join("\n")
  end

  def province
    data = JSON.parse(File.open("#{Rails.root}/app/assets/data/locations.json").read)[params[:region].strip].keys.sort rescue []
    data << ["Unknown"]
    render :text => data.join("\n")
  end

  def barrios
    data = JSON.parse(File.open("#{Rails.root}/app/assets/data/locations.json").read)[params[:region].strip][params[:province].strip].sort rescue []
    data << ["Unknown"]
    render :text => data.join("\n")
  end

  def print_patient_barcode
    @patient = Patient.find(params[:patient_id])
    print_string = @patient.create_label
    send_data(print_string,:type=>"application/label; charset=utf-8", :stream=> false, :filename=>"#{params[:patient_id]}#{rand(10000)}.lbl", :disposition => "inline")
  end

  def find_by_npid

    if params[:identifier].length == 7
      @patient = Patient.find_by_patient_identifier(params[:identifier])
    else
      @patient = Patient.find_by_national_id(params[:identifier])
    end

    if @patient.blank?
      flash[:message] = "Patient Not Found"
      redirect_to root_path
    else
      redirect_to @patient
    end

  end

  def find_by_name
    render :layout => "touch"
  end

  def summary

    @day_total = Patient.where("DATE(created_at) = ?", Date.today).length
    @day_user = Patient.where("DATE(created_at) = ? AND creator = ?", Date.today, User.current.id).length
    @month_total = Patient.where("DATE(created_at) BETWEEN ? AND ?", Date.today.beginning_of_month,Date.today.end_of_month).length
    @month_user= Patient.where("DATE(created_at) BETWEEN ? AND ? AND creator = ?", Date.today.beginning_of_month,Date.today.end_of_month, User.current.id).length
    @year_total= Patient.where("DATE(created_at) BETWEEN ? AND ?", Date.today.beginning_of_year,Date.today.end_of_year).length
    @year_user= Patient.where("DATE(created_at) BETWEEN ? AND ? AND creator = ?", Date.today.beginning_of_year, Date.today.end_of_year, User.current.id).length
    @total = Patient.all.length
    @total_user = Patient.where("creator = ?", User.current.id).length
  end

  def demographics
    @patient = Patient.find(params[:id])
  end

  def search_results
    @patients = Patient.where("fname_namecode = ? AND (mname_namecode = ? OR fathers_name_namecode = ? OR mothers_name_namecode = ?)",
                              params[:patient][:first_name].soundex,params[:patient][:middle_name].soundex,
                              params[:patient][:fathers_name].soundex, params[:patient][:mothers_name].soundex)

    @targeturl = "/"
    render :layout => "touch"
  end

  private
  def patient_params
    params.require(:patient).permit(:first_name, :middle_name,:fathers_name, :mothers_name, :birthdate, :gender,
                                    :occupation, :national_id, :marital_status,:region_of_birth,
                                    :province_of_birth,:region_of_residence,:province_of_residence,:barrio_of_residence)
  end
end
