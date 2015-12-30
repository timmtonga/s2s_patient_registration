class PatientsController < ApplicationController

  def index

  end

  def new

    @section = "Patient Regsitration"

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

  end

  def show
    @patient = Patient.find(params[:id])
    if @patient.blank?
      flash[:message] = "Patient Not Found"
      redirect_to root_path
    end
  end

  def update

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
      render :text => data.collect(&:fathers_name).uniq.join("\n") + data.collect(&:mothers_name).uniq.join("\n")
    else
      render :text => ""
    end
  end


  def region
    data = JSON.parse(File.open("#{Rails.root}/app/assets/data/locations.json").read).keys.sort rescue []
    data << ["Other"]
    render :text => data.join("\n")
  end

  def province
    data = JSON.parse(File.open("#{Rails.root}/app/assets/data/locations.json").read)[params[:region].strip].keys.sort rescue []
    data << ["Other"]
    render :text => data.join("\n")
  end

  def barrios
    data = JSON.parse(File.open("#{Rails.root}/app/assets/data/locations.json").read)[params[:region].strip][params[:province].strip].sort rescue []
    data << ["Other"]
    render :text => data.join("\n")
  end

  def print_patient_barcode
    @patient = Patient.find(params[:patient_id])
    print_string = @patient.create_label
    send_data(print_string,:type=>"application/label; charset=utf-8", :stream=> false, :filename=>"#{params[:patient_id]}#{rand(10000)}.lbl", :disposition => "inline")
  end

  def find_by_npid
    @patient = Patient.find_by_patient_identifier(params[:identifier])
    if @patient.blank?
      flash[:message] = "Patient Not Found"
      redirect_to root_path
    else
      redirect_to @patient
    end

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

  private
  def patient_params
    params.require(:patient).permit(:first_name, :middle_name,:fathers_name, :mothers_name, :birthdate, :gender,
                                    :occupation, :social_security_number, :marital_status,:region_of_birth,
                                    :province_of_birth,:region_of_residence,:province_of_residence,:barrio_of_residence)
  end
end
