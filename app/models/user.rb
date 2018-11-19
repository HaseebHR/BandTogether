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

  has_many :likes_as_liker, class_name: "Like", foreign_key: 'liker_id'
  has_many :liked_users, through: :likes_as_liker, source: :likee
  has_many :likes_as_likee, class_name: "Like", foreign_key: 'likee_id'
  has_many :likers, through: :likes_as_likee, source: :liker

  def matches
    liker_ids       = likers.pluck(:id)
    liked_user_ids  = liked_users.pluck(:id)
    User.where(id: liker_ids).where(id: liked_user_ids)
  end

  def self.from_omniauth(auth)
    user = where(email: auth.info.email).first_or_create do |user|
      user.provider = auth.provider
      user.uid      = auth.uid
      user.imgurl  = auth.image
      user.password = Devise.friendly_token[0,20] unless user.password.present?
      user.save
    end
    user.update(token: auth.credentials.token)
    user
  end
end
