Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :planets

  # resources :locations

  resources :planets do
    resources :locations
  end
end
