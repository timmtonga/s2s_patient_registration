class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :check_logged_in, :except => ['login','logout']

  def print_and_redirect(print_url, redirect_url, message = t("messages.printing_wait"), show_next_button = false, patient_id = nil)
    @print_url = print_url
    @redirect_url = redirect_url
    @message = message
    @show_next_button = show_next_button
    @patient_id = patient_id
    render :layout => nil
  end

  def export_i18n_messages
    SimplesIdeias::I18n.export! if Rails.env.development?
  end

  protected

  def check_logged_in

    if session[:user_id].blank?
      respond_to do |format|
        format.html { redirect_to "/login" }
      end
    elsif not session[:user_id].blank?
      User.current = User.find(session[:user_id])
    end
  end

end
