class UsersController < ApplicationController
  def index
    @users = User.all
    @targeturl = "/"
    render :layout => "menu"
  end

  def new
    @user = User.new
    @targeturl = "/users"
    render :layout => "touch"
  end

  def create

    @user = User.new({:username => params[:user][:username], :password => params[:user][:password],:role =>params[:user][:user_role],
                      :first_name => params[:user][:first_name], :middle_name => params[:user][:middle_name],
                      :fathers_name => params[:user][:fathers_name], :mothers_name => params[:user][:mothers_name]})

    if @user.save
      redirect_to @user
    else
      render 'new', :layout => "touch"
    end

  end

  def edit
    @user = User.find(params[:id])
    @section = "User Editing : #{@user.username}"
    @targeturl = "/users/#{params[:id]}"
    render :layout => "touch"
  end

  def show
    @user = User.find(params[:id])
    @targeturl = "/users"
    render :layout => "menu"
  end

  def update

  end

  def destroy

  end

  def login
    if request.post?
      state = User.authenticate(params[:user]['username'],params[:user]['password'])
      if state
        user = User.find_by_username(params[:user]['username'])
        session[:user_id] = user.id
        User.current = user
        flash[:message] = nil
        redirect_to "/"
      end
      flash[:message] = t("messages.invalid_credentials")
    else
      session[:user_id] = nil
      User.current = nil
    end

  end

  def logout
    session[:user_id] = nil
    User.current = nil
    redirect_to "/login"
  end

  def username_availability
    user = User.find_by_username(params[:search_str])
    render :text => user.blank? ? '' : 'N/A' and return
  end

  def update_user

    @user = User.find(params[:id])
    if params[:section].blank?
      @user.update_attributes(:role =>params[:user][:user_role],:first_name => params[:user][:first_name],
                              :middle_name => params[:user][:middle_name],:fathers_name => params[:user][:fathers_name],
                              :mothers_name => params[:user][:mothers_name])
    else
      @user.update_attributes(:password => params[:user][:password], :salt => nil)
    end

    if @user.save
      redirect_to @user
    end
  end

  def query
    results = []

    users = User.page((params[:page].to_i rescue 1)).per((params[:size].to_i rescue 20)).each

    users.each do |user|

      record = {
          "username" => "#{user.username}",
          "name" => "#{user.fullname}",
          "roles" => "#{user.role}",
          "active" => (user.active rescue false),
          "id" => user.id
      }

      results << record

    end

    render :text => results.to_json

  end

  private

  def user_params
    params.require(:user).permit(:username,:first_name, :middle_name, :role, :fathers_name, :mothers_name,:password)
  end
end
