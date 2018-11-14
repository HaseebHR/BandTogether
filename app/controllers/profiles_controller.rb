class ProfilesController < ApplicationController
  before_action :set_profile, only: [:edit, :update, :index]
  # skip_before_action :authenticate_user!, only: [:index]

  def index

  end

  def edit

  end

  def update
    @profile.update(profile_params)
    redirect_to root_path
  end

  private

    def set_profile
      @profile = Profile.find(current_user.profile.id)
    end

    def profile_params
      params.require(:profile).permit(:age, :name, :zip, :gender, :min_age, :max_age)
    end
end
