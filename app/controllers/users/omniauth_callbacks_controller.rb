class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def spotify
    @user = User.from_omniauth(request.env["omniauth.auth"])
    response = HTTParty.get(
                "https://api.spotify.com/v1/me/top/artists",
                headers: { "Authorization" => "Bearer #{@user.token}"}
              )
    bands = JSON.parse(response.body)["items"].map{|item| item["name"]}
    bands.each do |artist_name|
      @user.bands.find_or_create_by(name: artist_name)
    end
    if !@user.profile
      p = Profile.new
      p.user_id = @user.id
      p.save
    end
    if @user.persisted?
      sign_in @user
      if current_user.profile.nil?
        redirect_to edit_profile_path current_user.profile
      else
        redirect_to root_path
      end
    else
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to root_path
  end
end
