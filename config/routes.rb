# frozen_string_literal: true

Rails.application.routes.draw do
  resources :securities
  resources :portfolios
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
