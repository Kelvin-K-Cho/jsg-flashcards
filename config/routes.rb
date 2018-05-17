Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show]

    resource :session, only: [:create, :destroy]

    resources :subjects, only: [:index, :show] do
      resources :topics, only: [:index, :show]
      resources :images, only: [:index, :show]
    end

    resources :topics, only: [:index, :show] do
      resources :questions, only: [:index, :show]
      resources :answers, only: [:index, :show]
      resources :images, only: [:index, :show]
    end

    resources :images, only: [:index, :show]

    resources :labels, only: [:index, :show]

    resources :dailies, only: [:index, :show]

    resources :questions, only: [:index, :show] do
      resources :answers, only: [:index, :show]
    end

    resources :answers, only: [:index, :show]

    resources :suggestions, only: [:index, :show, :create]

    resources :weeks, only: [:index, :show] do
      resources :days, only: [:index, :show]
      resources :topics, only: [:index, :show]
    end

    resources :searches, only: [:index]
  end

  root "static_pages#root"
end
