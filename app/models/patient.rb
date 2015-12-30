class Patient < ActiveRecord::Base


  validates :first_name, presence: true
  validates :fathers_name, presence: true
  validates :mothers_name, presence: true
  validates :gender, presence: true
  validates :birthdate, presence: true

  belongs_to :user, :foreign_key => :creator
  before_save :complete_record

  def fullname
    self.first_name + " " +self.middle_name + " " + self.fathers_name + " " +self.mothers_name
  end

  def first_names
    self.first_name + " " +self.middle_name
  end

  def last_names
    self.fathers_name + " " +self.mothers_name
  end

  def age
    return (Date.today.year - self.birthdate.year).to_i rescue "Unknown"
  end

  def formatted_pnid
    id = self.patient_identifier
    return (id.blank? ? " " : (id[0..3] + "-" + id[4..6]))
  end

  def ssn
    (self.social_security_number.blank? ? "N/A" : ((self.social_security_number == "N/A") ? "N/A" : self.formatted_ssn ))
  end

  def formatted_ssn
    return self.social_security_number[0..2] + "-" + self.social_security_number[3..5]+ "-" + self.social_security_number[6..8]
  end

  def format_birthdate(birthdate)

    date_param = birthdate.split("/")
    day = date_param.first
    month = date_param.second
    year = date_param.third

    # Handle months by name or number (split this out to a date method)
    month_i = (month || 0).to_i
    month_i = Date::MONTHNAMES.index(month) if month_i == 0 || month_i.blank?
    month_i = Date::ABBR_MONTHNAMES.index(month) if month_i == 0 || month_i.blank?

    if month_i == 0 || month == "?"
      birthdate = Date.new(year.to_i,7,1)
    elsif day.blank? || day == "?" || day == 0
      birthdate = Date.new(year.to_i,month_i,15)
    else
      birthdate = Date.new(year.to_i,month_i,day.to_i)
    end

    return birthdate.strftime('%d/%b/%Y')

  end

  def birthdate_formatted
    if self.birthdate_estimated==1
      if self.birthdate.blank?
        "??/??/??"
      elsif self.birthdate.day == 1 and self.birthdate.month == 7
        self.birthdate.strftime("??/???/%Y")
      elsif self.birthdate.day == 15
        self.birthdate.strftime("??/%b/%Y")
      else
        self.birthdate.strftime("%d/%b/%Y")
      end
    else
      self.birthdate.strftime("%d/%b/%Y")
    end
  end

  def self.get_similar_first_names(search_term)
    Patient.where("fname_namecode like ?", "#{search_term.soundex}%")
  end

  def self.get_similar_last_names(search_term)
    Patient.where("fathers_name_namecode LIKE ? OR mothers_name_namecode LIKE ?", "#{search_term.soundex}%","#{search_term.soundex}%")
  end

  def calculate_check_digit(number)
    # This is Luhn's algorithm for checksums
    # http://en.wikipedia.org/wiki/Luhn_algorithm
    # Same algorithm used by PIH (except they allow characters)
    number = number.to_s
    number = number.split(//).collect { |digit| digit.to_i }
    parity = number.length % 2

    sum = 0
    number.each_with_index do |digit,index|
      luhn_transform = ((index + 1) % 2 == parity ? (digit * 2) : digit)
      luhn_transform = luhn_transform - 9 if luhn_transform > 9
      sum += luhn_transform
    end

    checkdigit = (sum * 9 )%10
    return checkdigit
  end

  def create_label

    sex =  self.gender.match(/F/i) ? "(F)" : "(M)"

    label = ZebraPrinter::StandardLabel.new
    label.font_size = 2
    label.font_horizontal_multiplier = 2
    label.font_vertical_multiplier = 2
    label.left_margin = 50
    label.draw_barcode(30,214,0,1,5,15,120,false,"#{self.patient_identifier}")
    label.draw_multi_text("#{self.first_names.titleize}", {})
    label.draw_multi_text("#{self.last_names.titleize}", {})
    label.draw_multi_text("#{self.formatted_pnid} #{self.birthdate_formatted}#{sex}")
    label.print(1)
  end

  private

  def complete_record
    self.patient_identifier = next_identifier() if self.patient_identifier.blank?
    self.fname_namecode = self.first_name.soundex
    self.mname_namecode = self.middle_name.soundex unless self.middle_name.blank?
    self.fathers_name_namecode = self.fathers_name.soundex
    self.mothers_name_namecode = self.mothers_name.soundex
    self.creator = User.current.id
  end

  def next_identifier

    #health_center_id = Location.current_location.site_id

    last_national_id = Patient.order(patient_identifier: :desc).first

    last_national_id_number = last_national_id.patient_identifier rescue "0"

    next_number = (last_national_id_number[1..5].to_i+1).to_s.rjust(5,"0")
    new_national_id_no_check_digit = "P#{next_number}"
    check_digit = calculate_check_digit(next_number)
    new_patient_id = "#{new_national_id_no_check_digit}#{check_digit}"
    return  new_patient_id
  end

end
