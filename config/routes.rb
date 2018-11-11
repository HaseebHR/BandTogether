Rails.application.routes.draw do
  root "profile#index"
  devise_for :users,
    controllers: {
        omniauth_callbacks: 'users/omniauth_callbacks'
      }
  resources :profile, only: [:index, :new]

end
