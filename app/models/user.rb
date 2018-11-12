class User < ApplicationRecord
  has_one :profile, dependent: :destroy 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  devise :omniauthable, omniauth_providers: [:spotify]

  def self.from_omniauth(auth)
      if user = where(email: auth.info.email).first
        user.update(token: auth.credentials.token)
      else  
        user.provider = auth.provider
        user.uid      = auth.uid
        user.password = Devise.friendly_token[0,20] unless user.password.present?
      end
  end
end
