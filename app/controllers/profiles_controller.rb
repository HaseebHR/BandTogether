class ProfilesController < ApplicationController
  before_action :set_profile, only: [:edit, :update, :index]
  skip_before_action :authenticate_user!, only: [:index]
  
  def index
    respond_to do |format|
      format.html
      format.json do
        @events = current_user.bands.first.concerts
      render json: {
        events: @events
      }
      end
    end
  end

  def edit

  end

  def update
    @profile.update(profile_params)
    find_events   
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
