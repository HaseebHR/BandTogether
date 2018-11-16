class User < ApplicationRecord
  has_one :profile, dependent: :destroy
  has_many :user_bands
  has_many :bands, through: :user_bands
  has_many :user_choices
  has_many :concerts, through: :user_choices
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable
  devise :omniauthable, omniauth_providers: [:spotify]
  serialize :favband, Array
  
  def self.from_omniauth(auth)
    user = where(email: auth.info.email).first_or_create do |user|
      user.provider = auth.provider
      user.uid      = auth.uid
      user.password = Devise.friendly_token[0,20] unless user.password.present?
      user.save
    end
    user.update(token: auth.credentials.token)
    user
  end
end
