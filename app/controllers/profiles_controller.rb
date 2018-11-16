class ProfilesController < ApplicationController
  before_action :set_profile, only: [:edit, :update, :index]
  skip_before_action :authenticate_user!, only: [:index]
  
  def index
    @events ||= find_events
  end

  def edit

  end

  def update
    @profile.update(profile_params)
   
    redirect_to root_path
  end

  private

  def set_profile
    @profile = Profile.find(current_user.profile.id) if current_user
  end
  def find_events
    @profile&.user&.bands&.each do |band|
      TicketmasterClient.new(@profile.city, band, @profile.user).get_events
    end
  end
  
  def profile_params
    params.require(:profile).permit(:age, :name, :city, :gender, :min_age, :max_age)
  end
end
