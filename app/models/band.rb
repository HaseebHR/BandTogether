class Band < ApplicationRecord
  has_many :concerts
  has_many :user_bands
  has_many :users, through: :user_bands

  scope :find_concerts, -> {joins("INNER JOIN concerts ON concerts.band_id = bands.id").select(:id, :date, :location, :url, :imgurl, :name) }
end
