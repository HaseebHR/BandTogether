Rails.application.routes.draw do
  root "profiles#index"
  devise_for :users,
    controllers: {
        omniauth_callbacks: 'users/omniauth_callbacks'
      }
  resources :profiles, only: [:index, :new]

end
