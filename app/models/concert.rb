class Concert < ApplicationRecord
  belongs_to :band
  has_many :user_choice
  has_many :users, through: :user_choice
end
