class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
    @section = "User Registration"
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

  end

  def show
    @user = User.find(params[:id])
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
        redirect_to "/"
      end
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

  private

  def user_params
    params.require(:user).permit(:username,:first_name, :middle_name, :role, :fathers_name, :mothers_name,:password)
  end
end
