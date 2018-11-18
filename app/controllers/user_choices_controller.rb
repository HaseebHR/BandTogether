class UserChoicesController < ApplicationController
  before_action :set_user

  def create
    user_choice = @user.user_choices.find_or_create_by!(user_choice_params)
    render json: user_choice
  end

  def index
    render json: @user.user_choices.map(&:concert_id)
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def user_choice_params
    params.require(:user_choice).permit(:concert_id)
  end

end
