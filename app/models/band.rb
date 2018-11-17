class Band < ApplicationRecord
  has_many :concerts
  has_many :user_bands
  has_many :users, through: :user_bands
end
