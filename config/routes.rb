Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :topics, only: [:index, :show] do
      resources :subjects, only: [:index, :show]
    end
    resources :subjects, only: [:index, :show] do
      resources :questions, only: [:index, :show]
    end
    resources :questions, only: [:index, :show] do
      resources :answers, only: [:index, :show]
    end
  end

  root "static_pages#root"
end
