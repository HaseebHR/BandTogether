class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def spotify
    @user = User.from_omniauth(request.env["omniauth.auth"])
    if !@user.profile
      p = Profile.new
      p.user_id = @user.id
      p.save
    end
    if @user.persisted?
      sign_in_and_redirect @user
    else
      redirect_to new_user_registration_url
    end
  end
 
  def failure
    redirect_to root_path
  end
end
