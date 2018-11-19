Rails.application.routes.draw do
  root "profiles#index"
  devise_for :users,
    controllers: {
        omniauth_callbacks: 'users/omniauth_callbacks'
      }
  resources :profiles, only: [:show, :edit, :index, :update]

  resources :users, only: :none do
    resources :user_choices, only: [:create, :index]
  end

end
