class ProfileController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    # Room for the Landing page
  end
  def new
    
  end
  
end
